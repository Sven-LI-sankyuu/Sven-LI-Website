import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProfileHeader } from "@/components/profile-header"
import { PublicationsList } from "@/components/publications-list"
import { ProjectsList } from "@/components/projects-list"
import { Research } from "@/components/research"
import { Timeline } from "@/components/timeline"
import { Overview } from "@/components/overview"
import { education, work } from "@/content/experience"
import { profile } from "@/content/profile"
import { publications } from "@/content/publications"
import { projects } from "@/content/projects"
import { siteConfig } from "@/config/site"
import { isLocale, type Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  const locale: Locale = rawLocale
  return { title: { absolute: siteConfig.title }, description: localize(profile.summary, locale) }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const messages = getMessages(locale)

  return (
    <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
      <div className="mx-auto max-w-6xl">
        <ProfileHeader locale={locale} />
        <div className="stripe-divider border-x border-line" />
        <Overview locale={locale} />
        <div className="stripe-divider border-x border-line" />
        <Research locale={locale} />
        <div className="stripe-divider border-x border-line" />
        <PublicationsList locale={locale} publications={publications} limit={5} moreHref={`/${locale}/publications`} />
        <div className="stripe-divider border-x border-line" />
        <ProjectsList locale={locale} projects={projects} limit={1} moreHref={`/${locale}/projects`} />
        <div className="stripe-divider border-x border-line" />
        <Timeline id="experience" title={messages.sections.experience} entries={work} locale={locale} limit={5} moreHref={`/${locale}/experience`} />
        <Timeline id="education" title={messages.sections.education} entries={education} locale={locale} />
      </div>
    </div>
  )
}
