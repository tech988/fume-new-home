export type Route = `/${string}`;

export type NavItem = {
  readonly label: string;
  readonly href: Route;
};

export type Location = {
  readonly id: "new-delhi" | "gurugram";
  readonly title: string;
  readonly shortTitle: string;
  readonly href: Route;
  readonly h1: string;
  readonly address: string;
  readonly secondaryAddress?: string;
  readonly city: string;
  readonly bestFor: string;
  readonly connectivity: string;
  readonly image: string;
  readonly heroImage: string;
  readonly mapLabel: string;
};

export type Workspace = {
  readonly slug: string;
  readonly name: string;
  readonly href: Route;
  readonly image: string;
  readonly bestFor: string;
  readonly privacy: string;
  readonly booking: string;
  readonly locations: string;
  readonly h1: string;
  readonly subheadline: string;
  readonly icon: string;
};

export type Amenity = {
  readonly title: string;
  readonly description: string;
};

export type Testimonial = {
  readonly name: string;
  readonly role: string;
  readonly quote: string;
};

export type BlogPost = {
  readonly slug: string;
  readonly title: string;
  readonly href: Route;
  readonly description: string;
  readonly date: string;
  readonly body: readonly string[];
};

export type GalleryItem = {
  readonly fileName: string;
  readonly alt: string;
  readonly category: GalleryCategory;
  readonly location: "new-delhi" | "gurugram";
};

export type GalleryCategory =
  | "All"
  | "Reception"
  | "Workspaces"
  | "Private Cabins"
  | "Meeting Rooms"
  | "Conference Rooms"
  | "Events"
  | "Community"
  | "Pantry";

export type BookingProduct = {
  readonly slug: string;
  readonly name: string;
  readonly href: Route;
  readonly category: string;
  readonly location: string;
  readonly duration: string;
  readonly image: string;
};

export type RouteMeta = {
  readonly path: Route;
  readonly title: string;
  readonly description: string;
};

export type AsyncState<T> =
  | { readonly status: "loading" }
  | { readonly status: "error"; readonly message: string }
  | { readonly status: "empty"; readonly message: string }
  | { readonly status: "success"; readonly data: T };
