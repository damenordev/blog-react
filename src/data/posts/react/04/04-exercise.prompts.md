# Ejercicios prácticos: Renderizado condicional y listas en React 19

## 1. Renderizado condicional básico

Completa el siguiente componente para que muestre “Bienvenido” solo si la prop `autenticado` es `true`. Si no, debe mostrar “Por favor, inicia sesión”.

```tsx
interface IProps {
  autenticado: boolean
}

export const Mensaje = ({ autenticado }: IProps): JSX.Element => {
  // TODO: renderiza condicionalmente el mensaje correcto
  return autenticado ? <p>Bienvenido</p> : <p>Por favor, inicia sesión</p>
}
```

## 2. Mostrar/Ocultar elemento

Crea un componente que muestre un botón “Mostrar detalles”. Al hacer clic, debe alternar la visibilidad de un párrafo con el texto “Detalles del usuario”.

```tsx
import { useState } from 'react';

export const MostrarDetalles = (): JSX.Element => {
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostrar detalles</button>
      {mostrar && <p>Detalles del usuario</p>}
    </div>
  );
};
```

## 3. Lista dinámica de tareas

Implementa un componente que permita agregar tareas a una lista y mostrarlas. Usa un input y un botón para agregar, y renderiza la lista usando `.map()` y una key única.

```tsx
import { useState } from 'react';

interface ITarea {
  id: number;
  texto: string;
}

export const ListaTareas = (): JSX.Element => {
  const [tareas, setTareas] = useState<ITarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    const nuevaTareaObj: ITarea = {
      id: tareas.length + 1,
      texto: nuevaTarea,
    };
    setTareas([...tareas, nuevaTareaObj]);
    setNuevaTarea('');
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
};
```

## 4. Anti-patrón: key incorrecta

Corrige el siguiente componente para que use una key adecuada:

```tsx
const frutas = ['manzana', 'pera', 'plátano']

export const ListaFrutas = (): JSX.Element => (
  <ul>
    {frutas.map((fruta, i) => (
      <li key={fruta}>{fruta}</li>
    ))}
  </ul>
)
```

## 5. Renderizado condicional avanzado

Crea un componente que reciba una lista de usuarios y renderice:
- “No hay usuarios” si la lista está vacía.
- Un `<ul>` con los nombres si hay usuarios.

Tip: Usa if return para máxima claridad y legibilidad.

```tsx
interface IUsuario {
  id: number;
  nombre: string;
}

export const ListaUsuarios = ({ usuarios }: { usuarios: IUsuario[] }): JSX.Element => {
  if (usuarios.length === 0) {
    return <p>No hay usuarios</p>;
  }

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
};
