# Requirements Document

## Introduction

Integrar la página Index.jsx como un tema más dentro del sistema de navegación dinámico de la aplicación de física, eliminando la necesidad de tener un archivo de página separado y permitiendo que funcione con el sistema unificado de temas.

## Glossary

- **Index_Page**: La página principal actual que muestra la introducción a la física y las tarjetas de Física Clásica y Moderna
- **Dynamic_System**: El sistema de navegación dinámico que usa DynamicPage.jsx para renderizar temas
- **Topics_Data**: La estructura de datos en topics.generated.js que define todos los temas
- **Theme_Integration**: El proceso de convertir una página independiente en parte del sistema de temas
- **Root_Topic**: Un tema de nivel raíz que actúa como página principal

## Requirements

### Requirement 1

**User Story:** Como usuario, quiero que la página principal funcione como cualquier otro tema del sistema, para tener una experiencia de navegación consistente.

#### Acceptance Criteria

1. WHEN el usuario navega a la ruta raíz "/", THE Dynamic_System SHALL renderizar el contenido de la página principal usando DynamicPage.jsx
2. THE Root_Topic SHALL contener la misma información y estructura visual que la actual Index.jsx
3. THE Root_Topic SHALL mostrar las tarjetas de Física Clásica y Moderna con sus respectivos enlaces
4. THE Root_Topic SHALL incluir la introducción "¿Qué es la Física?" y la sección comparativa

### Requirement 2

**User Story:** Como desarrollador, quiero eliminar la dependencia de Index.jsx como archivo separado, para simplificar la arquitectura del sistema.

#### Acceptance Criteria

1. THE Dynamic_System SHALL manejar la ruta "/" sin necesidad de Index.jsx
2. THE App.jsx SHALL usar DynamicPage para la ruta raíz
3. THE Index.jsx file SHALL ser eliminado después de la migración
4. THE Topics_Data SHALL incluir una entrada para el tema raíz

### Requirement 3

**User Story:** Como usuario, quiero que el contenido y estilo visual de la página principal se mantenga idéntico, para no perder funcionalidad existente.

#### Acceptance Criteria

1. THE Root_Topic SHALL mantener el mismo título "¿Qué es la Física?"
2. THE Root_Topic SHALL mantener la misma descripción introductoria
3. THE Root_Topic SHALL mantener las mismas clases CSS (intro-card, tema-cards-row, compara-card)
4. THE Root_Topic SHALL mantener la funcionalidad de navegación a /clasica y /moderna

### Requirement 4

**User Story:** Como desarrollador, quiero que la integración sea compatible con el sistema de temas existente, para no romper la funcionalidad actual.

#### Acceptance Criteria

1. THE Root_Topic SHALL seguir la misma estructura de datos que otros temas en topicsData
2. THE Root_Topic SHALL ser compatible con el renderizado de DynamicPage.jsx
3. THE Root_Topic SHALL mantener compatibilidad con el sistema de estilos existente
4. THE Root_Topic SHALL no afectar el funcionamiento de otros temas existentes