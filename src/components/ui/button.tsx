import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sindoor disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-ink text-paper hover:bg-neel",
  accent: "bg-sindoor text-paper hover:bg-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  outlineOnDark:
    "border border-paper/70 text-paper hover:border-paper hover:bg-paper hover:text-ink",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
