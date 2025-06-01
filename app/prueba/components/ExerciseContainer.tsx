import React from 'react'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { Exercise } from '../types/Exercise'
import ExerciseLayout from './ExerciseLayout'

interface ExerciseContainerProps {
  exercise: Exercise
  onNext: () => void
  onPrevious: () => void
  isFirstExercise: boolean
  isLastExercise: boolean
}

const ExerciseContainer: React.FC<ExerciseContainerProps> = ({ exercise, onNext, onPrevious, isFirstExercise, isLastExercise }) => {
  return (
    <div className="animate-fade-in">
      {/* Exercise Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-800">{exercise.title}</h2>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
              exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 
              exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }`}
          >
            {exercise.difficulty}
          </span>
        </div>
        <p className="text-sm text-slate-600">{exercise.description}</p>
      </div>

      {/* Instructions Section */}
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <div className="flex items-start space-x-3">
          <BookOpen className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-slate-800 mb-2">Instructions</h3>
            <div className="prose prose-sm max-w-none text-slate-700 prose-p:my-1 prose-li:my-0.5 prose-ol:my-2 prose-ul:my-2">
              <div dangerouslySetInnerHTML={{ __html: exercise.instructions }} />
            </div>
            {exercise.documentationLinks && exercise.documentationLinks.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exercise.documentationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs px-2 py-1 rounded bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-slate-800 transition-colors duration-150 ease-in-out"
                  >
                    <BookOpen className="h-3 w-3 mr-1.5" />
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sandpack Playground */}
      <ExerciseLayout exercise={exercise} />

      {/* Navigation Buttons */}
      <div className="flex justify-between p-6 border-t border-slate-200">
        <button
          onClick={onPrevious}
          disabled={isFirstExercise}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-150 ease-in-out ${
            isFirstExercise ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>
        <button
          onClick={onNext}
          disabled={isLastExercise}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-150 ease-in-out ${
            isLastExercise ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-sky-600 text-white hover:bg-sky-700'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ExerciseContainer
