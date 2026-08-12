"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useLanguage } from "@/src/lib/i18n/language-context"

export function Faq() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="px-4 py-10 sm:py-12">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.faq.title}
      </h2>
      <div className="mt-5 flex max-w-2xl flex-col gap-3">
        {t.faq.items.map((faq) => (
          <Card key={faq.q} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-base">{faq.q}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
