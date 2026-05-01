import type { ReactNode } from "react";

export function Section({ eyebrow, title, description, children, className = "" }: { eyebrow?: string; title?: string; description?: string; children?: ReactNode; className?: string }) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container-pad">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">{eyebrow}</p>}
            {title && <h2 className="font-heading text-3xl font-extrabold tracking-tight text-fume-ink sm:text-4xl lg:text-5xl">{title}</h2>}
            {description && <p className="mt-4 text-base leading-7 text-fume-muted sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
