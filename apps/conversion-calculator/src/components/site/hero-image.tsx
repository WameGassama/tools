"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@workspace/ui/lib/utils"

export function HeroImage({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          "rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20",
          className,
        )}
        aria-hidden="true"
      />
    )
  }

  return (
    <Image
      src="/hero.png"
      alt=""
      fill
      sizes="128px"
      preload
      onError={() => setFailed(true)}
      className={cn("rounded-xl object-cover", className)}
    />
  )
}
