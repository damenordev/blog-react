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
    'Considera usar un estilo diferente para las tareas completadas.'
  ],
  initialCode: `import React, { useState } from 'react';

function TodoList() {
  // Define los estados para las tareas y el input
  
  // Función para manejar el cambio en el input
  
  // Función para añadir una nueva tarea
  
  // Función para marcar una tarea como completada
  
  // Función para eliminar una tarea
  
  return (
    <div className="todo-app">
      <h2>Lista de Tareas</h2>
      
      {/* Formulario para añadir tareas */}
      
      {/* Lista de tareas */}
      
    </div>
  );
}

export default TodoList;
`,
  solution: `import React, { useState } from 'react';

function TodoList() {
  // Estado para las tareas
  const [todos, setTodos] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Crear un componente', completed: true }
  ]);
  
  // Estado para el input de nueva tarea
  const [newTodoText, setNewTodoText] = useState('');
  
  // Manejar cambio en el input
  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };
  
  // Añadir nueva tarea
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };
  
  // Marcar tarea como completada
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };
  
  // Eliminar tarea
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  
  return (
    <div className="todo-app">
      <h2>Lista de Tareas</h2>
      
      {/* Formulario para añadir tareas */}
      <form onSubmit={addTodo}>
        <input 
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="Añade una nueva tarea"
        />
        <button type="submit">Añadir</button>
      </form>
      
      {/* Lista de tareas */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p>No hay tareas pendientes.</p>}
    </div>
  );
}

export default TodoList;
`
}
