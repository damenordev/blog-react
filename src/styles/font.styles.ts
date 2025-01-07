import { Comfortaa, Acme } from 'next/font/google'

const fontPrimary = Comfortaa({ subsets: ['latin'], variable: '--font-primary' })
const fontSecondary = Acme({ subsets: ['latin'], variable: '--font-secondary', weight: ['400'] })

export const getFontsVariables = () => {
  return `${fontPrimary.variable} ${fontSecondary.variable}`
}
