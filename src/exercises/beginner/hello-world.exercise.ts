import { IExercise } from '../types'

export const helloWorldExercise: IExercise = {
  id: 'hello-world',
  title: 'Hola Mundo en React',
  description: 'Un simple componente que muestra un mensaje de "Hola Mundo".',
  difficulty: 'beginner',
  hints: [
    'En React, los componentes son funciones que devuelven JSX.',
    'JSX es una extensión de JavaScript que permite escribir código similar a HTML.',
    'Todo componente React debe devolver un solo elemento raíz.'
  ],
  initialCode: `import React from 'react';

// Crea un componente que muestre "¡Hola Mundo!"
function HelloWorld() {
  // Tu código aquí
}

export default HelloWorld;
`,
  solution: `import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>¡Hola Mundo!</h1>
      <p>Mi primer componente en React</p>
    </div>
  );
}

export default HelloWorld;
`
}
