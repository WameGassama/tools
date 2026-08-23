import { FAQ } from "@/src/lib/faq"

const [featured, ...rest] = FAQ

export function Faq() {
  return (
    <section id="faq" className="mt-[52px] scroll-mt-20">
      <h2 className="mb-4 font-heading text-[26px] font-semibold tracking-tight">
        Ofte stillede spørgsmål
      </h2>

      <div className="mb-2.5 rounded-xl border border-primary bg-secondary p-5">
        <div className="mb-2 font-mono text-[11px] font-semibold tracking-[0.07em] text-primary uppercase">
          Mest stillet
        </div>
        <h3 className="mb-2 font-heading text-[17px] font-semibold">
          {featured!.q}
        </h3>
        <p className="text-muted-foreground">{featured!.a}</p>
      </div>

      <div className="border-t border-border">
        {rest.map((item) => (
          <details key={item.q} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-[15px] text-[15.5px] font-semibold">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="text-[13px] text-primary transition-transform group-open:rotate-90"
              >
                ▶
              </span>
            </summary>
            <div className="pb-[15px] text-muted-foreground">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
