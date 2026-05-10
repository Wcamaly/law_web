// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import RomioMonogram from '@/components/brand/RomioMonogram'
import SectionRule from '@/components/brand/SectionRule'
import TextReveal from '@/components/motion/TextReveal'
import Magnetic from '@/components/motion/Magnetic'
import CursorSpotlight from '@/components/motion/CursorSpotlight'

function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full hero-grain"
      aria-hidden
    >
      <filter id="heroNoise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#heroNoise)" />
    </svg>
  )
}

function BlueprintGrid({ reduced }: { reduced: boolean }) {
  const paths = [
    'M0 40 L100 40 M0 60 L100 60 M40 0 L40 100 M60 0 L60 100',
    'M20 20 L80 80 M80 20 L20 80',
  ]
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full text-white/[0.07]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <pattern
          id="heroGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#heroGrid)" />
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1 1"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 },
            opacity: { duration: 0.4, delay: 0.1 },
          }}
        />
      ))}
    </svg>
  )
}

function SignatureStroke({ reduced }: { reduced: boolean }) {
  return (
    <svg
      className="mt-8 h-12 w-48 max-w-full text-brand-gold/70 md:h-14 md:w-56"
      viewBox="0 0 200 48"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M4 32 C40 8, 80 40, 120 24 S180 12, 196 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

export default function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: 'linear-gradient(145deg, #0c1a3a 0%, #1e3a5f 100%)',
      }}
    >
      <GrainOverlay />
      <BlueprintGrid reduced={Boolean(reduced)} />
      <CursorSpotlight opacity={0.09} tint="gold" />

      <RomioMonogram className="pointer-events-none absolute -bottom-8 -right-4 z-[1] h-[min(55vw,22rem)] w-[min(55vw,22rem)] text-white/[0.04] md:-right-12 md:h-[min(42vw,28rem)] md:w-[min(42vw,28rem)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-12 md:pb-36 md:pt-16">
        <motion.div
          className="mb-4"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <EditorialEyebrow
            label="Estudio jurídico · Mar del Plata"
            tone="gold-on-dark"
          />
        </motion.div>

        <TextReveal
          as="h1"
          className="text-display font-serif mb-4 max-w-4xl font-bold text-white"
          stagger={0.055}
        >
          Su problema legal, nuestra prioridad.
        </TextReveal>

        <div className="mb-8 max-w-xl">
          <SectionRule className="mb-6" maxWidth="14rem" />
        </div>

        <motion.div
          className="max-w-xl"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-base leading-relaxed text-white/75 md:text-lg [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:mt-0.5 [&::first-letter]:flex [&::first-letter]:h-10 [&::first-letter]:w-10 [&::first-letter]:items-center [&::first-letter]:justify-center [&::first-letter]:rounded-sm [&::first-letter]:border [&::first-letter]:border-brand-gold/35 [&::first-letter]:bg-brand-gold/10 [&::first-letter]:font-serif [&::first-letter]:text-2xl [&::first-letter]:font-bold [&::first-letter]:text-brand-gold [&::first-letter]:leading-none">
            Más de una década acompañando a personas y empresas en Mar del
            Plata. Claridad, compromiso y resultados en cada caso.
          </p>
          <SignatureStroke reduced={Boolean(reduced)} />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: reduced ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Magnetic strength={14}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-navy shadow-[0_8px_28px_-6px_rgb(184_149_74/0.45)] transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-gold-light hover:shadow-[0_12px_36px_-8px_rgb(184_149_74/0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.205-.506-4.484-1.37l-.321-.202-3.32.871.887-3.23-.222-.335A7.955 7.955 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
              </svg>
              Consulta gratis por WhatsApp
              <span className="cta-arrow-mask ml-1" aria-hidden>
                <span className="cta-arrow-inner text-base">→</span>
              </span>
            </a>
          </Magnetic>

          <Magnetic strength={10}>
            <Link
              href="/#areas"
              className="btn-outline-sweep group inline-flex items-center justify-center gap-2 rounded-md border border-brand-gold/45 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-brand-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Ver áreas de práctica
              <span className="cta-arrow-mask" aria-hidden>
                <span className="cta-arrow-inner text-base">→</span>
              </span>
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.75, duration: 0.45 }}
        >
          {[
            { k: '+10 años', v: 'Trayectoria' },
            { k: '+500 casos', v: 'Resueltos' },
            { k: '5 áreas', v: 'De práctica' },
          ].map((item) => (
            <div
              key={item.k}
              className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-sm border border-brand-gold/20 bg-white/[0.03] px-4 py-3 sm:max-w-[200px]"
            >
              <span className="tabular-nums text-brand-gold">{item.k}</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-white/40 uppercase">
                {item.v}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40">
        <span className="text-[10px] font-bold uppercase tracking-[0.35em]">
          Scroll
        </span>
        <svg
          className="h-5 w-5 animate-scroll-cue"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
