export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly align?: "left" | "center";
}) => (
  <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
    <span className="text-xs font-bold uppercase tracking-[0.24em] text-fume-primary">{eyebrow}</span>
    <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-fume-charcoal md:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-neutral-600">{description}</p> : null}
  </div>
);
