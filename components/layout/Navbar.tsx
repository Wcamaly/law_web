// components/layout/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'
import { WHATSAPP_URL } from '@/lib/areas'
import RomioMonogram from '@/components/brand/RomioMonogram'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const onLight = scrolled

  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        onLight
          ? 'border-b border-gray-200/80 bg-white/85 text-brand-navy shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/75'
          : 'border-b border-transparent bg-brand-navy/35 text-white backdrop-blur-md supports-[backdrop-filter]:bg-brand-navy/25',
      )}
      initial={false}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 md:py-4">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-4">
          <span
            className={cn(
              'hidden shrink-0 rounded-full border px-2.5 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] md:inline-block',
              onLight
                ? 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold'
                : 'border-brand-gold/35 bg-brand-gold/10 text-brand-gold-light',
            )}
          >
            Atendemos L–V 9–18
          </span>
          <Link
            href="/"
            className={cn(
              'group flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              onLight
                ? 'text-brand-navy focus-visible:outline-brand-navy/40'
                : 'text-white focus-visible:outline-white/80',
            )}
          >
            <RomioMonogram className="h-8 w-8 text-brand-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 md:h-9 md:w-9" />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-serif truncate text-[11px] font-bold tracking-[0.18em] md:text-xs">
                ROMIO Y ASOCIADOS
              </span>
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.4em] text-brand-gold/90 md:text-[10px]">
                Abogados
              </span>
            </span>
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex md:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'group relative rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                  onLight
                    ? 'text-brand-navy/75 hover:text-brand-navy'
                    : 'text-white/85 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className="pointer-events-none absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 rounded-full bg-brand-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <motion.div
          className="hidden md:block"
          initial={false}
          animate={
            reduced
              ? { opacity: 1, x: 0 }
              : { opacity: scrolled ? 1 : 0.85, x: scrolled ? 0 : 12 }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center rounded-md border px-4 py-2 text-xs font-bold transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 md:text-sm',
              onLight
                ? 'border-brand-gold/40 bg-brand-navy text-white shadow-[var(--shadow-navy-sm)] hover:border-brand-gold hover:shadow-[var(--shadow-navy-md)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold'
                : 'border-transparent bg-brand-gold text-brand-navy shadow-md hover:bg-brand-gold-light hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
            )}
          >
            Consultar
          </a>
        </motion.div>

        <button
          className={cn(
            'rounded-md p-2 transition-colors md:hidden',
            onLight ? 'hover:bg-brand-navy/5' : 'hover:bg-white/10',
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile-nav"
            className={cn(
              'md:hidden border-t px-6 pb-4 backdrop-blur-md',
              onLight
                ? 'border-gray-200 bg-white/95 text-brand-navy'
                : 'border-white/10 bg-brand-navy/95 text-white',
            )}
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={reduced ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: reduced ? 0 : 0.04 + i * 0.06,
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'block border-b py-3 text-sm font-medium transition-colors last:border-0',
                    onLight
                      ? 'border-gray-100 text-brand-navy/85 hover:text-brand-navy'
                      : 'border-white/10 text-white/85 hover:text-white',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <li className="pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-brand-gold py-3 text-sm font-bold text-brand-navy"
              >
                Consultar por WhatsApp
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
