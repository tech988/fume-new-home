# Vercel + GitHub Upload Guide

1. Extract this ZIP.
2. Open the extracted folder.
3. Select the contents inside the folder, not the outer folder.
4. Upload to GitHub repo root.
5. Ensure GitHub root shows:
   - `app`
   - `components`
   - `lib`
   - `public`
   - `package.json`
   - `next.config.mjs`
   - `tailwind.config.ts`
   - `tsconfig.json`
6. Do not upload:
   - `node_modules`
   - `.next`
   - `.vercel`
7. Import the GitHub repo into Vercel.
8. Framework preset should be Next.js.
9. Build command should be `npm run build`.
10. Install command should be `npm install`.
11. Output directory should be blank/default.

If Vercel says it cannot find `app` or `pages`, your repo structure is wrong or the Root Directory is not set to the folder containing `app` and `package.json`.
