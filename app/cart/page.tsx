import { createMetadata } from "@/lib/utils/metadata";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = createMetadata({
  title: "Cart",
  description: "Review your Fume Coworking booking cart.",
  path: "/cart/"
});

export const CartPage = () => (
  <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
    <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">Cart</span>
    <h1 className="mt-4 font-heading text-5xl font-black text-fume-charcoal">Your cart is ready for integration</h1>
    <p className="mt-5 text-neutral-600">This route is preserved for WooCommerce or future booking checkout integration. Connect it to the final booking/payment backend before launch.</p>
    <div className="mt-8"><ButtonLink href="/shop/">Browse Booking Options</ButtonLink></div>
  </section>
);

export default CartPage;
