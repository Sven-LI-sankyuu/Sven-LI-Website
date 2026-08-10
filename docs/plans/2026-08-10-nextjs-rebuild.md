# Next.js 个人网站重建计划

本计划记录从参考 Hugo 站点迁移到 Next.js/Vercel 的阶段性工作。完成一阶段后更新状态和验证结果；涉及全局数据模型或页面行为的变化同步回 `docs/architecture.md`。

## 当前状态

| 阶段 | 状态 | 验收结果 |
| --- | --- | --- |
| 信息摸底 | 已完成 | 已读取参考站点配置、首页、作者资料、内容目录、动画、计数器和字体许可 |
| 架构审视 | 已完成 | 已明确首期范围、精选论文规则、分类内容目录、同构资产目录和未来功能触发条件 |
| 参考项目索引与许可 | 已完成 | 已固定 `chanhdai.com` 快照、复用路径、MIT/商标边界和定点阅读顺序 |
| 内容确认 | 待开始 | 用户确认精选论文、双语资料和公开简历 |
| 参考基础层适配 | 已完成 | Tailwind v4、shadcn `base-nova`、主题变量、基础 UI 和字体底座已可运行 |
| 首页纵向切片 | 已完成 | 首页内容、样式、双语、主题、动画、计数器和精选论文列表已形成可直接查看的成品 |
| Projects 纵向切片 | 已完成 | 首个项目 presentation-skills 已接入首页和 `/projects` 页面 |
| Blog 纵向切片 | 进行中 | 手工 Markdown 路由、列表、正文、RSS 和 sitemap 已打通，首批公开文章仍待补充 |
| 详情纵向切片 | 已完成 | 经历页与精选论文详情页已使用参考布局完成内容、样式和路由验证 |
| 复用审计与视觉对比 | 待开始 | 每个新增组件有缺口记录，参考站点与新站同视口截图差异可解释 |
| 部署验收 | 进行中 | `pnpm lint`、`pnpm check-types`、`pnpm build` 与 `pnpm dev` 下的 `/en`、`/zh`、`/en/blog` 已通过；浏览器截图和 Vercel Preview 仍待完成 |

## 执行规则

每个阶段交付可运行页面，同时检查内容、视觉、交互和构建结果。实现前先按 `docs/references/chanhdai-com.md` 定点读取参考入口和直接依赖。新抽象只在第二个真实调用点出现后提取；第三方依赖只在能消除浏览器兼容、可访问性或构建风险时加入。测试截图和输出放入 `temp/` 并人工查看，阶段完成情况及时写回本计划。任何自定义组件都要记录客观缺口、复用的参考组件和边界。

## 实施步骤

### 内容确认与项目底座

- 确认首期精选论文名单与显示顺序；真实但未入选的论文不进入公开数据。
- 确认中英文姓名、职位、简介、研究方向、经历和简历文件；修正参考资料中的占位内容与可疑日期。
- 使用 `create-next-app` 创建 Next.js 16 App Router、TypeScript、ESLint、`src/` 目录和 Tailwind CSS v4 的项目，声明 Node.js `>=22`、pnpm `>=9`，并将 shadcn 风格设为 `base-nova`。
- 适配参考项目的 `globals.css`、`typeset.css`、CSS 变量和基础 UI；安装 `next-themes`、`lucide-react`、`gray-matter`、`react-markdown` 和 `remark-gfm`，首期不增加内容框架、状态管理或完整 i18n 依赖。
- 按类别放置头像、论文图片、简历、两个动画 HTML、OPPO Sans 字体及许可声明；公开媒体统一进入 `public/assets/<type>/`。

验收：公开内容清单得到用户确认；`pnpm dev` 可启动；`pnpm build` 成功；静态资源 URL 可直接访问。

### 参考基础层适配

- 从参考项目定点适配 `components.json`、`src/styles/globals.css`、`src/styles/typeset.css` 和 `src/components/base/ui/` 中实际需要的基础组件。
- 保留 `Panel`、`DocLayout`、`Prose`、`screen-line-*`、`stripe-divider` 的结构与语义；主字体替换为 OPPO Sans，移除参考个人品牌和字体依赖。
- 为主题切换、语言切换预留参考 Header 的插槽，但只实现当前需要的控件。

验收：基础层可以在空白页面运行；主题变量、按钮、输入框、分隔线和文章排版与参考截图一致；依赖清单不包含 registry、赞助、统计和游戏模块。

### 首页纵向切片

- 建立 `src/content/profile/`、`experience/`、`publications/<slug>/index.ts`、`src/i18n/` 和 `src/config/site.ts`；精选论文目录成员表达公开集合，`order` 表达顺序。
- 完成 `/en`、`/zh` 和根路径语言协商，语言切换保留当前页面位置与偏好。
- 以参考 `SiteHeader`、`Panel`、`ProfileHeader`、`Overview`、`SocialLinks`、`Projects` 列表和 Footer 组成首页，忠实复刻内容宽度、间距、字体层级和卡片密度。
- 完成 `system`、`light`、`dark` 三态主题，所有颜色来自全局 CSS 变量。
- 接入 Matrix、MLP、简历下载和原生访问计数器；动画保持装饰属性并尊重 reduced motion。
- 用 Playwright 截取桌面与移动端的中英文、浅色与深色组合，逐张检查文字、图片、iframe 和计数器。
- 截取 chanhdai.com 参考站点相同视口，比较首屏占比、标题层级、区块间距和论文卡片密度。

验收：首页在四种语言/主题核心组合下内容正确、布局稳定、无重叠；精选论文范围和顺序与确认清单一致；动画或计数器失败不会隐藏正文。

### Projects 纵向切片

- 创建 `src/content/projects/` 作为一级内容层，首个项目 `presentation-skills` 使用简历里的确认信息。
- 创建 `/en/projects`、`/zh/projects` 页面，首页只显示首个项目并保留完整页入口。
- 复用参考 `Projects` 列表的密度和按钮风格，但项目字段只保留标题、摘要、简述、标签和外链。
- 用简短的页面描述说明这个栏目只收录确认过的项目，不放示例占位内容。

验收：主页和 `/projects` 都能正确显示项目卡片，标题、摘要、标签和外部链接都来自 `src/content/projects/`。

### Blog 纵向切片

- 创建 `src/content/blog/zh/<slug>/index.md` 与 `src/content/blog/en/<slug>/index.md`，每篇文章使用一个 Markdown 文件；目录名决定 slug，父目录决定语言。
- 实现 frontmatter 解析和构建校验，要求 `title`、`summary`、`date`、`tags`、`draft`，支持可选 `updated` 与 `cover`。
- 使用服务端 loader 和 `generateStaticParams` 枚举非草稿文章；草稿与未知 slug 返回 404。
- 以参考 `PostList`、`PostItem`、`PostSearchInput`、`DocLayout` 和 `Prose` 完成 Blog 列表和详情页，支持日期倒序、标签展示、GFM 表格/任务列表/代码块、图片、外部链接和草稿过滤。
- 完成同名翻译关联：存在译文时语言切换进入译文；缺少译文时进入目标语言 Blog 列表并保留原文入口。
- 用同一篇文章查询生成双语 metadata、`/<locale>/feed.xml` 和 sitemap 条目；不维护第二份文章索引。
- 手工新增一篇临时文章及其 `public/assets/blog/<slug>/` 图片，并完整走过编辑、保存、开发服务器预览、构建和删除流程，确认无需修改 React 组件。

验收：作者只改 Markdown 和图片即可看到文章更新；无效 frontmatter、重复 slug、无效日期和缺失本地封面会使构建失败；草稿不会出现在列表、详情、RSS 或 sitemap。

### 详情纵向切片

- 使用参考 `Experiences`、`Education`、`Timeline` 和 `Panel` 完成双语 Experience 页面，迁移并核对工作、教育、技能、语言和奖项。
- 从 `src/content/publications/<slug>/index.ts` 为精选论文生成双语静态详情页，只展示确认后的作者、摘要、出版信息和有效链接。
- 使用 `generateStaticParams` 枚举 locale 与精选论文 slug；未知 locale 和 slug 返回 404。
- 为首页、经历和论文详情生成双语 metadata、canonical URL 与语言 alternate。
- 复用首页已经稳定的 Header、Footer、主题和语言控件，不提前提取新的页面框架。
- 对桌面和移动端逐页截图，人工检查长标题、作者列表、时间线和外部链接。

验收：所有精选论文可以从首页进入正确详情页；Experience 数据与确认稿一致；中英文切换保持当前内容实体。

### 复用审计与视觉对比

- 列出实际复制或适配的参考文件，并核对每个新增组件是否属于架构文档列出的客观缺口。
- 对 chanhdai.com 参考站点和新站截取相同桌面、移动视口，检查页面宽度、细线、排版、区块间距、卡片密度和下一分区露出。
- 检查参考品牌是否已清除，MIT 许可声明是否保留，个人内容是否全部来自 `src/content/`。

验收：新增组件数量可解释；视觉差异只来自本项目内容、双语、可访问性或动画需求；索引、架构和代码路径一致。

### 部署验收

- 运行内容校验、`pnpm lint` 和 `pnpm build`，任何缺失翻译、重复 slug、失效本地资源或类型错误都会失败。
- 用 Playwright 检查 `/` 重定向、`/en` 与 `/zh`、Blog 列表、Blog 正文、主题切换、语言切换、锚点导航、详情页、动画和计数器。
- 检查 `temp/` 内截图、浏览器控制台、画布像素和网络失败状态，记录人工判断。
- 更新 README 快速 CLI 参考和架构文档中的最终目录，检查字体许可声明随网站发布。
- 检查 sitemap 与 robots 只包含实际公开页面、精选论文和非草稿文章。
- 部署 Vercel Preview，复核 locale 重定向、外部计数器 Referer、字体缓存、动画 CDN 和公开下载资源。

验收：本地生产构建与 Vercel Preview 行为一致，文档中的目录、路径和命令与代码一致。

## 未来扩展触发条件

| 能力 | 开始实现的条件 | 沿用的基础 |
| --- | --- | --- |
| Publications 筛选 | 精选论文数量使完整列表页难以扫描 | `Publication` 数据、完整列表页和详情路由 |
| Talks | 至少有一个真实公开演讲 | locale、日期校验和列表样式 |
| Teaching | 至少有一个真实课程或教学资源 | locale 路由和下载资源规则 |
| Blog 分页/标签筛选 | 文章数量使单页列表难以扫描 | Markdown 查询和现有标签字段 |
| 站内搜索 | 页面数量使导航和浏览无法快速定位内容 | 公开路由与内容数据 |
| 本地 Three.js | CDN 稳定性或内容安全策略成为实际问题 | iframe URL 与组件接口保持不变 |

## 待确认事项

- 首期精选论文名单及显示顺序需要用户确认。
- 首期公开 Blog 是否包含已有草稿之外的新文章，需要用户提供或确认第一篇 Markdown。
- 中文和英文的正式个人简介、论文摘要、经历描述需要在内容迁移阶段由用户审核。
- 是否公开 `resume.pdf` 的当前版本，以及是否需要同时提供中英文简历，需要在实现下载入口前确认。
- Matrix 动画在浅色主题下的可见程度需要根据首轮截图决定透明度或仅保留在深色主题。
- 是否将 Three.js 从 CDN 改为本地依赖属于性能优化项，不影响首期页面契约。
