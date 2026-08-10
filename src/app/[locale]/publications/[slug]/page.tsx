import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { PublicationAuthors } from "@/components/publication-authors"
import { Prose } from "@/components/base/ui/typography"
import { getPublication, publications } from "@/content/publications"
import { isLocale, locales, type Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function generateStaticParams() {
  return locales.flatMap((locale) => publications.map((publication) => ({ locale, slug: publication.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) return {}
  const publication = getPublication(slug)
  return publication ? { title: publication.title, description: localize(publication.summary, rawLocale) } : {}
}

export default async function PublicationPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const publication = getPublication(slug)
  if (!publication) notFound()
  const messages = getMessages(locale)
  return (
    <div className="mx-auto max-w-4xl">
      <Panel>
        <PanelHeader><PanelTitle>{publication.title}</PanelTitle><p className="pb-4 text-sm text-muted-foreground">{publication.venue} · {publication.date}</p></PanelHeader>
        <PanelContent>
          <p className="text-sm leading-6 text-muted-foreground">{localize(publication.summary, locale)}</p>
          <div className="mt-6"><h2 className="mb-2 text-lg font-medium">{locale === "zh" ? "摘要" : "Abstract"}</h2><Prose><p>{localize(publication.abstract, locale)}</p></Prose></div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">{publication.links.paper && <a className="link-underline" href={publication.links.paper} target="_blank" rel="noreferrer">{messages.actions.paper}</a>}{publication.links.code && <a className="link-underline" href={publication.links.code} target="_blank" rel="noreferrer">{messages.actions.code}</a>}{publication.links.dataset && <a className="link-underline" href={publication.links.dataset} target="_blank" rel="noreferrer">{messages.actions.dataset}</a>}</div>
          <div className="mt-8 border-t border-line pt-4"><h2 className="mb-2 text-lg font-medium">{locale === "zh" ? "作者" : "Authors"}</h2><p className="text-sm leading-6"><PublicationAuthors authors={publication.authors} /></p></div>
          <Link className="mt-8 inline-block text-sm link-underline" href={`/${locale}/publications`}>← {messages.sections.publications}</Link>
        </PanelContent>
      </Panel>
    </div>
  )
}
