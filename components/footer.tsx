import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MTY Construction</h3>
            <p className="text-muted-foreground text-sm">
              Professional construction services with over 25 years of experience. Building dreams into reality with
              quality and precision.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Residential Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Commercial Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Renovation & Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  General Contracting
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(786) 301-6361</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>jessica@mtyconstruction.us</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Miami-Dade County, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MTY Construction. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
