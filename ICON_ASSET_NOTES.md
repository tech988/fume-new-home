# Fume icon asset notes

This package now includes locally hosted 3D-style amenity and workspace icons under:

- `public/images/icons/amenities/`
- `public/images/icons/workspaces/`

Implementation notes:

- Icons are self-hosted inside the Next.js project, not loaded from a third-party CDN.
- No new npm package was added.
- Icons use only the approved Fume brand colors: `#d92365`, `#710a73`, `#bf1b75`, plus white/soft greys.
- Icons are referenced through `next/image` for consistent sizing and layout behavior.
- The icons are used in amenities cards and workspace selector/cards.
- The animation is CSS-only and respects the existing `prefers-reduced-motion` rule in `app/globals.css`.

If the team later replaces these with downloaded 3dicons.co assets, keep the same folder paths and filenames or update `lib/content/workspaces.ts` accordingly.
