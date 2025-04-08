import { IExercise } from '../types'

export const counterExercise: IExercise = {
  id: 'counter',
  title: 'Contador Simple',
  description: 'Un componente con un contador que puede incrementarse y decrementarse usando el estado de React.',
  difficulty: 'beginner',
  hints: [
    'Usa el hook `useState` para mantener el estado del contador.',
    'Crea funciones para incrementar y decrementar el contador.',
    'Usa botones con controladores de eventos onClick para llamar a esas funciones.',
    'Muestra el valor actual del contador en algún lugar del componente.'
  ],
  initialCode: `import React, { useState } from 'react';

function Counter() {
  // Usa useState para mantener el valor del contador
  
  // Crea funciones para incrementar y decrementar el contador
  
  return (
    <div>
      <h2>Contador</h2>
      {/* Muestra el valor del contador */}
      
      {/* Botones para incrementar y decrementar */}
      
    </div>
  );
}

export default Counter;
`,
  solution: `import React, { useState } from 'react';

function Counter() {
  // Inicializamos el estado del contador con valor 0
  const [count, setCount] = useState(0);
  
  // Función para incrementar
  const increment = () => {
    setCount(count + 1);
  };
  
  // Función para decrementar
  const decrement = () => {
    setCount(count - 1);
  };
  
  // Función para resetear
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <h2>Contador</h2>
      <p>Valor actual: <strong>{count}</strong></p>
      
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
`
}
