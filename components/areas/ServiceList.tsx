'use client'

import type { Area } from '@/lib/areas'
import { toRoman } from '@/lib/numerals'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'
import SectionHeader from '@/components/motion/SectionHeader'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Servicios"
              title="¿En qué te ayudamos?"
              description={area.description}
              showUnderline={false}
            />
          </div>

          <StaggerGroup as="ul" className="list-none space-y-0">
            {area.services.map((service, i) => (
              <StaggerItem key={service} as="li">
                <div className="group relative border-b border-gray-100 py-4 pl-10 transition-colors hover:bg-gray-50/60">
                  <span className="font-serif absolute left-0 top-1/2 -translate-y-1/2 text-xs font-bold text-brand-gold/60 transition-colors group-hover:text-brand-gold md:text-sm">
                    {toRoman(i + 1)}
                  </span>
                  <span
                    className="absolute bottom-0 left-10 right-0 h-px origin-left scale-x-0 bg-brand-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="block text-sm leading-relaxed text-gray-700 md:text-base">
                    {service}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
