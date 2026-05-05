import Link from "next/link";
import { SiteBrand } from "@/components/layout/site-brand";
import { siteConfig } from "@/lib/config/site";
import { navItems, policyLinks } from "@/lib/content/navigation";
import { locations } from "@/lib/content/locations";
import { workspaces } from "@/lib/content/workspaces";
import { bookingProducts } from "@/lib/content/bookings";

export const SiteFooter = () => (
  <footer className="mt-20 bg-fume-charcoal text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div className="lg:col-span-1">
        <div className="rounded-3xl bg-white p-4 text-fume-charcoal shadow-soft">
          <SiteBrand />
        </div>
        <p className="mt-5 text-sm leading-7 text-white/70">
          Workspaces designed for productivity across New Delhi and Gurugram. Choose flexible desks, private cabins, day passes, meeting rooms and virtual office solutions.
        </p>
      </div>
      <FooterLinkGroup title="Workspaces" links={workspaces.map((workspace) => ({ label: workspace.name, href: workspace.href }))} />
      <FooterLinkGroup title="Company" links={[...navItems.filter((item) => item.href !== "/"), { label: "Blog", href: "/category/blog/" }]} />
      <FooterLinkGroup title="Booking" links={bookingProducts.slice(0, 5).map((product) => ({ label: product.name, href: product.href }))} />
    </div>
    <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
      {locations.map((location) => (
        <address key={location.id} className="not-italic text-sm leading-7 text-white/70">
          <strong className="block text-white">{location.title}</strong>
          {location.address}
          {location.secondaryAddress ? <span className="block">{location.secondaryAddress}</span> : null}
        </address>
      ))}
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-6 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <span>© 2026 Fume Coworking. Designed by AdTractive.</span>
      <span>
        <Link href={siteConfig.phoneHref}>{siteConfig.phone}</Link> · <Link href={siteConfig.emailHref}>{siteConfig.email}</Link>
      </span>
      <span className="flex flex-wrap gap-3">
        {policyLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </span>
    </div>
  </footer>
);

const FooterLinkGroup = ({
  title,
  links
}: {
  readonly title: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
}) => (
  <div>
    <h3 className="font-heading text-base font-bold">{title}</h3>
    <ul className="mt-4 space-y-3 text-sm text-white/70">
      {links.length > 0 ? links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-white">{link.label}</Link>
        </li>
      )) : <li>No links available</li>}
    </ul>
  </div>
);
