import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import type { Route } from "@/lib/types";

export const createMetadata = ({
  title,
  description,
  path,
  image = "/images/gallery/udyog-vihar-reception-with-lobby-side-1.jpg"
}: {
  readonly title: string;
  readonly description: string;
  readonly path: Route;
  readonly image?: string;
}): Metadata => {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: image, alt: title }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
};
