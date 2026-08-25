import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { ComponentType } from "react"

import { EmbedFrame } from "@/src/components/embed/embed-frame"
import { BarPsiConverter } from "@/src/components/site/bar-psi-converter"
import { ClDlConverter } from "@/src/components/site/cl-dl-converter"
import { ClLConverter } from "@/src/components/site/cl-l-converter"
import { DlLConverter } from "@/src/components/site/dl-l-converter"
import { FahrenheitCelsiusConverter } from "@/src/components/site/fahrenheit-celsius-converter"
import { FootMeterConverter } from "@/src/components/site/foot-meter-converter"
import { GramKgConverter } from "@/src/components/site/gram-kg-converter"
import { HektarKm2Converter } from "@/src/components/site/hektar-km2-converter"
import { HektarM2Converter } from "@/src/components/site/hektar-m2-converter"
import { HektarTonderConverter } from "@/src/components/site/hektar-tonder-converter"
import { HeightConverter } from "@/src/components/site/height-converter"
import { InchCmConverter } from "@/src/components/site/inch-cm-converter"
import { KmtMsConverter } from "@/src/components/site/kmt-ms-converter"
import { KnotKmhConverter } from "@/src/components/site/knot-kmh-converter"
import { KpaBarConverter } from "@/src/components/site/kpa-bar-converter"
import { LbsKgConverter } from "@/src/components/site/lbs-kg-converter"
import { MeterCmConverter } from "@/src/components/site/meter-cm-converter"
import { MileKmConverter } from "@/src/components/site/mile-km-converter"
import { MlClConverter } from "@/src/components/site/ml-cl-converter"
import { MlDlConverter } from "@/src/components/site/ml-dl-converter"
import { MlLConverter } from "@/src/components/site/ml-l-converter"
import { MmCmConverter } from "@/src/components/site/mm-cm-converter"
import { MmMConverter } from "@/src/components/site/mm-m-converter"
import { MphKmtConverter } from "@/src/components/site/mph-kmt-converter"
import { SoemilKmConverter } from "@/src/components/site/soemil-km-converter"
import { TommerMmConverter } from "@/src/components/site/tommer-mm-converter"
import { YardMeterConverter } from "@/src/components/site/yard-meter-converter"
import { isValidHexColor } from "@/src/lib/color-contrast"
import {
  EMBED_CALCULATORS,
  findEmbedCalculator,
  type EmbedComponentKey,
} from "@/src/lib/embed-calculators"

const COMPONENT_REGISTRY: Record<
  EmbedComponentKey,
  ComponentType<{ title?: string; reversed?: boolean }>
> = {
  GramKg: GramKgConverter,
  LbsKg: LbsKgConverter,
  FahrenheitCelsius: FahrenheitCelsiusConverter,
  MeterCm: MeterCmConverter,
  MmCm: MmCmConverter,
  InchCm: InchCmConverter,
  FootMeter: FootMeterConverter,
  Height: HeightConverter,
  MileKm: MileKmConverter,
  MmM: MmMConverter,
  YardMeter: YardMeterConverter,
  TommerMm: TommerMmConverter,
  SoemilKm: SoemilKmConverter,
  HektarKm2: HektarKm2Converter,
  HektarM2: HektarM2Converter,
  HektarTonder: HektarTonderConverter,
  KnotKmh: KnotKmhConverter,
  MphKmt: MphKmtConverter,
  KmtMs: KmtMsConverter,
  ClDl: ClDlConverter,
  ClL: ClLConverter,
  MlCl: MlClConverter,
  DlL: DlLConverter,
  MlDl: MlDlConverter,
  MlL: MlLConverter,
  KpaBar: KpaBarConverter,
  BarPsi: BarPsiConverter,
}

export function generateStaticParams() {
  return EMBED_CALCULATORS.map((calculator) => ({
    slug: [calculator.category, calculator.slug],
  }))
}

function parseSlug(slug: string[]) {
  if (slug.length !== 2) return undefined
  const [category, pair] = slug
  return findEmbedCalculator(category!, pair!)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const calculator = parseSlug(slug)

  return {
    title: calculator ? `${calculator.title} – omregning.dk` : "omregning.dk",
    robots: { index: false, follow: false },
  }
}

export default async function EmbedPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>
  searchParams: Promise<{ color?: string }>
}) {
  const { slug } = await params
  const { color } = await searchParams
  const calculator = parseSlug(slug)
  if (!calculator) notFound()

  const Converter = COMPONENT_REGISTRY[calculator.component]
  const safeColor = color && isValidHexColor(color) ? color.toLowerCase() : undefined

  return (
    <EmbedFrame color={safeColor}>
      <Converter title={calculator.title} reversed={calculator.reversed} />
    </EmbedFrame>
  )
}
