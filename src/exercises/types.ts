export type TExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced'

export interface IExerciseDetails {
  id: string
  title: string
  description: string
  difficulty: TExerciseDifficulty
  hints: string[]
}

export interface IExercise extends IExerciseDetails {
  initialCode: string
  solution: string
}
