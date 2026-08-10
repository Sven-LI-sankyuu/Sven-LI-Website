import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/panel"
import type { TimelineEntry } from "@/content/experience"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function Timeline({
  title,
  entries,
  locale,
  id,
  limit,
  moreHref,
  description,
}: {
  title: string
  entries: TimelineEntry[]
  locale: Locale
  id: string
  limit?: number
  moreHref?: string
  description?: string
}) {
  const messages = getMessages(locale)
  const visibleEntries = limit ? entries.slice(0, limit) : entries
  const hiddenCount = entries.length - visibleEntries.length
  return (
    <Panel id={id}>
      <PanelHeader>
        <PanelTitle>{title}</PanelTitle>
        {description && <PanelDescription>{description}</PanelDescription>}
      </PanelHeader>
      <PanelContent>
        <ol className="relative ml-2 border-l border-line">
          {visibleEntries.map((entry) => (
            <li key={`${entry.organization.en}-${entry.start}`} className="relative py-2 pl-6 first:pt-0 last:pb-0">
              <span className="absolute top-2.5 -left-1.25 size-2 rounded-full border border-background bg-foreground first:top-0" aria-hidden />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-medium">
                  {entry.href ? (
                    <a className="link-underline inline-flex items-center gap-1" href={entry.href} target="_blank" rel="noreferrer">
                      {localize(entry.organization, locale)}
                      <ArrowUpRightIcon aria-hidden className="size-3" />
                    </a>
                  ) : (
                    localize(entry.organization, locale)
                  )}
                </h3>
                <time className="font-mono text-xs text-muted-foreground" dateTime={entry.start}>{entry.start.slice(0, 7)}{entry.end ? ` – ${entry.end.slice(0, 7)}` : " – Present"}</time>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{localize(entry.title, locale)}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{localize(entry.summary, locale)}</p>
            </li>
          ))}
          {hiddenCount > 0 && moreHref && (
            <li className="relative py-2 pl-6 text-sm text-muted-foreground">
              <span className="absolute top-2.5 -left-1.25 size-2 rounded-full border border-background bg-foreground" aria-hidden />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-lg leading-none" aria-hidden>...</span>
                <span>{locale === "zh" ? `还有 ${hiddenCount} 条经历` : `${hiddenCount} more experience item${hiddenCount > 1 ? "s" : ""}`}</span>
                <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={moreHref} />}>
                  <span>{messages.actions.viewFullExperience}</span><ArrowUpRightIcon aria-hidden />
                </Button>
              </div>
            </li>
          )}
        </ol>
        {hiddenCount === 0 && moreHref && <div className="mt-4 flex justify-end"><Button nativeButton={false} variant="ghost" size="sm" render={<Link href={moreHref} />}><span>{messages.actions.viewFullExperience}</span><ArrowUpRightIcon aria-hidden /></Button></div>}
      </PanelContent>
    </Panel>
  )
}
