import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-full border border-primary/20 bg-background/40 backdrop-blur-xl shadow-lg shadow-primary/5">
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">PROTEUSX AI</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How it works
                </a>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full">
                Free Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
