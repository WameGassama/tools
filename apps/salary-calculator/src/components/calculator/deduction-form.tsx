"use client"

import { useLanguage } from "@/src/lib/i18n/language-context"
import {
  FAGFORENING_MAX,
  HAANDVAERKER_MAX,
  MAX_AKASSE_MONTHLY,
  MAX_COMMUTE_KM_DAY,
  MAX_RENTEUDGIFTER,
  SERVICE_MAX,
} from "@/src/lib/tax/constants"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { FormValues } from "@/src/components/calculator/form-values"
import KrInput from "./kr-input"
import { useNumberField } from "./use-number-field"

interface SalaryFormProps {
  values: FormValues
  onChange: <K extends keyof FormValues>(key: K, value: FormValues[K]) => void
}

function DeductionForm({ values, onChange }: SalaryFormProps) {
  const { t } = useLanguage()
  const commuteKmField = useNumberField(
    values.commuteKmPerDay,
    (v) => onChange("commuteKmPerDay", v),
    { min: 0, max: MAX_COMMUTE_KM_DAY }
  )

  return (
    <Accordion defaultValue={[]} className={"rounded-xl border"}>
      <AccordionItem value="fradrag">
        <AccordionTrigger
          className={
            "p-4 text-xs font-medium tracking-wide text-muted-foreground uppercase"
          }
        >
          {t.deductionForm.accordionTitle}
        </AccordionTrigger>
        <AccordionContent className={"p-4"}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="commute-km">{t.deductionForm.commuteLabel}</Label>
              <Input
                id="commute-km"
                type="number"
                min={0}
                max={MAX_COMMUTE_KM_DAY}
                step={1}
                {...commuteKmField}
                className="[appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="fagforening">
                {t.deductionForm.fagforeningLabel}
              </Label>
              <KrInput
                id="fagforening"
                max={FAGFORENING_MAX}
                value={values.fagforeningDeduction}
                onChange={(v) => onChange("fagforeningDeduction", v)}
              />
              <p className="text-xs text-muted-foreground">
                {t.deductionForm.fagforeningMax}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="akasse">{t.deductionForm.akasseLabel}</Label>
              <KrInput
                id="akasse"
                max={MAX_AKASSE_MONTHLY}
                value={values.akasseDeduction}
                onChange={(v) => onChange("akasseDeduction", v)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="renteudgifter">
                {t.deductionForm.renteudgifterLabel}
              </Label>
              <KrInput
                id="renteudgifter"
                step={100}
                max={MAX_RENTEUDGIFTER}
                value={values.renteudgifter}
                onChange={(v) => onChange("renteudgifter", v)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="haandvaerker">
                {t.deductionForm.haandvaerkerLabel}
              </Label>
              <KrInput
                id="haandvaerker"
                step={100}
                max={HAANDVAERKER_MAX}
                value={values.haandvaerkerUdgift}
                onChange={(v) => onChange("haandvaerkerUdgift", v)}
              />
              <p className="text-xs text-muted-foreground">
                {t.deductionForm.haandvaerkerMax}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="service">{t.deductionForm.serviceLabel}</Label>
              <KrInput
                id="service"
                step={100}
                max={SERVICE_MAX}
                value={values.serviceUdgift}
                onChange={(v) => onChange("serviceUdgift", v)}
              />
              <p className="text-xs text-muted-foreground">
                {t.deductionForm.serviceMax}
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DeductionForm
