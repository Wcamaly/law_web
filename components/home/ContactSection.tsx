// components/home/ContactSection.tsx
'use client'

import { useState, type FormEvent } from 'react'
import {
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  CONTACT_EMAIL,
  areas,
} from '@/lib/areas'
import EditorialEyebrow from '@/components/brand/EditorialEyebrow'
import SectionRule from '@/components/brand/SectionRule'
import Reveal from '@/components/motion/Reveal'
import Magnetic from '@/components/motion/Magnetic'
import { interpolate, t } from '@/i18n'

const labelClass =
  'font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold/55'

const formLabelClass =
  'font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/40'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [areaSlug, setAreaSlug] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const area =
      areas.find((a) => a.slug === areaSlug)?.shortName ??
      t('common.contactForm.generalAreaFallback')
    const body = interpolate(t('common.contactForm.whatsappBody'), {
      name: name || t('common.contactForm.namePlaceholderIfEmpty'),
      area,
      message: message || t('common.contactForm.messagePlaceholderIfEmpty'),
    })
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="bg-brand-cream py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-4">
            <EditorialEyebrow label={t('home.contact.eyebrow')} tone="gold" />
          </div>
          <h2 className="text-display font-serif mb-4 max-w-3xl font-bold text-brand-navy">
            {t('home.contact.title')}
          </h2>
          <SectionRule className="mb-10" maxWidth="14rem" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="will-change-transform">
            <div>
              <p className="text-lg leading-relaxed text-gray-600">
                {t('home.contact.intro')}
              </p>
              <ul className="mt-10 space-y-6 text-sm">
                <li>
                  <span className={labelClass}>{t('home.contact.labels.whatsapp')}</span>
                  <Magnetic strength={10}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 flex items-center gap-2 text-brand-navy transition-colors hover:text-brand-gold"
                    >
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#25d366] text-white"
                        aria-hidden
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.205-.506-4.484-1.37l-.321-.202-3.32.871.887-3.23-.222-.335A7.955 7.955 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                        </svg>
                      </span>
                      <span className="font-medium underline-offset-4 group-hover:underline">
                        {t('home.contact.labels.linkWhatsApp')}
                      </span>
                      <span className="cta-arrow-mask" aria-hidden>
                        <span className="cta-arrow-inner text-brand-navy">→</span>
                      </span>
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <span className={labelClass}>{t('home.contact.labels.email')}</span>
                  <Magnetic strength={8}>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="group mt-2 flex items-center gap-2 break-all text-brand-navy transition-colors hover:text-brand-gold"
                    >
                      <span className="font-medium">{CONTACT_EMAIL}</span>
                      <span className="cta-arrow-mask" aria-hidden>
                        <span className="cta-arrow-inner">→</span>
                      </span>
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <span className={labelClass}>{t('home.contact.labels.location')}</span>
                  <p className="mt-2 text-gray-600">
                    {t('home.contact.locationLine')}
                    <br />
                    <span className="text-gray-500">
                      {t('home.contact.labels.hoursPlaceholder')}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="will-change-transform" delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm md:p-8"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className={formLabelClass}
                >
                  {t('home.contact.form.nameLabel')}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="mt-2 w-full border-b border-brand-navy/15 bg-transparent py-2 text-sm text-brand-navy outline-none transition-colors focus:border-brand-gold"
                  placeholder={t('home.contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-area"
                  className={formLabelClass}
                >
                  {t('home.contact.form.areaLabel')}
                </label>
                <select
                  id="contact-area"
                  name="area"
                  value={areaSlug}
                  onChange={(e) => setAreaSlug(e.target.value)}
                  className="mt-2 w-full cursor-pointer border-b border-brand-navy/15 bg-transparent py-2 text-sm text-brand-navy outline-none transition-colors focus:border-brand-gold"
                >
                  <option value="">{t('home.contact.form.areaPlaceholder')}</option>
                  {areas.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.shortName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className={formLabelClass}
                >
                  {t('home.contact.form.messageLabel')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-2 w-full resize-y border-b border-brand-navy/15 bg-transparent py-2 text-sm text-brand-navy outline-none transition-colors focus:border-brand-gold"
                  placeholder={t('home.contact.form.messagePlaceholder')}
                />
              </div>
              <Magnetic strength={12}>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-[background-color,color,border-color] duration-300 hover:border-brand-gold/50 hover:bg-brand-gold hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  {t('home.contact.form.submit')}
                  <span className="cta-arrow-mask text-white group-hover:text-brand-navy" aria-hidden>
                    <span className="cta-arrow-inner text-base">→</span>
                  </span>
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
