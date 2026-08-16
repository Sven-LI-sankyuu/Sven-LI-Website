import { ArrowUpRightIcon, Gamepad2Icon, PlayIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from "@/components/panel"
import type { Game } from "@/content/games"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"
import { cn } from "@/lib/utils"

export function GamesList({
  locale,
  games,
  limit,
  moreHref,
  detail = false,
  description,
  playable = false,
}: {
  locale: Locale
  games: Game[]
  limit?: number
  moreHref?: string
  detail?: boolean
  description?: string
  playable?: boolean
}) {
  const messages = getMessages(locale)
  const visibleGames = limit ? games.slice(0, limit) : games
  const hiddenCount = games.length - visibleGames.length

  return (
    <Panel id="games">
      <PanelHeader>
        <PanelTitle>
          {messages.sections.games}
          <sup className="ml-1 text-sm text-muted-foreground">{games.length}</sup>
        </PanelTitle>
        {description && <PanelDescription>{description}</PanelDescription>}
      </PanelHeader>
      <PanelContent className="space-y-4">
        <ol className="divide-y divide-line border-y border-line">
          {visibleGames.map((game) => (
            <GameItem key={game.slug} locale={locale} game={game} detail={detail} playable={playable} />
          ))}
          {hiddenCount > 0 && moreHref && <MoreGamesItem locale={locale} count={hiddenCount} href={moreHref} />}
        </ol>
        {hiddenCount === 0 && moreHref && (
          <div className="flex justify-end">
            <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={moreHref} />}>
              <span>{messages.actions.viewAllGames}</span>
              <ArrowUpRightIcon aria-hidden />
            </Button>
          </div>
        )}
      </PanelContent>
    </Panel>
  )
}

function GameItem({ locale, game, detail, playable }: { locale: Locale; game: Game; detail: boolean; playable: boolean }) {
  const messages = getMessages(locale)
  const title = localize(game.title, locale)
  return (
    <li className="py-5">
      {playable && (
        <div className="mb-4 overflow-hidden rounded-md border border-line bg-black">
          <div className="relative aspect-video w-full">
            <iframe src={game.playHref} title={title} className="absolute inset-0 h-full w-full" allow="autoplay" />
          </div>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]">
        <div className="flex aspect-[8/5] w-full items-center justify-center rounded-md border border-line bg-muted/40 text-muted-foreground">
          <Gamepad2Icon aria-hidden className="size-8" />
        </div>
        <div className="min-w-0">
          <div className="mb-1 flex items-start justify-between gap-3">
            <h3 className="text-lg leading-snug font-medium text-balance">
              <a className="link-underline" href={game.playHref} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">Browser</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{localize(game.summary, locale)}</p>
          {detail && <p className="mt-3 text-sm leading-6 text-muted-foreground">{localize(game.description, locale)}</p>}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <span key={tag} className={cn("inline-flex items-center rounded-md border border-line bg-muted px-2 py-0.5 text-xs text-muted-foreground")}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button nativeButton={false} variant="default" size="sm" className="h-7 text-xs" render={<a href={game.playHref} target="_blank" rel="noreferrer" />}>
              <span>{messages.actions.playGame}</span>
              <PlayIcon aria-hidden />
            </Button>
            <Button nativeButton={false} variant="outline" size="sm" className="h-7 text-xs" render={<a href={game.playHref} target="_blank" rel="noreferrer" />}>
              <span>{messages.actions.openFullscreen}</span>
              <ArrowUpRightIcon aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}

function MoreGamesItem({ locale, count, href }: { locale: Locale; count: number; href: string }) {
  const messages = getMessages(locale)
  const text = locale === "zh" ? `还有 ${count} 个游戏` : `${count} more game${count > 1 ? "s" : ""}`
  return (
    <li className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm text-muted-foreground">
      <span className="font-mono text-lg leading-none" aria-hidden>
        ...
      </span>
      <span>{text}</span>
      <Button nativeButton={false} variant="ghost" size="sm" render={<Link href={href} />}>
        <span>{messages.actions.viewAllGames}</span>
        <ArrowUpRightIcon aria-hidden />
      </Button>
    </li>
  )
}
