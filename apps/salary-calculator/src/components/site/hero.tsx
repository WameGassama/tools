"use client";

import { useLanguage } from "@/src/lib/i18n/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="px-4 md:pb-8">
      <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight lg:text-5xl text-center sm:text-left">
        {t.hero.title}
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground text-sm md:text-base text-center sm:text-left">
        {t.hero.subtitle}
      </p>
    </header>
  );
}
