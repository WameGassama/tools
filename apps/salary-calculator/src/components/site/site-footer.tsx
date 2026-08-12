"use client";

import Image from "next/image";

import { Badge } from "@workspace/ui/components/badge";
import { useLanguage } from "@/src/lib/i18n/language-context";

const BRAND = "Hvad får jeg udbetalt";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="px-4 pb-10 sm:pb-12">
      <div className="mx-auto max-w-5xl rounded-4xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
            <Image
              src="/hfu-icon-filled.svg"
              alt={BRAND}
              width={40}
              height={40}
            />
          </span>
          <span className="font-heading text-base font-semibold">{BRAND}</span>
          <Badge
            variant="outline"
            className="h-auto w-auto max-w-full whitespace-normal border-white/25 bg-white/15 py-1 text-left text-primary-foreground"
          >
            {t.footer.badge}
          </Badge>
        </div>

        <p className="mt-5 max-w-2xl text-xs text-primary-foreground/80">
          {t.footer.disclaimer}
        </p>

        <p className="mt-6 text-xs text-primary-foreground/70">
          {t.footer.copyright(BRAND)}
        </p>
      </div>
    </footer>
  );
}
