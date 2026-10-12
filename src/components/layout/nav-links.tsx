"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/craft";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ items, className = "", linkClassName = "", onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {items.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`block text-sm font-medium decoration-sindoor decoration-2 underline-offset-[10px] transition-colors hover:text-sindoor ${
                isActive ? "underline" : ""
              } ${linkClassName}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
