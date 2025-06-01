'use client'
import React, { useState } from 'react'
import Header from './components/Header'
import ExerciseContainer from './components/ExerciseContainer'

import { exercises } from './data/exerciseData'

function App() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)

  const handleExerciseChange = (index: number) => {
    setCurrentExerciseIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentExercise = exercises[currentExerciseIndex]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Exercises</h3>
              <nav className="space-y-1">
                {exercises.map((exercise, index) => (
                  <button
                    key={index}
                    onClick={() => handleExerciseChange(index)}
                    className={`w-full text-left px-4 py-2.5 rounded-md flex items-center space-x-3 transition-colors duration-150 ease-in-out text-sm ${
                      currentExerciseIndex === index ? 'bg-sky-50 text-sky-700 font-medium' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium ${
                        currentExerciseIndex === index ? 'bg-sky-100 text-sky-700' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="truncate">{exercise.title}</span>
                    <span
                      className={`badge ml-auto ${
                        exercise.difficulty === 'Beginner' ? 'badge-beginner' : exercise.difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'
                      }`}
                    >
                      {exercise.difficulty}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <ExerciseContainer
                exercise={currentExercise}
                onNext={() => {
                  if (currentExerciseIndex < exercises.length - 1) {
                    handleExerciseChange(currentExerciseIndex + 1)
                  }
                }}
                onPrevious={() => {
                  if (currentExerciseIndex > 0) {
                    handleExerciseChange(currentExerciseIndex - 1)
                  }
                }}
                isFirstExercise={currentExerciseIndex === 0}
                isLastExercise={currentExerciseIndex === exercises.length - 1}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p> 2025 React Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
