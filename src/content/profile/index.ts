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
    en: "I build reliable LLM systems for high-stakes legal and financial applications, with a focus on compliance, structured reasoning, report generation, and agentic workflows.",
    zh: "我主要做面向法律和金融高风险场景的可靠大语言模型系统，重点放在合规、结构化推理、报告生成和智能体流程。",
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
