import { IExercise } from '../types'

export const themeSwitcherExercise: IExercise = {
  id: 'theme-switcher',
  title: 'Selector de Tema',
  description: 'Crea un componente que permita al usuario cambiar entre temas claro y oscuro.',
  difficulty: 'intermediate',
  hints: [
    'Usa `useState` para mantener el tema actual (claro u oscuro).',
    'Aplica diferentes estilos CSS basados en el tema seleccionado.',
    'Crea un botón o switch para cambiar entre temas.',
    'Usa className condicional o estilos en línea para aplicar los estilos del tema.',
    'Considera utilizar variables CSS para definir los colores de cada tema.'
  ],
  initialCode: `
// Asume que tienes estilos globales o un archivo CSS importado para los temas

function ThemeSwitcher() {
  // Define tu estado para el tema aquí (ej. 'light' o 'dark')
  const [theme, setTheme] = React.useState('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Devuelve los elementos usando React.createElement
  // Aplica una clase basada en el tema al div principal
  return React.createElement('div', { className: \`theme-\${theme}\`, style: {
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      // Estilos básicos para demostración
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff'
    } },
    React.createElement('h2', null, 'Selector de Tema'),
    React.createElement('p', null, \`Tema actual: \${theme}\`),
    React.createElement('button', { onClick: toggleTheme }, 'Cambiar Tema')
  );
}

// Variable result necesaria
const result = React.createElement(ThemeSwitcher);
`,
  solution: `
// Asume que tienes estilos globales o un archivo CSS importado para los temas
// Ejemplo de cómo podrían definirse las variables CSS:
/*
:root {
  --background-light: #fff;
  --text-light: #333;
  --background-dark: #333;
  --text-dark: #fff;
}

.theme-light {
  background-color: var(--background-light);
  color: var(--text-light);
}

.theme-dark {
  background-color: var(--background-dark);
  color: var(--text-dark);
}
*/

function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // useEffect para cambiar la clase en el body o un elemento contenedor global si fuera necesario
  // React.useEffect(() => {
  //   document.body.className = \`theme-\${theme}\`;
  // }, [theme]);

  return React.createElement('div', { 
    className: \`theme-\${theme}\`, // Aplica la clase del tema
    style: { padding: '20px', border: '1px solid #ccc', borderRadius: '5px' } // Estilos base
  }, 
    React.createElement('h1', null, 'Selector de Tema'), 
    React.createElement('p', null, \`El tema actual es: \${theme}\`),
    React.createElement('button', { onClick: toggleTheme }, 'Cambiar Tema')
  );
}

// Variable result necesaria
const result = React.createElement(ThemeSwitcher);
`
}
