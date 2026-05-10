// components/home/AboutSection.tsx
'use client'

import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import RomioMonogram from '@/components/brand/RomioMonogram'
import SectionRule from '@/components/brand/SectionRule'
import OdometerCounter from '@/components/motion/OdometerCounter'
import Reveal from '@/components/motion/Reveal'

const metrics = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '5', label: 'Áreas de práctica' },
]

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-brand-navy py-20 px-6 text-white"
    >
      <RomioMonogram className="pointer-events-none absolute -right-16 top-1/2 z-0 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-y-1/2 text-white/[0.04] md:-right-24" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="will-change-transform">
            <div>
              <div className="mb-6">
                <EditorialEyebrow label="Nosotros" tone="gold-on-dark" />
              </div>
              <blockquote className="relative">
                <span
                  className="font-serif absolute -left-1 -top-4 text-6xl leading-none text-brand-gold/55 md:text-7xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="font-serif relative pl-6 text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
                  No tomamos más casos de los que podemos atender bien.
                </p>
                <div className="pl-6 pt-4">
                  <SectionRule className="justify-start" maxWidth="14rem" />
                </div>
                <span
                  className="font-serif mt-2 block pl-6 text-5xl leading-none text-brand-gold/55 md:text-6xl"
                  aria-hidden
                >
                  &rdquo;
                </span>
              </blockquote>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65">
                Romio &amp; Asociados es un estudio jurídico con base en Mar del
                Plata. Trabajamos como equipo en cada caso, combinando experiencia
                en diversas ramas del derecho para ofrecer una solución integral y
                eficiente.
              </p>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.1}>
            <div className="grid grid-cols-3 gap-6 text-center">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-serif mb-2 text-4xl font-bold text-brand-gold md:text-5xl">
                    <OdometerCounter value={m.value} />
                  </div>
                  <div className="font-sans text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-white/55">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-14 border-t border-white/10 pt-8">
          <p className="text-center font-serif text-sm italic text-brand-gold/55 md:text-base">
            Compromiso · Claridad · Resultados · Confidencialidad · Honorarios
            transparentes · Cercanía
          </p>
        </div>
      </div>
    </section>
  )
}
