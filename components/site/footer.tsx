import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="grid w-full gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image src="/images/logo.png" alt="Fortune Academy Logo" fill className="object-contain p-2" sizes="96px" />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">Fortune Academy</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">Trusted counseling and direct admission guidance for top colleges in Bangalore.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick Links</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/colleges">Colleges</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Naren Choudary (Managing Director)</p>
            <p>91 98862 34079</p>
            <p>fortuneacademyedu@gmail.com</p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Follow Us</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href="https://www.instagram.com/fortuneacademyedu?igsh=MTJjdWFrMW9iazRhYw=="
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61575198203025"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Legal & Help</h4>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/cancellation-policy">Cancellation Policy</Link>
            <Link href="/grievance-redressal">Grievance Redressal</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Fortune Academy. All rights reserved.</div>
    </footer>
  );
}
