import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { BarChart, Users, Zap, TrendingUp } from 'lucide-react'

const services = [
  {
    title: "Business Strategy",
    description: "Develop a comprehensive strategy to drive your business forward.",
    icon: BarChart
  },
  {
    title: "Market Analysis",
    description: "Gain insights into your market and competitors to make informed decisions.",
    icon: TrendingUp
  },
  {
    title: "Team Building",
    description: "Build and nurture high-performing teams to achieve your goals.",
    icon: Users
  },
  {
    title: "Process Optimization",
    description: "Streamline your operations for maximum efficiency and productivity.",
    icon: Zap
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection