import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

export type SectionTone = "paper" | "deep" | "ink" | "neel";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
};

const tones: Record<SectionTone, string> = {
  paper: "",
  deep: "bg-paper-deep",
  ink: "jaali bg-ink text-paper",
  neel: "jaali bg-neel text-paper",
};

export function Section({ children, className = "", id, tone = "paper" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
