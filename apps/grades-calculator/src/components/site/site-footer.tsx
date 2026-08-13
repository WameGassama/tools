import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background px-6 py-6 sm:py-10">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-4">
        <span className="text-xs text-muted-foreground">
          © 2026 Gennemsnitsberegner.dk
        </span>
      </div>
    </footer>
  )
}
