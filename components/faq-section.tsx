"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How is this different from using ChatGPT or Claude?",
      answer:
        "While ChatGPT and Claude are powerful AI assistants, our solutions integrate directly into your business workflows, automating repetitive tasks and connecting with your existing tools. We build custom AI agents that work 24/7 within your systems, not just chat interfaces.",
    },
    {
      question: "How does the AI readiness audit work?",
      answer:
        "Our AI readiness audit is a comprehensive evaluation of your current processes, technology stack, and team capabilities. We identify automation opportunities, assess technical requirements, and create a roadmap for successful AI implementation tailored to your business.",
    },
    {
      question: "How do I know if my business is ready to automate?",
      answer:
        "If you have repetitive tasks, manual data entry, or processes that follow consistent patterns, you're ready to automate. We work with businesses of all sizes and technical capabilities to identify and implement the right automation solutions.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including e-commerce, professional services, healthcare, finance, and manufacturing. Our custom approach means we can adapt our AI solutions to meet the unique needs of any industry.",
    },
  ]

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-semibold">FAQs</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          We've got answers
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have more questions? Contact us -{" "}
            <a href="#contact" className="text-primary hover:underline">
              help center
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
