import type { MetadataRoute } from "next";

const SITE_URL = "https://www.gennemsnitsberegner.dk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/embed/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
