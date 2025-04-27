---
title: '01. Introducción a React y JSX'
description: 'Descubre qué es React, cómo funciona JSX y por qué son la base para construir interfaces modernas con JavaScript.'
date: '2025-04-22'
tags: ['react', 'jsx', 'introducción', 'ui', 'javascript']
author: 'damenordev'
---

# ¡Bienvenido/a a la serie de React 19! 

En este primer post descubrirás los fundamentos de React y JSX, la base para construir interfaces modernas, declarativas y escalables. Aprenderás qué es React, cómo funciona JSX y por qué ambos conceptos revolucionan la forma de crear aplicaciones web.

---

## ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes. Su principal fortaleza es la **composición de componentes**: pequeñas piezas independientes que puedes reutilizar y combinar para crear UIs complejas.

### Ventajas principales

| Ventaja                       | Descripción                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Reutilización                 | Los componentes permiten escribir menos código duplicado y más reutilizable. |
| Actualizaciones eficientes    | El Virtual DOM optimiza los cambios en pantalla.                            |
| Ecosistema y comunidad activa | Hay miles de librerías y recursos compatibles.                              |

> **Analogía:** Piensa en React como un set de Lego: cada componente es una pieza que puedes ensamblar de distintas formas para crear tu propia estructura.

---

## ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos `.js` o `.tsx`. Aunque parece HTML, en realidad es mucho más potente: puedes incrustar expresiones de JavaScript, componer componentes y aprovechar todo el poder del lenguaje.

```tsx
// Ejemplo básico de JSX en un componente funcional
const Saludo = () => {
  const nombre = 'React'
  return <h1>¡Hola, {nombre}!</h1>
}
```

### Diferencias clave respecto a HTML

- Los atributos usan camelCase (`className`, `onClick`).
- Todas las etiquetas deben cerrarse (`<img />`).
- Puedes insertar expresiones JS entre llaves (`{}`).

---

## ¿Cómo funciona JSX internamente?

JSX no es entendido por los navegadores. Herramientas como **Babel** lo transforman en llamadas a funciones de React (`React.createElement`). Desde React 17+ ya no es necesario importar `React` para usar JSX, gracias a la nueva transformación automática.

```js
// JSX
;<h1>Hola</h1>
// Se transforma en:
React.createElement('h1', null, 'Hola')
```

---

## Primer componente funcional con JSX

Veamos un ejemplo de componente funcional escrito en TypeScript y JSX, siguiendo las mejores prácticas del proyecto:

```tsx
interface ISaludoProps {
  nombre: string
}

const Saludo = ({ nombre }: ISaludoProps): JSX.Element => {
  return <p>¡Hola, {nombre}! 👋</p>
}

// Uso:
// <Saludo nombre="Mundo" />
```

### ¿Por qué preferir componentes funcionales?

- Son más fáciles de entender y probar.
- Permiten mayor reutilización y composición.
- Fomentan un código más limpio y modular.

---

## Buenas prácticas y errores comunes

- Usa funciones flecha para definir componentes.
- Define siempre las props con interfaces (`ISaludoProps`).
- Evita clases, prefiere componentes funcionales.
- Usa nombres descriptivos y PascalCase para componentes.
- Recuerda: `className` en vez de `class`, y cierra todas las etiquetas.

### Ejemplo de error común

```tsx
// ❌ Error: usar class en vez de className
<div class="caja">Hola</div>
// ✅ Correcto
<div className="caja">Hola</div>
```

---

## JSX avanzado: Expresiones, fragmentos y comentarios

Puedes incrustar cualquier expresión de JavaScript dentro de `{}`:

```tsx
const edad = 30
return <p>Edad: {edad + 5}</p>
```

Para devolver varios elementos sin un contenedor extra, usa fragmentos:

```tsx
return (
  <>
    <h2>Título</h2>
    <p>Contenido</p>
  </>
)
```

Los comentarios en JSX se escriben así:

```tsx
{/* Este es un comentario en JSX */}
```

---

## Tabla comparativa: JSX vs HTML

| Característica      | JSX                    | HTML           |
|---------------------|------------------------|----------------|
| Atributos           | camelCase (`onClick`)  | minúsculas     |
| Cierre de etiquetas | Obligatorio (`<img />`)| Opcional       |
| Expresiones         | `{}`                   | No aplica      |

---

## Preguntas frecuentes

- **¿Debo usar siempre JSX? ¿Cuándo no?**: JSX es recomendado para la mayoría de los casos, pero puedes evitarlo cuando necesitas un control total sobre el DOM o cuando trabajas con bibliotecas que no lo soportan.
- **¿Puedo usar React sin TypeScript?**: Sí, puedes usar React con JavaScript puro, pero TypeScript te ofrece una mayor seguridad y mantenibilidad en tus proyectos.
- **¿Qué ventajas tiene usar fragmentos?**: Los fragmentos permiten devolver múltiples elementos sin un contenedor extra, lo que mejora la performance y la claridad del código.

---

## ¿Y ahora qué sigue?

¡Listo! Ya sabes qué es React y cómo JSX facilita la creación de componentes. En el próximo post aprenderás a crear y reutilizar **componentes funcionales** y a usar **props** para estructurar tu UI de forma declarativa y escalable. 

---

## Recursos recomendados

- [Documentación oficial de React (español)](https://es.react.dev/learn)

---

## Conclusión

React y JSX son la base para desarrollar interfaces modernas y escalables en JavaScript. Dominar estos conceptos te permitirá avanzar rápidamente en el mundo del desarrollo frontend. ¡Nos vemos en el siguiente post! 

---
