import { Card, CardHeader, CardContent } from './ui/card'

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    testimonial: "Working with this team has been a game-changer for our business. Their insights and strategies have helped us double our growth in just six months."
  },
  {
    name: "Jane Smith",
    company: "Global Solutions Ltd.",
    testimonial: "The level of professionalism and expertise is unmatched. They truly understand our needs and deliver results that exceed expectations."
  },
  {
    name: "Mike Johnson",
    company: "Future Enterprises",
    testimonial: "I'm impressed by their innovative approach to problem-solving. They've helped us navigate complex challenges with ease."
  }
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection