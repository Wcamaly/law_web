import Image from 'next/image'
import Link from 'next/link'
import { areas } from '@/lib/areas'
import RomioWordmark from '@/components/brand/RomioWordmark'
import Reveal from '@/components/motion/Reveal'

const headingClass =
  'mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vw,28rem)] w-[min(80vw,28rem)] rounded-full bg-brand-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vw,24rem)] w-[min(70vw,24rem)] rounded-full bg-brand-navy-light/25 blur-3xl"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <Reveal className="will-change-transform">
            <div className="rounded-xl border border-white/10 bg-white p-4 shadow-sm">
              <Image
                src="/logo/romio-color.jpg"
                alt="Romio y Asociados — Abogados"
                width={280}
                height={120}
                className="mx-auto h-auto w-full max-w-[220px] object-contain"
                sizes="(max-width: 768px) 100vw, 220px"
              />
              <p className="mt-4 font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-navy/45">
                Estudio
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                Estudio jurídico en Mar del Plata.
                <br />
                Compromiso, claridad y resultados.
              </p>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.06}>
            <div>
              <h3 className={headingClass}>Áreas</h3>
              <ul className="space-y-2">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="group inline-flex items-center gap-2 font-serif text-sm italic text-brand-gold/70 transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold rounded-sm"
                    >
                      {area.shortName}
                      <span
                        className="inline-block max-w-0 -translate-x-1 overflow-hidden font-sans not-italic opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[1em] group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.1}>
            <div>
              <h3 className={headingClass}>Contacto</h3>
              <ul className="space-y-2 font-sans text-xs text-white/65">
                <li>
                  <a
                    href="https://wa.me/5492235000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@romioasociados.com.ar"
                    className="rounded-sm transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  >
                    contacto@romioasociados.com.ar
                  </a>
                </li>
                <li className="text-white/35">Mar del Plata, Argentina</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-14 border-t border-white/10 pb-8 pt-12 text-center">
          <RomioWordmark variant="display" className="select-none" />
          <p className="relative z-10 mt-8 font-sans text-[10px] tracking-wide text-white/30">
            © {year} Romio &amp; Asociados · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
