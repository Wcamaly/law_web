'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type MouseEvent, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type MagneticProps = {
  children: ReactNode
  className?: string
  /** Max offset in px */
  strength?: number
}

export default function Magnetic({
  children,
  className,
  strength = 12,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 })

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      className={cn('inline-flex', className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div style={{ x: springX, y: springY }} className="inline-flex">
        {children}
      </motion.div>
    </div>
  )
}
