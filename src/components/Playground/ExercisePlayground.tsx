'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { REACT_EXERCISES } from '@/constants'

import { CodeEditor } from './CodeEditor'
import { Preview } from './Preview'

export const ExercisePlayground = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState(REACT_EXERCISES[0].id)
  const [code, setCode] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)

  // Obtener el ejercicio seleccionado
  const selectedExercise = REACT_EXERCISES.find((exercise) => exercise.id === selectedExerciseId) || REACT_EXERCISES[0]

  // Manejar el cambio de ejercicio
  const handleExerciseChange = (value: string) => {
    setSelectedExerciseId(value)
    const newExercise = REACT_EXERCISES.find((exercise) => exercise.id === value) || REACT_EXERCISES[0]
    setCode(newExercise.initialCode)
    setShowHint(false)
    setCurrentHintIndex(0)
  }

  // Manejar el cambio de código
  const handleCodeChange = (value: string) => {
    setCode(value)
  }

  // Reiniciar el código al estado inicial
  const handleReset = () => {
    setCode(selectedExercise.initialCode)
    setShowHint(false)
    setCurrentHintIndex(0)
  }

  // Mostrar la solución
  const handleShowSolution = () => {
    setCode(selectedExercise.solution)
  }

  // Mostrar la siguiente pista
  const handleNextHint = () => {
    if (currentHintIndex < selectedExercise.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1)
    } else {
      setCurrentHintIndex(0)
    }
    setShowHint(true)
  }

  // Inicializar el código cuando cambia el ejercicio seleccionado
  useEffect(() => {
    setCode(selectedExercise.initialCode)
  }, [selectedExercise.initialCode])

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-2/3">
          <Select value={selectedExerciseId} onValueChange={handleExerciseChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un ejercicio" />
            </SelectTrigger>
            <SelectContent>
              {REACT_EXERCISES.map((exercise) => (
                <SelectItem key={exercise.id} value={exercise.id}>
                  {exercise.title} ({exercise.difficulty})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset}>
            Reiniciar
          </Button>
          <Button variant="outline" onClick={handleNextHint}>
            {showHint ? 'Siguiente pista' : 'Mostrar pista'}
          </Button>
          <Button variant="default" onClick={handleShowSolution}>
            Ver solución
          </Button>
        </div>
      </div>

      <div className="bg-card border rounded-md p-4">
        <h2 className="text-xl font-semibold">{selectedExercise.title}</h2>
        <p className="text-muted-foreground mt-2">{selectedExercise.description}</p>
        {showHint && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
            <p className="text-amber-800">
              <strong>Pista {currentHintIndex + 1}:</strong> {selectedExercise.hints[currentHintIndex]}
            </p>
          </div>
        )}
      </div>

      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Vista previa</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="h-[500px]">
          <CodeEditor initialCode={code} onChange={handleCodeChange} language="javascript" />
        </TabsContent>
        <TabsContent value="preview" className="h-[500px]">
          <Preview code={code} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
