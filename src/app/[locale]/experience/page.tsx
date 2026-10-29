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
    title: messages.sections.experiencePage,
    description:
      rawLocale === "zh"
        ? "完整的经历页面，包含工作、学生组织经历和教育背景，并预留技能、语言及奖项等扩展空间。"
        : "The complete experience page covering professional experience, student leadership, and education, with room for future additions.",
    alternates: { canonical: `/${rawLocale}/experience` },
  }
}

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const messages = getMessages(locale)
  const description = locale === "zh"
    ? "这里展示完整经历，包括工作、学生组织经历与教育背景。未来还可补充奖项、技能或相关项目。"
    : "A complete overview of professional experience, student leadership, and education, with room to add awards, skills, and related projects."
  return (
    <div className="mx-auto max-w-6xl pt-6 sm:pt-8">
      <Panel>
        <PanelHeader>
          <PanelTitle asChild className="text-4xl">
            <h1>{messages.sections.experiencePage}</h1>
          </PanelTitle>
        </PanelHeader>
        <PanelContent><p className="text-sm leading-6 text-muted-foreground">{description}</p></PanelContent>
      </Panel>
      <div className="stripe-divider border-x border-line" />
      <Timeline id="experience" title={messages.sections.experience} entries={work} locale={locale} />
      <div className="stripe-divider border-x border-line" />
      <Timeline id="education" title={messages.sections.education} entries={education} locale={locale} />
    </div>
  )
}
