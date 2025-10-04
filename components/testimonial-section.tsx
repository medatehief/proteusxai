import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "ProteusX AI transformed our operations completely. We've seen a 250% increase in productivity and our team can now focus on strategic initiatives instead of repetitive tasks.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    rating: 5,
  },
  {
    quote:
      "The automation strategies are incredibly sophisticated yet easy to implement. Our ROI was positive within the first month of deployment.",
    author: "Marcus Rodriguez",
    role: "Operations Director",
    company: "InnovateCorp",
    rating: 5,
  },
  {
    quote:
      "What impressed us most was how affordable and scalable the solution is. We started small and now it's integral to our entire business process.",
    author: "Emily Watson",
    role: "CEO",
    company: "GrowthLab",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            See how businesses like yours are achieving remarkable results with ProteusX AI automation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-card-foreground leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
