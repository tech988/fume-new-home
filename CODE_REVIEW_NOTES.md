# Code Review Notes

This package has been updated after the full audit pass requested on the Fume public-site frontend.

## Key fixes applied

- Upgraded `next` and `eslint-config-next` from `14.2.33` to `14.2.35` to stay on the patched Next.js 14 line.
- Added lead API origin allowlisting, payload-size guard and in-memory abuse throttling.
- Added HTTPS-only validation for `FUME_LEAD_WEBHOOK_URL`.
- Added a honeypot field and internal-route validation to the lead payload schema.
- Split `components/forms/lead-form.tsx` into smaller focused files to keep components under 150 lines.
- Escaped JSON-LD content in `StructuredData` without using `dangerouslySetInnerHTML`.
- Added tests for the lead form honeypot path and gallery empty state.
- Moved the React Query provider from the root layout into the lead form section to reduce the client-hydrated surface area.

## Remaining production tasks

- Add infrastructure-level rate limiting/WAF/CAPTCHA for `/api/leads`.
- Connect `FUME_LEAD_WEBHOOK_URL` to the final CRM/email/Zoho/Google Sheet workflow.
- Run `npm install`, `npm run typecheck`, `npm run test`, `npm run lint` and `npm run build` in the developer environment.
- Add the final real Fume logo and legally approved policy copy.
