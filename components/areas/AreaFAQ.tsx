'use client'

import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react'
import type { Area } from '@/lib/areas'

export default function AreaFAQ({ area }: { area: Area }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif mb-8 text-center text-2xl font-bold text-brand-navy md:text-3xl">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {area.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors duration-300 hover:bg-gray-50/80"
                style={{
                  borderLeftColor: isOpen ? area.accent : 'transparent',
                  borderLeftWidth: '4px',
                }}
                layout={!reduced}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-lg px-6 py-4 text-left transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/25 focus-visible:ring-offset-2"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-brand-navy">
                    {item.q}
                  </span>
                  <motion.span
                    className="flex-shrink-0 text-xl font-light leading-none"
                    style={{ color: area.accent }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 400, damping: 28 }
                    }
                    aria-hidden
                  >
                    +
                  </motion.span>
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
                      <p className="px-6 pb-4 pt-3 text-sm leading-relaxed text-gray-600">
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
