import type { EsDictionary } from './dictionary'

type DotNestedKeys<T> =
  T extends string | number | boolean
    ? never
    : T extends readonly unknown[]
      ? never
      : keyof T extends never
        ? never
        : {
            [K in keyof T & string]: Exclude<T[K], undefined> extends infer V
              ? V extends string | number | boolean
                ? `${K}`
                : V extends readonly unknown[]
                  ? `${K}`
                  : V extends Record<string, unknown>
                    ? `${K}` | `${K}.${DotNestedKeys<V>}`
                    : `${K}`
              : `${K}`
          }[keyof T & string]

/** Dot-path to a scalar or array-valued node used with `t()`. */
export type MessageKey = DotNestedKeys<EsDictionary>

export type FAQ = {
  q: string
  a: string
}

export type AreaContent = {
  name: string
  shortName: string
  tagline: string
  description: string
  services: string[]
  faq: FAQ[]
}
