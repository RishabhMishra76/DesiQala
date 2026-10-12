import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const petals = [0, 45, 90, 135, 180, 225, 270, 315];

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="4" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="0.75" />
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="12.5"
          rx="2.6"
          ry="6"
          fill="var(--sindoor)"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill="var(--haldi)" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl">{siteConfig.name}</span>
        <span
          lang="hi"
          className={`mt-1 font-display text-xs ${dark ? "text-paper/60" : "text-kattha"}`}
        >
          {siteConfig.nameLocal}
        </span>
      </span>
    </Link>
  );
}
