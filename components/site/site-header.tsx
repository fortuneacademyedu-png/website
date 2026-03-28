"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Colleges", href: "/colleges" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pb-3 pt-3 sm:px-6 lg:px-10">
      <div className="rounded-2xl border border-slate-800/20 bg-[linear-gradient(90deg,#0f172a_0%,#1e293b_55%,#0b1324_100%)] px-4 py-2 text-xs text-white shadow-xl shadow-slate-900/20">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-center font-medium tracking-wide text-slate-100 sm:text-left">Admissions Helpline: 91 98862 34079</p>
          <Link
            href="https://wa.me/919886234079"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-500 px-3 py-1 font-semibold text-white transition hover:bg-emerald-400"
          >
            WhatsApp
          </Link>
        </div>
      </div>

      <nav className="mt-3 rounded-[1.4rem] border border-slate-200/70 bg-white/85 px-4 py-3 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white sm:h-14 sm:w-14">
              <Image src="/images/logo.png" alt="Fortune Academy Logo" fill className="object-contain p-1.5" sizes="56px" priority />
            </span>
            <span className="hidden text-base font-semibold tracking-tight text-slate-900 sm:inline">Fortune Academy</span>
            <span className="text-sm font-semibold tracking-tight text-slate-900 sm:hidden">Fortune Academy</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-base font-semibold transition ${
                  isActive(link.href) ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              {menuOpen ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" />
              )}
            </svg>
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-[linear-gradient(120deg,#0f172a_0%,#1e3a8a_100%)] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-110 sm:px-4 lg:inline-flex"
          >
            Book Free Counseling
          </Link>
        </div>

        {menuOpen ? (
          <div className="mt-3 space-y-2 rounded-2xl border border-slate-200 bg-white p-3 lg:hidden">
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-3 py-2.5 text-base font-semibold transition ${
                  isActive(link.href) ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-xl bg-[linear-gradient(120deg,#0f172a_0%,#1e3a8a_100%)] px-3 py-2.5 text-center text-base font-semibold text-white"
            >
              Book Free Counseling
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
