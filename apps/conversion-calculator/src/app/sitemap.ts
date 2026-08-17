import type { MetadataRoute } from "next";

const SITE_URL = "https://www.omregning.dk";

const HUB_PATHS = [
  "/vaegt",
  "/temperatur",
  "/laengde",
  "/areal",
  "/hastighed",
  "/volumen",
  "/tryk",
];

const CONVERTER_PATHS = [
  // Vægt
  "/vaegt/pund-til-kg",
  "/vaegt/kg-til-lbs",
  "/vaegt/kg-til-gram",
  "/vaegt/gram-til-kg",
  // Temperatur
  "/temperatur/fahrenheit-til-celsius",
  "/temperatur/celsius-til-fahrenheit",
  // Længde
  "/laengde/fod-til-meter",
  "/laengde/meter-til-fod",
  "/laengde/hoejde-omregner",
  "/laengde/tommer-til-cm",
  "/laengde/cm-til-tommer",
  "/laengde/tommer-til-mm",
  "/laengde/mm-til-tommer",
  "/laengde/meter-til-cm",
  "/laengde/cm-til-m",
  "/laengde/miles-til-km",
  "/laengde/km-til-miles",
  "/laengde/soemil-til-km",
  "/laengde/yard-til-meter",
  "/laengde/meter-til-yard",
  "/laengde/mm-til-m",
  "/laengde/m-til-mm",
  "/laengde/mm-til-cm",
  "/laengde/cm-til-mm",
  // Areal
  "/areal/hektar-til-km2",
  "/areal/hektar-til-m2",
  "/areal/hektar-til-tonder",
  "/areal/km2-til-hektar",
  "/areal/m2-til-hektar",
  "/areal/tonder-til-hektar",
  // Hastighed
  "/hastighed/knob-til-km-t",
  "/hastighed/km-t-til-knob",
  "/hastighed/km-t-til-ms",
  "/hastighed/ms-til-km-t",
  "/hastighed/mph-til-km-t",
  "/hastighed/km-t-til-mph",
  // Volumen
  "/volumen/ml-til-dl",
  "/volumen/dl-til-ml",
  "/volumen/ml-til-l",
  "/volumen/l-til-ml",
  "/volumen/ml-til-cl",
  "/volumen/cl-til-ml",
  "/volumen/cl-til-dl",
  "/volumen/dl-til-cl",
  "/volumen/cl-til-l",
  "/volumen/l-til-cl",
  "/volumen/dl-til-l",
  "/volumen/l-til-dl",
  // Tryk
  "/tryk/psi-til-bar",
  "/tryk/bar-til-psi",
  "/tryk/kpa-til-bar",
  "/tryk/bar-til-kpa",
];

const INFO_PATHS = ["/om-os"];

const LEGAL_PATHS = [
  "/privatlivspolitik",
  "/vilkaar",
  "/ansvarsfraskrivelse",
];

function toEntries(
  paths: string[],
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toEntries(HUB_PATHS, 0.8, "monthly"),
    ...toEntries(CONVERTER_PATHS, 0.6, "monthly"),
    ...toEntries(INFO_PATHS, 0.5, "yearly"),
    ...toEntries(LEGAL_PATHS, 0.3, "yearly"),
  ];
}
