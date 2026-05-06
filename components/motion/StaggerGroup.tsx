'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ElementType, ReactNode } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul'
}

export default function StaggerGroup({
  children,
  className,
  as = 'div',
}: StaggerGroupProps) {
  const reduced = useReducedMotion()
  const Static = as as ElementType

  if (reduced) {
    return <Static className={className}>{children}</Static>
  }

  const Motion = as === 'ul' ? motion.ul : motion.div

  return (
    <Motion
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </Motion>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: StaggerItemProps) {
  const reduced = useReducedMotion()
  const Static = as as ElementType

  if (reduced) {
    return <Static className={className}>{children}</Static>
  }

  const Motion = as === 'li' ? motion.li : motion.div

  return (
    <Motion variants={item} className={className}>
      {children}
    </Motion>
  )
}
