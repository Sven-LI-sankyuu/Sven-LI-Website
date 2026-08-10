import { Fragment } from "react"

import { cn } from "@/lib/utils"

const selfAuthorNames = new Set(["siyuan li", "siyuan (sven) li"])

function normalizeAuthorName(name: string) {
  return name.toLowerCase().replace(/\s+/g, " ").trim()
}

export function PublicationAuthors({ authors, className }: { authors: string[]; className?: string }) {
  return (
    <span className={cn("text-muted-foreground", className)}>
      {authors.map((author, index) => {
        const isSelf = selfAuthorNames.has(normalizeAuthorName(author))
        return (
          <Fragment key={author}>
            {index > 0 && <span aria-hidden> · </span>}
            {isSelf ? <strong className="font-semibold text-foreground">{author}</strong> : <span>{author}</span>}
          </Fragment>
        )
      })}
    </span>
  )
}
