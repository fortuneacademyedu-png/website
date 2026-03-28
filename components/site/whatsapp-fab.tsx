import Link from "next/link";

const whatsappHref = "https://wa.me/919886234079";

export function WhatsAppFab() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-300/60 transition hover:scale-105 hover:bg-emerald-600 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.1 17.2c-.3-.2-1.7-.9-2-.9s-.5-.1-.7.2-.8.9-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.2-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z" />
        <path d="M16 3.1c-7.1 0-12.9 5.7-12.9 12.8 0 2.3.6 4.6 1.8 6.5L3 28.9l6.7-1.8c1.8 1 4 1.6 6.2 1.6 7.1 0 12.9-5.7 12.9-12.8S23.1 3.1 16 3.1Zm0 23.4c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 .9.9-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.7 0-6 4.9-10.9 11-10.9s11 4.9 11 10.9-4.9 10.8-10.9 10.8Z" />
      </svg>
    </Link>
  );
}
