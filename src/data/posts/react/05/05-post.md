---
title: 'Eventos y Formularios en React 19: Interactividad Declarativa y Segura'
description: 'Aprende a manejar eventos y formularios en React 19 con TypeScript. Descubre patrones modernos, anti-patrones, ejemplos prácticos y buenas prácticas para construir UIs interactivas y accesibles.'
date: '2025-04-22'
tags: ['react', 'react19', 'eventos', 'formularios', 'typescript']
author: 'damenordev'
---

# 05. Eventos y Formularios en React 19: Interactividad Declarativa y Segura

## Introducción

¿Quieres que tus aplicaciones React sean realmente interactivas y accesibles? Dominar el manejo de eventos y formularios es esencial para captar la interacción del usuario, validar datos y ofrecer experiencias modernas y seguras. En este post aprenderás desde la sintaxis básica hasta patrones avanzados y buenas prácticas con TypeScript.

---

## Fundamentos de eventos en React

Los eventos en React funcionan de forma similar a los del DOM, pero con algunas diferencias clave:

- Los nombres de los eventos usan camelCase (`onClick`, `onChange`).
- Se pasan funciones, no strings, como manejadores.
- Los eventos son sintéticos (SyntheticEvent), lo que asegura compatibilidad cross-browser.

### Ejemplo básico de evento

```tsx
const handleClick = () => {
  alert('¡Haz hecho clic!')
}

return <button onClick={handleClick}>Clic aquí</button>
```

### Diferencias con eventos nativos

| React (SyntheticEvent)         | DOM tradicional           |
|-------------------------------|---------------------------|
| `onClick={fn}`                | `onclick="fn()"`         |
| Compatible cross-browser      | Puede variar por navegador|
| Acceso a propiedades normal   | Puede requerir normalización|

---

## Manejo de eventos con TypeScript

React provee tipos estrictos para eventos. Ejemplo con un input:

```tsx
const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

return <input onChange={handleInput} />
```

- Usa los tipos de React: `React.MouseEvent`, `React.FormEvent`, `React.KeyboardEvent`, etc.
- Especifica el tipo del elemento para acceder a propiedades específicas.

---

## Formularios controlados vs no controlados

- **Controlados:** El estado del input lo gestiona React (`value` y `onChange`).
- **No controlados:** El valor se accede mediante referencias (`ref`).

### Ejemplo de formulario controlado

```tsx
import { useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  return (
    <form onSubmit={e => { e.preventDefault(); alert(nombre) }}>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}
```

### Ejemplo de formulario no controlado

```tsx
import { useRef } from 'react'

const FormularioNoControlado = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(inputRef.current?.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Enviar</button>
    </form>
  )
}
```

---

## Validación de formularios

- Valida en el evento `onChange`, `onBlur` o al enviar (`onSubmit`).
- Usa estados para errores y mensajes.
- Considera librerías como React Hook Form para formularios complejos.

### Ejemplo de validación básica

```tsx
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!email.includes('@')) {
    setError('Email inválido')
    return
  }
  setError('')
  // enviar datos
}
```

---

## Accesibilidad en eventos y formularios

- Usa etiquetas `<label htmlFor="id">` para inputs.
- Proporciona mensajes de error claros y accesibles.
- Usa roles y atributos ARIA si es necesario.
- Asegura el foco correcto tras validación o error.

---

## Anti-patrones y errores frecuentes

- Usar `event.preventDefault()` sin necesidad.
- No limpiar estados de error tras corrección.
- No asociar labels con inputs.
- Validar solo en el submit (mejor validar en blur/cambio también).
- Abusar de formularios no controlados.

---

## Buenas prácticas y recomendaciones

1. Prefiere formularios controlados para mantener el estado sincronizado.
2. Usa TypeScript para tipar eventos y props de formularios.
3. Extrae lógica de validación a funciones reutilizables.
4. Asegura accesibilidad con labels, mensajes y foco.
5. Mantén el JSX limpio y modularizando componentes de formulario.

---

## Ejemplo práctico integrador

```tsx
import { useState } from 'react'

interface IFormData {
  nombre: string
  email: string
}

const FormularioIntegrador = () => {
  const [form, setForm] = useState<IFormData>({ nombre: '', email: '' })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email.includes('@')) {
      setError('Email inválido')
      return
    }
    setError('')
    alert(`Bienvenido ${form.nombre}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <button type="submit">Enviar</button>
    </form>
  )
}
```

---

## Preguntas frecuentes

- ¿Por qué preferir formularios controlados?
- ¿Cómo tipar correctamente eventos en TypeScript?
- ¿Qué librerías ayudan con formularios complejos?
- ¿Cómo mejorar la accesibilidad de los formularios?

---

## Recursos recomendados

- [Documentación oficial de React (español)](https://es.react.dev/learn)

---

## Conclusión

Dominar eventos y formularios en React 19 te permitirá crear aplicaciones interactivas, accesibles y robustas. Aplica estos patrones y evita los anti-patrones para que tu código sea profesional y tus usuarios tengan la mejor experiencia posible. 🚀

---

## ¿Y ahora qué sigue?

En el próximo post exploraremos **hooks avanzados** en React 19: custom hooks, useReducer, patrones de reutilización y escenarios reales. ¡No te lo pierdas! ✨

---
