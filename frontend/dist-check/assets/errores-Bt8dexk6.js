const e=`# Errores en energía ondulatoria

## Errores conceptuales

### Error 1: Confundir energía mecánica del elemento con energía de la onda

**Por qué parece correcto**

El estudiante observa que cada elemento del medio oscila y tiene energía cinética y potencial en cada instante, y extrapola que la onda "es" la suma de estas energías locales. Esta analogía con partículas parece natural porque se estudian primero los osciladores individuales.

**Por qué es incorrecto**

La energía de la onda no es simplemente la suma de energías de elementos estáticos, sino una propiedad del campo de perturbación que fluye. El medio actúa como conductor, no como almacén permanente. La energía entra por un extremo, atraviesa, y sale por el otro. Confundir esto lleva a pensar que la energía se acumula en el medio, cuando en realidad lo hace solo temporalmente mientras la perturbación pasa.

**Señal de detección**

Cuando el estudiante afirma que "la cuerda almacena la energía de la onda" o que "la energía se queda en el agua después de pasar la ola", está cometiendo este error conceptual.

**Corrección conceptual**

La energía de la onda es energía en tránsito. El medio es el vehículo, no el destino. La analogía correcta es un río que transporta agua, no un lago que la almacena. Después de que la onda pasa, el medio vuelve a su estado de equilibrio sin retención neta de energía.

**Mini-ejemplo de contraste**

Si una onda transporta 10 J a través de un tramo de cuerda de 1 m, después de pasar la onda completa, esos 10 J han salido del tramo (asumiendo que la cuerda era infinita o que la onda no se reflejó). Si el estudiante cree que la cuerda "tiene" 10 J permanentemente, calcularía incorrectamente la energía total del sistema como creciente con el tiempo.

### Error 2: Creer que la energía se propaga a la velocidad de los elementos del medio

**Por qué parece correcto**

Intuitivamente, parece lógico que si los elementos del medio oscilan rápidamente, la energía también se mueve rápido. El estudiante conecta la velocidad de las partículas (transversal, alta en los cruces por equilibrio) con la velocidad de propagación de la onda.

**Por qué es incorrecto**

La velocidad de propagación de la onda (v) es distinta de la velocidad transversal de los elementos (v_y). En una cuerda, v depende de la tensión y la densidad lineal, no de la frecuencia. Los elementos oscilan perpendicularmente a muy diferente velocidad que la rapidez con que avanza la cresta. La energía fluye a velocidad v, no a la velocidad máxima de oscilación ωA.

**Señal de detección**

Afirmaciones como "si hago la onda más rápida (más alta frecuencia), la energía viaja más rápido" confunden velocidad de fase con velocidad de traslación energética.

**Corrección conceptual**

Distinguir claramente: la velocidad de propagación v es una propiedad del medio (tensión, densidad), mientras que la velocidad transversal de los elementos es una propiedad de la perturbación (amplitud, frecuencia). La energía viaja a v, independientemente de cuán rápido oscilen los elementos individualmente.

**Mini-ejemplo de contraste**

Una onda de baja frecuencia y gran amplitud puede tener elementos que se mueven rápidamente transversalmente (v_y alto) mientras la onda misma se propaga lentamente (v bajo por baja tensión). Inversamente, una onda ultrasónica de alta frecuencia y pequeña amplitud se propaga rápido (alta tensión) aunque los elementos apenas se muevan (v_y pequeño).

## Errores de modelo

### Error 3: Aplicar fórmulas de régimen lineal a ondas de gran amplitud

**Por qué parece correcto**

Las fórmulas lineales son las únicas que se enseñan inicialmente y parecen "oficiales". El estudiante asume que funcionan para cualquier amplitud, extrapolando linealmente desde el régimen pequeño que se estudió.

**Por qué es incorrecto**

Las fórmulas E ∝ A², u ∝ A² son derivadas asumiendo pendientes pequeñas (sin(θ) ≈ tan(θ) ≈ θ). Para amplitudes grandes, la tensión varía significativamente con la posición, las pendientes no son pequeñas, y la velocidad de propagación depende localmente de la amplitud. Usar las fórmulas lineales subestima la energía real y predice incorrectamente la forma de la onda.

**Señal de detección**

Cuando en un problema se proporcionan valores de amplitud 0.3 m y longitud de onda 0.5 m (relación 0.6), y el estudiante aplica directamente las fórmulas estándar sin cuestionar la validez del régimen lineal.

**Corrección conceptual**

Verificar siempre primero la relación A/λ. Si es mayor que 0.05, el régimen lineal está en zona de transición; si es mayor que 0.2, las fórmulas lineales son cualitativamente incorrectas. En estos casos, usar métodos numéricos o teoría de perturbaciones no lineales.

**Mini-ejemplo de contraste**

Una ola oceánica con amplitud 2 m y longitud de onda 100 m satisface que la amplitud es mucho menor que la longitud de onda, por lo que el modelo lineal es excelente. Una onda en estanque generada agitando fuertemente con amplitud 0.1 m y longitud de onda 0.15 m viola gravemente el régimen lineal; la forma de onda real será más picuda que la sinusoidal predicha linealmente.

## Errores matemáticos

### Error 4: Confundir densidad de energía instantánea con promedio

**Por qué parece correcto**

La densidad de energía instantánea oscila con el cuadrado del seno de la fase, y su promedio temporal es la mitad del máximo. El estudiante, al aplicar la fórmula general de potencia como producto de densidad, sección y velocidad, a veces usa el valor instantáneo máximo de densidad en lugar del promedio, pensando que está calculando la potencia máxima.

**Por qué es incorrecto**

La potencia transportada por una onda armónica es el valor medio temporal, no el valor pico. Usar el máximo de densidad (que ocurre instantáneamente en vientres específicos) sobreestima la potencia por factor 2. El promedio es lo físicamente relevante porque los instrumentos de medida (y los receptores) responden a la energía promedio en tiempos largos frente al período.

**Señal de detección**

Cálculos donde la potencia resulta ser exactamente el doble de lo esperado por consideraciones físicas, o donde el estudiante afirma "la potencia oscila entre cero y P_máx".

**Corrección conceptual**

Para ondas armónicas estacionarias o cuasi-estacionarias, usar siempre el valor promedio de la densidad de energía. El factor 1/2 proviene del promedio de sin² sobre un período. La potencia instantánea local sí varía, pero la potencia transportada neta es la media.

**Mini-ejemplo de contraste**

Si calculamos la energía total en un ciclo usando densidad máxima en lugar de promedio, obtendremos el doble de la energía real. La potencia correspondiente también resultaría duplicada, lo que violaría la conservación de energía si la comparamos con la potencia entregada por la fuente. El error numérico sería exactamente un factor de dos.

## Errores de interpretación

### Error 5: Interpretar potencia cero en ondas estacionarias como ausencia de energía

**Por qué parece correcto**

En una onda estacionaria, la potencia neta transportada es cero porque hay flujos iguales en ambas direcciones que se cancelan. El estudiante, al observar potencia neta nula, concluye erróneamente que no hay energía en la onda estacionaria.

**Por qué es incorrecto**

Una onda estacionaria almacena energía significativa localizada entre los nodos. La energía oscila entre formas cinética y potencial, pero permanece en la región entre nodos sin propagarse netamente. Potencia neta nula significa ausencia de flujo neto, no ausencia de energía. La energía total del modo estacionario puede ser considerable.

**Señal de detección**

Afirmaciones como "en los nodos de una onda estacionaria no hay nada físico" o "una cuerda vibrando en su modo fundamental no tiene energía porque la potencia es cero".

**Corrección conceptual**

Distinguir entre energía localizada (presente en ondas estacionarias, almacenada temporalmente entre nodos) y flujo de energía (presente en ondas progresivas, transporte neto). Una onda estacionaria es superposición de dos ondas progresivas de igual energía viajando en sentidos opuestos; la energía total es la suma, no la cancelación.

**Mini-ejemplo de contraste**

Una cuerda de guitarra en vibración fundamental tiene potencia neta transportada cero (no sale energía de los extremos fijos), pero almacena energía mecánica suficiente para producir sonido audible durante segundos. Si realmente no tuviera energía, no habría sonido ni vibración detectable.

## Regla de autocontrol rápido

Antes de aceptar un resultado sobre energía ondulatoria, verificar:

1. **¿La amplitud es pequeña frente a la longitud de onda?** Si A > λ/10, cuestionar la validez del régimen lineal.

2. **¿La energía depende del cuadrado de la amplitud y la frecuencia?** Verificar que ambas escalas sean cuadráticas en las fórmulas usadas.

3. **¿Distingo entre densidad instantánea y promedio?** Confirmar qué versión necesito para el cálculo de potencia o energía total.

4. **¿Entiendo si hay flujo neto de energía?** En ondas estacionarias la potencia neta es cero pero hay energía almacenada; en ondas progresivas la potencia es positiva y hay transporte neto.

5. **¿La velocidad de propagación es independiente de la amplitud?** En régimen lineal sí; si depende de A, estoy en zona no lineal.

> [!WARNING]
> Si alguna de estas verificaciones falla, revisar el modelo físico y las fórmulas aplicadas antes de continuar con interpretaciones o predicciones.
`;export{e as default};
