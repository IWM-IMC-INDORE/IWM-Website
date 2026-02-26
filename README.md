# IWM Website

Live site: [https://iwmimcindore.com](https://iwmimcindore.com)

Frontend for the Internship with Mayor (IWM), Indore Municipal Corporation website.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## SEO Automation

Sitemap is now generated automatically from static routes in `src/App.tsx`.

- Manual generation:

```bash
npm run sitemap
```

- Automatic generation:
  - Runs before `npm run build`
  - Runs before `npm run build:dev`

Generator script: `scripts/generate-sitemap.mjs`

## Useful Files

- `src/components/SEO.tsx` – page SEO tags + structured data
- `public/robots.txt` – crawl directives
- `public/sitemap.xml` – auto-generated sitemap
