import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PublicationsList } from "@/components/publications-list"
import { publications } from "@/content/publications"
import { isLocale, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  const locale = rawLocale
  return {
    title: getMessages(locale).sections.publications,
    description:
      locale === "zh"
        ? "完整的精选论文列表，包含更长摘要、作者、发表信息以及论文、代码和数据链接。"
        : "The complete selected-publications page, with longer abstracts, authors, venue details, and paper, code, and dataset links.",
    alternates: { canonical: `/${locale}/publications` },
  }
}

export default async function PublicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const description = locale === "zh"
    ? "这里是完整的精选论文页。首页只承担快速扫读，这里保留更长摘要、作者列表、发表信息和外部链接。"
    : "This is the complete selected-publications page. The profile page stays scannable; this page keeps longer abstracts, authors, venue details, and external links."
  return <div className="mx-auto max-w-6xl"><PublicationsList locale={locale} publications={publications} detail description={description} /></div>
}
