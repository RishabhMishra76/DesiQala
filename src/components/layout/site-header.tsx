"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Menu, X } from "@/lib/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper">
      <div className="bg-ink text-paper/80">
        <Container className="flex h-8 items-center justify-center font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="truncate">{siteConfig.announcement}</span>
        </Container>
      </div>

      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:block" aria-label="Main">
          <NavLinks items={mainNav} className="flex items-center gap-9" />
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/partner" variant="primary" className="!px-5 !py-2.5">
            Request a quote
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative size-5">
            <Menu
              className={`absolute inset-0 size-5 transition-all duration-200 ${
                open ? "scale-50 rotate-90 opacity-0 blur-[2px]" : ""
              }`}
              aria-hidden
            />
            <X
              className={`absolute inset-0 size-5 transition-all duration-200 ${
                open ? "" : "scale-50 -rotate-90 opacity-0 blur-[2px]"
              }`}
              aria-hidden
            />
          </span>
        </button>
      </Container>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`grid bg-paper transition-[grid-template-rows] duration-[var(--dur-slow)] ease-[var(--ease-out)] lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-ink" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container
            className={`origin-top py-6 transition-all duration-[var(--dur-slow)] ease-[var(--ease-out)] ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <NavLinks
              items={[{ label: "Home", href: "/" }, ...mainNav]}
              className="divide-y divide-ink/15"
              linkClassName="py-3.5 font-display !text-2xl"
              onNavigate={() => setOpen(false)}
            />
            <ButtonLink
              href="/partner"
              variant="accent"
              className="mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              Request a quote
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </Container>
        </div>
      </nav>
    </header>
  );
}
