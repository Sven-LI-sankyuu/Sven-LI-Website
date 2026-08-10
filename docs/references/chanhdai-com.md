# chanhdai.com 参考索引

本文档是个人网站实现时的定点检索入口。它记录参考项目的可复用结构、样式来源、许可边界和本项目的适配关系，避免每次改动都重新阅读整个参考仓库。

## 快照与用途

参考仓库：`references/chanhdai.com/`  
固定快照：`31a3696b93bab23b24cdb713aafc31ef5df75143`  
上游地址：<https://github.com/ncdai/chanhdai.com>

参考项目同时包含个人作品集、Blog、文档站和 shadcn 组件注册表。本项目只把它当作页面结构、排版和基础组件的代码来源，个人资料、论文、文章和品牌全部由本项目自己的内容源提供。

## 技术基线

- Next.js `16.3.0` App Router、React `19.2.8`、TypeScript。
- Tailwind CSS `v4`、`@tailwindcss/typography`、`tw-animate-css`。
- shadcn `base-nova` 风格，Base UI 原语，CSS 变量主题。
- `next-themes`、`lucide-react`、`motion`、`gray-matter`、`react-markdown`、`remark-gfm`。
- Node.js `>=22`、pnpm `>=9`；本项目的版本应靠近这条基线。

参考项目还有完整 registry、MDX 文档、赞助商、统计、游戏和外部数据集成，这些属于参考仓库自身业务，不进入个人网站的默认依赖。

## 许可与品牌边界

代码和文档受 `references/chanhdai.com/LICENSE` 的 MIT License 覆盖。复制的文件必须保留版权和许可声明，并在本项目文档中注明来源。

`references/chanhdai.com/TRADEMARK.md` 排除以下内容：`chanhdai`、`ncdai`、`chanhdai.com` 名称，wordmark 和 mark，作者头像及肖像，以及会让访客误认为网站属于 Chánh Đại 的品牌呈现。实现时必须替换 `src/config/site.ts`、`src/features/portfolio/data/`、`src/components/chanhdai-*` 和 manifest 图标，不得直接使用参考站点的个人信息或品牌资产。

## 页面与布局索引

### App 外壳

| 用途 | 参考路径 | 本项目用法 |
| --- | --- | --- |
| 根布局、字体和 Provider | `src/app/layout.tsx`、`src/components/providers.tsx` | 适配 OPPO Sans、主题 Provider 和本项目 metadata |
| 作品集页面布局 | `src/app/(app)/layout.tsx`、`src/app/(app)/(pages)/layout.tsx` | 作为 `/[locale]`、Experience 和 Publications 的外壳 |
| 文档页面布局 | `src/app/(app)/(docs)/layout.tsx` | 作为 Blog 详情页的布局参考 |
| 顶部导航 | `src/components/site-header.tsx`、`src/components/nav.tsx` | 复用结构，增加本项目语言控件 |
| 移动底部导航 | `src/components/site-bottom-nav.tsx` | 只在移动端导航需要时采用 |
| 页脚 | `src/components/site-footer-cad.tsx`、`src/components/site-footer.tsx` | 复用排版和分隔线，替换品牌与计数器 |

### 作品集区块

| 本项目区块 | 参考路径 | 适配边界 |
| --- | --- | --- |
| 统一区块容器 | `src/features/portfolio/components/panel.tsx` | `Panel`、`PanelHeader`、`PanelTitle`、`PanelContent` 优先直接复用 |
| 首屏身份区 | `src/features/portfolio/components/profile-header.tsx` | 只保留布局和信息层级，移除参考品牌、手写文案和头像逻辑 |
| 简介与联系方式 | `src/features/portfolio/components/overview/index.tsx`、`social-links.tsx` | 数据改接 `src/content/profile/` |
| 经历与教育 | `experiences/index.tsx`、`education/index.tsx`、`timeline/index.tsx` | 数据改接 `src/content/experience/` |
| 项目/论文列表密度 | `projects/index.tsx`、`projects/project-item.tsx` | 精选论文没有现成组件时，适配其列表结构，不复制项目数据 |
| 页面目录 | `toc.tsx` | 仅在详情页内容足够长时启用 |

### Blog 与文章排版

| 用途 | 参考路径 | 本项目用法 |
| --- | --- | --- |
| Blog 列表 | `src/app/(app)/(pages)/blog/page.tsx`、`src/features/blog/components/post-list.tsx` | 保留列表密度、双列/单列响应式和 hover 状态 |
| Blog 搜索 | `post-list-with-search.tsx`、`post-search-input.tsx` | 文章数量达到检索阈值后启用，移除 OpenPanel 事件 |
| 文章详情 | `src/app/(app)/(docs)/blog/[slug]/page.tsx` | 页面结构改接普通 Markdown loader |
| 文章外壳 | `src/features/doc/components/doc-layout.tsx`、`doc-page-root.tsx` | 复用标题、元信息、操作区和内容宽度 |
| Markdown 排版 | `src/components/base/ui/typography.tsx`、`src/styles/typeset.css` | 复用 `Prose` 和排版变量，正文由 `react-markdown` 渲染 |

参考 Blog 使用 MDX。个人网站坚持普通 Markdown 真源，因此只复用展示层，不引入 MDX 组件执行模型。

## 基础 UI 与样式索引

优先复制或适配以下基础组件，再组合 Base UI 原语实现交互：

`src/components/base/ui/button.tsx`、`typography.tsx`、`separator.tsx`、`tooltip.tsx`、`collapsible.tsx`、`dropdown-menu.tsx`、`toggle.tsx`、`tabs.tsx`、`src/components/ui/input.tsx`、`input-group.tsx`、`kbd.tsx`。

样式入口为 `src/styles/globals.css`、`src/styles/typeset.css` 和 `src/styles/scroll-fade-effect.css`。需要保留的设计 token 和工具类包括：`:root`/`.dark` 语义色、`screen-line-top`、`screen-line-bottom`、`stripe-divider`、`prose-ncdai`、`md:max-w-3xl`、`border-x border-line`。主字体替换为 OPPO Sans，参考项目的 Geist、Caveat 和 IBM Plex Serif 不直接搬入。

`components.json` 记录了 `base-nova`、zinc 变量、Lucide 图标和路径别名，是新项目初始化 shadcn 层的依据；不要因为参考仓库的完整 registry 而复制其注册表构建流程。

## 复用决策表

| 功能 | 处理方式 | 新组件记录 |
| --- | --- | --- |
| Header、Footer、Panel、Profile、Experience、Education、Blog 列表和详情排版 | 复制/适配参考组件 | 不新增同职责组件 |
| 中英文切换 | 新建小型 locale 控件 | 参考 `site-header`、`dropdown-menu`，缺口是本项目的双语路径与 cookie 规则 |
| Matrix/MLP iframe | 新建背景包装器 | 缺口是参考项目没有这两个动画；边界只管理加载、层级和 reduced-motion |
| 访问计数器 | 新建 `VisitCounter` | 缺口是外部图片服务；边界只负责 URL、替代状态和无阻塞展示 |
| 精选论文列表 | 适配 `Projects`/`ProjectItem` | 缺口是论文字段和显式精选顺序；不创建通用内容卡片 |

每个新增组件在计划和代码评审中都要写明：客观缺口、复用的参考组件、输入输出和不负责的事情。能由已有组件组合完成的功能不创建新组件。

## 明确排除

以下路径只用于理解或对照，不复制到个人网站：`src/registry/`、`public/r/`、`src/features/doc/content/components/`、sponsor 相关组件、OpenPanel/GTM/AdSense 集成、游戏与 p5/Three.js 展示、GitHub contribution 集成、R2 截图发布脚本、参考项目的个人资料和品牌组件。

## 定点阅读顺序

实现页面时按以下顺序读取，通常足以完成一次改动：

1. 本索引对应的页面入口和组件路径。
2. `src/styles/globals.css`、`src/styles/typeset.css` 与 `components.json`。
3. 被复用组件的直接依赖（最多向上追一层）。
4. `TRADEMARK.md` 和 `LICENSE`，确认复制范围。
5. 只有遇到具体问题时才查 registry、脚本或其他 feature。

## 更新检查

当参考项目升级、页面结构变化或组件路径移动时，先用 `git -C references/chanhdai.com log` 确认新快照，再检查 App 外壳、Panel、Blog、Doc、基础 UI 和样式入口六组路径。更新本索引后再修改个人网站，避免实现依赖过期路径。

## Skill 适用范围

`references/chanhdai.com/.agents/skills/ncdai-writing-component-docs/SKILL.md` 只规范参考项目 registry 组件的 MDX 文档写法、frontmatter、Features、Composition、Credits 和 References 章节。它不定义个人网站的页面架构、组件筛选、Blog Markdown 数据流或许可决策。本项目只有在维护参考项目组件文档时才读取该 Skill，页面实现以本索引和 `docs/architecture.md` 为准。
