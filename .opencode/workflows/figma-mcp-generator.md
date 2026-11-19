# Workflow: Figma MCP Component Generator

Cuando el usuario pida desarrollar una sección usando un nodo o enlace de Figma:

1. **Lectura con MCP:**
   - Ejecuta la herramienta MCP de Figma para inspeccionar el `node-id` o la sección indicada.
   - Analiza si la vista corresponde a Desktop, Tablet o Mobile.

2. **Validación Visual & Tokens:**
   - Aplica los colores de `DESIGN.md` (fondo oscuro, bordes neutros y acentos verde neón).
   - Asegúrate de construir la interfaz responsive usando las clases utilitarias de Tailwind (`md:`, `lg:`).

3. **Construcción y Limpieza:**
   - Escribe el código en TypeScript limpio, sin `any`.
   - Verifica que los estados hover, focus y active respeten el verde neón de acento.
