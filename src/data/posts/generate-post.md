# Prompt para Autogeneración de Post Técnico sobre React 19 (v2)

**Objetivo:** Generar automáticamente el siguiente post de la serie sobre React 19, manteniendo la calidad técnica, el estilo didáctico y la coherencia con el proyecto.

> **IMPORTANTE:** Cada post debe tener una extensión mínima de **150 a 200 líneas** de Markdown (sin contar metadatos YAML), para asegurar profundidad, ejemplos y explicaciones detalladas.
> **NUEVO:** Los posts deben incluir ejemplos de patrones avanzados (composición, compound components, render props, HOC, anti-patrones, tablas comparativas, analogías, recursos visuales en markdown) y responder dudas frecuentes.

## Instrucciones Detalladas para la IA

> **IMPORTANTE:** Siempre debes resolver el proceso usando la herramienta `sequentialthinking` (secuencial tool). Cada paso, decisión, investigación y generación de contenido debe ser realizado y justificado secuencialmente, mostrando el razonamiento y asegurando trazabilidad en cada etapa.
> **NUEVO:** El usuario ha solicitado que los posts sean **más detallados y extensos**. Asegúrate de cubrir los conceptos en profundidad, usando explicaciones técnicas, analogías, ejemplos avanzados, recomendaciones prácticas y subtemas adicionales cuando sea relevante. El objetivo es que cada post sea una guía completa y didáctica, no solo una introducción superficial.
> **AVISO DE ESTRUCTURA:** Ahora los posts están organizados en subcarpetas temáticas (por ejemplo, `src/data/posts/react/03/03-post.md`). Antes de crear un nuevo post, revisa y actualiza la checklist en `posts-checklist.md` al nivel de este archivo. Asegúrate de que la estructura y numeración sean correctas.
> **Checklist:** Cada vez que completes un post, ejercicio o test, márcalo en el archivo `posts-checklist.md`.

1. **Consulta las Reglas Fundamentales:** Antes de empezar, **revisa y aplica estrictamente** las directrices definidas en las memorias `user_global` y `user_14945584417329206655`. Esto incluye estilo de código, patrones, nomenclatura, estructura de archivos y uso de TypeScript.

2. **Identifica el Siguiente Tema:**

   - Busca en la carpeta `src/data/posts/` (y subcarpetas) el directorio con el número correlativo más alto (ej: `01/`, `02/`).
   - Dentro de esa carpeta, busca el archivo Markdown (`.md`) principal del post con el mismo prefijo numérico (ej: `02-titulo.md`).
   - Lee la sección titulada `## ¿Y ahora qué sigue?` (o similar) en ese último post para determinar el tema principal del nuevo artículo.
   - **Si no encuentras un post anterior o la sección no es clara, detente y pide clarificación al usuario.**

3. **Estructura de Carpetas y Archivos (obligatorio):**

   - Crea una nueva carpeta en `src/data/posts/` con el siguiente número correlativo (ej: `03/`).
   - Todos los archivos generados para ese post deben ir dentro de esa carpeta y comenzar con el mismo número (ej: `03-post.md`, `03-exercise.prompts.md`, `03-tests.json`, etc.).
   - El archivo principal debe reflejar el número y el título en el nombre y en el YAML.

4. **Investiga y Planifica (usando secuencial tool):**

   - Realiza una búsqueda web (usando `search_web`, `mcp2_brave_web_search` o `mcp4_duckduckgo_web_search`) sobre el tema identificado. Prioriza la documentación oficial de React 19 (`react.dev`), MDN y blogs técnicos reconocidos.
   - Si se mencionan librerías o conceptos específicos (ej: `useState`, `useEffect`), busca documentación detallada sobre ellos (`mcp0_resolve-library-id` y `mcp0_get-library-docs` si aplica).
   - Estructura el contenido siguiendo las secciones obligatorias listadas abajo.

5. **Genera el Contenido del Post (.md) (usando secuencial tool):**

   - **Nombre de Archivo:** Usa el formato `NN-post.md` dentro de la nueva carpeta `NN/`.
   - **Metadata YAML:** Incluye al inicio:
     - `title`: 'NN. Título Claro y Descriptivo' (NN es el número del post).
     - `description`: Breve resumen atractivo del contenido.
     - `date`: Fecha de creación en formato `YYYY-MM-DD`.
     - `tags`: Array de 3-5 etiquetas relevantes en minúsculas (ej: `['react', 'componentes', 'props']`).
     - `author`: 'damenordev'.
   - **Contenido Principal (Secciones Obligatorias):**
     - `# Título Principal (coincidente con metadata)`
     - `## Introducción`: Motivadora, contextualizando el tema y conectando con el post anterior.
     - `## Concepto Clave 1`: Explicación técnica clara y concisa.
     - `## Concepto Clave 2` (si aplica): Ídem.
     - `## Ejemplo Práctico`: Código **TypeScript (.tsx)** funcional, conciso, bien comentado, que ilustre los conceptos. **Debe seguir estrictamente las reglas de las memorias.**
     - `## Buenas Prácticas`: Listado de 3-5 consejos directamente basados en las reglas de las memorias y aplicables al tema del post.
     - `## ¿Y ahora qué sigue?`: Anticipa claramente el tema del _siguiente_ (revisar checklist) post de la serie, creando continuidad.
     - `## Recursos Recomendados`: Enlaces a documentación oficial o artículos de alta calidad (prioriza React 19).
     - `## Conclusión`: Cierre motivador que refuerce lo aprendido.
   - **Tono y Estilo:** Mantén un tono **amigable, motivador, técnico pero accesible** (similar al post `01-...`). Dirígete a un público **principiante-intermedio**. Usa emojis con moderación para añadir dinamismo (🚀, ✨,💡).

6. **Genera Archivos Auxiliares (usando secuencial tool, opcional pero recomendado):**
   - **Ejercicios (`NN-exsercise.prompts.md`):** Crea 3-5 ejercicios prácticos que refuercen los conceptos. Pueden ser de completar código, depurar, explicar con palabras propias. Deben ser claros y tener un objetivo de aprendizaje definido.
   - **Tests (`NN-tests.json`):** Genera 5 preguntas de opción múltiple en el formato JSON definido (`question`, `options` [{label, value}], `answer`). Deben evaluar la comprensión de los puntos clave, con opciones verosímiles pero solo una correcta. Varía la posición de la respuesta correcta.

---

**Notas clave:**

- **Siempre utiliza la herramienta secuencial (`sequentialthinking`) para cada paso del proceso, desde la identificación del tema hasta la generación de contenido y archivos auxiliares.**
- **Todos los ejemplos, referencias y código deben estar actualizados a React 19.**
- Si alguna instrucción entra en conflicto con las reglas de las memorias, prioriza las reglas de las memorias.
- Si el tema del siguiente post no es claro, detente y pide aclaración al usuario.

---

**Ejemplo de estructura base y buenas prácticas**

````md
---
title: '03. Estado y Hooks en React 19'
description: 'Domina el estado y los Hooks en React 19 para crear aplicaciones interactivas y escalables.'
date: '2025-04-25'
tags: ['react', 'estado', 'hooks', 'interactividad']
author: 'damenordev'
---

¡Seguimos construyendo con React 19! 🚀 En el post anterior vimos componentes funcionales y props. Ahora, vamos a sumergirnos en el **estado** y los **Hooks**...

## ¿Qué es el Estado?

Imagina un contador... [Explicación técnica, analogía, ejemplo simple en TSX]

```tsx
// Ejemplo de estado simple
interface ContadorProps {
  inicial: number
}

const Contador = ({ inicial }: ContadorProps): JSX.Element => {
  const [contador, setContador] = useState(inicial)

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  )
}

export default Contador
```

## Dominando los Hooks

Los Hooks son una forma de... [Explicación, cómo usarlos, ejemplo de uso]

```tsx
// Ejemplo de uso de Hooks
import { useState, useEffect } from 'react'

const Ejemplo = () => {
  const [nombre, setNombre] = useState('')

  useEffect(() => {
    console.log('¡Hola, mundo!')
  }, [])

  return (
    <div>
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
      <p>Hola, {nombre}!</p>
    </div>
  )
}

export default Ejemplo
```

## Ejemplo Práctico: Aplicación de Tareas

Vamos a crear una aplicación de tareas que utilice... [Explicación del objetivo, código TSX completo del componente y su uso]

## Buenas Prácticas (Según Nuestras Reglas)

1. **Nombres Descriptivos:** Usa PascalCase para componentes (`UserCard`) e interfaces (`IUserCardProps`).
2. **Tipado Explícito:** Siempre define interfaces para las props (IPrefix).
3. **Desestructuración:** Desestructura las props en la firma de la función.
4. **Funciones Flecha:** Prefiere funciones flecha para definir componentes.
5. **Exportaciones:** Usa `export const` para componentes reutilizables.

## ¿Y ahora qué sigue?

¡Felicidades! Ya sabes crear componentes interactivos con estado y Hooks. En el próximo post, descubriremos cómo **optimizar el rendimiento** de nuestras aplicaciones React. ¡Prepárate para la velocidad! 🚀

## Recursos Recomendados

- [React 19 Docs: Estado y Hooks](https://react.dev/learn/state-and-hooks)
- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Conclusión

El estado y los Hooks son fundamentales para crear aplicaciones interactivas en React... ¡Sigue practicando y construyendo! ✨

---

**Nota Final:** Este prompt está diseñado para ser usado por una IA avanzada como tú. Adáptalo si es necesario, pero mantén el foco en la calidad, coherencia y seguimiento de las reglas del proyecto.
