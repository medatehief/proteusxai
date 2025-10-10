import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsStatsSection() {
  const testimonials = [
    {
      logo: "https://framerusercontent.com/images/OcBIpBHaptGIiUJIqPUX8gdT20Q.png",
      company: "GSL",
      text: "Their comprehensive automation setup saves us hours on document and data processing. It's also reduced errors and lost package claims drastically.",
      author: "Warren Zhou, Head of Engineering",
      rating: 5,
    },
    {
      logo: "https://framerusercontent.com/images/0HLl6V8Kjok1LrivdyZBQGOnwxw.png?scale-down-to=512",
      company: "DIDA NYC",
      text: "Kevin absolutely killed it with the automation of our e-commerce workflow and our customer support line. It's good to have my personal phone not blowing up 24/7.",
      author: "Mikhail Pinkhasov, Owner",
      rating: 5,
    },
    {
      logo: "https://framerusercontent.com/images/6liIdL3yAPRMXmpBszWKEfWIIi4.png",
      company: "Sweet Mandarin",
      text: "Our website and our ordering and delivery system were a mess until ProteusX AI helped us systemise our workflows at the restaurant and online.",
      author: "Alan Yeung, CEO",
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
              <div className="w-24 h-24 mb-4 relative mx-auto">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="text-lg font-bold text-foreground mb-2">{testimonial.company}</div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-foreground font-medium text-center">{testimonial.author}</div>
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
