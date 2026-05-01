# Fume Coworking Public Website - Next.js Responsive Frontend

This package rebuilds the Stitch public website export into a clean, responsive React/Next.js frontend for review and deployment.

## Main routes

- `/` - Home
- `/locations` - Location listing
- `/locations/cyber-city-gurgaon` - Location detail
- `/locations/golf-course-road` - Location detail
- `/locations/udyog-vihar` - Location detail
- `/solutions` - Workspace plans and solutions
- `/enterprise` - Enterprise workspace solutions
- `/about` - About Fume
- `/blog` - Blog archive
- `/blog/future-of-flexible-workspaces` - Blog detail
- `/contact` - Contact page
- `/book-a-tour` - Main tour request page
- `/member-login` - Placeholder route for future member portal connection

## Alias routes included

The following old/alternate routes redirect to the clean route structure:

- `/home` -> `/`
- `/solutions-plans` -> `/solutions`
- `/enterprise-solutions` -> `/enterprise`
- `/contact-us` -> `/contact`
- `/book-tour` -> `/book-a-tour`

## Lead capture form

The reusable lead form is available across public pages through `components/LeadForm.tsx`.

Most public pages show the global lead section before the footer. Contact and Book-a-Tour pages use the lead form as the main page form to avoid duplicate forms.

The form currently has frontend-only submission behavior. Developer should connect it to:

- CRM
- email notification
- backend API
- Google Sheet
- webhook
- analytics/conversion event

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

## Legacy Stitch files

The final deployable ZIP intentionally does not include the raw Stitch HTML/PNG legacy export to keep GitHub and Vercel upload lightweight. The actual deployable app is the React/Next.js implementation. Keep the original uploaded Stitch ZIP separately as visual/reference backup if needed.
