/** Roman numerals for 1–10 (áreas, pasos, servicios cortos). */
const TABLE = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'] as const

export function toRoman(n: number): string {
  if (!Number.isFinite(n) || n < 1 || n > 10) {
    return String(Math.max(0, Math.floor(n)))
  }
  return TABLE[n] ?? String(n)
}
