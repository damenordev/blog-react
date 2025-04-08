export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 mt-12 border-t border-border/40 animate-footer-scroll">
      <div className="container mx-auto text-center text-muted-foreground px-4">
        <p>Hecho con ♥️ por damenor &copy; {currentYear} Todos los derechos reservados.</p>
        {/* Añade aquí enlaces a redes sociales o información adicional */}
      </div>
    </footer>
  )
}
