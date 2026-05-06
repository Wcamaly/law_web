import Link from 'next/link'
import { areas } from '@/lib/areas'

function ScalesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 9l4 8H3L7 9z" />
      <path d="M17 9l4 8h-4l4-8z" />
      <line x1="5" y1="3" x2="19" y2="3" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ScalesIcon />
              <span className="font-serif text-base font-bold">
                Romio &amp; Asociados
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Estudio jurídico en Mar del Plata.<br />
              Compromiso, claridad y resultados.
            </p>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Áreas de práctica
            </h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://wa.me/5492235000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@romioasociados.com.ar"
                  className="hover:text-white transition-colors"
                >
                  contacto@romioasociados.com.ar
                </a>
              </li>
              <li className="text-white/40">Mar del Plata, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {year} Romio &amp; Asociados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
