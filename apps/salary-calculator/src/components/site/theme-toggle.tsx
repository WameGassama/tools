"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@workspace/ui/components/button"

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark")
  localStorage.setItem("theme", theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)

  useEffect(() => {
    // Reads the class already applied by the beforeInteractive theme-init script in layout.tsx —
    // one-time hydration from that external DOM state, not derived-state churn.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    )
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    applyTheme(next)
    setTheme(next)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={toggle}
      aria-label="Skift mellem lys og mørk tilstand"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
