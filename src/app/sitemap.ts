import type { MetadataRoute } from "next";

const base = "https://wglewis0721.github.io/voting-al-website";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ballot-explorer",
    "/issues",
    "/candidates",
    "/civic-education",
    "/alabama-map",
    "/faq",
    "/about",
    "/sources-methodology",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
