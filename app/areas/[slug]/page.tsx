// app/areas/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { areas, getArea } from '@/lib/areas'
import AreaHero from '@/components/areas/AreaHero'
import ServiceList from '@/components/areas/ServiceList'
import AreaFAQ from '@/components/areas/AreaFAQ'
import AreaCTA from '@/components/areas/AreaCTA'
import { t } from '@/i18n'

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

  const title = t('metadata.areaPage.titleSuffix', { name: area.name })

  return {
    title,
    description: area.description,
    openGraph: {
      title,
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
