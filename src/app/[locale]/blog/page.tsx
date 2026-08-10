import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogList } from "@/components/blog-list"
import { Panel, PanelHeader, PanelTitle } from "@/components/panel"
import { getPublishedPosts } from "@/lib/content/blog"
import { isLocale, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  return { title: getMessages(rawLocale).sections.blog }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const messages = getMessages(locale)
  return (
    <div className="mx-auto max-w-5xl">
      <Panel>
        <PanelHeader><PanelTitle>{messages.sections.blog}</PanelTitle></PanelHeader>
        <BlogList posts={getPublishedPosts(locale)} locale={locale} />
      </Panel>
    </div>
  )
}
