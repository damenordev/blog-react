import { IExercise } from '../types'
import { helloWorldExercise } from './hello-world.exercise'
import { counterExercise } from './counter.exercise'

export const BEGINNER_EXERCISES: IExercise[] = [
  helloWorldExercise,
  counterExercise
]
