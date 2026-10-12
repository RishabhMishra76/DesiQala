import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SpecList } from "@/components/ui/spec-list";
import { ArrowRight } from "@/lib/icons";

const eras = [
  {
    label: "Ancient lineages",
    value: "Lost-wax Dhokra, temple Pattachitra, and Mithila painting go back many centuries.",
  },
  {
    label: "Royal courts",
    value: "Bidri inlay, Jaipur blue pottery, and court ateliers refined techniques still used today.",
  },
  {
    label: "Today",
    value: "The same hand methods, adapted for modern homes, hotels, and stores.",
  },
];

export function HeritageBand() {
  return (
    <Section tone="neel">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-haldi">03 · Why it matters</p>
          <p
            lang="hi"
            className="mt-6 font-display text-[clamp(4rem,22vw,10rem)] leading-[0.9] text-haldi"
            aria-hidden
          >
            कला
          </p>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/75">
            <span className="font-semibold text-paper">Qala</span> means art in many Indian
            languages. Our name is a promise that the craft — and the people behind it —
            stay at the centre of every order.
          </p>
        </div>
        <div className="lg:col-span-7">
          <blockquote className="font-display text-3xl leading-snug text-balance sm:text-4xl">
            “A Madhubani fish, a Jaipur glaze, a Bastar bell — each one carries the name of
            a place and the hands that keep it alive.”
          </blockquote>
          <div className="mt-12">
            <SpecList items={eras} dark />
          </div>
          <ButtonLink href="/heritage" variant="outlineOnDark" className="mt-10">
            Read the heritage story
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
