"use client"

import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
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
import { MUNICIPALITIES } from "@/src/lib/municipalities"
import { MAX_SALARY } from "@/src/lib/tax/constants"
import type { Period } from "@/src/lib/tax/types"
import KrInput from "./kr-input"
import type { FormValues } from "./form-values"

interface SalaryFormProps {
  values: FormValues
  onChange: <K extends keyof FormValues>(key: K, value: FormValues[K]) => void
}

export function SalaryForm({ values, onChange }: SalaryFormProps) {
  const { t } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t.salaryForm.cardLabel}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="gross-salary">{t.salaryForm.loenLabel}</Label>
          <KrInput
            id="gross-salary"
            step={100}
            max={MAX_SALARY}
            value={values.grossSalary}
            onChange={(v) => onChange("grossSalary", v)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>{t.salaryForm.periodeLabel}</Label>
          <ToggleGroup
            variant="outline"
            value={[values.period]}
            onValueChange={(value) => {
              if (value[0]) onChange("period", value[0] as Period)
            }}
          >
            <ToggleGroupItem value="month">
              {t.salaryForm.prManed}
            </ToggleGroupItem>
            <ToggleGroupItem value="year">{t.salaryForm.prAar}</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="municipality">{t.salaryForm.kommuneLabel}</Label>
          <Select
            value={String(values.muniIndex)}
            onValueChange={(value) => onChange("muniIndex", Number(value))}
          >
            <SelectTrigger id="municipality" className="w-full">
              <SelectValue>
                {(value: string | null) => {
                  const m = value ? MUNICIPALITIES[Number(value)] : undefined
                  return m ? `${m.name} (${m.kommuneRate.toFixed(2)}%)` : null
                }}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {MUNICIPALITIES.map((m, i) => (
                <SelectItem key={m.name} value={String(i)}>
                  {m.name} ({m.kommuneRate.toFixed(2)}%)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="pension">
            <span>
              {t.salaryForm.pensionLabel.prefix}
              <span className="tabular-nums">{values.pensionPercent}</span>
              {t.salaryForm.pensionLabel.suffix}
            </span>
          </Label>
          <Slider
            id="pension"
            min={0}
            max={15}
            step={0.5}
            value={values.pensionPercent}
            onValueChange={(value) =>
              onChange("pensionPercent", value as number)
            }
          />
        </div>

        <div className="mt-1 flex flex-col gap-2.5">
          <Label className="font-normal">
            <Checkbox
              checked={values.atpIncluded}
              onCheckedChange={(checked) =>
                onChange("atpIncluded", checked === true)
              }
            />
            {t.salaryForm.atpCheckbox}
          </Label>
          <Label className="font-normal">
            <Checkbox
              checked={values.churchMember}
              onCheckedChange={(checked) =>
                onChange("churchMember", checked === true)
              }
            />
            {t.salaryForm.churchCheckbox}
          </Label>
          <Label className="font-normal">
            <Checkbox
              checked={values.isUnder18}
              onCheckedChange={(checked) =>
                onChange("isUnder18", checked === true)
              }
            />
            {t.salaryForm.under18Checkbox}
          </Label>
        </div>
      </CardContent>
    </Card>
  )
}
