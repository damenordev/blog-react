import { IExercise } from './types'
import { BEGINNER_EXERCISES } from './beginner'
import { INTERMEDIATE_EXERCISES } from './intermediate'
import { ADVANCED_EXERCISES } from './advanced'

export * from './types'

// Exportamos todos los ejercicios agrupados
export const EXERCISES_BY_DIFFICULTY = {
  beginner: BEGINNER_EXERCISES,
  intermediate: INTERMEDIATE_EXERCISES,
  advanced: ADVANCED_EXERCISES
}

// Exportamos todos los ejercicios en un solo array
export const ALL_EXERCISES: IExercise[] = [
  ...BEGINNER_EXERCISES,
  ...INTERMEDIATE_EXERCISES,
  ...ADVANCED_EXERCISES
]
