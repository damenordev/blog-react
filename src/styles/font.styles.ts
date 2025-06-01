import { Comfortaa, Poppins } from 'next/font/google'
import { cn } from './cn.styles'

const fontSans = Poppins({ variable: '--font-sans', subsets: ['latin'], weight: '400' })
const fontMono = Comfortaa({ variable: '--font-mono', subsets: ['latin'] })

export const fonts = cn(fontSans.variable, fontMono.variable)
