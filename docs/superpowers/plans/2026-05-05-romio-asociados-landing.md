# Romio & Asociados — Landing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional landing site + 5 practice-area pages for the law firm Romio & Asociados using Next.js 15 App Router and Tailwind CSS, deployable to Vercel.

**Architecture:** A statically-generated Next.js site where all content lives in `lib/areas.ts`. The root `/` is a single long-scroll landing page; each of the 5 practice areas has its own page at `/areas/[slug]`. Dynamic accent colors are applied via inline styles so Tailwind's JIT never purges them. No backend, no CMS, no auth.

**Tech Stack:** Next.js 15 (App Router, `generateStaticParams`), Tailwind CSS v4, TypeScript, Google Fonts via `next/font`, Vercel.

---

## File Map

| File | Responsibility |
|------|---------------|
| `lib/areas.ts` | Single source of truth: all area data (name, slug, accent colors, services, FAQ) |
| `app/layout.tsx` | Root layout: fonts, Navbar, Footer, global metadata |
| `app/globals.css` | Tailwind v4 import + `@theme` custom tokens |
| `app/page.tsx` | Landing page — composes all home sections |
| `app/areas/[slug]/page.tsx` | Dynamic area page — `generateStaticParams` + `generateMetadata` |
| `app/sitemap.ts` | Next.js native sitemap generator |
| `components/layout/Navbar.tsx` | Sticky navbar, mobile hamburger, scroll-anchor links |
| `components/layout/Footer.tsx` | Footer with area links + copyright |
| `components/home/HeroSection.tsx` | Full-width hero with gradient + 2 CTAs |
| `components/home/AreasGrid.tsx` | 5-card grid linking to area pages |
| `components/home/HowWeWork.tsx` | 4-step horizontal process |
| `components/home/AboutSection.tsx` | Institutional block + 3 metrics |
| `components/home/ContactSection.tsx` | WhatsApp + Email CTA buttons |
| `components/areas/AreaHero.tsx` | Area-specific hero with dynamic accent gradient |
| `components/areas/ServiceList.tsx` | Bulleted list of services with accent color |
| `components/areas/AreaFAQ.tsx` | Accordion-style FAQ with accent highlight |
| `components/areas/AreaCTA.tsx` | Full-width CTA strip linking to WhatsApp |

---

## Task 1: Scaffold Next.js 15 project

**Files:**
- Create: entire project scaffold via `create-next-app`
- Modify: `package.json`, `tsconfig.json`

- [ ] **Step 1: Run create-next-app inside the repo directory**

```bash
cd /srv/projects/owns/landing_law
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --yes
```

Expected: project files created, `node_modules` installed. If prompted about existing files (README.md, .gitignore), choose to overwrite `.gitignore` and keep README.

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev &
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`

- [ ] **Step 3: Kill dev server and verify build works**

```bash
kill %1 2>/dev/null; npm run build
```

Expected: `✓ Compiled successfully` or similar. Build artifacts in `.next/`.

- [ ] **Step 4: Commit scaffold**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 + Tailwind project"
```

---

## Task 2: Configure Tailwind tokens + Google Fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Check Tailwind version installed**

```bash
npm list tailwindcss
```

If Tailwind v4 (`4.x.x`): use `@theme {}` block in CSS. If Tailwind v3 (`3.x.x`): use `tailwind.config.ts`. Continue based on result.

- [ ] **Step 2: Replace `app/globals.css` with custom tokens**

**If Tailwind v4 is installed:**

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-navy: #1e3a5f;
  --color-brand-navy-light: #2c4f7c;

  /* Area accents */
  --color-accent-civil: #2563eb;
  --color-accent-salud: #e63946;
  --color-accent-legal-tech: #7c3aed;
  --color-accent-transito: #f59e0b;
  --color-accent-divorcios: #0d9488;
}

html {
  scroll-behavior: smooth;
}
```

**If Tailwind v3 is installed:**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

Then create/update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1e3a5f',
        'brand-navy-light': '#2c4f7c',
      },
    },
  },
}

export default config
```

- [ ] **Step 3: Add Google Fonts to `app/layout.tsx`**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romio & Asociados — Estudio Jurídico Mar del Plata',
  description:
    'Estudio jurídico en Mar del Plata especializado en derecho civil, salud, tránsito, divorcios y legal tech.',
  openGraph: {
    title: 'Romio & Asociados — Estudio Jurídico',
    description: 'Asesoramiento legal profesional en Mar del Plata.',
    url: 'https://romioasociados.com.ar',
    siteName: 'Romio & Asociados',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Add font variables to globals.css**

Add after the existing CSS:

```css
/* app/globals.css — append these lines */
body {
  font-family: var(--font-inter), sans-serif;
}

.font-serif {
  font-family: var(--font-playfair), Georgia, serif;
}
```

- [ ] **Step 5: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css app/layout.tsx tailwind.config.ts
git commit -m "feat: configure Tailwind tokens and Google Fonts"
```

---

## Task 3: Data layer — `lib/areas.ts`

**Files:**
- Create: `lib/areas.ts`

- [ ] **Step 1: Create `lib/areas.ts` with full content**

```typescript
// lib/areas.ts

export type FAQ = {
  q: string
  a: string
}

export type Area = {
  slug: string
  name: string           // full display name
  shortName: string      // for navbar/footer links
  accent: string         // hex — used in inline styles
  accentLight: string    // hex — light background variant
  icon: string           // emoji icon
  tagline: string        // one-liner for cards
  description: string    // paragraph for area page
  services: string[]     // list of specific services
  faq: FAQ[]
}

export const WHATSAPP_NUMBER = '5492235000000'
export const CONTACT_EMAIL = 'contacto@romioasociados.com.ar'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20con%20el%20estudio.`

export const areas: Area[] = [
  {
    slug: 'civil',
    name: 'Derecho Civil, Sucesiones y Usucapio',
    shortName: 'Derecho Civil',
    accent: '#2563eb',
    accentLight: '#dbeafe',
    icon: '⚖️',
    tagline: 'Contratos, sucesiones y derechos reales.',
    description:
      'Asesoramos en todo tipo de conflictos civiles: contratos, derechos reales, sucesiones y usucapio. Nuestro equipo trabaja para proteger su patrimonio y resolver disputas con eficiencia.',
    services: [
      'Redacción y revisión de contratos civiles',
      'Juicios sucesorios y testamentos',
      'Usucapio y prescripción adquisitiva',
      'Mediaciones y acuerdos extrajudiciales',
      'Reclamos por daños y perjuicios',
      'Desalojos y conflictos locativos',
    ],
    faq: [
      {
        q: '¿Cuánto tiempo demora una sucesión?',
        a: 'Una sucesión simple puede resolverse en 6 a 12 meses. Si hay conflicto entre herederos o bienes complejos, puede extenderse. Lo evaluamos en una consulta inicial gratuita.',
      },
      {
        q: '¿Qué es la usucapio?',
        a: 'Es el proceso legal para adquirir la propiedad de un bien a través de la posesión continua y pacífica durante el plazo que fija la ley (generalmente 10 o 20 años según el caso).',
      },
      {
        q: '¿Necesito un abogado para firmar un contrato?',
        a: 'No es obligatorio, pero es altamente recomendable para contratos de valor significativo. Un abogado puede prevenir cláusulas perjudiciales que son difíciles de revertir después.',
      },
    ],
  },
  {
    slug: 'salud',
    name: 'Derecho a la Salud',
    shortName: 'Salud',
    accent: '#e63946',
    accentLight: '#fde8ea',
    icon: '🏥',
    tagline: 'Amparo de cobertura médica y mala praxis.',
    description:
      'Defendemos el derecho a la salud frente a obras sociales, prepagas y establecimientos de salud. Tramitamos amparos urgentes para garantizar coberturas y representamos a pacientes en casos de mala praxis.',
    services: [
      'Amparos de salud urgentes',
      'Reclamos contra obras sociales y prepagas',
      'Cobertura de medicamentos de alto costo',
      'Casos de mala praxis médica',
      'Internaciones y tratamientos negados',
      'Discapacidad y prestaciones especiales',
    ],
    faq: [
      {
        q: '¿Qué hago si mi obra social no cubre mi tratamiento?',
        a: 'Puede interponer un amparo de salud. Es un recurso judicial urgente que obliga a la obra social a brindar la cobertura mientras se resuelve el fondo. Actuamos con rapidez en estos casos.',
      },
      {
        q: '¿Puedo reclamar por mala praxis?',
        a: 'Sí. Si sufrió daños por un error médico, tiene derecho a reclamar indemnización. Evaluamos el caso con documentación médica y determinamos si existe responsabilidad profesional.',
      },
      {
        q: '¿El amparo de salud es rápido?',
        a: 'Sí, los amparos son procesos urgentes. En casos de riesgo de vida o daño irreparable, los jueces pueden ordenar medidas cautelares en 24 a 48 horas.',
      },
    ],
  },
  {
    slug: 'legal-tech',
    name: 'Legal Tech',
    shortName: 'Legal Tech',
    accent: '#7c3aed',
    accentLight: '#ede9fe',
    icon: '💻',
    tagline: 'Derecho para la economía digital.',
    description:
      'Asesoramos a startups, desarrolladores, e-commerces y empresas tech en los aspectos legales de sus negocios digitales. Privacidad, contratos de software, y cumplimiento normativo en el mundo digital.',
    services: [
      'Contratos de desarrollo de software y SaaS',
      'Términos y condiciones para apps y plataformas',
      'Política de privacidad y protección de datos (PDPA)',
      'Aspectos legales para startups y emprendimientos',
      'Contratos de e-commerce y marketplaces',
      'Protección de propiedad intelectual digital',
    ],
    faq: [
      {
        q: '¿Necesito términos y condiciones para mi app?',
        a: 'Sí. Los T&C protegen tu negocio, limitan responsabilidad y definen las reglas de uso. Además son obligatorios en plataformas como App Store y Google Play.',
      },
      {
        q: '¿Qué datos puedo guardar de mis usuarios?',
        a: 'Depende de lo que declares en tu política de privacidad y de las leyes aplicables (en Argentina, la Ley 25.326). Un abogado puede ayudarte a diseñar una estrategia de datos legal y segura.',
      },
      {
        q: '¿Cómo protejo mi software de que me lo copien?',
        a: 'El código fuente está protegido por derechos de autor desde su creación. Adicionalmente, podemos registrar la obra y redactar contratos con cláusulas de confidencialidad y no competencia.',
      },
    ],
  },
  {
    slug: 'transito',
    name: 'Accidentes de Tránsito',
    shortName: 'Tránsito',
    accent: '#f59e0b',
    accentLight: '#fef3c7',
    icon: '🚗',
    tagline: 'Indemnizaciones y reclamos por accidentes viales.',
    description:
      'Si sufriste un accidente de tránsito, tenés derecho a una indemnización. Gestionamos el reclamo ante la aseguradora, tramitamos el juicio civil si es necesario y te acompañamos en todo el proceso sin costo inicial.',
    services: [
      'Reclamos a compañías aseguradoras',
      'Indemnización por lesiones y daños físicos',
      'Daños materiales al vehículo',
      'Accidentes con culpa de terceros',
      'Lucro cesante y daño moral',
      'Representación en juicio civil',
    ],
    faq: [
      {
        q: '¿Cuánto tiempo tengo para hacer el reclamo?',
        a: 'El plazo de prescripción para accidentes de tránsito es de 3 años desde el accidente. Sin embargo, cuanto antes actúes, más fácil es reunir pruebas.',
      },
      {
        q: '¿Tienen honorarios anticipados?',
        a: 'No. En la mayoría de los casos de accidentes trabajamos a porcentaje del resultado obtenido. No pagás honorarios si no cobrás.',
      },
      {
        q: '¿Puedo reclamar aunque el accidente haya sido parcialmente mi culpa?',
        a: 'Sí. En Argentina rige la responsabilidad proporcional a la culpa. Incluso si tenés parte de responsabilidad, podés tener derecho a cobrar una indemnización.',
      },
    ],
  },
  {
    slug: 'divorcios',
    name: 'Divorcios',
    shortName: 'Divorcios',
    accent: '#0d9488',
    accentLight: '#ccfbf1',
    icon: '💍',
    tagline: 'Divorcio vincular express o contencioso.',
    description:
      'Acompañamos a nuestros clientes en el proceso de divorcio con discreción y eficiencia. Tramitamos divorcios de mutuo acuerdo (express) y contenciosos, resolviendo la división de bienes con claridad.',
    services: [
      'Divorcio vincular de mutuo acuerdo (express)',
      'Divorcio contencioso',
      'División y liquidación de bienes gananciales',
      'Acuerdos sobre vivienda familiar',
      'Alimentos entre cónyuges',
      'Asesoramiento previo al matrimonio',
    ],
    faq: [
      {
        q: '¿Cuánto tarda un divorcio express?',
        a: 'Un divorcio de mutuo acuerdo puede resolverse en 1 a 3 meses si ambas partes están de acuerdo en todos los términos. Es el proceso más rápido y económico.',
      },
      {
        q: '¿Qué pasa con los bienes si no llegamos a un acuerdo?',
        a: 'Si no hay acuerdo, iniciamos el proceso contencioso. El juez puede ordenar una liquidación de los bienes en partes iguales si son gananciales.',
      },
      {
        q: '¿El divorcio incluye la tenencia de los hijos?',
        a: 'No directamente — la tenencia es un proceso separado que gestionamos de forma coordinada si es necesario.',
      },
    ],
  },
]

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug)
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/areas.ts
git commit -m "feat: add areas data layer with all 5 practice areas"
```

---

## Task 4: Logo SVG + Navbar

**Files:**
- Create: `components/layout/Navbar.tsx`

- [ ] **Step 1: Create Navbar component**

```typescript
// components/layout/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

function ScalesIcon() {
  return (
    <svg
      width="24"
      height="24"
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

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1e3a5f] text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
        >
          <ScalesIcon />
          <span className="font-serif text-lg font-bold tracking-tight">
            Romio &amp; Asociados
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
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

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-white/10 px-6 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-white/80 hover:text-white border-b border-white/10 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu"
```

---

## Task 5: Footer

**Files:**
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer component**

```typescript
// components/layout/Footer.tsx
import Link from 'next/link'
import { areas } from '@/lib/areas'

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
    <footer className="bg-[#1e3a5f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ScalesIcon />
              <span className="font-serif text-base font-bold">
                Romio &amp; Asociados
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Estudio jurídico en Mar del Plata.<br />
              Compromiso, claridad y resultados.
            </p>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Áreas de práctica
            </h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://wa.me/5492235000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@romioasociados.com.ar"
                  className="hover:text-white transition-colors"
                >
                  contacto@romioasociados.com.ar
                </a>
              </li>
              <li className="text-white/40">Mar del Plata, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {year} Romio &amp; Asociados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Wire Navbar + Footer into root layout**

Update `app/layout.tsx` — replace the `<body>` content:

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romio & Asociados — Estudio Jurídico Mar del Plata',
  description:
    'Estudio jurídico en Mar del Plata especializado en derecho civil, salud, tránsito, divorcios y legal tech.',
  openGraph: {
    title: 'Romio & Asociados — Estudio Jurídico',
    description: 'Asesoramiento legal profesional en Mar del Plata.',
    url: 'https://romioasociados.com.ar',
    siteName: 'Romio & Asociados',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 3: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Footer.tsx app/layout.tsx
git commit -m "feat: add Footer and wire Navbar+Footer into root layout"
```

---

## Task 6: Landing — HeroSection

**Files:**
- Create: `components/home/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection**

```typescript
// components/home/HeroSection.tsx
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/areas'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c4f7c] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6">
          Estudio Jurídico · Mar del Plata
        </p>

        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Su problema legal,<br />
          nuestra prioridad.
        </h1>

        <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Más de una década acompañando a personas y empresas en Mar del Plata.
          Claridad, compromiso y resultados en cada caso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-bold text-[#1e3a5f] shadow hover:bg-white/90 transition-colors"
          >
            Consulta gratis por WhatsApp
          </a>
          <Link
            href="/#areas"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Ver áreas de práctica
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "feat: add HeroSection with WhatsApp CTA"
```

---

## Task 7: Landing — AreasGrid

**Files:**
- Create: `components/home/AreasGrid.tsx`

- [ ] **Step 1: Create AreasGrid**

```typescript
// components/home/AreasGrid.tsx
import Link from 'next/link'
import { areas } from '@/lib/areas'

export default function AreasGrid() {
  return (
    <section id="areas" className="bg-[#f8f9fa] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]/40 mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Áreas de práctica
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group w-full max-w-sm bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
              style={{ borderLeftColor: area.accent, borderLeftWidth: '4px' }}
            >
              <div className="p-6">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#1e3a5f] mb-2">
                  {area.shortName}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {area.tagline}
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-wider group-hover:underline"
                  style={{ color: area.accent }}
                >
                  Ver más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/AreasGrid.tsx
git commit -m "feat: add AreasGrid with per-area accent colors"
```

---

## Task 8: Landing — HowWeWork

**Files:**
- Create: `components/home/HowWeWork.tsx`

- [ ] **Step 1: Create HowWeWork**

```typescript
// components/home/HowWeWork.tsx
const steps = [
  {
    number: '01',
    icon: '📞',
    title: 'Consulta',
    description:
      'Nos contactás por WhatsApp o email. Primera consulta sin costo para entender tu situación.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Análisis',
    description:
      'Estudiamos tu caso en detalle, evaluamos las posibilidades y te explicamos el panorama con claridad.',
  },
  {
    number: '03',
    icon: '⚖️',
    title: 'Estrategia',
    description:
      'Definimos el mejor camino legal: negociación, mediación o juicio según tu caso y tus objetivos.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Resultado',
    description:
      'Ejecutamos la estrategia y te mantenemos informado en cada etapa hasta obtener el mejor resultado.',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]/40 mb-3">
            Proceso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Cómo trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f9fa] text-3xl mb-4">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-[#1e3a5f]/30 mb-1 tracking-widest">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1e3a5f] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/HowWeWork.tsx
git commit -m "feat: add HowWeWork 4-step process section"
```

---

## Task 9: Landing — AboutSection

**Files:**
- Create: `components/home/AboutSection.tsx`

- [ ] **Step 1: Create AboutSection**

```typescript
// components/home/AboutSection.tsx
const metrics = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '5', label: 'Áreas de práctica' },
]

const values = ['Compromiso', 'Claridad', 'Resultados']

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#1e3a5f] text-white py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Nosotros
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Un equipo comprometido<br />con cada caso.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              Romio &amp; Asociados es un estudio jurídico con base en Mar del Plata.
              Trabajamos como equipo en cada caso, combinando experiencia en diversas
              ramas del derecho para ofrecer una solución integral y eficiente.
              No tomamos más casos de los que podemos atender bien.
            </p>
            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="text-xs font-bold uppercase tracking-wider border border-white/20 rounded-full px-4 py-1.5 text-white/60"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  {m.value}
                </div>
                <div className="text-xs text-white/50 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/AboutSection.tsx
git commit -m "feat: add institutional AboutSection with metrics"
```

---

## Task 10: Landing — ContactSection

**Files:**
- Create: `components/home/ContactSection.tsx`

- [ ] **Step 1: Create ContactSection**

```typescript
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
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/home/ContactSection.tsx
git commit -m "feat: add ContactSection with WhatsApp and email CTAs"
```

---

## Task 11: Landing page composition

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx` with composed landing**

```typescript
// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import AreasGrid from '@/components/home/AreasGrid'
import HowWeWork from '@/components/home/HowWeWork'
import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AreasGrid />
      <HowWeWork />
      <AboutSection />
      <ContactSection />
    </>
  )
}
```

- [ ] **Step 2: Run dev server and visually verify landing**

```bash
npm run dev
```

Open http://localhost:3000 and check:
- Navbar is sticky, shows logo + links
- Hero has gradient + 2 buttons
- Areas grid shows 5 cards with colored left borders
- How We Work shows 4 steps
- About has metrics
- Contact has WhatsApp (green) and email buttons
- Footer shows area links

- [ ] **Step 3: Build verification**

```bash
npm run build
```

Expected: build completes with no errors. Note any warnings but don't fix them unless they're errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose landing page with all sections"
```

---

## Task 12: Area page components

**Files:**
- Create: `components/areas/AreaHero.tsx`
- Create: `components/areas/ServiceList.tsx`
- Create: `components/areas/AreaFAQ.tsx`
- Create: `components/areas/AreaCTA.tsx`

- [ ] **Step 1: Create AreaHero**

```typescript
// components/areas/AreaHero.tsx
import Link from 'next/link'
import { Area } from '@/lib/areas'

export default function AreaHero({ area }: { area: Area }) {
  return (
    <section
      className="text-white py-20 px-6"
      style={{
        background: `linear-gradient(135deg, #1e3a5f 0%, ${area.accent} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#areas"
          className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white/80 mb-8 transition-colors"
        >
          ← Volver a áreas
        </Link>

        <div
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: area.accent, color: '#fff' }}
        >
          {area.shortName}
        </div>

        <div className="text-4xl mb-4">{area.icon}</div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
          {area.name}
        </h1>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          {area.tagline}
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create ServiceList**

```typescript
// components/areas/ServiceList.tsx
import { Area } from '@/lib/areas'

export default function ServiceList({ area }: { area: Area }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
              ¿En qué te ayudamos?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {area.description}
            </p>
          </div>

          {/* Services */}
          <ul className="space-y-3">
            {area.services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span
                  className="mt-1 text-lg font-bold leading-none flex-shrink-0"
                  style={{ color: area.accent }}
                >
                  →
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create AreaFAQ**

```typescript
// components/areas/AreaFAQ.tsx
'use client'

import { useState } from 'react'
import { Area } from '@/lib/areas'

export default function AreaFAQ({ area }: { area: Area }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#f8f9fa] py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {area.faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              style={{
                borderLeftColor: openIndex === i ? area.accent : 'transparent',
                borderLeftWidth: '4px',
              }}
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-[#1e3a5f] text-sm">{item.q}</span>
                <span
                  className="flex-shrink-0 text-lg transition-transform"
                  style={{
                    color: area.accent,
                    transform: openIndex === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create AreaCTA**

```typescript
// components/areas/AreaCTA.tsx
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
```

- [ ] **Step 5: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add components/areas/
git commit -m "feat: add AreaHero, ServiceList, AreaFAQ, AreaCTA components"
```

---

## Task 13: Dynamic area page

**Files:**
- Create: `app/areas/[slug]/page.tsx`

- [ ] **Step 1: Create the dynamic area page**

```typescript
// app/areas/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { areas, getArea } from '@/lib/areas'
import AreaHero from '@/components/areas/AreaHero'
import ServiceList from '@/components/areas/ServiceList'
import AreaFAQ from '@/components/areas/AreaFAQ'
import AreaCTA from '@/components/areas/AreaCTA'

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}

  return {
    title: `${area.name} — Romio & Asociados`,
    description: area.description,
    openGraph: {
      title: `${area.name} — Romio & Asociados`,
      description: area.description,
    },
  }
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getArea(slug)

  if (!area) notFound()

  return (
    <>
      <AreaHero area={area} />
      <ServiceList area={area} />
      <AreaFAQ area={area} />
      <AreaCTA area={area} />
    </>
  )
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Build and verify all 5 area pages are generated**

```bash
npm run build 2>&1 | grep -E "(areas|Route|error|Error)"
```

Expected: see 5 routes like `/areas/civil`, `/areas/salud`, `/areas/legal-tech`, `/areas/transito`, `/areas/divorcios` in the build output. No errors.

- [ ] **Step 4: Verify a page renders in dev**

```bash
npm run dev &
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/areas/legal-tech
kill %1
```

Expected: `200`

- [ ] **Step 5: Commit**

```bash
git add app/areas/
git commit -m "feat: add dynamic area pages with generateStaticParams"
```

---

## Task 14: Sitemap

**Files:**
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create sitemap**

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { areas } from '@/lib/areas'

const BASE_URL = 'https://romioasociados.com.ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const areaRoutes = areas.map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...areaRoutes,
  ]
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Build and verify sitemap is generated**

```bash
npm run build && npm run start &
sleep 5
curl -s http://localhost:3000/sitemap.xml | head -30
kill %1
```

Expected: XML with 6 URLs (landing + 5 areas).

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add sitemap.xml with all pages"
```

---

## Task 15: Vercel configuration + final build

**Files:**
- Create: `vercel.json` (only if needed)

- [ ] **Step 1: Verify clean production build**

```bash
npm run build
```

Expected: build completes without errors. Output should show all 6 routes as static (`○`):
- `○ /`
- `○ /areas/civil`
- `○ /areas/salud`
- `○ /areas/legal-tech`
- `○ /areas/transito`
- `○ /areas/divorcios`

- [ ] **Step 2: Check for any TypeScript or lint errors**

```bash
npx tsc --noEmit && npm run lint
```

Fix any errors (not warnings). Warnings from unused imports are acceptable but errors must be resolved.

- [ ] **Step 3: Verify `.gitignore` covers build artifacts**

```bash
cat .gitignore | grep -E "(.next|node_modules|.vercel)"
```

Expected: `.next`, `node_modules`, and `.vercel` should all be present. If missing, add them.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Romio & Asociados landing site v1"
```

---

## Quick Reference: Color Values

| Area | Accent | Light |
|------|--------|-------|
| civil | `#2563eb` | `#dbeafe` |
| salud | `#e63946` | `#fde8ea` |
| legal-tech | `#7c3aed` | `#ede9fe` |
| transito | `#f59e0b` | `#fef3c7` |
| divorcios | `#0d9488` | `#ccfbf1` |

## Key constants (all in `lib/areas.ts`)

| Constant | Value |
|----------|-------|
| `WHATSAPP_NUMBER` | `5492235000000` |
| `CONTACT_EMAIL` | `contacto@romioasociados.com.ar` |
| `WHATSAPP_URL` | Full URL with pre-filled message |
