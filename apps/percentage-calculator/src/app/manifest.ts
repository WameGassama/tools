import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Procentregner.dk – Beregn procent nemt og hurtigt",
    short_name: "Procentregner",
    description:
      "Gratis procentregner: beregn procent af et tal, procentvis stigning/fald, hvor stor en andel et tal er af et andet, og find totalen ud fra en procentdel.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1447e6",
    lang: "da",
  }
}
