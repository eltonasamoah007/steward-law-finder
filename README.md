# Steward Law Finder: Homepage

Homepage for Steward Law Finder, a Ghanaian legal research platform (cases and
law reports, practice guides, legislation, templates and an AI assistant).
Built from the approved Google Stitch design ("Jurisprudence Modern").

## Tech stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS v4
- lucide-react for icons
- Fonts: Source Serif 4 (headlines, legal titles) and Inter (UI text), loaded
  with `next/font`

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, Navbar, Footer
  page.tsx            Homepage: the sections in order
  not-found.tsx       Branded 404 page
  globals.css         Tailwind import and design tokens (colors, shadows)
components/
  Navbar.tsx          Top navigation (client component: mobile menu)
  BannerCarousel.tsx  Auto-rotating banner (client component)
  SearchSection.tsx   Headline, search form, popular searches
  RecentCases.tsx     Section wrapper
  CaseOfTheDay.tsx    Large featured case card
  CaseCard.tsx        Small case card
  PracticeGuides.tsx  Section wrapper
  GuideTile.tsx       Image tile for a practice guide
  LegislationTemplates.tsx  Two side-by-side lists
  ListCard.tsx        Reusable card used for Legislation and Templates
  Footer.tsx          Footer with four link columns
data/                 Placeholder content (replace with real data or an API)
  navigation.ts  banners.ts  search.ts  cases.ts
  guides.ts      resources.ts  footer.ts
public/images/guides/ Photos for the practice guide tiles
```

## Design tokens

Defined in `app/globals.css` and used as Tailwind classes:

| Token | Value | Use |
| --- | --- | --- |
| `navy` | #0B2A5B | Headings, footer, brand anchors |
| `brand` / `brand-dark` | #2563EB / #1D4ED8 | Buttons, links, active states |
| `canvas` | #F5F7FB | Page background |
| `ink` | #0F172A | Body text |
| `muted` | #64748B | Secondary text |
| `gold` | #C9A227 | Small accent labels only |
| `line` | #E2E8F0 | Borders and dividers |

Card corners are 12px (`rounded-xl`). Shadows: `shadow-card` and
`shadow-card-hover`.

## Changing content

All text on the homepage comes from the files in `data/`. Components do not
contain page copy. To replace the placeholder content with a database or API,
keep the types exported from each data file and have the components receive
the same shapes.

Practice guide photos: add the file to `public/images/guides/` and set the
`image` field for that guide in `data/guides.ts`.

## Known placeholders and next steps

- Only the homepage exists. Links to `/cases`, `/guides`, `/legislation`,
  `/templates`, `/ai-assistant`, `/login`, `/signup`, `/account`, `/search`
  and the footer pages lead to the 404 page.
- The search form submits to `/search?type=...&q=...` (a plain GET form).
  The `/search` page still needs to be built.
- All cases, legislation, templates and banner slides are sample content.
- Footer social links point to each platform's home page. Replace them with
  Steward's real accounts and add logos.
- The copyright text is stored in `data/footer.ts`.