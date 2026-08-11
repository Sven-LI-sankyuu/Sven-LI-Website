import { CalendarDaysIcon, LinkIcon, MailIcon, MapPinIcon } from "lucide-react"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { GitHubIcon, GoogleScholarIcon, LinkedInIcon } from "@/components/social-icons"
import { profile } from "@/content/profile"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function Overview({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const items = [
    { icon: MapPinIcon, text: localize(profile.location, locale) },
    { icon: LinkIcon, text: localize(profile.organization.name, locale), href: profile.organization.href },
    { icon: CalendarDaysIcon, text: locale === "en" ? "MPhil 2024-2026 · PhD 2026-2029" : "硕士 2024-2026 · 博士 2026-2029" },
    { icon: MailIcon, text: profile.email, href: `mailto:${profile.email}` },
    { icon: GitHubIcon, text: "GitHub", href: "https://github.com/Sven-LI-sankyuu" },
    { icon: LinkedInIcon, text: "LinkedIn", href: "https://www.linkedin.com/in/siyuan-li-8b820b218/" },
    { icon: GoogleScholarIcon, text: "Google Scholar", href: "https://scholar.google.com/citations?user=haYxQEwAAAAJ&hl=zh-CN" },
  ]

  return (
    <Panel id="overview" className="screen-line-bottom-none">
      <PanelHeader><PanelTitle>{messages.sections.overview}</PanelTitle></PanelHeader>
      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {items.map(({ icon: Icon, text, href }) => (
          <div key={text} className="flex min-w-0 items-center gap-2 text-sm">
            <Icon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            {href ? <a className="link-underline truncate" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{text}</a> : <span>{text}</span>}
          </div>
        ))}
      </PanelContent>
    </Panel>
  )
}
