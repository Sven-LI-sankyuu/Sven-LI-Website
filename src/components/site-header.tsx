import Link from "next/link"
import { BookOpenTextIcon, BriefcaseBusinessIcon, FolderKanbanIcon, Gamepad2Icon, HomeIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { LocaleToggle } from "@/components/locale-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function SiteHeader({ locale, hasBlog }: { locale: Locale; hasBlog: boolean }) {
  const messages = getMessages(locale)
  const navLink = (href: string, label: string, icon: React.ReactNode) => (
    <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={href} className="gap-1.5 text-muted-foreground" />}>
      {icon}{label}
    </Button>
  )

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/95 px-2 backdrop-blur">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) max-w-6xl items-center gap-2 border-x border-line px-2 sm:gap-4 sm:px-4">
        <Link href={`/${locale}`} className="shrink-0 font-heading text-sm font-medium" aria-label={siteConfig.title}>
          Sven LI
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Primary navigation">
          {navLink(`/${locale}`, messages.nav.home, <HomeIcon aria-hidden />)}
          {navLink(`/${locale}/publications`, messages.nav.papers, <BookOpenTextIcon aria-hidden />)}
          {navLink(`/${locale}/projects`, messages.nav.projects, <FolderKanbanIcon aria-hidden />)}
          {navLink(`/${locale}/experience`, messages.nav.experience, <BriefcaseBusinessIcon aria-hidden />)}
          {hasBlog && navLink(`/${locale}/blog`, messages.nav.blog, <BookOpenTextIcon aria-hidden />)}
        </nav>
        <div className="ml-auto flex items-center gap-0.5">
          {navLink(`/${locale}/games`, messages.nav.games, <Gamepad2Icon aria-hidden />)}
          <LocaleToggle locale={locale} />
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </header>
  )
}
