import { Area } from '@/lib/areas'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
              ¿En qué te ayudamos?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {area.description}
            </p>
          </div>

          {/* Services */}
          <ul className="space-y-3">
            {area.services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span
                  className="mt-1 text-lg font-bold leading-none flex-shrink-0"
                  style={{ color: area.accent }}
                >
                  →
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
