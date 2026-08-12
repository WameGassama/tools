"use client";

import { Button } from "@workspace/ui/components/button";
import { useLanguage } from "@/src/lib/i18n/language-context";
import type { Locale } from "@/src/lib/i18n/translations";

const LANGUAGES: Record<Locale, { flag: string; label: string }> = {
  da: { flag: "🇩🇰", label: "DANSK" },
  en: { flag: "🇬🇧", label: "ENGLISH" },
};

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const other: Locale = locale === "da" ? "en" : "da";
  const current = LANGUAGES[locale];

  return (
    <Button
      variant="outline"
      className="gap-2 rounded-full px-3 cursor-pointer"
      onClick={() => setLocale(other)}
      aria-label={`Switch language to ${LANGUAGES[other].label}`}
    >
      <span className="text-base leading-none">{current.flag}</span>
      <span className="text-xs font-semibold tracking-wide">
        {current.label}
      </span>
    </Button>
  );
}
