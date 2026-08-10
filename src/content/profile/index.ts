import type { LocalizedText } from "@/i18n/locale"

export const profile = {
  name: "Siyuan LI",
  displayName: "Siyuan (Sven) LI",
  role: { en: "PhD Student", zh: "PhD Student" },
  organization: {
    name: { en: "HKUST(GZ)", zh: "香港科技大学（广州）" },
    href: "https://www.hkust-gz.edu.cn/",
  },
  location: { en: "Guangzhou, China", zh: "中国广州" },
  email: "lisiyuansven@foxmail.com",
  avatar: "/assets/profile/avatar.jpg",
  summary: {
    en: "My research focuses on building reliable LLM systems for high-stakes legal and financial applications. I am particularly interested in structured representations, agentic workflows, and regulatory reasoning, together with evaluation methods that detect omissions, factual errors, and uncertainty in complex model outputs.",
    zh: "我的研究聚焦于面向法律和金融高风险场景的可靠大语言模型系统，重点关注结构化表示、智能体流程和监管推理，并研究用于检测复杂模型输出中的遗漏、事实错误和不确定性的评测方法。",
  },
  interests: [
    { en: "LLM agents", zh: "大语言模型智能体" },
    { en: "Knowledge graphs", zh: "知识图谱" },
    { en: "Financial NLP", zh: "金融自然语言处理" },
    { en: "Automated financial research", zh: "自动化金融研究" },
  ] satisfies LocalizedText[],
  profiles: [
    { kind: "email", label: { en: "Email", zh: "邮箱" }, href: "mailto:lisiyuansven@foxmail.com" },
    { kind: "github", label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/Sven-LI-sankyuu" },
    { kind: "linkedin", label: { en: "LinkedIn", zh: "LinkedIn" }, href: "https://www.linkedin.com/in/siyuan-li-8b820b218/" },
    { kind: "scholar", label: { en: "Google Scholar", zh: "谷歌学术" }, href: "https://scholar.google.com/citations?user=haYxQEwAAAAJ&hl=zh-CN" },
  ],
} as const
