import {
  ArrowHorizontalSwap,
  Bucket,
  Celsius,
  Danger,
  Flash,
  Maximize,
  Ruler,
  Weight,
} from "@workspace/ui/icons"

export const DefaultCategoryIcon = ArrowHorizontalSwap

export const CATEGORY_ICONS: Record<string, typeof ArrowHorizontalSwap> = {
  vaegt: Weight,
  temperatur: Celsius,
  laengde: Ruler,
  areal: Maximize,
  hastighed: Flash,
  volumen: Bucket,
  tryk: Danger,
}
