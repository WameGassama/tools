import { Badge } from "@workspace/ui/components/badge"

export function TopBanner() {
  return (
    <div className="border-b bg-muted/50 px-6 py-2.5 text-center text-[13px] text-muted-foreground">
      <span>
        Skal du starte på studie?{" "}
        <a href="#fordele" className="font-semibold text-foreground">
          Se relevante studiefordele og rabatter →
        </a>
      </span>
      <Badge variant="outline" className="ml-2 text-[11px]">
        Partnerindhold
      </Badge>
    </div>
  )
}
