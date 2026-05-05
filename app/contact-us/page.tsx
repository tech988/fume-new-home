import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { locations } from "@/lib/content/locations";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Contact Fume Coworking",
  description: "Contact Fume Coworking for workspace enquiries, meeting room bookings, private cabins, day passes and virtual office solutions.",
  path: "/contact-us/"
});

export const ContactPage = () => (
  <>
    <HeroSection
      eyebrow="Contact"
      title="Talk to Fume"
      description="Need a workspace, meeting room, virtual office or event space? Share your requirement and the Fume team will help you choose the right option."
      imageSrc="/images/gallery/reception-resize.jpg"
      imageAlt="Contact Fume Coworking"
    />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Contact options" title="Reach the Fume team" />
      <div className="grid gap-5 md:grid-cols-3">
        {[{label:"Call",value:siteConfig.phone,href:siteConfig.phoneHref},{label:"WhatsApp",value:"Message on WhatsApp",href:siteConfig.whatsappHref},{label:"Email",value:siteConfig.email,href:siteConfig.emailHref}].map((item) => <a key={item.label} href={item.href} className="rounded-[2rem] border border-fume-primary/10 bg-white p-7 shadow-card"><span className="text-xs font-bold uppercase tracking-[0.2em] text-fume-primary">{item.label}</span><strong className="mt-3 block font-heading text-xl text-fume-charcoal">{item.value}</strong></a>)}
      </div>
    </section>
    <section className="bg-fume-muted py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Visit" title="Fume locations" /><div className="grid gap-5 md:grid-cols-2">{locations.map((location) => <article key={location.id} className="rounded-[2rem] bg-white p-7 shadow-card"><h3 className="font-heading text-2xl font-bold text-fume-charcoal">{location.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{location.address}</p><div className="mt-5 rounded-3xl border border-dashed border-fume-primary/30 p-6 text-center font-bold text-fume-secondary">{location.mapLabel}</div></article>)}</div></div></section>
    <LeadFormSection title="Send your workspace enquiry" sourcePath="/contact-us/" />
  </>
);

export default ContactPage;
