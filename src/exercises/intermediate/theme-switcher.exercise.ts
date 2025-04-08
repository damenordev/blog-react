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
  initialCode: `import React, { useState } from 'react';
import './styles.css'; // Asume que tienes un archivo CSS para los estilos

function ThemeSwitcher() {
  // Define tu estado para el tema aquí
  
  // Función para cambiar entre temas
  
  return (
    <div className="theme-container">
      <h2>Selector de Tema</h2>
      
      {/* Contenido de ejemplo que mostrará los diferentes estilos */}
      <div className="content">
        <h3>Título de Ejemplo</h3>
        <p>Este es un párrafo de ejemplo para mostrar los diferentes estilos según el tema seleccionado.</p>
        <button>Botón de Ejemplo</button>
      </div>
      
      {/* Botón o switch para cambiar el tema */}
      
    </div>
  );
}

export default ThemeSwitcher;
`,
  solution: `import React, { useState } from 'react';
import './styles.css'; // Asume que tienes un archivo CSS para los estilos

function ThemeSwitcher() {
  // Estado para controlar el tema actual
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // Función para alternar entre temas
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  // Clases CSS basadas en el tema actual
  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';
  
  return (
    <div className={\`theme-container \${themeClass}\`}>
      <h2>Selector de Tema</h2>
      
      {/* Contenido de ejemplo */}
      <div className="content">
        <h3>Título de Ejemplo</h3>
        <p>Este es un párrafo de ejemplo para mostrar los diferentes estilos según el tema seleccionado.</p>
        <button className="example-button">Botón de Ejemplo</button>
      </div>
      
      {/* Botón para cambiar el tema */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
      >
        Cambiar a tema {isDarkTheme ? 'claro' : 'oscuro'}
      </button>
      
      {/* Estilos CSS en línea */}
      <style jsx={\`
        /* Estilos base */
        .theme-container {
          padding: 20px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        /* Tema claro (predeterminado) */
        .light-theme {
          background-color: #f5f5f5;
          color: #333;
        }
        
        .light-theme button {
          background-color: #4a90e2;
          color: white;
        }
        
        /* Tema oscuro */
        .dark-theme {
          background-color: #333;
          color: #f5f5f5;
        }
        
        .dark-theme button {
          background-color: #61dafb;
          color: #333;
        }
        
        /* Otros estilos */
        .content {
          margin: 20px 0;
        }
        
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }
        
        .theme-toggle {
          margin-top: 20px;
        }
      \`}</style>
    </div>
  );
}

export default ThemeSwitcher;
`
}
