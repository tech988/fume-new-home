import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";

export const metadata = createMetadata({
  title: "About Fume Coworking",
  description: "Learn about Fume Coworking, a flexible workspace brand creating professional coworking environments across Delhi NCR.",
  path: "/about-us/"
});

export const AboutPage = () => (
  <>
    <HeroSection
      eyebrow="Our story"
      title="Your home office, away from your home."
      description="Fume Coworking creates flexible, professional and community-driven workspaces for founders, teams and professionals across Delhi NCR."
      imageSrc="/images/gallery/nsp-lobby.jpg"
      imageAlt="Fume Coworking lobby"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Why Fume exists" title="A workspace that lets you focus on work" />
      <div className="grid gap-6 md:grid-cols-2">
        <p className="rounded-[2rem] bg-fume-muted p-8 text-lg leading-8 text-neutral-700">Fume is built for people who need professional infrastructure without the stress of managing an office. The workspace handles the everyday operational layer so members can focus on building, collaborating and growing.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Focus", "Flexibility", "Community", "Managed workspace"].map((value) => <div key={value} className="rounded-[2rem] border border-fume-primary/10 bg-white p-6 font-heading text-xl font-bold text-fume-secondary shadow-card">{value}</div>)}
        </div>
      </div>
    </section>
    <TestimonialsSection />
    <LeadFormSection title="Experience Fume before you decide" sourcePath="/about-us/" />
  </>
);

export default AboutPage;
