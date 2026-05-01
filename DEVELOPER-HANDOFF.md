# Developer Handoff - Fume Public Website

## What this package is

A clean Next.js public website frontend rebuilt from the Stitch public portal export. It standardizes duplicated screens, cleans the public route map, and adds consistent lead capture across public pages. The raw Stitch export is not included in the final ZIP to avoid GitHub/Vercel upload bloat.

## What was consolidated

The Stitch export contained multiple duplicate variants such as:

- `home_page_1` and `home_page_2`
- `solutions_plans_1` and `solutions_plans_2`
- `enterprise_solutions_1` and `enterprise_solutions_2`
- `contact_us_1` and `contact_us_2`
- `location_detail_1` and `location_detail_2`

These have been consolidated into clean routes:

- `/`
- `/solutions`
- `/enterprise`
- `/contact`
- `/locations/[slug]`

## Lead capture strategy

A reusable lead form component has been added to every public journey. The goal is to reduce friction and capture enquiries directly from page context instead of forcing users to visit only the Contact or Book-a-Tour page.

Relevant files:

- `components/LeadForm.tsx`
- `components/PublicShell.tsx`
- `app/contact/page.tsx`
- `app/book-a-tour/page.tsx`

## Backend integration required

The forms currently do not submit to a live backend. Connect the form to one of the following:

- Backend API endpoint
- CRM webhook
- Google Sheet / Apps Script
- Email service
- Lead management panel

Also add:

- form validation
- spam protection / captcha if needed
- analytics events
- thank-you page or success modal
- email notifications to admin/reception/sales team

## Member portal link

The public header has a `/member-login` placeholder route. Replace it later with:

- actual auth login route, or
- external member dashboard URL, or
- integrated member portal route if all Fume apps are merged into one codebase.

## Data source

Static content is in:

- `lib/site.ts`

For production, the developer can connect locations, blogs, plans and enterprise content to a CMS or admin backend.

## Deployment notes

This is safe to deploy on Vercel as a standalone public frontend.

Recommended test routes after deployment:

- `/`
- `/locations`
- `/locations/cyber-city-gurgaon`
- `/solutions`
- `/enterprise`
- `/about`
- `/blog`
- `/contact`
- `/book-a-tour`
- `/member-login`

## Upload ignore list

Do not upload:

- `node_modules`
- `.next`
- `.vercel`
- `.env`
- `.env.local`
- `out`
- `dist`
