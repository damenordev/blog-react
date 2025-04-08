import { IExercise } from '../types'

export const helloWorldExercise: IExercise = {
  id: 'hello-world',
  title: 'Hola Mundo en React',
  description: 'Un simple componente que muestra un mensaje de "Hola Mundo".',
  difficulty: 'beginner',
  hints: [
    'En React, los componentes son funciones que devuelven JSX.',
    'JSX es una extensión de JavaScript que permite escribir código similar a HTML.',
    'Todo componente React debe devolver un solo elemento raíz.',
    'Recuerda envolver el texto en un elemento HTML válido como <h1> o <p>.',
    'El componente debe ser una función.'
  ],
  initialCode: `
function HelloWorld() {
  // Tu código aquí
  // Debe devolver un elemento que muestre '¡Hola Mundo!'
  return React.createElement('h1', null, '¡Hola Mundo!'); // Ejemplo usando React.createElement
}

// La variable result es necesaria para el playground
const result = React.createElement(HelloWorld);
`,
  solution: `
function HelloWorld() {
  // Simplemente devuelve el elemento h1 con el texto
  return React.createElement('h1', null, '¡Hola Mundo!'); // Usando React.createElement
}

// La variable result es necesaria para el playground
const result = React.createElement(HelloWorld);
`
}
