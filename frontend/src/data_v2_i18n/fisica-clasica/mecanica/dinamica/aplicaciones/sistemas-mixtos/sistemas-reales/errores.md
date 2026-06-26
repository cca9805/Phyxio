# Errores frecuentes: sistemas reales

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por qué parece correcto**

Cuando la respuesta dinámica es pobre, el estudiante suele culpar de inmediato a una orden baja de [[F_ap]]. En problemas ideales esa intuición puede funcionar.

**Por qué es incorrecto**

En sistemas reales, la magnitud causal para la aceleración es [[F_net]], no [[F_ap]] aislada. Si [[F_loss]] crece, la aceleración baja aunque el mando se mantenga.

**Señal de detección**

La explicación no contiene balance de pérdidas y salta directamente de [[F_ap]] a [[a]].

**Corrección conceptual**

Forzar primero el balance efectivo de fuerzas:

{{f:fuerza_neta_real}}

**Mini-ejemplo de contraste**

Dos transportadores reciben la misma orden de fuerza. El que tiene mayor [[F_loss]] acelera menos y tarda más en arrancar carga.

### Error 2: Aplicar fórmulas sin validar contexto

**Por qué parece correcto**

En entrenamientos repetitivos se interioriza que sustituir números basta para resolver.

**Por qué es incorrecto**

Una ecuación puede ser correcta y, aun así, no representar el estado físico real. Si cambian temperatura, carga o régimen de fricción, un modelo constante se vuelve frágil.

**Señal de detección**

No aparece ninguna línea de validez del tipo "este cálculo aplica si...".

**Corrección conceptual**

Antes de operar, declarar hipótesis de validez y variables consideradas constantes.

**Mini-ejemplo de contraste**

Con calentamiento rápido, mantener [[eta]] fija produce estimaciones optimistas de desempeño.

### Error 3: Tratar magnitudes similares como si fueran equivalentes

**Por qué parece correcto**

[[F_ap]], [[F_loss]] y [[F_net]] comparten unidades de fuerza y visualmente parecen intercambiables.

**Por qué es incorrecto**

Sus roles físicos son distintos: entrada, pérdida y efecto útil. Mezclarlas rompe la causalidad de la resolución.

**Señal de detección**

El alumno aplica la segunda ley con [[F_ap]] sin construir previamente [[F_net]].

**Corrección conceptual**

Usar una tabla breve con tres columnas: entrada, pérdida y fuerza efectiva. Luego aplicar:

{{f:segunda_ley_efectiva}}

**Mini-ejemplo de contraste**

Con [[F_ap]] alta y [[F_loss]] también alta, la aceleración real puede quedar por debajo de la esperada por intuición ideal.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

**Por qué parece correcto**

Si un esquema funcionó en ejercicios anteriores, se asume que seguirá funcionando siempre.

**Por qué es incorrecto**

En planta aparecen efectos no lineales, cambios de masa y deriva térmica que violan las hipótesis base.

**Señal de detección**

Se observa discrepancia sostenida entre predicción y medición bajo condiciones repetibles.

**Corrección conceptual**

Definir umbral de transición y pasar a modelo extendido cuando el error sistemático lo supere.

{{f:segunda_ley_masa_variable}}

**Mini-ejemplo de contraste**

Una cinta con descarga continua mantiene orden similar pero cambia su masa efectiva; el modelo de masa constante deja de ajustar.

### Error 5: Ignorar límites de validez explícitos

**Por qué parece correcto**

Muchos estudiantes ven los límites como texto accesorio y no como parte del resultado.

**Por qué es incorrecto**

Sin límites, el número final parece universal y se pierde criterio de confianza.

**Señal de detección**

El cierre no indica condiciones de operación en las que el resultado es fiable.

**Corrección conceptual**

Terminar cada solución con una línea operativa de validez y una condición clara de cambio de modelo.

**Mini-ejemplo de contraste**

Un ajuste válido en frío deja de ser representativo tras horas de trabajo por aumento de [[P_loss]].

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por qué parece correcto**

Los pasos simbólicos pueden parecer limpios aunque contengan un signo incorrecto.

**Por qué es incorrecto**

Un signo mal puesto cambia la interpretación de estabilidad, arranque y seguridad.

**Señal de detección**

Aparecen resultados con dirección física incompatible con el escenario.

**Corrección conceptual**

Aplicar doble chequeo: coherencia de signo esperado y consistencia dimensional antes de aceptar el resultado.

{{f:aceleracion_ideal}}

**Mini-ejemplo de contraste**

Con mando de tracción positiva, un despeje defectuoso puede entregar aceleración negativa sin sentido físico.

### Error 7: Inconsistencia de unidades en balances de potencia

**Por qué parece correcto**

Bajo presión de tiempo se prioriza el número y se pospone el control de unidades.

**Por qué es incorrecto**

Mezclar kW con W en el mismo balance distorsiona [[P_loss]] y genera conclusiones falsas sobre [[eta]].

**Señal de detección**

Los órdenes de magnitud cambian sin una causa física justificable.

**Corrección conceptual**

Normalizar unidades al inicio y conservarlas visibles en cada paso energético.

{{f:potencia_perdida}}

**Mini-ejemplo de contraste**

Si [[P_in]] se expresa en kW y [[P_out]] en W sin conversión, la pérdida calculada queda físicamente absurda.

## Errores de interpretación

### Error 8: Reportar precisión superior a la que permite el modelo

**Por qué parece correcto**

Más decimales se perciben como más rigor.

**Por qué es incorrecto**

La incertidumbre instrumental y de modelo suele dominar antes del cuarto decimal.

**Señal de detección**

Se toman decisiones operativas por diferencias menores que el ruido experimental.

**Corrección conceptual**

Ajustar cifras significativas a la incertidumbre y discutir sensibilidad del resultado.

**Mini-ejemplo de contraste**

Dos alternativas con [[eta]] casi idéntica no pueden jerarquizarse sin análisis de incertidumbre.

### Error 9: Cerrar con número sin lectura física

**Por qué parece correcto**

Tras completar operaciones, el alumno interpreta que el ejercicio está terminado.

**Por qué es incorrecto**

Sin lectura causal, el valor no guía diagnóstico ni decisión de ingeniería.

**Señal de detección**

El cierre solo entrega [[a]] o [[P]] final, sin explicar implicación operativa.

**Corrección conceptual**

Añadir siempre tres frases de cierre: significado físico, límite de validez y decisión sugerida.

{{f:potencia_traslacional}}

**Mini-ejemplo de contraste**

Un valor correcto de [[P]] no basta: la interpretación determina si conviene mantenimiento, ajuste de carga o cambio de control.

## Regla de autocontrol rápido

Antes de aceptar una resolución, revisar esta secuencia mínima:

- Separar entrada, pérdida y efecto usando [[F_ap]], [[F_loss]] y [[F_net]].
- Comprobar que la dinámica se calcula con fuerza neta y no con fuerza de mando.
- Verificar coherencia energética entre [[P_in]], [[P_out]] y [[P_loss]].
- Declarar explícitamente condición de validez y umbral de cambio de modelo.
- Cerrar con interpretación causal y decisión operativa.

## Cierre operativo

Este catálogo funciona como protocolo de autocontrol. Si el estudiante separa entrada, pérdida y efecto, declara validez del modelo y cierra con interpretación causal, la calidad de resolución sube de forma inmediata y transferible a contexto real.