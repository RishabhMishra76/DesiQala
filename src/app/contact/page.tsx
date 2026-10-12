import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Mail, MapPin, Phone, type LucideIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the DesiQala export desk for wholesale enquiries, press, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Talk to the export desk."
        description="For quotes and samples, the wholesale form is the fastest route. For anything else, reach us directly."
        local="संपर्क"
      />

      <Section>
        <div className="grid border border-ink md:grid-cols-3">
          <ContactCell icon={Mail} label="Email">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="underline decoration-sindoor underline-offset-4 hover:text-sindoor"
            >
              {siteConfig.contactEmail}
            </a>
          </ContactCell>
          <ContactCell icon={Phone} label="Phone">
            {siteConfig.contactPhone}
          </ContactCell>
          <ContactCell icon={MapPin} label="Office" last>
            {siteConfig.address}
          </ContactCell>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-kattha">
            Ready to talk quantities? Send a wholesale enquiry and we will reply with options,
            prices, and sample timelines. {siteConfig.responseTime}
          </p>
          <ButtonLink href="/partner" variant="accent" className="shrink-0">
            Request a quote
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}

function ContactCell({
  icon: Icon,
  label,
  last = false,
  children,
}: {
  icon: LucideIcon;
  label: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className={`p-8 ${last ? "" : "border-b border-ink md:border-b-0 md:border-r"}`}>
      <Icon className="size-5 text-sindoor" aria-hidden />
      <h2 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-kattha">{label}</h2>
      <p className="mt-2 font-display text-2xl leading-snug break-words">{children}</p>
    </article>
  );
}
