"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import { useLanguage } from "@/src/lib/i18n/language-context";

export function Glossary() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-10 sm:py-12">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.glossary.title}
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {t.glossary.subtitle}
      </p>

      <Card className="mt-6">
        <CardContent>
          <dl className="divide-y divide-border">
            {t.glossary.terms.map((entry) => (
              <div key={entry.term} className="py-4 first:pt-0 last:pb-0">
                <dt className="font-medium">{entry.term}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {entry.definition}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </section>
  );
}
