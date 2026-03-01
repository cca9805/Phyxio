# Requirements Document

## Introduction

Implementar una estructura de navegación jerárquica de 4 niveles para el sistema de física, donde cada nivel muestre solo los cards correspondientes a ese nivel, permitiendo una navegación clara y organizada desde los conceptos más generales hasta los subtemas específicos con contenido.

## Glossary

- **Nivel 1**: Página principal con cards de ramas principales de física (Clásica, Moderna)
- **Nivel 2**: Páginas de cada rama con cards de temas principales (Mecánica, Termodinámica, Óptica, etc.)
- **Nivel 3**: Páginas de cada tema principal con cards de subtemas intermedios (Cinemática, Dinámica, Estática para Mecánica | 01 Conceptos Fundamentales, 02 Magnitudes Térmicas, etc. para Termodinámica)
- **Nivel 4**: Páginas finales con contenido real (MRU, MRUV, etc.) - estas contienen la teoría, ejercicios y calculadoras
- **Sistema de Navegación**: Estructura que permite navegar entre niveles de forma intuitiva
- **Cards**: Elementos visuales que representan cada tema/subtema y permiten la navegación
- **Estructura Plana**: Problema actual donde todos los subtemas aparecen en una sola página
- **Estructura Jerárquica**: Solución deseada con niveles separados de navegación

## Requirements

### Requirement 1

**User Story:** Como usuario del sistema de física, quiero navegar a través de una estructura jerárquica de 4 niveles, para poder encontrar fácilmente el contenido específico que busco.

#### Acceptance Criteria

1. WHEN el usuario accede a la página principal, THE Sistema SHALL mostrar únicamente los cards del Nivel 1 (Física Clásica, Física Moderna)
2. WHEN el usuario hace clic en "Física Clásica", THE Sistema SHALL mostrar únicamente los cards del Nivel 2 (Mecánica, Termodinámica, Óptica, Electromagnetismo, Acústica, Hidrostática)
3. WHEN el usuario hace clic en "Termodinámica", THE Sistema SHALL mostrar únicamente los cards del Nivel 3 (01 Conceptos Fundamentales, 02 Magnitudes Térmicas, 03 Principios de la Termodinámica, etc.)
4. WHEN el usuario hace clic en "01 Conceptos Fundamentales", THE Sistema SHALL mostrar únicamente los cards del Nivel 4 (Estado y Equilibrio, Frontera y Entorno, Introducción a la Termodinámica, etc.)
5. WHEN el usuario hace clic en un subtema del Nivel 4, THE Sistema SHALL mostrar la página final con contenido (teoría, ejercicios, calculadoras)

### Requirement 2

**User Story:** Como usuario, quiero que la estructura de Termodinámica funcione igual que la de Mecánica, para tener una experiencia de navegación consistente.

#### Acceptance Criteria

1. THE Sistema SHALL implementar para Termodinámica la misma estructura jerárquica que existe para Mecánica
2. WHEN el usuario navega por Mecánica, THE Sistema SHALL mostrar Nivel 3 con Cinemática, Dinámica, Estática
3. WHEN el usuario navega por Termodinámica, THE Sistema SHALL mostrar Nivel 3 con los 13 temas principales de termodinámica
4. THE Sistema SHALL mantener consistencia visual y funcional entre todas las ramas de física

### Requirement 3

**User Story:** Como desarrollador, quiero que el archivo topics.generated.js tenga una estructura clara que separe cada nivel jerárquico, para facilitar el mantenimiento y la navegación.

#### Acceptance Criteria

1. THE Sistema SHALL organizar topics.generated.js con secciones separadas para cada nivel
2. THE Sistema SHALL incluir una sección principal "termodinamica" que contenga solo los 13 temas del Nivel 3
3. THE Sistema SHALL incluir secciones individuales para cada tema principal (01_conceptos_fundamentales, 02_magnitudes_termicas, etc.) que contengan sus subtemas del Nivel 4
4. THE Sistema SHALL eliminar la estructura plana actual donde todos los subtemas aparecen mezclados
5. THE Sistema SHALL usar el archivo thermodynamicsSubtopics.generated.js como fuente de la estructura correcta

### Requirement 4

**User Story:** Como usuario, quiero que cada nivel de navegación muestre solo la información relevante para ese nivel, para no sentirme abrumado por demasiadas opciones.

#### Acceptance Criteria

1. THE Sistema SHALL mostrar máximo 15 cards por página para mantener una interfaz limpia
2. THE Sistema SHALL agrupar subtemas relacionados bajo su tema principal correspondiente
3. THE Sistema SHALL proporcionar breadcrumbs o indicadores de navegación para mostrar el nivel actual
4. THE Sistema SHALL permitir navegación hacia atrás a niveles superiores

### Requirement 5

**User Story:** Como usuario, quiero que las rutas URL reflejen la estructura jerárquica, para poder compartir enlaces específicos y entender dónde me encuentro.

#### Acceptance Criteria

1. THE Sistema SHALL usar rutas URL que reflejen la jerarquía: /clasica/termodinamica/01_conceptos_fundamentales/estado_y_equilibrio
2. THE Sistema SHALL mantener rutas consistentes entre todas las ramas de física
3. THE Sistema SHALL permitir acceso directo a cualquier nivel mediante URL
4. THE Sistema SHALL manejar correctamente la navegación por URL y botones del navegador