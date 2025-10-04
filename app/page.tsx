import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AITechScroll } from "@/components/ai-tech-scroll"
import { ServicesSection } from "@/components/services-section"
import { AutomationProcessSection } from "@/components/automation-process-section"
import { TestimonialsStatsSection } from "@/components/testimonials-stats-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"

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
    </div>
  )
}
