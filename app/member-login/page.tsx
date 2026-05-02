import { ButtonLink } from "@/components/ButtonLink";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { media } from "@/lib/site";

export default function MemberLoginPlaceholder() {
  return (
    <PublicShell leadSource="Member login placeholder enquiry">
      <Hero eyebrow="Member Portal" title={<>Member access will connect to the <span className="gradient-text">dashboard</span></>} description="This is a placeholder public route. In production, connect it to the actual member login/dashboard URL once the member portal is finalized." image={media.quietWorkspace} primaryHref="/book-a-tour" primaryLabel="Book a Tour" secondaryHref="/" secondaryLabel="Back to Home" />
      <Section className="pt-0">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-fume-line bg-white/90 p-8 text-center shadow-soft">
          <h2 className="font-heading text-3xl font-black text-fume-ink">Future member login connection</h2>
          <p className="mt-4 text-fume-muted">Replace this route with the actual member login flow or external member app URL after backend/auth is ready.</p>
          <div className="mt-6 flex justify-center"><ButtonLink href="/">Return to Public Site</ButtonLink></div>
        </div>
      </Section>
    </PublicShell>
  );
}
