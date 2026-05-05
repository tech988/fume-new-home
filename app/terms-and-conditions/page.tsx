import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for using Fume Coworking services and website.",
  path: "/terms-and-conditions/"
});

export const LegalPage = () => (
  <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
    <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">Legal</span>
    <h1 className="mt-4 font-heading text-4xl font-black text-fume-charcoal">Terms and Conditions</h1>
    <p className="mt-5 text-neutral-600">Last updated: May 5, 2026</p>
    <div className="mt-10 space-y-6 rounded-[2rem] bg-white p-8 leading-8 text-neutral-700 shadow-card">
      <p>This page is a clean, readable placeholder based on the current public route. The final legal text should be reviewed and approved by Fume Coworking before production release.</p>
      <p>For questions, contact Fume Coworking at Hello@fumecoworking.in or call +91-838-387-4274.</p>
      <h2 className="font-heading text-2xl font-bold text-fume-charcoal">Important note</h2>
      <p>Do not remove this route during migration. Keeping the current permalink helps preserve user trust, internal links and search discoverability.</p>
    </div>
  </section>
);

export default LegalPage;
