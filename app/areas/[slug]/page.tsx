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
