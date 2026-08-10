import { BriefcaseBusiness, Code2, GraduationCap, Mail } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent } from "@/components/panel"
import { profile } from "@/content/profile"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

const icons = { Email: Mail, GitHub: Code2, LinkedIn: BriefcaseBusiness, "Google Scholar": GraduationCap }

export function SocialLinks({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  return (
    <Panel id="contact">
      <h2 className="sr-only">{messages.sections.overview}</h2>
      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {profile.profiles.map((item) => {
            const Icon = icons[item.name as keyof typeof icons]
            return <li key={item.name}><Button nativeButton={false} variant="outline" size="icon-sm" className="text-foreground/80 shadow-none" render={<a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} aria-label={item.name} title={item.name} />}><Icon aria-hidden /></Button></li>
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
