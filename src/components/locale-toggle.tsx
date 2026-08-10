"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/base/ui/button"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const targetLocale: Locale = locale === "en" ? "zh" : "en"
  const label = getMessages(locale).language
  const targetPath = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${targetLocale}`)

  return (
    <Button
      nativeButton={false}
      variant="ghost"
      size="icon-sm"
      className="font-mono text-xs"
      render={<Link href={targetPath} hrefLang={targetLocale} aria-label={label} title={label} />}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; samesite=lax`
      }}
    >
      {targetLocale.toUpperCase()}
    </Button>
  )
}
