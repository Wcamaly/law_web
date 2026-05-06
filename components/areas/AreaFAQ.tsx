'use client'

import { useState } from 'react'
import { Area } from '@/lib/areas'

export default function AreaFAQ({ area }: { area: Area }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {area.faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              style={{
                borderLeftColor: openIndex === i ? area.accent : 'transparent',
                borderLeftWidth: '4px',
              }}
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-[#1e3a5f] text-sm">{item.q}</span>
                <span
                  className="flex-shrink-0 text-lg transition-transform"
                  style={{
                    color: area.accent,
                    transform: openIndex === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
