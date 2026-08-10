import type { Publication } from "@/content/publications/types"

export const knowMtBench: Publication = {
  slug: "knowmt-bench",
  title: "KnowMT-Bench: Benchmarking Knowledge-Intensive Long-Form Question Answering in Multi-Turn Dialogues",
  summary: {
    en: "A benchmark for multi-turn long-form question answering in knowledge-intensive domains.",
    zh: "面向知识密集领域多轮长文本问答的评测基准。",
  },
  abstract: {
    en: "Multi-Turn Long-Form Question Answering (MT-LFQA) is a key application paradigm of Large Language Models (LLMs) in knowledge-intensive domains. However, existing benchmarks are limited to single-turn dialogue, while multi-turn dialogue benchmarks typically assess other orthogonal capabilities rather than knowledge-intensive factuality. To bridge this critical gap, we introduce KnowMT-Bench, the \"first-ever\" benchmark designed to systematically evaluate MT-LFQA for LLMs across knowledge-intensive fields, including medicine, finance, and law. To faithfully assess the model's real-world performance, KnowMT-Bench employs a dynamic evaluation setting where models generate their own multi-turn dialogue histories given logically progressive question sequences. The factual capability and information delivery efficiency of the \"final-turn\" answer are then evaluated using a human-validated automated pipeline. Our experiments reveal that multi-turn contexts degrade performance: factual capability declines due to the contextual noise from self-generated histories, while information efficiency drops as models become more verbose with increasing dialogue length. We then investigate mitigation strategies, demonstrating that retrieval-augmented generation (RAG) can effectively alleviate and even reverse this factual degradation. These findings underscore the importance of our benchmark in evaluating and enhancing the conversational factual capabilities of LLMs in real-world knowledge-intensive applications. Code is available at https://github.com/hardenyu21/KnowMT-Bench.",
    zh: "多轮长文本问答是大语言模型在知识密集领域中的重要应用形式，但现有基准大多只覆盖单轮对话，而多轮基准通常评测的是其他能力，并不能真正衡量知识密集场景下的事实性。为填补这一空缺，我们提出 KnowMT-Bench，这是首个系统评测知识密集领域多轮长文本问答能力的基准，覆盖医学、金融与法律等场景。为了更贴近真实使用环境，KnowMT-Bench 采用动态评测设置：模型需要根据逻辑递进的问题序列，自行生成多轮对话历史。随后，我们通过人工验证的自动化流程评估最终回答的事实能力和信息传递效率。实验表明，多轮上下文会带来性能下降：一方面，自生成历史会引入上下文噪声，削弱事实能力；另一方面，随着对话变长，模型往往更啰嗦，信息效率也会下降。我们进一步研究了缓解方法，结果表明检索增强生成可以有效减轻甚至逆转这种退化。上述发现说明，KnowMT-Bench 对评估和提升真实知识密集应用中的对话事实能力具有重要意义。代码见 https://github.com/hardenyu21/KnowMT-Bench。",
  },
  authors: ["Junhao Chen*", "Yu Huang*", "Siyuan Li*", "Rui Yao", "Hanqian Li", "Hanyu Zhang", "Jungang Li", "Jian Chen", "Bowen Wang", "Xuming Hu"],
  date: "2025-09-26",
  venue: "arXiv preprint",
  order: 3,
  cover: "/assets/publications/knowmt-bench/featured.jpg",
  links: {
    paper: "https://arxiv.org/abs/2509.21856",
    code: "https://github.com/hardenyu21/KnowMT-Bench",
    dataset: "https://github.com/hardenyu21/KnowMT-Bench/tree/main/data",
  },
}
