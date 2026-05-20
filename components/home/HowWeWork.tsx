// components/home/HowWeWork.tsx
'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'
import SectionHeader from '@/components/motion/SectionHeader'
import { getDictionary } from '@/i18n'

function HowWeWorkDesktop() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const steps = getDictionary().home.howWeWork.steps

  if (reduced) {
    return (
      <section className="relative hidden bg-white py-20 px-6 lg:block">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            className="mb-12 text-center"
            eyebrow={getDictionary().home.howWeWork.eyebrow}
            title={getDictionary().home.howWeWork.title}
            align="center"
          />
          <div className="grid grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/40">
                  {step.roman}
                </div>
                <h3 className="font-serif mt-2 text-lg font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative hidden min-h-[220vh] lg:block"
    >
      <div className="sticky top-0 flex h-screen max-h-[100dvh] flex-col justify-center overflow-hidden bg-white px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            className="mb-10"
            eyebrow={getDictionary().home.howWeWork.eyebrow}
            title={getDictionary().home.howWeWork.title}
          />

          <div
            className="pointer-events-none absolute left-6 right-6 top-[42%] hidden h-px overflow-hidden rounded-full bg-gray-200 lg:block"
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-left bg-gradient-to-r from-brand-gold via-brand-navy-light to-brand-gold"
              style={{ scaleX: lineScaleX }}
            />
          </div>

          <div className="relative mt-4 overflow-hidden">
            <motion.div
              className="flex w-[400%] gap-0"
              style={{ x }}
            >
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="relative flex w-1/4 flex-shrink-0 flex-col px-2 md:px-6"
                >
                  <div className="relative min-h-[280px] rounded-2xl border border-gray-100 bg-[#fafbfc] p-8 md:p-10">
                    <span
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(4rem,18vw,10rem)] font-bold leading-none text-brand-gold/[0.10]"
                      aria-hidden
                    >
                      {step.roman}
                    </span>
                    <div className="relative z-10 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/25 bg-white text-3xl shadow-sm transition-colors group-hover:border-brand-gold/40">
                        {step.icon}
                      </div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/40">
                        {step.roman}
                      </p>
                      <h3 className="font-serif mt-2 text-2xl font-bold text-brand-navy md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray-600 md:text-base">
                        {step.description}
                      </p>
                      <svg
                        className="mx-auto mt-8 h-16 w-full max-w-[180px] text-brand-gold/30"
                        viewBox="0 0 120 40"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M8 32 L40 8 L80 28 L112 12"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeDasharray="3 4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowWeWorkMobile() {
  const steps = getDictionary().home.howWeWork.steps
  const { eyebrow, title } = getDictionary().home.howWeWork

  return (
    <section className="relative bg-white py-20 px-6 lg:hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          className="mb-12 text-center"
          eyebrow={eyebrow}
          title={title}
          align="center"
        />

        <StaggerGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#fafbfc] p-6 text-center">
                <span
                  className="pointer-events-none absolute -right-2 -top-2 font-serif text-6xl font-bold text-brand-gold/[0.08]"
                  aria-hidden
                >
                  {step.roman}
                </span>
                <div className="relative z-10">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/25 bg-white text-2xl">
                    {step.icon}
                  </div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/40">
                    {step.roman}
                  </p>
                  <h3 className="font-serif mt-1 text-lg font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default function HowWeWork() {
  return (
    <>
      <HowWeWorkDesktop />
      <HowWeWorkMobile />
    </>
  )
}
