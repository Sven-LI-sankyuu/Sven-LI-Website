import type { LocalizedText } from "@/i18n/locale"

export type Game = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  description: LocalizedText
  playHref: string
  tags: string[]
  order: number
}

export const games: Game[] = [
  {
    slug: "geometry-survivor",
    title: {
      en: "Geometry Survivor",
      zh: "几何幸存者",
    },
    summary: {
      en: "A browser Vampire Survivors-like: WASD movement, auto-attack, XP and level-up choices, time-scaled difficulty, and an optional auto-pilot (hand-crafted rule-based policy, PPO, and behavior cloning).",
      zh: "一款浏览器端的类吸血鬼幸存者游戏：WASD 移动、自动攻击、经验与三选一升级、随时间递增的难度，以及内置的自动挡（手写规则策略、PPO 强化学习、行为克隆）。",
    },
    description: {
      en: "Survive as long as possible against swarms of geometric enemies. Move with WASD, dodge, and let your weapons fire automatically. Collect XP orbs, level up, and pick one of three upgrades. Difficulty scales with elapsed time (sublinearly) rather than your level. The HUD tracks HP, XP, level, timer, and kills, with a game-over screen and restart. Visuals are pure canvas geometry with screen shake, particles, shockwave rings, trails, and a vignette. A built-in auto-pilot offers three policies: a hand-crafted potential-field rule (reliably survives 10+ minutes), a PPO policy trained with Stable-Baselines3, and a behavior-cloned network trained to imitate the rule policy — all running inference directly in the browser.",
      zh: "在几何体敌人的围攻下尽可能久地存活。WASD 移动、走位躲避，武器自动攻击；拾取经验球升级，并从三张候选卡中选一。难度随时间（亚线性）增长而非随等级。HUD 显示血量、经验、等级、计时与击杀数，死亡后可重开。画面全部由 Canvas 基础几何体构成，带屏幕震动、粒子、冲击波圆环、拖尾与暗角。内置自动挡提供三种策略：手写势场规则（可稳定存活 10 分钟以上）、Stable-Baselines3 训练的 PPO 策略，以及模仿规则策略训练出的行为克隆网络——推理全部在浏览器端完成。",
    },
    playHref: "/games/geometry-survivor/index.html",
    tags: ["Canvas", "Game", "Reinforcement Learning", "PPO", "Behavior Cloning"],
    order: 1,
  },
]
