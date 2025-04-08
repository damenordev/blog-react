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
  initialCode: `function DataFetcher() {
  const [data, setData] = React.useState(null); // Cambiado useState por React.useState
  const [loading, setLoading] = React.useState(true); // Cambiado useState por React.useState
  const [error, setError] = React.useState(null); // Cambiado useState por React.useState

  React.useEffect(() => { // Cambiado useEffect por React.useEffect
    // Tu código para obtener datos aquí
    // Actualiza los estados de data, loading y error según corresponda
    // Ejemplo: fetch('[https://jsonplaceholder.typicode.com/posts?_limit=5')](https://jsonplaceholder.typicode.com/posts?_limit=5'))
    //   .then(response => {
    //     if (!response.ok) throw new Error('Network response was not ok');
    //     return response.json();
    //   })
    //   .then(setData)
    //   .catch(setError)
    //   .finally(() => setLoading(false));
    
    // Simulación de fetch para el ejemplo sin import
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulamos una espera de red
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        // Simulamos datos recibidos
        const fakeData = [
          { id: 1, title: 'Post de ejemplo 1' },
          { id: 2, title: 'Post de ejemplo 2' },
        ];
        setData(fakeData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Ocurrió un error desconocido'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    
  }, []);

  if (loading) {
    return React.createElement('div', null, 'Cargando...'); // Usando React.createElement
  }

  if (error) {
    return React.createElement('div', null, 'Error: ', error.message); // Usando React.createElement
  }

  return (
    React.createElement('div', null, 
      React.createElement('h1', null, 'Datos de la API'),
      data ? (
        React.createElement('ul', null, 
          data.map(item => React.createElement('li', { key: item.id }, item.title))
        )
      ) : (
        React.createElement('p', null, 'No hay datos para mostrar.')
      )
    )
  );
}

// No es necesario export default aquí para el playground
// export default DataFetcher; 

// La variable 'result' que espera el playground
const result = React.createElement(DataFetcher); 
}
`,
  solution: `
function DataFetcher() {
  const [data, setData] = React.useState([]); 
  const [loading, setLoading] = React.useState(true); 
  const [error, setError] = React.useState(null); 

  React.useEffect(() => { 
    const fetchData = async () => {
      setLoading(true); 
      setError(null); 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'); 
        if (!response.ok) {
          throw new Error('HTTP error! status: ' + response.status); 
        }
        const fetchedResult = await response.json(); 
        setData(fetchedResult);
      } catch (err) {
        if (err instanceof Error) {
           setError(err);
        } else {
           setError(new Error('Ocurrió un error desconocido'));
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return React.createElement('div', null, 'Cargando...'); 
  }

  if (error) {
    return React.createElement('div', null, 'Error: ', error.message); 
  }

  return React.createElement('div', null, 
    React.createElement('h1', null, 'Datos de la API (Posts)'),
    data.length > 0 ? (
       React.createElement('ul', null, 
         data.map(item => (
           React.createElement('li', { key: item.id }, item.title)
         ))
       )
    ) : (
      React.createElement('p', null, 'No se encontraron datos.')
    )
  );
}

const result = React.createElement(DataFetcher); 
}
`
}
