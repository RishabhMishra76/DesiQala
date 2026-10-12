import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { CraftPlate } from "@/components/ui/craft-plate";
import { SpecList } from "@/components/ui/spec-list";
import { crafts, getCraftBySlug, getCraftPlateNumber } from "@/lib/crafts";
import { ArrowRight } from "@/lib/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return crafts.map((craft) => ({ slug: craft.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const craft = getCraftBySlug(slug);
  if (!craft) return { title: "Collection" };

  return {
    title: craft.title,
    description: craft.shortDescription,
    openGraph: {
      title: craft.title,
      description: craft.shortDescription,
      images: [{ url: craft.image }],
    },
  };
}

export default async function CraftDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const craft = getCraftBySlug(slug);
  if (!craft) notFound();

  const plate = getCraftPlateNumber(craft.slug);
  const others = crafts.filter((c) => c.slug !== craft.slug).slice(0, 3);

  return (
    <>
      <Container className="py-10 sm:py-14">
        <nav
          className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kattha"
          aria-label="Breadcrumb"
        >
          <Link href="/collections" className="hover:text-sindoor">
            Collections
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{craft.title}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="border border-ink bg-paper-deep p-3 lg:sticky lg:top-36">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={craft.image}
                  alt={`${craft.title} — ${craft.technique}`}
                  fill
                  unoptimized
                  className="size-full max-w-none object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
                <span>Plate {plate}</span>
                <span>Reference photograph</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sindoor">
              {craft.state} · {craft.region}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl">{craft.title}</h1>
            <p lang="hi" className="mt-2 font-display text-3xl text-sindoor">
              {craft.nameLocal}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-kattha">{craft.description}</p>

            <h2 className="mt-12 font-mono text-xs uppercase tracking-[0.18em]">Trade specification</h2>
            <div className="mt-4">
              <SpecList
                items={[
                  { label: "Technique", value: craft.technique },
                  { label: "Made in", value: `${craft.region}, ${craft.state}` },
                  { label: "Product types", value: craft.productTypes.join(" · ") },
                  { label: "Materials", value: craft.materials },
                  ...(craft.heritageEra ? [{ label: "Heritage", value: craft.heritageEra }] : []),
                  { label: "Samples", value: "Available before bulk orders" },
                  { label: "MOQ & lead time", value: "Quoted per order, based on design and quantity" },
                  { label: "Custom work", value: "Sizes, colourways, and private label on request" },
                ]}
              />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/partner?craft=${craft.slug}`} variant="accent">
                Request a quote
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Ask a question
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      <section className="mt-12 border-t border-ink bg-paper-deep py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl">More from the catalogue</h2>
            <Link
              href="/collections"
              className="shrink-0 text-sm font-semibold decoration-sindoor decoration-2 underline-offset-8 hover:underline"
            >
              All collections →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <CraftPlate key={other.slug} craft={other} size="compact" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
