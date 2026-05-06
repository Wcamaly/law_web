// components/home/HeroSection.tsx
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c4f7c] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6">
          Estudio Jurídico · Mar del Plata
        </p>

        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Su problema legal,<br />
          nuestra prioridad.
        </h1>

        <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Más de una década acompañando a personas y empresas en Mar del Plata.
          Claridad, compromiso y resultados en cada caso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-bold text-[#1e3a5f] shadow hover:bg-white/90 transition-colors"
          >
            Consulta gratis por WhatsApp
          </a>
          <Link
            href="/#areas"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Ver áreas de práctica
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
