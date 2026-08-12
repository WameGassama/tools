"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { useLanguage } from "@/src/lib/i18n/language-context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="saadan-beregnes" className="px-4 py-10 sm:py-12">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.howItWorks.title}
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {t.howItWorks.subtitle}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.howItWorks.steps.map((step, i) => (
          <Card key={step.kicker} className="transition-shadow hover:shadow-md">
            <CardHeader className="gap-3">
              <div
                aria-label={step.kicker}
                className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-semibold tabular-nums text-primary-foreground"
              >
                {i + 1}
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
