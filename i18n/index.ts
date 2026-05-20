export { DEFAULT_LOCALE, isLocale, LOCALES } from './config'
export type { Locale } from './config'

import { DEFAULT_LOCALE, type Locale } from './config'
import { esDictionary } from './dictionary'
import type { AreaContent, MessageKey } from './types'

const dictionaries = {
  es: esDictionary,
} as const satisfies Record<
  Locale,
  typeof esDictionary
>

/** Development-only missing translation warning. */
function warnMissing(path: string) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[i18n] Missing translation key: ${path}`)
  }
}

export function interpolate(
  template: string,
  vars?: Record<string, string | number | undefined>,
): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = vars[key]
    return v != null ? String(v) : `{${key}}`
  })
}

export function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split('.').filter(Boolean)
  let cur: unknown = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = (cur as Record<string, unknown>)[p]
  }
  return cur
}

export function getDictionary(locale: Locale = DEFAULT_LOCALE) {
  return dictionaries[locale]
}

/** Area legal content keyed by slug (same keys as URLs). */
export function getAreaContent(
  slug: keyof (typeof esDictionary)['areas']['content'],
  locale: Locale = DEFAULT_LOCALE,
): AreaContent {
  const row = dictionaries[locale].areas.content[slug]
  return row as AreaContent
}

/** Dot-path lookup + `{var}` interpolation. Returns string scalars only. */
export function t<K extends MessageKey>(
  path: K,
  vars?: Record<string, string | number | undefined>,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const value = getByPath(dictionaries[locale], path)
  if (typeof value !== 'string') {
    warnMissing(path)
    return path
  }
  return interpolate(value, vars)
}

export type { AreaContent, FAQ, MessageKey } from './types'
