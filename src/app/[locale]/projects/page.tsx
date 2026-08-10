import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectsList } from "@/components/projects-list"
import { projects } from "@/content/projects"
import { isLocale, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  return {
    title: getMessages(rawLocale).sections.projects,
    description:
      rawLocale === "zh"
        ? "简历里确认过的项目页，当前只有 presentation-skills，一套面向办公文档和演示内容生成的开源 Agent Skills。"
        : "The projects page for confirmed resume items. Right now it contains presentation-skills, an open-source Agent Skills toolkit for office documents and presentation content.",
    alternates: { canonical: `/${rawLocale}/projects` },
  }
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const description =
    locale === "zh"
      ? "这里保留简历里确认过的项目。当前只有 presentation-skills 一项，后续项目继续按同样的结构补充。"
      : "This page keeps the confirmed projects from the resume. For now it only includes presentation-skills, and future projects can follow the same structure."
  return (
    <div className="mx-auto max-w-6xl">
      <ProjectsList locale={locale} projects={projects} detail description={description} />
    </div>
  )
}
