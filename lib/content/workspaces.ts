import type { Amenity, Workspace } from "@/lib/types";

export const workspaces: readonly Workspace[] = [
  {
    slug: "open-dedicated",
    name: "Open Dedicated",
    href: "/workspace/open-dedicated/",
    image: "/images/gallery/udyog-vihar-openspace.jpg",
    bestFor: "Regular professionals who need a fixed seat in a managed coworking environment.",
    privacy: "Shared",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Open Dedicated Desks at Fume Coworking",
    subheadline: "Get a dedicated desk in a professional coworking environment designed for regular work, focus and flexibility.",
    icon: "◎"
  },
  {
    slug: "cubicle",
    name: "Cubicle",
    href: "/workspace/cubicle/",
    image: "/images/gallery/nsp-cubicle-back.jpg",
    bestFor: "Professionals who want more privacy than open seating without moving to a full cabin.",
    privacy: "Semi-private",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Cubicle Workspaces at Fume Coworking",
    subheadline: "Enjoy privacy and structure without moving into a full private cabin.",
    icon: "▣"
  },
  {
    slug: "private-cabin",
    name: "Private Cabin",
    href: "/workspace/private-cabin/",
    image: "/images/gallery/udyog-vihar-private-cabin-big.jpg",
    bestFor: "Teams that need a private, secure and managed office setup.",
    privacy: "Private",
    booking: "Monthly / recurring",
    locations: "New Delhi & Gurugram",
    h1: "Private Cabins for Teams at Fume Coworking",
    subheadline: "Give your team a private, managed workspace with the flexibility of a coworking environment.",
    icon: "▤"
  },
  {
    slug: "day-pass",
    name: "Day Pass",
    href: "/workspace/day-pass/",
    image: "/images/gallery/nsp-dedicated.jpg",
    bestFor: "Remote workers, freelancers and visitors who need a productive workspace for one day.",
    privacy: "Shared",
    booking: "Daily",
    locations: "New Delhi & Gurugram",
    h1: "Coworking Day Pass in Delhi NCR",
    subheadline: "Work from Fume for a day with access to a professional workspace, amenities and a focused environment.",
    icon: "◷"
  },
  {
    slug: "meeting-room",
    name: "Meeting Room",
    href: "/workspace/meeting-room/",
    image: "/images/gallery/udyog-vihar-meeting-room.jpg",
    bestFor: "Client meetings, interviews, reviews, team huddles and focused discussions.",
    privacy: "Private room",
    booking: "Hourly",
    locations: "New Delhi & Gurugram",
    h1: "Meeting Rooms in Delhi NCR",
    subheadline: "Book professional meeting rooms for discussions, interviews, client meetings and team sessions.",
    icon: "◫"
  },
  {
    slug: "virtual-office",
    name: "Virtual Office",
    href: "/workspace/virtual-office/",
    image: "/images/gallery/reception-resized.png",
    bestFor: "Companies that need a business address and professional workspace support.",
    privacy: "Business address",
    booking: "Plan-based",
    locations: "New Delhi & Gurugram",
    h1: "Virtual Office Address in Delhi NCR",
    subheadline: "Get a professional business address with Fume’s virtual office solutions.",
    icon: "◇"
  }
] as const;

export const conferenceRoomWorkspace: Workspace = {
  slug: "conference-room",
  name: "Conference Room",
  href: "/product-category/workspaces/conference-room/",
  image: "/images/gallery/12-seater-cabin-resize.jpg",
  bestFor: "Board meetings, workshops, training sessions and larger team discussions.",
  privacy: "Private room",
  booking: "Hourly",
  locations: "New Delhi & Gurugram",
  h1: "Conference Rooms at Fume Coworking",
  subheadline: "Run professional discussions, workshops and planning sessions in equipped conference spaces.",
  icon: "▥"
};

export const allWorkspaceCards: readonly Workspace[] = [...workspaces, conferenceRoomWorkspace];

export const amenities: readonly Amenity[] = [
  { title: "Secured Fibre Leased Line", description: "Reliable connectivity for focused workdays and business operations." },
  { title: "Flexible Desks", description: "Choose day access, dedicated seats, cubicles, cabins or meeting spaces." },
  { title: "Meeting Rooms", description: "Professional rooms for interviews, reviews, client meetings and discussions." },
  { title: "Printing Support", description: "On-site printing support for members and day users." },
  { title: "Vibrant Community", description: "A working environment designed to support productivity and business relationships." },
  { title: "Fully Maintained Workspace", description: "Housekeeping, maintenance and daily workspace operations handled for you." },
  { title: "Hot Beverages", description: "Tea and coffee support for a smoother workday." },
  { title: "Secure Access & Surveillance", description: "A professionally managed workspace with safety and access discipline." }
] as const;

export const getWorkspaceBySlug = (slug: string): Workspace | undefined =>
  workspaces.find((workspace) => workspace.slug === slug);
