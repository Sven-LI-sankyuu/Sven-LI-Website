import { ArrowUpRightIcon, FolderKanbanIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/panel"
import type { Project } from "@/content/projects"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"
import { cn } from "@/lib/utils"

export function ProjectsList({
  locale,
  projects,
  limit,
  moreHref,
  detail = false,
  description,
}: {
  locale: Locale
  projects: Project[]
  limit?: number
  moreHref?: string
  detail?: boolean
  description?: string
}) {
  const messages = getMessages(locale)
  const visibleProjects = limit ? projects.slice(0, limit) : projects
  const hiddenCount = projects.length - visibleProjects.length

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          {messages.sections.projects}
          <sup className="ml-1 text-sm text-muted-foreground">{projects.length}</sup>
        </PanelTitle>
        {description && <PanelDescription>{description}</PanelDescription>}
      </PanelHeader>
      <PanelContent className="space-y-4">
        <ol className="divide-y divide-line border-y border-line">
          {visibleProjects.map((project) => (
            <ProjectItem key={project.slug} locale={locale} project={project} detail={detail} />
          ))}
          {hiddenCount > 0 && moreHref && <MoreProjectsItem locale={locale} count={hiddenCount} href={moreHref} />}
        </ol>
        {hiddenCount === 0 && moreHref && (
          <div className="flex justify-end">
            <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={moreHref} />}>
              <span>{messages.actions.viewAllProjects}</span>
              <ArrowUpRightIcon aria-hidden />
            </Button>
          </div>
        )}
      </PanelContent>
    </Panel>
  )
}
function ProjectItem({ locale, project, detail }: { locale: Locale; project: Project; detail: boolean }) {
  const messages = getMessages(locale)
  return (
    <li className="group grid gap-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
      <div className="flex aspect-[8/5] w-full items-center justify-center rounded-md border border-line bg-muted/40 text-muted-foreground">
        <FolderKanbanIcon aria-hidden className="size-8" />
      </div>
      <div className="min-w-0">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug font-medium text-balance">
            <a className="link-underline" href={project.link} target="_blank" rel="noreferrer">
              {localize(project.title, locale)}
            </a>
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">GitHub</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{localize(project.summary, locale)}</p>
        {detail && <p className="mt-3 text-sm leading-6 text-muted-foreground">{localize(project.description, locale)}</p>}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className={cn("inline-flex items-center rounded-md border border-line bg-muted px-2 py-0.5 text-xs text-muted-foreground")}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button nativeButton={false} variant="outline" size="sm" className="h-7 text-xs" render={<a href={project.link} target="_blank" rel="noreferrer" />}>
            <span>{messages.actions.openProject}</span>
            <ArrowUpRightIcon aria-hidden />
          </Button>
        </div>
      </div>
    </li>
  )
}

function MoreProjectsItem({ locale, count, href }: { locale: Locale; count: number; href: string }) {
  const messages = getMessages(locale)
  const text = locale === "zh" ? `还有 ${count} 个项目` : `${count} more project${count > 1 ? "s" : ""}`
  return (
    <li className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm text-muted-foreground">
      <span className="font-mono text-lg leading-none" aria-hidden>
        ...
      </span>
      <span>{text}</span>
      <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={href} />}>
        <span>{messages.actions.viewAllProjects}</span>
        <ArrowUpRightIcon aria-hidden />
      </Button>
    </li>
  )
}
