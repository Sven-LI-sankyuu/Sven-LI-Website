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
            ? "我的研究围绕法律和金融高风险场景中的大语言模型系统，重点关注智能体、知识图谱、监管合规、报告生成和自动化金融研究，包括工具调用与任务拆解、结构化检索与可靠推理，以及金融研究中的证据收集、筛选和验证。"
            : "My research centers on LLM systems for high-stakes legal and financial settings, with a focus on agents, knowledge graphs, compliance, report generation, and automated financial research. My interests include tool-using agents, structured retrieval and grounded reasoning, and evidence gathering and verification in financial analysis."}
        </p>
      </PanelContent>
    </Panel>
  )
}
