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
    title: { en: "AI Algorithm Engineer", zh: "AI 算法工程师" },
    organization: { en: "Lingyue Technology Co., Ltd. (AI4Finance Startup)", zh: "领阅科技有限公司（AI4Finance 创业公司）" },
    start: "2025-10",
    end: "2026-05",
    summary: {
      en: "Developed and delivered a compliance component for an investment-advisory system, organized the existing compliance framework into a hierarchical rule structure, and built data pipelines for heterogeneous financial data, company knowledge graphs, and downstream quantitative research.",
      zh: "为投资顾问系统开发并交付合规模块，将现有合规框架整理为层级规则结构，并搭建面向新闻、公司信息和市场数据的数据管道，产出结构化数据与公司知识图谱，服务量化研究。",
    },
  },
  {
    title: { en: "Credit Bond Research Assistant", zh: "信用债研究助理" },
    organization: { en: "Beijing Dingnuo Investment Co., Ltd.", zh: "北京鼎诺投资有限公司" },
    start: "2024-06",
    end: "2024-08",
    summary: {
      en: "Led the development of a real-time credit risk assessment system with Python and SQL, used diversified financial data and interpretable models such as XGBoost to predict credit-bond default risk, and replicated fixed-income studies from top journals.",
      zh: "使用 Python 和 SQL 主导实时信用风险评估系统的开发，结合多源金融数据和 XGBoost 等可解释模型预测信用债违约风险，并复现顶级期刊中的固收研究。",
    },
    href: "http://eyounginvest.com/dingnuo/about/about/index.html",
  },
  {
    title: { en: "Industry Research Institute Research Assistant", zh: "行业研究院研究助理" },
    organization: { en: "GF Securities Co., Ltd.", zh: "广发证券股份有限公司" },
    start: "2024-06",
    end: "2024-08",
    summary: {
      en: "Contributed to institutional and internal research reports on elderly-care services, built a cohort-component forecasting model for population size and age structure, and analyzed around 1,000 products from the Shanghai Senior Care Expo.",
      zh: "参与养老服务主题的机构客户报告和内部研究，搭建人口规模与年龄结构的 cohort-component 预测模型，并分析上海老博会约 1,000 个产品，辅助划分养老产品细分市场。",
    },
    href: "https://en.gf.com.cn/",
  },
]

export const education: TimelineEntry[] = [
  {
    title: { en: "PhD in Artificial Intelligence", zh: "人工智能博士" },
    organization: { en: "HKUST(GZ)", zh: "香港科技大学（广州）" },
    start: "2026-09",
    end: "2029-06",
    summary: {
      en: "LLM applications in law and finance, especially agents, evaluation, and quantitative trading.",
      zh: "研究大语言模型在法律和金融中的应用，重点是智能体、评测和量化交易。",
    },
    href: "https://www.hkust-gz.edu.cn/",
  },
  {
    title: { en: "MPhil in Artificial Intelligence", zh: "人工智能哲学硕士" },
    organization: { en: "HKUST(GZ)", zh: "香港科技大学（广州）" },
    start: "2024-09",
    end: "2026-06",
    summary: {
      en: "LLM applications in law and finance, especially compliance, structured reasoning, and report generation.",
      zh: "研究大语言模型在法律和金融中的应用，尤其是合规、结构化推理和报告生成。",
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
