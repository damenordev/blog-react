'use client'

import dynamic from 'next/dynamic'

import { PlaygroundEditorLoading } from '@/components/playground'

const DynamicPlaygroundEditor = dynamic(() => import('@/components/playground').then(mod => mod.PlaygroundEditor), {
  ssr: false,
  loading: () => <PlaygroundEditorLoading />,
})

const appCode = `import { HelloWorld } from './components/HelloWorld'

export const App = () => {
  return (
    <div className="app-container">
      <HelloWorld />
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
  text-align: center;
}
`

const helloWorldCode = `export const HelloWorld = () => {
  return <h1>Hello World</h1>
}`

const BASIC_FILES = {
  '/App.tsx': appCode,
  '/index.tsx': indexCode,
  '/styles.css': stylesCssCode,
  '/components/HelloWorld.tsx': helloWorldCode,
}

export const PlaygroundClient = () => {
  return <DynamicPlaygroundEditor files={BASIC_FILES} />
}
