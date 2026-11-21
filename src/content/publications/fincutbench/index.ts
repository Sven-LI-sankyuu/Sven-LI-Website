import type { Publication } from "@/content/publications/types"

export const finCutBench: Publication = {
  slug: "fincutbench",
  title: "FinCutBench: A Continually Updated Benchmark for Measuring the Temporal Boundaries of LLM Financial Knowledge",
  summary: {
    en: "A continually updated benchmark for measuring the temporal boundaries of LLM financial knowledge and detecting parametric look-ahead bias.",
    zh: "持续更新的金融知识评测基准，用于测量大语言模型的知识时间边界并识别参数化前视偏差。",
  },
  abstract: {
    en: "In financial backtesting and other point-in-time evaluations, LLMs may retain financial facts disclosed after the simulated decision date, introducing parametric look-ahead bias. However, the temporal coverage of such knowledge is difficult to measure, and vendor-reported knowledge cutoffs offer limited guidance for financial evaluations. We introduce FinCutBench, a continually updated benchmark comprising 9,000 Chinese and English four-option multiple-choice questions spanning January 2023 to September 2026, across Chinese and U.S. markets and four categories of financial information. For each model, we construct monthly knowledge profiles from closed-book accuracy on questions indexed by the estimated month when their underlying facts first became public. We characterize temporal declines using two markers: Transition Start, where the fitted accuracy begins to decline, and FinCut Boundary, where it reaches the later low level. We estimate these markers through statistical decline detection and segmented fitting, and assess localization stability under resampling. Among ten main models, nine exhibit statistically detectable declines. Using the measured dates to define downstream evaluation windows, we find a significant decline in U.S. asset-ranking performance relative to a matched baseline, while Chinese-market results are mixed across models, with no significant aggregate change. Earnings recall shows significant relative declines for some models. Meanwhile, EPS forecasting errors increase in later periods for both the evaluated models and the matched control, yielding no significant relative changes and suggesting a role for period-specific forecasting difficulty. These findings establish FinCutBench as an empirical framework for characterizing the temporal coverage of LLM financial knowledge and informing the interpretation of point-in-time evaluations.",
    zh: "在金融回测和其他时间点（point-in-time）评估中，大语言模型的参数可能包含模拟决策日期之后才公开的金融事实，从而产生参数化前视偏差。FinCutBench 是一个持续更新的金融知识评测基准，目前覆盖 2023 年 1 月至 2026 年 9 月，包含中美市场四类金融信息下的 9,000 道中英文四选一问题。我们根据每项事实首次公开的月份，统计模型在闭卷条件下的月度准确率，构建金融知识时间分布，并通过统计检验和分段拟合估计准确率开始下降的 Transition Start，以及下降至后期低位的 FinCut Boundary，同时利用重采样评估时间边界的稳定性。十个主要评估模型中有九个呈现统计上可检测的准确率下降。进一步使用测得的边界划分下游评估时段，发现部分模型在美国市场资产排序和财报结果回忆任务上的表现出现相对下降；中国市场的资产排序结果存在模型间差异，而 EPS 预测误差的变化还受到时期本身的预测难度影响。FinCutBench 为刻画大语言模型金融知识的时间覆盖范围，以及解释历史时间点金融评估结果，提供了经验性依据。",
  },
  authors: ["Siyuan Li", "Ke Wan", "Boyong Hou", "Yujie Deng", "Zixuan Yuan"],
  date: "2026-11-08",
  venue: "arXiv preprint, 2026",
  order: 0,
  cover: "/assets/publications/fincutbench/featured.png",
  links: {
    paper: "https://arxiv.org/abs/2611.11588",
  },
}
