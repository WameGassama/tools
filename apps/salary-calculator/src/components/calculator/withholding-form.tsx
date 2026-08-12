"use client"

import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Slider } from "@workspace/ui/components/slider"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { useLanguage } from "@/src/lib/i18n/language-context"
import type {
  IncomeType,
  LoenPeriode,
  SkattekortType,
} from "@/src/lib/tax/types"
import KrInput from "./kr-input"
import type { FormValues } from "./form-values"

interface WithholdingFormProps {
  values: FormValues
  onChange: <K extends keyof FormValues>(key: K, value: FormValues[K]) => void
}

export function WithholdingForm({ values, onChange }: WithholdingFormProps) {
  const { t } = useLanguage()
  const isLoen = values.whIncomeType === "loen"
  const isBikort = values.whSkattekortType === "bikort"

  const incomeTypes: Array<{ value: IncomeType; label: string }> = [
    { value: "loen", label: t.withholdingForm.incomeTypes.loen },
    { value: "pension", label: t.withholdingForm.incomeTypes.pension },
    { value: "dagpenge", label: t.withholdingForm.incomeTypes.dagpenge },
    { value: "su", label: t.withholdingForm.incomeTypes.su },
    { value: "efterloen", label: t.withholdingForm.incomeTypes.efterloen },
  ]

  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t.withholdingForm.cardLabel}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="wh-income-type">
            {t.withholdingForm.incomeTypeLabel}
          </Label>
          <Select
            value={values.whIncomeType}
            onValueChange={(value) =>
              onChange("whIncomeType", value as IncomeType)
            }
          >
            <SelectTrigger id="wh-income-type" className="w-full">
              <SelectValue>
                {(value: string | null) =>
                  incomeTypes.find((it) => it.value === value)?.label ?? null
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {incomeTypes.map((it) => (
                <SelectItem key={it.value} value={it.value}>
                  {it.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>{t.withholdingForm.skattekortLabel}</Label>
          <ToggleGroup
            variant="outline"
            value={[values.whSkattekortType]}
            onValueChange={(value) => {
              if (value[0])
                onChange("whSkattekortType", value[0] as SkattekortType)
            }}
            className="xs:w-fit xs:flex-row w-full flex-col"
          >
            <ToggleGroupItem
              value="hovedkort"
              className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
            >
              {t.withholdingForm.hovedkort}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="bikort"
              className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
            >
              {t.withholdingForm.bikort}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="wh-gross-amount">
            {t.withholdingForm.grossAmountLabel}
          </Label>
          <KrInput
            id="wh-gross-amount"
            step={100}
            value={values.whGrossAmount}
            onChange={(v) => onChange("whGrossAmount", v)}
          />
        </div>

        {isLoen && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="wh-atp-amount">
              {t.withholdingForm.atpAmountLabel}
            </Label>
            <KrInput
              id="wh-atp-amount"
              value={values.whAtpAmount}
              onChange={(v) => onChange("whAtpAmount", v)}
            />
            <p className="text-xs text-muted-foreground">
              {t.withholdingForm.atpHint}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="wh-traekprocent">
            {t.withholdingForm.traekprocentLabel}
          </Label>
          <div className="relative">
            <Input
              id="wh-traekprocent"
              type="number"
              min={0}
              step={1}
              value={values.whTraekprocent}
              onChange={(e) =>
                onChange("whTraekprocent", Number(e.target.value) || 0)
              }
              className="[appearance:textfield] pr-8 tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <span className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-sm text-muted-foreground">
              %
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t.withholdingForm.traekprocentHint}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>{t.withholdingForm.loenperiodeLabel}</Label>
          <ToggleGroup
            variant="outline"
            value={[values.whLoenPeriode]}
            onValueChange={(value) => {
              if (value[0]) onChange("whLoenPeriode", value[0] as LoenPeriode)
            }}
            className="xs:w-fit xs:flex-row w-full flex-col"
          >
            <ToggleGroupItem
              value="maaned"
              className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
            >
              {t.salaryForm.prManed}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="hver-anden-uge"
              className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
            >
              {t.withholdingForm.hverAndenUge}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="wh-maanedsfradrag">
            {t.withholdingForm.maanedsfradragLabel}
          </Label>
          <KrInput
            id="wh-maanedsfradrag"
            value={values.whMaanedsfradrag}
            onChange={(v) => onChange("whMaanedsfradrag", v)}
            disabled={isBikort}
          />
          <p className="text-xs text-muted-foreground">
            {isBikort
              ? t.withholdingForm.maanedsfradragHintBikort
              : t.withholdingForm.maanedsfradragHintNormal}
          </p>
        </div>

        {isLoen && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="wh-pension">
              <span>
                {t.salaryForm.pensionLabel.prefix}
                <span className="tabular-nums">{values.whPensionPercent}</span>
                {t.salaryForm.pensionLabel.suffix}
              </span>
            </Label>
            <Slider
              id="wh-pension"
              min={0}
              max={15}
              step={0.5}
              value={values.whPensionPercent}
              onValueChange={(value) =>
                onChange("whPensionPercent", value as number)
              }
            />
          </div>
        )}

        {isLoen && (
          <div className="mt-1 flex flex-col gap-2.5">
            <Label className="font-normal">
              <Checkbox
                checked={values.whIsUnder18}
                onCheckedChange={(checked) =>
                  onChange("whIsUnder18", checked === true)
                }
              />
              {t.withholdingForm.under18Checkbox}
            </Label>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
