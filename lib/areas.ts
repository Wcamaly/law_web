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
