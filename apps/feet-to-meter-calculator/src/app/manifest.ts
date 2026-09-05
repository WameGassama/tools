import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fod til meter omregner",
    short_name: "Fod til meter",
    description:
      "Gratis omregner mellem fod og meter med tommer og valgfrie decimaler.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#c2410c",
    lang: "da",
  }
}
