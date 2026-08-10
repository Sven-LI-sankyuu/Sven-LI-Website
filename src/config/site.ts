export const siteConfig = {
  origin: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Siyuan (Sven) LI",
  description: "Researcher working on reliable language-model systems for legal and financial applications.",
  counter: {
    href: "https://count.getloli.com/",
    src: "https://count.getloli.com/@Sven-LI-sankyuu?name=Sven-LI-sankyuu&theme=moebooru&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto",
  },
  assets: {
    matrix: "/backgrounds/matrix-transform-bg.html",
    mlp: "/backgrounds/mlp-bg.html",
    cv: "/downloads/resume.pdf",
  },
} as const
