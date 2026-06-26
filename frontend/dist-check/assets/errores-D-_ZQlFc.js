const e=`# Errores comunes: colisión con pared

## Errores conceptuales

### Error 1: Confundir el rebote con la detención absoluta

**Por qué parece correcto:**
Se suele pensar que una pared actúa como una barrera infranqueable que anula todo el movimiento del proyectil tras el impacto.

**Por qué es incorrecto:**
A menos que el choque sea perfectamente plástico, donde la restitución es nula, siempre existe una velocidad final[[vf]]de salida. Ignorar el rebote infravalora drásticamente el cambio de momento lineal y el impulso lineal[[J]]ejercido sobre la estructura.

**Señal de detección:**
Se obtiene un impulso igual a la cantidad de movimiento inicial, en lugar de considerar que la inversión del sentido suma efectos.

**Corrección conceptual:**
Aplicar la ley de restitución para hallar la velocidad de salida y luego calcular el impulso vectorial.

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Calcular el impulso usando únicamente la masa y la rapidez de llegada.
- **Escenario correcto**: Calcularlo considerando la diferencia vectorial entre la velocidad de salida y la de entrada.

---

### Error 2: Mala interpretación del modelo de pared lisa

**Por qué parece correcto:**
Se intenta aplicar el coeficiente de restitución[[e]]a la magnitud total del vector velocidad en colisiones oblicuas.

**Por qué es incorrecto:**
En una pared lisa, no hay fuerzas tangenciales. La disipación solo afecta a la componente normal[[vin]]. La componente tangencial final[[vft]]debe ser igual a la inicial[[vit]].

**Señal de detección:**
El ángulo de rebote calculado es igual al de incidencia a pesar de que el choque es inelástico.

**Corrección conceptual:**
Descomponer la velocidad y aplicar[[e]]únicamente a la componente perpendicular a la superficie.

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Aplicar el factor de restitución al módulo total de la velocidad.
- **Escenario correcto**: Aplicar el factor solo a la parte normal y mantener constante la parte tangencial.

## Errores de modelo

### Error 3: Desprecio de la masa de la pared en la conservación

**Por qué parece correcto:**
Se intenta aplicar la conservación del momento lineal solo al proyectil, olvidando el entorno.

**Por qué es incorrecto:**
El momento del proyectil no se conserva; cambia de sentido. El impulso[[J]]es la medida de la transferencia hacia la Tierra a través del anclaje de la pared.

**Señal de detección:**
Se llega a la conclusión de que la velocidad final debe ser igual a la inicial sin mediar fuerza externa.

**Corrección conceptual:**
Tratar a la pared como un agente externo que ejerce un impulso neto sobre el cuerpo.

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Suponer que el momento lineal del proyectil se conserva por sí solo.
- **Escenario correcto**: Reconocer que la pared ejerce una fuerza impulsiva que cambia el momento del proyectil.

## Errores matemáticos

### Error 4: El signo negativo en la ley de restitución

**Por qué parece correcto:**
Se opera solo con rapideces absolutas ignorando el carácter vectorial de la velocidad.

**Por qué es incorrecto:**
El signo negativo en la ley fundamental es crucial para indicar la inversión del sentido. Olvidarlo lleva a calcular mal el cambio de velocidad (restar en lugar de sumar magnitudes).

**Señal de detección:**
Se obtiene un impulso[[J]]anómalamente pequeño que no explica la violencia del rebote.

**Corrección conceptual:**
Mantener estrictamente el signo negativo y definir un eje de referencia claro para el eje normal.

{{f:vf}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Ignorar el cambio de signo y restar las rapideces final e inicial.
- **Escenario correcto**: Sumar los módulos de las rapideces para obtener el cambio total de velocidad si el sentido se invierte.

## Errores de interpretación

### Error 5: Olvidar la raíz cuadrada en la relación con las alturas

**Por qué parece correcto:**
Parece intuitivo que[[e]]sea la proporción directa de altura recuperada.

**Por qué es incorrecto:**
Como la altura depende del cuadrado de la velocidad, el coeficiente[[e]]es en realidad la raíz cuadrada del cociente de alturas.

**Señal de detección:**
Se obtienen valores de[[e]]físicamente incoherentes con las velocidades medidas.

**Corrección conceptual:**
Aplicar siempre la relación matemática de alturas en su forma de raíz cuadrada:

{{f:rebound_height}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Afirmar que el coeficiente es igual a la cuarta parte si rebota al veinticinco por ciento de la altura.
- **Escenario correcto**: Identificar que el coeficiente es la raíz de la fracción de altura recuperada.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1. **Consistencia de Rango**: ¿El valor de[[e]]está dentro del intervalo físico permitido?

{{f:rango_e}}

2. **Signo del Impulso**: ¿El impulso[[J]]apunta alejándose de la pared?
3. **Balance de Energía**: ¿Es la pérdida[[DeltaK]]positiva o nula?
4. **Ángulo de Salida**: ¿Es el ángulo de rebote[[theta_f]]mayor o igual al de incidencia[[theta_i]]?
`;export{e as default};
