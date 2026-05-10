'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

function parseDisplayValue(value: string): {
  prefix: string
  target: number
  digitCount: number
} {
  const trimmed = value.trim()
  let prefix = ''
  let numStr = trimmed
  if (numStr.startsWith('+')) {
    prefix = '+'
    numStr = numStr.slice(1)
  }
  const target = parseInt(numStr, 10)
  const digitCount = Math.max(numStr.replace(/\D/g, '').length || 1, String(target).length)
  return {
    prefix,
    target: Number.isFinite(target) ? target : 0,
    digitCount: Math.max(1, digitCount),
  }
}

function DigitStrip({ digit }: { digit: number }) {
  const d = Math.min(9, Math.max(0, Math.round(digit)))
  return (
    <span className="relative inline-block h-[1em] w-[0.55em] overflow-hidden align-baseline">
      <span
        className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateY(-${d}em)` }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className="flex h-[1em] min-h-[1em] items-center justify-center leading-none tabular-nums"
          >
            {i}
          </span>
        ))}
      </span>
    </span>
  )
}

type OdometerCounterProps = {
  value: string
  className?: string
}

export default function OdometerCounter({
  value,
  className,
}: OdometerCounterProps) {
  const { prefix, target, digitCount } = useMemo(
    () => parseDisplayValue(value),
    [value],
  )
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView || reduced) return
    const controls = animate(0, target, {
      duration: 1.65,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, reduced, target])

  const shown = reduced ? (isInView ? target : 0) : current
  const padded = String(shown).padStart(digitCount, '0')
  const digitChars = padded.split('').map((c) => parseInt(c, 10))

  return (
    <span ref={ref} className={cn('inline-flex items-baseline tabular-nums', className)}>
      {prefix}
      {digitChars.map((d, i) => (
        <DigitStrip key={i} digit={d} />
      ))}
    </span>
  )
}
