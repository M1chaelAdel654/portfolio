import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
