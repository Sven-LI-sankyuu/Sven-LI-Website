import { BrainCircuitIcon, ChartNoAxesCombinedIcon, NetworkIcon, SearchCheckIcon } from "lucide-react"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import type { Locale } from "@/i18n/locale"
import { localize } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

const icons = [BrainCircuitIcon, NetworkIcon, ChartNoAxesCombinedIcon, SearchCheckIcon]

export function Research({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  const interests = [
    { en: "LLM agents for tool use, task decomposition, and verifiable reasoning workflows.", zh: "用于工具调用、任务拆解和可核查推理流程的大语言模型智能体。" },
    { en: "Knowledge graphs for structured retrieval, entity relations, and grounded reasoning.", zh: "用于结构化检索、实体关系建模和可靠推理的知识图谱。" },
    { en: "NLP financial applications, especially financial compliance and financial report generation.", zh: "金融自然语言处理应用，重点是金融合规与金融报告生成。" },
    { en: "Auto-financial researching, including evidence gathering, screening, summarization, and verification.", zh: "自动化金融研究，包括证据收集、筛选、总结与验证。" },
  ]
  return (
    <Panel id="research">
      <PanelHeader><PanelTitle>{messages.sections.research}</PanelTitle></PanelHeader>
      <PanelContent className="space-y-4">
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
          {locale === "zh" ? "旧站研究方向原文是 LLM Agent、Knowledge Graph、NLP Financial applications 和 Auto-Financial Researching；新版首页保留这些方向，并把每个方向补充成更容易理解的研究入口。" : "The previous site listed LLM Agent, Knowledge Graph, NLP Financial applications, and Auto-Financial Researching. This version keeps those directions and makes each one more explicit for readers."}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
        {interests.map((interest, index) => {
          const Icon = icons[index]
          return <div key={interest.en} className="flex items-start gap-3 border border-line bg-background/80 p-3"><span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-muted/50 text-muted-foreground"><Icon aria-hidden className="size-4" /></span><span className="text-sm leading-6">{localize(interest, locale)}</span></div>
        })}
        </div>
      </PanelContent>
    </Panel>
  )
}
