import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gennemsnitsberegner.dk – Beregn dit karaktergennemsnit",
    short_name: "Gennemsnitsberegner",
    description:
      "Gratis gennemsnitsberegner til den danske 7-trinsskala. Beregn dit vægtede karaktergennemsnit ud fra ECTS-point på få sekunder.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f5",
    theme_color: "#625fff",
    lang: "da",
  };
}
