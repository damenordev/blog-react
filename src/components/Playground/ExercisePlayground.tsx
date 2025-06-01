'use client'

import { useState, useEffect } from 'react'
// Importaciones de Sandpack
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer, SandpackConsole } from '@codesandbox/sandpack-react'
import type { SandpackFiles } from '@codesandbox/sandpack-react' // Tipo para los archivos

import { Button } from '@/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { ALL_EXERCISES, IExercise } from '@/exercises'
import { Badge } from '@/ui/badge'
import { BookOpen, RefreshCw, Lightbulb, Lock, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/sheet'

export const ExercisePlayground = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState(ALL_EXERCISES[0].id)
  const [files, setFiles] = useState<SandpackFiles>({}) // Estado para los archivos de Sandpack
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [discoveredHints, setDiscoveredHints] = useState<number[]>([])
  const [isHintSheetOpen, setIsHintSheetOpen] = useState(false)

  // Obtener el ejercicio seleccionado
  const selectedExercise = ALL_EXERCISES.find((exercise: IExercise) => exercise.id === selectedExerciseId) || ALL_EXERCISES[0]

  // Adaptar la función para inicializar/cambiar los archivos
  const initializeFiles = (exercise: IExercise) => {
    // Asegurarnos de que el tipo coincida (TExerciseFiles a SandpackFiles)
    setFiles(exercise.initialFiles)
  }

  // Manejar el cambio de ejercicio
  const handleExerciseChange = (value: string) => {
    setSelectedExerciseId(value)
    const newExercise = ALL_EXERCISES.find((exercise: IExercise) => exercise.id === value) || ALL_EXERCISES[0]
    initializeFiles(newExercise)
    setCurrentHintIndex(0)
    setDiscoveredHints([])
  }

  // Reiniciar el código al estado inicial
  const handleReset = () => {
    initializeFiles(selectedExercise)
    setCurrentHintIndex(0)
    setDiscoveredHints([])
  }

  // Mostrar la solución
  const handleShowSolution = () => {
    setFiles(selectedExercise.solutionFiles as SandpackFiles)
  }

  // Revelar la siguiente pista
  const handleRevealNextHint = () => {
    if (currentHintIndex < selectedExercise.hints.length - 1) {
      const nextIndex = currentHintIndex + 1
      setCurrentHintIndex(nextIndex)
      if (!discoveredHints.includes(nextIndex)) {
        setDiscoveredHints([...discoveredHints, nextIndex])
      }
    } else {
      setCurrentHintIndex(0)
    }
  }

  // Seleccionar una pista específica
  const handleSelectHint = (index: number) => {
    if (discoveredHints.includes(index) || index === 0) {
      setCurrentHintIndex(index)
    }
  }

  // Descubrir la primera pista si no hay ninguna descubierta
  const handleOpenHintSheet = () => {
    if (discoveredHints.length === 0) {
      setDiscoveredHints([0])
    }
    setIsHintSheetOpen(true)
  }

  // Inicializar los archivos cuando cambia el ejercicio seleccionado o al montar
  useEffect(() => {
    initializeFiles(selectedExercise)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExerciseId]) // Depender de selectedExerciseId para reiniciar al cambiar

  // Mapeo de dificultad a color de badge
  const difficultyColor = {
    principiante: 'bg-green-100 text-green-800',
    intermedio: 'bg-blue-100 text-blue-800',
    avanzado: 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Header con título y descripción */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">{selectedExercise.title}</h1>
          <Badge className={difficultyColor[selectedExercise.difficulty as keyof typeof difficultyColor]}>{selectedExercise.difficulty}</Badge>
        </div>
        <p className="text-muted-foreground">{selectedExercise.description}</p>
      </div>

      {/* Controles */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div className="w-full md:w-1/2">
          <Select value={selectedExerciseId} onValueChange={handleExerciseChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona un ejercicio" />
            </SelectTrigger>
            <SelectContent>
              {ALL_EXERCISES.map((exercise: IExercise) => (
                <SelectItem key={exercise.id} value={exercise.id}>
                  {exercise.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={handleReset} className="gap-1.5">
            <RefreshCw className="h-4 w-4" />
            Reiniciar
          </Button>

          {/* Sheet para las pistas */}
          <Sheet open={isHintSheetOpen} onOpenChange={setIsHintSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5" onClick={handleOpenHintSheet}>
                <Lightbulb className="h-4 w-4" />
                Pistas
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Pistas para resolver el ejercicio</SheetTitle>
                <SheetDescription>Desbloquea pistas para ayudarte a resolver el ejercicio paso a paso</SheetDescription>
              </SheetHeader>

              <div className="py-6 space-y-4">
                {selectedExercise.hints.map((hint, index) => (
                  <div
                    key={index}
                    className={`
                      relative rounded-lg p-4 transition-all 
                      ${
                        discoveredHints.includes(index)
                          ? 'bg-background border cursor-pointer hover:border-primary'
                          : 'bg-muted/50 border border-dashed text-muted-foreground'
                      }
                      ${currentHintIndex === index && discoveredHints.includes(index) ? 'border-primary ring-1 ring-primary' : ''}
                    `}
                    onClick={() => handleSelectHint(index)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`
                        flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0
                        ${discoveredHints.includes(index) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                      `}
                      >
                        {discoveredHints.includes(index) ? <span className="text-xs font-bold">{index + 1}</span> : <Lock className="h-3.5 w-3.5" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-1">{discoveredHints.includes(index) ? `Pista ${index + 1}` : `Pista bloqueada`}</h4>
                        {discoveredHints.includes(index) ? (
                          <p className="text-sm">{hint}</p>
                        ) : (
                          <p className="text-sm">Desbloquea esta pista para obtener ayuda adicional.</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {discoveredHints.length < selectedExercise.hints.length && (
                  <Button
                    variant="outline"
                    className="w-full mt-4 gap-2"
                    onClick={handleRevealNextHint}
                    disabled={discoveredHints.length >= selectedExercise.hints.length}
                  >
                    <Lightbulb className="h-4 w-4" />
                    Desbloquear siguiente pista
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="default" size="sm" onClick={handleShowSolution} className="gap-1.5">
            <BookOpen className="h-4 w-4" />
            Ver solución
          </Button>
        </div>
      </div>

      {/* Editor y Preview con Sandpack */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <SandpackProvider
          template="react-ts" // Usamos la plantilla react-ts
          files={files}
          className="flex-1 w-full flex"
          theme="dark" // Opcional: tema claro/oscuro automático
        >
          <SandpackLayout className="h-full w-full flex fixed top-0 left-0" tw="h-full w-full" style={{ width: '100%', height: '100vh' }}>
            {/* Estructura manual del layout */}
            <SandpackFileExplorer style={{ width: '100%', height: '100vh' }} />
            <SandpackCodeEditor style={{ width: '100%', height: '100vh' }} />
            {/* Contenedor para Preview y Consola */}
            <SandpackPreview style={{ width: '100%', height: '100vh' }} /> {/* Ocupa el espacio principal */}
          </SandpackLayout>
          {/* <SandpackConsole tw="h-full" /> Altura fija para la consola */}
        </SandpackProvider>
      </div>
    </div>
  )
}
