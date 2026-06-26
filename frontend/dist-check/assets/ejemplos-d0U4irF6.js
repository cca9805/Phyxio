const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un ciclista de competición recorre un tramo recto de carretera. Un sistema de sensores registra su ** [[velocidad]] [[velocidad]] ** cada segundo y construye la siguiente gráfica v-t:\r
\r
- De 0 a 8 s: la [[velocidad]] aumenta linealmente de 2 m/s ( [[velocidad_inicial]] ) a 10 m/s ( [[velocidad_final]] ).\r
- De 8 a 20 s: la [[velocidad]] se mantiene constante en 10 m/s.\r
- De 20 a 26 s: la [[velocidad]] disminuye linealmente de 10 m/s a 4 m/s.\r
\r
Determina: **(a)** la aceleración [[aceleracion]] en cada fase, **(b)** el [[desplazamiento]] [[desplazamiento]] total y **(c)** la [[velocidad]] media [[velocidad_media]] en todo el recorrido.\r
\r
## Datos\r
\r
- Fase 1: de 0 a 8 s; [[velocidad]] de 2 m/s a 10 m/s.\r
- Fase 2: de 8 a 20 s; [[velocidad]] constante de 10 m/s.\r
- Fase 3: de 20 a 26 s; [[velocidad]] de 10 m/s a 4 m/s.\r
- Eje positivo en la dirección del movimiento.\r
\r
## Definición del sistema\r
\r
El sistema es el ciclista modelado como partícula puntual sobre un eje rectilíneo horizontal, con sentido positivo en la dirección de avance. El entorno se resume en la gráfica v-t proporcionada.\r
\r
## Modelo físico\r
\r
El movimiento consta de tres fases sucesivas que se leen directamente en la gráfica v-t. En las fases 1 y 3 la línea es recta, lo que indica **aceleración constante**: la pendiente de cada segmento da a. En la fase 2 la línea es horizontal, por lo que la aceleración es nula. El ** [[desplazamiento]] ** en cada fase se obtiene como el **área bajo la curva** v-t, aplicando la fórmula\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
que para segmentos lineales se reduce a áreas de triángulos, rectángulos y trapecios. La ** [[velocidad]] media** global se calcula con el cociente [[intervalo_tiempo]] total:\r
\r
{{f:velocidad_media_intervalo}}\r
\r
## Justificación del modelo\r
\r
Se asume aceleración constante dentro de cada fase porque la gráfica v-t es lineal en cada tramo. Esta simplificación es razonable siempre que las transiciones entre fases sean instantáneas o muy breves frente a la duración de cada tramo. Si las transiciones fuesen suaves (curvas en los codos de la gráfica), habría que subdividir en más tramos o usar cálculo integral real.\r
\r
## Resolución simbólica\r
\r
Se aplican las relaciones gráficas del tema: la pendiente del gráfico v-t proporciona la aceleración instantánea la relacion correspondiente, el área bajo v-t proporciona el [[desplazamiento]] la relacion correspondiente, el cociente [[desplazamiento]] /intervalo da la [[velocidad_media]] la relacion correspondiente, la pendiente de x-t da la [[velocidad]] instantánea la relacion correspondiente, el cociente Δv/[[intervalo_tiempo]] da la [[aceleracion_media]] la relacion correspondiente, y el área bajo a-t da el [[cambio_velocidad]] la relacion correspondiente.\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
{{f:velocidad_media_intervalo}}\r
\r
{{f:velocidad_inst_pendiente_x_t}}\r
\r
{{f:aceleracion_media_intervalo}}\r
\r
{{f:cambio_velocidad_area_a_t}}\r
\r
\r
**Aceleración en cada fase (pendiente de v-t):**\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
(fase 2: aceleración nula)\r
\r
{{f:aceleracion_inst_pendiente_v_t}}\r
\r
**Desplazamiento en cada fase (área bajo v-t):**\r
\r
Fase 1 (trapecio):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
Fase 2 (rectángulo):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
Fase 3 (trapecio):\r
\r
{{f:desplazamiento_area_v_t}}\r
\r
**Desplazamiento total y [[velocidad]] media:**\r
\r
Δ x_total = Δ x_1 + Δ x_2 + Δ x_3\r
\r
{{f:velocidad_media_intervalo}}\r
\r
**Aceleración media global** [[aceleracion_media]] sobre los 26 s completos:\r
\r
{{f:aceleracion_media_intervalo}}\r
\r
## Sustitución numérica\r
\r
**Aceleraciones:**\r
\r
**Fase 1:** (10 − 2) / (8 − 0) = 1,0 m/s²\r
\r
**Fase 2:** 0 m/s² ( [[velocidad]] constante)\r
\r
**Fase 3:** (4 − 10) / (26 − 20) = −1,0 m/s²\r
\r
**Desplazamientos:**\r
\r
**Fase 1 (trapecio):** (2 + 10) / 2 × 8 = 48 m\r
\r
**Fase 2 (rectángulo):** 10 × 12 = 120 m\r
\r
**Fase 3 (trapecio):** (10 + 4) / 2 × 6 = 42 m\r
\r
**Totales:**\r
\r
**Desplazamiento total:** 48 + 120 + 42 = 210 m\r
\r
**Velocidad media:** 210 / 26 ≈ 8,08 m/s\r
\r
**Aceleración media global** [[aceleracion_media]] : (4 − 2) / (26 − 0) ≈ 0,08 m/s²\r
\r
## Validación dimensional\r
\r
- La unidad de [[aceleracion]] es m/s², equivalente a m/s/s.\r
- La unidad de [[desplazamiento]] es el metro: al multiplicar m/s por segundos se obtiene m.\r
- La unidad de [[velocidad_media]] es m/s, consistente.\r
\r
## Interpretación física\r
\r
La **aceleración** se lee como la pendiente de la gráfica v-t: positiva en la fase de arranque, cero en crucero y negativa al frenar. El ** [[desplazamiento]] ** de 210 m es el área total bajo la curva v-t, repartida en un trapecio, un rectángulo y otro trapecio. La ** [[velocidad]] media** de ≈ 8,1 m/s es inferior a la [[velocidad]] máxima de 10 m/s porque las fases de aceleración y frenado reducen el promedio global.\r
\r
Si la fase de frenado fuese más brusca (pendiente más negativa), el [[desplazamiento]] en la fase 3 disminuiría y la [[velocidad]] media se acercaría más a la de crucero. Si, por el contrario, se prolongara la fase de crucero, la [[velocidad]] media se acercaría a 10 m/s porque la fase constante dominaría el promedio.\r
\r
> [!TIP]\r
> Comprobar que la suma de las bases temporales coincide con el intervalo total (8 + 12 + 6 = 26 s) es un autocontrol rápido para asegurar que no se ha omitido ningún tramo.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un laboratorio escolar se coloca un carrito sobre un riel con rozamiento despreciable. Un sensor ultrasónico conectado a un ordenador registra la posición [[posicion_final]] [[posicion_inicial]] [[posicion]] del carrito cada 0,05 s y construye automáticamente la gráfica x-t. El alumno debe interpretar esa gráfica para deducir si el carrito se mueve con [[velocidad]] constante o con aceleración, y estimar numéricamente la [[velocidad]] y la aceleración a partir de la forma de la curva.\r
\r
## Estimación física\r
\r
Antes de procesar datos, conviene estimar qué esperar. Un carrito empujado con la mano sobre un riel de 1,5 m suele alcanzar velocidades de 0,3 a 1 m/s. Si la gráfica x-t resulta una recta, la pendiente dará directamente la [[velocidad]] media (del orden de 0,5 m/s). Si la gráfica es una parábola, la pendiente crece con el [[tiempo]] [[tiempo]] , indicando aceleración; el cambio de [[velocidad]] [[cambio_velocidad]] en un segundo debería ser del orden de 0,2 a 0,5 m/s, lo que equivale a una aceleración de 0,2 a 0,5 m/s².\r
\r
Un ** [[desplazamiento]] ** total del orden de 1 m en 2 o 3 s es razonable. Si la gráfica indicara velocidades de 10 m/s o aceleraciones de 5 m/s², algo estaría mal en los datos o en la escala del sensor.\r
\r
## Interpretación\r
\r
La gráfica x-t permite decidir **sin necesidad de ecuaciones** si el movimiento es uniforme o acelerado: una línea recta implica [[velocidad]] constante; una parábola implica aceleración constante. La **pendiente** de la tangente en cualquier punto da la [[velocidad]] instantánea en ese instante.\r
\r
Si el riel no es perfectamente horizontal o el rozamiento no es realmente despreciable, la gráfica x-t se desvía de la parábola ideal. Esa desviación señala el **límite del modelo** de aceleración constante. En la práctica, el alumno puede cuantificar la discrepancia calculando la pendiente en dos puntos alejados y comparando el **cambio de [[velocidad]] ** obtenido con el predicho por la fórmula de aceleración constante; si difieren más de un 10 %, el modelo de aceleración constante empieza a ser insuficiente y habría que considerar rozamiento variable o inclinar el análisis hacia tramos más cortos.\r
`;export{e as default};
