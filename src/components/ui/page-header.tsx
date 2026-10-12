import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/layout/container";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  local?: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, description, local, children }: PageHeaderProps) {
  return (
    <header className="border-b border-ink">
      <Container className="grid gap-10 pb-12 pt-14 sm:pb-16 sm:pt-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="rise-in font-mono text-xs uppercase tracking-[0.18em] text-sindoor">{label}</p>
          <h1 style={{ "--delay": "80ms" } as CSSProperties} className="rise-in mt-5 font-display text-4xl leading-[1.02] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p style={{ "--delay": "180ms" } as CSSProperties} className="rise-in mt-6 max-w-2xl text-lg leading-relaxed text-kattha">{description}</p>
          ) : null}
          {children}
        </div>
        {local ? (
          <p
            lang="hi"
            className="hidden font-display text-7xl leading-none text-sindoor/15 lg:col-span-4 lg:block lg:self-center lg:text-right lg:text-8xl"
            aria-hidden
          >
            {local}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
