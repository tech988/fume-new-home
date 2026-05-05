import { LeadForm } from "@/components/forms/lead-form";
import { QueryProvider } from "@/components/providers/query-provider";
import { siteConfig } from "@/lib/config/site";

export const LeadFormSection = ({
  title = "Don’t wait any longer, book your workspace today",
  sourcePath
}: {
  readonly title?: string;
  readonly sourcePath: string;
}) => (
  <section id="lead-form" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="grid overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-fume-secondary via-fume-accent to-fume-primary text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
      <div className="p-8 md:p-12">
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/75">Enquiry</span>
        <h2 className="mt-4 font-heading text-3xl font-black md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
          Share your requirement and the Fume team will help you choose the right location, workspace type and booking option.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-white/90">
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          <a href={siteConfig.whatsappHref}>WhatsApp Fume Coworking</a>
        </div>
      </div>
      <div className="bg-white p-6 text-fume-charcoal md:p-8">
        <QueryProvider>
          <LeadForm sourcePath={sourcePath} />
        </QueryProvider>
      </div>
    </div>
  </section>
);
