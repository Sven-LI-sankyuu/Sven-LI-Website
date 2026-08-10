"use client"

import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/base/ui/button"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

const themeOrder = ["system", "light", "dark"] as const

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { theme, setTheme } = useTheme()
  const messages = getMessages(locale)

  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  )

  const current = mounted && themeOrder.includes(theme as (typeof themeOrder)[number]) ? (theme as (typeof themeOrder)[number]) : "system"
  const next = themeOrder[(themeOrder.indexOf(current) + 1) % themeOrder.length]
  const label = messages.theme[next]
  const Icon = current === "dark" ? MoonIcon : current === "light" ? SunIcon : MonitorCogIcon

  return (
    <Button variant="ghost" size="icon-sm" aria-label={label} title={label} onClick={() => setTheme(next)}>
      <Icon aria-hidden />
    </Button>
  )
}
