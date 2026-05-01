import { notFound } from "next/navigation";
import { FeatureCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { locations } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((item) => item.slug === params.slug);
  if (!location) notFound();

  return (
    <PublicShell leadSource={`${location.name} location detail enquiry`}>
      <Hero
        eyebrow={location.city}
        title={<>{location.name} <span className="gradient-text">workspace</span></>}
        description={location.description}
        primaryLabel="Book this location"
        secondaryHref="/locations"
        secondaryLabel="All locations"
      />
      <Section eyebrow="Location Details" title="Everything needed for a confident visit" description="The location detail screen keeps key workspace, access and enquiry information on the same page.">
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard title="Address" description={location.address} />
          <FeatureCard title="Capacity" description={location.capacity} />
          <FeatureCard title="Plans" description={location.starting} />
        </div>
        <div className="mt-8 rounded-[2rem] border border-fume-line bg-white/80 p-6 shadow-soft">
          <h3 className="font-heading text-2xl font-black text-fume-ink">Workspace highlights</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {location.highlights.map((highlight) => <div key={highlight} className="rounded-2xl bg-fume-blush2 p-4 text-sm font-bold text-fume-plum">{highlight}</div>)}
          </div>
        </div>
      </Section>
    </PublicShell>
  );
}
