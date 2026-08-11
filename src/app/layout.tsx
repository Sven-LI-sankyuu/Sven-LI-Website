import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"

import { Providers } from "@/components/providers"
import { oppoSans } from "@/lib/fonts"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.title}` },
  description: siteConfig.description,
  authors: [{ name: "Siyuan LI" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={oppoSans.variable} suppressHydrationWarning>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
