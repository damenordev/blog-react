'use client'

import { useEffect, useRef, useState } from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

interface IPreviewProps {
  code: string
  showError?: boolean
}

export const Preview = ({ code, showError = true }: IPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<ReactDOM.Root | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!previewRef.current) return

    // Crear un nuevo root si no existe
    if (!rootRef.current) {
      rootRef.current = ReactDOM.createRoot(previewRef.current)
    }

    try {
      // Limpiar errores previos
      setErrorMessage(null)

      // Crear un componente temporal para renderizar el código
      const TempComponent = () => {
        // Usamos un iframe para aislar el código y evitar problemas
        return (
          <iframe
            title="preview"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
                  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                  <style>
                    body { font-family: system-ui, sans-serif; margin: 0; padding: 0; }
                    .error { color: red; background: #ffeeee; padding: 10px; border-radius: 4px; }
                    .container { padding: 10px; }
                  </style>
                </head>
                <body>
                  <div id="root"></div>
                  <script type="text/babel">
                    try {
                      ${code}
                      
                      const rootElement = document.getElementById('root');
                      const root = ReactDOM.createRoot(rootElement);
                      root.render(React.createElement(React.StrictMode, null, result));
                    } catch (error) {
                      const rootElement = document.getElementById('root');
                      rootElement.innerHTML = '<div class="error"><strong>Error:</strong> ' + error.message + '</div>';
                      console.error(error);
                    }
                  </script>
                </body>
              </html>
            `}
            className="w-full h-full border-none"
            sandbox="allow-scripts"
          />
        )
      }

      // Renderizar el componente temporal
      rootRef.current.render(<TempComponent />)
    } catch (err: unknown) {
      console.error('Error en la vista previa:', err)
      
      // Guardar el mensaje de error
      const errMsg = err instanceof Error ? err.message : 'Error desconocido'
      setErrorMessage(errMsg)
      
      // Renderizar un mensaje de error
      if (rootRef.current && showError) {
        rootRef.current.render(
          <div className="p-4 bg-red-50 text-red-600 rounded-md">
            <p className="font-semibold">Error:</p>
            <pre className="text-sm overflow-auto mt-2 whitespace-pre-wrap">
              {errMsg}
            </pre>
          </div>
        )
      }
    }

    // Limpiar al desmontar
    return () => {
      // No destruimos el root para evitar recrearlo constantemente
    }
  }, [code, showError])

  return (
    <div className="border border-border rounded-md bg-card h-full overflow-hidden">
      <div ref={previewRef} className="preview-container h-full" />
      {errorMessage && !rootRef.current && showError && (
        <div className="p-4 bg-red-50 text-red-600 rounded-md mt-4">
          <p className="font-semibold">Error:</p>
          <pre className="text-sm overflow-auto mt-2 whitespace-pre-wrap">
            {errorMessage}
          </pre>
        </div>
      )}
    </div>
  )
}
