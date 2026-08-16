import type { Locale } from "@/i18n/locale"

export const messages = {
  en: {
    nav: { home: "Profile", papers: "Papers", projects: "Projects", games: "Games", experience: "Experience", blog: "Blog" },
    theme: { system: "Use system theme", light: "Use light theme", dark: "Use dark theme" },
    language: "切换到中文",
    sections: {
      overview: "Overview",
      contact: "Contact",
      research: "Research",
      publications: "Selected publications",
      projects: "Projects",
      games: "Games",
      experiencePage: "Experience",
      experience: "Work experience",
      education: "Education",
      blog: "Blog",
    },
    actions: { cv: "Curriculum vitae", paper: "Paper", code: "Code", dataset: "Dataset", details: "Details", openProject: "Open project", viewAllPublications: "View all publications", viewAllProjects: "View all projects", viewAllGames: "View all games", playGame: "Play now", openFullscreen: "Open fullscreen", viewFullExperience: "View full experience" },
    states: { noPosts: "No published posts yet.", counterUnavailable: "Visit counter unavailable" },
    footer: { visits: "Visits", links: "Links", designReference: "Design reference", fontSource: "Font source" },
  },
  zh: {
    nav: { home: "主页", papers: "论文", projects: "项目", games: "游戏", experience: "经历", blog: "博客" },
    theme: { system: "跟随系统主题", light: "使用浅色主题", dark: "使用深色主题" },
    language: "Switch to English",
    sections: {
      overview: "简介",
      contact: "联系",
      research: "研究方向",
      publications: "精选论文",
      projects: "项目",
      games: "游戏",
      experiencePage: "经历",
      experience: "工作经历",
      education: "教育经历",
      blog: "博客",
    },
    actions: { cv: "个人简历", paper: "论文", code: "代码", dataset: "数据集", details: "详情", openProject: "打开项目", viewAllPublications: "查看全部论文", viewAllProjects: "查看全部项目", viewAllGames: "查看全部游戏", playGame: "立即游玩", openFullscreen: "全屏打开", viewFullExperience: "查看完整经历" },
    states: { noPosts: "目前没有已发布文章。", counterUnavailable: "访问计数器暂时不可用" },
    footer: { visits: "访问量", links: "友情链接", designReference: "设计参考", fontSource: "字体来源" },
  },
} satisfies Record<Locale, object>

export function getMessages(locale: Locale) {
  return messages[locale]
}
