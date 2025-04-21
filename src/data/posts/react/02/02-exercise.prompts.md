---
title: '02. Ejercicios: Componentes funcionales y props'
description: 'Ejercicios prácticos para dominar la creación y uso de componentes funcionales y props en React.'
date: '2025-04-22'
tags: ['react', 'componentes', 'props', 'ejercicios']
author: 'damenordev'
---

## Ejercicio 1: Crea un componente funcional

Crea un componente funcional llamado `Titulo` que reciba una prop `texto` (string) y muestre ese texto dentro de un elemento `<h2>`.

```tsx
// Ejemplo de uso:
// <Titulo texto="Bienvenido" />
```

## Ejercicio 2: Usa y combina props

Crea un componente `Usuario` que reciba las props `nombre` (string) y `edad` (number) y muestre un mensaje como: "Hola, soy [nombre] y tengo [edad] años".

```tsx
// Ejemplo de uso:
// <Usuario nombre="Ana" edad={28} />
```

## Ejercicio 3: Composición de componentes

Crea un componente `Perfil` que reciba las props `nombre`, `edad` y `avatar` (url de imagen) y utilice los componentes `Titulo` y `Usuario` de los ejercicios anteriores, además de mostrar la imagen de avatar.

```tsx
// Ejemplo de uso:
// <Perfil nombre="Ana" edad={28} avatar="/ana.png" />
```

## Ejercicio 4: Buenas prácticas

Corrige el siguiente componente para que siga las buenas prácticas de React y TypeScript:

```tsx
function Boton(props: { texto: string }) {
  return <button>{props.texto}</button>
}
```

## Ejercicio 5: Props opcionales

Crea un componente `Alerta` que reciba una prop `mensaje` (string) y una prop opcional `tipo` ("info" | "error"). Si no se indica `tipo`, debe mostrar "info" por defecto. El componente debe mostrar el mensaje con el tipo correspondiente.

```tsx
// Ejemplo de uso:
// <Alerta mensaje="Todo bien" />
// <Alerta mensaje="Error de conexión" tipo="error" />
```
