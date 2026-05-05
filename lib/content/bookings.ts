import type { BookingProduct } from "@/lib/types";

export const bookingProducts: readonly BookingProduct[] = [
  { slug: "day-pass-at-udyog-vihar-phase-4-gurugram", name: "Day Pass at Udyog Vihar Phase 4, Gurugram", href: "/product/day-pass-at-udyog-vihar-phase-4-gurugram/", category: "Day Pass", location: "Gurugram", duration: "Full day access", image: "/images/gallery/udyog-vihar-openspace.jpg" },
  { slug: "meeting-room-at-udyog-vihar-phase-4-gurugram-for-1-hour", name: "Meeting Room at Udyog Vihar Phase 4, Gurugram for 1 hour", href: "/product/meeting-room-at-udyog-vihar-phase-4-gurugram-for-1-hour/", category: "Meeting Room", location: "Gurugram", duration: "1 hour", image: "/images/gallery/udyog-vihar-meeting-room.jpg" },
  { slug: "meeting-room-at-udyog-vihar-phase-4-gurugram-for-2-hour", name: "Meeting Room at Udyog Vihar Phase 4, Gurugram for 2 hour", href: "/product/meeting-room-at-udyog-vihar-phase-4-gurugram-for-2-hour/", category: "Meeting Room", location: "Gurugram", duration: "2 hours", image: "/images/gallery/udyog-vihar-meeting-room.jpg" },
  { slug: "conference-room-at-netaji-subash-palace-delhi-for-1-hour", name: "Conference Room at Netaji Subhash Place, Delhi for 1 hour", href: "/product/conference-room-at-netaji-subash-palace-delhi-for-1-hour/", category: "Conference Room", location: "New Delhi", duration: "1 hour", image: "/images/gallery/12-seater-cabin-resize.jpg" },
  { slug: "conference-room-at-netaji-subash-palace-at-delhi-for-2-hours", name: "Conference Room at Netaji Subhash Place, Delhi for 2 hours", href: "/product/conference-room-at-netaji-subash-palace-at-delhi-for-2-hours/", category: "Conference Room", location: "New Delhi", duration: "2 hours", image: "/images/gallery/12-seater-cabin-resize.jpg" },
  { slug: "conference-room-at-udyog-vihar-phase-4-gurugram-for-1-hour", name: "Conference Room at Udyog Vihar Phase 4, Gurugram for 1 hour", href: "/product/conference-room-at-udyog-vihar-phase-4-gurugram-for-1-hour/", category: "Conference Room", location: "Gurugram", duration: "1 hour", image: "/images/gallery/udyog-vihar-private-cabin-big.jpg" },
  { slug: "conference-room-at-udyog-vihar-phase-4-gurugram-for-2-hours", name: "Conference Room at Udyog Vihar Phase 4, Gurugram for 2 hours", href: "/product/conference-room-at-udyog-vihar-phase-4-gurugram-for-2-hours/", category: "Conference Room", location: "Gurugram", duration: "2 hours", image: "/images/gallery/udyog-vihar-private-cabin-big.jpg" },
  { slug: "premium-conference-hall-at-udyog-vihar-phase-4-gurugram-for-1-hour", name: "Premium Conference Hall at Udyog Vihar Phase 4, Gurugram for 1 hour", href: "/product/premium-conference-hall-at-udyog-vihar-phase-4-gurugram-for-1-hour/", category: "Premium Conference Hall", location: "Gurugram", duration: "1 hour", image: "/images/gallery/udyog-vihar-private-cabin-big.jpg" },
  { slug: "virtual-office", name: "Virtual Office", href: "/product/virtual-office/", category: "Virtual Office", location: "New Delhi & Gurugram", duration: "Plan-based", image: "/images/gallery/reception-resized.png" }
] as const;

export const categoryRoutes = [
  { slug: "", title: "Workspace Bookings", href: "/product-category/workspaces/" },
  { slug: "day-pass", title: "Day Pass Bookings", href: "/product-category/workspaces/day-pass/" },
  { slug: "meeting-room", title: "Meeting Room Bookings", href: "/product-category/workspaces/meeting-room/" },
  { slug: "conference-room", title: "Conference Room Bookings", href: "/product-category/workspaces/conference-room/" },
  { slug: "in-delhi", title: "Bookings in Delhi", href: "/product-category/workspaces/in-delhi/" },
  { slug: "in-gurugram", title: "Bookings in Gurugram", href: "/product-category/workspaces/in-gurugram/" }
] as const;

export const getBookingProductBySlug = (slug: string): BookingProduct | undefined =>
  bookingProducts.find((product) => product.slug === slug);
