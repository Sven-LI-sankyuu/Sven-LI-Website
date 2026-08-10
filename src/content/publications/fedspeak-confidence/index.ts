import type { Publication } from "@/content/publications/types"

export const fedspeakConfidence: Publication = {
  slug: "fedspeak-confidence",
  title: "Interpreting Fedspeak with Confidence: A LLM-Based Uncertainty-Aware Framework Guided by Monetary Policy Transmission Paths",
  summary: {
    en: "An uncertainty-aware framework for interpreting Federal Reserve communications with more reliable policy-stance predictions.",
    zh: "结合货币政策传导路径与不确定性解码，更可靠地识别美联储沟通中的政策立场。",
  },
  abstract: {
    en: "\"Fedspeak\", the stylized and often nuanced language used by the U.S. Federal Reserve, encodes implicit policy signals and strategic stances. The Federal Open Market Committee strategically employs Fedspeak as a communication tool to shape market expectations and influence both domestic and global economic conditions. As such, automatically parsing and interpreting Fedspeak presents a high-impact challenge, with significant implications for financial forecasting, algorithmic trading, and data-driven policy analysis. In this paper, we propose an LLM-based, uncertainty-aware framework for deciphering Fedspeak and classifying its underlying monetary policy stance. Technically, to enrich the semantic and contextual representation of Fedspeak texts, we incorporate domain-specific reasoning grounded in the monetary policy transmission mechanism. We further introduce a dynamic uncertainty decoding module to assess the confidence of model predictions, thereby enhancing both classification accuracy and model reliability. Experimental results demonstrate that our framework achieves state-of-the-art performance on the policy stance analysis task.",
    zh: "Fedspeak 是美联储使用的一种风格化且含义细腻的语言，能够传达隐含的政策信号和策略立场。联邦公开市场委员会也会策略性地使用这种表达来影响市场预期，并作用于国内外经济环境。因此，自动解析和解释 Fedspeak 是一个高影响力任务，对金融预测、算法交易和数据驱动的政策分析都有重要意义。为此，我们提出一个基于大语言模型、并考虑不确定性的框架，用于理解 Fedspeak 并判断其背后的货币政策立场。在技术上，我们把货币政策传导机制中的领域知识引入文本表示，以增强其语义和上下文表达；同时加入动态不确定性解码模块，用来估计模型预测的置信度，从而提升分类准确率和模型可靠性。实验结果表明，我们的方法在政策立场分析任务上达到了当前最优表现。",
  },
  authors: ["Rui Yao", "Qi Chai", "Jinhai Yao", "Siyuan Li", "Junhao Chen", "Qi Zhang", "Hao Wang"],
  date: "2025-08-12",
  venue: "AAAI 2026, Oral",
  order: 2,
  cover: "/assets/publications/fedspeak-confidence/featured.jpg",
  links: {
    paper: "https://arxiv.org/abs/2508.08001",
    code: "https://github.com/yuuki20001/FOMC-sentiment-path",
  },
}
