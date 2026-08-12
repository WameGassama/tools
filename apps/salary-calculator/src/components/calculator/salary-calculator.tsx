"use client"

import { useState } from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { useLanguage } from "@/src/lib/i18n/language-context"
import { MUNICIPALITIES } from "@/src/lib/municipalities"
import { calculateSalary } from "@/src/lib/tax/calculate"
import {
  computeWithholding,
  resolveFradragPerPeriode,
} from "@/src/lib/tax/withholding"

import {
  DEFAULT_FORM_VALUES,
  type CalculatorMode,
  type FormValues,
} from "./form-values"
import { SalaryForm } from "./salary-form"
import { SalaryResult } from "./salary-result"
import { WithholdingForm } from "./withholding-form"
import { WithholdingResult } from "./withholding-result"
import DeductionForm from "./deduction-form"

export function SalaryCalculator() {
  const { t } = useLanguage()
  const [values, setValues] = useState<FormValues>(DEFAULT_FORM_VALUES)

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }))
  }

  const municipality = MUNICIPALITIES[values.muniIndex] ?? MUNICIPALITIES[0]

  const result = calculateSalary(values.grossSalary, values.period, {
    pensionPercent: values.pensionPercent,
    atpIncluded: values.atpIncluded,
    isUnder18: values.isUnder18,
    churchMember: values.churchMember,
    commuteKmPerDay: values.commuteKmPerDay,
    fagforeningDeduction: values.fagforeningDeduction,
    akasseDeduction: values.akasseDeduction,
    renteudgifter: values.renteudgifter,
    haandvaerkerUdgift: values.haandvaerkerUdgift,
    serviceUdgift: values.serviceUdgift,
    kommuneRate: municipality.kommuneRate,
    kirkeRate: municipality.kirkeRate,
  })

  const whFradragPerPeriode = resolveFradragPerPeriode(
    values.whLoenPeriode,
    values.whMaanedsfradrag
  )

  const withholdingResult = computeWithholding({
    incomeType: values.whIncomeType,
    skattekortType: values.whSkattekortType,
    grossAmount: values.whGrossAmount,
    atpAmount: values.whAtpAmount,
    pensionPercent: values.whPensionPercent,
    isUnder18: values.whIsUnder18,
    traekprocent: values.whTraekprocent,
    fradragPerPeriode: whFradragPerPeriode,
  })

  return (
    <section id="beregner" className="flex flex-col gap-6 p-4 md:py-8">
      <ToggleGroup
        variant="outline"
        value={[values.mode]}
        onValueChange={(value) => {
          if (value[0]) update("mode", value[0] as CalculatorMode)
        }}
        className="xs:flex-row flex w-full flex-col justify-center sm:justify-start"
      >
        <ToggleGroupItem
          value="progressive"
          className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
        >
          {t.calculatorModes.progressive}
        </ToggleGroupItem>
        <ToggleGroupItem
          value="withholding"
          className="xs:w-auto xs:whitespace-nowrap w-full text-center whitespace-normal"
        >
          {t.calculatorModes.withholding}
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        {values.mode === "progressive" ? (
          <>
            <div className="flex flex-col gap-6">
              <SalaryForm values={values} onChange={update} />
              <DeductionForm values={values} onChange={update} />
            </div>
            <SalaryResult
              result={result}
              period={values.period}
              municipality={municipality}
            />
          </>
        ) : (
          <>
            <WithholdingForm values={values} onChange={update} />
            <WithholdingResult
              result={withholdingResult}
              grossAmount={values.whGrossAmount}
              traekprocent={values.whTraekprocent}
              incomeType={values.whIncomeType}
            />
          </>
        )}
      </div>
    </section>
  )
}
