import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import type { BookingProduct } from "@/lib/types";

export const BookingGrid = ({ products }: { readonly products: readonly BookingProduct[] }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <article key={product.slug} className="overflow-hidden rounded-[2rem] border border-fume-primary/10 bg-white shadow-card">
        <div className="relative h-56"><Image src={product.image} alt={product.name} fill sizes="33vw" className="object-cover" /></div>
        <div className="p-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-fume-primary">{product.category}</span>
          <h3 className="mt-3 font-heading text-xl font-bold text-fume-charcoal">{product.name}</h3>
          <p className="mt-3 text-sm text-neutral-600">{product.location} · {product.duration}</p>
          <ButtonLink href={product.href} className="mt-5 w-full">View Details</ButtonLink>
        </div>
      </article>
    ))}
  </div>
);
