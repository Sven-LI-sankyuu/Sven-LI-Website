import localFont from "next/font/local"

export const oppoSans = localFont({
  src: "../../public/fonts/oppo-sans-4.0.ttf",
  display: "swap",
  preload: false,
  variable: "--font-oppo-sans",
  fallback: ["Arial", "Helvetica", "sans-serif"],
})
