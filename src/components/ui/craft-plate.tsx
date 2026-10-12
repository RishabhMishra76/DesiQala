import Image from "next/image";
import Link from "next/link";
import { getCraftPlateNumber } from "@/lib/crafts";
import type { Craft } from "@/types/craft";

type CraftThumbProps = {
  craft: Craft;
  sizes?: string;
  priority?: boolean;
};

/** Plate-framed 4:5 thumbnail — same image treatment as CraftPlate. */
export function CraftThumb({
  craft,
  sizes = "(max-width: 640px) 62px, (max-width: 768px) 70px, 78px",
  priority,
}: CraftThumbProps) {
  return (
    <div className="w-full overflow-hidden border border-ink bg-paper-deep p-1.5 transition-colors group-hover:bg-haldi/40">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={craft.image}
          alt=""
          fill
          unoptimized
          priority={priority}
          className="size-full max-w-none object-cover"
          sizes={sizes}
        />
      </div>
    </div>
  );
}

type CraftPlateProps = {
  craft: Craft;
  size?: "default" | "compact";
  sizes?: string;
  priority?: boolean;
};

export function CraftPlate({
  craft,
  size = "default",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority,
}: CraftPlateProps) {
  const plate = getCraftPlateNumber(craft.slug);
  const compact = size === "compact";

  const label = `${craft.title}, ${craft.technique}, ${craft.state}`;

  return (
    <Link
      href={`/collections/${craft.slug}`}
      className="group block"
      aria-label={label}
    >
      <figure>
        <div className="border border-ink bg-paper-deep p-2 transition-colors group-hover:bg-haldi/40">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={craft.image}
              alt={`${craft.title} — ${craft.technique}`}
              fill
              unoptimized
              priority={priority}
              className="size-full max-w-none object-cover transition-[transform,filter] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.05] group-hover:saturate-[1.1]"
              sizes={sizes}
            />
          </div>
        </div>
        <figcaption className={compact ? "mt-3" : "mt-4"}>
          <div className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
            <span className="shrink-0 whitespace-nowrap">Pl. {plate}</span>
            <span className="min-w-0 truncate">{craft.state}</span>
          </div>
          <div className="mt-2 flex items-baseline justify-between gap-3">
            <h3
              className={`font-display leading-tight decoration-sindoor decoration-1 underline-offset-4 group-hover:underline ${
                compact ? "text-xl" : "text-2xl"
              }`}
            >
              {craft.title}
            </h3>
            <span lang="hi" className="shrink-0 font-display text-lg text-sindoor">
              {craft.nameLocal}
            </span>
          </div>
          {compact ? null : (
            <p className="mt-1 text-sm text-kattha">{craft.technique}</p>
          )}
        </figcaption>
      </figure>
    </Link>
  );
}
