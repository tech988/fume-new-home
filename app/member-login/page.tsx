import { ButtonLink } from "@/components/ButtonLink";
import { PublicShell } from "@/components/PublicShell";

export default function MemberLoginPage() {
  return (
    <PublicShell leadSource="Member login placeholder enquiry">
      <section className="container-pad py-20 sm:py-28">
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-fume-line bg-white/80 p-8 text-center shadow-soft sm:p-12">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">Member Portal</p>
          <h1 className="mt-3 font-heading text-4xl font-black text-fume-ink sm:text-5xl">Member login route placeholder</h1>
          <p className="mt-4 text-base leading-7 text-fume-muted">This public package is separate from the member dashboard package. Developer can replace this route with the final member portal URL or authentication screen during integration.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Back to public site</ButtonLink>
            <ButtonLink href="/book-a-tour" variant="secondary">Book a Tour</ButtonLink>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
