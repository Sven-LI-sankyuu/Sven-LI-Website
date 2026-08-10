"use client"

import { useState } from "react"

import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function VisitCounter({ href, src, locale }: { href: string; src: string; locale: Locale }) {
  const [failed, setFailed] = useState(false)
  const messages = getMessages(locale)

  if (failed) return <span className="text-muted-foreground">{messages.states.counterUnavailable}</span>

  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex max-w-full">
      {/* 外部服务返回 SVG，原生 img 可以保留浏览器 Referer，Next 图片代理会导致 403。 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={messages.footer.visits}
        className="h-auto max-h-10 max-w-full object-contain object-left"
        loading="lazy"
        onError={() => {
          setFailed(true)
        }}
      />
    </a>
  )
}
