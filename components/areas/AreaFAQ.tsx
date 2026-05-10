'use client'

import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react'
import type { Area } from '@/lib/areas'
import SectionHeader from '@/components/motion/SectionHeader'

export default function AreaFAQ({ area }: { area: Area }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section className="bg-brand-cream py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          className="mb-10 text-center"
          eyebrow="Preguntas frecuentes"
          title="Preguntas frecuentes"
          align="center"
          tone="gold"
          underlineClassName="bg-brand-gold"
        />

        <div className="space-y-2">
          {area.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors duration-300 hover:border-gray-300"
                layout={!reduced}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/30 focus-visible:ring-offset-2"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-sm font-medium text-brand-navy">
                    {item.q}
                  </span>
                  <span
                    className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-xl font-light leading-none text-brand-gold"
                    aria-hidden
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span
                          key="x"
                          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                          transition={{ duration: reduced ? 0 : 0.2 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          ×
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                          transition={{ duration: reduced ? 0 : 0.2 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          +
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{
                        duration: reduced ? 0 : 0.38,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-600">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
