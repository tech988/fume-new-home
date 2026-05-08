import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import type { Workspace } from "@/lib/types";

export const WorkspaceCard = ({ workspace }: { readonly workspace: Workspace }) => (
  <article className="group overflow-hidden rounded-[2rem] border border-fume-primary/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft fume-motion-card">
    <div className="relative h-56">
      <Image src={workspace.image} alt={`${workspace.name} at Fume Coworking`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </div>
    <div className="p-6">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-fume-muted shadow-sm ring-1 ring-fume-primary/10">
        <Image src={workspace.iconSrc} alt={workspace.iconAlt} width={56} height={56} className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110" />
      </span>
      <h3 className="mt-4 font-heading text-2xl font-bold text-fume-charcoal">{workspace.name}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-600">{workspace.bestFor}</p>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-2xl bg-fume-muted p-3"><dt className="font-bold text-fume-secondary">Privacy</dt><dd className="mt-1 text-neutral-600">{workspace.privacy}</dd></div>
        <div className="rounded-2xl bg-fume-muted p-3"><dt className="font-bold text-fume-secondary">Booking</dt><dd className="mt-1 text-neutral-600">{workspace.booking}</dd></div>
      </dl>
      <ButtonLink href={workspace.href} variant="ghost" className="mt-6 w-full">Explore {workspace.name}</ButtonLink>
    </div>
  </article>
);
