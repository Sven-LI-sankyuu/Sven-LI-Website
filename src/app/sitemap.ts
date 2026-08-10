import type { MetadataRoute } from "next"

import { publications } from "@/content/publications"
import { getPublishedPosts } from "@/lib/content/blog"
import { locales } from "@/i18n/locale"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) => [
    { url: `${siteConfig.origin}/${locale}`, changeFrequency: "monthly" as const },
    { url: `${siteConfig.origin}/${locale}/experience`, changeFrequency: "monthly" as const },
    { url: `${siteConfig.origin}/${locale}/publications`, changeFrequency: "monthly" as const },
    { url: `${siteConfig.origin}/${locale}/projects`, changeFrequency: "monthly" as const },
    ...publications.map((publication) => ({ url: `${siteConfig.origin}/${locale}/publications/${publication.slug}`, changeFrequency: "yearly" as const })),
    ...getPublishedPosts(locale).map((post) => ({ url: `${siteConfig.origin}/${locale}/blog/${post.slug}`, lastModified: post.updated ?? post.date, changeFrequency: "monthly" as const })),
  ])
  return pages
}
