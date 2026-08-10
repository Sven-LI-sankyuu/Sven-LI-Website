import type { LocalizedText } from "@/i18n/locale"

export type Project = {
  slug: string
  title: LocalizedText
  summary: LocalizedText
  description: LocalizedText
  link: string
  tags: string[]
  order: number
}

export const projects: Project[] = [
  {
    slug: "presentation-skills",
    title: {
      en: "presentation-skills: Open-Source Agent Skills Grounded in Real Office Experience",
      zh: "presentation-skills：基于真实办公经验的开源 Agent Skills",
    },
    summary: {
      en: "A four-skill open-source toolkit for PowerPoint, Word, web-demo video, and social-media content generation.",
      zh: "一套面向 PowerPoint、Word、web demo 视频和社交媒体内容生成的 4 个开源 Agent Skills。",
    },
    description: {
      en: "Created and open-sourced 4 Agent skills for professional PowerPoint, Word, web-demo video, and social-media content generation. The project turns office experience into concrete rules for content, narrative, typography, tables, and delivery, and it covers research reports, management briefings, technical proposals, thesis defenses, and product demonstrations.",
      zh: "开源了 4 个面向专业 PowerPoint、Word、web demo 视频和社交媒体内容生成的 Agent Skills。这个项目把办公经验固化为内容、叙事、排版、表格和交付规范，覆盖研究报告、管理汇报、技术方案、论文答辩和产品演示。",
    },
    link: "https://github.com/Sven-LI-sankyuu/presentation-skills",
    tags: ["Open Source", "Agent Skills", "PowerPoint", "Word", "Web Demo Video", "Social Media"],
    order: 1,
  },
]
