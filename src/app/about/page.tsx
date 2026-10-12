import type { Metadata } from "next";
import { EnquiryBand } from "@/components/sections/enquiry-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CraftPlate } from "@/components/ui/craft-plate";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpecList } from "@/components/ui/spec-list";
import {
  aboutBeliefs,
  aboutDesk,
  aboutFacts,
  aboutHero,
  aboutLetter,
  aboutMakers,
  aboutMaterials,
  aboutOrigin,
} from "@/lib/about-content";
import { getFeaturedCrafts } from "@/lib/crafts";

export const metadata: Metadata = {
  title: "About us",
  description:
    "DesiQala connects wholesale buyers with Indian artisans — clear origin stories, fair terms, and export support from New Delhi.",
};

export default function AboutPage() {
  const plates = getFeaturedCrafts().slice(0, 4);

  return (
    <>
      <PageHeader
        label={aboutHero.eyebrow}
        title={aboutHero.title}
        description={aboutHero.lede}
        local="परिचय"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-kattha">
              <span className="text-sindoor">01</span> · {aboutOrigin.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">{aboutOrigin.title}</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-kattha lg:col-span-7">
            {aboutOrigin.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-ink" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {plates.map((craft) => (
            <CraftPlate
              key={craft.slug}
              craft={craft}
              size="compact"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-kattha">
              <span className="text-sindoor">02</span> · {aboutDesk.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">{aboutDesk.title}</h2>
            <p className="mt-6 leading-relaxed text-kattha">{aboutDesk.body}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <SpecList
              items={aboutFacts.map((fact) => ({
                label: fact.label,
                value: (
                  <>
                    <span className="block font-display text-2xl leading-tight">{fact.value}</span>
                    <span className="text-kattha">{fact.detail}</span>
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading index="03" label="How we work" title="Four principles we follow on every order." />
        <div className="grid border-t border-ink md:grid-cols-2">
          {aboutBeliefs.map((belief, i) => (
            <article
              key={belief.title}
              className={`border-b border-ink/20 py-10 md:pr-10 ${i % 2 === 1 ? "md:border-l md:pl-10" : ""}`}
            >
              <p className="font-mono text-xs text-sindoor">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-3xl leading-tight">{belief.title}</h3>
              <p className="mt-4 leading-relaxed text-kattha">{belief.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <ProcessSteps index="04" tone="deep" />

      <Section>
        <div className="grid border border-ink lg:grid-cols-2">
          <article className="p-8 sm:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sindoor">{aboutMakers.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05]">{aboutMakers.title}</h2>
            <p className="mt-6 leading-relaxed text-kattha">{aboutMakers.body}</p>
          </article>
          <article className="jaali border-t border-ink bg-neel p-8 text-paper sm:p-12 lg:border-l lg:border-t-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-haldi">{aboutMaterials.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05]">{aboutMaterials.title}</h2>
            <p className="mt-6 leading-relaxed text-paper/80">{aboutMaterials.body}</p>
          </article>
        </div>
      </Section>

      <Section tone="deep">
        <figure className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-sindoor">{aboutLetter.eyebrow}</p>
          <blockquote className="mt-8 space-y-6 font-display text-2xl leading-snug sm:text-3xl">
            {aboutLetter.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </blockquote>
          <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink pt-5 font-mono text-xs uppercase tracking-[0.14em] text-kattha">
            <span className="text-ink">{aboutLetter.signoff}</span>
            <span aria-hidden>·</span>
            <span>{aboutLetter.place}</span>
          </figcaption>
        </figure>
      </Section>

      <EnquiryBand />
    </>
  );
}
