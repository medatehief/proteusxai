import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTAFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-20 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join thousands of businesses already using ProteusX AI to automate workflows, boost productivity, and
              drive unprecedented growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-border py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2025 ProteusX AI. All rights reserved.</p>
            <div className="text-xl font-bold text-foreground">ProteusX AI</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
