const e=`# Modelo de flujo de energía ondulatorio

## Modelo ideal

El modelo ideal de flujo de energía describe el transporte energético en ondas progresivas unidimensionales sin disipación ni efectos de borde. Este modelo considera una cuerda infinita, uniforme y perfectamente elástica, donde la onda se propaga indefinidamente conservando su forma y energía.

En este modelo simplificado, el flujo de energía [[S_flujo]] permanece constante a lo largo de toda la cuerda. La energía fluye desde la fuente emisora hacia el infinito sin pérdidas, manteniendo una relación exacta entre densidad de energía [[u_energia]] y velocidad de propagación [[v]]. La potencia total [[P_onda]] emitida por la fuente equivale exactamente al flujo multiplicado por la sección efectiva de la cuerda.

La simplificación central consiste en ignorar cualquier mecanismo de disipación (rozamiento con el aire, absorción interna del material) y considerar que la cuerda tiene extensión infinita, evitando reflexiones en extremos que complicarían el patrón de flujo.

## Hipótesis

- **Cuerda infinita y uniforme**: La densidad lineal [[mu]] es constante en todo punto, sin variaciones ni defectos estructurales que dispersen la energía.

- **Pequeñas oscilaciones**: La amplitud [[A]] es mucho menor que la longitud de onda [[lambda]], garantizando el régimen lineal donde la tensión permanece prácticamente constante durante la vibración.

- **Tensión constante**: La fuerza de tensión no varía con el tiempo ni con la posición, manteniendo la velocidad de propagación [[v]] uniforme.

- **Ausencia de disipación**: No existe rozamiento con el aire ni amortiguamiento interno; toda la energía mecánica se conserva en forma de movimiento ondulatorio.

- **Ondas progresivas puras**: No hay reflexiones ni superposiciones que creen ondas estacionarias; la energía fluye únicamente en una dirección.

**Consecuencia de violar cada hipótesis**:

- Si la cuerda no es uniforme, parte de la energía se refleja en las discontinuidades, reduciendo el flujo transmitido más allá de cada interfaz.

- Si las oscilaciones no son pequeñas, aparecen efectos no lineales que modifican la velocidad de propagación y la relación flujo-amplitud.

- Si la tensión varía, la velocidad [[v]] depende de la posición y el flujo ya no sigue una ley simple.

- Si existe disipación, el flujo decrece exponencialmente con la distancia desde la fuente.

- Si hay reflexiones, se establece una onda estacionaria donde el flujo neto es nulo aunque localmente existan flujos instantáneos.

## Dominio de validez cuantitativo

El modelo es válido cuando se cumplen simultáneamente:

- La amplitud es inferior al 10% de la longitud de onda: A < 0.1 λ, garantizando el régimen lineal con errores relativos menores al 1%.

- La longitud de onda es mucho mayor que el diámetro de la cuerda: λ > 100 d, asegurando que la cuerda se comporta como unidimensional.

- Las distancias consideradas son menores que la longitud de atenuación del medio: x < v/γ, donde γ es el coeficiente de amortiguamiento. Para cuerdas de acero en aire, esto típicamente significa x < 100 m para frecuencias audibles.

- La frecuencia está por debajo del primer modo transversal de vibración de la sección de la cuerda: f < v_transversal/(2d), típicamente f < 10 kHz para cuerdas musicales estándar.

El error relativo del modelo respecto al comportamiento real es inferior al 5% cuando se operan dentro de estos límites.

## Señales de fallo del modelo

- **Amplitud creciente con la distancia**: Si se observa que la amplitud de la onda aumenta al alejarse de la fuente, el sistema está recibiendo energía de alguna fuente externa no considerada (vibración forzada del soporte, acoplamiento con otras cuerdas).

- **Distorsión de la forma de onda**: Si la sinusoide pura se deforma adquiriendo picos agudos o planicies, el régimen no lineal ha sido alcanzado y el modelo lineal ya no describe el flujo correctamente.

- **Decaimiento rápido de la amplitud**: Si la amplitud cae a la mitad en distancias menores que 10 longitudes de onda, la disipación es significativa y el modelo ideal sin pérdidas es inaplicable.

- **Aparición de modos transversales**: Si la cuerda vibra en dos direcciones perpendiculares simultáneamente con frecuencias cercanas, el modelo unidimensional se ha roto y el flujo energético se distribuye en dos polarizaciones.

- **Flujo negativo persistente**: Si en alguna región el flujo medido es negativo de forma sostenida, existe una onda reflejada significativa o una fuente secundaria no considerada.

## Modelo extendido o alternativo

El **modelo extendido con disipación viscosa** incorpora un término de amortiguamiento proporcional a la velocidad transversal de las partículas del medio. En este modelo, la ecuación de onda incluye un término de rozamiento que reduce gradualmente la amplitud y, consiguientemente, el flujo de energía a medida que la onda se propaga.

El flujo de energía ya no es constante, sino que decae exponencialmente:

S(x) = S₀ · exp(-γx/v)

Donde γ es el coeficiente de amortiguamiento y S₀ el flujo en la fuente. La potencia disponible en un receptor a distancia L es menor que la emitida por factor exp(-γL/v).

El **modelo no lineal para grandes amplitudes** considera que la tensión de la cuerda aumenta con la elongación, modificando la velocidad de propagación que ahora depende de la amplitud local. Las ondas de gran amplitud viajan más rápido que las de pequeña amplitud, produciendo distorsiones características como el "aplanamiento" de los valles y el "agudizado" de los picos.

Cuando conviene pasar al modelo extendido con disipación: cuando las distancias de propagación superan las 100 longitudes de onda o cuando se observa decaimiento apreciable de la amplitud en tiempos menores que 10 segundos. En instrumentos musicales de cuerda pulsada, este modelo es esencial para describir el decaimiento natural del sonido.

Cuando conviene usar el modelo no lineal: cuando la amplitud supera el 20% de la longitud de onda o cuando se observa generación de armónicos no presentes en la excitación original.

## Comparación operativa

| Característica | Modelo ideal | Modelo con disipación | Modelo no lineal |
|---|---|---|---|
| **Flujo energético** | Constante a lo largo de la cuerda | Decae exponencialmente con la distancia | Depende de la amplitad local, mayor donde la onda es más intensa |
| **Amplitud** | Se conserva indefinidamente | Disminuye gradualmente | Mantiene forma pero distorsiona, genera armónicos |
| **Velocidad de propagación** | Constante, independiente de la posición | Constante, pero la onda se atenúa | Variable, mayor para mayores amplitudes |
| **Complejidad matemática** | Simple, soluciones analíticas cerradas | Moderada, requiere factor de decaimiento exp(-γt) | Alta, requiere métodos numéricos o perturbativos |
| **Rango de aplicación** | Ondas de pequeña amplitud en distancias cortas | Ondas reales en medios absorbentes | Ondas de gran amplitud cerca de la fuente |
| **Conservación de energía** | Total, sin pérdidas | Parcial, parte se convierte en calor | Total, pero redistribuida entre frecuencias |
| **Precisión experimental** | ±1% en condiciones ideales | ±5% para la mayoría de materiales reales | ±10% debido a la variabilidad de parámetros no lineales |

**Ventajas y límites**:

El modelo ideal proporciona comprensión conceptual clara y permite cálculos rápidos, pero falla en cualquier situación real donde la disipación o las no linealidades son apreciables. El modelo con disipación captura el decaimiento temporal observable en todos los sistemas reales, pero requiere conocer coeficientes de amortiguamiento que dependen del material y la frecuencia. El modelo no lineal describe fenómenos como la generación de armónicos y la formación de ondas de choque en medios, pero su complejidad matemática limita su uso a situaciones donde los efectos no lineales dominan.

La transición entre modelos no es abrupta sino gradual: para amplitudes intermedias (5-20% de la longitud de onda), conviene usar el modelo ideal con correcciones perturbativas de primer orden.
`;export{e as default};
