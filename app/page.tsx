import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { WorkspaceCard } from "@/components/cards/workspace-card";
import { LocationCard } from "@/components/cards/location-card";
import { BlogCard } from "@/components/cards/blog-card";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { allWorkspaceCards } from "@/lib/content/workspaces";
import { locations } from "@/lib/content/locations";
import { trustStats } from "@/lib/content/social-proof";
import { blogPosts } from "@/lib/content/blogs";
import { galleryItems } from "@/lib/content/gallery";

export const metadata = createMetadata({
  title: "Coworking Spaces in Delhi NCR",
  description: "Book coworking desks, private cabins, day passes, meeting rooms, conference rooms and virtual offices across Fume Coworking locations in Delhi NCR.",
  path: "/"
});

export const HomePage = () => (
  <>
    <HeroSection
      eyebrow="Fume Coworking"
      title="Flexible Coworking Spaces in Delhi NCR, Built for Focused Work and Growing Teams"
      description="Choose from day passes, dedicated desks, private cabins, meeting rooms, conference rooms and virtual office solutions across Fume’s NCR locations."
      chips={["500+ companies", "1000+ seating capacity", "New Delhi & Gurugram", "Prime NCR locations"]}
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-[2rem] bg-fume-charcoal p-5 text-white shadow-soft md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] bg-white/10 p-5 text-center">
            <strong className="block font-heading text-3xl">{stat.value}</strong>
            <span className="mt-1 block text-sm text-white/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Workspace finder" title="What are you looking for today?" />
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {allWorkspaceCards.map((workspace) => (
          <Link key={workspace.name} href={workspace.href} className="group rounded-[1.75rem] border border-fume-primary/10 bg-white p-5 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-fume-muted shadow-sm ring-1 ring-fume-primary/10">
              <Image src={workspace.iconSrc} alt={workspace.iconAlt} width={56} height={56} className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110" />
            </span>
            <strong className="mt-3 block font-heading text-fume-charcoal">{workspace.name}</strong>
            <span className="mt-2 block text-xs text-neutral-500">{workspace.booking}</span>
          </Link>
        ))}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Solutions" title="Workspaces for every way you work" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allWorkspaceCards.map((workspace) => <WorkspaceCard key={workspace.slug} workspace={workspace} />)}
      </div>
    </section>
    <section className="bg-fume-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Locations" title="Find Fume near your work network" />
        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location) => <LocationCard key={location.id} location={location} />)}
        </div>
      </div>
    </section>
    <AmenitiesSection />
    <TestimonialsSection />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Gallery" title="Step inside Fume" description="A quick look at workspaces, cabins, meeting rooms, pantry zones and community corners." />
      <div className="grid gap-4 md:grid-cols-4">
        {galleryItems.slice(0, 4).map((item) => (
          <div key={item.fileName} className="relative h-72 overflow-hidden rounded-[2rem] shadow-card">
            <Image src={`/images/gallery/${item.fileName}`} alt={item.alt} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center"><ButtonLink href="/gallery/" variant="ghost">View Gallery</ButtonLink></div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
      <article className="rounded-[2rem] bg-gradient-to-br from-fume-secondary to-fume-primary p-8 text-white shadow-soft">
        <h2 className="font-heading text-3xl font-black">Host an event at Fume</h2>
        <p className="mt-4 text-white/80">Workshops, brand activations, meetups and team sessions in a professional NCR workspace.</p>
        <ButtonLink href="/events-at-fume/" variant="ghost" className="mt-6">Explore Events</ButtonLink>
      </article>
      <article className="rounded-[2rem] border border-fume-primary/10 bg-white p-8 shadow-card">
        <h2 className="font-heading text-3xl font-black text-fume-charcoal">Partner with Fume</h2>
        <p className="mt-4 text-neutral-600">Reach founders, teams, professionals and growing businesses through collaboration opportunities.</p>
        <ButtonLink href="/partner-with-us/" className="mt-6">Partner With Us</ButtonLink>
      </article>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Blog" title="Insights on coworking, productivity and flexible work" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </section>
    <LeadFormSection sourcePath="/" />
  </>
);

export default HomePage;
