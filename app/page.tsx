import { FeatureCard, LocationCard, SolutionCard } from "@/components/Cards";
import { Hero } from "@/components/Hero";
import { GalleryGrid, ImageMosaic, SplitImageSection } from "@/components/Media";
import { PublicShell } from "@/components/PublicShell";
import { Section } from "@/components/Section";
import { galleryImages, locations, media, solutions, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <PublicShell leadSource="Homepage enquiry">
      <Hero
        eyebrow="Premium coworking in Gurugram"
        title={<>Workspaces built for <span className="gradient-text">teams in motion</span></>}
        description="Discover flexible desks, private offices, meeting rooms and enterprise-ready workspaces across Fume locations, with quick lead capture available on every page."
        primaryLabel="Book a Tour"
        secondaryHref="/locations"
        secondaryLabel="View Locations"
        image={media.homeHero}
      />

      <Section className="pt-4">
        <div className="grid gap-4 rounded-[2.25rem] border border-fume-line bg-white/80 p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] bg-fume-blush px-5 py-6 text-center">
              <p className="font-heading text-3xl font-black text-fume-rose">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-fume-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Workspace formats" title="Choose the work setup that fits your day" description="The page now uses Stitch’s original coworking visuals, so the site feels like a real workspace brand instead of a SaaS dashboard.">
        <div className="grid gap-6 lg:grid-cols-4">
          {solutions.map((solution) => <SolutionCard key={solution.title} solution={solution} />)}
        </div>
      </Section>

      <Section className="pt-0">
        <SplitImageSection
          eyebrow="Client-ready spaces"
          title="Make the first impression feel premium before someone even walks in."
          description="Public pages should sell the physical experience: light, interiors, meeting rooms, lounges and day-to-day professionalism. These visuals are now back across the homepage, location pages and service pages."
          bullets={["Premium interiors", "Meeting rooms", "Private offices", "Daily workspace support"]}
          image={media.boardroom}
        />
      </Section>

      <Section eyebrow="Locations" title="Explore Fume workspaces" description="Each location card now uses actual coworking imagery from the Stitch export instead of flat gradient placeholders.">
        <div className="grid gap-6 lg:grid-cols-3">
          {locations.map((location) => <LocationCard key={location.slug} location={location} />)}
        </div>
      </Section>

      <Section eyebrow="Inside Fume" title="A more visual public-site experience" description="Use these images for workspace confidence, not decoration. They support lead conversion by showing what the prospect is enquiring about.">
        <ImageMosaic images={[media.locationLounge, media.teamCollab, media.privateOffice]} />
      </Section>

      <Section eyebrow="Gallery preview" title="See the atmosphere before booking a tour" description="A short visual gallery is now connected from the main navigation and homepage.">
        <GalleryGrid images={galleryImages} limit={6} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["For individuals", "Day passes and dedicated desks for people who need a reliable professional base."],
            ["For teams", "Private cabins, team seating and predictable access for growing businesses."],
            ["For enterprises", "Custom workspace setups, permissions, billing and operational support for larger teams."]
          ].map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
      </Section>
    </PublicShell>
  );
}
