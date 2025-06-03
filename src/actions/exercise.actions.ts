import { openrouter } from '@openrouter/ai-sdk-provider'
import { generateText } from 'ai'

const system = `Eres un experto profesor de programación, especializado en React, Next.js y TypeScript. Te van a pasar un ejercicio de programacion, debes comprobarlo y decir los errores que tiene y como resolverlos, asi como puntuar el ejercicio, cada apartado como global indicando si aprobo o no, dando consejos para mejorar. No contestes nada mas que lo que pide.`

const exerciseExampleCorrect = `import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 0 ? count - 1 : 0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}`

const exerciseExampleIncorrect = `import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}`

const exerciseExampleDescription = `Escribe un contador que permita incrementar y decrementar el valor de un contador.`

const prompt = `${exerciseExampleDescription}\n\nEjemplo correcto:\n${exerciseExampleCorrect}\n\nEjemplo incorrecto:\n${exerciseExampleIncorrect}`

export const getResultExercise = async () => {
  const response = await generateText({
    // model: openrouter('mistralai/devstral-small'),
    model: openrouter('mistralai/mistral-small-3.1-24b-instruct:free'),
    // model: openrouter('openai/gpt-4.1-mini'),
    prompt,
    system,
  })

  console.log(response.text)
}
