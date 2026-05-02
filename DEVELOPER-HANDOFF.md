# Developer Handoff - Fume Public Website Image-Rich Version

## What this package is

A responsive Next.js public website frontend rebuilt from the Stitch public portal export. This version restores the coworking imagery from the original Stitch HTML and keeps a consistent public route map, navigation, global lead capture and visual system.

## Key correction from previous package

The previous public package removed the Stitch image references, which made the site feel too much like a SaaS tool. This version adds the visual layer back across:

- Homepage hero
- Workspace solution cards
- Location listing cards
- Location detail gallery
- About page story/gallery
- Enterprise page visuals
- Blog cards
- Contact page
- Book-a-tour page
- Dedicated gallery page

## Important files

- `lib/site.ts` - static data, route nav, image URLs, locations, solutions and blog content
- `components/Hero.tsx` - reusable image hero
- `components/Media.tsx` - image frames, galleries, image mosaics and split image sections
- `components/Cards.tsx` - feature, location and solution cards
- `components/LeadForm.tsx` - lead capture form
- `components/PublicShell.tsx` - global layout + form placement

## Lead capture strategy

Every core public page still has an enquiry/tour form available without requiring an additional click. Contact and Book-a-Tour use the form as the main page form to avoid duplication.

Backend integration required:

- form validation
- CRM/API/email/webhook submission
- spam protection/captcha if needed
- thank-you state or thank-you page
- analytics events for form submit/clicks

## Image strategy

The current package uses the remote image URLs embedded in Stitch HTML. This is good for demo speed and preserving the visual direction.

For final production, replace the remote URLs with final approved Fume photos/media and host them locally or through a stable CDN/CMS.

Reference screenshots from Stitch are available in:

- `public/stitch-previews/`

## Recommended routes to test after deployment

- `/`
- `/locations`
- `/locations/cyber-city-gurgaon`
- `/solutions`
- `/enterprise`
- `/about`
- `/gallery`
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

## Vercel note

If Vercel says it cannot find `app` or `pages`, the GitHub repo structure is wrong. The repo root must contain:

- `app`
- `components`
- `lib`
- `public`
- `package.json`
