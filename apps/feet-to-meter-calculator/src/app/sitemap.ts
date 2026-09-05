import type { MetadataRoute } from "next"

import { STATIC_ROUTES } from "@/src/lib/pages"

const SITE_URL = "https://www.fodtilmeter.dk"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
