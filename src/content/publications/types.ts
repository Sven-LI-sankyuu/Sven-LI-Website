import type { LocalizedText } from "@/i18n/locale"

export type Publication = {
  slug: string
  title: string
  summary: LocalizedText
  abstract: LocalizedText
  authors: string[]
  date: string
  venue: string
  order: number
  cover?: string
  links: { paper?: string; code?: string; dataset?: string }
}
