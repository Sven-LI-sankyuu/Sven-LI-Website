import type { LocalizedText } from "@/i18n/locale"

export const profile = {
  name: "Siyuan LI",
  displayName: "Siyuan (Sven) LI",
  role: { en: "MPhil Student", zh: "人工智能哲学硕士研究生" },
  organization: {
    name: { en: "HKUST(GZ)", zh: "香港科技大学（广州）" },
    href: "https://www.hkust-gz.edu.cn/",
  },
  location: { en: "Guangzhou, China", zh: "中国广州" },
  email: "lisiyuansven@foxmail.com",
  avatar: "/assets/profile/avatar.jpg",
  summary: {
    en: "I work on applying large language models to finance, with a focus on financial compliance, financial report generation, and structured knowledge reasoning. I care about outputs that can be checked, explained, and reused in real research workflows.",
    zh: "我主要研究大语言模型在金融中的应用，重点是金融合规、金融报告生成和结构化知识推理。我更关注结果是否可核查、可解释，并能在真实研究流程中复用。",
  },
  interests: [
    { en: "LLM agents", zh: "大语言模型智能体" },
    { en: "Knowledge graphs", zh: "知识图谱" },
    { en: "Financial NLP", zh: "金融自然语言处理" },
    { en: "Automated financial research", zh: "自动化金融研究" },
  ] satisfies LocalizedText[],
  profiles: [
    { name: "Email", href: "mailto:lisiyuansven@foxmail.com" },
    { name: "GitHub", href: "https://github.com/Sven-LI-sankyuu" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/siyuan-li-8b820b218/" },
    { name: "Google Scholar", href: "https://scholar.google.com/citations?user=haYxQEwAAAAJ&hl=zh-CN" },
  ],
} as const
