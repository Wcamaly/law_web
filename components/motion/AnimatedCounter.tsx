'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

function parseMetric(value: string): { prefix: string; target: number } {
  const trimmed = value.trim()
  if (trimmed.startsWith('+')) {
    const n = parseInt(trimmed.slice(1), 10)
    return { prefix: '+', target: Number.isFinite(n) ? n : 0 }
  }
  const n = parseInt(trimmed, 10)
  return { prefix: '', target: Number.isFinite(n) ? n : 0 }
}

type AnimatedCounterProps = {
  value: string
  className?: string
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const { prefix, target } = parseMetric(value)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView || reduced) return
    let cancelled = false
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (!cancelled) setCurrent(Math.round(v))
      },
    })
    return () => {
      cancelled = true
      controls.stop()
    }
  }, [isInView, target, reduced])

  const shown = reduced ? (isInView ? target : 0) : current

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
    </span>
  )
}
