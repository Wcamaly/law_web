'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduced = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  })

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-0.5 w-full bg-white/15"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left bg-brand-gold"
        style={{ scaleX: reduced ? scrollYProgress : scaleX }}
      />
    </div>
  )
}
