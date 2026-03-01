# Arreglar Visualización de Calculadoras en Temas de Termodinámica

## Introducción

Las calculadoras no se están mostrando correctamente en el div `formula-expression` del `formula-container` en los temas finales de termodinámica (temas 12 y 13). Aunque las fórmulas, botones de despejes y ejercicios funcionan correctamente, las calculadoras no aparecen cuando se hace clic en "Abrir Calculadora".

## Glossario

- **Formula Component**: Componente React que renderiza fórmulas matemáticas con botones interactivos
- **CalculadoraCommon**: Componente que renderiza las calculadoras interactivas
- **groupId**: Identificador que agrupa definiciones de calculadoras relacionadas
- **calculatorId**: Parámetro pasado al componente Formula para filtrar calculadoras relevantes

## Requirements

### Requirement 1

**User Story:** Como usuario, quiero que las calculadoras se muestren correctamente cuando hago clic en "Abrir Calculadora" en los temas de termodinámica, para poder realizar cálculos interactivos.

#### Acceptance Criteria

1. WHEN el usuario hace clic en "Abrir Calculadora", THE sistema SHALL mostrar la calculadora correspondiente en el div formula-expression
2. WHEN hay múltiples calculadoras para un grupo, THE sistema SHALL mostrar un selector para elegir entre ellas
3. WHEN hay una sola calculadora para un grupo, THE sistema SHALL mostrar directamente esa calculadora
4. THE calculadoras SHALL permitir ingresar valores y calcular resultados correctamente
5. THE calculadoras SHALL mostrar las constantes utilizadas cuando corresponda

### Requirement 2

**User Story:** Como desarrollador, quiero diagnosticar por qué las calculadoras no se muestran, para identificar la causa raíz del problema.

#### Acceptance Criteria

1. THE sistema SHALL verificar que los groupId en definitions.js coincidan con los calculatorId en teoria.jsx
2. THE sistema SHALL verificar que las definiciones se estén pasando correctamente al componente Formula
3. THE sistema SHALL verificar que el componente CalculadoraCommon reciba las definiciones filtradas
4. THE sistema SHALL verificar que no haya errores de JavaScript que impidan el renderizado
5. THE sistema SHALL verificar que los estilos CSS no estén ocultando las calculadoras

### Requirement 3

**User Story:** Como usuario, quiero que las calculadoras funcionen de manera consistente en todos los temas de termodinámica, para tener una experiencia uniforme.

#### Acceptance Criteria

1. THE calculadoras en tema 12 (Aplicaciones Prácticas) SHALL funcionar correctamente
2. THE calculadoras en tema 13 (Termodinámica Estadística) SHALL funcionar correctamente
3. THE calculadoras SHALL mantener el mismo comportamiento que en otros temas como Maxwell
4. THE calculadoras SHALL mostrar resultados formateados correctamente
5. THE calculadoras SHALL mostrar pasos de cálculo cuando esté disponible