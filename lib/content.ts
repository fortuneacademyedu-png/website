import { promises as fs } from "node:fs";
import path from "node:path";

export type SiteContent = {
  business: {
    name: string;
    domain: string;
    tagline: string;
  };
  nav: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
  hero: {
    headline: string;
    subtext: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    trustLine: string;
  };
  courses: Array<{ title: string }>;
  services: Array<{ title: string }>;
  colleges: Array<{ name: string; logo: string; hasLogo: boolean }>;
  whyChooseUs: string[];
  process: string[];
  contact: {
    heading: string;
    phone: string;
    email: string;
    person: string;
    address: string;
    whatsapp: string;
  };
};

const instructionsPath = path.join(process.cwd(), "instructions.md");

function sectionSlice(source: string, start: string, end: string) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return "";
  }
  return source.slice(startIndex, endIndex);
}

function bulletLines(section: string) {
  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim());
}

function readQuotedItem(section: string, label: string) {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`- ${escapedLabel}:\\s*"([^"]+)"`);
  const match = section.match(regex);
  return match?.[1]?.trim() ?? "";
}

function makeLogoPath(name: string) {
  const explicitLogoMap: Record<string, string> = {
    "RV College of Engineering": "/images/rv.png",
    "BMS College of Engineering": "/images/BMS.png",
    "MS Ramaiah Institute of Technology": "/images/ramaiya.png",
    "New Horizon College of Engineering": "/images/newhorizon.png",
    "Akash Institute": "/images/akash.png",
    "Acharya Institute": "/images/acharya.PNG",
    "Atria Institute of Technology": "/images/atria.png",
    "Vyasa Institute": "/images/vyasa.png",
    "CMR Institute of Technology": "/images/CMR-University-CMRU-Bangalore.jpg",
    "Dayananda Sagar Academy of Technology (Kanakapura Road)": "/images/dayananad sagar kanakapura.png",
    "Dayananda Sagar College of Engineering (Kumaraswamy Layout)": "/images/dayanand sagar kumar swamy layout.png",
    "Presidency University": "/images/Presidency.png",
    "Reva University": "/images/reva.png",
    "AMC Engineering College": "/images/AMC.png",
    "Nitte Meenakshi Institute of Technology": "/images/nitte menakshi.png",
    "SRM Vishveshwarya Institute of Technology": "/images/vishveshwara clg.png"
  };

  if (explicitLogoMap[name]) {
    return explicitLogoMap[name];
  }

  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `/images/${slug}.svg`;
}

async function fileExists(relativePath: string) {
  const cleanedPath = relativePath.replace(/^\/+/, "");
  const absolutePath = path.join(process.cwd(), "public", cleanedPath);
  try {
    await fs.access(absolutePath);
    return true;
  } catch {
    return false;
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  const source = await fs.readFile(instructionsPath, "utf8");

  const businessLine = source.match(/Business Name:\n([^\n]+)/)?.[1]?.trim() ?? "";
  const businessMatch = businessLine.match(/^(.*)\s+\((.*)\)$/);
  const businessName = businessMatch?.[1]?.trim() ?? businessLine;
  const domain = businessMatch?.[2]?.trim() ?? "";

  const contactSection = sectionSlice(source, "Contact Details (use exactly):", "Colleges (display prominently as trust section/grid):");
  const contactDetails = Object.fromEntries(
    bulletLines(contactSection).map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim().toLowerCase(), rest.join(":").trim()];
    })
  );
  const phoneRaw = contactDetails["phone"] ?? "";
  const whatsappDigits = phoneRaw.replace(/\D/g, "").slice(0, 12);

  const collegesSection = sectionSlice(source, "Colleges (display prominently as trust section/grid):", "Style:");
  const collegeNames = bulletLines(collegesSection)
    .filter((line) => !line.toLowerCase().includes("images will be"))
    .map((name) => ({ name, logo: makeLogoPath(name) }));
  const colleges = await Promise.all(
    collegeNames.map(async (item) => ({
      ...item,
      hasLogo: await fileExists(item.logo)
    }))
  );

  const navbarSection = sectionSlice(source, "1. Navbar", "2. Hero Section");
  const navLinksText = bulletLines(navbarSection).find((line) => line.startsWith("Links:")) ?? "";
  const navLinks = navLinksText
    .replace("Links:", "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((label) => ({ label, href: `#${label.toLowerCase()}` }));

  const heroSection = sectionSlice(source, "2. Hero Section", "3. Courses Section");
  const trustLine = heroSection.match(/Add trust line:\s*"([^"]+)"/)?.[1]?.trim() ?? "";

  const coursesSection = sectionSlice(source, "3. Courses Section", "4. Services Section");
  const courses = bulletLines(coursesSection)
    .filter((line) => !line.toLowerCase().includes("display as"))
    .map((title) => ({ title }));

  const servicesSection = sectionSlice(source, "4. Services Section", "5. Top Colleges Section");
  const services = bulletLines(servicesSection)
    .filter((line) => !line.toLowerCase().includes("display as"))
    .map((title) => ({ title }));

  const whySection = sectionSlice(source, "6. Why Choose Us", "7. Process Section");
  const whyChooseUs = bulletLines(whySection);

  const processSection = sectionSlice(source, "7. Process Section", "8. Contact Section (HIGH PRIORITY)");
  const process = bulletLines(processSection).map((line) => {
    const [, text] = line.split(":");
    return text?.trim() ?? line.trim();
  });

  const contactFormSection = sectionSlice(source, "8. Contact Section (HIGH PRIORITY)", "Form Handling:");
  const contactHeading = readQuotedItem(contactFormSection, "Strong CTA");

  return {
    business: {
      name: businessName,
      domain,
      tagline: trustLine
    },
    nav: {
      links: navLinks,
      cta: readQuotedItem(navbarSection, "CTA")
    },
    hero: {
      headline: readQuotedItem(heroSection, "Headline"),
      subtext: readQuotedItem(heroSection, "Subtext"),
      primaryCta: readQuotedItem(heroSection, "CTA"),
      primaryHref: "#contact",
      secondaryCta: readQuotedItem(heroSection, "Secondary CTA"),
      secondaryHref: "#colleges",
      trustLine
    },
    courses,
    services,
    colleges,
    whyChooseUs,
    process,
    contact: {
      heading: contactHeading,
      phone: phoneRaw,
      email: "info@fortuneacademyedu.com",
      person: contactDetails["name"] ?? "",
      address: contactDetails["address"] ?? "",
      whatsapp: `https://wa.me/${whatsappDigits}`
    }
  };
}
