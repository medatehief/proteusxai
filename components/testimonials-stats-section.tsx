import { Star } from "lucide-react"

export function TestimonialsStatsSection() {
  const testimonials = [
    {
      logo: "🏢",
      company: "Tech Startup",
      text: "Their AI solutions helped us automate 80% of our customer support, allowing our team to focus on complex issues.",
      author: "Mary Lee, Founder, SIA",
      rating: 5,
    },
    {
      logo: "🏪",
      company: "DIBS VTC",
      text: "With streamlined sales and the automation of repetitive tasks, we've seen a 40% increase in productivity.",
      author: "Jimmy, Store Owner",
      rating: 5,
    },
    {
      logo: "🌾",
      company: "Great Harvest",
      text: "Our website and marketing are amazing, and support is always there when we need them. Highly recommend!",
      author: "Amy, Store Manager",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all"
            >
              <div className="text-4xl mb-4">{testimonial.logo}</div>
              <div className="text-lg font-bold text-foreground mb-2">{testimonial.company}</div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-foreground font-medium">{testimonial.author}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">20+</div>
            <div className="text-muted-foreground">Happy customers</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">$3M+</div>
            <div className="text-muted-foreground">Saved from this automation</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
