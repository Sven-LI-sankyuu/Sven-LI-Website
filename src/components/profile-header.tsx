import Image from "next/image"

import { DecorativeBackground } from "@/components/decorative-background"
import { siteConfig } from "@/config/site"
import { profile } from "@/content/profile"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function ProfileHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  return (
    <section className="screen-line-bottom grid grid-cols-[minmax(0,1fr)_auto] overflow-hidden border-x border-line bg-background/95">
      <div className="relative col-span-2 min-h-64 overflow-hidden border-b border-line p-4 sm:col-span-1 sm:col-start-2 sm:min-h-80 sm:border-b-0">
        <DecorativeBackground src={siteConfig.assets.matrix} title="Matrix background decoration" loading="eager" className="absolute inset-0 size-full" />
        <div className="relative z-10 flex h-full items-end justify-end">
          <Image src={profile.avatar} alt="Siyuan LI" width={176} height={176} priority className="size-32 rounded-xl object-cover ring-1 ring-border sm:size-44" />
        </div>
        <span className="absolute right-4 bottom-4 z-10 font-mono text-xs text-muted-foreground">Fig. 1</span>
      </div>
      <div className="row-span-2 row-start-1 hidden border-r border-line sm:block" />
      <div className="col-span-2 border-t border-line sm:col-span-1 sm:col-start-2">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 px-4 py-3">
          <h1 className="font-heading text-[2rem] leading-none font-medium tracking-normal">{profile.displayName}</h1>
          <span className="font-mono text-xs text-muted-foreground">{localize(profile.role, locale)}</span>
        </div>
        <p className="border-t border-line px-4 py-3 text-sm leading-6 text-muted-foreground">{localize(profile.summary, locale)}</p>
      </div>
      <div className="col-span-2 border-t border-line px-4 py-2 text-xs text-muted-foreground sm:col-span-1 sm:col-start-2">
        {localize(profile.organization.name, locale)} · {localize(profile.location, locale)}
      </div>
      <span className="sr-only">{messages.sections.overview}</span>
    </section>
  )
}
