import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { crafts } from "@/lib/crafts";
import { footerNav, legalNav } from "@/lib/navigation";
import { buyerTracks, siteConfig } from "@/lib/site-config";

const headingClass = "mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-haldi";
const linkClass = "text-sm text-paper/85 transition-colors hover:text-haldi";

export function SiteFooter() {
  return (
    <footer>
      <div className="print-border" aria-hidden />
      <div className="jaali bg-ink text-paper">
        <Container className="py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo dark />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
                Handmade crafts from across India, supplied wholesale to stores,
                studios, and hotels — at home and overseas.
              </p>
              <ul className="mt-6 space-y-1.5 text-sm">
                <li>
                  <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li className="text-paper/70">{siteConfig.contactPhone}</li>
                <li className="text-paper/70">{siteConfig.address}</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className={headingClass}>Explore</h3>
              <ul className="space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className={headingClass}>The catalogue</h3>
              <ul className="space-y-2.5">
                {crafts.map((craft) => (
                  <li key={craft.slug}>
                    <Link href={`/collections/${craft.slug}`} className={linkClass}>
                      {craft.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className={headingClass}>For buyers</h3>
              <ul className="space-y-5">
                {buyerTracks.map((track) => (
                  <li key={track.id}>
                    <p className="text-sm font-semibold">{track.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      {track.points[0]}. {track.points[1]}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-paper/20 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name} · Handmade in India
            </p>
            <ul className="flex gap-6">
              {legalNav.map((item) => (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <span className="text-paper/45">{item.label} (soon)</span>
                  ) : (
                    <Link href={item.href} className="hover:text-haldi">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
