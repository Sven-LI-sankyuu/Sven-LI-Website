import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GamesList } from "@/components/games-list"
import { games } from "@/content/games"
import { isLocale, type Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) return {}
  return {
    title: getMessages(rawLocale).sections.games,
    description:
      rawLocale === "zh"
        ? "浏览器端可直接游玩的小游戏。当前收录几何幸存者，一款类吸血鬼幸存者的 Canvas 游戏，内置强化学习自动挡。"
        : "Playable browser games. Right now it features Geometry Survivor, a Vampire Survivors-like canvas game with a built-in reinforcement-learning auto-pilot.",
    alternates: { canonical: `/${rawLocale}/games` },
  }
}

export default async function GamesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const description =
    locale === "zh"
      ? "浏览器端可直接游玩的小游戏。下面第一个是几何幸存者：点开即可玩，也可全屏打开。"
      : "Playable browser games. The first one is Geometry Survivor: play it inline below, or open it fullscreen."
  return (
    <div className="mx-auto max-w-6xl pt-6 sm:pt-8">
      <GamesList locale={locale} games={games} detail playable description={description} />
    </div>
  )
}
