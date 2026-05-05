import { testimonials } from "@/lib/content/social-proof";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/ui/state-block";

export const TestimonialsSection = () => (
  <section className="bg-fume-muted py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Social proof" title="Trusted by teams, founders and professionals" />
      {testimonials.length === 0 ? (
        <EmptyState title="Testimonials coming soon" />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={`${testimonial.name}-${testimonial.role}`} className="rounded-[2rem] bg-white p-6 shadow-card">
              <p className="text-sm leading-7 text-neutral-700">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-neutral-100 pt-5">
                <strong className="block font-heading text-fume-charcoal">{testimonial.name}</strong>
                <span className="text-sm text-neutral-500">{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  </section>
);
