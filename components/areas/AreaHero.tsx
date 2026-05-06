import Link from 'next/link'
import { Area } from '@/lib/areas'

export default function AreaHero({ area }: { area: Area }) {
  return (
    <section
      className="text-white py-20 px-6"
      style={{
        background: `linear-gradient(135deg, #1e3a5f 0%, ${area.accent} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#areas"
          className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white/80 mb-8 transition-colors"
        >
          ← Volver a áreas
        </Link>

        <div
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: area.accent, color: '#fff' }}
        >
          {area.shortName}
        </div>

        <div className="text-4xl mb-4">{area.icon}</div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
          {area.name}
        </h1>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          {area.tagline}
        </p>
      </div>
    </section>
  )
}
