import { CheatSheetArticle } from '@/components'
import { cheatSheet } from '@/data'

export default function HomePage() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 pt-12 md:pt-20 pb-12">
      <div className="grid place-items-center mb-4">
        <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary size-40 md:size-80 xl:size-96">
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <div className="mt-8 mb-12 text-center">
          <h2 className="text-5xl md:text-7xl text-balance font-bold mb-1">React 19 Cheat Sheet</h2>
          <h3 className="text-2xl md:text-4xl text-balance mb-4">⚡️Guía Rápida con Ejemplos de Código</h3>
        </div>
      </div>
      <div className="space-y-12">
        {cheatSheet.map((article, index) => (
          <CheatSheetArticle key={index} {...article} />
        ))}
      </div>
    </section>
  )
}
