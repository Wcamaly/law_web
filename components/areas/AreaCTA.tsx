import { Area, WHATSAPP_NUMBER } from '@/lib/areas'

export default function AreaCTA({ area }: { area: Area }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20${encodeURIComponent(area.shortName)}.`

  return (
    <section
      className="py-16 px-6 text-white text-center"
      style={{ backgroundColor: area.accent }}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
          ¿Tenés una consulta sobre {area.shortName}?
        </h2>
        <p className="text-white/80 mb-8 text-base">
          Primera consulta sin costo. Te respondemos a la brevedad.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-bold shadow hover:bg-white/90 transition-colors"
          style={{ color: area.accent }}
        >
          Consultar por WhatsApp →
        </a>
      </div>
    </section>
  )
}
