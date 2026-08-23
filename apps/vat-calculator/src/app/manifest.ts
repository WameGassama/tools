import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MomsBeregner – beregn 25% moms af et beløb",
    short_name: "MomsBeregner",
    description:
      "Gratis momsberegner: udregn moms af et beløb med 25%, 12,5% eller 6,25% moms – både inklusiv og eksklusiv moms.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#047857",
    lang: "da",
  }
}
