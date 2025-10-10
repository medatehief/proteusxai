import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AITechScroll } from "@/components/ai-tech-scroll"
import { ServicesSection } from "@/components/services-section"
import { AutomationProcessSection } from "@/components/automation-process-section"
import { TestimonialsStatsSection } from "@/components/testimonials-stats-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background gradient-bg">
      <Header />
      <main>
        <HeroSection />
        <AITechScroll />
        <FeaturesSection />
        <ServicesSection />
        <AutomationProcessSection />
        <TestimonialsStatsSection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <footer className="py-8 px-4">
        <div className="container mx-auto flex justify-end">
          <a
            href="https://elevenlabs.io/startup-grants"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity hover:opacity-80"
          >
            <Image
              src="/elevenlabs-grant.webp"
              alt="ElevenLabs"
              width={250}
              height={100}
              className="w-[250px] h-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
