import { IExercise } from '../types'

export const todoListExercise: IExercise = {
  id: 'todo-list',
  title: 'Lista de Tareas',
  description: 'Crea una aplicación simple de lista de tareas con opciones para añadir, completar y eliminar tareas.',
  difficulty: 'intermediate',
  hints: [
    'Usa `useState` para almacenar el array de tareas y el texto de la nueva tarea.',
    'Cada tarea debe tener un id único, texto y estado de completado.',
    'Implementa un formulario para añadir nuevas tareas.',
    'Añade botones para completar y eliminar tareas.',
    'Considera usar un estilo diferente para las tareas completadas.',
    'Un botón para eliminar cada tarea individualmente puede ser útil.',
  ],
  initialCode: `
function TodoList() {
  // Define los estados para las tareas y el input
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');

  // Función para añadir una tarea
  const addTask = () => {
    if (newTask.trim() !== '') {
      // Asegúrate de añadir un objeto con id único y texto
      setTasks([...tasks, { id: Date.now(), text: newTask }]); 
      setNewTask(''); // Limpia el input
    }
  };

  // Función para eliminar una tarea (necesitarás pasar el id)
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return React.createElement('div', null, 
    React.createElement('h2', null, 'Lista de Tareas'),
    React.createElement('input', { 
      type: 'text', 
      value: newTask, 
      onChange: (e) => setNewTask(e.target.value), 
      placeholder: 'Nueva tarea' 
    }),
    React.createElement('button', { onClick: addTask }, 'Añadir'),
    React.createElement('ul', null, 
      tasks.map(task => (
        React.createElement('li', { key: task.id }, 
          task.text, 
          React.createElement('button', { onClick: () => removeTask(task.id), style: { marginLeft: '10px' } }, 'Eliminar')
        )
      ))
    )
  );
}

// La variable result es necesaria para el playground
const result = React.createElement(TodoList);
`,
  solution: `
function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return; // No añadir tareas vacías
    const taskToAdd = { 
      id: Date.now(), // Usar timestamp como id simple
      text: newTask,
      completed: false // Añadir estado de completado
    };
    setTasks(prevTasks => [...prevTasks, taskToAdd]);
    setNewTask(''); // Limpiar input después de añadir
  };

  const handleRemoveTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return React.createElement('div', null,
    React.createElement('h1', null, 'Lista de Tareas'),
    React.createElement('div', { style: { display: 'flex', marginBottom: '10px' } },
      React.createElement('input', {
        type: 'text',
        value: newTask,
        onChange: handleInputChange,
        placeholder: 'Añadir nueva tarea'
      }),
      React.createElement('button', { onClick: handleAddTask }, 'Añadir')
    ),
    React.createElement('ul', { style: { listStyle: 'none', padding: 0 } },
      tasks.map(task => (
        React.createElement('li', { 
          key: task.id, 
          style: { 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '5px',
            textDecoration: task.completed ? 'line-through' : 'none' 
          }
        },
          React.createElement('span', { 
            onClick: () => handleToggleComplete(task.id),
            style: { cursor: 'pointer' }
          }, task.text),
          React.createElement('button', { onClick: () => handleRemoveTask(task.id) }, 'Eliminar')
        )
      ))
    )
  );
}

// La variable result es necesaria para el playground
const result = React.createElement(TodoList);
`
}
