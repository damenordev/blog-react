import { 
  Hero, 
  Features, 
  FeaturedArticles, 
  Resources, 
  Testimonials, 
  CTA 
} from '@/components/Home'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedArticles />
      <Testimonials />
      <Resources />
      <CTA />
    </main>
  )
}
