import { IExercise } from '../types'

// Código inicial para /App.tsx
const initialAppCode = `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}
`;

// Código de la solución para /App.tsx
const solutionAppCode = `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
`;

// Punto de entrada estándar para Sandpack React
const indexCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`;

export const counterExercise: IExercise = {
  id: 'counter',
  title: 'Contador Simple',
  description: 'Crea un componente con estado que incremente y decremente un contador.',
  difficulty: 'beginner',
  hints: [
    'Usa el hook `useState` para mantener el estado del contador.',
    'Crea funciones para incrementar y decrementar el contador.',
    'Usa botones con controladores de eventos onClick para llamar a esas funciones.',
    'Muestra el valor actual del contador en algún lugar del componente.',
    'Considera usar botones para los eventos onClick.'
  ],
  initialFiles: {
    '/App.tsx': initialAppCode,
    '/index.tsx': indexCode,
  },
  solutionFiles: {
    '/App.tsx': solutionAppCode,
    '/index.tsx': indexCode,
  }
}
