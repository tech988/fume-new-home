import { PublicShell } from "@/components/PublicShell";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <PublicShell leadSource="404 page">
      <section className="container-pad py-24 text-center">
        <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">404</p>
        <h1 className="mt-3 font-heading text-4xl font-black text-fume-ink sm:text-6xl">This public page is not available.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-fume-muted">The cleaned public site keeps only the final route structure. Use the homepage, locations or book-a-tour page to continue.</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/book-a-tour" variant="secondary">Book a Tour</ButtonLink>
        </div>
      </section>
    </PublicShell>
  );
}
