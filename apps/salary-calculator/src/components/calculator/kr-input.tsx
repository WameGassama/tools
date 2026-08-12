"use client";

import { Input } from "@workspace/ui/components/input";
import { useNumberField } from "./use-number-field";

function KrInput({
  id,
  value,
  onChange,
  step = 10,
  max,
  disabled,
}: {
  id: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  max?: number;
  disabled?: boolean;
}) {
  const field = useNumberField(value, onChange, { min: 0, max });

  return (
    <div className="relative">
      <Input
        id={id}
        type="number"
        min={0}
        max={max}
        step={step}
        disabled={disabled}
        {...field}
        className="pr-10 tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <span className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-sm text-muted-foreground">
        kr.
      </span>
    </div>
  );
}

export default KrInput;
