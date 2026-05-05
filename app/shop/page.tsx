import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { BookingGrid } from "@/components/booking/booking-grid";
import { bookingProducts } from "@/lib/content/bookings";

export const metadata = createMetadata({
  title: "Book Fume Coworking Spaces",
  description: "Book day passes, meeting rooms, conference rooms and virtual office solutions at Fume Coworking.",
  path: "/shop/"
});

export const ShopPage = () => (
  <>
    <HeroSection eyebrow="Booking" title="Book Fume Workspaces" description="Choose day passes, meeting rooms, conference rooms and virtual office options from Fume Coworking." imageSrc="/images/gallery/udyog-vihar-meeting-room.jpg" imageAlt="Book Fume workspace" />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><BookingGrid products={bookingProducts} /></section>
  </>
);

export default ShopPage;
