const e=`\uFEFF# Modelos Fisicos para Definicion de Torque

## Modelo ideal
El modelo ideal supone cuerpo rigido, eje fijo, fuerza aplicada conocida y perdidas despreciables. En este marco, la prediccion de [[tau]] se apoya en relaciones geometricas limpias entre [[F]], [[r]], [[b]] y [[theta]]. Es un modelo util para aprendizaje, diagnostico rapido y dimensionamiento preliminar.

Su ventaja principal es la trazabilidad: cada termino tiene lectura fisica directa y cada cambio de entrada tiene efecto interpretable. Si [[F]] se duplica con [[b]] constante, [[tau]] se duplica. Si [[theta]] se acerca a cero, [[tau]] cae de forma marcada. Esta transparencia permite detectar errores de planteo antes de pasar a modelos mas complejos.

## Hipotesis
1. Cuerpo rigido sin deformacion relevante durante el intervalo de analisis.
2. Eje fijo y bien definido.
3. Fuerza aplicada con direccion y punto de aplicacion conocidos.
4. Sistema plano o reducible a componente axial [[tau_z]].
5. Perdidas por friccion y holguras pequenas frente al efecto principal.

## Dominio de validez cuantitativo
Definimos un indicador de error relativo total epsilon, asociado a perdidas, holguras y simplificaciones geometricas.

Criterio operativo:
- Si epsilon <= 0.10, el modelo ideal es apto para calculo principal y toma de decisiones de rutina.
- Si 0.10 < epsilon <= 0.25, el modelo ideal solo debe usarse como primera aproximacion y toda conclusion debe reportarse como provisional.
- Si epsilon > 0.25, se requiere cambiar a modelo extendido antes de decidir sobre diseno, seguridad o mantenimiento critico.

Segundo criterio cuantitativo de robustez:
- Definimos una razon de consistencia R entre el valor absoluto de [[tau]] y el valor absoluto de [[tau_z]] cuando se comparan dos rutas de estimacion sobre el mismo escenario.
- Si 0.9 <= R <= 1.1, la coherencia interna del modelo es alta.
- Si R queda fuera de ese intervalo de forma sistematica, hay inconsistencia de datos o de hipotesis.

## Senales de fallo del modelo
1. El signo calculado de [[tau]] contradice de forma repetida el giro observado.
2. Cambios pequenos en [[theta]] o [[b]] producen saltos no plausibles.
3. Prediccion y medicion difieren de forma persistente en mas de 20 por ciento.
4. Se necesitan correcciones ad hoc caso por caso para acercarse a datos reales.

Estas senales son observables y auditables. Si aparecen juntas, el problema ya no es de redondeo ni de calculadora, sino de marco de modelado.

## Modelo extendido o alternativo
Transicion explicita recomendada:
- Si epsilon > 0.25, pasar al modelo extendido en la misma iteracion de analisis.
- Si 0.10 < epsilon <= 0.25 y la decision afecta seguridad, pasar tambien al modelo extendido.
- Si el sistema opera cerca de limites de material o fatiga, pasar al modelo extendido aunque epsilon estimado sea bajo.

El modelo extendido incorpora friccion en apoyos, flexibilidad estructural, tolerancias geometricas, dispersion de carga y variaciones temporales de fuerza. En ese contexto, [[tau]] se reporta como intervalo de valores con condicion de validez. Esta practica reduce conclusiones optimistas y mejora trazabilidad en campo.

## Comparacion operativa
El modelo ideal ofrece velocidad y claridad causal. El modelo extendido aporta fidelidad bajo incertidumbre y condiciones no ideales. En simulacion multicuerpo y control, el torque puede emerger de interacciones distribuidas, pero la interpretacion final debe permanecer coherente con las relaciones fisicas basicas entre [[F]], [[b]], [[theta]] y [[tau]].

Para formacion y diagnostico inicial, el modelo ideal sigue siendo la puerta de entrada mas eficiente. Para certificacion, validacion de seguridad y regimenes transitorios exigentes, el modelo extendido o alternativo es la opcion correcta.
`;export{e as default};
