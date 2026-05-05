import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { staticRoutes } from "@/lib/content/routes";

export const sitemap = (): MetadataRoute.Sitemap =>
  staticRoutes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date("2026-05-05"),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.75
  }));

export default sitemap;
