// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { areas } from '@/lib/areas'
import Reveal from '@/components/motion/Reveal'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'
import { cn } from '@/lib/cn'

function formatIndex(i: number) {
  return String(i + 1).padStart(2, '0')
}

export default function AreasGrid() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-white py-20 px-6"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-navy/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent-civil/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy/40">
            Lo que hacemos
          </p>
          <h2 className="font-serif relative inline-block text-3xl font-bold text-brand-navy md:text-4xl">
            Áreas de práctica
            <motion.span
              className="absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent-civil"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Elegí el área que mejor encaja con tu situación. En cada página
            encontrás servicios concretos y respuestas a dudas frecuentes.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 justify-items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-6">
          {areas.map((area, i) => (
            <StaggerItem
              key={area.slug}
              className={cn(
                'w-full max-w-sm justify-self-center sm:max-w-none lg:col-span-2',
                i === 3 && 'lg:col-start-2',
                i === 4 && 'lg:col-start-4',
              )}
            >
              <Link
                href={`/areas/${area.slug}`}
                aria-label={`${area.name}. ${area.tagline}. Explorar servicios y preguntas frecuentes.`}
                className={cn(
                  'group relative flex min-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[var(--shadow-navy-sm)]',
                  'transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-[0_20px_50px_-12px_rgba(30,58,95,0.2)]',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-civil',
                )}
                style={{ ['--card-accent' as string]: area.accent }}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--card-accent)] to-transparent opacity-90"
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(1200px circle at 10% 0%, ${area.accent}18 0%, transparent 45%)`,
                    boxShadow: `inset 0 1px 0 0 ${area.accent}33`,
                  }}
                />

                <div className="relative flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span className="font-serif text-3xl font-bold tabular-nums leading-none text-brand-navy/15 transition-colors duration-300 group-hover:text-brand-navy/25">
                      {formatIndex(i)}
                    </span>
                    <span
                      className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        borderColor: `${area.accent}55`,
                        color: area.accent,
                        backgroundColor: `${area.accent}0f`,
                      }}
                    >
                      Especialidad
                    </span>
                  </div>

                  <div
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105"
                    style={{ backgroundColor: area.accentLight }}
                  >
                    {area.icon}
                  </div>

                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy/35">
                    {area.shortName}
                  </p>
                  <h3 className="font-serif mb-2 line-clamp-3 text-lg font-bold leading-snug text-brand-navy md:text-xl">
                    {area.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {area.tagline}
                  </p>

                  <ul className="mb-5 space-y-1.5 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: area.accent }}
                        aria-hidden
                      />
                      Consulta inicial orientativa, sin costo.
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: area.accent }}
                        aria-hidden
                      />
                      {area.services.length} servicios listados · {area.faq.length}{' '}
                      preguntas frecuentes
                    </li>
                  </ul>

                  <div className="mt-auto border-t border-gray-100 pt-5">
                    <span
                      className="inline-flex w-full items-center justify-between gap-3 text-sm font-bold"
                      style={{ color: area.accent }}
                    >
                      <span>Explorar área</span>
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 bg-white text-base transition-[transform,background-color] duration-300 group-hover:translate-x-0.5 group-hover:bg-gray-50"
                        aria-hidden
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
