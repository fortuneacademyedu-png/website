import Link from "next/link";
import { ContactForm } from "@/components/site/contact-form";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { getSiteContent } from "@/lib/content";

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_40%,#ffffff_100%)]">
      <SiteHeader />

      <section className="w-full px-4 pb-20 pt-14 sm:px-6 lg:px-10">
        <div className="grid gap-7 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/60 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Contact Fortune Academy
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{content.contact.heading}</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">Speak directly with our counseling team for college shortlisting, direct admissions support, and documentation guidance.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Contact Person:</span> {content.contact.person}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span> {content.contact.phone}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {content.contact.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Address:</span> {content.contact.address}
              </p>
            </div>

            <Link
              href={content.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              Chat on WhatsApp
            </Link>
          </div>

          <ContactForm buttonLabel={content.contact.heading} />
        </div>
      </section>

      <WhatsAppFab />
      <SiteFooter />
    </main>
  );
}
