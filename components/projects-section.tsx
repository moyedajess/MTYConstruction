import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      image: "/modern-family-home-exterior-with-landscaping.jpg",
      description: "A beautiful 3,500 sq ft modern family home featuring open floor plans and sustainable materials.",
    },
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      image: "/modern-office-building-downtown-with-glass-facade.jpg",
      description: "15-story office complex in downtown area with state-of-the-art facilities and LEED certification.",
    },
    {
      title: "Luxury Kitchen Renovation",
      category: "Renovation",
      image: "/luxury-modern-kitchen-with-island-and-high-end-app.jpg",
      description: "Complete kitchen transformation featuring custom cabinetry and premium appliances.",
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      image: "/modern-retail-shopping-center-with-storefronts.jpg",
      description: "50,000 sq ft retail center with multiple storefronts and modern architectural design.",
    },
    {
      title: "Historic Home Restoration",
      category: "Renovation",
      image: "/restored-historic-home-with-original-architecture-.jpg",
      description:
        "Careful restoration of a 1920s historic home preserving original character while adding modern amenities.",
    },
    {
      title: "Industrial Warehouse",
      category: "Commercial",
      image: "/modern-industrial-warehouse-with-loading-docks.jpg",
      description: "100,000 sq ft warehouse facility with advanced logistics and distribution capabilities.",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects. Each project represents our commitment to
            quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
