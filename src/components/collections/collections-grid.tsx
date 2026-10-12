"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { CraftPlate } from "@/components/ui/craft-plate";
import { crafts, craftRegions } from "@/lib/crafts";

type PillRect = { left: number; top: number; width: number; height: number };

export function CollectionsGrid() {
  const [region, setRegion] = useState<string>("all");
  const [pill, setPill] = useState<PillRect | null>(null);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());

  const filtered = useMemo(
    () => (region === "all" ? crafts : crafts.filter((c) => c.state === region)),
    [region],
  );

  const options = [
    { value: "all", label: "All regions", count: crafts.length },
    ...craftRegions.map((r) => ({
      value: r,
      label: r,
      count: crafts.filter((c) => c.state === r).length,
    })),
  ];

  useLayoutEffect(() => {
    function measure() {
      const el = buttonRefs.current.get(region);
      if (!el) return;
      setPill({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [region]);

  return (
    <>
      <div className="mb-12 flex flex-col gap-4 border-y border-ink py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex flex-wrap gap-2" role="group" aria-label="Filter by region">
          {pill ? (
            <span
              aria-hidden
              className="pointer-events-none absolute bg-ink transition-all duration-[var(--dur-slow)] ease-[var(--ease-out)]"
              style={pill}
            />
          ) : null}
          {options.map((option) => {
            const active = region === option.value;
            return (
              <button
                key={option.value}
                ref={(el) => {
                  if (el) buttonRefs.current.set(option.value, el);
                  else buttonRefs.current.delete(option.value);
                }}
                type="button"
                onClick={() => setRegion(option.value)}
                aria-pressed={active}
                className={`relative border px-3.5 py-2 text-sm transition-colors duration-[var(--dur-base)] ${
                  active ? "border-ink text-paper" : "border-ink/25 hover:border-ink"
                } ${active && !pill ? "bg-ink" : ""}`}
              >
                {option.label}
                <span
                  className={`ml-2 font-mono text-[11px] transition-colors ${
                    active ? "text-haldi" : "text-kattha"
                  }`}
                >
                  {option.count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-kattha" aria-live="polite">
          Showing {filtered.length} of {crafts.length} craft lines
        </p>
      </div>

      <div key={region} className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((craft, i) => (
          <div
            key={craft.slug}
            className="fade-in"
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <CraftPlate craft={craft} />
          </div>
        ))}
      </div>
    </>
  );
}
