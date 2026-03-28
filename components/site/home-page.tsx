"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content";
import { ContactForm } from "@/components/site/contact-form";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { SiteHeader } from "@/components/site/site-header";

type Props = {
  content: SiteContent;
};

const riseIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const guidanceSlides = [
  {
    id: "01",
    title: "Management",
    subtitle: "MBA / PGDM"
  },
  {
    id: "02",
    title: "Engineering",
    subtitle: "B.Tech / BE"
  },
  {
    id: "03",
    title: "Medical",
    subtitle: "NEET / MBBS"
  }
];

const guidanceDetails: Record<
  string,
  { heading: string; description: string; bullets: string[] }
> = {
  "01": {
    heading: "Management Admissions (MBA / PGDM)",
    description:
      "Strategic support for management aspirants focusing on profile-fit institutions, specialization alignment, and final decision clarity.",
    bullets: [
      "✦ CAT / MAT / CMAT Pathway Mapping",
      "✦ Program ROI and Fee Benchmarking",
      "✦ Private University Admission Strategy",
      "✦ Profile-Based College Shortlisting",
      "✦ Document & Interview Readiness",
      "✦ Seat Confirmation Planning"
    ]
  },
  "02": {
    heading: "Engineering Admissions (B.Tech / BE)",
    description:
      "End-to-end engineering admission guidance with strong college comparison and branch-level decision support.",
    bullets: [
      "✦ Branch vs Career Outcome Analysis",
      "✦ Counselling and Direct Route Guidance",
      "✦ Institution Comparison Matrix",
      "✦ Placement and Infrastructure Review",
      "✦ Fee, Scholarship & Loan Inputs",
      "✦ Admission Execution Support"
    ]
  },
  "03": {
    heading: "Medical Admissions (NEET UG)",
    description:
      "Comprehensive support for MBBS, BDS, and Allied Health Sciences. Simplifying national level documentation and counselling rounds.",
    bullets: [
      "✦ NEET-Score Based Seat Matrix",
      "✦ MCC (All India Quota) Assistance",
      "✦ State Medical Board Registration",
      "✦ Bond, Stipend & Fee Analysis",
      "✦ Deemed University Seat Strategy",
      "✦ DNB & Clinical Exposure Insights"
    ]
  }
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function HomePageView({ content }: Props) {
  const [activeSlide, setActiveSlide] = useState("03");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const activeGuidance = guidanceDetails[activeSlide];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_45%,#ffffff_100%)]" id="home">
      <SiteHeader />

      <section className="w-full px-4 pb-10 pt-6 sm:px-6 sm:pb-14 lg:px-10 lg:pt-10">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
          <div className="absolute inset-0">
            <Image src="/images/CMR-University-CMRU-Bangalore.jpg" alt="Campus" fill className="object-cover opacity-20" priority sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_55%,rgba(255,255,255,0.84)_100%)]" />

          <div className="relative grid gap-6 px-4 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
            <motion.div {...riseIn}>
              <p className="inline-flex rounded-full border border-slate-300 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                Direct Admission Experts - Bangalore
              </p>

              <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-6xl">
                {content.hero.headline}
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
                {content.hero.subtext}. Get clear shortlists, faster decisions, and complete handholding until enrollment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <Link href="/contact" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:px-7 sm:py-3">
                  {content.hero.primaryCta}
                </Link>
                <Link
                  href="tel:+919886234079"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-[linear-gradient(120deg,#eef2ff_0%,#e0e7ff_100%)] px-5 py-2.5 text-sm font-semibold text-indigo-900 shadow-lg shadow-indigo-200/50 transition hover:brightness-105 sm:px-7 sm:py-3"
                >
                  <span aria-hidden="true">📞</span>
                  Call 91 98862 34079
                </Link>
              </div>

              <div className="mt-2 sm:mt-3">
                <Link
                  href={content.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 sm:px-5 sm:text-sm"
                >
                  WhatsApp for Instant Response
                </Link>
              </div>

              <div className="mt-6 grid gap-2 sm:mt-8 sm:gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Trusted Network</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">16+ Top Colleges</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Coverage</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Engg / Medical / MBA</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">Support</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Transparent Process</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...riseIn} className="self-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
              <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
                <Image src="/images/ramaiya.png" alt="MS Ramaiah Institute of Technology" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 35vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10">
        <motion.div {...riseIn} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Expert Admission Guidance</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Empowering students with precise data-driven counselling and strategic roadmaps for premier institutional admissions.</h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {guidanceSlides.map((slide) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(slide.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      activeSlide === slide.id ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <p className="text-xs font-semibold tracking-[0.14em]">{slide.id}</p>
                    <p className="mt-2 text-base font-semibold">{slide.title}</p>
                    <p className={`text-sm ${activeSlide === slide.id ? "text-slate-200" : "text-slate-500"}`}>{slide.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{activeGuidance.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{activeGuidance.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {activeGuidance.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                  Get Free Counselling
                </Link>
                <Link href={content.contact.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100">
                  WhatsApp Expert
                </Link>
                <Link
                  href="tel:+919606033113"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-[linear-gradient(120deg,#eef2ff_0%,#e0e7ff_100%)] px-4 py-2 text-sm font-semibold text-indigo-900 shadow-lg shadow-indigo-200/50 transition hover:brightness-105"
                >
                  <span aria-hidden="true">📞</span>
                  Call +91 96060 33113
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10">
        <motion.div {...riseIn} className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
            <h3 className="text-lg font-semibold text-slate-900">Career Counseling</h3>
            <p className="mt-2 text-sm text-slate-600">Clear guidance on courses, colleges, and the best path for your profile.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
            <h3 className="text-lg font-semibold text-slate-900">College Shortlisting</h3>
            <p className="mt-2 text-sm text-slate-600">Institution recommendations based on budget, specialization, and outcomes.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
            <h3 className="text-lg font-semibold text-slate-900">Admission Support</h3>
            <p className="mt-2 text-sm text-slate-600">End-to-end assistance from document prep to enrollment completion.</p>
          </article>
        </motion.div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10">
        <motion.div {...riseIn}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Top Colleges</h2>
          <p className="mt-2 text-sm text-slate-600">Trusted institutions where we provide admission guidance.</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.colleges.map((college) => (
              <article key={college.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  {college.hasLogo ? (
                    <Image src={college.logo} alt={college.name} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-slate-500">{initials(college.name)}</span>
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">{college.name}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10">
        <motion.div {...riseIn} className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Why Families Choose Fortune Academy</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {content.whyChooseUs.map((item) => (
                <li key={item} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Admission Process</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.process.map((step, index) => (
                <div key={step} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Step {index + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </motion.div>
      </section>

      <section id="contact" className="w-full px-4 pb-24 pt-12 sm:px-6 lg:px-10">
        <motion.div {...riseIn} className="grid gap-7 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/60 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{content.contact.heading}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Share your course interest and we’ll recommend the best admission path for your profile.</p>
            <p className="mt-5 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Address:</span> {content.contact.address}
            </p>
          </div>

          <ContactForm buttonLabel={content.contact.heading} />
        </motion.div>
      </section>

      {isLeadModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/30 bg-white p-5 shadow-2xl shadow-slate-900/30 sm:p-7">
            <button
              type="button"
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              aria-label="Close consultation popup"
            >
              ×
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Free Counselling</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Get Personalized Admission Guidance</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Tell us your course preference and we will help you shortlist the right colleges quickly.</p>

            <div className="mt-4">
              <ContactForm buttonLabel="Book Free Consultation" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={content.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
              >
                WhatsApp Expert
              </Link>
              <button
                type="button"
                onClick={() => setIsLeadModalOpen(false)}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link href="/contact" className="block w-full rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">
          {content.nav.cta}
        </Link>
      </div>

      <WhatsAppFab />
      <SiteFooter />
    </main>
  );
}
