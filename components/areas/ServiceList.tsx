'use client'

import type { Area } from '@/lib/areas'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif mb-4 text-2xl font-bold text-brand-navy md:text-3xl">
              ¿En qué te ayudamos?
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {area.description}
            </p>
          </div>

          <StaggerGroup as="ul" className="list-none space-y-3">
            {area.services.map((service) => (
              <StaggerItem key={service} as="li">
                <div className="group flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-white transition-[background-color,transform,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:brightness-110"
                    style={{
                      backgroundColor: area.accent,
                      borderColor: `${area.accent}66`,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-700 transition-transform duration-300 group-hover:translate-x-1">
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
