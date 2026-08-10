export const locales = ["en", "zh"] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export type LocalizedText = Record<Locale, string>

export function localize(value: LocalizedText, locale: Locale): string {
  return value[locale]
}
