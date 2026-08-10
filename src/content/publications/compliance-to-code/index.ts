import type { Publication } from "@/content/publications/types"

export const complianceToCode: Publication = {
  slug: "compliance-to-code",
  title: "Compliance-to-Code: Enhancing Financial Compliance Checking via Code Generation",
  summary: {
    en: "The first large-scale Chinese dataset for financial regulatory compliance with an automated checking pipeline.",
    zh: "首个面向中文金融监管合规的大规模数据集，并配套自动化合规检查流程。",
  },
  abstract: {
    en: "Regulatory compliance has become a cornerstone of corporate governance, ensuring adherence to systematic legal frameworks. At its core, financial regulations often comprise highly intricate provisions, layered logical structures, and numerous exceptions, which inevitably result in labor-intensive or comprehension challenges. To mitigate this, recent Regulatory Technology (RegTech) and Large Language Models (LLMs) have gained significant attention in automating the conversion of regulatory text into executable compliance logic. However, their performance remains suboptimal particularly when applied to Chinese-language financial regulations, due to three key limitations - (1) incomplete domain-specific knowledge representation, (2) insufficient hierarchical reasoning capabilities, and (3) failure to maintain temporal and logical coherence. To fill these gaps, we present Compliance-to-Code, the first large-scale Chinese dataset dedicated to financial regulatory compliance. Covering 1,159 annotated clauses from 361 regulations across ten categories, each clause is modularly structured with four logical elements-subject, condition, constraint, and contextual information-along with regulation relations. We provide deterministic Python code mappings, detailed code reasoning, and code explanations to facilitate automated auditing. To demonstrate utility, we present FinCheck - a pipeline for regulation structuring, code generation, and report generation.",
    zh: "监管合规已经成为公司治理的基础，需要遵循系统化的法律框架。金融监管规则往往包含复杂条款、层级逻辑和大量例外，因此在人工理解和审查时成本很高。近年来，监管科技和大语言模型开始被用于把监管文本自动转换为可执行的合规逻辑，但在中文金融监管场景中仍然存在三类问题：领域知识表示不完整、层级推理能力不足，以及难以维持时间和逻辑一致性。为此，我们提出 Compliance-to-Code，这是首个专门面向中文金融监管合规的大规模数据集。该数据集覆盖十类金融法规中的 361 部法规和 1,159 条标注条款，每条条款都被模块化为主体、条件、约束和上下文信息，并配套监管关系。我们还提供确定性的 Python 代码映射、详细推理过程和解释，以支持自动化审计。为展示其实用性，我们进一步提出 FinCheck 这一端到端流程，支持法规结构化、代码生成和报告生成。",
  },
  authors: ["Siyuan Li", "Jian Chen", "Rui Yao", "Xuming Hu", "Peilin Zhou", "Weihua Qiu", "Simin Zhang", "Chucheng Dong", "Zhiyao Li", "Qipeng Xie", "Zixuan Yuan"],
  date: "2025-05-19",
  venue: "KDD 2026 Dataset & Benchmark Track, Poster",
  order: 1,
  cover: "/assets/publications/compliance-to-code/featured.jpg",
  links: {
    paper: "https://arxiv.org/abs/2505.19804",
    code: "https://github.com/AlexJJJChen/Compliance-to-Code",
    dataset: "https://huggingface.co/datasets/GPS-Lab/Compliance-to-Code",
  },
}
