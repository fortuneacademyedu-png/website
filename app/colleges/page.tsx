import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { getSiteContent } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default async function CollegesPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_40%,#ffffff_100%)]">
      <SiteHeader />

      <section className="w-full px-4 pb-8 pt-14 sm:px-6 lg:px-10">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Top Colleges</h1>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">
          Explore top colleges in Bangalore with brief profile insights to help you compare reputation, campus experience, and admission fit.
          Our team of best college counsellors supports you in shortlisting the right institution based on your goals, budget, and preferred program.
        </p>
      </section>

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.colleges.map((college) => (
            <Link
              key={college.name}
              href="/contact"
              className="block rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <article>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                  {college.hasLogo ? (
                    <Image src={college.logo} alt={college.name} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-slate-500">{initials(college.name)}</span>
                  )}
                </div>
                <p className="mt-4 text-base font-semibold leading-6 text-slate-900">{college.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{college.intro}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-lg shadow-slate-300/40">
          <h2 className="text-2xl font-semibold tracking-tight">Need college shortlisting support?</h2>
          <p className="mt-2 text-sm text-slate-200">Book a consultation and get a personalized shortlist based on your profile and goals.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900">
            Book Free Counseling
          </Link>
        </div>
      </section>

      <WhatsAppFab />
      <SiteFooter />
    </main>
  );
}
