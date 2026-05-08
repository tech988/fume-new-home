# Motion Enhancement Notes — Fume Coworking Public Site

## What was added

This package adds a lightweight motion layer inspired by the animation and mockup references shared for the Fume public website.

No external runtime animation package was added. The motion is built with native CSS/Tailwind-friendly classes so the site remains fast, SEO-safe and simple to maintain.

## Added files

- `app/loading.tsx` — branded App Router loading screen.
- `components/ui/fume-loader.tsx` — reusable Fume loader component.
- `components/ui/animated-gradient-panel.tsx` — reusable animated gradient surface using only Fume brand colors.

## Updated files

- `app/globals.css` — CSS keyframes, loader styles, gradient panel, card hover motion and reduced-motion support.
- `components/sections/hero-section.tsx` — hero now uses the animated gradient panel and soft floating accent.
- `components/ui/button-link.tsx` — button hover movement improved.
- `components/cards/workspace-card.tsx` — lightweight premium hover motion.
- `components/cards/location-card.tsx` — lightweight premium hover motion.
- `components/cards/blog-card.tsx` — lightweight premium hover motion.

## Motion rules followed

- Uses only Fume colors: `#d92365`, `#710a73`, `#bf1b75`, white, soft greys and charcoal.
- No green or unrelated colors.
- No new npm package.
- No `dangerouslySetInnerHTML`.
- No external animated asset dependency.
- No heavy WebGL/shader runtime.
- `prefers-reduced-motion` is respected globally.

## Recommended future usage from the reference tools

- Design Spells: use for micro-interaction inspiration only.
- Shader Gradients: use as visual inspiration, but avoid heavy WebGL on core SEO pages.
- SVGator: use for small exported SVG loaders or icons if a custom brand animation is needed later.
- Jitter: use for social/promotional animations, not as heavy in-page runtime animation.
- Rotato / MockRocket / Shots: use for marketing mockups and pitch visuals, not public-site runtime assets.
- 3dicons: use sparingly if the brand later needs 3D icon illustrations, but real workspace photography should remain primary.
- UI Guideline / Figcomponents: use as design-system references, not production dependencies.
- Dark.Design: use for inspiration only; the Fume site should remain light/premium because the current brand and SEO pages depend heavily on real workspace imagery.
