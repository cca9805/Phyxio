# Arreglar Visualización de Fórmulas en Termodinámica

## Introducción

En los temas finales de termodinámica (temas 12 y 13), en el div `formula-expression` del `formula-container` se está mostrando el título del tema en lugar de las fórmulas matemáticas, como debería ser según el patrón establecido en mecánica y electromagnetismo.

## Glossary

- **formula-expression**: Div que contiene la fórmula matemática renderizada con LaTeX
- **formula-container**: Contenedor principal que incluye la fórmula, botones y calculadoras
- **LaTeX rendering**: Renderizado de fórmulas matemáticas usando la librería react-latex-next
- **TheoryV2 Component**: Componente que maneja la visualización de teoría y fórmulas

## Requirements

### Requirement 1

**User Story:** Como usuario, quiero ver las fórmulas matemáticas correctamente renderizadas en el div formula-expression de los temas de termodinámica, para tener la misma experiencia visual que en mecánica y electromagnetismo.

#### Acceptance Criteria

1. WHEN el usuario navega a un tema de termodinámica, THE sistema SHALL mostrar las fórmulas matemáticas en LaTeX en el div formula-expression
2. THE fórmulas SHALL renderizarse con el mismo formato y estilo que en mecánica y electromagnetismo
3. THE div formula-expression SHALL contener solo la fórmula matemática, no títulos o texto adicional
4. THE fórmulas SHALL ser legibles y correctamente formateadas
5. THE renderizado SHALL ser consistente en todos los subtemas de termodinámica

### Requirement 2

**User Story:** Como desarrollador, quiero identificar por qué las fórmulas no se muestran correctamente en termodinámica, para aplicar la corrección apropiada.

#### Acceptance Criteria

1. THE sistema SHALL verificar que las expresiones LaTeX están correctamente definidas en los componentes Formula
2. THE sistema SHALL verificar que el componente Latex está renderizando correctamente las expresiones
3. THE sistema SHALL verificar que no hay conflictos de CSS que oculten las fórmulas
4. THE sistema SHALL verificar que las props se pasan correctamente al componente Formula
5. THE sistema SHALL comparar la implementación con temas que funcionan correctamente (como gravitación)

### Requirement 3

**User Story:** Como usuario, quiero que el comportamiento visual sea consistente entre todos los temas de física, para tener una experiencia de usuario uniforme.

#### Acceptance Criteria

1. THE temas de termodinámica SHALL tener el mismo aspecto visual que mecánica y electromagnetismo
2. THE div formula-expression SHALL mostrar fórmulas matemáticas en todos los temas
3. THE estilos CSS SHALL ser consistentes entre todos los temas
4. THE componentes Formula SHALL comportarse de manera idéntica en todos los temas
5. THE renderizado de LaTeX SHALL funcionar correctamente en todos los contextos