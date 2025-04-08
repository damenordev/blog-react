export const cheatSheet = [
  {
    title: 'Componentes del Servidor de React',
    description:
      'Los componentes del servidor son una característica fundamental que permite realizar el renderizado inicial en el servidor antes de enviarlo al cliente. Esto proporciona múltiples beneficios: reduce significativamente el tiempo de carga inicial, mejora el SEO al proporcionar contenido completamente renderizado a los crawlers, reduce la carga de JavaScript en el cliente, y permite acceder directamente a recursos del servidor como bases de datos. También optimiza el uso de recursos del servidor y mejora la experiencia de usuario al mostrar contenido significativo más rápidamente.',
    code: `// dashboard.ts
import { createOrg } from '/org-actions.ts';
import { OrgPicker } from './org-picker.ts';

// Asíncrono
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
    title: 'use client',
    description:
      'La directiva "use client" es un marcador crucial que delimita explícitamente el código que debe ejecutarse en el navegador del usuario. Esta directiva es especialmente importante en la arquitectura de React 19, ya que permite utilizar todas las características interactivas de React como useState, useEffect, y manejadores de eventos. También optimiza el bundle al separar claramente el código del cliente del código del servidor, reduciendo así el JavaScript enviado al navegador. Es fundamental para crear componentes interactivos que necesitan acceso a APIs del navegador o estado local.',
    code: `// org-picker.ts
'use client';

export function OrgPicker({ orgs, onCreateOrg }) {
  return (
    <div>
      {/* OrgPicker es un componente del lado del cliente y podemos pasarle cosas del servidor */}
    </div>
  );
}`,
  },
  {
    title: 'Mejor Reporte de Errores',
    description:
      'El sistema de reporte de errores en React 19 ha sido completamente rediseñado para proporcionar información más precisa y útil durante el desarrollo. Incluye deduplicación automática de errores para evitar spam en la consola, trazas de componentes más detalladas, y nuevos manejadores onCaughtError y onUncaughtError que permiten un control más granular sobre el manejo de errores. Esta mejora facilita significativamente la depuración y permite implementar sistemas de logging más robustos.',
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
    title: 'Acciones',
    description:
      'Las Acciones son una nueva abstracción para manejar operaciones asíncronas en formularios y otros elementos interactivos. Proporcionan una forma declarativa de manejar envíos de formularios, estados de carga, errores y actualizaciones optimistas. Las Acciones se integran perfectamente con el sistema de componentes del servidor y pueden manejar automáticamente casos edge como reenvíos de formularios y errores de red. También incluyen soporte para rollback automático en caso de error.',
    code: `<form action={createOrg} />`,
  },
  {
    title: 'use server',
    description:
      'La directiva "use server" marca funciones que deben ejecutarse exclusivamente en el servidor. Estas funciones pueden ser invocadas desde componentes del cliente pero se ejecutan en el servidor, proporcionando una capa de seguridad adicional para operaciones sensibles. Permiten realizar operaciones como acceso a bases de datos o APIs privadas de forma segura, mientras mantienen una API simple y familiar para los desarrolladores. También incluyen optimizaciones automáticas para la serialización de datos entre cliente y servidor.',
    code: `// org-actions.ts
'use server';

export async function createOrg(prevResult, formData) {
  // Crea una organización con la base de datos
  // Devuelve un resultado útil
}`,
  },
  {
    title: 'use',
    description:
      'El hook "use" es una nueva adición que simplifica el manejo de recursos asíncronos y contexto durante el renderizado. A diferencia de otros hooks, "use" puede ser llamado condicionalmente y dentro de ciclos, lo que lo hace más flexible que useEffect o useState. Permite suspender el renderizado mientras se cargan datos, y se integra perfectamente con el nuevo sistema de renderizado concurrente de React.',
    code: `const comments = use(commentsPromise);
const theme = use(ThemeContext);`,
  },
  {
    title: 'useActionState',
    description:
      'useActionState es un hook especializado para manejar el estado de formularios y acciones asíncronas. Proporciona una API unificada para manejar estados de carga, errores y éxito, mientras mantiene la funcionalidad básica incluso cuando JavaScript está deshabilitado. Incluye soporte para actualizaciones optimistas, manejo de errores granular y estados de carga, todo mientras mantiene la accesibilidad y el soporte para progressive enhancement.',
    code: `const [error, submitAction, isPending] = useActionState(async () => { ... }, null);`,
  },
  {
    title: 'Soporte para Metadatos del Documento',
    description:
      'React 19 introduce un sistema nativo para manejar metadatos del documento HTML, permitiendo la gestión declarativa de elementos como title, meta y link desde cualquier componente. El sistema automáticamente resuelve conflictos y prioridades, asegura que los metadatos se actualicen correctamente durante la navegación, y proporciona una API unificada para SEO y gestión de metadatos sociales.',
    code: `<title>Mi Blog</title>
<meta name="author" content="Kent" />`,
  },
  {
    title: 'Limpieza de la Retrollamada de Ref',
    description:
      'La nueva API de refs permite definir funciones de limpieza que se ejecutan automáticamente cuando el componente se desmonta o la ref cambia. Esto previene fugas de memoria y simplifica la gestión de recursos externos como observadores de intersección o eventos del DOM. La API es más intuitiva y reduce la necesidad de useEffect para la limpieza de refs.',
    code: `<input ref={(ref) => { console.log('cleanup'); }} />`,
  },
  {
    title: 'useFormStatus',
    description:
      'useFormStatus es un nuevo hook que proporciona información detallada sobre el estado de un formulario ancestro sin necesidad de prop drilling. Permite acceder a información como el estado de envío, datos del formulario, método HTTP utilizado y la acción asociada. Es especialmente útil para crear componentes de UI que necesitan responder al estado del formulario, como botones de envío o indicadores de carga.',
    code: `const { pending, data, method, action } = useFormStatus();`,
  },
  {
    title: 'Hojas de Estilo con Precedencia',
    description:
      'El nuevo sistema de gestión de hojas de estilo permite controlar explícitamente el orden de carga y aplicación de estilos mediante el atributo precedence. Esto es especialmente importante en aplicaciones con renderizado concurrente, donde el orden de los estilos puede afectar significativamente la apariencia final. También incluye optimizaciones automáticas para la carga de estilos y prevención de FOUC (Flash of Unstyled Content).',
    code: `<link rel="stylesheet" href="foo.css" precedence="default" />
// Esto se colocará "más arriba en el documento"
<link rel="stylesheet" href="bar.css" precedence="high" />`,
  },
  {
    title: 'API de Contexto Simplificada',
    description:
      'La API de Contexto ha sido simplificada para permitir el uso directo de componentes de contexto sin necesidad del Provider. Esto reduce el boilerplate, mejora la legibilidad del código y mantiene todas las características existentes del sistema de contexto. También incluye mejoras en el rendimiento y la depuración de contextos anidados.',
    code: `<LanguageContext value="pt-BR">{children}</LanguageContext>`,
  },
  {
    title: 'useOptimistic',
    description:
      'useOptimistic es un hook diseñado para mejorar la experiencia de usuario durante operaciones asíncronas. Permite mostrar cambios en la UI inmediatamente mientras se espera la confirmación del servidor, con soporte automático para rollback en caso de error. Incluye manejo de conflictos, cola de actualizaciones y estrategias de reconciliación para casos complejos.',
    code: `const [optimisticName, setOptimisticName] = useOptimistic(name);`,
  },
  {
    title: 'APIs de Precarga de Recursos',
    description:
      'Las nuevas APIs de precarga permiten optimizar la carga de recursos como fuentes, scripts y hojas de estilo de forma declarativa. Incluyen soporte para priorización, carga condicional y diferentes estrategias de precarga. También proporcionan análisis automático de dependencias y optimizaciones para mejorar el rendimiento de carga inicial.',
    code: `preload('https://example.com/font.woff', { as: 'font' });
preconnect('https://example.com');`,
  },
  {
    title: 'Valor Inicial de useDeferredValue',
    description:
      'useDeferredValue ha sido mejorado para aceptar un valor inicial, proporcionando mejor control sobre el comportamiento durante la primera renderización. Esto es especialmente útil para mejorar la experiencia de usuario durante la carga inicial y permite implementar patrones más sofisticados de loading states y transiciones suaves.',
    code: `const deferredValue = useDeferredValue(value, initial);`,
  },
  {
    title: 'Soporte para Scripts Asíncronos',
    description:
      'React 19 mejora significativamente el manejo de scripts asíncronos, permitiendo su renderizado en cualquier parte del árbol de componentes con deduplicación automática. Incluye optimizaciones para el orden de carga, priorización y manejo de dependencias. También proporciona mejor soporte para scripts de terceros y analytics.',
    code: `<script async src="https://example.com/script.js" />`,
  },
  {
    title: 'Soporte para Elementos Personalizados',
    description:
      'El soporte para Web Components y elementos personalizados ha sido mejorado significativamente. React ahora maneja de forma consistente las propiedades y atributos de elementos personalizados, facilita la interoperabilidad con otras bibliotecas y frameworks, y proporciona mejor soporte para eventos personalizados y slots.',
    code: `<custom-element prop1="value" />`,
  },
  {
    title: 'Diferencias en Errores de Hidratación',
    description:
      'Los errores de hidratación ahora proporcionan información más detallada y útil, incluyendo diferencias exactas entre el contenido renderizado en el servidor y el cliente. Esto facilita significativamente la depuración de problemas de hidratación y mejora la experiencia de desarrollo. También incluye sugerencias automáticas para resolver problemas comunes.',
    code: `Uncaught Error: Hydration failed
<App>
  <span>
    Cliente
    Servidor
  </span>
</App>`,
  },
  {
    title: 'Compatibilidad Mejorada con Scripts de Terceros',
    description:
      'React 19 introduce un manejo más robusto de scripts de terceros, ignorando automáticamente las etiquetas inesperadas durante la hidratación para evitar errores. Esto mejora la compatibilidad con herramientas de analytics, chatbots y otros scripts de terceros que modifican el DOM. También incluye nuevas APIs para integrar mejor con scripts externos.',
    code: ``,
  },
  {
    title: 'ref como una Propiedad',
    description:
      'La API de refs ha sido simplificada para permitir pasar refs directamente como propiedades en componentes de función. Esto elimina la necesidad de forwardRef en muchos casos, reduce el boilerplate y mejora la ergonomía del código. También incluye mejor soporte para tipos en TypeScript y mejor inferencia de tipos.',
    code: `<MyInput ref={inputRef} />`,
  },
];
