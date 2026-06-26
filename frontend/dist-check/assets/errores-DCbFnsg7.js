const e=`# Errores en flujo de energía

## Errores conceptuales

### Error 1: Confundir flujo de energía con densidad de energía

**Por qué parece correcto**

El estudiante asocia intuitivamente "energía" con "flujo de energía", pensando que donde hay más energía almacenada necesariamente hay más transporte. La palabra "flujo" sugiere movimiento, pero el estudiante lo interpreta como "cantidad de energía en movimiento" sin distinguir entre lo que está almacenado y lo que realmente viaja.

**Por qué es incorrecto**

La densidad de energía [[u_energia]] es la energía por unidad de volumen almacenada en el medio, mientras que el flujo [[S_flujo]] es la potencia por unidad de área que atraviesa una superficie perpendicular. Una onda estacionaria puede tener alta densidad de energía en sus vientres pero flujo neto nulo porque la energía no se desplaza netamente en ninguna dirección. El flujo requiere propagación; la densidad de energía puede existir en medios estáticos.

**Señal de detección**

El estudiante usa indistintamente "densidad de energía" y "flujo de energía" como sinónimos, o afirma que en los vientres de una onda estacionaria "el flujo es máximo porque hay más energía".

**Corrección conceptual**

El flujo de energía es el producto de la densidad de energía por la velocidad de propagación. Una onda puede tener gran densidad de energía pero flujo nulo si no se propaga (onda estacionaria). Recuerda: densidad es "combustible en el depósito", flujo es "combustible circulando por la tubería".

**Mini-ejemplo de contraste**

En una cuerda que forma una onda estacionaria perfecta, los vientres vibran con máxima amplitud y almacenan máxima energía. Sin embargo, el flujo neto es cero porque la energía viaja igualmente en ambas direcciones. Por tanto, alta densidad de energía no implica alto flujo.

### Error 2: Pensar que las partículas del medio viajan con el flujo

**Por qué parece correcto**

La intuición cotidiana asocia transporte de energía con transporte de materia. Si la energía "llega" del extremo emisor al receptor, parece lógico que las partículas del medio también lleguen allí.

**Por qué es incorrecto**

En ondas transversales, las partículas del medio oscilan perpendicularmente a la dirección de propagación sin desplazarse netamente. Una partícula de la cuerda sube y baja alrededor de su posición de equilibrio, pero nunca avanza horizontalmente. El flujo de energía es horizontal; el movimiento de las partículas es vertical. Son magnitudes ortogonales.

**Señal de detección**

El estudiante describe que "las partículas de la cuerda viajan desde la mano que agita hasta el otro extremo", o pregunta "¿cómo llega la energía si las partículas no se mueven horizontalmente?".

**Corrección conceptual**

Las partículas del medio actúan como intermediarios que transmiten energía a sus vecinas mediante fuerzas de contacto (tensión en cuerdas, presión en fluidos). Es como una fila de personas que se empujan: cada persona permanece en su sitio, pero el "empujón" (energía) viaja a través de toda la fila. El flujo describe el viaje de la energía, no de las partículas.

**Mini-ejemplo de contraste**

Una boya en el mar sube y baja con las olas pero no se desplaza horizontalmente hacia la costa. La ola transporta energía que eventualmente rompe en la playa, pero la boya permanece casi en el mismo lugar. Así, el flujo de energía llega a la costa sin que las partículas de agua (ni la boya) lleguen allí.

## Errores de modelo

### Error 3: Aplicar el modelo de flujo constante a ondas estacionarias

**Por qué parece correcto**

La onda estacionaria es visiblemente una onda vibrante con energía. Si hay energía y la onda "está ahí", parece razonable suponer que hay flujo de energía transportándola.

**Por qué es incorrecto**

Una onda estacionaria es la superposición de dos ondas progresivas de igual amplitud y frecuencia viajando en direcciones opuestas. Cada onda progresiva transporta energía, pero los flujos son iguales y contrarios, cancelándose netamente. El flujo instantáneo local no es nulo, pero su promedio temporal en cualquier punto es cero. El modelo de flujo constante asume propagación unidireccional, no superposición bidireccional.

**Señal de detección**

El estudiante calcula un flujo de energía para una onda estacionaria usando la misma fórmula que para ondas progresivas, obteniendo un valor positivo cuando físicamente el flujo neto es nulo.

**Corrección conceptual**

En ondas estacionarias, la energía queda confinada entre nodos, oscilando entre formas cinética y potencial sin dirección preferente de transporte. El modelo de flujo constante no aplica; debe usarse el modelo de confinamiento energético donde el flujo neto es cero y la energía total permanece constante en cada región entre nodos.

**Mini-ejemplo de contraste**

Considera dos mangueras que lanzan agua una contra la otra con igual presión. En el punto de encuentro, el agua choca y se dispersa, pero no hay flujo neto hacia ninguna dirección. Cada manguera "transporta" agua, pero el sistema completo tiene flujo neto nulo. Así ocurre con las dos ondas progresivas que forman la onda estacionaria.

## Errores matemáticos

### Error 4: Confundir frecuencia angular con frecuencia ordinaria

**Por qué parece correcto**

Ambas magnitudes se llaman "frecuencia" y ambas describen qué tan rápido oscila la onda. El estudiante puede asumir que son intercambiables o que la diferencia es solo una cuestión de unidades sin consecuencia física.

**Por qué es incorrecto**

La frecuencia angular [[omega]] (rad/s) y la frecuencia ordinaria f (Hz) se relacionan mediante el factor de ciclo completo. Como [[omega]] aparece al cuadrado en el modelo de flujo de cuerda, usar f en lugar de [[omega]] introduce un error cercano a cuarenta veces el valor correcto.

**Señal de detección**

Resultados de flujo de energía que son aproximadamente 40 veces mayores que los valores esperados físicamente. Por ejemplo, calcular 400 W/m para una cuerda de guitarra cuando el valor real es unos 10 W/m.

**Corrección conceptual**

La frecuencia angular aparece naturalmente en las ecuaciones diferenciales de movimiento porque una oscilación completa corresponde a un ciclo angular completo. La relación de flujo de cuerda requiere [[omega]] en rad/s. Si solo conoces f en Hz, convierte antes de sustituir.

**Mini-ejemplo de contraste**

Para una frecuencia de 440 Hz (nota La), la frecuencia angular es mucho mayor que el número 440 porque incorpora el ciclo angular completo. Si usaras 440 directamente en la relación de flujo de cuerda, el error sería de orden cuarenta por la dependencia cuadrática. Verifica siempre la conversión a [[omega]].

### Error 5: Olvidar el factor 1/2 en la potencia media

**Por qué parece correcto**

La potencia instantánea de una onda armónica oscila con el doble de la frecuencia de la onda. El estudiante puede asumir que el valor máximo de la potencia instantánea es el valor relevante, o puede derivar la fórmula sin promediar temporalmente.

**Por qué es incorrecto**

La potencia instantánea oscila entre cero y un valor máximo, pero la magnitud físicamente observable y útil es la potencia media temporal. Para ondas armónicas, el promedio temporal introduce el factor medio que aparece en el modelo de flujo de cuerda. Omitirlo duplica el resultado correcto.

**Señal de detección**

Resultados de flujo o potencia que son exactamente el doble de los valores esperados. Por ejemplo, calcular 20 W/m cuando el valor correcto es 10 W/m.

**Corrección conceptual**

La relación de flujo de cuerda da la potencia media transportada por unidad de longitud. Si se quisiera describir potencia instantánea, habría que usar un modelo temporal oscilante adicional. El factor medio representa el promedio temporal de la oscilación cuadrática. En aplicaciones prácticas, siempre se usa la potencia media.

**Mini-ejemplo de contraste**

Una resistencia eléctrica con corriente alterna se analiza con valores eficaces, no con el máximo instantáneo. Si usaras el máximo en lugar del valor eficaz, obtendrías el doble de la potencia real. Análogamente, en ondas mecánicas, usar la amplitud máxima sin el promedio temporal duplica el flujo real.

## Errores de interpretación

### Error 6: Interpretar flujo negativo como físicamente imposible

**Por qué parece correcto**

La potencia es por definición una magnitud positiva (o nula). Un flujo de energía negativo parece contradir la intuición de que "la energía fluye" siempre en el sentido "positivo" de la propagación.

**Por qué es incorrecto**

El signo del flujo de energía indica dirección: positivo en el sentido definido como +x, negativo en sentido -x. Un flujo negativo simplemente significa que la energía se transporta en la dirección opuesta al eje positivo. Esto es físicamente válido y común en situaciones con ondas reflejadas o múltiples fuentes.

**Señal de detección**

El estudiante descarta resultados de flujo negativo como "erróneos" o "imposibles", o cambia arbitrariamente el signo a positivo sin justificación física.

**Corrección conceptual**

El flujo es una magnitud vectorial (o con signo en 1D). Un flujo de -10 W/m transporta la misma cantidad de energía que uno de +10 W/m, pero en dirección opuesta. En medios conservativos, si hay una onda incidente con flujo +S y una reflejada con flujo -S' (menor en general), el flujo neto es S - S', que puede ser positivo, negativo o cero según predomine la onda incidente o la reflejada.

**Mini-ejemplo de contraste**

Una pelota que se mueve hacia la izquierda tiene velocidad negativa (si +x es a la derecha), pero su energía cinética es positiva. Análogamente, una onda que viaja hacia la izquierda tiene flujo negativo, pero transporta energía positiva. El signo indica dirección, no cantidad de energía.

## Regla de autocontrol rápido

**Verificación dimensional obligatoria**: Antes de aceptar cualquier resultado de flujo de energía, verificar que las unidades sean W/m (para flujo) o W (para potencia).

- Si obtienes J/m³, tienes densidad de energía, no flujo.
- Si obtienes watts sin dividir por área o longitud, tienes potencia total, no flujo.
- Si obtienes kg·m/s³, convierte: equivale a W/m (verificación: kg·m²/s³ / m² = kg/s³, multiplicado por m da kg·m/s³ = W/m).

**Verificación de orden de magnitud**: El flujo de energía en cuerdas musicales típicamente varía entre 0.1 W/m y 100 W/m. Valores fuera de este rango (como 10⁶ W/m o 10⁻⁶ W/m) requieren revisión de los datos introducidos, especialmente:

- ¿Usaste ω en rad/s o f en Hz? (Factor ~40 de error)
- ¿Incluiste el factor 1/2? (Factor 2 de error)
- ¿La amplitud está en metros (no en mm)? (Factor 10⁶ de error si confundes m con mm)
- ¿La densidad lineal está en kg/m (no en g/m)? (Factor 10³ de error)

**Verificación física básica**: El flujo debe ser positivo (o negativo según la convención de signos) pero nunca debe violar la conservación de energía. La potencia emitida por la fuente debe ser mayor o igual que la potencia recibida en cualquier punto (en sistemas sin amplificación activa).
`;export{e as default};
