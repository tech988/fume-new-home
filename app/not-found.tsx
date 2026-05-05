import { ButtonLink } from "@/components/ui/button-link";

export const NotFoundPage = () => (
  <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
    <span className="text-xs font-bold uppercase tracking-[0.28em] text-fume-primary">404</span>
    <h1 className="mt-4 font-heading text-5xl font-black text-fume-charcoal">This page is not available</h1>
    <p className="mt-5 text-neutral-600">The page may have moved, but the main Fume workspace routes are still available.</p>
    <div className="mt-8 flex justify-center gap-3">
      <ButtonLink href="/">Go Home</ButtonLink>
      <ButtonLink href="/contact-us/" variant="ghost">Contact Fume</ButtonLink>
    </div>
  </section>
);

export default NotFoundPage;
