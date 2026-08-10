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
    <section className="screen-line-bottom grid grid-cols-1 overflow-hidden border-x border-line bg-background/95 sm:grid-cols-[minmax(0,1.15fr)_16rem]">
      <div className="relative min-h-64 overflow-hidden border-b border-line p-4 sm:col-start-2 sm:min-h-80 sm:border-b-0 sm:border-l">
        <DecorativeBackground src={siteConfig.assets.matrix} title="Matrix background decoration" loading="eager" className="absolute inset-0 size-full" />
        <div className="relative z-10 flex h-full items-end justify-end">
          <Image src={profile.avatar} alt="Siyuan LI" width={176} height={176} priority className="size-32 rounded-xl object-cover ring-1 ring-border sm:size-44" />
        </div>
        <span className="absolute right-4 bottom-4 z-10 font-mono text-xs text-muted-foreground">Fig. 1</span>
      </div>
      <div className="min-w-0 border-b border-line px-4 py-3 sm:col-start-1 sm:border-b-0 sm:border-r">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h1 className="font-heading text-[2rem] leading-none font-medium tracking-normal">{profile.displayName}</h1>
          <span className="font-mono text-xs text-muted-foreground">{localize(profile.role, locale)}</span>
        </div>
        <p className="mt-3 text-base leading-7 text-muted-foreground">{localize(profile.summary, locale)}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {localize(profile.organization.name, locale)} · {localize(profile.location, locale)}
        </p>
      </div>
      <span className="sr-only">{messages.sections.overview}</span>
    </section>
  )
}
