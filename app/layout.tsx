import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fume Coworking | Flexible Workspaces in Gurugram",
  description: "Responsive public frontend prototype for Fume Coworking with locations, solutions, enterprise pages, blogs and lead capture forms across public pages."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
