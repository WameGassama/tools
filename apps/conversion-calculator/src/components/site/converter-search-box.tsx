"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Search } from "@workspace/ui/icons"

export function ConverterSearchBox({
  defaultValue = "",
}: {
  defaultValue?: string
}) {
  const [value, setValue] = useState(defaultValue)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  return (
    <form action="/soeg" role="search">
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          type="search"
          name="q"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Søg efter en omregner, fx “vægt” eller “meter”…"
          className="h-14 border-0 bg-background pr-11 pl-11 text-base text-foreground shadow-xl ring-1 ring-black/5 [&::-webkit-search-cancel-button]:appearance-none"
          aria-label="Søg efter omregner"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            onClick={() => {
              setValue("")
              inputRef.current?.focus()
              router.push("/soeg")
            }}
            aria-label="Ryd søgning"
            className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
    </form>
  )
}
