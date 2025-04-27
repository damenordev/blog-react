---
title: '03. Estado y hooks básicos en React 19'
description: 'Aprende a gestionar el estado y los hooks fundamentales en React 19 con ejemplos prácticos y buenas prácticas.'
date: '2025-04-22'
tags: ['react', 'estado', 'hooks', 'usestate', 'useeffect']
author: 'damenordev'
---

## Introducción

En este post descubrirás cómo funciona el estado en React y cómo los hooks básicos (`useState`, `useEffect`) te permiten crear componentes interactivos y dinámicos. Aprenderás con ejemplos claros, analogías y buenas prácticas.

## Índice

1. ¿Qué es el estado en React?
2. useState: declaración y actualización
3. Ciclo de vida y actualizaciones
4. Errores comunes y troubleshooting
5. Introducción a useEffect
6. Buenas prácticas y patrones
7. Preguntas frecuentes
8. Recursos recomendados
9. Conclusión

## 1. ¿Qué es el estado en React?

El **estado** es la memoria interna de un componente React: permite almacenar y gestionar información que puede cambiar a lo largo del ciclo de vida del componente. Imagina el estado como una "caja" donde guardas datos temporales (como el valor de un input, el contador de clics o la visibilidad de un modal) que afectan lo que el usuario ve en pantalla.

> 💡 **Analogía:** El estado es como la libreta de un chef donde anota los pedidos actuales. Cada vez que llega un nuevo pedido (evento), la libreta se actualiza y el chef (React) ajusta lo que está preparando (la UI).

Cuando el estado cambia, React vuelve a renderizar el componente para reflejar el nuevo valor en la interfaz. Esto es clave para crear aplicaciones interactivas y reactivas.

### Ejemplo simple: contador

```tsx
import { useState } from 'react'

export const Contador = (): JSX.Element => {
  const [contador, setContador] = useState(0)

  return <button onClick={() => setContador(contador + 1)}>Has hecho clic {contador} veces</button>
}
```

En este ejemplo, `contador` es una variable de estado. Cada vez que el usuario hace clic, el valor se incrementa y el componente se vuelve a renderizar mostrando el nuevo conteo.

## 2. useState: declaración y actualización

El hook `useState` es la herramienta principal para declarar variables de estado en componentes funcionales. Su sintaxis es sencilla y sigue el patrón de desestructuración:

```tsx
const [valor, setValor] = useState(valorInicial)
```

- **valor**: el dato actual almacenado en el estado.
- **setValor**: función para actualizar el estado y disparar un nuevo render.
- **valorInicial**: valor inicial del estado (puede ser un valor o una función que lo retorne).

### Ejemplo: input controlado

```tsx
import { useState } from 'react'

export const InputNombre = (): JSX.Element => {
  const [nombre, setNombre] = useState('')

  return <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Tu nombre" />
}
```

> ✨ **Tip:** Nombra siempre el setter como `set` + NombreDelEstado para claridad.

### Inicialización con función

Si el valor inicial requiere cálculo, puedes pasar una función:

```tsx
const [lista, setLista] = useState(() => generarListaInicial())
```

Esto evita cálculos innecesarios en renders posteriores.

## 3. Ciclo de vida y actualizaciones

El estado en React es **inmutable**: cada vez que lo actualizas, React crea una nueva “foto” (snapshot) y vuelve a renderizar el componente. No modifiques objetos/arrays directamente, usa siempre un nuevo objeto/array.

### Ejemplo: actualización basada en el valor previo

```tsx
const [contador, setContador] = useState(0)

const incrementar = () => {
  setContador(prev => prev + 1)
}
```

> 💡 **Recuerda:** El valor de estado disponible en el render actual no cambia hasta el siguiente render.

### Pitfall: mutar el estado directamente

```tsx
// 🚩 Incorrecto
lista.push('nuevo')
setLista(lista) // NO actualiza el estado correctamente

// ✅ Correcto
setLista([...lista, 'nuevo'])
```

## 4. Errores comunes y troubleshooting

- **El valor no se actualiza inmediatamente:**
  - El estado es asíncrono; tras llamar a `setValor`, el valor cambia en el siguiente render.
- **Demasiados renders:**
  - No llames a `setValor` directamente en el cuerpo del componente; hazlo solo en eventos o efectos.
- **Mutación directa:**
  - Siempre crea nuevos objetos/arrays.
- **Handlers mal asignados:**
  - Usa `onClick={handler}` y no `onClick={handler()}`.

## 5. Introducción a useEffect

El hook `useEffect` permite ejecutar código tras el renderizado: efectos secundarios como peticiones, suscripciones o sincronización con APIs externas.

```tsx
import { useState, useEffect } from 'react'

export const TituloDinamico = (): JSX.Element => {
  const [titulo, setTitulo] = useState('React 19')

  useEffect(() => {
    document.title = titulo
  }, [titulo])

  return <input value={titulo} onChange={e => setTitulo(e.target.value)} />
}
```

- El primer parámetro es una función que se ejecuta tras el render.
- El segundo parámetro es un array de dependencias: el efecto se ejecuta cuando cambian.

> 💡 **Reglas:** Los hooks solo pueden usarse en el tope de componentes o hooks personalizados, nunca en condicionales o bucles.

## 6. Buenas prácticas y patrones

- Usa **interfaces** para tipar props:

```tsx
interface IContadorProps {
  inicial: number
}

export const Contador = ({ inicial }: IContadorProps): JSX.Element => {
  const [valor, setValor] = useState(inicial)
  return <span>{valor}</span>
}
```

- Prefiere **funciones flecha** para componentes.
- Desestructura las props en la firma de la función.
- Nombres descriptivos (`isLoading`, `userList`).
- Exporta componentes con `export const`.

## 7. Preguntas frecuentes

**¿Por qué no veo el valor actualizado tras setValor?**

- El estado cambia en el siguiente render, no inmediatamente.

**¿Puedo tener varios estados en un componente?**

- Sí, puedes usar `useState` varias veces.

**¿Cuándo usar un solo objeto vs. varios useState?**

- Usa varios `useState` para datos independientes; un solo objeto para datos relacionados.

**¿Por qué mi componente se renderiza muchas veces?**

- Puede ser por efectos sin dependencias o actualizaciones de estado innecesarias.

## 8. Recursos recomendados

- [Documentación oficial de React (español)](https://es.react.dev/learn)

## 9. Conclusión

El estado y los hooks básicos son la base de cualquier aplicación React moderna. Domina estos conceptos y estarás listo para crear interfaces dinámicas, escalables y mantenibles. ¡Sigue practicando y experimentando! 🚀

---

## ¿Y ahora qué sigue?

¡Felicidades! Ahora sabes cómo gestionar el estado y usar los hooks fundamentales en React 19. En el próximo post aprenderás sobre **renderizado condicional y listas** para crear interfaces aún más dinámicas y adaptables. ¡No te lo pierdas!
