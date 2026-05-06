import Link from 'next/link'
import { areas } from '@/lib/areas'
import Reveal from '@/components/motion/Reveal'

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
    <footer className="relative bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-civil/70 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Reveal className="will-change-transform">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <ScalesIcon />
                <span className="font-serif text-base font-bold">
                  Romio &amp; Asociados
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Estudio jurídico en Mar del Plata.
                <br />
                Compromiso, claridad y resultados.
              </p>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.08}>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                Áreas de práctica
              </h3>
              <ul className="space-y-2">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-civil rounded-sm"
                    >
                      <span
                        className="inline-block max-w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[1em] group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      >
                        →
                      </span>
                      {area.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.12}>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                Contacto
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://wa.me/5492235000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-civil"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@romioasociados.com.ar"
                    className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-civil"
                  >
                    contacto@romioasociados.com.ar
                  </a>
                </li>
                <li className="text-white/40">Mar del Plata, Argentina</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {year} Romio &amp; Asociados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
