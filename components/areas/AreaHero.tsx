'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { areas, WHATSAPP_URL, type Area } from '@/lib/areas'
import { toRoman } from '@/lib/numerals'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
import CursorSpotlight from '@/components/motion/CursorSpotlight'

export default function AreaHero({ area }: { area: Area }) {
  const reduced = useReducedMotion()
  const noiseId = `area-noise-${area.slug}`
  const index = areas.findIndex((a) => a.slug === area.slug) + 1

  return (
    <section
      className="relative overflow-hidden py-16 text-white md:py-24"
      style={{
        background: 'linear-gradient(135deg, #0c1a3a 0%, #b8954a 100%)',
      }}
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full hero-grain"
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

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full text-white/[0.08]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern
            id={`grid-${area.slug}`}
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${area.slug})`} />
      </svg>

      <CursorSpotlight opacity={0.1} tint="gold" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/#areas"
            className="group mb-8 inline-flex items-center gap-1 rounded-sm font-sans text-xs font-medium uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Volver a áreas
          </Link>
        </motion.div>

        <EditorialEyebrow
          numeral={toRoman(index)}
          label={area.shortName}
          tone="gold-on-dark"
          className="mb-4"
        />

        <div className="mb-6 flex flex-wrap items-end gap-4">
          <span className="text-4xl md:text-5xl" aria-hidden>
            {area.icon}
          </span>
        </div>

        <TextReveal
          as="h1"
          className="text-display font-serif max-w-4xl font-bold text-white"
          stagger={0.04}
        >
          {area.name}
        </TextReveal>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {area.tagline}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic strength={12}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-navy shadow-md transition-[box-shadow,background-color] duration-300 hover:bg-brand-gold-light hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Consulta inicial sin costo
              <span className="cta-arrow-mask text-brand-navy" aria-hidden>
                <span className="cta-arrow-inner text-base">→</span>
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  )
}
