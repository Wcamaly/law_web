// components/home/ContactSection.tsx
import { WHATSAPP_URL, CONTACT_EMAIL } from '@/lib/areas'

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#f8f9fa] py-20 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]/40 mb-3">
          Contacto
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
          ¿Tenés una consulta?
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-10 text-base leading-relaxed">
          Contactanos sin compromiso. La primera consulta es gratuita y
          te respondemos a la brevedad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#25d366' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.205-.506-4.484-1.37l-.321-.202-3.32.871.887-3.23-.222-.335A7.955 7.955 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
            </svg>
            Escribinos por WhatsApp
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#1e3a5f] px-8 py-4 text-sm font-bold text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            Enviar un email
          </a>
        </div>
      </div>
    </section>
  )
}
