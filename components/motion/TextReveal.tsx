'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useMemo, useRef, type ElementType } from 'react'

type TextRevealProps = {
  children: string
  as?: ElementType
  className?: string
  stagger?: number
  /** Split by character instead of word */
  byChar?: boolean
}

export default function TextReveal({
  children,
  as: Tag = 'span',
  className,
  stagger = 0.05,
  byChar = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const parts = useMemo(() => {
    if (byChar) {
      return children.split('').map((c, i) => ({ key: `c-${i}`, text: c }))
    }
    return children.split(/(\s+)/).map((w, i) => ({ key: `w-${i}`, text: w }))
  }, [children, byChar])

  if (reduced) {
    return (
      <Tag ref={ref as never} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag ref={ref as never} className={className}>
      <span className="sr-only">{children}</span>
      <span className="inline-flex flex-wrap" aria-hidden>
        {parts.map((part, i) => {
          if (part.text.match(/^\s+$/)) {
            return (
              <span key={part.key} className="whitespace-pre">
                {part.text}
              </span>
            )
          }
          return (
            <motion.span
              key={part.key}
              className="inline-block will-change-[transform,opacity,filter]"
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 18, filter: 'blur(8px)' }
              }
              transition={{
                duration: 0.55,
                delay: i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {part.text}
            </motion.span>
          )
        })}
      </span>
    </Tag>
  )
}
