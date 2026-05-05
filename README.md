# Fume Coworking Public Site — Next.js 14 App Router Package

This package converts the cleaned static Fume public-site build into a maintainable Next.js 14 codebase using TypeScript, Tailwind CSS, Zustand, TanStack Query v5, Zod, Vitest and React Testing Library.

## Stack

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS
- Zustand for non-sensitive UI state
- TanStack Query v5 for client-side mutations/data operations
- Zod validation on client and server
- Vitest + React Testing Library
- Node 20
- npm

## Folder structure

```txt
fume-coworking-public-site/
├── app/
│   ├── api/leads/route.ts
│   ├── category/blog/page.tsx
│   ├── locations/
│   │   ├── page.tsx
│   │   ├── new-delhi/page.tsx
│   │   └── gurugram/page.tsx
│   ├── product/[slug]/page.tsx
│   ├── product-category/workspaces/[[...slug]]/page.tsx
│   ├── workspace/
│   │   ├── page.tsx
│   │   ├── open-dedicated/page.tsx
│   │   ├── cubicle/page.tsx
│   │   ├── private-cabin/page.tsx
│   │   ├── day-pass/page.tsx
│   │   ├── meeting-room/page.tsx
│   │   └── virtual-office/page.tsx
│   ├── [slug]/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── booking/
│   ├── cards/
│   ├── forms/
│   ├── gallery/
│   ├── layout/
│   ├── providers/
│   ├── sections/
│   ├── seo/
│   └── ui/
├── lib/
│   ├── api/
│   ├── config/
│   ├── content/
│   ├── utils/
│   ├── validators/
│   └── types.ts
├── stores/
├── public/images/gallery/
└── test/
```

## Preserved public routes

- `/`
- `/locations/`
- `/locations/new-delhi/`
- `/locations/gurugram/`
- `/workspace/`
- `/workspace/open-dedicated/`
- `/workspace/cubicle/`
- `/workspace/private-cabin/`
- `/workspace/day-pass/`
- `/workspace/meeting-room/`
- `/workspace/virtual-office/`
- `/about-us/`
- `/gallery/`
- `/events-at-fume/`
- `/partner-with-us/`
- `/contact-us/`
- `/privacy-policy/`
- `/refund_returns/`
- `/terms-and-conditions/`
- `/shop/`
- `/cart/`
- `/product-category/workspaces/`
- `/product-category/workspaces/day-pass/`
- `/product-category/workspaces/meeting-room/`
- `/product-category/workspaces/conference-room/`
- `/product-category/workspaces/in-delhi/`
- `/product-category/workspaces/in-gurugram/`
- Existing product booking URLs
- Existing blog URLs

## Install and run

```bash
npm install
npm run dev
npm run typecheck
npm run test
npm run build
```

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.fumecoworking.in
FUME_ALLOWED_ORIGINS=https://www.fumecoworking.in,https://fumecoworking.in
FUME_LEAD_WEBHOOK_URL=https://your-secure-lead-endpoint.example.com
```

`FUME_LEAD_WEBHOOK_URL` is optional during staging. If it is missing, the lead route accepts the request but does not forward it.

## Important implementation notes

- Reusable modules use named exports.
- Next.js App Router files still use default exports because Next requires default exports for `layout.tsx`, `page.tsx`, `not-found.tsx`, `robots.ts`, and `sitemap.ts`.
- All client API calls go through `/lib/api`.
- Lead form validation runs on the client and again in `app/api/leads/route.ts` with Zod.
- No `dangerouslySetInnerHTML` is used.
- No localStorage is used.
- No hardcoded secrets or API keys are included. Server-only webhook configuration uses `FUME_LEAD_WEBHOOK_URL`.
- Images use `next/image` instead of raw image tags in app/components. Test mocks use raw `<img>` only inside test files.
- Gallery is dynamically imported because it is the most interaction-heavy client section.

## Follow-up required before production

1. Connect `/api/leads` to the final CRM/email/Google Sheet/Zapier/Zoho flow.
2. The API route now has a small in-memory rate limit, origin allowlist and honeypot. Add production-grade WAF/rate limiting or CAPTCHA before high-traffic launch.
3. Replace legal placeholder text with legally approved policy copy.
4. Confirm final address, phone, email, social links, workspace capacities and pricing.
5. Connect `/cart/` and product routes to final WooCommerce/booking/payment flow if e-commerce checkout remains required.
6. Add real logo asset if available; current package uses a clean text/mark placeholder.

## New packages included

The project includes the packages required for the stack and testing setup. `@vitejs/plugin-react` is included only to make Vitest process React/TSX tests cleanly.
