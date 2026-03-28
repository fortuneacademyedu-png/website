import Link from "next/link";
import type { StandalonePage } from "@/lib/standalone-pages";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { getSiteContent } from "@/lib/content";
import Image from "next/image";

export async function StandalonePageView({ page }: { page: StandalonePage }) {
  const content = await getSiteContent();
  const quickPoints = page.blocks.flatMap((block) => block.points).slice(0, 6);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f9fbff_0%,#eef5ff_30%,#ffffff_100%)]">
      <SiteHeader />

      <section className="w-full px-4 pb-10 pt-8 sm:px-6 lg:px-10 lg:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
          <div className="absolute inset-0">
            <Image src="/images/CMR-University-CMRU-Bangalore.jpg" alt="Campus" fill className="object-cover opacity-15" priority sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_58%,rgba(255,255,255,0.85)_100%)]" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Fortune Academy
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{page.title}</h1>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-lg">{page.intro}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={page.ctaHref} className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                  {page.ctaLabel}
                </Link>
                <Link
                  href={content.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  WhatsApp Expert
                </Link>
              </div>
            </div>

            <aside className="self-start rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-lg shadow-slate-200/40">
              <h2 className="text-lg font-semibold text-slate-900">Quick Highlights</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {quickPoints.map((point) => (
                  <li key={point} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Admissions Helpline</p>
                <p className="mt-1 text-sm font-semibold">{content.contact.phone}</p>
                <p className="mt-1 text-xs text-slate-300">{content.contact.email}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {page.blocks.map((block) => (
            <article key={block.heading} className="rounded-3xl border border-white/70 bg-white p-7 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{block.heading}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {block.points.map((point) => (
                  <li key={point} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 px-7 py-8 text-white shadow-lg shadow-slate-300/40">
          <h3 className="text-2xl font-semibold tracking-tight">Need Personalized Admission Help?</h3>
          <p className="mt-2 text-sm text-slate-200">Get a clear action plan from our advisors with no confusion and no delay.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={page.ctaHref} className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              {page.ctaLabel}
            </Link>
            <Link
              href={content.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />
      <SiteFooter />
    </main>
  );
}
