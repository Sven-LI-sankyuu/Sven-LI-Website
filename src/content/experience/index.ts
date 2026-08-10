import type { LocalizedText } from "@/i18n/locale"

export type TimelineEntry = {
  title: LocalizedText
  organization: LocalizedText
  start: string
  end?: string
  summary: LocalizedText
  href?: string
}

export const work: TimelineEntry[] = [
  {
    title: { en: "Vice President", zh: "副主席" },
    organization: { en: "HKUST Quant Trading Society", zh: "香港科技大学量化交易协会" },
    start: "2024-06",
    summary: {
      en: "Provide comprehensive technical support for the website and email system, and coordinate competitions, meetings, publicity, and day-to-day society operations.",
      zh: "负责网站与邮件系统的综合技术支持，并协调量化交易竞赛、会议、宣传和协会日常运营。",
    },
    href: "https://ustquant.hk/",
  },
  {
    title: { en: "Credit Risk Analyst Intern", zh: "信用风险分析实习生" },
    organization: { en: "Beijing Dingnuo Investment Co., Ltd.", zh: "北京鼎诺投资有限公司" },
    start: "2024-06",
    end: "2024-08",
    summary: {
      en: "Led the development of a credit-bond default rate prediction system and a real-time credit risk assessment workflow with Python and SQL, using diversified financial data and interpretable models such as XGBoost.",
      zh: "主导信用债违约率预测系统和实时信用风险评估流程的开发，使用 Python、SQL、丰富的金融数据以及 XGBoost 等可解释模型。",
    },
    href: "http://eyounginvest.com/dingnuo/about/about/index.html",
  },
  {
    title: { en: "Research Assistant Intern, Consumer Sector", zh: "消费行业研究助理实习生" },
    organization: { en: "GF Securities Co., Ltd.", zh: "广发证券股份有限公司" },
    start: "2024-06",
    end: "2024-08",
    summary: {
      en: "Conducted in-depth industry research on elderly-care services, contributed to research reports for institutional clients and internal publication, and worked on macro research around demographics, consumer trends, home furnishing, and healthcare.",
      zh: "深入参与养老服务行业研究，协助撰写机构客户报告和部门内刊，并围绕人口结构、消费趋势、家居和医疗健康等方向开展宏观与行业研究。",
    },
    href: "https://en.gf.com.cn/",
  },
]

export const education: TimelineEntry[] = [
  {
    title: { en: "MPhil in Artificial Intelligence", zh: "人工智能哲学硕士" },
    organization: { en: "HKUST(GZ)", zh: "香港科技大学（广州）" },
    start: "2024-09",
    end: "2026-09",
    summary: {
      en: "LLM applications in finance, especially financial compliance, financial report generation, and structured knowledge reasoning.",
      zh: "研究大语言模型在金融中的应用，尤其是金融合规、金融报告生成和结构化知识推理。",
    },
    href: "https://www.hkust-gz.edu.cn/",
  },
  {
    title: { en: "BA in Finance", zh: "金融学学士" },
    organization: { en: "Sun Yat-sen University", zh: "中山大学" },
    start: "2020-09",
    end: "2024-07",
    summary: { en: "GPA 3.6/4.0, with coursework in microeconomics, macroeconomics, financial accounting, intermediate financial accounting, econometrics, and corporate finance.", zh: "GPA 3.6/4.0，主修微观经济学、宏观经济学、财务会计、中级财务会计、计量经济学与公司金融等课程。" },
    href: "https://www.sysu.edu.cn/",
  },
]
