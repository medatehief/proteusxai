"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/D4A27F" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0668E1" },
  { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
]

export function AITechScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Integrating the latest AI technologies with your business
        </p>

        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div ref={scrollRef} className="flex gap-12 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate the array for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-8 h-8" />
                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
