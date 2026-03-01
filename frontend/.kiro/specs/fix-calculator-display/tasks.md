# Tareas para Arreglar Visualización de Calculadoras

## Tareas Completadas

- [x] 1. Diagnosticar el problema de visualización de calculadoras
  - Identificar que las definiciones se cargan correctamente
  - Verificar que los groupId coinciden con calculatorId
  - Determinar que el problema era de CSS
  - _Requirements: 1.1, 2.1, 2.2, 2.3_

- [x] 2. Corregir el problema de CSS
  - Cambiar className de "calculator-card" a "calculator-section"
  - Usar la clase CSS existente que tiene los estilos apropiados
  - _Requirements: 1.1, 3.3_

## Tareas Pendientes

- [ ] 3. Probar la funcionalidad de calculadoras
  - [ ] 3.1 Verificar que las calculadoras se muestran al hacer clic en "Abrir Calculadora"
    - Probar en tema 12 (Aplicaciones Prácticas)
    - Probar en tema 13 (Termodinámica Estadística)
    - _Requirements: 1.1, 3.1, 3.2_
  
  - [ ] 3.2 Verificar que las calculadoras funcionan correctamente
    - Probar ingreso de valores
    - Verificar cálculos y resultados
    - Verificar formato de resultados
    - _Requirements: 1.4, 3.4_
  
  - [ ] 3.3 Verificar que las constantes se muestran correctamente
    - Verificar constantes en calculadoras que las usan
    - _Requirements: 1.5_

- [ ] 4. Limpieza y validación final
  - [ ] 4.1 Remover archivos de debug temporales
    - Eliminar src/debug/CalculatorDebug.jsx
    - Eliminar src/debug/TestCalculator.jsx
    - Eliminar debug_calculators.js
    - Remover rutas de debug de App.jsx
    - _Requirements: 3.5_
  
  - [ ] 4.2 Verificar que no se rompió funcionalidad existente
    - Probar otros temas como Maxwell
    - Verificar que botones de despejes funcionan
    - Verificar que botones de ejercicios funcionan
    - _Requirements: 3.3, 3.5_

- [ ] 5. Documentar la solución
  - [ ] 5.1 Actualizar documentación del problema resuelto
    - Documentar la causa raíz (problema de CSS)
    - Documentar la solución aplicada
    - _Requirements: 2.4_