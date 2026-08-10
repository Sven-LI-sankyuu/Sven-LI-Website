import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { Timeline } from "@/components/timeline"
import { education, work } from "@/content/experience"
import { isLocale, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  const messages = getMessages(rawLocale)
  return {
    title: messages.sections.experience,
    description:
      rawLocale === "zh"
        ? "完整的经历页面，保留工作、教育，以及后续可扩展的技能、语言、奖项和项目关联。"
        : "The complete experience page, keeping work, education, and later extensible sections such as skills, languages, awards, and project links.",
    alternates: { canonical: `/${rawLocale}/experience` },
  }
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const messages = getMessages(locale)
  const description = locale === "zh"
    ? "这个页面保留完整经历。首页只显示前五条用于快速确认背景，详细页面用于展开工作、教育和后续补充的奖项、技能或项目关联。"
    : "This page keeps the complete experience record. The profile page shows only the first five items for scanning; the detail page can carry work, education, and later awards, skills, or project links."
  return (
    <div className="mx-auto max-w-6xl">
      <Panel>
        <PanelHeader><PanelTitle>{messages.sections.experience}</PanelTitle></PanelHeader>
        <PanelContent><p className="text-sm leading-6 text-muted-foreground">{description}</p></PanelContent>
      </Panel>
      <div className="stripe-divider border-x border-line" />
      <Timeline id="experience" title={messages.sections.experience} entries={work} locale={locale} />
      <div className="stripe-divider border-x border-line" />
      <Timeline id="education" title={messages.sections.education} entries={education} locale={locale} />
    </div>
  )
}
