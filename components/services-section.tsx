import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Wrench, Paintbrush, Hammer, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and residential additions built to your specifications.",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities designed for success.",
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our comprehensive renovation services.",
    },
    {
      icon: Paintbrush,
      title: "Interior Finishing",
      description: "Professional interior finishing services including flooring, painting, and fixtures.",
    },
    {
      icon: Hammer,
      title: "General Contracting",
      description: "Full-service general contracting for projects of all sizes and complexities.",
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services to address urgent construction needs.",
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Our Construction Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs. From residential
            homes to commercial projects, we deliver excellence in every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="space-y-4">
                <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
