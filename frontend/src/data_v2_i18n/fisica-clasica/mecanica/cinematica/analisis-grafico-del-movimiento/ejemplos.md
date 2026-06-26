# Ejemplo tipo examen

## Enunciado

Un ciclista de competición recorre un tramo recto de carretera. Un sistema de sensores registra su ** [[velocidad]] [[velocidad]] ** cada segundo y construye la siguiente gráfica v-t:

- De 0 a 8 s: la [[velocidad]] aumenta linealmente de 2 m/s ( [[velocidad_inicial]] ) a 10 m/s ( [[velocidad_final]] ).
- De 8 a 20 s: la [[velocidad]] se mantiene constante en 10 m/s.
- De 20 a 26 s: la [[velocidad]] disminuye linealmente de 10 m/s a 4 m/s.

Determina: **(a)** la aceleración [[aceleracion]] en cada fase, **(b)** el [[desplazamiento]] [[desplazamiento]] total y **(c)** la [[velocidad]] media [[velocidad_media]] en todo el recorrido.

## Datos

- Fase 1: de 0 a 8 s; [[velocidad]] de 2 m/s a 10 m/s.
- Fase 2: de 8 a 20 s; [[velocidad]] constante de 10 m/s.
- Fase 3: de 20 a 26 s; [[velocidad]] de 10 m/s a 4 m/s.
- Eje positivo en la dirección del movimiento.

## Definición del sistema

El sistema es el ciclista modelado como partícula puntual sobre un eje rectilíneo horizontal, con sentido positivo en la dirección de avance. El entorno se resume en la gráfica v-t proporcionada.

## Modelo físico

El movimiento consta de tres fases sucesivas que se leen directamente en la gráfica v-t. En las fases 1 y 3 la línea es recta, lo que indica **aceleración constante**: la pendiente de cada segmento da a. En la fase 2 la línea es horizontal, por lo que la aceleración es nula. El ** [[desplazamiento]] ** en cada fase se obtiene como el **área bajo la curva** v-t, aplicando la fórmula

{{f:desplazamiento_area_v_t}}

que para segmentos lineales se reduce a áreas de triángulos, rectángulos y trapecios. La ** [[velocidad]] media** global se calcula con el cociente [[intervalo_tiempo]] total:

{{f:velocidad_media_intervalo}}

## Justificación del modelo

Se asume aceleración constante dentro de cada fase porque la gráfica v-t es lineal en cada tramo. Esta simplificación es razonable siempre que las transiciones entre fases sean instantáneas o muy breves frente a la duración de cada tramo. Si las transiciones fuesen suaves (curvas en los codos de la gráfica), habría que subdividir en más tramos o usar cálculo integral real.

## Resolución simbólica

Se aplican las relaciones gráficas del tema: la pendiente del gráfico v-t proporciona la aceleración instantánea la relacion correspondiente, el área bajo v-t proporciona el [[desplazamiento]] la relacion correspondiente, el cociente [[desplazamiento]] /intervalo da la [[velocidad_media]] la relacion correspondiente, la pendiente de x-t da la [[velocidad]] instantánea la relacion correspondiente, el cociente Δv/[[intervalo_tiempo]] da la [[aceleracion_media]] la relacion correspondiente, y el área bajo a-t da el [[cambio_velocidad]] la relacion correspondiente.

{{f:aceleracion_inst_pendiente_v_t}}

{{f:desplazamiento_area_v_t}}

{{f:velocidad_media_intervalo}}

{{f:velocidad_inst_pendiente_x_t}}

{{f:aceleracion_media_intervalo}}

{{f:cambio_velocidad_area_a_t}}


**Aceleración en cada fase (pendiente de v-t):**

{{f:aceleracion_inst_pendiente_v_t}}

(fase 2: aceleración nula)

{{f:aceleracion_inst_pendiente_v_t}}

**Desplazamiento en cada fase (área bajo v-t):**

Fase 1 (trapecio):

{{f:desplazamiento_area_v_t}}

Fase 2 (rectángulo):

{{f:desplazamiento_area_v_t}}

Fase 3 (trapecio):

{{f:desplazamiento_area_v_t}}

**Desplazamiento total y [[velocidad]] media:**

Δ x_total = Δ x_1 + Δ x_2 + Δ x_3

{{f:velocidad_media_intervalo}}

**Aceleración media global** [[aceleracion_media]] sobre los 26 s completos:

{{f:aceleracion_media_intervalo}}

## Sustitución numérica

**Aceleraciones:**

**Fase 1:** (10 − 2) / (8 − 0) = 1,0 m/s²

**Fase 2:** 0 m/s² ( [[velocidad]] constante)

**Fase 3:** (4 − 10) / (26 − 20) = −1,0 m/s²

**Desplazamientos:**

**Fase 1 (trapecio):** (2 + 10) / 2 × 8 = 48 m

**Fase 2 (rectángulo):** 10 × 12 = 120 m

**Fase 3 (trapecio):** (10 + 4) / 2 × 6 = 42 m

**Totales:**

**Desplazamiento total:** 48 + 120 + 42 = 210 m

**Velocidad media:** 210 / 26 ≈ 8,08 m/s

**Aceleración media global** [[aceleracion_media]] : (4 − 2) / (26 − 0) ≈ 0,08 m/s²

## Validación dimensional

- La unidad de [[aceleracion]] es m/s², equivalente a m/s/s.
- La unidad de [[desplazamiento]] es el metro: al multiplicar m/s por segundos se obtiene m.
- La unidad de [[velocidad_media]] es m/s, consistente.

## Interpretación física

La **aceleración** se lee como la pendiente de la gráfica v-t: positiva en la fase de arranque, cero en crucero y negativa al frenar. El ** [[desplazamiento]] ** de 210 m es el área total bajo la curva v-t, repartida en un trapecio, un rectángulo y otro trapecio. La ** [[velocidad]] media** de ≈ 8,1 m/s es inferior a la [[velocidad]] máxima de 10 m/s porque las fases de aceleración y frenado reducen el promedio global.

Si la fase de frenado fuese más brusca (pendiente más negativa), el [[desplazamiento]] en la fase 3 disminuiría y la [[velocidad]] media se acercaría más a la de crucero. Si, por el contrario, se prolongara la fase de crucero, la [[velocidad]] media se acercaría a 10 m/s porque la fase constante dominaría el promedio.

> [!TIP]
> Comprobar que la suma de las bases temporales coincide con el intervalo total (8 + 12 + 6 = 26 s) es un autocontrol rápido para asegurar que no se ha omitido ningún tramo.

# Ejemplo de aplicación real

## Contexto

En un laboratorio escolar se coloca un carrito sobre un riel con rozamiento despreciable. Un sensor ultrasónico conectado a un ordenador registra la posición [[posicion_final]] [[posicion_inicial]] [[posicion]] del carrito cada 0,05 s y construye automáticamente la gráfica x-t. El alumno debe interpretar esa gráfica para deducir si el carrito se mueve con [[velocidad]] constante o con aceleración, y estimar numéricamente la [[velocidad]] y la aceleración a partir de la forma de la curva.

## Estimación física

Antes de procesar datos, conviene estimar qué esperar. Un carrito empujado con la mano sobre un riel de 1,5 m suele alcanzar velocidades de 0,3 a 1 m/s. Si la gráfica x-t resulta una recta, la pendiente dará directamente la [[velocidad]] media (del orden de 0,5 m/s). Si la gráfica es una parábola, la pendiente crece con el [[tiempo]] [[tiempo]] , indicando aceleración; el cambio de [[velocidad]] [[cambio_velocidad]] en un segundo debería ser del orden de 0,2 a 0,5 m/s, lo que equivale a una aceleración de 0,2 a 0,5 m/s².

Un ** [[desplazamiento]] ** total del orden de 1 m en 2 o 3 s es razonable. Si la gráfica indicara velocidades de 10 m/s o aceleraciones de 5 m/s², algo estaría mal en los datos o en la escala del sensor.

## Interpretación

La gráfica x-t permite decidir **sin necesidad de ecuaciones** si el movimiento es uniforme o acelerado: una línea recta implica [[velocidad]] constante; una parábola implica aceleración constante. La **pendiente** de la tangente en cualquier punto da la [[velocidad]] instantánea en ese instante.

Si el riel no es perfectamente horizontal o el rozamiento no es realmente despreciable, la gráfica x-t se desvía de la parábola ideal. Esa desviación señala el **límite del modelo** de aceleración constante. En la práctica, el alumno puede cuantificar la discrepancia calculando la pendiente en dos puntos alejados y comparando el **cambio de [[velocidad]] ** obtenido con el predicho por la fórmula de aceleración constante; si difieren más de un 10 %, el modelo de aceleración constante empieza a ser insuficiente y habría que considerar rozamiento variable o inclinar el análisis hacia tramos más cortos.
