import { Card, CardContent } from "@/components/ui/card"
import { Zap, TrendingUp, Shield, Cog, BarChart3, Users } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Simplify Workflows",
    description: "Automate repetitive tasks and streamline complex processes with intelligent AI-driven solutions.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description:
      "Increase team efficiency by 300% with smart automation that learns and adapts to your business needs.",
  },
  {
    icon: Shield,
    title: "Competitive Advantage",
    description: "Transform operational challenges into strategic advantages with cutting-edge AI automation.",
  },
  {
    icon: Cog,
    title: "Smart Integration",
    description: "Seamlessly integrate with your existing tools and systems without disrupting current workflows.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Make informed decisions with real-time analytics and predictive intelligence built into every process.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable better collaboration with AI-powered tools that connect teams and streamline communication.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Transform Your Business Operations
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Discover how ProteusX AI automation strategies can revolutionize your workflow and drive unprecedented
            growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">{benefit.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
