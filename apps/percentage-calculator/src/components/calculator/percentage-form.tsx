import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

import type { PercentageMode } from "@/src/lib/percentage"

interface FieldConfig {
  key1: string
  label1: string
  placeholder1: string
  key2: string
  label2: string
  placeholder2: string
}

const FIELD_CONFIG: Record<PercentageMode, FieldConfig> = {
  change: {
    key1: "from",
    label1: "Fra",
    placeholder1: "100",
    key2: "to",
    label2: "Til",
    placeholder2: "150",
  },
  "of-total": {
    key1: "part",
    label1: "Del",
    placeholder1: "30",
    key2: "total",
    label2: "Total",
    placeholder2: "120",
  },
  "find-whole": {
    key1: "part",
    label1: "Del",
    placeholder1: "30",
    key2: "percent",
    label2: "Procent",
    placeholder2: "25",
  },
  "of-number": {
    key1: "number",
    label1: "Tal",
    placeholder1: "200",
    key2: "percent",
    label2: "Procent",
    placeholder2: "15",
  },
}

interface PercentageFormProps {
  mode: PercentageMode
  values: Record<string, string>
  onChange: (field: string, value: string) => void
}

export function PercentageForm({
  mode,
  values,
  onChange,
}: PercentageFormProps) {
  const config = FIELD_CONFIG[mode]

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-7">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${mode}-${config.key1}`}>{config.label1}</Label>
        <Input
          id={`${mode}-${config.key1}`}
          type="text"
          inputMode="decimal"
          value={values[config.key1] ?? ""}
          onChange={(e) => onChange(config.key1, e.target.value)}
          placeholder={config.placeholder1}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${mode}-${config.key2}`}>{config.label2}</Label>
        <Input
          id={`${mode}-${config.key2}`}
          type="text"
          inputMode="decimal"
          value={values[config.key2] ?? ""}
          onChange={(e) => onChange(config.key2, e.target.value)}
          placeholder={config.placeholder2}
        />
      </div>
    </div>
  )
}
