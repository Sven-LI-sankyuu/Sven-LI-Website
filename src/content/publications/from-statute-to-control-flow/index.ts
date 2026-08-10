import type { Publication } from "@/content/publications/types"

export const fromStatuteToControlFlow: Publication = {
  slug: "from-statute-to-control-flow",
  title: "From Statute to Control Flow: Span-Grounded Deontic Trees for Defeasible Scope Parsing",
  summary: {
    en: "A span-grounded legal parsing framework for rules, exceptions, and scope relations.",
    zh: "面向规则、例外与作用域关系的 span-grounded 法律解析框架。",
  },
  abstract: {
    en: "This work targets the silent omission problem in statutory parsing by decomposing regulations into span-grounded deontic trees. The representation keeps rules, exceptions, and scope relations explicit so that complex legal control flow can be traced and audited more reliably.",
    zh: "这项工作针对法规解析中的隐式遗漏问题，把法规拆解为 span-grounded deontic trees。该表示方式将规则、例外与作用域关系显式保留，从而更可靠地追踪和审计复杂的法律控制流。",
  },
  authors: ["Jian Chen*", "Siyuan Li*", "Chucheng Wan", "Zixuan Yuan"],
  date: "2026-06-08",
  venue: "KDD 2026 Dataset & Benchmark Track, Poster",
  order: 2,
  links: {
    paper: "https://arxiv.org/abs/2606.08932",
  },
}
