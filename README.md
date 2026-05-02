# Fume Coworking Public Website - Image-Rich Next.js Frontend

This package rebuilds the Stitch public website export into a clean, responsive React/Next.js frontend for review and deployment.

This updated version restores the visual/coworking feel from the Stitch export by using the original image URLs found inside the exported HTML. The earlier version had become too abstract and SaaS-like because the image sections were removed.

## Main routes

- `/` - Home
- `/locations` - Location listing
- `/locations/cyber-city-gurgaon` - Location detail
- `/locations/golf-course-road` - Location detail
- `/locations/udyog-vihar` - Location detail
- `/solutions` - Workspace plans and solutions
- `/enterprise` - Enterprise workspace solutions
- `/about` - About Fume
- `/gallery` - Workspace gallery
- `/blog` - Blog archive
- `/blog/future-of-flexible-workspaces` - Blog detail
- `/contact` - Contact page
- `/book-a-tour` - Main tour request page
- `/member-login` - Placeholder route for future member portal connection

## Alias routes included

- `/home` -> `/`
- `/solutions-plans` -> `/solutions`
- `/enterprise-solutions` -> `/enterprise`
- `/contact-us` -> `/contact`
- `/book-tour` -> `/book-a-tour`
- `/workspace-gallery` -> `/gallery`

## What changed in this version

- Restored Stitch image URLs across all key pages.
- Added a proper image-led homepage hero.
- Added image cards for workspace plans and locations.
- Added gallery sections on homepage, location detail, about, solutions and enterprise pages.
- Added a dedicated `/gallery` page.
- Kept the lead capture form visible across public pages.
- Contact and Book-a-Tour pages use larger main forms instead of duplicate global forms.
- Added Stitch preview screenshots under `public/stitch-previews/` for developer/reference use.

## Lead capture form

The reusable form lives in:

- `components/LeadForm.tsx`

The global lead section is added through:

- `components/PublicShell.tsx`

The form is currently frontend-only. Developer should connect it to:

- CRM
- Email notification
- Backend API
- Google Sheet / Apps Script
- Webhook
- Analytics/conversion event

## Image source note

The page visuals use the original remote image URLs from the Stitch HTML export. This keeps the package lightweight and restores the intended visual direction.

For production, the developer should ideally download/replace these with final client-approved images hosted in:

- `/public/images/`
- a CDN
- or the final CMS/media library

## Setup

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Vercel upload

Upload the contents of this folder to GitHub. Do not upload the outer folder as a nested folder unless Vercel Root Directory is set accordingly.

Do not upload:

- `node_modules`
- `.next`
- `.vercel`
- `.env`
- `.env.local`
- `out`
- `dist`
