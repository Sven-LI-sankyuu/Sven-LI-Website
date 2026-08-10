import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, DatabaseIcon, FileCode2Icon, FileTextIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/panel"
import { PublicationAuthors } from "@/components/publication-authors"
import type { Publication } from "@/content/publications/types"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function PublicationsList({
  locale,
  publications,
  limit,
  moreHref,
  detail = false,
  description,
}: {
  locale: Locale
  publications: Publication[]
  limit?: number
  moreHref?: string
  detail?: boolean
  description?: string
}) {
  const messages = getMessages(locale)
  const visiblePublications = limit ? publications.slice(0, limit) : publications
  const hiddenCount = publications.length - visiblePublications.length
  return (
    <Panel id="publications">
      <PanelHeader>
        <PanelTitle>{messages.sections.publications}<sup className="ml-1 text-sm text-muted-foreground">{publications.length}</sup></PanelTitle>
        {description && <PanelDescription>{description}</PanelDescription>}
      </PanelHeader>
      <PanelContent className="space-y-4">
        <ol className="divide-y divide-line border-y border-line">
          {visiblePublications.map((publication) => <PublicationItem key={publication.slug} locale={locale} publication={publication} detail={detail} />)}
          {hiddenCount > 0 && moreHref && <MorePublicationsItem locale={locale} count={hiddenCount} href={moreHref} />}
        </ol>
        {hiddenCount === 0 && moreHref && <div className="flex justify-end"><Button nativeButton={false} variant="ghost" size="sm" render={<Link href={moreHref} />}><span>{messages.actions.viewAllPublications}</span><ArrowUpRightIcon aria-hidden /></Button></div>}
      </PanelContent>
    </Panel>
  )
}

function PublicationItem({ locale, publication, detail }: { locale: Locale; publication: Publication; detail: boolean }) {
  const messages = getMessages(locale)
  return (
    <li className="group grid gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
      <Image src={publication.cover} alt="" width={320} height={200} className="aspect-[8/5] w-full rounded-md object-cover transition-[filter] duration-300 group-hover:brightness-105" />
      <div className="min-w-0">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug font-medium text-balance"><Link href={`/${locale}/publications/${publication.slug}`} className="link-underline">{publication.title}</Link></h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{publication.date.slice(0, 4)}</span>
        </div>
        <p className="mt-2 text-sm leading-6"><PublicationAuthors authors={publication.authors} /></p>
        <p className="text-sm leading-6 text-muted-foreground">{localize(publication.summary, locale)}</p>
        {detail && <p className="mt-3 text-sm leading-6 text-muted-foreground">{localize(publication.abstract, locale)}</p>}
        <p className="mt-2 text-xs text-muted-foreground">{publication.venue}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {publication.links.paper && <Button nativeButton={false} variant="outline" size="sm" className="h-7 text-xs" render={<a href={publication.links.paper} target="_blank" rel="noreferrer" />}><FileTextIcon aria-hidden />{messages.actions.paper}<ArrowUpRightIcon aria-hidden /></Button>}
          {publication.links.code && <Button nativeButton={false} variant="ghost" size="sm" className="h-7 text-xs" render={<a href={publication.links.code} target="_blank" rel="noreferrer" />}><FileCode2Icon aria-hidden />{messages.actions.code}</Button>}
          {publication.links.dataset && <Button nativeButton={false} variant="ghost" size="sm" className="h-7 text-xs" render={<a href={publication.links.dataset} target="_blank" rel="noreferrer" />}><DatabaseIcon aria-hidden />{messages.actions.dataset}</Button>}
        </div>
      </div>
    </li>
  )
}

function MorePublicationsItem({ locale, count, href }: { locale: Locale; count: number; href: string }) {
  const messages = getMessages(locale)
  const text = locale === "zh" ? `还有 ${count} 篇精选论文` : `${count} more selected publication${count > 1 ? "s" : ""}`
  return (
    <li className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm text-muted-foreground">
      <span className="font-mono text-lg leading-none" aria-hidden>...</span>
      <span>{text}</span>
      <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={href} />}>
        <span>{messages.actions.viewAllPublications}</span><ArrowUpRightIcon aria-hidden />
      </Button>
    </li>
  )
}
