import { CalendarDaysIcon, FileTextIcon, LinkIcon, MailIcon, MapPinIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { siteConfig } from "@/config/site"
import { profile } from "@/content/profile"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function Overview({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const items = [
    { icon: MapPinIcon, text: localize(profile.location, locale) },
    { icon: MailIcon, text: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkIcon, text: localize(profile.organization.name, locale), href: profile.organization.href },
    { icon: CalendarDaysIcon, text: locale === "en" ? "MPhil 2024-2026 · PhD 2026-2029" : "硕士 2024-2026 · 博士 2026-2029" },
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
        <Button nativeButton={false} variant="outline" size="sm" render={<a href={siteConfig.assets.cv} download className="w-fit" />}>
          <FileTextIcon aria-hidden />{messages.actions.cv}
        </Button>
      </PanelContent>
    </Panel>
  )
}
