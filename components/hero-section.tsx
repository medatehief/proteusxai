import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute left-36 top-32 hidden lg:block">
        <div className="w-50 h-50 rounded-lg shadow-lg rotate-[-8deg] overflow-hidden bg-background/70 backdrop-blur-sm">
        <img decoding="async" 
        
          src="https://framerusercontent.com/images/71Lkazp81ZpTwq5E8mgETaQgA8.jpg" 
          alt="" 
          className="w-full h-full object-cover 
                        [mask-image:radial-gradient(circle_at_center,white_50%,transparent_100%)] 
                        [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]"></img>
        </div>
      </div>

     <div className="absolute right-64 top-40 hidden lg:block">
        <div className="w-28 h-40 rounded-lg shadow-lg rotate-[8deg] overflow-hidden bg-background/70 backdrop-blur-sm">
          <img
            decoding="async"
            src="https://framerusercontent.com/images/Br0m8k72i6obkxvmy0bdrdCw50Y.jpg"
            alt=""
            className="w-full h-full object-cover 
                      [mask-image:radial-gradient(circle_at_center,white_50%,transparent_100%)] 
                      [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]"
          />
        </div>
      </div>
      <div className="absolute left-32 bottom-20 hidden lg:block">
        <div className="w-60 h-80 rounded-lg shadow-lg -rotate-10 overflow-hidden relative">
        <img decoding="async" 
          sizes="187.1648px" 
          /*srcset="https://framerusercontent.com/images/khvm0RCeCoJIh3gn2goGmWrcG6g.png?scale-down-to=1024 674w,https://framerusercontent.com/images/khvm0RCeCoJIh3gn2goGmWrcG6g.png 748w" */
          src="https://framerusercontent.com/images/khvm0RCeCoJIh3gn2goGmWrcG6g.png?scale-down-to=1024" 
          alt=""
          className="w-full h-full object-cover 
                      [mask-image:radial-gradient(circle_at_center,white_50%,transparent_100%)] 
                      [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]" ></img>
          </div>
      </div>

      <div className="absolute right-32 bottom-32 hidden lg:block">
        <div className="w-60 h-60 rounded-lg shadow-lg -rotate-[-10deg] overflow-hidden relative">
          <img
            decoding="async"
            src="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg?scale-down-to=512"
            srcSet="https://framerusercontent.com/images/9TKZna4TfSaouPHKZ1nNGn5s4.jpg 662w"
            sizes="222px"
            alt=""
            className="w-full h-full object-cover 
                      [mask-image:radial-gradient(circle_at_center,white_50%,transparent_100%)] 
                      [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover]"
          />
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
            <div className="bg-gradient-to-br from-green-900/70 to-neutral-900/70 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">$59,410</div>
              <div className="text-sm text-muted-foreground mt-1">Average Revenue Increase</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/70 to-neutral-900/70 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">5.1%</div>
              <div className="text-sm text-muted-foreground mt-1">Efficiency Improvement</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/70 to-neutral-900/70 border border-primary/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary">$2,950</div>
              <div className="text-sm text-muted-foreground mt-1">Monthly Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
