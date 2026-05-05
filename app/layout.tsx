import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fume Coworking | Coworking Spaces in Delhi NCR",
    template: "%s | Fume Coworking"
  },
  description: "Flexible coworking spaces, private cabins, day passes, meeting rooms and virtual office solutions across New Delhi and Gurugram.",
  icons: {
    icon: "/favicon.svg"
  }
};

export const RootLayout = ({ children }: { readonly children: ReactNode }) => (
  <html lang="en">
    <body>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </body>
  </html>
);

// Next.js App Router requires a default export for layout files. Reusable modules still use named exports only.
export default RootLayout;
