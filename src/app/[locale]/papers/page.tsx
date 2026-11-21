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
        ? "精选研究成果与预印本，包含摘要、作者信息以及论文、代码和数据链接。"
        : "Selected research papers and preprints, with abstracts, authors, and links to papers, code, and datasets.",
    alternates: { canonical: `/${locale}/papers` },
  }
}

export default async function PapersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const description = locale === "zh"
    ? "这里收录精选研究成果和预印本，包含摘要、作者信息，以及论文、代码和数据链接。"
    : "A collection of selected research papers and preprints, with abstracts, author lists, and links to papers, code, and datasets."
  return (
    <div className="mx-auto max-w-6xl pt-6 sm:pt-8">
      <PublicationsList locale={locale} publications={publications} detail description={description} />
    </div>
  )
}
