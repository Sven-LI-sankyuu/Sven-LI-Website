import { ExternalLinkIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import type { Locale } from "@/i18n/locale"
import { getMessages } from "@/i18n/messages"
import { VisitCounter } from "@/components/visit-counter"

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale)
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto max-w-6xl border-x border-line bg-background/95">
        <div className="screen-line-top screen-line-bottom after:z-1 after:bg-border"><div className="stripe-divider h-12" /></div>
        <div className="screen-line-bottom grid gap-px bg-line font-mono text-xs sm:grid-cols-3">
          <FooterField label={messages.footer.visits}><VisitCounter href={siteConfig.counter.href} src={siteConfig.counter.src} locale={locale} /></FooterField>
          <FooterField label={messages.footer.typeface}>OPPO Sans 4.0</FooterField>
          <FooterField label={messages.footer.source}>
            <a className="inline-flex items-center gap-1 link-underline" href="https://chanhdai.com" target="_blank" rel="noreferrer">
              chanhdai.com <ExternalLinkIcon aria-hidden className="size-3" />
            </a>
          </FooterField>
        </div>
        <div className="screen-line-top screen-line-bottom flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Siyuan LI</span>
          <a className="link-underline" href="/CHANHDAI-MIT-LICENSE.txt">MIT-derived components</a>
        </div>
      </div>
    </footer>
  )
}

function FooterField({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex min-h-16 flex-col gap-1 bg-background px-4 py-3"><span className="text-muted-foreground">{label}</span><div className="font-sans text-sm">{children}</div></div>
}
