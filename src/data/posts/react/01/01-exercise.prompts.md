---
title: '01. Ejercicios: Introducción a React y JSX'
description: 'Ejercicios prácticos para afianzar los conceptos de React y JSX.'
date: '2025-04-22'
tags: ['react', 'jsx', 'ejercicios']
author: 'damenordev'
---

## Ejercicio 1: Corrige el error

El siguiente componente tiene un error de sintaxis. ¿Cuál es y cómo lo solucionarías?

```tsx
const Mensaje = () => {
  return <h2>¡Bienvenido a React!</h2>
}

// Uso incorrecto:
// <Mensaje>
```

## Ejercicio 2: Convierte a JSX

Convierte el siguiente fragmento de HTML a JSX válido:

```html
<div class="contenedor">
  <img src="logo.png" />
  <button onclick="alert('Hola')">Haz clic</button>
</div>
```

## Ejercicio 3: Explica con tus palabras

¿Qué ventajas aporta JSX frente a escribir solo JavaScript para crear interfaces?

## Ejercicio 4: Crea tu primer componente

Crea un componente funcional llamado `Presentacion` que reciba una prop `nombre` y muestre un saludo personalizado usando JSX.

## Ejercicio 5: Identifica buenas prácticas

Lee el siguiente código y señala dos mejoras según las buenas prácticas vistas:

```tsx
function saludo(props) {
  return <div>Hola, {props.nombre}</div>
}
```
