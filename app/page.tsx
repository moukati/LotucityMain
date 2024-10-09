import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}