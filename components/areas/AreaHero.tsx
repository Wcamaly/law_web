'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import type { Area } from '@/lib/areas'

export default function AreaHero({ area }: { area: Area }) {
  const reduced = useReducedMotion()
  const noiseId = `area-noise-${area.slug}`

  return (
    <section
      className="relative overflow-hidden py-16 text-white md:py-20"
      style={{
        background: `linear-gradient(135deg, #1e3a5f 0%, ${area.accent} 100%)`,
      }}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full hero-grain"
        aria-hidden
      >
        <filter id={noiseId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>

      <motion.div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: `${area.accent}55` }}
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: [0, 14, -10, 0],
                y: [0, -12, 8, 0],
                opacity: [0.25, 0.35, 0.28],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${area.accent}44` }}
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: [0, -12, 10, 0],
                y: [0, 16, -6, 0],
                opacity: [0.2, 0.32, 0.22],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/#areas"
            className="group mb-8 inline-flex items-center gap-1 rounded-sm text-xs text-white/55 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Volver a áreas
          </Link>
        </motion.div>

        <motion.div
          className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
          style={{ backgroundColor: area.accent }}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          {area.shortName}
        </motion.div>

        <motion.div
          className="mb-4 text-4xl"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {area.icon}
        </motion.div>

        <motion.h1
          className="font-serif mb-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          {area.name}
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg leading-relaxed text-white/75"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {area.tagline}
        </motion.p>
      </div>
    </section>
  )
}
