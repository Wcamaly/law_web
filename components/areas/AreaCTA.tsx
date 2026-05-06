import { Area, WHATSAPP_NUMBER } from '@/lib/areas'
import Reveal from '@/components/motion/Reveal'

export default function AreaCTA({ area }: { area: Area }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20${encodeURIComponent(area.shortName)}.`

  return (
    <section
      className="relative overflow-hidden py-16 px-6 text-center text-white"
      style={{
        background: `linear-gradient(160deg, ${area.accent} 0%, color-mix(in srgb, ${area.accent} 88%, black) 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 20% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)`,
        }}
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <h2 className="font-serif mb-3 text-2xl font-bold md:text-3xl">
          ¿Tenés una consulta sobre {area.shortName}?
        </h2>
        <p className="mb-8 text-base text-white/85">
          Primera consulta sin costo. Te respondemos a la brevedad.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer-wrap relative inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-bold shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ color: area.accent }}
        >
          Consultar por WhatsApp →
        </a>
      </Reveal>
    </section>
  )
}
