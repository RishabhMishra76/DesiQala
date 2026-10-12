import type { NavItem } from "@/types/craft";

export const mainNav: NavItem[] = [
  { label: "Collections", href: "/collections" },
  { label: "Heritage", href: "/heritage" },
  { label: "About", href: "/about" },
  { label: "Wholesale", href: "/partner" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = mainNav;

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];
