import { ArrowUpRightIcon, BriefcaseBusiness, Code2, GraduationCap, Mail } from "lucide-react"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import { profile } from "@/content/profile"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

const icons = { email: Mail, github: Code2, linkedin: BriefcaseBusiness, scholar: GraduationCap }

export function SocialLinks({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>{messages.sections.contact}</PanelTitle>
      </PanelHeader>
      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {profile.profiles.map((item) => {
          const Icon = icons[item.kind]
          const isExternal = item.href.startsWith("http")
          const visibleText = localize(item.label, locale)
          return (
            <div key={visibleText} className="flex min-w-0 items-center gap-2 text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line [&_svg]:size-4 [&_svg]:text-muted-foreground" aria-hidden>
                <Icon aria-hidden />
              </span>
              <a
                className="link-underline min-w-0 truncate"
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                title={visibleText}
              >
                <span>{visibleText}</span>
                {isExternal && <ArrowUpRightIcon aria-hidden className="ml-1 inline-block size-3" />}
              </a>
            </div>
          )
        })}
      </PanelContent>
    </Panel>
  )
}
