import { Hero } from "@/components/sections/Hero"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { Services } from "@/components/sections/Services"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ValueProposition } from "@/components/sections/ValueProposition"
import { WhyUs } from "@/components/sections/WhyUs"
import { Stats } from "@/components/sections/Stats"
import { Integrations } from "@/components/sections/Integrations"
import { TeamPreview } from "@/components/sections/TeamPreview"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
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
