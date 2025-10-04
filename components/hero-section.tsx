import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute left-8 top-32 hidden lg:block">
        <div className="w-20 h-32 bg-card border border-primary/20 rounded-lg p-2 rotate-12 shadow-lg">
          <div className="w-full h-6 bg-primary/20 rounded mb-2"></div>
          <div className="w-full h-4 bg-muted rounded mb-1"></div>
          <div className="w-3/4 h-4 bg-muted rounded mb-1"></div>
          <div className="w-1/2 h-4 bg-muted rounded"></div>
        </div>
      </div>

      <div className="absolute right-8 top-40 hidden lg:block">
        <div className="w-24 h-36 bg-card border border-primary/20 rounded-lg p-2 -rotate-6 shadow-lg">
          <div className="w-full h-8 bg-primary/30 rounded mb-2"></div>
          <div className="w-full h-3 bg-muted rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-muted rounded mb-1"></div>
          <div className="w-full h-3 bg-muted rounded"></div>
        </div>
      </div>

      <div className="absolute left-32 bottom-20 hidden lg:block">
        <div className="w-28 h-20 bg-card border border-primary/20 rounded-lg p-2 rotate-6 shadow-lg">
          <div className="w-full h-4 bg-primary/20 rounded mb-1"></div>
          <div className="w-3/4 h-3 bg-muted rounded mb-1"></div>
          <div className="w-1/2 h-3 bg-muted rounded"></div>
        </div>
      </div>

      <div className="absolute right-32 bottom-32 hidden lg:block">
        <div className="w-32 h-24 bg-card border border-primary/20 rounded-lg p-3 -rotate-12 shadow-lg">
          <div className="text-xs text-primary font-semibold mb-1">Credentials</div>
          <div className="w-full h-2 bg-muted rounded mb-1"></div>
          <div className="w-2/3 h-2 bg-muted rounded"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Drive Growth with
            <br />
            <span className="text-primary">Smart AI Automation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            ProteusX AI delivers affordable, cutting-edge automation strategies crafted for businesses. Simplify
            workflows, boost productivity, and transform challenges into competitive advantages.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg"
            >
              FREE DISCOVERY CALL
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/50 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">$59,410</div>
              <div className="text-sm text-muted-foreground mt-1">Average Revenue Increase</div>
            </div>
            <div className="bg-card/50 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">5.1%</div>
              <div className="text-sm text-muted-foreground mt-1">Efficiency Improvement</div>
            </div>
            <div className="bg-card/50 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">$2,950</div>
              <div className="text-sm text-muted-foreground mt-1">Monthly Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
