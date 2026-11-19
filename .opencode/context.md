# Project Context & Architecture: toiadev-pro

## Estado Actual del Proyecto

- **Fase:** Inicialización y configuración de arquitectura base.
- **Stack:** Next.js (App Router), TypeScript (Strict), Tailwind CSS v4, Shadcn/ui.
- **Integraciones:** MCP de Figma y MCP de Shadcn.

## Estructura del Repositorio

- `app/` -> Páginas principales, layouts y estilos globales (`globals.css`).
- `components/ui/` -> Componentes atómicos instalados vía Shadcn.
- `components/sections/` -> Componentes de sección basados en el diseño de Figma (por desarrollar).
- `.opencode/rules/` -> Estándares técnicos obligatorios.
- `.opencode/workflows/` -> Guías paso a paso para el agente (ej: generador de Figma).
- `DESIGN.md` -> Reglas de extracción dinámica de tokens y estilos desde Figma.
