import "server-only"

import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

import type { Locale } from "@/i18n/locale"

export type BlogFrontmatter = {
  title: string
  summary: string
  date: string
  updated?: string
  tags: string[]
  draft: boolean
  cover?: string
}

export type BlogPost = BlogFrontmatter & {
  locale: Locale
  slug: string
  content: string
}

const contentRoot = path.join(process.cwd(), "src/content/blog")

function localeRoot(locale: Locale) {
  return path.join(contentRoot, locale)
}

function parsePost(locale: Locale, slug: string): BlogPost | undefined {
  const filePath = path.join(localeRoot(locale), slug, "index.md")
  if (!fs.existsSync(filePath)) return undefined

  const source = matter.read(filePath)
  const data = source.data as Partial<BlogFrontmatter>
  if (!data.title || !data.summary || !data.date || !Array.isArray(data.tags) || typeof data.draft !== "boolean") {
    throw new Error(`Invalid blog frontmatter: ${filePath}`)
  }
  if (Number.isNaN(Date.parse(data.date))) throw new Error(`Invalid blog date: ${filePath}`)
  if (data.updated && Number.isNaN(Date.parse(data.updated))) throw new Error(`Invalid blog updated date: ${filePath}`)
  if (data.cover && !data.cover.startsWith("/assets/blog/")) throw new Error(`Blog cover must use /assets/blog/: ${filePath}`)

  return { locale, slug, content: source.content, title: data.title, summary: data.summary, date: data.date, updated: data.updated, tags: data.tags, draft: data.draft, cover: data.cover }
}

export function getAllPosts(locale: Locale): BlogPost[] {
  const root = localeRoot(locale)
  if (!fs.existsSync(root)) return []
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => parsePost(locale, entry.name))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPublishedPosts(locale: Locale) {
  return getAllPosts(locale).filter((post) => !post.draft)
}

export function getPost(locale: Locale, slug: string) {
  const post = parsePost(locale, slug)
  if (!post || post.draft) return undefined
  return post
}
