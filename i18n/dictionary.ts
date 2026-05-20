import common from './locales/es/common.json'
import footer from './locales/es/footer.json'
import navbar from './locales/es/navbar.json'
import metadata from './locales/es/metadata.json'
import areaUi from './locales/es/areas/_ui.json'
import areaCivil from './locales/es/areas/civil.json'
import areaSalud from './locales/es/areas/salud.json'
import areaLegalTech from './locales/es/areas/legal-tech.json'
import areaAccidentesLaborales from './locales/es/areas/accidentes-laborales.json'
import areaDivorcios from './locales/es/areas/divorcios.json'
import homeAbout from './locales/es/home/about.json'
import homeAreasGrid from './locales/es/home/areasGrid.json'
import homeContact from './locales/es/home/contact.json'
import homeHero from './locales/es/home/hero.json'
import homeHowWeWork from './locales/es/home/howWeWork.json'

export const esDictionary = {
  common,
  metadata,
  navbar,
  footer,
  home: {
    hero: homeHero,
    areasGrid: homeAreasGrid,
    howWeWork: homeHowWeWork,
    about: homeAbout,
    contact: homeContact,
  },
  areas: {
    ui: areaUi,
    content: {
      civil: areaCivil,
      salud: areaSalud,
      'legal-tech': areaLegalTech,
      'accidentes-laborales': areaAccidentesLaborales,
      divorcios: areaDivorcios,
    },
  },
} as const

export type EsDictionary = typeof esDictionary
