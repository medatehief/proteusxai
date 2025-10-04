import { Zap, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background gradient-accent relative">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 text-balance">
          We unlock your business potential with
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-muted-foreground mb-16 text-balance">
          intelligent AI solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Growth Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-black/40 rounded-2xl p-6 mb-6">
              <div className="text-primary text-sm font-semibold mb-4">Growth</div>
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 60, 45, 70, 55, 85, 65, 90, 75, 95].map((height, i) => (
                  <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Nov. 10</span>
                <span>Nov. 11</span>
                <span>Today</span>
              </div>
            </div>
          </div>

          {/* Effortless Automation Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-black/40 rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-xs text-primary font-semibold">NEW</div>
                  <div className="text-foreground font-semibold">Task executed</div>
                  <div className="text-xs text-muted-foreground">Today, 11:50</div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Effortless Automation</h3>
            <p className="text-muted-foreground text-sm">
              Streamline operations by automating routine tasks, so your team can focus on what matters most.
            </p>
          </div>

          {/* Scalable Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-black/40 rounded-2xl p-6 mb-4 relative h-40">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                <path d="M 0,80 Q 50,75 100,60 T 200,20" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                <circle cx="200" cy="20" r="6" fill="#CCFF00" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#CCFF00" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Scalable as you grow</h3>
            <p className="text-muted-foreground text-sm">
              Enjoy flexible AI automations that grow with your business, adapting seamlessly to your evolving needs.
            </p>
          </div>

          {/* Workflow Integration Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-3">Workflow integration</h3>
            <p className="text-muted-foreground text-sm mb-6">Seamlessly connect all your existing apps.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/notion/FFFFFF" alt="Notion" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/slack/4A154B" alt="Slack" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/x/FFFFFF" alt="X" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-black/60 rounded-xl flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Human in the Loop Card */}
          <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all lg:col-span-2 hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-3">Human in the Loop</h3>
            <p className="text-muted-foreground text-sm mb-6">Seamless collaboration between staff and AI</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-16 h-16 rounded-full border-4 border-purple-500 overflow-hidden bg-gray-700">
                  <img src="/diverse-woman-portrait.png" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-cyan-500 overflow-hidden bg-gray-700">
                  <img src="/man.jpg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden bg-gray-700">
                  <img src="/diverse-group.png" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-gray-600 bg-gray-800 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-500" />
                </div>
              </div>
              <div className="bg-primary text-black px-4 py-2 rounded-full font-semibold text-sm">Eliah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
