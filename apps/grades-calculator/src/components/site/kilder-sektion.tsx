import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

/**
 * Native <details>/<summary> – ingen JS nødvendig for at folde ud, og
 * indholdet er stadig til stede i DOM'en (og dermed indekserbart) selvom
 * det er skjult som udgangspunkt.
 */
export function KilderSektion({ children }: { children: ReactNode }) {
  return (
    <details className="group mt-6 border-t pt-6 text-xs leading-relaxed text-muted-foreground">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        <ChevronRight className="size-3.5 shrink-0 transition-transform group-open:rotate-90" />
        Kilder
      </summary>
      <div className="mt-2 pl-5">{children}</div>
    </details>
  )
}

export interface KildeItem {
  href: string
  title: string
  description: string
}

/**
 * Kun uvm.dk og retsinformation.dk bruges som kilder – de eneste to
 * myndighedskilder for gymnasiale/folkeskole-regler.
 */
export function Regelgrundlag({ items }: { items: KildeItem[] }) {
  return (
    <>
      <div className="font-semibold text-foreground">Regelgrundlag:</div>
      <ul className="mt-2 list-disc space-y-2 pl-4">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {item.title}
            </a>
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    </>
  )
}
