import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
