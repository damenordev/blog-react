'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { ALL_EXERCISES, IExercise } from '@/exercises'
import { Badge } from '@/ui/badge'
import { Code, BookOpen, RefreshCw, Lightbulb, Play, Lock, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/sheet'

import { CodeEditor } from './CodeEditor'
import { Preview } from './Preview'

export const ExercisePlayground = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState(ALL_EXERCISES[0].id)
  const [code, setCode] = useState('')
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [discoveredHints, setDiscoveredHints] = useState<number[]>([])
  const [isHintSheetOpen, setIsHintSheetOpen] = useState(false)

  // Obtener el ejercicio seleccionado
  const selectedExercise = ALL_EXERCISES.find((exercise: IExercise) => exercise.id === selectedExerciseId) || ALL_EXERCISES[0]

  // Manejar el cambio de ejercicio
  const handleExerciseChange = (value: string) => {
    setSelectedExerciseId(value)
    const newExercise = ALL_EXERCISES.find((exercise: IExercise) => exercise.id === value) || ALL_EXERCISES[0]
    setCode(newExercise.initialCode)
    setCurrentHintIndex(0)
    setDiscoveredHints([])
  }

  // Manejar el cambio de código
  const handleCodeChange = (value: string) => {
    setCode(value)
  }

  // Reiniciar el código al estado inicial
  const handleReset = () => {
    setCode(selectedExercise.initialCode)
    setCurrentHintIndex(0)
    setDiscoveredHints([])
  }

  // Mostrar la solución
  const handleShowSolution = () => {
    setCode(selectedExercise.solution)
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

  // Inicializar el código cuando cambia el ejercicio seleccionado
  useEffect(() => {
    setCode(selectedExercise.initialCode)
  }, [selectedExercise.initialCode])

  // Mapeo de dificultad a color de badge
  const difficultyColor = {
    principiante: 'bg-green-100 text-green-800',
    intermedio: 'bg-blue-100 text-blue-800',
    avanzado: 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="flex flex-col space-y-6 max-w-full pt-20">
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

      {/* Editor y Preview */}
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="editor" className="gap-2">
            <Code className="h-4 w-4" />
            Editor
          </TabsTrigger>
          <TabsTrigger value="preview" className="gap-2">
            <Play className="h-4 w-4" />
            Vista previa
          </TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="h-[600px] bg-background rounded-lg p-0 border-0">
          <CodeEditor initialCode={code} onChange={handleCodeChange} language="javascript" />
        </TabsContent>
        <TabsContent value="preview" className="h-[600px] bg-background rounded-lg p-0 border-0">
          <Preview code={code} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
