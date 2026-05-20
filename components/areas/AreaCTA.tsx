'use client'

import { Area, buildWhatsappUrl } from '@/lib/areas'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import Reveal from '@/components/motion/Reveal'
import Magnetic from '@/components/motion/Magnetic'
import { t } from '@/i18n'

export default function AreaCTA({ area }: { area: Area }) {
  const url = buildWhatsappUrl(
    t('common.whatsapp.areaConsultPrefix', { area: area.shortName }),
  )

  return (
    <section className="relative overflow-hidden py-16 px-6 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #0c1a3a 0%, color-mix(in srgb, #b8954a 55%, #0c1a3a) 100%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgb(184 149 74 / 0.35) 0%, transparent 45%), radial-gradient(circle at 80% 80%, white 0%, transparent 35%)',
        }}
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <EditorialEyebrow
            label={t('areas.ui.cta.eyebrow')}
            tone="gold-on-dark"
            align="center"
          />
        </div>
        <h2 className="font-serif mt-3 text-2xl font-bold md:text-3xl">
          {t('areas.ui.cta.title', { area: area.shortName })}
        </h2>
        <p className="mt-3 text-base text-white/80">
          {t('areas.ui.cta.body')}
        </p>
        <div className="mt-8 flex justify-center">
          <Magnetic strength={14}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-wrap group relative inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-bold text-brand-gold shadow-lg transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              {t('areas.ui.cta.button')}
              <span className="cta-arrow-mask text-brand-gold" aria-hidden>
                <span className="cta-arrow-inner">→</span>
              </span>
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  )
}
