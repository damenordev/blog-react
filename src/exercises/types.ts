export type TExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced'

// Tipo para la estructura de archivos que espera Sandpack
export type TExerciseFiles = Record<string, string>

export interface IExerciseDetails {
  id: string
  title: string
  description: string
  difficulty: TExerciseDifficulty
  hints: string[]
}

export interface IExercise extends IExerciseDetails {
  initialFiles: TExerciseFiles // Archivos iniciales para Sandpack
  solutionFiles: TExerciseFiles // Archivos de la solución para Sandpack
}
