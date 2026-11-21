import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"

export function Research({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  return (
    <Panel id="research">
      <PanelHeader><PanelTitle>{messages.sections.research}</PanelTitle></PanelHeader>
      <PanelContent>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
          {locale === "zh"
            ? "我的研究关注大语言模型在法律和金融领域的应用。此前主要研究监管合规，包括复杂规则的结构化表示与自动化合规检查。最近逐渐拓展到金融研究，探索智能体和知识图谱如何支持证据收集、可靠分析与研究报告生成。同时也关注这些系统的评测，尤其是事实错误、信息遗漏和不确定性。"
            : "My research focuses on LLM systems for legal and financial applications. Much of my earlier work centered on regulatory compliance, including structured representations of complex rules and automated compliance checking. More recently, I've been exploring financial research, especially how agents and knowledge graphs can support evidence gathering, grounded analysis, and report generation. I'm also interested in evaluating these systems for factual errors, omissions, and uncertainty."}
        </p>
      </PanelContent>
    </Panel>
  )
}
