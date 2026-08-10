import { getPublishedPosts } from "@/lib/content/blog"
import { isLocale } from "@/i18n/locale"
import { siteConfig } from "@/config/site"

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) return new Response("Not found", { status: 404 })
  const posts = getPublishedPosts(locale)
  const items = posts.map((post) => `<item><title><![CDATA[${post.title}]]></title><link>${siteConfig.origin}/${locale}/blog/${post.slug}</link><guid>${siteConfig.origin}/${locale}/blog/${post.slug}</guid><description><![CDATA[${post.summary}]]></description><pubDate>${new Date(post.date).toUTCString()}</pubDate></item>`).join("")
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${siteConfig.title} Blog</title><link>${siteConfig.origin}/${locale}/blog</link><description>${siteConfig.description}</description>${items}</channel></rss>`
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
