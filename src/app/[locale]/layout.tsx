import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getPublishedPosts } from "@/lib/content/blog"
import { isLocale, locales, type Locale } from "@/i18n/locale"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return { alternates: { canonical: `/${locale}` }, openGraph: { locale: locale === "zh" ? "zh_CN" : "en_US" } }
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale: Locale = rawLocale
  const hasBlog = getPublishedPosts(locale).length > 0

  return (
    <div className="group/layout relative isolate min-h-dvh">
      <div className="relative z-10">
        <SiteHeader locale={locale} hasBlog={hasBlog} />
        <main className="max-w-screen overflow-x-clip px-2">{children}</main>
        <SiteFooter locale={locale} />
      </div>
    </div>
  )
}
