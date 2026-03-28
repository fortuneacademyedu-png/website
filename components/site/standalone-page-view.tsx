import Link from "next/link";
import type { StandalonePage } from "@/lib/standalone-pages";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export function StandalonePageView({ page }: { page: StandalonePage }) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f9fbff_0%,#eef5ff_30%,#ffffff_100%)]">
      <SiteHeader />

      <section className="w-full px-4 pb-12 pt-14 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-xl shadow-slate-200/60 backdrop-blur">
          <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            Fortune Academy
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">{page.intro}</p>
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
          <Link href={page.ctaHref} className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            {page.ctaLabel}
          </Link>
        </div>
      </section>

      <WhatsAppFab />
      <SiteFooter />
    </main>
  );
}
