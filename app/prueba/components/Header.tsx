import React from 'react'
import { BookOpen, Github, ExternalLink } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Replace with a proper logo if available */}
            <BookOpen className="h-7 w-7 text-sky-600" /> 
            <h1 className="text-xl font-bold text-slate-800">
              React<span className="text-sky-600">Learn</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://react.dev/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center text-sm text-slate-600 hover:text-sky-600 transition-colors duration-150 ease-in-out"
            >
              <span>React Docs</span>
              <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-75" />
            </a>
            <a
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-slate-600 hover:text-sky-600 transition-colors duration-150 ease-in-out"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
