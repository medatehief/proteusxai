import { Sparkles } from "lucide-react"

const servicesTree = {
  name: "Discovery Call",
  children: [
    {
      name: "AI Readiness Audit",
      children: [
        {
          name: "Senior AI Engineers",
          children: [
            { name: "Custom Automations" },
            { name: "Sales & Marketing Automation" },
            { name: "Training" },
            { name: "Custom AI Agents" },
          ],
        },
      ],
    },
  ],
}

function Node({ node }: { node: any }) {
  const hasChildren = node.children && node.children.length > 0
  const showRectangle = hasChildren && node.children.length > 2

  return (
    <li className="relative flex flex-col items-center">
      {/* Node pill */}
      <div className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-2 z-10">
        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-black" />
        </div>
        <span className="text-foreground font-medium whitespace-nowrap">{node.name}</span>
      </div>

      {hasChildren && (
        <div className="relative mt-4 flex flex-col items-center w-full">
          {/* vertical line up into parent */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-6 bg-white/20" />

          {showRectangle ? (
          // Rectangle wrapper if >2 children
          <div className="relative border border-white/20 rounded-xl w-full mt-2 pt-4 pb-4 px-6 flex justify-center">
            {/* pt/pb control vertical space, px adds left/right padding */}
            <ul className="flex gap-5 justify-center items-center w-full">
              {node.children.map((child: any, i: number) => (
                <li key={i} className="relative flex flex-col items-center">
                  {node.children.length > 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-white/20" />
                  )}
                  <Node node={child} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // No rectangle, just render children directly
          <ul className="flex gap-0 justify-center mt-2">
            {node.children.map((child: any, i: number) => (
              <li key={i} className="relative flex flex-col items-center">
                {node.children.length > 1 && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-2 bg-white/20" />
                )}
                <Node node={child} />
              </li>
            ))}
          </ul>
        )}
        </div>
      )}
    </li>
  )
}

export function ServicesSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <ul className="flex flex-col items-center">
            <Node node={servicesTree} />
          </ul>
        </div>
      </div>
    </section>
  )
}