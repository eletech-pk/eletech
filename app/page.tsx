// static imports for above-the-fold or critical components
import { Hero2 } from "@/components/sections/Hero2"
import { Navbar } from "@/components/layout/Navbar"
import dynamic from 'next/dynamic'
// Dynamically import below-the-fold components to improve mobile Lighthouse performance
const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview').then(mod => mod.AboutPreview))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(mod => mod.HowItWorks))
const ValueAndProof = dynamic(() => import('@/components/sections/ValueAndProof').then(mod => mod.ValueAndProof))
const Integrations = dynamic(() => import('@/components/sections/Integrations').then(mod => mod.Integrations))
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ))
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => mod.CTA))
const TrustBadges = dynamic(() => import('@/components/sections/TrustBadges').then(mod => mod.TrustBadges))
const Services = dynamic(() => import('@/components/sections/Services').then(mod => mod.Services))
const FeaturedProjects = dynamic(() => import('@/components/sections/FeaturedProjects').then(mod => mod.FeaturedProjects))
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer))

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero2 />
      <TrustBadges />
      <AboutPreview />
      <ValueAndProof />
      <Services />
      <FeaturedProjects />
      <HowItWorks />
      <Integrations />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
