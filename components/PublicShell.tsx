import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeadCaptureSection } from "./LeadForm";

export function PublicShell({ children, showLeadForm = true, leadSource = "Public site" }: { children: ReactNode; showLeadForm?: boolean; leadSource?: string }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      {showLeadForm && <LeadCaptureSection source={leadSource} />}
      <Footer />
    </div>
  );
}
