# Ejercicios prácticos: Estado y hooks básicos en React 19

## 1. Completa el contador

Completa el siguiente componente para que incremente el contador cada vez que se haga clic en el botón:

```tsx
import { useState } from 'react'

export const MiContador = (): JSX.Element => {
  const [valor, setValor] = useState(0)

  return <button onClick={() => setValor(valor + 1)}>Valor: {valor}</button>
}
```

## 2. Input controlado

Crea un componente que muestre un input de texto y debajo el texto que el usuario escribe en tiempo real.

```tsx
import { useState } from 'react'

export const InputControlado = (): JSX.Element => {
  const [texto, setTexto] = useState('')

  return (
    <div>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>{texto}</p>
    </div>
  )
}
```

## 3. Lista dinámica

Implementa un componente que permita agregar elementos a una lista usando un input y un botón. Muestra la lista debajo.

```tsx
import { useState } from 'react'

export const ListaDinamica = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([])
  const [nuevoItem, setNuevoItem] = useState('')

  const agregar = () => {
    setItems([...items, nuevoItem])
    setNuevoItem('')
  }

  return (
    <div>
      <input type="text" value={nuevoItem} onChange={(e) => setNuevoItem(e.target.value)} />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 4. useEffect básico

Haz que el título del documento (`document.title`) se actualice con el valor de un input cada vez que cambie.

```tsx
import { useState, useEffect } from 'react'

export const TituloDinamico = (): JSX.Element => {
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    document.title = titulo
  }, [titulo])

  return (
    <div>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
    </div>
  )
}
```

## 5. Corrige el error

El siguiente componente no actualiza correctamente la lista. ¿Qué está mal y cómo lo solucionarías?

```tsx
import { useState } from 'react'

export const Lista = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([])

  const agregar = (item: string) => {
    setItems([...items, item])
  }

  return (
    <div>
      <input type="text" value={''} onChange={(e) => agregar(e.target.value)} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
```
