import { IExercise } from '../types'

export const fetchApiDataExercise: IExercise = {
  id: 'fetch-api-data',
  title: 'Obtener Datos de una API',
  description: 'Crea un componente que obtenga datos de una API pública (ej. JSONPlaceholder) y los muestre en una lista.',
  difficulty: 'advanced',
  hints: [
    'Puedes usar `fetch` o `axios` para hacer la solicitud HTTP.',
    'No olvides manejar el estado de carga para evitar mostrar una lista vacía inicialmente.',
    'Considera usar un `try...catch` dentro de `useEffect` para el manejo de errores.',
    'Usa `useEffect` para realizar la solicitud a la API cuando el componente se monte.',
    'Usa `useState` para almacenar los datos obtenidos y el estado de carga.',
    'Muestra un mensaje de "Cargando..." mientras se obtienen los datos.',
    'Muestra los datos en una lista.',
    'Maneja posibles errores durante la solicitud.',
  ],
  initialCode: `import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Tu código para obtener datos aquí
    // Actualiza los estados de data, loading y error según corresponda
    // Ejemplo: fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //   .then(response => {
    //     if (!response.ok) throw new Error('Network response was not ok');
    //     return response.json();
    //   })
    //   .then(setData)
    //   .catch(setError)
    //   .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      {/* Tu código para mostrar los datos aquí */}
      {/* Ejemplo: data && <ul>{data.map(item => <li key={item.id}>{item.title}</li>)}</ul> */}
      {data ? (
        <ul>
          {/* Renderiza los items aquí si data no es null */}
        </ul>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </div>
  );
}

export default DataFetcher;
`,
  solution: `import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]); // Inicializa como array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia la carga
      setError(null); // Resetea errores previos
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'); // Limitamos a 10 posts
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
         // Aseguramos que err sea un objeto Error
        if (err instanceof Error) {
           setError(err);
        } else {
           setError(new Error('Ocurrió un error desconocido'));
        }
      } finally {
        setLoading(false); // Finaliza la carga independientemente del resultado
      }
    };

    fetchData();
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    // Mostramos el mensaje de error
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Datos de la API (Posts)</h1>
      {data.length > 0 ? (
         <ul>
           {data.map(item => (
             <li key={item.id}>{item.title}</li>
           ))}
         </ul>
      ) : (
        <p>No se encontraron datos.</p> // Mensaje si no hay datos después de cargar
      )}
    </div>
  );
}

export default DataFetcher;
`
}
