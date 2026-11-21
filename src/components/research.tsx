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
            ? "我的研究关注大语言模型在金融领域的应用，尤其是如何利用智能体和知识图谱支持证据收集、可靠分析与研究报告生成。我也研究监管合规，包括复杂规则的结构化表示与自动化检查。同时关注模型输出中的事实错误、信息遗漏和不确定性等评测问题。"
            : "My research focuses on LLM systems for financial applications, particularly how agents and knowledge graphs can support evidence gathering, grounded analysis, and report generation. I also work on regulatory compliance, including structured representations of complex rules and automated checking. Across these areas, I'm interested in evaluating factual errors, omissions, and uncertainty in model outputs."}
        </p>
      </PanelContent>
    </Panel>
  )
}
