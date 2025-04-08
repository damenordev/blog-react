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
    'Muestra el valor actual del contador en algún lugar del componente.',
    'Considera usar botones para los eventos onClick.'
  ],
  initialCode: `
function Counter() {
  // Usa React.useState para mantener el valor del contador
  const [count, setCount] = React.useState(0);

  // Función para incrementar el contador
  const increment = () => setCount(count + 1);

  // Función para decrementar el contador
  const decrement = () => setCount(count - 1);

  return React.createElement('div', null, 
    React.createElement('h2', null, 'Contador: ', count),
    React.createElement('button', { onClick: increment }, 'Incrementar'),
    React.createElement('button', { onClick: decrement }, 'Decrementar')
  );
}

// La variable result es necesaria para el playground
const result = React.createElement(Counter);
`,
  solution: `
function Counter() {
  // Define el estado 'count' inicializado en 0 usando React.useState
  const [count, setCount] = React.useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(prevCount => prevCount + 1); // Forma segura de actualizar el estado basado en el anterior
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return React.createElement('div', null, 
    React.createElement('h2', null, 'Contador: ', count),
    React.createElement('div', { style: { display: 'flex', gap: '8px' } },
      React.createElement('button', { onClick: increment }, '+'),
      React.createElement('button', { onClick: decrement }, '-')
    )
  );
}

// La variable result es necesaria para el playground
const result = React.createElement(Counter);
`
}
