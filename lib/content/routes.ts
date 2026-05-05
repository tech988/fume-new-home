import type { RouteMeta } from "@/lib/types";
import { locations } from "@/lib/content/locations";
import { workspaces } from "@/lib/content/workspaces";
import { blogPosts } from "@/lib/content/blogs";
import { bookingProducts, categoryRoutes } from "@/lib/content/bookings";

export const staticRoutes: readonly RouteMeta[] = [
  { path: "/", title: "Home", description: "Fume Coworking public website." },
  { path: "/locations/", title: "Locations", description: "Fume Coworking locations." },
  ...locations.map((location) => ({ path: location.href, title: location.h1, description: location.bestFor })),
  { path: "/workspace/", title: "Workspaces", description: "Workspace solutions at Fume." },
  ...workspaces.map((workspace) => ({ path: workspace.href, title: workspace.h1, description: workspace.subheadline })),
  { path: "/about-us/", title: "About", description: "About Fume Coworking." },
  { path: "/gallery/", title: "Gallery", description: "Fume Coworking gallery." },
  { path: "/events-at-fume/", title: "Events", description: "Events at Fume." },
  { path: "/partner-with-us/", title: "Partner", description: "Partner with Fume." },
  { path: "/contact-us/", title: "Contact", description: "Contact Fume." },
  { path: "/category/blog/", title: "Blog", description: "Fume blog." },
  ...blogPosts.map((post) => ({ path: post.href, title: post.title, description: post.description })),
  { path: "/privacy-policy/", title: "Privacy Policy", description: "Privacy policy." },
  { path: "/refund_returns/", title: "Refund and Returns Policy", description: "Refund policy." },
  { path: "/terms-and-conditions/", title: "Terms and Conditions", description: "Terms." },
  { path: "/shop/", title: "Shop", description: "Booking shop." },
  { path: "/cart/", title: "Cart", description: "Booking cart." },
  ...categoryRoutes.map((category) => ({ path: category.href, title: category.title, description: "Fume booking category." })),
  ...bookingProducts.map((product) => ({ path: product.href, title: product.name, description: `Book ${product.name}.` }))
] as const;
