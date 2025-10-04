import { Sparkles } from "lucide-react"

const services = [
  "Discovery Call",
  "AI Readiness Audit",
  "Sales & Marketing Automation",
  "Training",
  "Custom Automations",
  "Senior AI Engineers",
  "Custom AI Agents",
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service}
              className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-2 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
