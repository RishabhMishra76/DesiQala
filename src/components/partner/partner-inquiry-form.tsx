"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/field";
import { crafts } from "@/lib/crafts";
import { buyerTracks, siteConfig } from "@/lib/site-config";
import { ArrowRight } from "@/lib/icons";

export type BuyerMarket = (typeof buyerTracks)[number]["id"];

type FormState = {
  market: BuyerMarket;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  gst: string;
  country: string;
  volume: string;
  message: string;
  crafts: string[];
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.company.trim()) errors.company = "Company is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email.";
  if (data.market === "domestic" && !data.city.trim()) errors.city = "City is required.";
  if (data.market === "export" && !data.country.trim()) errors.country = "Country is required.";
  if (!data.message.trim()) errors.message = "Please tell us what you need.";
  if (data.crafts.length === 0) errors.crafts = "Select at least one craft line.";
  return errors;
}

type PartnerInquiryFormProps = {
  initialMarket?: BuyerMarket;
  initialCraft?: string;
};

export function PartnerInquiryForm({
  initialMarket = "export",
  initialCraft,
}: PartnerInquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    market: initialMarket,
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    gst: "",
    country: "",
    volume: "",
    message: "",
    crafts: initialCraft && crafts.some((c) => c.slug === initialCraft) ? [initialCraft] : [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCraft(slug: string) {
    setForm((prev) => ({
      ...prev,
      crafts: prev.crafts.includes(slug)
        ? prev.crafts.filter((s) => s !== slug)
        : [...prev.crafts, slug],
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Future: Server Action, CRM, or email API integration.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="fade-in border border-ink bg-paper-deep p-10" role="status">
        <svg
          viewBox="0 0 48 48"
          className="draw-check size-12 rounded-full bg-sindoor p-2.5 text-paper"
          style={{ animation: "pop 360ms var(--ease-out) both" }}
          aria-hidden
        >
          <path
            d="M12 25 L21 33 L36 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-sindoor">Enquiry received</p>
        <h3 ref={successHeadingRef} tabIndex={-1} className="mt-4 font-display text-4xl outline-none">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-4 leading-relaxed text-kattha">
          {siteConfig.responseTime} Our export desk will write to you at{" "}
          <span className="text-ink">{form.email}</span>.
        </p>
      </div>
    );
  }

  const isDomestic = form.market === "domestic";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <fieldset>
        <legend className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
          Where are you buying from? <span className="text-sindoor">*</span>
        </legend>
        <div className="grid grid-cols-2 border border-ink">
          {buyerTracks.map((track, i) => (
            <label
              key={track.id}
              className={`cursor-pointer px-4 py-3.5 text-center text-sm font-semibold transition-colors has-checked:bg-ink has-checked:text-paper has-focus-visible:outline-2 has-focus-visible:outline-sindoor ${
                i === 0 ? "border-r border-ink" : ""
              }`}
            >
              <input
                type="radio"
                name="market"
                value={track.id}
                checked={form.market === track.id}
                onChange={() => update("market", track.id)}
                className="sr-only"
              />
              {track.id === "domestic" ? "Within India" : "Outside India"}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="name"
          label="Full name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />
        <Input
          id="company"
          label="Company"
          required
          autoComplete="organization"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          error={errors.company}
        />
        <Input
          id="email"
          label="Work email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <Input
          id="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        {isDomestic ? (
          <>
            <Input
              id="city"
              label="City"
              required
              autoComplete="address-level2"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              error={errors.city}
            />
            <Input
              id="gst"
              label="GSTIN (optional)"
              placeholder="For GST invoicing"
              value={form.gst}
              onChange={(e) => update("gst", e.target.value)}
            />
          </>
        ) : (
          <>
            <Input
              id="country"
              label="Country"
              required
              autoComplete="country-name"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              error={errors.country}
            />
            <Input
              id="volume"
              label="Estimated volume (optional)"
              placeholder="e.g. 500 units across 3 SKUs"
              value={form.volume}
              onChange={(e) => update("volume", e.target.value)}
            />
          </>
        )}
      </div>

      {isDomestic ? (
        <Input
          id="volume"
          label="Estimated volume (optional)"
          placeholder="e.g. 200 pieces for Diwali gifting"
          value={form.volume}
          onChange={(e) => update("volume", e.target.value)}
        />
      ) : null}

      <fieldset aria-invalid={errors.crafts ? true : undefined} aria-describedby={errors.crafts ? "crafts-error" : undefined}>
        <legend className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-kattha">
          Crafts of interest <span className="text-sindoor">*</span>
        </legend>
        <div className="grid border-l border-t border-ink/30 sm:grid-cols-2">
          {crafts.map((craft) => (
            <label
              key={craft.slug}
              className="flex cursor-pointer items-center justify-between gap-3 border-b border-r border-ink/30 px-4 py-3 text-sm transition-colors has-checked:bg-haldi/30"
            >
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="check-box"
                  checked={form.crafts.includes(craft.slug)}
                  onChange={() => toggleCraft(craft.slug)}
                />
                {craft.title}
              </span>
              <span lang="hi" className="font-display text-sindoor">
                {craft.nameLocal}
              </span>
            </label>
          ))}
        </div>
        {errors.crafts ? (
          <p id="crafts-error" className="fade-in mt-2 text-xs font-medium text-sindoor">{errors.crafts}</p>
        ) : null}
      </fieldset>

      <Textarea
        id="message"
        label="What do you need?"
        required
        placeholder="Products, quantities, timeline, packaging, or custom work…"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
      />

      <div className="flex flex-col gap-4 border-t border-ink pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-kattha">{siteConfig.responseTime}</p>
        <Button type="submit" variant="accent">
          Send enquiry
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </form>
  );
}
