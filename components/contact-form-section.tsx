"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary">Get a free AI</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">Discovery Call</h2>
          <p className="text-center text-muted-foreground mb-12">
            Use our AI and automation calculator to see how much time and money you could save with AI
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            >
              <option value="">Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />

            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1" />
              <p>
                I don't mind receiving messages and updates from ProteusX AI. I understand I can unsubscribe at any
                time.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 rounded-xl text-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
