# Romio & Asociados — Sitio Web Institucional

**Fecha:** 2026-05-05
**Stack:** Next.js 15 (App Router) + Tailwind CSS v4 + Vercel
**Idioma:** Español (estructura preparada para agregar inglés)

---

## Resumen

Sitio web institucional para el estudio jurídico **Romio & Asociados**, con base en Mar del Plata. El objetivo es transmitir profesionalismo y cercanía, generar confianza en potenciales clientes y facilitar el contacto directo por WhatsApp o email.

---

## Estilo visual

**Dirección:** Profesional & Cercano — limpio, accesible, humano.

### Paleta base
| Token | Color | Uso |
|-------|-------|-----|
| `brand-navy` | `#1e3a5f` | Navbar, footer, títulos principales, borde institucional |
| `brand-navy-light` | `#2c4f7c` | Fondos de hero, gradientes |
| `white` | `#ffffff` | Fondo de páginas |
| `gray-50` | `#f8f9fa` | Fondos de secciones alternas |

### Acentos por área
Cada área tiene su propio color de acento que se aplica en: borde izquierdo de cards, hero de página de área, bullets de servicios, CTAs de esa sección, FAQ highlight.

| Área | Slug | Color | Hex |
|------|------|-------|-----|
| Derecho Civil / Sucesiones / Usucapio | `civil` | Azul medio | `#2563eb` |
| Derecho a la Salud | `salud` | Rojo coral | `#e63946` |
| Legal Tech | `legal-tech` | Violeta | `#7c3aed` |
| Accidentes de Tránsito | `transito` | Ámbar | `#f59e0b` |
| Divorcios | `divorcios` | Teal | `#0d9488` |

### Tipografía
- **Títulos:** fuente serif (ej: Playfair Display vía `next/font/google`)
- **Cuerpo y UI:** fuente sans-serif (ej: Inter vía `next/font/google`)

### Logo
Texto estilizado "Romio & Asociados" en tipografía serif, color `brand-navy`. Icono: balanza minimalista (SVG inline). Sin imagen externa — resuelto 100% en código para independencia de assets.

---

## Estructura de páginas

```
/                           Landing principal (scroll)
/areas/civil                Derecho Civil, Sucesiones, Usucapio
/areas/salud                Derecho a la Salud
/areas/legal-tech           Legal Tech
/areas/transito             Accidentes de Tránsito
/areas/divorcios            Divorcios
```

No hay página `/nosotros` separada — la sección institucional vive dentro de la landing.

---

## Secciones de la landing (`/`)

### 1. Navbar
- Logo (texto serif + icono balanza) a la izquierda
- Links de navegación: Inicio · Áreas · Nosotros · Contacto (anclas a secciones de la misma página)
- Sticky en desktop, hamburger en mobile
- Fondo: `brand-navy`, texto blanco

### 2. Hero
- Fondo: gradiente `brand-navy` → `brand-navy-light`
- Texto principal (serif, grande): frase de impacto — ej. *"Su problema legal, nuestra prioridad."*
- Subtítulo: descripción breve del estudio y cobertura geográfica
- Dos CTAs: **Consulta gratis** (primario, blanco sólido) y **Ver áreas** (secundario, borde blanco)
- El CTA primario abre WhatsApp directamente

### 3. Áreas de práctica
- Grid de 5 cards (responsive: 1 columna en mobile, 2 en tablet, 3 en desktop — última fila queda centrada)
- Cada card: borde izquierdo con el color de acento del área, ícono, nombre del área, descripción de una línea, link "Ver más →"
- Fondo de sección: `gray-50`

### 4. Cómo trabajamos
- 4 pasos horizontales: **Consulta → Análisis → Estrategia → Resultado**
- Ícono + número + título + descripción breve por paso
- Fondo: blanco

### 5. Nosotros
- Bloque institucional: párrafo que transmite solidez del equipo como unidad (sin perfiles individuales)
- 3 métricas destacadas: +X años de experiencia · +X casos resueltos · 5 áreas de práctica
- Valores del estudio: compromiso, claridad, resultados
- Fondo: `brand-navy` (texto blanco) — genera contraste visual claro

### 6. Contacto
- Dos botones grandes: **WhatsApp** (verde `#25d366`) y **Email** (blanco sobre navy)
- WhatsApp usa link `https://wa.me/NUMERO?text=Hola, me gustaría consultar sobre...`
- Email usa `mailto:CORREO`
- Fondo: `gray-50`

### 7. Footer
- Logo + tagline breve
- Links rápidos a páginas de áreas
- Texto legal mínimo (copyright)
- Fondo: `brand-navy`

---

## Páginas de área (`/areas/[slug]`)

Todas usan el mismo layout con el color de acento del área inyectado vía props.

### Secciones por página de área

1. **Hero del área** — fondo gradiente `brand-navy` → color de acento, badge del área, título, subtítulo descriptivo
2. **¿En qué te ayudamos?** — lista de servicios específicos del área con bullet en color de acento
3. **Preguntas frecuentes** — 3-5 preguntas comunes, estilo acordeón simple, borde en color de acento
4. **CTA final** — bloque en color de acento sólido con botón a WhatsApp

---

## Arquitectura técnica

### Estructura de archivos

```
app/
├── layout.tsx                    ← Navbar + Footer + metadata global
├── page.tsx                      ← Landing (compone todas las secciones)
├── globals.css
└── areas/
    └── [slug]/
        └── page.tsx              ← Página dinámica de área

components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── home/
│   ├── HeroSection.tsx
│   ├── AreasGrid.tsx
│   ├── HowWeWork.tsx
│   ├── AboutSection.tsx
│   └── ContactSection.tsx
└── areas/
    ├── AreaHero.tsx
    ├── ServiceList.tsx
    ├── AreaFAQ.tsx
    └── AreaCTA.tsx

lib/
└── areas.ts                      ← Fuente única de verdad para toda la data de áreas
```

### `lib/areas.ts` — estructura de datos

```typescript
export type Area = {
  slug: string
  name: string
  shortName: string
  accent: string           // color hex del acento
  accentLight: string      // versión clara para fondos
  icon: string             // emoji o nombre de ícono
  tagline: string          // frase corta para cards
  description: string      // párrafo para la página del área
  services: string[]       // lista de servicios
  faq: { q: string; a: string }[]
}

export const areas: Area[] = [ /* ... */ ]
```

### Generación estática
- `generateStaticParams` en `app/areas/[slug]/page.tsx` genera todas las páginas en build time
- El sitio se despliega como estático en Vercel — sin servidor, latencia mínima

### SEO
- `generateMetadata` por página usando datos de `lib/areas.ts` — cada área tiene título y descripción únicos
- Una sola `og:image` estática para todo el sitio (v1 — og:images dinámicas por área quedan fuera de alcance)
- `sitemap.xml` generado con el generador nativo de Next.js (`app/sitemap.ts`)

### Fuentes
Cargadas con `next/font/google` para optimización automática:
- `Playfair_Display` — títulos
- `Inter` — cuerpo y UI

### Contacto
- WhatsApp: `https://wa.me/5492235000000?text=Hola%2C%20me%20gustaría%20consultar...` (número mockeado)
- Email: `mailto:contacto@romioasociados.com.ar` (mockeado)
- Ambos abren en nueva pestaña

---

## Decisiones y restricciones

| Decisión | Elección | Motivo |
|----------|----------|--------|
| Gestión de contenido | Todo en código (`lib/areas.ts`) | Sin costo extra, sin dependencias. Fácil migrar a MDX/CMS en el futuro |
| Páginas | App Router con `generateStaticParams` | Máxima performance, deploy simple en Vercel |
| Internacionalización | Solo español por ahora | Mercado principal Argentina. Estructura preparada para `next-intl` cuando se necesite |
| Perfiles del equipo | Sección institucional sin fotos individuales | El estudio prefiere mostrar solidez como equipo |
| Dirección física | No incluida | Decisión del cliente por ahora |
| Logo | SVG inline generado en código | Sin dependencia de assets externos |

---

## Fuera de alcance (v1)

- Blog o sección de noticias
- Panel de administración / CMS
- Formulario de contacto con backend (solo WhatsApp y email por ahora)
- Múltiples idiomas
- Perfiles individuales de abogados
- Sistema de turnos online
