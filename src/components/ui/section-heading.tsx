import type { ReactNode } from "react";

type SectionHeadingProps = {
  index?: string;
  label: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  dark?: boolean;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  action,
  dark = false,
}: SectionHeadingProps) {
  const subtle = dark ? "text-paper/70" : "text-kattha";

  return (
    <div className="mb-12 sm:mb-16">
      <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] ${subtle}`}>
        {index ? <span className={dark ? "text-haldi" : "text-sindoor"}>{index}</span> : null}
        <span>{label}</span>
        <span className="h-px flex-1 bg-current opacity-30" aria-hidden />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 className="font-display text-4xl leading-[1.05] text-balance sm:text-5xl lg:col-span-7">
          {title}
        </h2>
        {description || action ? (
          <div className="space-y-5 lg:col-span-5 lg:pb-1">
            {description ? (
              <p className={`text-base leading-relaxed ${subtle}`}>{description}</p>
            ) : null}
            {action}
          </div>
        ) : null}
      </div>
    </div>
  );
}
