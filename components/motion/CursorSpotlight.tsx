'use client'

import { useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useRef, type CSSProperties } from 'react'
import { cn } from '@/lib/cn'

type CursorSpotlightProps = {
  className?: string
  /** Opacity of the spotlight (0–1) */
  opacity?: number
  /** Tint: white, navy, or warm gold on dark sections */
  tint?: 'white' | 'navy' | 'gold'
}

export default function CursorSpotlight({
  className,
  opacity = 0.06,
  tint = 'white',
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const move = useCallback(
    (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--spot-x', `${x}px`)
      el.style.setProperty('--spot-y', `${y}px`)
    },
    [],
  )

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return
    parent.addEventListener('pointermove', move)
    return () => parent.removeEventListener('pointermove', move)
  }, [move, reduced])

  if (reduced) return null

  const color =
    tint === 'white'
      ? `rgb(255 255 255 / ${opacity})`
      : tint === 'gold'
        ? `rgb(184 149 74 / ${opacity})`
        : `rgb(12 26 58 / ${opacity})`

  const style = {
    '--spot-x': '50%',
    '--spot-y': '40%',
    background: `radial-gradient(600px circle at var(--spot-x) var(--spot-y), ${color}, transparent 55%)`,
  } as CSSProperties

  return (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none absolute inset-0 z-[1] mix-blend-screen',
        className,
      )}
      style={style}
      aria-hidden
    />
  )
}
