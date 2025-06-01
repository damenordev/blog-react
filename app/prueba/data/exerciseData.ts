import { Exercise } from '../types/Exercise'

export const exercises: Exercise[] = [
  {
    title: 'Creating Components with Props',
    difficulty: 'Beginner',
    description: 'Learn to create a React component and pass props to customize its behavior.',
    instructions: `
      <p>In this exercise, you will create a <code>Greeting</code> component that accepts a <code>name</code> prop and displays a personalized greeting.</p>
      <p>Your task:</p>
      <ol>
        <li>Implement the <code>Greeting</code> component that accepts a <code>name</code> prop</li>
        <li>The component should render "Hello, [name]!" where [name] is the value of the prop</li>
        <li>Add a default value for the <code>name</code> prop that displays "Hello, World!" if no name is provided</li>
      </ol>
      <p>You only need to modify the <code>Greeting.jsx</code> file.</p>
    `,
    files: {
      '/App.jsx': {
        code: `import Greeting from './Greeting';

export default function App() {
  return (
    <div className="app">
      <h1>Greeting Exercise</h1>
      <Greeting name="React Developer" />
      <Greeting />
    </div>
  );
}`,
        readOnly: true,
      },
      '/styles.css': {
        code: `.app {
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.greeting {
  background-color: #f0f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2a4365;
  margin-bottom: 2rem;
}`,
        hidden: true,
      },
      '/index.js': {
        code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        hidden: true,
      },
      '/Greeting.jsx': {
        code: `// Implement your Greeting component here
// The component should accept a 'name' prop
// It should render "Hello, [name]!" where [name] is the value of the prop
// If no name is provided, it should display "Hello, World!"

function Greeting() {
  // Your code here
  
}

export default Greeting;`,
        active: true,
      },
      '/Greeting.test.jsx': {
        code: `import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

test('renders greeting with provided name', () => {
  render(<Greeting name="Jane" />);
  expect(screen.getByText('Hello, Jane!')).toBeInTheDocument();
});

test('renders default greeting when no name is provided', () => {
  render(<Greeting />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});`,
        readOnly: true,
      },
    },
    dependencies: {},
    documentationLinks: [
      { title: 'Components and Props', url: 'https://react.dev/learn/passing-props-to-a-component' },
      { title: 'JSX In Depth', url: 'https://legacy.reactjs.org/docs/jsx-in-depth.html' },
    ],
    hints: [
      'Remember that props are passed as an object to your component. You can use destructuring to extract the <code>name</code> prop directly in the function parameters like this: <code>function Greeting({ name }) { ... }</code>',
    ],
  },
  {
    title: 'State Management with useState',
    difficulty: 'Beginner',
    description: 'Learn to manage component state using the useState hook in React.',
    instructions: `
      <p>In this exercise, you will create a counter component that uses the <code>useState</code> hook to track and update its count value.</p>
      <p>Your task:</p>
      <ol>
        <li>Implement the <code>Counter</code> component using the <code>useState</code> hook</li>
        <li>Initialize the count state to 0</li>
        <li>Create buttons to increment and decrement the counter</li>
        <li>Add a reset button that sets the counter back to 0</li>
        <li>Display the current count prominently</li>
      </ol>
      <p>You only need to modify the <code>Counter.jsx</code> file.</p>
    `,
    files: {
      '/App.jsx': {
        code: `import Counter from './Counter';

export default function App() {
  return (
    <div className="app">
      <h1>Counter Exercise</h1>
      <Counter />
    </div>
  );
}`,
        readOnly: true,
      },
      '/styles.css': {
        code: `.app {
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.counter {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.counter-value {
  font-size: 3rem;
  font-weight: bold;
  color: #2b6cb0;
  margin: 1rem 0;
}

.counter-controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:active {
  transform: translateY(1px);
}

button.increment {
  background-color: #4299e1;
  color: white;
  border: none;
}

button.decrement {
  background-color: #ed8936;
  color: white;
  border: none;
}

button.reset {
  background-color: #e53e3e;
  color: white;
  border: none;
}

h1 {
  color: #2a4365;
  margin-bottom: 2rem;
}`,
        hidden: true,
      },
      '/index.js': {
        code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        hidden: true,
      },
      '/Counter.jsx': {
        code: `// Implement your Counter component here
// Use the useState hook to create a state variable called 'count'
// Initialize the count to 0
// Create increment, decrement, and reset functions
// Render the current count and buttons to update it

import React from 'react';

function Counter() {
  // Your code here
  
}

export default Counter;`,
        active: true,
      },
      '/Counter.test.jsx': {
        code: `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('renders counter with initial value of 0', () => {
  render(<Counter />);
  const counterValue = screen.getByText('0');
  expect(counterValue).toBeInTheDocument();
});

test('increments counter when increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('decrements counter when decrement button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('resets counter when reset button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  expect(screen.getByText('0')).toBeInTheDocument();
});`,
        readOnly: true,
      },
    },
    dependencies: {},
    documentationLinks: [
      { title: 'useState Hook', url: 'https://react.dev/reference/react/useState' },
      { title: "State: A Component's Memory", url: 'https://react.dev/learn/state-a-components-memory' },
    ],
    hints: [
      "Import useState from React: <code>import React, { useState } from 'react';</code> then use it to create a state variable like: <code>const [count, setCount] = useState(0);</code>",
    ],
  },
  {
    title: 'Side Effects with useEffect',
    difficulty: 'Intermediate',
    description: 'Learn to manage side effects in React components using the useEffect hook.',
    instructions: `
      <p>In this exercise, you will create a timer component that uses the <code>useEffect</code> hook to manage a countdown timer.</p>
      <p>Your task:</p>
      <ol>
        <li>Implement the <code>Timer</code> component using <code>useState</code> and <code>useEffect</code> hooks</li>
        <li>Create a countdown timer that starts at 10 seconds</li>
        <li>The timer should decrement by 1 every second</li>
        <li>When the timer reaches 0, it should stop and display "Time's up!"</li>
        <li>Add start, pause, and reset buttons to control the timer</li>
        <li>Clean up the timer when the component unmounts</li>
      </ol>
      <p>You only need to modify the <code>Timer.jsx</code> file.</p>
    `,
    files: {
      '/App.jsx': {
        code: `import Timer from './Timer';

export default function App() {
  return (
    <div className="app">
      <h1>Timer Exercise</h1>
      <Timer />
    </div>
  );
}`,
        readOnly: true,
      },
      '/styles.css': {
        code: `.app {
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.timer {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer-display {
  font-size: 4rem;
  font-weight: bold;
  color: #2b6cb0;
  margin: 1rem 0;
}

.timer-message {
  font-size: 2rem;
  color: #e53e3e;
  font-weight: bold;
}

.timer-controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:active {
  transform: translateY(1px);
}

button.start {
  background-color: #48bb78;
  color: white;
  border: none;
}

button.pause {
  background-color: #ed8936;
  color: white;
  border: none;
}

button.reset {
  background-color: #e53e3e;
  color: white;
  border: none;
}

h1 {
  color: #2a4365;
  margin-bottom: 2rem;
}`,
        hidden: true,
      },
      '/index.js': {
        code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        hidden: true,
      },
      '/Timer.jsx': {
        code: `// Implement your Timer component here
// Use useState to track the remaining time and timer state
// Use useEffect to create and manage the timer
// Clean up the timer when the component unmounts

import React from 'react';

function Timer() {
  // Your code here
  
}

export default Timer;`,
        active: true,
      },
      '/Timer.test.jsx': {
        code: `import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from './Timer';

// Mock timer function
jest.useFakeTimers();

test('renders timer with initial value of 10', () => {
  render(<Timer />);
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('timer decrements when started', () => {
  render(<Timer />);
  
  const startButton = screen.getByText(/start/i);
  fireEvent.click(startButton);
  
  // Fast-forward time by 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  
  expect(screen.getByText('9')).toBeInTheDocument();
});

test('timer can be paused', () => {
  render(<Timer />);
  
  const startButton = screen.getByText(/start/i);
  fireEvent.click(startButton);
  
  // Fast-forward time by 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  
  expect(screen.getByText('9')).toBeInTheDocument();
  
  const pauseButton = screen.getByText(/pause/i);
  fireEvent.click(pauseButton);
  
  // Fast-forward more time
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  
  // Value should still be 9 because timer is paused
  expect(screen.getByText('9')).toBeInTheDocument();
});

test('timer can be reset', () => {
  render(<Timer />);
  
  const startButton = screen.getByText(/start/i);
  fireEvent.click(startButton);
  
  // Fast-forward time by 2 seconds
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  
  expect(screen.getByText('8')).toBeInTheDocument();
  
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('displays "Time\'s up!" when timer reaches 0', () => {
  render(<Timer />);
  
  const startButton = screen.getByText(/start/i);
  fireEvent.click(startButton);
  
  // Fast-forward time by 10 seconds
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  
  expect(screen.getByText("Time's up!")).toBeInTheDocument();
});`,
        readOnly: true,
      },
    },
    dependencies: {},
    documentationLinks: [
      { title: 'useEffect Hook', url: 'https://react.dev/reference/react/useEffect' },
      { title: 'Synchronizing with Effects', url: 'https://react.dev/learn/synchronizing-with-effects' },
      { title: 'Lifecycle of Reactive Effects', url: 'https://react.dev/learn/lifecycle-of-reactive-effects' },
    ],
    hints: [
      "You can use <code>setInterval</code> in the useEffect hook to create the timer. Don't forget to clean it up in the return function with <code>clearInterval</code> to prevent memory leaks.",
    ],
  },
  {
    title: 'Form Handling with Controlled Components',
    difficulty: 'Intermediate',
    description: 'Learn to create and manage forms with controlled components in React.',
    instructions: `
      <p>In this exercise, you will create a registration form component that uses controlled components to manage form state.</p>
      <p>Your task:</p>
      <ol>
        <li>Implement the <code>RegistrationForm</code> component with the following fields:</li>
        <ul>
          <li>Username (minimum 3 characters)</li>
          <li>Email (must be valid format)</li>
          <li>Password (minimum 6 characters)</li>
          <li>Confirm Password (must match password)</li>
        </ul>
        <li>Add validation for all fields</li>
        <li>Display validation errors below each field when invalid</li>
        <li>Disable the submit button until all fields are valid</li>
        <li>On form submission, display success message and form data</li>
      </ol>
      <p>You only need to modify the <code>RegistrationForm.jsx</code> file.</p>
    `,
    files: {
      '/App.jsx': {
        code: `import RegistrationForm from './RegistrationForm';

export default function App() {
  return (
    <div className="app">
      <h1>Registration Form Exercise</h1>
      <RegistrationForm />
    </div>
  );
}`,
        readOnly: true,
      },
      '/styles.css': {
        code: `.app {
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.form-container {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2d3748;
}

input {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  background-color: white;
}

input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
}

.error {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

button {
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #3182ce;
}

button:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}

.success-message {
  background-color: #48bb78;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.form-data {
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
}

.form-data pre {
  margin: 0;
  white-space: pre-wrap;
}

h1 {
  color: #2a4365;
  margin-bottom: 2rem;
  text-align: center;
}`,
        hidden: true,
      },
      '/index.js': {
        code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        hidden: true,
      },
      '/RegistrationForm.jsx': {
        code: `// Implement your RegistrationForm component here
// Create a form with username, email, password, and confirm password fields
// Add validation for all fields and display error messages
// Disable the submit button until all fields are valid
// On submission, display the form data and a success message

import React from 'react';

function RegistrationForm() {
  // Your code here
  
}

export default RegistrationForm;`,
        active: true,
      },
      '/RegistrationForm.test.jsx': {
        code: `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationForm from './RegistrationForm';

test('renders all form fields', () => {
  render(<RegistrationForm />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
});

test('submit button is initially disabled', () => {
  render(<RegistrationForm />);
  const submitButton = screen.getByRole('button', { name: /register|submit/i });
  expect(submitButton).toBeDisabled();
});

test('validates username minimum length', () => {
  render(<RegistrationForm />);
  const usernameInput = screen.getByLabelText(/username/i);
  
  fireEvent.change(usernameInput, { target: { value: 'ab' } });
  fireEvent.blur(usernameInput);
  
  expect(screen.getByText(/username must be at least 3 characters/i)).toBeInTheDocument();
});

test('validates email format', () => {
  render(<RegistrationForm />);
  const emailInput = screen.getByLabelText(/email/i);
  
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  fireEvent.blur(emailInput);
  
  expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
});

test('validates password minimum length', () => {
  render(<RegistrationForm />);
  const passwordInput = screen.getByLabelText(/^password$/i);
  
  fireEvent.change(passwordInput, { target: { value: 'short' } });
  fireEvent.blur(passwordInput);
  
  expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
});

test('validates passwords match', () => {
  render(<RegistrationForm />);
  const passwordInput = screen.getByLabelText(/^password$/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password456' } });
  fireEvent.blur(confirmPasswordInput);
  
  expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
});

test('enables submit button when all fields are valid', () => {
  render(<RegistrationForm />);
  
  const usernameInput = screen.getByLabelText(/username/i);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/^password$/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitButton = screen.getByRole('button', { name: /register|submit/i });
  
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  
  expect(submitButton).not.toBeDisabled();
});

test('displays success message on form submission', () => {
  render(<RegistrationForm />);
  
  const usernameInput = screen.getByLabelText(/username/i);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/^password$/i);
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitButton = screen.getByRole('button', { name: /register|submit/i });
  
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  
  fireEvent.click(submitButton);
  
  expect(screen.getByText(/registration successful/i)).toBeInTheDocument();
  expect(screen.getByText(/"username":/i)).toBeInTheDocument();
  expect(screen.getByText(/"email":/i)).toBeInTheDocument();
});`,
        readOnly: true,
      },
    },
    dependencies: {},
    documentationLinks: [
      { title: 'Forms in React', url: 'https://react.dev/reference/react-dom/components/input' },
      { title: 'Managing State in Forms', url: 'https://react.dev/learn/managing-state' },
      { title: 'Adding Interactivity', url: 'https://react.dev/learn/adding-interactivity' },
    ],
    hints: [
      'For email validation, you can use a regex pattern like: <code>/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/</code>. For form state, consider using a single object state with all form fields instead of separate state variables for each field.',
    ],
  },
  {
    title: 'Component Composition and State Lifting',
    difficulty: 'Advanced',
    description: 'Learn to compose components and lift state in a React application.',
    instructions: `
      <p>In this exercise, you will create a todo list application with multiple components and lifted state.</p>
      <p>Your task:</p>
      <ol>
        <li>Create a <code>TodoList</code> component that manages the list of todos</li>
        <li>Create a <code>TodoForm</code> component for adding new todos</li>
        <li>Create a <code>TodoItem</code> component for displaying individual todos</li>
        <li>Create a <code>TodoFilter</code> component for filtering todos (All, Active, Completed)</li>
        <li>Implement the ability to add, toggle, and delete todos</li>
        <li>Implement filtering functionality</li>
        <li>Display a counter showing the number of active todos</li>
        <li>Bonus: Implement the ability to edit todos</li>
      </ol>
      <p>You need to implement all the necessary components in their respective files.</p>
    `,
    files: {
      '/App.jsx': {
        code: `import TodoApp from './TodoApp';

export default function App() {
  return (
    <div className="app">
      <h1>Todo List Exercise</h1>
      <TodoApp />
    </div>
  );
}`,
        readOnly: true,
      },
      '/styles.css': {
        code: `.app {
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.todo-app {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.todo-count {
  background-color: #4299e1;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: bold;
}

.todo-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.todo-form input {
  flex-grow: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px 0 0 4px;
  background-color: white;
}

.todo-form input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
}

.todo-form button {
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.todo-form button:hover {
  background-color: #3182ce;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s;
}

.todo-item:hover {
  background-color: #edf2f7;
}

.todo-item input[type="checkbox"] {
  margin-right: 1rem;
  width: 1.25rem;
  height: 1.25rem;
}

.todo-item-text {
  flex-grow: 1;
  font-size: 1rem;
}

.todo-item-completed {
  text-decoration: line-through;
  color: #a0aec0;
}

.todo-item-buttons {
  display: flex;
  gap: 0.5rem;
}

.todo-item button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5568;
  transition: color 0.2s;
}

.todo-item button.delete {
  color: #e53e3e;
}

.todo-item button.edit {
  color: #3182ce;
}

.todo-item button:hover {
  color: #1a202c;
}

.todo-item button.delete:hover {
  color: #c53030;
}

.todo-item button.edit:hover {
  color: #2b6cb0;
}

.todo-filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.todo-filters button {
  background-color: transparent;
  border: 1px solid #cbd5e0;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.todo-filters button:hover {
  background-color: #edf2f7;
}

.todo-filters button.active {
  background-color: #4299e1;
  color: white;
  border-color: #4299e1;
}

h1 {
  color: #2a4365;
  margin-bottom: 2rem;
  text-align: center;
}

.todo-edit-form {
  display: flex;
  flex-grow: 1;
  margin-right: 0.5rem;
}

.todo-edit-form input {
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  background-color: white;
}

.todo-edit-form input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
}

.todo-edit-form button {
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;
}

.todo-edit-form button.cancel {
  background-color: #e53e3e;
}`,
        hidden: true,
      },
      '/index.js': {
        code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        hidden: true,
      },
      '/TodoApp.jsx': {
        code: `// Implement your TodoApp component here
// This is the main component that holds the state
// It should render TodoForm, TodoList, and TodoFilter

import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function TodoApp() {
  // Your code here
  
}

export default TodoApp;`,
        active: true,
      },
      '/TodoForm.jsx': {
        code: `// Implement your TodoForm component here
// This component should handle the form for adding new todos

import React from 'react';

function TodoForm({ onAddTodo }) {
  // Your code here
  
}

export default TodoForm;`,
      },
      '/TodoList.jsx': {
        code: `// Implement your TodoList component here
// This component should render the list of todos based on the current filter
// It should map through the filtered todos and render TodoItem components

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  // Your code here
  
}

export default TodoList;`,
      },
      '/TodoItem.jsx': {
        code: `// Implement your TodoItem component here
// This component should display a single todo item
// It should include a checkbox for toggling completion status,
// a delete button, and an edit button (bonus)

import React from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // Your code here
  
}

export default TodoItem;`,
      },
      '/TodoFilter.jsx': {
        code: `// Implement your TodoFilter component here
// This component should provide buttons for filtering todos
// (All, Active, Completed)

import React from 'react';

function TodoFilter({ filter, onFilterChange }) {
  // Your code here
  
}

export default TodoFilter;`,
      },
      '/TodoApp.test.jsx': {
        code: `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from './TodoApp';

test('renders todo app with form and empty list', () => {
  render(<TodoApp />);
  expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
  expect(screen.getByText(/0 items left/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByRole('button', { name: /add/i });
  
  fireEvent.change(input, { target: { value: 'Test new todo' } });
  fireEvent.click(addButton);
  
  expect(screen.getByText('Test new todo')).toBeInTheDocument();
  expect(screen.getByText(/1 item left/i)).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<TodoApp />);
  
  // Add a todo first
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByRole('button', { name: /add/i });
  fireEvent.change(input, { target: { value: 'Toggle me' } });
  fireEvent.click(addButton);
  
  // Now toggle it
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  // The todo text should have a completed class
  const todoText = screen.getByText('Toggle me');
  expect(todoText).toHaveClass('todo-item-completed');
  expect(screen.getByText(/0 items left/i)).toBeInTheDocument();
});

test('can delete a todo', () => {
  render(<TodoApp />);
  
  // Add a todo first
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByRole('button', { name: /add/i });
  fireEvent.change(input, { target: { value: 'Delete me' } });
  fireEvent.click(addButton);
  
  // Now delete it
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
  expect(screen.getByText(/0 items left/i)).toBeInTheDocument();
});

test('can filter todos', async () => {
  render(<TodoApp />);
  
  // Add two todos
  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByRole('button', { name: /add/i });
  
  fireEvent.change(input, { target: { value: 'Active todo' } });
  fireEvent.click(addButton);
  
  fireEvent.change(input, { target: { value: 'Completed todo' } });
  fireEvent.click(addButton);
  
  // Complete the second todo
  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[1]);
  
  // Apply "Active" filter
  const activeFilterButton = screen.getByRole('button', { name: /active/i });
  fireEvent.click(activeFilterButton);
  
  // Should only see the active todo
  expect(screen.getByText('Active todo')).toBeInTheDocument();
  expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();
  
  // Apply "Completed" filter
  const completedFilterButton = screen.getByRole('button', { name: /completed/i });
  fireEvent.click(completedFilterButton);
  
  // Should only see the completed todo
  expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
  expect(screen.getByText('Completed todo')).toBeInTheDocument();
  
  // Apply "All" filter
  const allFilterButton = screen.getByRole('button', { name: /all/i });
  fireEvent.click(allFilterButton);
  
  // Should see both todos
  expect(screen.getByText('Active todo')).toBeInTheDocument();
  expect(screen.getByText('Completed todo')).toBeInTheDocument();
});`,
        readOnly: true,
      },
    },
    dependencies: {},
    documentationLinks: [
      { title: 'Lifting State Up', url: 'https://react.dev/learn/sharing-state-between-components' },
      { title: 'Thinking in React', url: 'https://react.dev/learn/thinking-in-react' },
      { title: 'Component Composition', url: 'https://react.dev/learn/passing-props-to-a-component' },
    ],
    hints: [
      'The TodoApp component should manage all state and pass it down to child components. Consider using useState for the todos array, current filter, and any other state. Each todo should have at minimum an id, text, and completed property.',
    ],
  },
]
