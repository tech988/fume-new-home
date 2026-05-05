import type { ReactNode } from "react";

export const LoadingState = ({ label = "Loading content" }: { readonly label?: string }) => (
  <div role="status" aria-live="polite" className="rounded-3xl border border-neutral-200 bg-white p-8 text-center text-neutral-600 shadow-card">
    {label}...
  </div>
);

export const ErrorState = ({ message = "Something went wrong." }: { readonly message?: string }) => (
  <div role="alert" className="rounded-3xl border border-fume-primary/25 bg-fume-primary/5 p-8 text-center text-fume-secondary shadow-card">
    {message}
  </div>
);

export const EmptyState = ({
  title = "No content available",
  description,
  action
}: {
  readonly title?: string;
  readonly description?: string;
  readonly action?: ReactNode;
}) => (
  <div className="rounded-3xl border border-dashed border-fume-primary/30 bg-white p-8 text-center shadow-card">
    <h3 className="font-heading text-xl font-bold text-fume-charcoal">{title}</h3>
    {description ? <p className="mt-2 text-neutral-600">{description}</p> : null}
    {action ? <div className="mt-5">{action}</div> : null}
  </div>
);
