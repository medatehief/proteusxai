"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991" },
  { name: "Anthropic (Claude)", logo: "https://cdn.simpleicons.org/anthropic/D4A27F" },
  { name: "Midjourney", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-n1T-MK9laewqYOTLuy7YMKi0ydcdrSs5g&s" },
  { name: "Perplexity AI", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/perplexity.svg" },
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Google Gemini", logo: "https://cdn.simpleicons.org/googlegemini/4285F4" },
  { name: "DeepSeek", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/deepseek-logo-icon.png" },
  { name: "LlamaIndex", logo: "https://avatars.githubusercontent.com/u/113514651?s=200&v=4" },
  { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FF6C37" },
  { name: "Pinecone", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavXv77fGBW_ZEiELeiEm0RIov9o690TgZN7UEWV2KJsn-j2FXrn4VA3OxAhy7eAoLkVs&usqp=CAU" },
]

export function AITechScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let position = 0
    let animationFrameId: number

    const baseSpeed = 0.20
    const slowFactor = 0.25
    let targetSpeed = baseSpeed
    let currentSpeed = baseSpeed

    const step = () => {
      // ease toward target speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.05
      position += currentSpeed

      const contentWidth = wrapper.scrollWidth / 2
      if (position >= contentWidth) {
        position = 0
      }

      wrapper.style.transform = `translateX(${-position}px)`
      animationFrameId = requestAnimationFrame(step)
    }

    const handleEnter = () => { targetSpeed = baseSpeed * slowFactor }
    const handleLeave = () => { targetSpeed = baseSpeed }

    wrapper.addEventListener("mouseenter", handleEnter)
    wrapper.addEventListener("mouseleave", handleLeave)

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      wrapper.removeEventListener("mouseenter", handleEnter)
      wrapper.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Powering innovation with cutting-edge AI models & tools
        </p>

        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Inner wrapper that we translate */}
          <div className="overflow-hidden">
            <div
              ref={wrapperRef}
              className="flex gap-12 will-change-transform"
              style={{ transform: "translateX(0)" }}
            >
              {[...technologies, ...technologies].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}