import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buyerTracks } from "@/lib/site-config";
import { ArrowRight } from "@/lib/icons";

export function BuyerTracks() {
  return (
    <Section tone="deep">
      <SectionHeading
        index="02"
        label="Who we supply"
        title="One supplier for buyers in India and abroad."
        description="The crafts are the same. The paperwork, pricing, and shipping are set up for where you are."
      />

      <div className="grid border border-ink bg-paper md:grid-cols-2">
        {buyerTracks.map((track, i) => (
          <article
            key={track.id}
            className={`flex flex-col p-8 sm:p-10 ${i === 0 ? "border-b border-ink md:border-b-0 md:border-r" : ""}`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-sindoor">{track.label}</p>
            <h3 className="mt-4 font-display text-3xl leading-tight">{track.title}</h3>
            <ul className="mt-8 flex-1 border-b border-ink/15">
              {track.points.map((point, j) => (
                <li key={point} className="flex gap-5 border-t border-ink/15 py-3.5 text-sm">
                  <span className="font-mono text-xs text-kattha">{String(j + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={`/partner?market=${track.id}`}
              variant={i === 0 ? "primary" : "accent"}
              className="mt-8 self-start"
            >
              {i === 0 ? "Start a domestic enquiry" : "Start an export enquiry"}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
