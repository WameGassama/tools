"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { DocumentCopy, Maximize, Verify } from "@workspace/ui/icons"

import {
  CATEGORY_ICONS,
  DefaultCategoryIcon,
} from "@/src/components/site/category-icons"
import { EmbedFullscreenPreview } from "@/src/components/site/embed-fullscreen-preview"
import { isValidHexColor } from "@/src/lib/color-contrast"
import { CATEGORIES } from "@/src/lib/converters"
import { EMBED_CALCULATORS, embedPageHref } from "@/src/lib/embed-calculators"

const SITE_URL = "https://www.omregning.dk"
const DEFAULT_COLOR = "2563eb"
const SIZE_MESSAGE_TYPE = "omregning:embed-size"

const PRESET_COLORS = [
  "eab308",
  "fb7185",
  "f97316",
  "ef4444",
  DEFAULT_COLOR,
  "e879f9",
  "8b5cf6",
  "0ea5e9",
  "2dd4bf",
  "10b981",
  "171717",
]

// Kun kategorier der faktisk har mindst én indlejrbar omregner, i samme
// rækkefølge som resten af sitet (CATEGORIES).
const EMBED_CATEGORIES = CATEGORIES.filter((category) =>
  EMBED_CALCULATORS.some((c) => c.category === category.slug)
)

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
  category: string,
  slug: string,
  title: string,
  initialHeight: number,
  pageHref: string,
  color: string
) {
  const id = `om-embed-${category}-${slug}`
  const colorQuery = color !== DEFAULT_COLOR ? `?color=${color}` : ""
  const src = `${SITE_URL}/embed/${category}/${slug}${colorQuery}`
  const iframe = `<iframe id="${id}" src="${src}" title="${title} – omregning.dk" loading="lazy" scrolling="no" style="width:100%;min-width:100%;height:${initialHeight}px;border:0;display:block;" allow="clipboard-write"></iframe>`
  const script = `<script>(function(){var f=document.getElementById("${id}");if(!f)return;function h(e){if(!e.data||e.data.type!=="omregning:embed-size")return;if(e.source!==f.contentWindow)return;var n=parseInt(e.data.height,10);if(n>0)f.style.height=n+"px";}window.addEventListener("message",h);f.addEventListener("load",function(){try{f.contentWindow&&f.contentWindow.postMessage("omregning:request-size","*");}catch(_){}});})();</script>`
  // Denne linje ligger UDENFOR iframen, dvs. direkte i værtssidens egen HTML –
  // det er derfor et rigtigt, crawlbart link (ikke bare noget der vises inde i
  // vores egen iframe), som giver et reelt backlink til omregning.dk.
  const attribution = `<div style="background:#f5f5f5;border-radius:0 0 12px 12px;padding:10px 16px;font:12px/1.4 -apple-system,sans-serif;color:#71717a;text-align:center;">Omregner leveret af <a href="${SITE_URL}${pageHref}" target="_blank" rel="noopener">omregning.dk</a></div>`
  return `${iframe}\n${script}\n${attribution}`
}

export function CalculatorEmbedPicker() {
  const firstCategory = EMBED_CATEGORIES[0]!.slug
  const firstInCategory = EMBED_CALCULATORS.find((c) => c.category === firstCategory)!

  const [category, setCategory] = useState(firstCategory)
  const [slug, setSlug] = useState(firstInCategory.slug)
  const [copied, setCopied] = useState(false)
  const [colorInput, setColorInput] = useState(DEFAULT_COLOR)
  // Rå tekst i hex-feltet, adskilt fra colorInput – ellers kan man ikke taste
  // "1", "11", "111"... da et kontrolleret felt bundet direkte til den
  // validerede colorInput ville afvise/nulstille hvert delvist ugyldigt tegn.
  const [hexText, setHexText] = useState(DEFAULT_COLOR)
  const [debouncedColor, setDebouncedColor] = useState(DEFAULT_COLOR)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const previewIframeRef = useRef<HTMLIFrameElement>(null)
  const [previewHeight, setPreviewHeight] = useState(firstInCategory.initialHeight)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedColor(colorInput), 250)
    return () => clearTimeout(timer)
  }, [colorInput])

  // Lytter på samme postMessage som det rigtige embed-script bruger, så
  // forhåndsvisningen har den rigtige indholdshøjde – ikke en fast, for høj
  // iframe med tomt fyld under omregneren.
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!event.data || event.data.type !== SIZE_MESSAGE_TYPE) return
      if (event.source !== previewIframeRef.current?.contentWindow) return
      const height = Number(event.data.height)
      if (height > 0) setPreviewHeight(height)
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  function setColor(value: string) {
    setColorInput(value)
    setHexText(value)
  }

  function selectCategory(nextCategory: string) {
    const first = EMBED_CALCULATORS.find((c) => c.category === nextCategory)
    if (!first) return
    setCategory(nextCategory)
    setSlug(first.slug)
    setPreviewHeight(first.initialHeight)
  }

  function selectPair(calculatorSlug: string, initialHeight: number) {
    setSlug(calculatorSlug)
    setPreviewHeight(initialHeight)
  }

  const itemsInCategory = useMemo(
    () => EMBED_CALCULATORS.filter((c) => c.category === category),
    [category]
  )
  const calculator =
    itemsInCategory.find((c) => c.slug === slug) ?? itemsInCategory[0]!
  const pageHref = embedPageHref(calculator)

  const code = useMemo(
    () =>
      buildEmbedCode(
        calculator.category,
        calculator.slug,
        calculator.title,
        calculator.initialHeight,
        pageHref,
        debouncedColor
      ),
    [calculator, pageHref, debouncedColor]
  )
  const highlightedCode = useMemo(() => highlightEmbedCode(code), [code])

  const previewSrc = `/embed/${calculator.category}/${calculator.slug}${
    debouncedColor !== DEFAULT_COLOR ? `?color=${debouncedColor}` : ""
  }`

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
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <div className="h-fit rounded-2xl border bg-background">
        <Accordion defaultValue={["omregner", "farve"]} className="px-4">
          <AccordionItem value="omregner">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between gap-2 pr-2">
                <span>Omregner</span>
                <span className="rounded-full border px-2 py-0.5 text-xs font-normal text-muted-foreground">
                  {calculator.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-3 grid grid-cols-2 gap-2">
                {EMBED_CATEGORIES.map((c) => {
                  const Icon = CATEGORY_ICONS[c.slug] ?? DefaultCategoryIcon
                  const active = c.slug === category
                  return (
                    <button
                      key={c.slug}
                      onClick={() => selectCategory(c.slug)}
                      className={`flex cursor-pointer flex-col items-start gap-2.5 rounded-xl border p-3 text-left transition-colors ${
                        active
                          ? "border-transparent bg-primary/10 ring-2 ring-inset ring-primary"
                          : "border-border bg-background hover:bg-muted/30"
                      }`}
                    >
                      <span
                        className={`flex size-7 items-center justify-center rounded-lg ${
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold">{c.title}</span>
                    </button>
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-2 border-t border-dashed pt-3">
                {itemsInCategory.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => selectPair(c.slug, c.initialHeight)}
                    className={`cursor-pointer rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                      c.slug === calculator.slug
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="farve">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between gap-2 pr-2">
                <span>Primærfarve</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-normal text-muted-foreground">
                  <span
                    className="size-3 rounded-full border"
                    style={{ backgroundColor: `#${colorInput}` }}
                    aria-hidden="true"
                  />
                  <span className="font-mono">#{colorInput}</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Bruges til knapper, felter og andre fremhævede elementer i omregneren.
              </p>
              <div className="mb-3 flex items-center justify-between gap-3 rounded-lg border bg-muted/30 px-3 py-2">
                <span className="text-xs font-medium text-muted-foreground uppercase">
                  Hex-kode
                </span>
                <div className="flex items-center gap-2 rounded-md border bg-background px-2.5 py-1">
                  <span
                    className="size-3.5 shrink-0 rounded-sm"
                    style={{ backgroundColor: `#${colorInput}` }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-muted-foreground">#</span>
                  <input
                    value={hexText}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/^#/, "")
                        .toLowerCase()
                        .slice(0, 6)
                      setHexText(value)
                      if (isValidHexColor(value)) setColorInput(value)
                    }}
                    maxLength={7}
                    className="w-16 bg-transparent font-mono text-sm text-foreground outline-none"
                    aria-label="Farve som hex-kode"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {PRESET_COLORS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setColor(preset)}
                    className={`size-8 cursor-pointer rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kode">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between gap-2 pr-2">
                <span>Embed-kode</span>
                <span className="rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                  HTML
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Button size="sm" variant="outline" className="mb-3 w-full" onClick={copyCode}>
                {copied ? <Verify /> : <DocumentCopy />}
                {copied ? "Kopieret!" : "Kopiér kode"}
              </Button>
              <pre className="max-h-56 overflow-auto rounded-lg border bg-muted/30 p-3 text-xs leading-relaxed break-all whitespace-pre-wrap text-foreground">
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Card className="overflow-hidden p-0">
        <CardContent className="flex h-full flex-col p-0">
          <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-3">
            <div className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-muted-foreground/25" />
              <span className="size-2 rounded-full bg-muted-foreground/25" />
              <span className="size-2 rounded-full bg-muted-foreground/25" />
            </div>
            <div className="flex-1 truncate rounded-md border bg-background px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
              omregning.dk/embed/{calculator.category}/{calculator.slug}
            </div>
            <Button
              size="icon-sm"
              variant="ghost"
              className="shrink-0"
              onClick={() => setFullscreenOpen(true)}
              aria-label="Åbn fuldskærmsvisning"
            >
              <Maximize className="size-4" />
            </Button>
          </div>
          <div className="flex-1 bg-muted/20 p-3">
            <div className="overflow-hidden rounded-lg border bg-background">
              <iframe
                ref={previewIframeRef}
                key={`${calculator.category}/${calculator.slug}`}
                src={previewSrc}
                title={`${calculator.title} – forhåndsvisning`}
                className="block w-full border-0 bg-background"
                style={{ height: previewHeight }}
                loading="lazy"
              />
              <div className="bg-muted px-4 py-2.5 text-center text-xs text-muted-foreground">
                Omregner leveret af{" "}
                <a
                  href={`${SITE_URL}${pageHref}`}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  omregning.dk
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <EmbedFullscreenPreview
        open={fullscreenOpen}
        onOpenChange={setFullscreenOpen}
        src={previewSrc}
        title={calculator.title}
        attributionHref={`${SITE_URL}${pageHref}`}
        initialHeight={calculator.initialHeight}
      />
    </div>
  )
}
