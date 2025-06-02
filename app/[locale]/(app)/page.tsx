import { HeroSection } from '@/sections'
import { MagicText } from '@/ui'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="container mx-auto max-w-5xl mt-40">
        <MagicText text="Impulsa tu maestría en React con el poder de la Inteligencia Artificial. Crea aplicaciones web dinámicas y eficientes a través de nuestro aprendizaje interactivo. Con la IA como tu copiloto y tu curiosidad como motor, no solo escribirás código, ¡diseñarás el futuro del desarrollo web! Domina React y redefine lo posible." />
      </div>
      <div className="h-[100vh]" />
    </>
  )
}
