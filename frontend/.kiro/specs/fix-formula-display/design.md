# Diseño para Arreglar Visualización de Fórmulas

## Análisis del Problema

### Síntomas Observados
- En termodinámica: div `formula-expression` muestra títulos en lugar de fórmulas
- En mecánica/electromagnetismo: div `formula-expression` muestra fórmulas matemáticas correctamente

### Comparación de Implementaciones

#### Mecánica (Gravitación) - FUNCIONA ✅
```jsx
<Formula
  expression={String.raw`F = G \frac{m_1 m_2}{r^2}`}
  calculatorId="ley-gravitacion-universal"
  definitions={definitions}
  exercises={exercises}
  complementary={[...]}
/>
```

#### Termodinámica - PROBLEMA ❌
```jsx
<Formula
  expression={String.raw`\eta_{Carnot} = 1 - \frac{T_{fria}}{T_{caliente}}`}
  calculatorId="aplicaciones_maquinas_termicas"
  definitions={aplicacionesPracticasDefinitions}
  exercises={exercises}
  complementary={[...]}
/>
```

### Posibles Causas

1. **Problema de Renderizado LaTeX**: El componente Latex no está procesando correctamente las expresiones
2. **Problema de Props**: Las expresiones no se están pasando correctamente al componente Formula
3. **Problema de CSS**: Los estilos están ocultando o mal posicionando las fórmulas
4. **Problema de Importación**: El componente Latex no se está importando correctamente
5. **Problema de Sintaxis LaTeX**: Las expresiones LaTeX tienen errores de sintaxis

## Arquitectura de Componentes

### Flujo de Renderizado
1. **Componente de Teoría** → pasa `expression` prop
2. **Componente Formula** → recibe `expression` y lo pasa a Latex
3. **Componente Latex** → renderiza la expresión matemática
4. **div formula-expression** → contiene el resultado renderizado

### Componente Formula (TheoryV2.jsx)
```jsx
export const Formula = ({ expression, ... }) => {
  return (
    <div className="formula-container">
      <div className="formula-expression">
        <Latex>{`$${expression}$`}</Latex>  // ← Aquí debería estar la fórmula
      </div>
      ...
    </div>
  );
};
```

## Plan de Diagnóstico

### Fase 1: Verificación de Datos
1. Verificar que las expresiones LaTeX están correctamente definidas
2. Verificar que las props se pasan correctamente
3. Comparar con implementaciones que funcionan

### Fase 2: Verificación de Renderizado
1. Verificar que el componente Latex está importado correctamente
2. Verificar que no hay errores de JavaScript en la consola
3. Verificar que las expresiones LaTeX son válidas

### Fase 3: Verificación de Estilos
1. Verificar que los estilos CSS no ocultan las fórmulas
2. Verificar que el div formula-expression tiene el contenido correcto
3. Comparar estilos entre temas que funcionan y los que no

## Solución Propuesta

### Enfoque Sistemático
1. **Diagnóstico**: Identificar la causa exacta del problema
2. **Comparación**: Usar gravitación como referencia de funcionamiento correcto
3. **Corrección**: Aplicar la solución específica identificada
4. **Validación**: Verificar que la solución funciona en todos los temas de termodinámica

### Herramientas de Debug
- Logs de consola para verificar props
- Inspección de DOM para verificar contenido renderizado
- Comparación directa de código entre temas

## Criterios de Éxito

1. Las fórmulas matemáticas se muestran correctamente en div formula-expression
2. El renderizado es visualmente idéntico a mecánica/electromagnetismo
3. No hay errores de JavaScript en la consola
4. Todos los temas de termodinámica funcionan correctamente