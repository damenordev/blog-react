import { RefObject, useEffect } from 'react'

type Handler = (event: MouseEvent | TouchEvent) => void

// Ajustado: Aceptar RefObject<HTMLElement | null> para manejar el valor inicial null del ref
export function useOnClickOutside(ref: RefObject<HTMLElement | null>, handler: Handler): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current

      // No hacer nada si se hace clic en el elemento ref o en sus descendientes
      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler]) // Volver a ejecutar si ref o handler cambian
}
