import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { Prose } from "@/components/base/ui/typography"
import { getPost, getPublishedPosts } from "@/lib/content/blog"
import { isLocale, locales, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateStaticParams() {
  return locales.flatMap((locale) => getPublishedPosts(locale).map((post) => ({ locale, slug: post.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) return {}
  const post = getPost(rawLocale, slug)
  return post ? { title: post.title, description: post.summary } : {}
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const post = getPost(locale, slug)
  if (!post) notFound()
  const messages = getMessages(locale)
  return (
    <div className="mx-auto max-w-4xl">
      <Panel>
        <PanelHeader><PanelTitle>{post.title}</PanelTitle><p className="pb-4 text-sm text-muted-foreground"><time dateTime={post.date}>{post.date}</time>{post.updated ? ` · ${post.updated}` : ""}</p></PanelHeader>
        <PanelContent>
          <Prose><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown></Prose>
          <div className="mt-10 border-t border-line pt-4"><Link href={`/${locale}/blog`} className="text-sm link-underline">← {messages.sections.blog}</Link></div>
        </PanelContent>
      </Panel>
    </div>
  )
}
