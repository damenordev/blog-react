---
title: '02. Componentes funcionales y props en React'
description: 'Aprende a crear, reutilizar y parametrizar componentes funcionales en React usando props para construir UIs declarativas y escalables.'
date: '2025-04-22'
tags: ['react', 'componentes', 'props', 'typescript', 'ui']
author: 'damenordev'
---

# Componentes funcionales y props en React 19

¡Sigamos avanzando con React 19! 🚀 En el post anterior aprendiste qué es React y cómo JSX facilita la creación de interfaces. Ahora, vamos a descubrir cómo crear piezas reutilizables y flexibles con **componentes funcionales** y **props**.

---

## ¿Qué es un componente funcional?

Un componente funcional es como una pieza de Lego: una función que retorna JSX y que puedes combinar con otras para construir tu UI. Son la base de React 19 y permiten dividir la interfaz en bloques independientes, reutilizables y fáciles de mantener.

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

### Ventajas de los componentes funcionales

| Ventaja               | Descripción                                              |
| --------------------- | -------------------------------------------------------- |
| Simplicidad           | Son funciones puras, fáciles de entender y probar.       |
| Reutilización         | Puedes usarlos en cualquier parte de tu app.             |
| Composición           | Permiten crear UIs complejas a partir de piezas simples. |
| Integración con hooks | Son la base para usar hooks como useState y useEffect.   |

> **Analogía:** Imagina tu UI como una casa hecha de bloques Lego. Cada bloque es un componente funcional reutilizable.

---

## ¿Qué son las props?

Las **props** (propiedades) son los “ingredientes” que tu componente necesita para funcionar. Son parámetros inmutables que recibe un componente para personalizar su contenido o comportamiento.

```tsx
interface IBotonProps {
  texto: string
  onClick: () => void
}

const Boton = ({ texto, onClick }: IBotonProps): JSX.Element => {
  return <button onClick={onClick}>{texto}</button>
}

// Uso:
// <Boton texto="Haz clic" onClick={() => alert('¡Hecho!')} />
```

### Props obligatorias y opcionales

Puedes definir props opcionales usando `?` y asignar valores por defecto con destructuración:

```tsx
interface IAlertaProps {
  mensaje: string
  tipo?: 'info' | 'error'
}

const Alerta = ({ mensaje, tipo = 'info' }: IAlertaProps): JSX.Element => {
  return <div className={`alert alert-${tipo}`}>{mensaje}</div>
}

// Uso:
// <Alerta mensaje="Todo bien" />
// <Alerta mensaje="Error de conexión" tipo="error" />
```

---

## Composición y props.children

La composición permite crear componentes complejos a partir de otros más simples. El prop especial `children` permite que un componente envuelva a otros elementos o componentes.

```tsx
interface ICardProps {
  children: React.ReactNode
}

const Card = ({ children }: ICardProps): JSX.Element => {
  return <div className="p-4 border rounded bg-white shadow-md">{children}</div>
}

// Uso:
// <Card>
//   <Saludo nombre="React" />
//   <Boton texto="¡Click!" onClick={() => {}} />
// </Card>
```

### Patrón Compound Components

Este patrón permite que varios componentes trabajen juntos compartiendo contexto implícitamente. Ejemplo:

```tsx
// Tabs.tsx
interface ITabsProps {
  children: React.ReactNode
}

const Tabs = ({ children }: ITabsProps) => <div className="tabs">{children}</div>

const TabsList = ({ children }: { children: React.ReactNode }) => <div className="tabs-list">{children}</div>
const TabPanel = ({ children }: { children: React.ReactNode }) => <div className="tab-panel">{children}</div>

// Uso:
// <Tabs>
//   <TabsList>
//     <button>Tab 1</button>
//     <button>Tab 2</button>
//   </TabsList>
//   <TabPanel>Contenido del Tab 1</TabPanel>
// </Tabs>
```

---

## Render Props y HOC (Higher-Order Components)

### Render Props

Permite compartir lógica pasando una función como prop:

```tsx
interface IHoverProps {
  children: (isHovered: boolean) => React.ReactNode
}

const Hover = ({ children }: IHoverProps) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children(isHovered)}
    </div>
  )
}

// Uso:
// <Hover>
//   {isHovered => <span>{isHovered ? 'Encima' : 'Fuera'}</span>}
// </Hover>
```

### Higher-Order Components

Un HOC es una función que recibe un componente y devuelve uno nuevo con funcionalidad extendida.

```tsx
function withLogger<P>(Component: React.ComponentType<P>) {
  return (props: P) => {
    React.useEffect(() => {
      console.log('Renderizado', props)
    }, [props])
    return <Component {...props} />
  }
}

// Uso:
// const BotonConLogger = withLogger(Boton)
// <BotonConLogger texto="Log" onClick={() => {}} />
```

---

## Buenas prácticas y anti-patrones

- Define siempre las props con interfaces (`IMisProps`).
- Usa funciones flecha para componentes.
- Prefiere la composición y reutilización de componentes.
- No mutar las props dentro del componente.
- Usa nombres descriptivos y PascalCase para componentes.
- Evita clases, prefiere componentes funcionales.
- Usa `props.children` para mayor flexibilidad.
- Documenta tus componentes y props.
- No abuses del prop drilling (pasa solo las props necesarias).

### Ejemplo de error común

```tsx
// ❌ Error: mutar las props
const CambiaTexto = (props: { texto: string }) => {
  props.texto = 'nuevo' // No hagas esto
  return <span>{props.texto}</span>
}
```

```tsx
// ✅ Correcto: usa una variable local
const CambiaTexto = (props: { texto: string }) => {
  const nuevoTexto = 'nuevo'
  return <span>{nuevoTexto}</span>
}
```

---

## Tabla comparativa: props vs state

| Característica     | Props                    | State                    |
| ------------------ | ------------------------ | ------------------------ |
| Origen             | Componente padre         | Interno al componente    |
| Mutabilidad        | Inmutables               | Mutables                 |
| Uso principal      | Personalizar componentes | Gestionar datos internos |
| Quién los modifica | El padre                 | El propio componente     |

---

## Preguntas frecuentes

- ¿Cuándo usar props y cuándo usar context?
- ¿Cómo evitar el “prop drilling” excesivo?
- ¿Cómo documentar un componente y sus props?
- ¿Puedo usar React sin TypeScript?
- ¿Qué pasa si paso demasiadas props?

---

## Caso real: Mini proyecto de tarjetas

Vamos a construir un sistema de tarjetas reutilizables usando composición avanzada:

```tsx
// Card.tsx
interface ICardProps {
  header: React.ReactNode
  body: React.ReactNode
  footer?: React.ReactNode
}

const Card = ({ header, body, footer }: ICardProps) => (
  <div className="card">
    <div className="card-header">{header}</div>
    <div className="card-body">{body}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
)

// Uso:
// <Card
//   header={<h3>Mi tarjeta</h3>}
//   body={<p>Contenido</p>}
//   footer={<button>Acción</button>}
// />
```

---

## ¿Y ahora qué sigue?

¡Genial! Ya puedes crear componentes reutilizables y flexibles con props y patrones avanzados. En el próximo post aprenderás a manejar el **estado** y los **Hooks** para dotar de interactividad a tus componentes.

---

## Recursos recomendados

- [Documentación oficial de React (español)](https://es.react.dev/learn)

---

## Conclusión

Dominar los componentes funcionales, la composición y el uso de props es clave para construir interfaces escalables y mantenibles en React. ¡Practica, experimenta y sigue avanzando! ✨

---

<!--
Preguntas frecuentes:
- ¿Cómo puedo testear mis componentes funcionales?
- ¿Cómo optimizar el rendimiento de componentes reutilizables?
- ¿Qué errores típicos debo evitar al componer componentes?
-->
