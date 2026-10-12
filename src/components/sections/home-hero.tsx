import type { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { crafts } from "@/lib/crafts";
import { ArrowRight } from "@/lib/icons";

const ledger = [
  { label: "Craft lines", value: `${crafts.length} traditions` },
  { label: "We supply", value: "Retail, design, hotels, gifting" },
  { label: "Markets", value: "India & export" },
];

export function HomeHero() {
  return (
    <section className="border-b border-ink">
      <Container className="grid gap-14 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="flex flex-col lg:col-span-7">
          <p className="rise-in font-mono text-xs uppercase tracking-[0.18em] text-sindoor">
            Wholesale handicrafts ·{" "}
            <span lang="hi" className="font-display text-sm normal-case tracking-normal">
              हाथ से बना
            </span>
          </p>
          <h1
            style={{ "--delay": "80ms" } as CSSProperties}
            className="rise-in mt-6 font-display text-[clamp(2.125rem,9vw,3.25rem)] leading-[0.98] text-balance sm:text-7xl xl:text-[5.5rem]"
          >
            Indian crafts, <em className="text-sindoor">made by hand,</em> supplied wholesale.
          </h1>
          <p
            style={{ "--delay": "180ms" } as CSSProperties}
            className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-kattha"
          >
            We work directly with artisan clusters across India and supply stores,
            designers, hotels, and gifting teams — at home and overseas.
          </p>
          <div
            style={{ "--delay": "260ms" } as CSSProperties}
            className="rise-in mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/partner" variant="accent">
              Request a quote
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/collections" variant="outline">
              Browse the catalogue
            </ButtonLink>
          </div>

          <dl className="mt-14 grid border-t border-ink sm:grid-cols-3 lg:mt-16">
            {ledger.map((item) => (
              <div
                key={item.label}
                className="border-b border-ink/20 py-5 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-6"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-2xl leading-tight">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure
          style={{ "--delay": "200ms" } as CSSProperties}
          className="rise-in lg:col-span-5 lg:col-start-8"
        >
          <div className="border border-ink bg-paper-deep p-2">
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[764/1024]">
              <Image
                src="/hero/artisans-courtyard.jpg"
                alt="Artisans at work in a courtyard — painting, pottery, woodwork, and block printing."
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
            Artisan clusters · India
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
