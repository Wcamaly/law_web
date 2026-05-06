// components/home/HowWeWork.tsx
'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'
import Reveal from '@/components/motion/Reveal'
import { cn } from '@/lib/cn'

const steps = [
  {
    number: '01',
    icon: '📞',
    title: 'Consulta',
    description:
      'Nos contactás por WhatsApp o email. Primera consulta sin costo para entender tu situación.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Análisis',
    description:
      'Estudiamos tu caso en detalle, evaluamos las posibilidades y te explicamos el panorama con claridad.',
  },
  {
    number: '03',
    icon: '⚖️',
    title: 'Estrategia',
    description:
      'Definimos el mejor camino legal: negociación, mediación o juicio según tu caso y tus objetivos.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Resultado',
    description:
      'Ejecutamos la estrategia y te mantenemos informado en cada etapa hasta obtener el mejor resultado.',
  },
]

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.35'],
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy/40">
            Proceso
          </p>
          <h2 className="font-serif text-3xl font-bold text-brand-navy md:text-4xl">
            Cómo trabajamos
          </h2>
        </Reveal>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[2.25rem] hidden h-px overflow-hidden rounded-full bg-gray-200 lg:block"
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-left bg-gradient-to-r from-accent-civil via-brand-navy-light to-accent-civil"
              style={{ scaleX: reduced ? 1 : lineScaleX }}
            />
          </div>

          <StaggerGroup className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group text-center">
                  <div
                    className={cn(
                      'relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand-navy/15 bg-[#f8f9fa] text-3xl shadow-[var(--shadow-navy-sm)] transition-[transform,border-color,box-shadow] duration-300',
                      'group-hover:-translate-y-0.5 group-hover:border-accent-civil group-hover:shadow-[var(--shadow-navy-md)]',
                    )}
                  >
                    {step.icon}
                  </div>
                  <div className="mb-1 text-xs font-bold tracking-widest text-brand-navy-light transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </div>
                  <h3 className="font-serif mb-2 text-lg font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
