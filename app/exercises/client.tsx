import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from '@codesandbox/sandpack-react'
import { Menu, Lightbulb, Play, Bot, Terminal } from 'lucide-react'

import { Dock, DockIcon, DockItem, DockLabel } from './Dock'

const data = [
  { title: 'Menu', icon: <Menu className="size-full" /> },
  { title: 'Abrir consola', icon: <Terminal className="size-full" /> },
  { title: 'Pistas', icon: <Lightbulb className="size-full" /> },
  { title: 'Consultar a la IA', icon: <Bot className="size-full" /> },
  { title: 'Revisar', icon: <Play className="size-full" /> },
]

const appCode = `export const App = () => {
  return (
    <div className="app-container">
      <h1>¡Hola Mundo!</h1>
    </div>
  )
}
`

const indexCode = `import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(<App />)`

const stylesCssCode = `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app-container {
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
`

const BASIC_FILES = {
  '/App.tsx': appCode,
  '/index.tsx': indexCode,
  '/styles.css': stylesCssCode,
}

export default function ExercisesPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* <header className="h-12 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <svg viewBox="-11 -10 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 text-primary">
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5" />
              <ellipse rx="10" ry="4.5" transform="rotate(60)" />
              <ellipse rx="10" ry="4.5" transform="rotate(120)" />
            </g>
          </svg>
          <h2>Exercises</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button className="" size="sm" variant="outline">
            Playground
          </Button>
          <Button className="" size="sm" variant="outline">
            Exercises
          </Button>
        </div>
      </header> */}
      <SandpackProvider template="react-ts" files={BASIC_FILES} theme="dark">
        <SandpackLayout style={{ width: '100%', height: 'calc(100vh - 0px)' }}>
          <div className="flex w-1/2">
            <SandpackFileExplorer style={{ width: '260px', height: 'calc(100vh - 0px)' }} />
            <SandpackCodeEditor
              style={{ width: '100%', height: 'calc(100vh - 0px)' }}
              showLineNumbers
              closableTabs
              showInlineErrors
              showTabs
              showRunButton={false}
            />
          </div>
          <SandpackPreview style={{ width: '50vh', height: 'calc(100vh - 0px)' }} showRefreshButton showOpenInCodeSandbox={false} />
        </SandpackLayout>
      </SandpackProvider>

      <Dock className="fixed bottom-4 left-0 right-0">
        {data.map((item, idx) => (
          <DockItem key={idx} className="aspect-square rounded-full bg-background border">
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>

      {/* <Sandpack
        template="react-ts"
        files={BASIC_FILES}
        theme="dark"
        options={{
          showNavigator: true, // <--- Añadido para mostrar el explorador de archivos
          showConsole: true,
          editorHeight: 'calc(100vh - 50px)',
          autorun: true,
          autoReload: true,
          resizablePanels: true,
          showLineNumbers: true,
          showConsoleButton: true,
          showInlineErrors: true,

        }}
      /> */}
    </div>
  )
}
