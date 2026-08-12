"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

// Controlled <input type="number"> fields that recompute their value from
// `e.target.value || 0` on every keystroke snap back to "0" as soon as the
// field is cleared, before the user can type a replacement digit. This hook
// keeps the field's own text as local state so it can sit empty mid-edit,
// only falling back to 0 on blur.
export function useNumberField(
  value: number,
  onChange: (value: number) => void,
  { min = 0, max = Infinity }: { min?: number; max?: number } = {},
) {
  const [text, setText] = useState(value === 0 ? "" : String(value));
  const isFocusedRef = useRef(false);

  useEffect(() => {
    if (!isFocusedRef.current) setText(value === 0 ? "" : String(value));
  }, [value]);

  return {
    value: text,
    onFocus: () => {
      isFocusedRef.current = true;
    },
    onBlur: () => {
      isFocusedRef.current = false;
      if (text === "") {
        onChange(0);
        return;
      }
      const clamped = Math.min(max, Math.max(min, Number(text)));
      if (clamped !== Number(text)) setText(clamped === 0 ? "" : String(clamped));
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      if (next === "" || Number.isNaN(Number(next))) {
        setText(next);
        return;
      }
      const clamped = Math.min(max, Math.max(min, Number(next)));
      // Hard cap: once the typed value is out of range, snap the displayed
      // text to the bound too, so it's not possible to type past max/min.
      setText(clamped === Number(next) ? next : String(clamped));
      onChange(clamped);
    },
  };
}
