import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "zh"] as const
const defaultLocale = "en"

function detectLocale(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value
  if (cookie && locales.includes(cookie as (typeof locales)[number])) return cookie

  const accepted = request.headers.get("accept-language")?.toLowerCase() ?? ""
  if (accepted.split(",").some((value) => value.trim().startsWith("zh"))) return "zh"
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
