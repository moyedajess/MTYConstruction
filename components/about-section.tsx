import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Shield } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Clock, label: "On-Time Delivery", value: "98%" },
    { icon: Shield, label: "Safety Record", value: "100%" },
  ]

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Building Excellence Since 1999</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                MTY Construction has been a trusted name in the construction industry for over two decades. We
                specialize in residential and commercial construction projects, delivering quality craftsmanship and
                exceptional service to our clients.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Our team of experienced professionals is committed to bringing your vision to life. From initial
                planning to final completion, we ensure every project meets the highest standards of quality and safety.
              </p>
              <p className="text-muted-foreground">
                We pride ourselves on our attention to detail, transparent communication, and ability to deliver
                projects on time and within budget.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <stat.icon className="h-12 w-12 text-primary mx-auto" />
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
