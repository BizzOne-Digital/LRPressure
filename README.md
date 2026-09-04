# Panther Power Washing — Website Clone

A pixel-faithful, fully functional Next.js clone of https://www.pantherpowerwashing.com/, built for
BizzOne Digital development/demo purposes. Content, imagery, and layout were sourced directly from the
live reference site.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css` match the reference site's exact color
  system: `--primary` #040608, `--secondary` #6ccff4, roundedness 28px, Archivo + Montserrat fonts)
- Framer Motion for scroll reveals, dropdown/mobile-menu animation, hover states
- lucide-react icons

## Getting started
```bash
npm install
npm run dev
```
Visit http://localhost:3000

To build for production:
```bash
npm run build
npm start
```

## Structure
- `src/data/site.ts` — all site content (company info, nav, 6 services with full copy/FAQs/process
  steps, testimonials, team, 43 service-area locations, footer links). Edit this file to update copy.
- `src/components/` — Header, Footer, MobileBottomBar, Hero, ServicesGrid, Testimonials,
  ServiceAreasSection, TeamSection, CTASection, FAQList, ProcessSteps, BenefitsList, ContactForm,
  GalleryGrid, ScrollReveal, and shared `ui.tsx` (Container/Buttons).
- `src/app/` — homepage, `about-us`, `contact-us`, `gallery`, `projects`, `reviews`, `sitemap`,
  `thank-you`, dynamic `services/[slug]` (6 real service pages), dynamic `service-areas/[area]`
  (43 location landing pages).
- `public/images/` — real photos pulled from the reference site (hero, 6 service images, team photos,
  a gallery/project image). `public/icons/google-g-logo.svg` for the ratings badge.

## Known discrepancies vs. the brief
The original brief asked for 8 service pages including **Screen Cleaning** and **Driveway & Concrete
Cleaning**. Those two do not actually exist as pages on the live reference site (the URLs redirect to
the homepage) — only 6 service pages are live: House Washing, Roof Washing, Exterior Window Cleaning,
Interior Window Cleaning, Christmas Light Installation, and Pressure Washing. To avoid inventing content
that isn't on the source site, only those 6 real pages were built; visiting
`/services/screen-cleaning` correctly 404s, matching the reference site's behavior.

The reference's "Client Testimonials" page contains 500+ Google reviews; a representative set of real
reviews (name + quote, sourced from the site) is used rather than scraping all 500+.

## Legal note
This is a development clone built for demonstration/testing purposes and is not affiliated with or
representing itself as Panther Power Washing. Do not deploy this publicly under the Panther Power
Washing name or branding.
