# Design System Specification & Figma MCP Dynamic Extraction

Este documento establece las reglas de extracción automatizada para convertir nodos de Figma en código de Next.js (App Router), TypeScript y Tailwind CSS v4 utilizando el MCP (Model Context Protocol) de Figma.

---

## 1. Extracción Estricta de Fills y Colores desde Figma (MCP)

El agente OpenCode NO debe utilizar colores ni fondos hardcodeados o predeterminados. Todos los valores visuales deben extraerse en tiempo real mediante la herramienta `get_node` del MCP de Figma.

### A. Fondos y Superficies (Backgrounds & Cards)

- **Extracción de `fills`:** Leer el array `fills` de cada nodo o contenedor.
- **Mapeo a Tailwind CSS v4:**
  - Extraer el código Hexadecimal exacto (`#HEX`) del fondo.
  - Aplicar la clase de Tailwind correspondiente (`bg-black`, `bg-neutral-950`, `bg-neutral-900`) o utilizar el valor exacto como clase arbitraria (`bg-[#HEX]`) si es un color personalizado del Kit UI.

### B. Elementos de Acento, Textos y Bordes

- **Textos:** Extraer el color exacto del nodo de texto (`fills`) y aplicarlo como `text-[#HEX]` o su equivalente en Tailwind.
- **Bordes / Separadores:** Extraer los datos de la propiedad `strokes` y aplicar `border-[#HEX]`, respetando el grosor (`strokeWeight`) en la escala de Tailwind o `border-[Xpx]`.

---

## 2. Tipografía y Espaciados (Escala Tailwind vs. Valores Arbitrarios)

OpenCode debe trasladar las propiedades exactas de tipografía y maquetación obtenidas del JSON del nodo siguiendo esta jerarquía:

### A. Prioridad a la Escala Estándar de Tailwind (Múltiplos de 4)

Para mantener un código limpio, **siempre que el valor en píxeles de Figma coincida con la escala estándar de Tailwind**, se debe usar dicha clase en lugar de corchetes:

- **Espaciados, Paddings y Gaps:**
  - `18px` $\rightarrow$ `pt-4.5` (o el equivalente más cercano en escala)
  - `24px` $\rightarrow$ `px-6` / `py-6`
  - `16px` $\rightarrow$ `p-4` / `gap-4`
- **Solo si el valor es único o no estandarizado**, se permite usar sintaxis arbitraria exacta (ej: `pt-[18px]`, `gap-[13px]`).

### B. Layout (Auto-Layout -> Tailwind)

- **Flex Direction:**
  - Auto-Layout Horizontal $\rightarrow$ `flex flex-row`
  - Auto-Layout Vertical $\rightarrow$ `flex flex-col`
- **Sizing:**
  - `Hug contents` $\rightarrow$ `w-fit` / `h-fit`
  - `Fill container` $\rightarrow$ `w-full` / `h-full` / `flex-1`
  - Ancho / Alto fijo $\rightarrow$ `w-[Xpx]` / `h-[Xpx]`

### C. Tipografía

- **Font Size & Line Height:** Mapear a clases estándar de Tailwind (`text-sm`, `text-base`, `text-lg`, etc.) o usar valores exactos si el diseño lo requiere (`text-[15px] leading-[22px]`).
- **Font Weight:** Traducir los pesos de Figma a `font-normal`, `font-medium`, `font-semibold`, `font-bold`.

---

## 3. Responsive Breakpoints

El diseño en Figma cuenta con variantes explícitas para Desktop, Tablet y Mobile:

- **Desktop (Referencia base):** Estructura principal o prefijo `lg:`.
- **Tablet:** Prefijo `md:` para pantallas medianas (768px - 1023px).
- **Mobile:** Pantallas pequeñas (`< md`), aplicando anchos completos `w-full` y layouts verticales `flex-col`.

---

## 4. Reutilización de Componentes (Shadcn/ui)

Cuando el nodo corresponda a una entidad interactiva estándar, OpenCode utilizará la librería Shadcn/ui (`@/components/ui`) adaptando sus estilos con los colores exactos leídos de Figma:

1. **Cards:** `<Card>` y `<CardContent>` con fondos y bordes extraídos del nodo.
2. **Botones:** `<Button>` aplicando el color de acento del nodo y su estado hover.
3. **Badges:** `<Badge>` mapeando el fondo sutil y borde detectado en Figma.
4. **Inputs:** `<Input>` y `<Textarea>` adaptando fondos y estados `focus`.

---

## 5. Salida y Calidad de Código

- **Tipado TypeScript Estricto:** Prohibido el uso de `any`. Toda prop debe tener su interface explícita.
- **Sin comentarios innecesarios:** Incluir solo aquellos que aporten contexto arquitectónico relevante para el mantenimiento del software.
