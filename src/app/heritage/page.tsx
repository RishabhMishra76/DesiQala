import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryBand } from "@/components/sections/enquiry-band";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { crafts, heritageClusters } from "@/lib/crafts";

export const metadata: Metadata = {
  title: "Heritage",
  description:
    "The story behind Indian handicrafts — from ancient lineages and royal courts to the workshops that supply buyers today.",
};

const timeline = [
  {
    period: "Many centuries of making",
    detail:
      "Metal casting, scroll painting, and folk storytelling grew up across kingdoms and villages. Each region developed its own motifs, tools, and rituals.",
  },
  {
    period: "Royal workshops",
    detail:
      "Mughal, Nawabi, and Rajput courts supported embroidery, ceramics, and painting. Many techniques you see today were refined in royal karkhanas (workshops).",
  },
  {
    period: "After independence",
    detail:
      "Co-operatives and design institutes helped revive crafts that were dying out. Indian artisans began supplying hotels, museum shops, and designers worldwide.",
  },
  {
    period: "DesiQala today",
    detail:
      "We record where each piece comes from, pay fairly, and give you the craft story in plain words — so your customers understand what they are buying.",
  },
];

export default function HeritagePage() {
  return (
    <>
      <PageHeader
        label="Heritage"
        title="India’s craft legacy, told honestly."
        description="For buyers, authenticity is part of the product. Here is the short history behind the crafts we supply — grounded in real regions, techniques, and living artisans."
        local="विरासत"
      />

      <Section>
        <SectionHeading index="01" label="Timeline" title="How these crafts reached your shelf." />
        <ol className="border-b border-ink">
          {timeline.map((item, index) => (
            <li key={item.period} className="grid gap-4 border-t border-ink py-8 md:grid-cols-12 md:gap-8">
              <span className="font-display text-5xl leading-none text-sindoor md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl leading-tight md:col-span-4">{item.period}</h3>
              <p className="leading-relaxed text-kattha md:col-span-6">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionHeading
          index="02"
          label="Regions"
          title="A map of craft clusters."
          description="Our catalogue covers several states and grows as we add new artisan partners."
        />
        <div className="grid border border-ink bg-paper sm:grid-cols-2">
          {heritageClusters.map((region, i) => {
            const regionCrafts = crafts.filter((c) => c.heritageCluster === region.id);
            const isLastRowSingle = i === heritageClusters.length - 1 && heritageClusters.length % 2 === 1;
            return (
              <article
                key={region.id}
                className={`border-ink p-8 not-last:border-b sm:not-last:border-b-0 sm:odd:border-r ${isLastRowSingle ? "sm:col-span-2" : ""} ${i < heritageClusters.length - (heritageClusters.length % 2 || 2) ? "sm:border-b" : ""}`}
              >
                <h3 className="font-display text-3xl">{region.name}</h3>
                <ul className="mt-6 space-y-3">
                  {regionCrafts.map((craft) => (
                    <li key={craft.slug} className="flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3">
                      <Link
                        href={`/collections/${craft.slug}`}
                        className="text-sm font-medium decoration-sindoor underline-offset-4 hover:underline"
                      >
                        {craft.title}
                      </Link>
                      <span lang="hi" className="font-display text-sindoor">
                        {craft.nameLocal}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <EnquiryBand title="Want the full story for your buyers? We’ll share it with every order." />
    </>
  );
}
