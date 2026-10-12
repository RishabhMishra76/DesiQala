# DesiQala

Wholesale site for authentic Indian handicrafts, for trade buyers in India and overseas — Next.js, Tailwind CSS v4, and Lucide icons.

## Stack

- **Next.js 16** — App Router, `src/` directory, Turbopack dev
- **Tailwind CSS v4** — design tokens in [`src/app/globals.css`](src/app/globals.css)
- **Typography** — Tiro Devanagari Hindi (display, Latin + Devanagari), Hanken Grotesk (UI), IBM Plex Mono (trade labels) via `next/font`
- **Icons** — [`lucide-react`](src/lib/icons.ts)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home — hero, catalogue index, buyer tracks (India / abroad), heritage band, ordering steps |
| `/collections` | Full catalogue with region filter |
| `/collections/[slug]` | Craft detail pages with a trade specification (static) |
| `/about` | About — origin, principles, process, makers, materials |
| `/heritage` | Heritage timeline and craft regions |
| `/partner` | Wholesale enquiry form; accepts `?market=domestic\|export` and `?craft=<slug>` |
| `/contact` | Export desk contact |

## Content you can edit

- **Craft catalogue** — [`src/lib/crafts.ts`](src/lib/crafts.ts) (add a slug + entry, including `nameLocal`, `productTypes`, and `materials`; the detail page generates automatically)
- **About copy** — [`src/lib/about-content.ts`](src/lib/about-content.ts)
- **Navigation** — [`src/lib/navigation.ts`](src/lib/navigation.ts)
- **Brand, contact, and buyer tracks** — [`src/lib/site-config.ts`](src/lib/site-config.ts)
- **Craft images** — product photos in [`public/crafts/`](public/crafts/) (paths set in `crafts.ts`); replace files to update the catalogue

## Design system

Natural-dye palette on handmade-paper ground: `paper`, `paper-deep`, `ink`, `neel` (indigo), `sindoor` (vermilion), `haldi` (turmeric), `kattha` (brown). Sharp corners, ruled lines, catalogue "plates", a block-print border strip (`.print-border`), and a jaali lattice (`.jaali`) on dark sections — see `:root` and `@theme` in `globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
```

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (defaults are fine).
3. Build command: `npm run build` · Output: Next.js default.
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://desiqala.com`) so Open Graph and canonical URLs use the right host. On preview deploys, Vercel’s `VERCEL_URL` is used automatically when that variable is unset.

No server secrets are required for the static marketing site and client-side partner form.

## Partner form

The enquiry form at `/partner` switches fields by market (City + GSTIN for India, Country for export), validates client-side, and shows a success state. Wire a Server Action or CRM in [`src/components/partner/partner-inquiry-form.tsx`](src/components/partner/partner-inquiry-form.tsx) where noted.
