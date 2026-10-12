"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { CraftPlate } from "@/components/ui/craft-plate";
import { crafts, craftRegions, formatCraftStateForFilter } from "@/lib/crafts";

type PillRect = { left: number; top: number; width: number; height: number };

export function CollectionsGrid() {
  const [region, setRegion] = useState<string>("all");
  const [pill, setPill] = useState<PillRect | null>(null);
  const [showPill, setShowPill] = useState(false);
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (region === "all" ? crafts : crafts.filter((c) => c.state === region)),
    [region],
  );

  const options = [
    { value: "all", label: "All regions", shortLabel: "All", count: crafts.length },
    ...craftRegions.map((r) => ({
      value: r,
      label: r,
      shortLabel: formatCraftStateForFilter(r, "short"),
      count: crafts.filter((c) => c.state === r).length,
    })),
  ];

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    function onMqChange() {
      setShowPill(mq.matches);
    }
    onMqChange();
    mq.addEventListener("change", onMqChange);
    return () => mq.removeEventListener("change", onMqChange);
  }, []);

  useLayoutEffect(() => {
    if (!showPill) return;
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
  }, [region, showPill, options.length]);

  return (
    <>
      <div className="mb-12 flex flex-col gap-4 border-y border-ink py-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          ref={filterRef}
          className="relative -mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filter by region"
        >
          {pill && showPill ? (
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
                title={option.label}
                className={`relative shrink-0 border px-3 py-2.5 text-left text-xs transition-colors duration-[var(--dur-base)] sm:text-sm ${
                  active ? "border-ink text-paper" : "border-ink/25 hover:border-ink"
                } ${active && (!pill || !showPill) ? "bg-ink" : ""}`}
              >
                <span className="sm:hidden">{option.shortLabel}</span>
                <span className="hidden sm:inline">{option.label}</span>
                <span
                  className={`ml-2 font-mono text-[10px] transition-colors sm:text-[11px] ${
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
