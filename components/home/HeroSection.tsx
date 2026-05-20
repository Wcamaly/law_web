// components/home/HeroSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import Magnetic from '@/components/motion/Magnetic'
import { getDictionary, t } from '@/i18n'

function HighlightPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.205-.506-4.484-1.37l-.321-.202-3.32.871.887-3.23-.222-.335A7.955 7.955 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
    </svg>
  )
}

export default function HeroSection() {
  const reduced = useReducedMotion()
  const hero = getDictionary().home.hero

  return (
    <section
      id="inicio"
      className="relative min-h-[clamp(32rem,56vw,44rem)] w-full overflow-hidden"
      aria-label="Inicio"
    >
      <Image
        src="/images/hero-background.png"
        alt={t('home.hero.imageAlt')}
        fill
        priority
        className="object-cover object-[72%_center] sm:object-[78%_center] lg:object-right"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-[clamp(32rem,56vw,44rem)] max-w-6xl items-center px-6 py-16 md:py-20">
        <div className="w-full max-w-xl lg:max-w-[52%]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <EditorialEyebrow label={t('home.hero.eyebrow')} tone="gold" />
          </motion.div>

          <motion.h1
            className="mt-5 font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-brand-navy"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{t('home.hero.titleLine1')}</span>
            <span className="mt-1 block bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-clip-text text-transparent">
              {t('home.hero.titleLine2')}
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-brand-navy/75 md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('home.hero.description')}
          </motion.p>

          <motion.ul
            className="mt-7 flex flex-col gap-2.5"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Áreas de práctica destacadas"
          >
            {hero.highlights.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/areas/${item.slug}`}
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold md:text-base"
                >
                  <HighlightPin className="shrink-0 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic strength={14}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-navy px-8 py-3.5 text-sm font-bold text-white shadow-[var(--shadow-navy-md)] transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-brand-navy-light hover:shadow-[var(--shadow-navy-lg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                <WhatsAppIcon />
                {t('home.hero.cta.primary')}
                <span className="cta-arrow-mask ml-0.5" aria-hidden>
                  <span className="cta-arrow-inner text-base">→</span>
                </span>
              </a>
            </Magnetic>

            <Link
              href="/#areas"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-navy/70 underline-offset-4 transition-colors hover:text-brand-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              {t('home.hero.cta.areas')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
