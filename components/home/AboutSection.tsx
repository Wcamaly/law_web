// components/home/AboutSection.tsx
'use client'

import AnimatedCounter from '@/components/motion/AnimatedCounter'
import Reveal from '@/components/motion/Reveal'
import { cn } from '@/lib/cn'

const metrics = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '5', label: 'Áreas de práctica' },
]

const values = ['Compromiso', 'Claridad', 'Resultados']

function ScalesWatermark() {
  return (
    <svg
      className="pointer-events-none absolute -right-8 top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-y-1/2 text-white/[0.04]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.35"
      aria-hidden
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M2 8l4 9H2L6 8z" />
      <path d="M18 8l4 9h-4l4-9z" />
      <line x1="4" y1="2" x2="20" y2="2" />
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-brand-navy py-20 px-6 text-white"
    >
      <ScalesWatermark />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="will-change-transform">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                Nosotros
              </p>
              <h2 className="font-serif mb-6 text-3xl font-bold leading-tight md:text-4xl">
                Un equipo comprometido
                <br />
                con cada caso.
              </h2>
              <p className="mb-6 text-base leading-relaxed text-white/70">
                Romio &amp; Asociados es un estudio jurídico con base en Mar del
                Plata. Trabajamos como equipo en cada caso, combinando experiencia
                en diversas ramas del derecho para ofrecer una solución integral y
                eficiente. No tomamos más casos de los que podemos atender bien.
              </p>
              <div className="flex flex-wrap gap-3">
                {values.map((v) => (
                  <span
                    key={v}
                    className={cn(
                      'rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/60',
                      'transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      'hover:-translate-y-0.5 hover:border-white hover:bg-white/5 hover:text-white/90',
                    )}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.1}>
            <div className="grid grid-cols-3 gap-6 text-center">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-serif mb-2 text-4xl font-bold text-white md:text-5xl">
                    <AnimatedCounter value={m.value} />
                  </div>
                  <div className="text-xs leading-tight text-white/50">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
