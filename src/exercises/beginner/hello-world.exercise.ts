import { IExercise } from '../types'

// Código del componente principal del ejercicio
const appCode = `import React from 'react';

export default function HelloWorld() {
  return <h1>¡Hola Mundo!</h1>;
}
`;

// Punto de entrada estándar para Sandpack React
const indexCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`;

export const helloWorldExercise: IExercise = {
  id: 'hello-world',
  title: 'Hola Mundo',
  description: 'Crea tu primer componente en React que muestre "¡Hola Mundo!"', // Añadida comilla simple faltante
  difficulty: 'beginner',
  hints: [
    'En React, los componentes son funciones que devuelven JSX.',
    'JSX es una extensión de JavaScript que permite escribir código similar a HTML.',
    'Todo componente React debe devolver un solo elemento raíz.',
    'Recuerda envolver el texto en un elemento HTML válido como <h1> o <p>.',
    'El componente debe ser una función.'
  ],
  initialFiles: {
    '/App.tsx': appCode,
    '/index.tsx': indexCode,
  },
  solutionFiles: {
    '/App.tsx': appCode, // La solución es igual al código inicial en este caso
    '/index.tsx': indexCode,
  }
}
