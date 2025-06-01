'use client'

import React, { useState, useEffect } from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackTests,
  SandpackConsole,
  useSandpack,
  SandpackFiles,
} from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'
import { Exercise } from '../types/Exercise'
import { Button } from '@/ui/button'
import { Badge } from '@/ui/badge'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { RefreshCw, Lightbulb, Lock, ChevronRight, BookOpen, CheckSquare, AlertCircle, Terminal, Monitor } from 'lucide-react'

interface ExerciseLayoutProps {
  exercise: Exercise
}

const ExerciseStatus: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  const { sandpack } = useSandpack()
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [discoveredHints, setDiscoveredHints] = useState<number[]>([])
  const [isHintSheetOpen, setIsHintSheetOpen] = useState(false)

  const hasRuntimeError = sandpack.status === 'error'

  let statusText = 'Ready'
  let StatusIcon = CheckSquare
  let statusVariant: 'default' | 'secondary' | 'destructive' | 'outline' = 'secondary'

  if (hasRuntimeError) {
    statusText = 'Error'
    StatusIcon = AlertCircle
    statusVariant = 'destructive'
  } else if (sandpack.status === 'running') {
    statusText = 'Running...'
    // StatusIcon = LoadingIcon // Podrías usar un icono de carga
    statusVariant = 'secondary'
  } else if (sandpack.status === 'idle') {
    // 'Idle' puede significar listo o que terminó (correcta o incorrectamente sin error de runtime)
    statusText = 'Ready / Finished'
    StatusIcon = CheckSquare
    statusVariant = 'secondary'
  }

  const hints = exercise.hints || []

  const handleRevealNextHint = () => {
    if (currentHintIndex < hints.length - 1) {
      const nextIndex = currentHintIndex + 1
      setCurrentHintIndex(nextIndex)
      if (!discoveredHints.includes(nextIndex)) {
        setDiscoveredHints([...discoveredHints, nextIndex])
      }
    } else {
      // Optional: cycle back or disable
    }
  }

  const handleSelectHint = (index: number) => {
    if (discoveredHints.includes(index) || index === 0) {
      setCurrentHintIndex(index)
    }
  }

  const handleOpenHintSheet = () => {
    if (discoveredHints.length === 0 && hints.length > 0) {
      setDiscoveredHints([0])
    }
    setIsHintSheetOpen(true)
  }

  useEffect(() => {
    setCurrentHintIndex(0)
    setDiscoveredHints([])
  }, [exercise.title]) // Usar title como dependencia temporal

  return (
    <div className="flex justify-between items-center mb-3 px-1 gap-2">
      <Badge variant={statusVariant} className="capitalize gap-1.5 pl-2">
        <StatusIcon className="h-3.5 w-3.5" />
        {statusText}
      </Badge>

      <div className="flex items-center gap-2">
        <Sheet open={isHintSheetOpen} onOpenChange={setIsHintSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" onClick={handleOpenHintSheet} className="gap-1.5">
              <Lightbulb className="h-4 w-4" />
              Pistas {discoveredHints.length > 0 ? `(${discoveredHints.length}/${hints.length})` : ''}
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Pistas para: {exercise.title}</SheetTitle>
              <SheetDescription>Desbloquea pistas para ayudarte a resolver el ejercicio paso a paso.</SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-4">
              {hints.map((hint, index) => (
                <div
                  key={index}
                  className={`
                    relative rounded-lg p-4 transition-all 
                    ${
                      discoveredHints.includes(index)
                        ? 'bg-background border border-slate-200 cursor-pointer hover:border-sky-500'
                        : 'bg-slate-100 border border-dashed border-slate-300 text-slate-500'
                    }
                    ${currentHintIndex === index && discoveredHints.includes(index) ? 'border-sky-500 ring-1 ring-sky-500' : ''}
                  `}
                  onClick={() => handleSelectHint(index)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`
                        flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 text-xs font-medium
                        ${discoveredHints.includes(index) ? 'bg-sky-600 text-white' : 'bg-slate-300 text-slate-600'}
                      `}
                    >
                      {discoveredHints.includes(index) ? index + 1 : <Lock className="h-3.5 w-3.5" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-1">{discoveredHints.includes(index) ? `Pista ${index + 1}` : `Pista bloqueada`}</h4>
                      {discoveredHints.includes(index) ? (
                        <p className="text-sm text-slate-700">{hint}</p>
                      ) : (
                        <p className="text-sm">Desbloquea esta pista para obtener ayuda.</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {discoveredHints.length < hints.length && (
                <Button variant="outline" className="w-full mt-4 gap-2" onClick={handleRevealNextHint} disabled={discoveredHints.length >= hints.length}>
                  <Lightbulb className="h-4 w-4" />
                  Desbloquear siguiente pista
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

// Nuevo componente interno para los botones que necesitan el contexto de Sandpack
const SandpackControls: React.FC<{
  onShowSolution: () => void // Callback para notificar al padre
}> = ({ onShowSolution }) => {
  const { sandpack } = useSandpack()

  // Reiniciar el código al estado inicial (el que tenía el Provider al montarse)
  const handleReset = () => {
    sandpack.resetAllFiles() // No necesita argumentos
  }

  // Mostrar la solución (notifica al padre para cambiar los files del Provider)
  const handleShowSolution = () => {
    onShowSolution() // Llama al callback del padre
  }

  return (
    <div className="flex justify-end items-center gap-2 mb-3 px-1 -mt-10">
      <Button variant="outline" size="sm" onClick={handleReset} className="gap-1.5">
        <RefreshCw className="h-4 w-4" />
        Reiniciar
      </Button>
      <Button variant="default" size="sm" onClick={handleShowSolution} className="gap-1.5">
        <BookOpen className="h-4 w-4" />
        Ver solución
      </Button>
    </div>
  )
}

export const ExerciseLayout: React.FC<ExerciseLayoutProps> = ({ exercise }) => {
  // Estado para controlar qué archivos se pasan al Provider y forzar remonte
  // TODO: Actualizar tipo Exercise para incluir 'initialFiles: SandpackFiles'
  const initialFiles = ((exercise as any).initialFiles as SandpackFiles) || {}
  const [currentFiles, setCurrentFiles] = useState<SandpackFiles>(initialFiles)
  const [providerKey, setProviderKey] = useState<string>(`exercise-${(exercise as any).id || exercise.title}`) // Clave inicial

  // Actualizar archivos y clave cuando cambia el ejercicio
  useEffect(() => {
    // TODO: Actualizar tipo Exercise
    const newInitialFiles = ((exercise as any).initialFiles as SandpackFiles) || {}
    const newKey = `exercise-${(exercise as any).id || exercise.title}`
    setCurrentFiles(newInitialFiles)
    setProviderKey(newKey)
    // Resetear hints también
    // (La lógica de ExerciseStatus ya depende de exercise.title, lo cual está bien por ahora)
  }, [exercise]) // Depende del objeto exercise completo

  const handleShowSolutionCallback = () => {
    // TODO: Actualizar tipo Exercise para incluir 'solutionFiles: SandpackFiles'
    const solutionFiles = ((exercise as any).solutionFiles as SandpackFiles) || {}
    setCurrentFiles(solutionFiles)
    setProviderKey(prevKey => `${prevKey}-solution`) // Cambia la clave para forzar remonte
  }

  return (
    <SandpackProvider
      key={providerKey} // Clave para forzar remonte al cambiar archivos raíz
      template="react" // O 'react-ts' si usas TS en los ejercicios
      files={currentFiles} // Usa el estado actual de los archivos
      theme={nightOwl}
      // Las opciones como activeFile se pueden manejar internamente o con props si es necesario
    >
      {/* Componente de Estado y Pistas (necesita Sandpack Context) */}
      <ExerciseStatus exercise={exercise} />

      {/* Componente con botones Reset/Solución */}
      {/* Reset usa useSandpack, Solución usa callback para cambiar el Provider */}
      <SandpackControls onShowSolution={handleShowSolutionCallback} />

      <Tabs defaultValue="preview" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="preview" className="gap-1.5">
            <Monitor className="h-4 w-4" /> Preview
          </TabsTrigger>
          <TabsTrigger value="tests" className="gap-1.5">
            <CheckSquare className="h-4 w-4" /> Tests
          </TabsTrigger>
          <TabsTrigger value="console" className="gap-1.5">
            <Terminal className="h-4 w-4" /> Console
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 mt-2 border rounded-md overflow-hidden">
          <SandpackLayout className="!rounded-none !border-0">
            <SandpackCodeEditor showLineNumbers showTabs wrapContent className="!h-[400px]" />

            <TabsContent value="preview" className="h-full p-0 m-0">
              <SandpackPreview className="!h-full" />
            </TabsContent>
            <TabsContent value="tests" className="h-full p-0 m-0">
              <SandpackTests className="!h-full" verbose />
            </TabsContent>
            <TabsContent value="console" className="h-full p-0 m-0">
              <SandpackConsole className="!h-full" />
            </TabsContent>
          </SandpackLayout>
        </div>
      </Tabs>
    </SandpackProvider>
  )
}
