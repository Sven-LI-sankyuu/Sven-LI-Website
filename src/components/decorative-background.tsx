"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

type ResolvedTheme = "light" | "dark"

function withThemeParam(src: string, theme: ResolvedTheme) {
  const separator = src.includes("?") ? "&" : "?"
  return `${src}${separator}theme=${theme}`
}

export function DecorativeBackground({ src, title, className, loading = "lazy" }: { src: string; title: string; className?: string; loading?: "eager" | "lazy" }) {
  const [enabled, setEnabled] = useState(false)
  const { resolvedTheme } = useTheme()
  const themedSrc = useMemo(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return null
    return withThemeParam(src, resolvedTheme)
  }, [src, resolvedTheme])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setEnabled(!media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  if (!enabled || !themedSrc) return null

  return (
    <iframe
      className={cn("decorative-frame pointer-events-none border-0", className)}
      src={themedSrc}
      key={themedSrc}
      title={title}
      aria-hidden="true"
      tabIndex={-1}
      loading={loading}
      sandbox="allow-scripts"
    />
  )
}
