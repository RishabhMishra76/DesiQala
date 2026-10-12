import type { ReactNode } from "react";

type SpecListProps = {
  items: { label: string; value: ReactNode }[];
  dark?: boolean;
};

export function SpecList({ items, dark = false }: SpecListProps) {
  return (
    <dl className={`border-b ${dark ? "border-paper/25" : "border-ink/20"}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className={`grid gap-1 border-t py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6 ${
            dark ? "border-paper/25" : "border-ink/20"
          }`}
        >
          <dt
            className={`font-mono text-[11px] uppercase tracking-[0.14em] sm:pt-0.5 ${
              dark ? "text-paper/60" : "text-kattha"
            }`}
          >
            {item.label}
          </dt>
          <dd className="text-sm leading-relaxed">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
