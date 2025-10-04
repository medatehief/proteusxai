import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      "Up to 5 automated workflows",
      "Basic analytics dashboard",
      "Email support",
      "Standard integrations",
      "1 user account",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing companies ready to scale their automation",
    features: [
      "Up to 25 automated workflows",
      "Advanced analytics & reporting",
      "Priority support",
      "Premium integrations",
      "5 user accounts",
      "Custom automation templates",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Unlimited automated workflows",
      "Enterprise analytics suite",
      "Dedicated success manager",
      "Custom integrations",
      "Unlimited user accounts",
      "White-label options",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Choose the perfect plan to accelerate your business with AI automation. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card border-border ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl font-semibold text-card-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-card-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
