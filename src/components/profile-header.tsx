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
    <section className="screen-line-bottom relative isolate grid grid-cols-1 overflow-y-clip border-x border-line bg-background/95 sm:min-h-[26rem] sm:grid-cols-[auto_minmax(0,1fr)] sm:grid-rows-[1fr_auto]">
      <DecorativeBackground
        src={siteConfig.assets.matrix}
        title="Matrix background decoration"
        loading="eager"
        className="absolute inset-0 size-full"
      />
      <figure className="relative z-10 overflow-hidden border-b border-line p-2 sm:row-span-2 sm:row-start-1 sm:border-b-0 sm:border-r sm:p-4">
        <div className="flex h-full items-end justify-start">
          <Image src={profile.avatar} alt="Siyuan LI" width={176} height={176} priority className="size-32 rounded-xl object-cover ring-1 ring-border sm:size-44" />
        </div>
      </figure>
      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="z-10 mt-auto border-t border-line">
          <div className="min-w-0 px-4 py-4 sm:py-4">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h1 className="font-heading text-[2rem] leading-none font-medium tracking-normal">{profile.displayName}</h1>
              <span className="font-mono text-xs text-muted-foreground">{localize(profile.role, locale)}</span>
            </div>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{localize(profile.summary, locale)}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {localize(profile.organization.name, locale)} · {localize(profile.location, locale)}
            </p>
          </div>
        </div>
      </div>
      <span className="sr-only">{messages.sections.overview}</span>
    </section>
  )
}
