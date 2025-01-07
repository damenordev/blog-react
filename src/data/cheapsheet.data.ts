export const cheatSheet = [
  {
    title: 'Componentes del Servidor de React ',
    description:
      'Permiten renderizar componentes en el servidor antes de enviarlos al cliente, mejorando el rendimiento ⚡️ y la experiencia del usuario ✨. Esto reduce el tiempo de carga inicial y permite un mejor SEO .',
    code: `// dashboard.ts
import { createOrg } from '/org-actions.ts';
import { OrgPicker } from './org-picker.ts';

// ¡300k! ¡Es asíncrono!
export async function Dashboard() {
  const orgs = await ...;
  return (
    <div>
      <h1>Panel de Control</h1>
      <OrgPicker orgs={orgs} onCreateOrg={createOrg} />
    </div>
  );
}`,
  },
  {
    title: "'use client' ️",
    description:
      'Marca el código que se ejecuta en el navegador del usuario (lado del cliente).  Permite usar características de React como useState, useEffect, onClick, etc. ️',
    code: `// org-picker.ts
'use client';

// Componente regular como los que hemos estado construyendo durante años
export function OrgPicker({ orgs, onCreateOrg }) {
  // Las props orgs y onCreateOrg pueden venir de un componente del servidor.
  // ¡Este componente puede usar useState, useActionState, useEffect, onClick, etc.!
  return (
    <div>
      {/* OrgPicker es un componente del lado del cliente y podemos pasarle cosas del servidor */}
    </div>
  );
}`,
  },
  {
    title: 'Mejor Reporte de Errores ',
    description:
      'Desduplica errores automáticamente ♻️ e introduce manejadores onCaughtError y onUncaughtError para componentes raíz, facilitando la depuración .',
    code: `createRoot(container, {
  onCaughtError(error, errorInfo) {
    console.error('Error Atrapado', error, errorInfo.componentStack);
  },
  onUncaughtError: (error, errorInfo) => {
    console.error('Error No Atrapado', errorInfo.componentStack);
  },
});`,
  },
  {
    title: 'Acciones ⚙️',
    description:
      'Funciones asíncronas que manejan el envío de formularios, estados de error y actualizaciones optimistas  automáticamente, simplificando la gestión de formularios complejos .',
    code: `<form action={createOrg} />`,
  },
  {
    title: "'use server' ",
    description:
      'Marca funciones que se ejecutan en el servidor.  Estas funciones pueden ser llamadas desde el código del lado del cliente, permitiendo la ejecución de lógica sensible en el backend. ',
    code: `// org-actions.ts
'use server';

// Esta función puede ser llamada por el cliente
export async function createOrg(prevResult, formData) {
  // Crea una organización con la base de datos
  // Devuelve un resultado útil
}`,
  },
  {
    title: 'use ',
    description:
      'Lee recursos como promesas o contexto durante el renderizado, permitiendo el uso condicional de datos.  Esto facilita la gestión de datos asíncronos y el acceso al contexto. ',
    code: `const comments = use(commentsPromise);
const theme = use(ThemeContext);`,
  },
  {
    title: 'useActionState ⏳',
    description:
      'Gestiona el estado del formulario, proporcionando experiencias degradadas cuando JavaScript no está disponible.  Esto asegura que los formularios sigan funcionando incluso sin JavaScript. ✅',
    code: `const [error, submitAction, isPending] = useActionState(async () => { ... }, null);`,
  },
  {
    title: 'Soporte para Metadatos del Documento ',
    description: 'Automáticamente eleva las etiquetas <title>, <meta> y <link> al <head>, mejorando el SEO y la accesibilidad. ',
    code: `<title>Mi Blog</title>
<meta name="author" content="Kent" />`,
  },
  {
    title: 'Limpieza de la Retrollamada de Ref ',
    description: 'Las retrollamadas de Ref ahora pueden devolver una función de limpieza, previniendo fugas de memoria  y mejorando el rendimiento. ',
    code: `<input ref={(ref) => { console.log('cleanup'); }} />`,
  },
  {
    title: 'useFormStatus ',
    description: 'Accede al estado de un formulario padre sin pasar props en cascada, simplificando la gestión de formularios anidados. ',
    code: `const { pending, data, method, action } = useFormStatus();`,
  },
  {
    title: 'Hojas de Estilo con Precedencia ',
    description:
      'Soporte para insertar hojas de estilo con precedencia en entornos de renderizado concurrente, asegurando que los estilos se apliquen correctamente. ',
    code: `<link rel="stylesheet" href="foo.css" precedence="default" />
// Esto se colocará "más arriba en el documento"
<link rel="stylesheet" href="bar.css" precedence="high" />`,
  },
  {
    title: 'API de Contexto Simplificada ',
    description: 'Usa <Context> directamente en lugar de <Context.Provider>, haciendo el código más conciso y fácil de leer. ',
    code: `<LanguageContext value="pt-BR">{children}</LanguageContext>`,
  },
  {
    title: 'useOptimistic ✨',
    description:
      'Muestra un estado optimista mientras las solicitudes asíncronas están en progreso, mejorando la experiencia del usuario al proporcionar retroalimentación inmediata. ',
    code: `const [optimisticName, setOptimisticName] = useOptimistic(name);`,
  },
  {
    title: 'APIs de Precarga de Recursos ️',
    description: 'Precarga recursos como fuentes, scripts y estilos para optimizar el rendimiento y mejorar el tiempo de carga. ',
    code: `preload('https://example.com/font.woff', { as: 'font' });
preconnect('https://example.com');`,
  },
  {
    title: 'Valor Inicial de useDeferredValue ⏱️',
    description: 'El hook useDeferredValue ahora soporta un valor inicial, permitiendo un mejor control sobre el renderizado diferido. ⏳',
    code: `const deferredValue = useDeferredValue(value, initial);`,
  },
  {
    title: 'Soporte para Scripts Asíncronos ',
    description:
      'Renderiza scripts asíncronos en cualquier lugar de tu árbol de componentes, con deduplicación automática, evitando la carga duplicada de scripts. ✅',
    code: `<script async src="https://example.com/script.js" />`,
  },
  {
    title: 'Soporte para Elementos Personalizados ️',
    description:
      'React ahora soporta completamente elementos personalizados y maneja propiedades/atributos de manera consistente, permitiendo la integración con otras bibliotecas y frameworks. ',
    code: `<custom-element prop1="value" />`,
  },
  {
    title: 'Diferencias en Errores de Hidratación ',
    description:
      'Registro de errores mejorado para errores de hidratación, proporcionando una diferencia detallada cuando ocurren desajustes, facilitando la depuración de problemas de renderizado en el servidor. ️',
    code: `Uncaught Error: Hydration failed
<App>
  <span>
    Cliente
    Servidor
  </span>
</App>`,
  },
  {
    title: 'Compatibilidad Mejorada con Scripts de Terceros ',
    description:
      'Las etiquetas inesperadas en <head> y <body> se omiten durante la hidratación, evitando errores de desajuste y mejorando la compatibilidad con scripts de terceros. ',
    code: ``,
  },
  {
    title: 'ref como una Propiedad ',
    description: 'Pasa refs directamente como propiedades en componentes de función, simplificando el acceso a elementos del DOM. ',
    code: `<MyInput ref={inputRef} />`,
  },
]
