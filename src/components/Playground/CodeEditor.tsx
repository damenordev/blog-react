'use client'

import { useEffect } from 'react'
import Editor, { OnChange } from '@monaco-editor/react'

interface ICodeEditorProps {
  initialCode: string
  onChange: (value: string) => void
  language?: string
  height?: string
}

export const CodeEditor = ({ initialCode, onChange, language = 'javascript', height = '100%' }: ICodeEditorProps) => {
  useEffect(() => {
    // Actualizar el código cuando cambia el ejercicio seleccionado
    onChange(initialCode)
  }, [initialCode, onChange])

  const handleEditorChange: OnChange = (value) => {
    onChange(value || '')
  }

  return (
    <div className="border border-border rounded-md overflow-hidden h-full">
      <Editor
        height={height}
        language={language}
        value={initialCode}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          tabSize: 2,
          automaticLayout: true,
          wordWrap: 'on',
        }}
      />
    </div>
  )
}
