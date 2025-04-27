# 🔥 Renderizado Condicional y Listas en React 19: Domina la UI Dinámica (¡Trucos y Anti-patrones!)

¿Quieres que tu interfaz sea realmente interactiva y moderna? Aprende a controlar el renderizado condicional y la gestión de listas como un profesional. ¡Descubre los errores que debes evitar y los trucos que usan los cracks del frontend!

---

## ¿Qué es el renderizado condicional y por qué es esencial para apps modernas?

El renderizado condicional te permite mostrar u ocultar elementos según el estado o las props. Es la clave para crear interfaces personalizadas, adaptables y centradas en el usuario.

- Mejora la experiencia del usuario mostrando solo lo relevante.
- Permite interfaces limpias y adaptativas.
- Esencial para flujos como login, permisos, loading, etc.
- Permite mostrar mensajes personalizados y feedback inmediato.
- Optimiza recursos y evita renders innecesarios.

> **¿Sabías esto?** Un renderizado condicional bien implementado puede reducir la confusión y aumentar la satisfacción del usuario.

### Ejemplo básico (¡Impleméntalo ya!)

```tsx
const isLoggedIn = true

return <div>{isLoggedIn ? <p>Bienvenido, usuario</p> : <button>Iniciar sesión</button>}</div>
```

---

## Patrones avanzados de renderizado condicional

### Early return (retorno temprano)

Evita anidar condicionales usando retornos tempranos:

```tsx
if (!user) return <Loading />
if (hasError) return <ErrorMsg />
return <Dashboard user={user} />
```

### Render Props y HOC

Permiten encapsular lógica condicional y reutilizarla:

```tsx
const WithPermission = ({ allowed, children }: { allowed: boolean; children: React.ReactNode }) => (allowed ? <>{children}</> : <span>No autorizado</span>)
```

### Enum para múltiples condiciones

```tsx
const STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  READY: 'ready',
} as const

switch (status) {
  case STATUS.LOADING:
    return <Spinner />
  case STATUS.ERROR:
    return <ErrorMsg />
  case STATUS.READY:
    return <Content />
}
```

### Suspense y carga dinámica

Usa `React.lazy` y `Suspense` para cargar componentes bajo demanda:

```tsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'))

<Suspense fallback={<Loader />}>
  <LazyComponent />
</Suspense>
```

---

## Listas en React: patrones, optimización y anti-patrones

Renderizar listas es fundamental para mostrar colecciones de datos. React lo hace fácil, pero hay que tener cuidado con las keys y la performance.

### Ejemplo básico

```tsx
const usuarios = ['Ana', 'Luis', 'Carlos']

return (
  <ul>
    {usuarios.map(usuario => (
      <li key={usuario}>{usuario}</li>
    ))}
  </ul>
)
```

### Buenas prácticas para listas

- Usa keys únicas y estables (evita el índice salvo que no haya otra opción).
- Fragmenta listas grandes (paginación, infinite scroll o virtualización con librerías como react-window).
- Memoiza componentes de lista con `React.memo` para evitar renders innecesarios.
- Usa métodos inmutables (`map`, `filter`, `slice`) para modificar listas.
- Mantén la lógica de renderizado fuera del JSX cuando sea compleja.

### Ejemplo de virtualización

```tsx
import { FixedSizeList as List } from 'react-window'
;<List height={400} itemCount={items.length} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>{items[index]}</div>}
</List>
```

### Anti-patrones frecuentes

- Renderizar listas enormes sin paginar ni virtualizar.
- Usar keys no únicas o cambiantes.
- Mutar la lista original en vez de crear una copia.
- Mezclar lógica de filtrado y renderizado en el mismo bloque.
- Renderizar componentes pesados dentro de listas sin memoización.

---

## Optimización de performance

- **React.memo**: Evita renders innecesarios de componentes hijos.
- **useMemo**: Memoriza cálculos costosos que dependen de listas.
- **Lazy loading**: Carga componentes solo cuando se necesitan.
- **Batch updates**: Agrupa actualizaciones de estado para reducir renders.
- **Windowing/virtualización**: Solo renderiza los elementos visibles en pantalla.
- **Evita side effects en render**: Usa useEffect para lógica fuera del render.

---

## Accesibilidad y UX en condicionales y listas

- Usa roles y atributos ARIA para listas dinámicas.
- Proporciona mensajes claros para estados vacíos o de error.
- Asegura el foco correcto tras cambios condicionales.
- Usa elementos semánticos (`ul`, `ol`, `li`) para listas.
- No ocultes información relevante solo visualmente (usa `aria-hidden` con cuidado).

---

## Casos reales y patrones del mundo profesional

### Skeleton loading

Muestra un esqueleto mientras cargas datos:

```tsx
const isLoading = true
return isLoading ? <Skeleton /> : <Content />
```

### Placeholder para listas vacías

```tsx
{items.length === 0 ? <p>No hay resultados</p> : (
  <ul>{items.map(...)} </ul>
)}
```

### Renderizado condicional con animaciones

Integra librerías como Framer Motion para animar la aparición/desaparición de elementos:

```tsx
import { motion, AnimatePresence } from 'framer-motion'
;<AnimatePresence>
  {show && (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      Hola
    </motion.div>
  )}
</AnimatePresence>
```

---

## Preguntas frecuentes ampliadas

- ¿Cómo optimizar listas con miles de elementos?
- ¿Cuándo usar Suspense vs. condicionales simples?
- ¿Qué diferencia hay entre ocultar y desmontar un componente?
- ¿Cómo evitar flickering en listas dinámicas?
- ¿Es mejor paginar o virtualizar?
- ¿Qué librerías recomiendan para listas virtualizadas?
- ¿Cómo manejar la accesibilidad en listas condicionales?

---

## Recursos recomendados para dominar el renderizado dinámico

- [Documentación oficial de React (español)](https://es.react.dev/learn)

---

## Conclusión: ¡Haz que tu UI destaque!

Dominar el renderizado condicional y las listas te permitirá crear interfaces modernas, rápidas y accesibles. Aplica estos patrones y evita los anti-patrones para que tu código sea escalable y tus usuarios queden encantados. ¿Tienes dudas o trucos propios? ¡Compártelos en los comentarios y sigue aprendiendo!

---

## ¿Y ahora qué sigue?

¡Felicidades! Ahora dominas el renderizado condicional y las listas en React 19. En el siguiente post aprenderás sobre **eventos y formularios** para captar la interacción del usuario de forma declarativa y segura. ¡No te lo pierdas!

---
