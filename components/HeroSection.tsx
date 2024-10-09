import { Button } from './ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Elevate Your Business with Our Professional Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide top-notch solutions to help your business grow and succeed in today&apos;s competitive market.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection