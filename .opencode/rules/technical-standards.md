# OpenCode Rules - Portfolio Technical Standards

## Stack Técnico Base

- Framework: Next.js (App Router)
- Lenguaje: TypeScript (Strict mode habilitado)
- Estilos: Tailwind CSS v4 + Shadcn/ui
- Iconos: Lucide React

## Reglas de Arquitectura y Código

1. **Tipado Estricto:**
   - Queda estrictamente prohibido el uso del tipo `any`. Define interfaces o tipos explícitos para todas las props y datos.
2. **Comentarios de Código:**
   - Incluir únicamente comentarios relevantes que aporten valor a la arquitectura o mantenimiento futuro del software. Evitar comentarios obvios o innecesarios.
3. **Fidelidad al Diseño de Figma:**
   - Respetar rigurosamente los tokens de color verde neón (`emerald-500`) sobre fondos oscuros (`zinc-950`/`black`) definidos en `DESIGN.md`.
   - Implementar diseño Responsive estricto contemplando las tres variantes visibles en Figma: Desktop, Tablet y Mobile.
4. **Componentes:**
   - Priorizar Server Components. Usar `'use client'` únicamente cuando el componente requiera estado local, eventos o hooks de React.
   - Reutilizar componentes de `@/components/ui` (Shadcn/ui) adaptando sus estilos a la paleta del proyecto.
