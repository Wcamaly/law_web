// components/home/AreasGrid.tsx
'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { areas, WHATSAPP_URL } from '@/lib/areas'
import { toRoman } from '@/lib/numerals'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import SectionRule from '@/components/brand/SectionRule'
import Reveal from '@/components/motion/Reveal'
import StaggerGroup, { StaggerItem } from '@/components/motion/StaggerGroup'
import SectionHeader from '@/components/motion/SectionHeader'
import { cn } from '@/lib/cn'
import { t } from '@/i18n'

const GOLD = '#b8954a'

const gridPlacement = [
  'lg:col-span-6 lg:row-span-2 lg:row-start-1 lg:col-start-1',
  'lg:col-span-6 lg:row-start-1 lg:col-start-7',
  'lg:col-span-6 lg:row-start-2 lg:col-start-7',
  'lg:col-span-4 lg:row-start-3 lg:col-start-1',
  'lg:col-span-4 lg:row-start-3 lg:col-start-5',
] as const

function CardDecorPath() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-40 transition-opacity duration-300 group-hover:opacity-100 md:h-40 md:w-40"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M10 90 C30 20, 70 80, 90 10"
        stroke={GOLD}
        strokeWidth="0.8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

export default function AreasGrid() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-white to-white py-20 px-6"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-navy/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-brand-gold/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14">
          <SectionHeader
            eyebrow={t('home.areasGrid.eyebrow')}
            tone="gold"
            title={t('home.areasGrid.title')}
            description={t('home.areasGrid.description')}
          />
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-7">
          {areas.map((area, i) => (
            <StaggerItem
              key={area.slug}
              className={cn('min-h-0', gridPlacement[i])}
            >
              <Link
                href={`/areas/${area.slug}`}
                aria-label={t('common.areasGrid.ariaLabelExplore', {
                  name: area.name,
                  tagline: area.tagline,
                })}
                className={cn(
                  'group relative flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white',
                  'transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'hover:-translate-y-0.5 hover:border-brand-gold/40',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
                  i === 0 && 'lg:min-h-[420px]',
                )}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(900px circle at 0% 0%, rgb(184 149 74 / 0.12) 0%, transparent 50%)',
                  }}
                  aria-hidden
                />

                {i === 0 && <CardDecorPath />}

                <div className="relative flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-5 flex justify-end">
                    <span
                      className="font-serif text-4xl font-bold leading-none text-brand-gold/90 md:text-5xl"
                      aria-hidden
                    >
                      {toRoman(i + 1)}
                    </span>
                  </div>

                  <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/40">
                    {area.shortName}
                  </p>
                  <h3 className="font-serif mb-2 line-clamp-3 text-lg font-bold leading-snug text-brand-navy md:text-xl">
                    {area.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {area.tagline}
                  </p>

                  <ul className="mb-5 space-y-1.5 text-xs text-gray-500">
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-brand-gold"
                        aria-hidden
                      />
                      {t('common.areasGrid.freeOrientationBullet')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-brand-gold"
                        aria-hidden
                      />
                      {t('common.areasGrid.servicesFaqsBullet', {
                        count: area.services.length,
                        faqCount: area.faq.length,
                      })}
                    </li>
                  </ul>

                  <div className="mt-auto border-t border-gray-100 pt-5">
                    <span className="inline-flex w-full items-center justify-between gap-3 text-sm font-bold text-brand-gold">
                      <span>{t('common.cta.exploreArea')}</span>
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/25 bg-white text-base transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10 group-focus-visible:border-brand-gold/50 group-focus-visible:bg-brand-gold/10"
                        aria-hidden
                      >
                        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}

          <StaggerItem className="lg:col-span-4 lg:row-start-3 lg:col-start-9">
            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-brand-navy/20 bg-brand-navy p-6 text-white md:p-7">
              <div>
                <SectionRule className="mb-5" maxWidth="7rem" />
                <EditorialEyebrow
                  label={t('home.areasGrid.ctaCardEyebrow')}
                  tone="gold-on-dark"
                  className="mb-2"
                />
                <h3 className="font-serif mt-3 text-xl font-bold md:text-2xl">
                  {t('home.areasGrid.ctaCardTitle')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {t('home.areasGrid.ctaCardBody')}
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-gold/40 bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-navy transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                {t('common.cta.letsTalk')}
                <span className="cta-arrow-mask text-brand-navy" aria-hidden>
                  <span className="cta-arrow-inner text-base">→</span>
                </span>
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
