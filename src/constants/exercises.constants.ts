interface IExercise {
  id: string
  title: string
  description: string
  difficulty: 'principiante' | 'intermedio' | 'avanzado'
  initialCode: string
  solution: string
  hints: string[]
}

export const REACT_EXERCISES: IExercise[] = [
  {
    id: 'hello-world',
    title: 'Hola Mundo en React',
    description: 'Crea un componente que muestre "Hola Mundo" en un elemento h1 con color azul.',
    difficulty: 'principiante',
    initialCode: `function App() {
  // Retorna un elemento h1 con el texto "Hola Mundo" y color azul
  return (
    // Tu código aquí
    null // Añadido null como placeholder válido
  );
}

// No modifiques esta línea
const result = <App />;`,
    solution: `function App() {
  // Retorna un elemento h1 con el texto "Hola Mundo" y color azul
  return (
    <h1 style={{ color: 'blue' }}>Hola Mundo</h1>
  );
}

// No modifiques esta línea
const result = <App />;`,
    hints: [
      'Usa la propiedad style para aplicar estilos inline',
      'Los estilos en JSX se pasan como un objeto',
    ],
  },
  {
    id: 'counter',
    title: 'Contador Simple',
    description: 'Crea un contador que incremente y decremente un valor utilizando useState.',
    difficulty: 'principiante',
    initialCode: `function App() {
  // Usa useState para crear un contador
  // Añade botones para incrementar y decrementar
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      {/* Añade los botones aquí */}
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    solution: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    hints: [
      'Usa React.useState para crear una variable de estado',
      'Crea funciones para incrementar y decrementar el contador',
      'Usa el evento onClick en los botones',
    ],
  },
  {
    id: 'todo-list',
    title: 'Lista de Tareas',
    description: 'Crea una lista de tareas simple donde puedas añadir nuevas tareas.',
    difficulty: 'intermedio',
    initialCode: `function App() {
  // Crea una lista de tareas con un input para añadir nuevas tareas
  // Usa useState para manejar el estado de las tareas y el input
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');

  const addTask = () => {
    // Implementa la lógica para añadir tareas
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea" 
        />
        <button onClick={addTask}>Añadir</button>
      </div>
      <ul>
        {/* Mapea y muestra las tareas aquí */}
      </ul>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    solution: `function App() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Nueva tarea" 
        />
        <button onClick={addTask}>Añadir</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    hints: [
      'Usa dos estados: uno para la lista de tareas y otro para el valor del input',
      'Crea una función para añadir nuevas tareas',
      'Usa el método map para renderizar la lista de tareas',
    ],
  },
  {
    id: 'fetch-data',
    title: 'Obtener Datos de una API',
    description: 'Usa useEffect para obtener datos de una API y mostrarlos en la interfaz.',
    difficulty: 'avanzado',
    initialCode: `function App() {
  // Usa useEffect para obtener datos de la API JSONPlaceholder
  // URL: https://jsonplaceholder.typicode.com/users
  // Muestra una lista de usuarios con sus nombres y emails
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Implementa la lógica para obtener datos
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {/* Mapea y muestra los usuarios aquí */}
      </ul>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    solution: `function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    hints: [
      'Usa useEffect con un array de dependencias vacío para ejecutar el código solo una vez',
      'Utiliza fetch o axios para realizar la petición HTTP',
      'Maneja los estados de carga y error',
    ],
  },
  {
    id: 'theme-switcher',
    title: 'Selector de Tema',
    description: 'Crea un selector de tema (claro/oscuro) utilizando useState.',
    difficulty: 'intermedio',
    initialCode: `function App() {
  // Crea un selector de tema que cambie entre modo claro y oscuro
  // Usa useState para manejar el estado del tema
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    // Implementa la lógica para cambiar el tema
  };

  const styles = {
    container: {
      // Estilos dinámicos aquí
    },
    button: {
      // Estilos dinámicos aquí
    }
  };

  return (
    <div style={styles.container}>
      <h2>Selector de Tema</h2>
      <p>Tema actual: {theme}</p>
      <button 
        style={styles.button} 
        onClick={toggleTheme}
      >
        {/* Texto del botón dinámico aquí */}
      </button>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    solution: `function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    button: {
      backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
      color: theme === 'light' ? '#ffffff' : '#333333',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <h2>Selector de Tema</h2>
      <p>Tema actual: {theme}</p>
      <button 
        style={styles.button} 
        onClick={toggleTheme}
      >
        Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
}

// No modifiques esta línea
const result = <App />;`,
    hints: [
      'Usa useState para guardar el tema actual',
      'Crea una función para alternar entre los temas',
      'Aplica estilos condicionales basados en el tema actual',
    ],
  },
]
