import { Hero2 } from "@/components/sections/Hero2"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { Services } from "@/components/sections/Services"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import dynamic from 'next/dynamic'

// Dynamically import below-the-fold components to improve mobile Lighthouse performance
const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview').then(mod => mod.AboutPreview))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(mod => mod.HowItWorks))
const ValueProposition = dynamic(() => import('@/components/sections/ValueProposition').then(mod => mod.ValueProposition))
const WhyUs = dynamic(() => import('@/components/sections/WhyUs').then(mod => mod.WhyUs))
const Stats = dynamic(() => import('@/components/sections/Stats').then(mod => mod.Stats))
const Integrations = dynamic(() => import('@/components/sections/Integrations').then(mod => mod.Integrations))
const TeamPreview = dynamic(() => import('@/components/sections/TeamPreview').then(mod => mod.TeamPreview))
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ))
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => mod.CTA))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero2 />
      <TrustBadges />
      <Services />
      <Stats />
      <Integrations />
      <AboutPreview />
      <ValueProposition />
      <WhyUs />
      <HowItWorks />
      <TeamPreview />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
