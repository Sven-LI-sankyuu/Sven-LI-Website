import { complianceToCode } from "@/content/publications/compliance-to-code"
import { fedspeakConfidence } from "@/content/publications/fedspeak-confidence"
import { knowMtBench } from "@/content/publications/knowmt-bench"

export const publications = [complianceToCode, fedspeakConfidence, knowMtBench].sort(
  (a, b) => a.order - b.order,
)

export function getPublication(slug: string) {
  return publications.find((publication) => publication.slug === slug)
}
