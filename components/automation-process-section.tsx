import { Handshake, MessageSquare, Target } from "lucide-react"

export function AutomationProcessSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-semibold">HOW IT WORKS</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 text-balance">
          Reliable AI Automations,
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-muted-foreground mb-16 text-balance">
          seamlessly integrated with your business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Let's Get to Know You */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Let's Get to Know You</h3>
            <p className="text-muted-foreground text-sm">
              We start with a discovery call to understand your business goals and identify automation opportunities.
            </p>
          </div>

          {/* Assess Your AI Readiness */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Assess Your AI Readiness</h3>
            <p className="text-muted-foreground text-sm">
              Our team evaluates your current workflows and infrastructure to create a tailored AI strategy.
            </p>
          </div>

          {/* Custom Solution Delivery */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Custom Solution Delivery</h3>
            <p className="text-muted-foreground text-sm">
              We build and deliver AI automations that integrate seamlessly with your existing systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
