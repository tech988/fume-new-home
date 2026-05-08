export const FumeLoader = ({ label = "Loading Fume Coworking" }: { readonly label?: string }) => (
  <div className="fume-loader" role="status" aria-live="polite" aria-label={label}>
    <div className="fume-loader__ring" aria-hidden="true">
      <span className="fume-loader__dot fume-loader__dot--one" />
      <span className="fume-loader__dot fume-loader__dot--two" />
      <span className="fume-loader__dot fume-loader__dot--three" />
    </div>
    <span className="fume-loader__text">{label}</span>
  </div>
);
