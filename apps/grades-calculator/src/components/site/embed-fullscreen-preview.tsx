"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const SIZE_MESSAGE_TYPE = "gennemsnitsberegner:embed-size"

interface EmbedFullscreenPreviewProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  src: string
  title: string
  attributionHref: string
  initialHeight: number
}

export function EmbedFullscreenPreview({
  open,
  onOpenChange,
  src,
  title,
  attributionHref,
  initialHeight,
}: EmbedFullscreenPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(initialHeight)

  useEffect(() => {
    if (!open) return

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false)
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) return
    setHeight(initialHeight)

    function handleMessage(event: MessageEvent) {
      if (!event.data || event.data.type !== SIZE_MESSAGE_TYPE) return
      if (event.source !== iframeRef.current?.contentWindow) return
      const nextHeight = Number(event.data.height)
      if (nextHeight > 0) setHeight(nextHeight)
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [open, initialHeight, src])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-foreground/60 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <span className="text-sm font-medium text-white">{title}</span>
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => onOpenChange(false)}
          aria-label="Luk fuldskærmsvisning"
          className="text-white/80 hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto px-4 pb-6 sm:px-6">
        <div className="mx-auto flex max-h-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-black/5">
          <div className="flex items-center gap-3 border-b bg-muted/60 px-3 py-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-muted-foreground/25" />
              <span className="size-2 rounded-full bg-muted-foreground/25" />
              <span className="size-2 rounded-full bg-muted-foreground/25" />
            </div>
            <div className="flex-1 truncate rounded-full border bg-muted/40 px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
              din-hjemmeside.dk
            </div>
          </div>
          <iframe
            ref={iframeRef}
            src={src}
            title={`${title} – fuldskærmsforhåndsvisning`}
            className="w-full border-0"
            style={{ height }}
          />
          <div className="bg-muted px-4 py-2.5 text-center text-xs text-muted-foreground">
            Beregner leveret af{" "}
            <a
              href={attributionHref}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Gennemsnitsberegner.dk
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
