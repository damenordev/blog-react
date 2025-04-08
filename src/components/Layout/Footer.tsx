import { Github, Linkedin, ShieldCheck } from 'lucide-react' // Importar iconos
import Link from 'next/link' // Importar Link

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 mt-16 border-t border-border/40"> {/* Aumentado padding y margen superior */}
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-6 mb-6"> {/* Contenedor para iconos sociales */}
          <Link href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="size-6 hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="size-6 hover:text-foreground transition-colors" />
          </Link>
          {/* Añade más iconos aquí */}
        </div>
        <p className="mb-4">Hecho con ♥️ por damenor &copy; {currentYear} Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 text-sm"> {/* Contenedor para otros enlaces */}
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ShieldCheck className="size-4" /> Política de Privacidad
          </Link>
          {/* <Link href="/terms" className="hover:text-foreground transition-colors">Términos de Servicio</Link> */}
        </div>
      </div>
    </footer>
  )
}
