# Diseño para Arreglar Visualización de Calculadoras

## Resumen del Problema

Las calculadoras no se están mostrando en los temas finales de termodinámica (temas 12 y 13) a pesar de que:
- Las definiciones están correctamente estructuradas
- Los groupId coinciden con los calculatorId
- Los componentes Formula están correctamente implementados
- El componente CalculadoraCommon está funcionando

## Análisis de la Arquitectura

### Flujo de Datos Actual

1. **SubtopicPage** carga el contenido usando `contentLoader.js`
2. **contentLoader.js** usa `import.meta.glob` para cargar dinámicamente:
   - `teoria.jsx` (componente de teoría)
   - `definitions.js` (definiciones de calculadoras)
   - `ejercicios.json` (ejercicios)
3. **TheoryRenderer** renderiza el componente de teoría pasando solo `exercises`
4. **Componente de Teoría** importa directamente las definiciones desde `definitions.js`
5. **Formula Component** filtra las definiciones por `groupId` y las pasa a **CalculadoraCommon**

### Posibles Causas del Problema

1. **Problema de Importación**: Las definiciones no se están importando correctamente
2. **Problema de Filtrado**: El filtrado por `groupId` no está funcionando
3. **Problema de Renderizado**: El componente `CalculadoraCommon` no se está renderizando
4. **Problema de CSS**: Las calculadoras se están renderizando pero están ocultas
5. **Problema de Estado**: El estado `showCalculator` no se está actualizando correctamente

## Diseño de la Solución

### Fase 1: Diagnóstico
1. Agregar logs de debug temporales para verificar el flujo de datos
2. Verificar que las definiciones se cargan correctamente
3. Verificar que el filtrado funciona correctamente
4. Verificar que el componente se renderiza correctamente

### Fase 2: Identificación de la Causa Raíz
1. Comparar con el funcionamiento de Maxwell (que sí funciona)
2. Identificar las diferencias específicas
3. Determinar la causa exacta del problema

### Fase 3: Implementación de la Solución
1. Aplicar la corrección específica identificada
2. Probar que las calculadoras se muestran correctamente
3. Verificar que todas las funcionalidades funcionan (cálculos, validación, etc.)

### Fase 4: Limpieza y Validación
1. Remover logs de debug temporales
2. Probar todos los temas de termodinámica
3. Verificar que no se rompió nada más

## Componentes Afectados

- `src/components/TheoryV2.jsx` - Componente Formula
- `src/components/CalculadoraCommon.jsx` - Renderizado de calculadoras
- `src/data/termodinamica/12_aplicaciones_practicas/teoria.jsx` - Teoría tema 12
- `src/data/termodinamica/13_termodinamica_estadistica/teoria.jsx` - Teoría tema 13
- `src/pages/SubtopicPage.jsx` - Carga de contenido

## Criterios de Éxito

1. Las calculadoras se muestran cuando se hace clic en "Abrir Calculadora"
2. Las calculadoras permiten ingresar valores y calcular resultados
3. Los resultados se muestran correctamente formateados
4. Las constantes se muestran cuando corresponde
5. El comportamiento es consistente con otros temas como Maxwell