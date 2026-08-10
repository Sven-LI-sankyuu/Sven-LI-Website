import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/lib/content/blog"
import type { Locale } from "@/i18n/locale"

export function BlogList({ posts, locale }: { posts: BlogPost[]; locale: Locale }) {
  if (posts.length === 0) return <p className="screen-line-top screen-line-bottom p-4 text-sm text-muted-foreground">{locale === "zh" ? "目前没有已发布文章。" : "No published posts yet."}</p>

  return (
    <ul className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
      {posts.map((post, index) => (
        <li key={post.slug} className="screen-line-top screen-line-bottom group relative p-2 transition-colors hover:bg-accent-muted">
          {post.cover && <Image src={post.cover} alt="" width={1200} height={630} className="aspect-[1200/630] w-full rounded-md object-cover transition-[filter] duration-300 group-hover:brightness-105" priority={index < 2} />}
          <div className="p-2">
            <h2 className="text-lg leading-snug font-medium"><Link href={`/${locale}/blog/${post.slug}`} className="link-underline">{post.title}</Link></h2>
            <time className="mt-1 block font-mono text-xs text-muted-foreground" dateTime={post.date}>{post.date}</time>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{post.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
