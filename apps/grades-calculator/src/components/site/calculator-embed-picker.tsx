"use client"

import { useEffect, useMemo, useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { DocumentCopy, Maximize, Verify } from "@workspace/ui/icons"

import { EmbedFullscreenPreview } from "@/src/components/site/embed-fullscreen-preview"
import { isValidHexColor } from "@/src/lib/color-contrast"
import { EMBED_CALCULATORS } from "@/src/lib/embed-calculators"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const DEFAULT_COLOR = "625fff"

const PRESET_COLORS = [
  "eab308",
  "fb7185",
  "f97316",
  "ef4444",
  DEFAULT_COLOR,
  "e879f9",
  "8b5cf6",
  "3b82f6",
  "2dd4bf",
  "10b981",
  "171717",
]

// Letvægts syntax-highlighting til embed-koden. Koden er 100% genereret af os
// (ingen brugerinput udover et valideret hex-tal), så det er trygt at bygge
// HTML via string-erstatning her – det bruges kun til visning, ikke til kopiering.
function highlightEmbedCode(code: string): string {
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  return escaped.replace(
    /(&lt;\/?)([a-zA-Z][\w-]*)|([a-zA-Z_$][\w-]*)(=)|("[^"]*")/g,
    (match, tagOpen, tagName, attrName, attrEq, str) => {
      if (tagOpen) return `${tagOpen}<span class="text-indigo-600">${tagName}</span>`
      if (attrName) return `<span class="text-violet-600">${attrName}</span>${attrEq}`
      if (str) return `<span class="text-emerald-600">${str}</span>`
      return match
    }
  )
}

function buildEmbedCode(
  slug: string,
  title: string,
  initialHeight: number,
  pageHref: string,
  color: string
) {
  const id = `gb-embed-${slug}`
  const colorQuery = color !== DEFAULT_COLOR ? `?color=${color}` : ""
  const src = `${SITE_URL}/embed/${slug}${colorQuery}`
  const iframe = `<iframe id="${id}" src="${src}" title="${title} – Gennemsnitsberegner.dk" loading="lazy" scrolling="no" style="width:100%;min-width:100%;height:${initialHeight}px;border:0;display:block;" allow="clipboard-write"></iframe>`
  const script = `<script>(function(){var f=document.getElementById("${id}");if(!f)return;function h(e){if(!e.data||e.data.type!=="gennemsnitsberegner:embed-size")return;if(e.source!==f.contentWindow)return;var n=parseInt(e.data.height,10);if(n>0)f.style.height=n+"px";}window.addEventListener("message",h);f.addEventListener("load",function(){try{f.contentWindow&&f.contentWindow.postMessage("gennemsnitsberegner:request-size","*");}catch(_){}});})();</script>`
  // Denne linje ligger UDENFOR iframen, dvs. direkte i værtssidens egen HTML –
  // det er derfor et rigtigt, crawlbart link (ikke bare noget der vises inde i
  // vores egen iframe), som giver et reelt backlink til gennemsnitsberegner.dk.
  const attribution = `<div style="margin-top:6px;font:12px/1.4 -apple-system,sans-serif;color:#71717a;text-align:center;">Beregner leveret af <a href="${SITE_URL}${pageHref}" target="_blank" rel="noopener">Gennemsnitsberegner.dk</a></div>`
  return `${iframe}\n${script}\n${attribution}`
}

export function CalculatorEmbedPicker() {
  const [slug, setSlug] = useState(EMBED_CALCULATORS[0]!.slug)
  const [copied, setCopied] = useState(false)
  const [colorInput, setColorInput] = useState(DEFAULT_COLOR)
  // Rå tekst i hex-feltet, adskilt fra colorInput – ellers kan man ikke taste
  // "1", "11", "111"... da et kontrolleret felt bundet direkte til den
  // validerede colorInput ville afvise/nulstille hvert delvist ugyldigt tegn.
  const [hexText, setHexText] = useState(DEFAULT_COLOR)
  const [debouncedColor, setDebouncedColor] = useState(DEFAULT_COLOR)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedColor(colorInput), 250)
    return () => clearTimeout(timer)
  }, [colorInput])

  function setColor(value: string) {
    setColorInput(value)
    setHexText(value)
  }

  const calculator = EMBED_CALCULATORS.find((c) => c.slug === slug)!
  const code = useMemo(
    () =>
      buildEmbedCode(
        calculator.slug,
        calculator.title,
        calculator.initialHeight,
        calculator.pageHref,
        debouncedColor
      ),
    [calculator, debouncedColor]
  )
  const highlightedCode = useMemo(() => highlightEmbedCode(code), [code])

  const previewSrc = `/embed/${slug}${debouncedColor !== DEFAULT_COLOR ? `?color=${debouncedColor}` : ""}`

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable – user can still select and copy manually
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {EMBED_CALCULATORS.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSlug(c.slug)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              c.slug === slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="text-sm font-semibold">Primærfarve</div>
        <p className="mt-0.5 mb-3 text-sm text-muted-foreground">
          Bruges til knapper, felter og andre fremhævede elementer i beregneren.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setColor(preset)}
                className={`size-9 cursor-pointer rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  colorInput === preset
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : ""
                }`}
                style={{ backgroundColor: `#${preset}` }}
                aria-label={`Vælg farve #${preset}`}
                aria-pressed={colorInput === preset}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border bg-background py-1.5 pr-3 pl-1.5">
            <span
              className="size-7 shrink-0 rounded-full border"
              style={{ backgroundColor: `#${colorInput}` }}
              aria-hidden="true"
            />
            <span className="text-sm text-muted-foreground">#</span>
            <input
              value={hexText}
              onChange={(e) => {
                const value = e.target.value.replace(/^#/, "").toLowerCase()
                setHexText(value)
                if (isValidHexColor(value)) setColorInput(value)
              }}
              maxLength={6}
              className="w-20 bg-transparent font-mono text-sm text-foreground outline-none"
              aria-label="Farve som hex-kode"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-muted-foreground/25" />
                  <span className="size-2 rounded-full bg-muted-foreground/25" />
                  <span className="size-2 rounded-full bg-muted-foreground/25" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">embed.html</span>
                <span className="rounded-full border bg-background px-2 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                  HTML
                </span>
              </div>
              <Button size="sm" variant="outline" onClick={copyCode}>
                {copied ? <Verify /> : <DocumentCopy />}
                {copied ? "Kopieret!" : "Kopiér kode"}
              </Button>
            </div>
            <pre className="p-4 text-xs leading-relaxed break-all whitespace-pre-wrap text-foreground">
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
          </CardContent>
        </Card>

        <Card className="overflow-hidden p-0">
          <CardContent className="flex h-full flex-col p-0">
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
              <span className="text-xs font-semibold text-muted-foreground">
                Sådan ser den ud
              </span>
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={() => setFullscreenOpen(true)}
                aria-label="Åbn fuldskærmsvisning"
              >
                <Maximize className="size-4" />
              </Button>
            </div>
            <div className="flex-1 bg-muted/20 p-3">
              <iframe
                key={slug}
                src={previewSrc}
                title={`${calculator.title} – forhåndsvisning`}
                className="h-[600px] w-full rounded-lg border bg-background"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Indsæt koden hvor du vil have beregneren på din side. På WordPress:
        brug en <strong className="text-foreground">Custom HTML</strong>
        -blok. På Webflow: et <strong className="text-foreground">Embed</strong>
        -element.
      </p>

      <EmbedFullscreenPreview
        open={fullscreenOpen}
        onOpenChange={setFullscreenOpen}
        src={previewSrc}
        title={calculator.title}
      />
    </div>
  )
}
