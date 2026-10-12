import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PartnerInquiryForm, type BuyerMarket } from "@/components/partner/partner-inquiry-form";
import { PageHeader } from "@/components/ui/page-header";
import { buyerTracks } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wholesale enquiry",
  description:
    "Wholesale, gifting, and private-label enquiries for retailers, designers, and hotels in India and overseas.",
};

const nextSteps = [
  "We reply with matching craft lines and indicative prices.",
  "You approve samples — finish, size, colour, and packing.",
  "We confirm the schedule and produce your order.",
];

function isMarket(value: unknown): value is BuyerMarket {
  return buyerTracks.some((track) => track.id === value);
}

export default async function PartnerPage({ searchParams }: PageProps<"/partner">) {
  const { market, craft } = await searchParams;

  return (
    <>
      <PageHeader
        label="Wholesale"
        title="Request a quote."
        description="Tell us about your business and the crafts you want to stock. We handle samples, quantities, invoicing, and shipping."
        local="थोक"
      />

      <Container className="grid gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <aside className="space-y-10 lg:col-span-4">
          {buyerTracks.map((track) => (
            <div key={track.id}>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-sindoor">{track.label}</h2>
              <ul className="mt-4 border-b border-ink/15">
                {track.points.map((point) => (
                  <li key={point} className="border-t border-ink/15 py-3 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border border-ink bg-paper-deep p-6">
            <h2 className="font-display text-2xl">What happens next</h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed">
                  <span className="font-mono text-xs text-sindoor">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <PartnerInquiryForm
            initialMarket={isMarket(market) ? market : undefined}
            initialCraft={typeof craft === "string" ? craft : undefined}
          />
        </div>
      </Container>
    </>
  );
}
