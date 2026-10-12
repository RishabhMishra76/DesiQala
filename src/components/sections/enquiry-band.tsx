import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SpecList } from "@/components/ui/spec-list";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "@/lib/icons";

type EnquiryBandProps = {
  title?: string;
};

export function EnquiryBand({
  title = "Tell us what you need. We’ll start with samples.",
}: EnquiryBandProps) {
  return (
    <Section>
      <div className="grid gap-12 border border-ink bg-paper-deep p-8 sm:p-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-sindoor">Trade enquiries</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-balance sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-kattha">
            Share your market, the crafts you are interested in, and rough quantities. We
            will reply with options, indicative prices, and sample timelines.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/partner" variant="accent">
              Request a quote
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact the export desk
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-5 lg:self-end">
          <SpecList
            items={[
              {
                label: "Email",
                value: (
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="underline decoration-sindoor underline-offset-4"
                  >
                    {siteConfig.contactEmail}
                  </a>
                ),
              },
              { label: "Phone", value: siteConfig.contactPhone },
              { label: "Office", value: siteConfig.address },
              { label: "Reply time", value: siteConfig.responseTime },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
