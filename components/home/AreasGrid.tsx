// components/home/AreasGrid.tsx
import Link from 'next/link'
import { areas } from '@/lib/areas'

export default function AreasGrid() {
  return (
    <section id="areas" className="bg-[#f8f9fa] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]/40 mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Áreas de práctica
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group w-full max-w-sm bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
              style={{ borderLeftColor: area.accent, borderLeftWidth: '4px' }}
            >
              <div className="p-6">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#1e3a5f] mb-2">
                  {area.shortName}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {area.tagline}
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-wider group-hover:underline"
                  style={{ color: area.accent }}
                >
                  Ver más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
