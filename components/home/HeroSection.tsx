// components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'

const titleWords = ['Su', 'problema', 'legal,', 'nuestra', 'prioridad.']

function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full hero-grain"
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

function BlueprintLines() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 text-white/10 md:h-96 md:w-96"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path
        d="M20 180h160M40 160h120M60 140h80M180 20v160M160 40v120M140 60v80"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 6"
      />
      <rect
        x="120"
        y="100"
        width="60"
        height="60"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
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
        backgroundImage: 'linear-gradient(145deg, #1e3a5f 0%, #2c4f7c 100%)',
      }}
    >
      <GrainOverlay />

      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-navy-light/25 blur-3xl animate-float-slow"
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: [0, 18, -12, 0],
                y: [0, -14, 10, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: 22, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
        }
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-brand-navy-light/20 blur-3xl animate-float-slow"
        style={{ animationDelay: '-7s' }}
        aria-hidden
        animate={
          reduced
            ? undefined
            : {
                x: [0, -16, 14, 0],
                y: [0, 20, -8, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: 26, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
        }
      />

      <BlueprintLines />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-20 text-center md:pb-36 md:pt-28">
        <motion.div
          className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 md:text-xs"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Mar del Plata</span>
          <span className="hidden text-white/35 sm:inline" aria-hidden>
            ·
          </span>
          <span className="w-full text-center sm:w-auto sm:text-left">
            Respondemos en menos de 24 hs
          </span>
          <span className="hidden text-white/35 sm:inline" aria-hidden>
            ·
          </span>
          <span>Primera consulta sin costo</span>
        </motion.div>

        <motion.p
          className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/45"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Estudio Jurídico · Mar del Plata
        </motion.p>

        <h1 className="font-serif text-hero-title mx-auto mb-6 max-w-4xl font-bold">
          {titleWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block mr-[0.25em] last:mr-0"
              initial={reduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: reduced ? 0 : 0.12 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/75"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: reduced ? 0 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Más de una década acompañando a personas y empresas en Mar del Plata.
          Claridad, compromiso y resultados en cada caso.
        </motion.p>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: reduced ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-bold text-brand-navy shadow-[var(--shadow-navy-md)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-navy-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          </a>
          <Link
            href="/#areas"
            className="btn-outline-sweep inline-flex items-center justify-center rounded-md border border-white/45 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ver áreas de práctica
          </Link>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/50"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.75, duration: 0.45 }}
        >
          <span>+10 años</span>
          <span className="text-white/25" aria-hidden>
            |
          </span>
          <span>+500 casos</span>
          <span className="text-white/25" aria-hidden>
            |
          </span>
          <span>5 áreas</span>
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
