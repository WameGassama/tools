import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hvad får jeg udbetalt – Løn- og skatteberegner",
    short_name: "Hvad får jeg udbetalt",
    description:
      "Beregn din nettoløn efter AM-bidrag, bund-, mellem-, top- og kommuneskat med de gældende 2026-satser.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1447e6",
    lang: "da",
    icons: [
      {
        src: "/hfu-icon-filled.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
