"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/content/gallery";
import type { GalleryCategory, GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils/class-names";
import { EmptyState } from "@/components/ui/state-block";

export const GalleryMasonry = ({
  items = galleryItems,
  categories = galleryCategories
}: {
  readonly items?: readonly GalleryItem[];
  readonly categories?: readonly GalleryCategory[];
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredItems = useMemo(
    () => activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory),
    [activeCategory, items]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-bold transition",
              activeCategory === category
                ? "border-fume-primary bg-fume-primary text-white"
                : "border-fume-primary/15 bg-white text-fume-secondary hover:bg-fume-muted"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredItems.length === 0 ? (
        <EmptyState title="No images found" description="Try another gallery filter." />
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <figure key={`${item.fileName}-${item.category}`} className="mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-white shadow-card">
              <div className="relative h-64">
                <Image
                  src={`/images/gallery/${item.fileName}`}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 p-4 text-sm">
                <span className="font-bold text-fume-charcoal">{item.alt}</span>
                <span className="rounded-full bg-fume-muted px-3 py-1 text-xs font-bold text-fume-primary">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};
