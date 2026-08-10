import type { Locale } from "@/i18n/locale"

export const messages = {
  en: {
    nav: { home: "Profile", papers: "Papers", experience: "Experience", blog: "Blog" },
    theme: { system: "Use system theme", light: "Use light theme", dark: "Use dark theme" },
    language: "切换到中文",
    sections: {
      overview: "Overview",
      research: "Research",
      publications: "Selected publications",
      experience: "Experience",
      education: "Education",
      blog: "Blog",
    },
    actions: { cv: "Curriculum vitae", paper: "Paper", code: "Code", dataset: "Dataset", details: "Details", viewAllPublications: "View all publications", viewFullExperience: "View full experience" },
    states: { noPosts: "No published posts yet.", counterUnavailable: "Visit counter unavailable" },
    footer: { visits: "Visits", typeface: "Typeface", source: "Design source" },
  },
  zh: {
    nav: { home: "主页", papers: "论文", experience: "经历", blog: "博客" },
    theme: { system: "跟随系统主题", light: "使用浅色主题", dark: "使用深色主题" },
    language: "Switch to English",
    sections: {
      overview: "简介",
      research: "研究方向",
      publications: "精选论文",
      experience: "工作经历",
      education: "教育经历",
      blog: "博客",
    },
    actions: { cv: "个人简历", paper: "论文", code: "代码", dataset: "数据集", details: "详情", viewAllPublications: "查看全部论文", viewFullExperience: "查看完整经历" },
    states: { noPosts: "目前没有已发布文章。", counterUnavailable: "访问计数器暂时不可用" },
    footer: { visits: "访问量", typeface: "字体", source: "设计来源" },
  },
} satisfies Record<Locale, object>

export function getMessages(locale: Locale) {
  return messages[locale]
}
