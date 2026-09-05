import { Plus } from "lucide-react"

export interface FaqItem {
  q: string
  a: string
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function Faq({
  items,
  title = "Ofte stillede spørgsmål",
  description = "De spørgsmål vi oftest får om omregning mellem fod og meter.",
}: {
  items: FaqItem[]
  title?: string
  description?: string
}) {
  return (
    <section className="mt-14 print:hidden">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-2 max-w-[60ch] text-pretty text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-col gap-2.5">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-lg border border-border bg-card px-4 py-3.5 open:border-primary/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold">
              <span>{item.q}</span>
              <Plus
                aria-hidden="true"
                className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="mt-3 border-t border-dashed border-border pt-3 text-[15px] leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
