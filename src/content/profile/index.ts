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
    en: "I'm a PhD student at HKUST(GZ), working on LLMs and their applications in finance. Outside research, I like wandering around, hunting for good food, fishing, hiking, and running. I also enjoy vibe-coding little projects of questionable usefulness.",
    zh: "我在香港科技大学（广州）读博，研究大语言模型在金融领域的应用。平时喜欢到处逛逛、找好吃的，也喜欢钓鱼、爬山和跑步。偶尔还会用 vibe coding 捣鼓一些没什么用的小项目。",
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
