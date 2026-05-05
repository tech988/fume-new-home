import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/utils/metadata";
import { ButtonLink } from "@/components/ui/button-link";
import { LeadFormSection } from "@/components/sections/lead-form-section";
import { StructuredData } from "@/components/seo/structured-data";
import { bookingProducts, getBookingProductBySlug } from "@/lib/content/bookings";
import { siteConfig } from "@/lib/config/site";

export const generateStaticParams = () => bookingProducts.map((product) => ({ slug: product.slug }));

export const generateMetadata = ({ params }: { readonly params: { readonly slug: string } }) => {
  const product = getBookingProductBySlug(params.slug);
  if (!product) {
    return createMetadata({ title: "Booking", description: "Fume Coworking booking", path: "/shop/" });
  }
  return createMetadata({ title: product.name, description: `Book ${product.name} at Fume Coworking.`, path: product.href, image: product.image });
};

export const ProductPage = ({ params }: { readonly params: { readonly slug: string } }) => {
  const product = getBookingProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    url: `${siteConfig.url}${product.href}`,
    image: `${siteConfig.url}${product.image}`,
    description: `Book ${product.name} at Fume Coworking.`
  };

  return (
    <>
      <StructuredData data={productSchema} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-fume-muted shadow-soft"><Image src={product.image} alt={product.name} fill priority sizes="50vw" className="object-cover" /></div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">{product.category}</span>
          <h1 className="mt-4 font-heading text-4xl font-black text-fume-charcoal md:text-5xl">{product.name}</h1>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-fume-muted p-5"><dt className="font-bold text-fume-secondary">Location</dt><dd className="mt-1 text-neutral-600">{product.location}</dd></div>
            <div className="rounded-3xl bg-fume-muted p-5"><dt className="font-bold text-fume-secondary">Duration</dt><dd className="mt-1 text-neutral-600">{product.duration}</dd></div>
          </dl>
          <p className="mt-6 text-neutral-600">Booking/payment logic should connect to the final WooCommerce or booking backend. This page preserves the existing SEO route and provides a polished product detail layout.</p>
          <div className="mt-8 flex gap-3"><ButtonLink href="/contact-us/">Enquire Now</ButtonLink><ButtonLink href="/cart/" variant="ghost">Add to Cart Placeholder</ButtonLink></div>
        </div>
      </section>
      <LeadFormSection title={`Enquire for ${product.name}`} sourcePath={product.href} />
    </>
  );
};

export default ProductPage;
