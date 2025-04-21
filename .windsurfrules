# Development Guide

## Technical Stack

TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.

## Key Principles

- Technical, concise and modular code with precise examples
- Functional and declarative patterns; avoid classes
- Iteration and modularization over code duplication
- Descriptive variable names with auxiliary verbs (isLoading, hasError)

## File Structure

- `src/components` → Reusable components (folder with capitalized name)
- `src/constants` → Constants and immutable values (app.constants.ts)
- `src/providers` → Context providers and global logic
- `src/styles` → Global style files
- `src/types` → Type and interface definitions
- `src/ui` → Reusable UI components

## Naming Conventions

- Lowercase directory with hyphens (components/drag-and-drop)
- Component files in PascalCase (FormBuilder.tsx)
- Descriptive suffixes for example:
  - x.util.ts → Utilities
  - app.constants.ts → Constants
  - api.service.ts → Services
- Interfaces with I prefix (IDropdownProps) and clear reference to their use
- Types with T prefix (TUserRole) and clear reference to their use

## Exports

- Use barrel files (index.ts) whenever possible and when it won't lead to ambiguity or code conflicts
- Direct export in constants: const FormBuilder = () => { }
- Don't use export { Component } or export default unless strictly necessary

## TypeScript Usage

- Use TypeScript throughout the code
- Prefer interface over type, except in specific cases and avoid any
- Avoid enum; use objects or maps instead
- Define props with interfaces (IDropdownProps)

## Syntax and Format

- Use if return instead of nested conditionals or switch: if (!user) return Loading
- Prefer arrow functions: const fetchData = async () => { }
- Use declarative JSX and avoid unnecessary code
- Whenever possible optimize code lines while maintaining readability

## UI and Styling

- Use Shadcn UI, Radix UI and Tailwind CSS for components and styles
- Implement responsive design with Tailwind, adopting mobile-first approach

## Performance Optimization

- Minimize use client, useEffect and setState; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Dynamic loading (dynamic()) for non-critical components
- Optimize images:
  - Use WebP
  - Include dimensions to prevent layout shifts
  - Implement lazy loading

## Key Conventions

- Optimize Web Vitals (LCP, CLS, FID)
- Limit use client:
  - Prefer server components and Next.js SSR
  - Use only for browser APIs in small components
  - Avoid for data fetching or state management

## Importaciones organizadas

los imports deben tener un orden, primero las externas, despues las que hacen referencia con @ del mismo paquete y despues las ./, los grupos separados por una linea

## Prettier

{
"arrowParens": "avoid",
"bracketSpacing": true,
"quoteProps": "as-needed",
"singleQuote": true,
"semi": false,
"printWidth": 160,
"useTabs": false,
"tabWidth": 2,
"trailingComma": "es5",
"jsxSingleQuote": false
}

> 📌 Follow Next.js official documentation on Data Fetching, Rendering and Routing

!IMPORTANT: Always respond in spanish

_NOTA_: si inicio el prompt con la palabra secuencial, usa la herramienta sequentialthinking
