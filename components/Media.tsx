import type { ImageAsset } from "@/lib/site";

export function ImageFrame({ image, className = "", caption }: { image: ImageAsset; className?: string; caption?: string }) {
  return (
    <figure className={`group overflow-hidden rounded-[2.25rem] border border-fume-line bg-white shadow-soft ${className}`}>
      <img src={image.src} alt={image.alt} className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
      {caption && <figcaption className="border-t border-fume-line bg-white/90 px-5 py-3 text-sm font-bold text-fume-muted">{caption}</figcaption>}
    </figure>
  );
}

export function HeroImageCard({ image, label = "Fume Workspace", stats }: { image: ImageAsset; label?: string; stats?: string[] }) {
  return (
    <div className="relative">
      <div className="absolute -right-6 -top-6 h-36 w-36 rounded-[2rem] bg-fume-rose/25 blur-2xl" />
      <div className="glass-card overflow-hidden rounded-[2.4rem] p-3 shadow-lift sm:p-4">
        <div className="relative h-[360px] overflow-hidden rounded-[2rem] sm:h-[440px]">
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-fume-ink/80 via-fume-ink/20 to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-fume-rose shadow-soft">{label}</span>
            <span className="rounded-full bg-fume-ink/70 px-3 py-2 text-xs font-bold text-white backdrop-blur">Live Preview</span>
          </div>
          {stats && (
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item} className="rounded-2xl bg-white/92 px-4 py-3 text-center text-xs font-extrabold text-fume-ink shadow-soft backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ImageMosaic({ images }: { images: ImageAsset[] }) {
  const [first, second, third] = images;
  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <ImageFrame image={first} className="h-[380px] lg:h-[520px]" caption="Workspace built for momentum" />
      <div className="grid gap-4">
        <ImageFrame image={second} className="h-[250px]" caption="Meeting-ready spaces" />
        <ImageFrame image={third} className="h-[250px]" caption="Focused private zones" />
      </div>
    </div>
  );
}

export function GalleryGrid({ images, limit }: { images: ImageAsset[]; limit?: number }) {
  const shown = typeof limit === "number" ? images.slice(0, limit) : images;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((image, index) => (
        <div key={`${image.src}-${index}`} className="group overflow-hidden rounded-[2rem] border border-fume-line bg-white shadow-soft">
          <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          <div className="p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fume-rose">Fume view {String(index + 1).padStart(2, "0")}</p>
            <p className="mt-2 text-sm leading-6 text-fume-muted">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SplitImageSection({ image, eyebrow, title, description, bullets = [], reverse = false }: { image: ImageAsset; eyebrow?: string; title: string; description: string; bullets?: string[]; reverse?: boolean }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "" : ""}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="font-heading text-xs font-extrabold uppercase tracking-[0.28em] text-fume-rose">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-fume-ink sm:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-8 text-fume-muted sm:text-lg">{description}</p>
        {bullets.length > 0 && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-fume-line bg-white/80 px-4 py-3 text-sm font-bold text-fume-ink shadow-sm">{bullet}</div>
            ))}
          </div>
        )}
      </div>
      <ImageFrame image={image} className={`h-[420px] ${reverse ? "lg:order-1" : ""}`} />
    </div>
  );
}
