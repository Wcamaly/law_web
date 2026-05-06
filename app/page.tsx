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
