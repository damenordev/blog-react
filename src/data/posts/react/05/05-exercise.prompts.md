# Ejercicios prácticos: Eventos y Formularios en React 19

---

## 1. Completa el código para manejar el cambio de input y mostrar el valor en pantalla

```tsx
import { useState } from 'react'

const InputLive = () => {
  const [valor, setValor] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value)
  }
  return (
    <div>
      <input type="text" value={valor} onChange={handleChange} />
      <p>Valor: {valor}</p>
    </div>
  )
}
```

---

## 2. Refactoriza el siguiente formulario no controlado a uno controlado

```tsx
import { useState } from 'react'

const FormControlado = () => {
  const [valor, setValor] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(valor)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={valor} onChange={e => setValor(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}
```

---

## 3. Explica con tus palabras la diferencia entre formularios controlados y no controlados en React. ¿Cuándo usarías cada uno?

En React, un formulario controlado es aquel en el que el estado del formulario se almacena en el estado del componente, y se actualiza mediante un handler de cambio. Por otro lado, un formulario no controlado es aquel en el que el estado del formulario se almacena en el DOM, y se accede mediante referencias.

Se debería usar un formulario controlado cuando se necesita validar o procesar los datos del formulario de manera compleja, o cuando se necesita mantener el estado del formulario en sincronía con el estado del componente. Por otro lado, se debería usar un formulario no controlado cuando se necesita una mayor flexibilidad en la gestión del formulario, o cuando se necesita acceder a los datos del formulario de manera más directa.

---

## 4. Corrige el siguiente anti-patrón: el estado de error no se limpia tras corregir el input

```tsx
import { useState } from 'react'

const FormCorregido = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('Email inválido')
      return
    }
    setError('')
    // Lógica para enviar el formulario
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error && e.target.value.includes('@')) {
      setError('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={handleChange} />
      {error && <span>{error}</span>}
      <button type="submit">Enviar</button>
    </form>
  )
}
```

---

## 5. ¿Cómo asegurarías la accesibilidad en un formulario React? Nombra al menos 3 prácticas clave.

Para asegurar la accesibilidad en un formulario React, se pueden seguir las siguientes prácticas clave:

1. **Uso de etiquetas semánticas**: Se deben usar etiquetas semánticas como `<label>`, `<input>`, `<select>`, `<textarea>`, etc. para definir la estructura del formulario de manera que los lectores de pantalla puedan entender su contenido.
2. **Uso de atributos de accesibilidad**: Se deben usar atributos de accesibilidad como `aria-label`, `aria-describedby`, `aria-required`, etc. para proporcionar información adicional sobre los elementos del formulario a los lectores de pantalla.
3. **Uso de estilos accesibles**: Se deben usar estilos accesibles como colores de contraste adecuados, tamaños de fuente legibles, etc. para asegurar que el formulario sea visible y legible para todos los usuarios.
