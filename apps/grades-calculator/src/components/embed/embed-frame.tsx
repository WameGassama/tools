"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

const SIZE_MESSAGE_TYPE = "gennemsnitsberegner:embed-size"
const REQUEST_SIZE_MESSAGE = "gennemsnitsberegner:request-size"

/**
 * Måler indholdshøjden og sender den til det parent-vindue, der har embedded
 * siden i en iframe, så embed-scriptet (se /del-beregner) kan tilpasse
 * iframens højde – uden at bruge <body>, hvis min-h-full ellers ville
 * rapportere en falsk (for stor) højde.
 *
 * `color` (valideret 6-cifret hex uden #) lader webmasteren, der indlejrer
 * beregneren, override sitets primærfarve via ?color= på iframens src.
 * --ring og --primary-foreground er ikke afledt af --primary i CSS'en, så de
 * skal overrides eksplicit for hhv. fokusringe og knap-tekst (altid hvid).
 */
export function EmbedFrame({
  children,
  color,
}: {
  children: ReactNode
  color?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const colorStyle = color
    ? ({
        "--primary": `#${color}`,
        "--ring": `#${color}`,
        "--primary-foreground": "#ffffff",
      } as CSSProperties)
    : undefined

  useEffect(() => {
    const el = ref.current
    if (!el || window.self === window.top) return

    function postHeight() {
      if (!el) return
      window.parent.postMessage(
        { type: SIZE_MESSAGE_TYPE, height: el.scrollHeight },
        "*"
      )
    }

    const observer = new ResizeObserver(postHeight)
    observer.observe(el)
    postHeight()

    function handleMessage(event: MessageEvent) {
      if (event.data === REQUEST_SIZE_MESSAGE) postHeight()
    }
    window.addEventListener("message", handleMessage)

    return () => {
      observer.disconnect()
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  return (
    <div ref={ref} className="p-4 sm:p-6" style={colorStyle}>
      {children}
    </div>
  )
}
