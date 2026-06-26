# Errores comunes: coeficiente de restitución

## Errores conceptuales

### Error 1: Invertir el orden de las velocidades en la definición

**Por qué parece correcto:**
Se suele pensar que el orden de la resta no importa siempre que se haga igual en el numerador y en el denominador del coeficiente de restitución[[e]].

**Por qué es incorrecto:**
La definición de[[e]]requiere que el numerador sea la velocidad relativa de separación (estado final) y el denominador sea la de acercamiento (estado inicial). Invertir el orden en una sola parte cambia el signo de[[e]], lo cual es físicamente incoherente para un parámetro de disipación que debe ser positivo.

**Señal de detección:**
Se obtiene un valor de coeficiente de restitución[[e]]negativo en un problema de colisión estándar donde los cuerpos se alejan tras el impacto.

**Corrección conceptual:**
Asegurar que el numerador sea la diferencia entre las velocidades finales y el denominador la diferencia entre las iniciales en el orden opuesto, siguiendo estrictamente la fórmula:

{{f:e}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Calcular[[e]]restando la velocidad inicial del cuerpo 1 menos la del 2 en ambos términos de la fracción.
- **Escenario correcto**: Restar (final 2 - final 1) en el numerador y (inicial 1 - inicial 2) en el denominador para capturar la inversión del movimiento relativo.

---

### Error 2: Confundir velocidad absoluta con velocidad relativa

**Por qué parece correcto:**
Si uno de los cuerpos (como el suelo) está en reposo inicialmente, el coeficiente de restitución[[e]]parece ser simplemente el cociente de las velocidades del otro cuerpo antes y después del choque.

**Por qué es incorrecto:**
[[e]]se define siempre mediante velocidades relativas. Si ambos cuerpos se mueven tras el choque (como en colisiones espaciales), usar solo la velocidad de un cuerpo ignorando la del otro conduce a resultados erróneos y viola el principio de relatividad galileana.

**Señal de detección:**
El valor de[[e]]calculado cambia al cambiar de sistema de referencia inercial, lo cual es físicamente imposible para un parámetro que depende solo de los materiales.

**Corrección conceptual:**
Utilizar siempre la diferencia de velocidades de ambos cuerpos ([[v1f]],[[v2f]],[[v1i]],[[v2i]]), incluso si uno de ellos parece moverse mucho más lento que el otro.

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Decir que[[e]]es la velocidad final de una pelota dividida por su velocidad inicial cuando rebota contra un tren en movimiento.
- **Escenario correcto**: Definir[[e]]usando la diferencia de velocidad entre la pelota y el tren tanto antes como después del impacto.

## Errores de modelo

### Error 3: Ignorar la pérdida de energía en colisiones con e menor que 1

**Por qué parece correcto:**
Se intenta aplicar la conservación de la energía cinética en todos los choques porque se confunde con la ley universal y siempre válida de conservación del momento lineal.

**Por qué es incorrecto:**
Solo en el caso ideal de colisión perfectamente elástica (e igual a 1) se conserva la energía cinética macroscópica. En cualquier otro caso, hay una pérdida de energía cinética[[DeltaK]]inevitable que se degrada en calor.

**Señal de detección:**
Se obtienen velocidades finales que conservan la energía total del sistema pero contradicen el valor de[[e]]experimental establecido para esos materiales.

**Corrección conceptual:**
Aceptar que la energía mecánica no se conserva en choques reales y utilizar la relación para cuantificar la disipación interna del contacto:

{{f:perdida_energia}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Plantear que la suma de energías cinéticas iniciales es igual a la suma de las finales si el problema indica que[[e]]es 0,5.
- **Escenario correcto**: Incluir explícitamente el término de pérdida[[DeltaK]]en el balance energético para que el sistema sea consistente.

## Errores matemáticos

### Error 4: Uso de la masa total en el cálculo de energía disipada

**Por qué parece correcto:**
La masa total aparece con mucha frecuencia en las fórmulas de centro de masas y es una magnitud fácil de calcular sumando[[m1]]y[[m2]].

**Por qué es incorrecto:**
La pérdida de energía cinética[[DeltaK]]durante un impacto depende de la masa reducida[[mu]]del sistema, no de la suma simple de masas. Usar la masa total sobreestima enormemente la energía disipada.

**Señal de detección:**
La energía perdida calculada[[DeltaK]]resulta ser mayor que la energía cinética inicial total disponible en el sistema.

**Corrección conceptual:**
Calcular primero la masa reducida[[mu]]usando la expresión correcta antes de proceder con el cálculo del balance de energía:

{{f:mu}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Sustituir la suma de masas en el término inercial de la fórmula de pérdida de energía cinética.
- **Escenario correcto**: Utilizar la masa reducida, que siempre es menor que la menor de las masas individuales involucradas.

## Errores de interpretación

### Error 5: Olvidar la raíz cuadrada en la relación con las alturas

**Por qué parece correcto:**
Parece intuitivo que el coeficiente de restitución[[e]]sea simplemente la proporción directa de altura que recupera un objeto al botar (por ejemplo, mitad de altura implica e = 0,5).

**Por qué es incorrecto:**
Como la altura máxima[[hf]]depende del cuadrado de la velocidad de salida, el coeficiente[[e]]es en realidad la raíz cuadrada del cociente entre la altura de rebote y la altura inicial[[h0]].

**Señal de detección:**
Se obtiene un valor de[[e]]que, al ser usado para calcular velocidades, da resultados que son físicamente imposibles o inconsistentes con las alturas observadas.

**Corrección conceptual:**
Aplicar siempre la raíz cuadrada según la relación experimental:

{{f:e_desde_alturas}}

**Mini-ejemplo de contraste:**
- **Escenario incorrecto**: Si una pelota rebota a la cuarta parte de su altura (25%), concluir erróneamente que[[e]]es 0,25.
- **Escenario correcto**: Si rebota a la cuarta parte de su altura, el coeficiente[[e]]es la raíz de 0,25, que es igual a 0,5.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1.  **Consistencia de Rango**: ¿El valor de[[e]]obtenido está dentro del intervalo físico determinado por la restricción?
    {{f:rango_e}}
2.  **Signo Físico**: ¿Es el coeficiente[[e]]estrictamente positivo? Un valor negativo indicaría que los cuerpos se atraen tras el choque.
3.  **Balance de Energía**: ¿Es la pérdida[[DeltaK]]positiva o nula? Nunca se puede ganar energía cinética de forma espontánea en un choque pasivo.
4.  **Dimensiones**: ¿Es[[e]]un número adimensional? Asegúrate de que no tenga unidades como metros, segundos o kg.
