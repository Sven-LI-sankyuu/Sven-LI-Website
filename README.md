# Sven LI Personal Website

Siyuan (Sven) LI 的双语学术个人网站，使用 Next.js App Router、React 19、TypeScript、Tailwind CSS v4 和 pnpm 构建。

## 快速开始

```bash
pnpm install
pnpm dev
pnpm lint
pnpm check-types
pnpm build
pnpm start
```

## 内容入口

- `src/content/profile/index.ts`: 个人简介、头像、机构、社交链接
- `src/content/experience/index.ts`: 经历、教育、技能
- `src/content/publications/<slug>/index.ts`: 精选论文
- `src/content/blog/<locale>/<slug>/index.md`: Blog 真源
- `src/i18n/messages.ts`: 界面文案
- `src/config/site.ts`: 站点地址、计数器和公共资源

## 主要文档

- `docs/architecture.md`: 项目架构、数据流和目录约定
- `docs/references/chanhdai-com.md`: `references/chanhdai.com` 的定点索引
- `docs/plans/2026-08-10-nextjs-rebuild.md`: 当前迁移计划和阶段状态

## 常用目录

- `public/backgrounds/`: Matrix 和 MLP 动画
- `public/fonts/`: OPPO Sans 字体和许可
- `public/assets/`: 头像、论文图和 Blog 资源

## 备注

项目默认跟随系统主题和系统语言，支持 `/en` 与 `/zh`。部署目标是 Vercel 默认识别的 Next.js 项目结构。
