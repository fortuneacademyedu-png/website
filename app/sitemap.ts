import type { MetadataRoute } from "next";

const siteUrl = "https://fortuneacademyedu.com";

const routes = [
  "/",
  "/about",
  "/courses",
  "/colleges",
  "/services",
  "/contact",
  "/loan-assistance",
  "/channel-partners",
  "/counselling-registration",
  "/rvce-engineering-admission-2026",
  "/christ-admission-guidance-2026",
  "/ramaiah-admission-guidance-2026",
  "/jain-admission-guidance-2026",
  "/mba-admission-guidance-2026",
  "/nri-quota-engineering-admissions-2026",
  "/education-consultant-sanjay-nagar-bangalore",
  "/colleges/engineering-colleges",
  "/colleges/medical-colleges",
  "/colleges/dental-colleges",
  "/colleges/architecture-colleges",
  "/colleges/management-colleges",
  "/colleges/management-colleges/jain-university",
  "/privacy-policy",
  "/terms-of-service",
  "/terms-and-conditions",
  "/refund-policy",
  "/cancellation-policy",
  "/cookie-policy",
  "/disclaimer",
  "/grievance-redressal",
  "/faq"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
