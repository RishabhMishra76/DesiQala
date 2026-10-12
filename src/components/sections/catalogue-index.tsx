import Link from "next/link";
import { CraftThumb } from "@/components/ui/craft-plate";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { crafts, getCraftPlateNumber } from "@/lib/crafts";
import { ArrowRight, ArrowUpRight } from "@/lib/icons";

export function CatalogueIndex() {
  return (
    <Section>
      <SectionHeading
        index="01"
        label="The catalogue"
        title={`${crafts.length} artforms, each sourced from the region that made it famous.`}
        description="Every line comes with its region, technique, and materials written down — ready for your product pages and swing tags."
        action={
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm font-semibold decoration-sindoor decoration-2 underline-offset-8 hover:underline"
          >
            View all collections
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        }
      />

      <ol className="border-b border-ink">
        {crafts.map((craft, index) => (
          <li key={craft.slug}>
            <Link
              href={`/collections/${craft.slug}`}
              aria-label={`${craft.title}, ${craft.technique}`}
              className="group grid grid-cols-[2.25rem_4.75rem_minmax(0,1fr)_2.5rem] items-center gap-3 border-t border-ink py-4 transition-colors hover:bg-paper-deep sm:grid-cols-[2.5rem_5.25rem_minmax(0,1fr)_2.5rem] sm:gap-4 md:grid-cols-[2.5rem_5.75rem_minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1.2fr)_2.5rem] md:gap-4 md:px-3"
            >
              <span className="font-mono text-xs text-kattha">
                {getCraftPlateNumber(craft.slug)}
              </span>
              <CraftThumb craft={craft} priority={index < 4} />
              <span className="min-w-0">
                <span className="block font-display text-2xl leading-tight decoration-sindoor decoration-1 underline-offset-4 group-hover:underline sm:text-3xl">
                  {craft.title}
                </span>
                <span lang="hi" className="font-display text-base text-sindoor">
                  {craft.nameLocal}
                </span>
              </span>
              <span className="hidden text-sm md:block">
                {craft.state}
                <span className="block text-kattha">{craft.region}</span>
              </span>
              <span className="hidden text-sm text-kattha md:block">
                {craft.technique}
              </span>
              <span className="flex justify-end">
                <span className="flex size-10 items-center justify-center border border-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
