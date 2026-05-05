import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/utils/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { BookingGrid } from "@/components/booking/booking-grid";
import { bookingProducts, categoryRoutes } from "@/lib/content/bookings";

const getCategory = (slugParts?: readonly string[]) => {
  const slug = slugParts?.join("/") ?? "";
  return categoryRoutes.find((category) => category.slug === slug);
};

const filterProducts = (slug: string) => {
  if (slug === "day-pass") return bookingProducts.filter((product) => product.category === "Day Pass");
  if (slug === "meeting-room") return bookingProducts.filter((product) => product.category === "Meeting Room");
  if (slug === "conference-room") return bookingProducts.filter((product) => product.category.includes("Conference"));
  if (slug === "in-delhi") return bookingProducts.filter((product) => product.location.includes("Delhi"));
  if (slug === "in-gurugram") return bookingProducts.filter((product) => product.location.includes("Gurugram"));
  return bookingProducts;
};

export const generateStaticParams = () => categoryRoutes.map((category) => ({ slug: category.slug ? category.slug.split("/") : [] }));

export const generateMetadata = ({ params }: { readonly params: { readonly slug?: readonly string[] } }) => {
  const category = getCategory(params.slug);
  return createMetadata({
    title: category?.title ?? "Workspace Bookings",
    description: "Browse Fume Coworking booking categories for workspaces, day passes, meeting rooms and conference rooms.",
    path: category?.href ?? "/product-category/workspaces/"
  });
};

export const ProductCategoryPage = ({ params }: { readonly params: { readonly slug?: readonly string[] } }) => {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const products = filterProducts(category.slug);

  return (
    <>
      <HeroSection eyebrow="Booking category" title={category.title} description="Browse available Fume Coworking booking options while preserving the current WooCommerce category route." imageSrc="/images/gallery/12-seater-cabin-resize.jpg" imageAlt={category.title} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><BookingGrid products={products} /></section>
    </>
  );
};

export default ProductCategoryPage;
