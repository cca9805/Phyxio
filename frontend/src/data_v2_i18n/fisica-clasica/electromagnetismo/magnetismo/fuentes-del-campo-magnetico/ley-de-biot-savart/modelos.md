## Modelo ideal

El modelo ideal es magnetostatico: la corriente [[corriente_electrica]] es estacionaria, el conductor es delgado y el medio se aproxima como vacio. En ese marco, cada elemento orientado [[dl]] produce una contribucion [[contribucion_diferencial_de_campo]] que luego se suma vectorialmente.

La simplificacion central consiste en tratar la corriente como una linea geometrica. Se conservan distancia [[distancia_al_punto_de_observacion]], orientacion y factor angular [[s_theta]], pero se ignoran el grosor real del conductor, la estructura microscopica de la corriente y los retardos electromagneticos.

## Hipótesis

- Corriente estacionaria: si [[corriente_electrica]] cambia rapidamente, aparecen efectos de propagacion y el modelo local magnetostatico queda incompleto.
- Conductor delgado: si el grosor importa, cada seccion interna tiene una distancia diferente al punto.
- Medio lineal o vacio: si el material magnetico satura, [[mu0]] no representa la respuesta efectiva.
- Geometria conocida: si no se conoce la trayectoria de [[dl]], no se puede sumar correctamente.
- Punto de observacion fuera del conductor ideal: si [[distancia_al_punto_de_observacion]] se aproxima a cero, el modelo de linea pierde sentido fisico.

## Dominio de validez cuantitativo

El modelo de hilo largo es razonable cuando la longitud recta supera en al menos un orden de magnitud la distancia [[distancia_al_punto_de_observacion]] al punto. Como criterio operativo, usarlo es defendible si la longitud del tramo recto > 20 veces la distancia perpendicular.

Para una espira, la formula central exige que el punto este en el centro dentro de tolerancias geometricas pequenas. Un desplazamiento inferior al 5 % del radio suele mantener una estimacion cualitativa, pero ya no conserva la simetria exacta.

## Señales de fallo del modelo

Una señal clara de fallo aparece cuando puntos que el modelo trataba como simetricos miden campos distintos. Si [[campo_magnetico]] cambia mucho al mover ligeramente la sonda, la geometria real no coincide con la ideal.

Otra señal es que el campo no crece linealmente con [[corriente_electrica]]. Eso puede indicar calentamiento, material magnetico no lineal, corrientes inducidas o una fuente que no mantiene corriente estacionaria.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: conductores gruesos, bobinas cortas, materiales magneticos, corrientes variables o puntos fuera de simetria. En esos casos se usa integracion numerica, modelos de distribucion volumetrica de corriente o las ecuaciones de Maxwell completas.

La transicion al modelo extendido conserva la idea de sumar contribuciones, pero abandona la linea ideal y la respuesta de vacio. Cambiar a ese modelo es necesario cuando los datos reales muestran dependencia con grosor, frecuencia o material.

## Comparación operativa

| Modelo | Ventaja | Limite |
|---|---|---|
| Biot Savart diferencial | Describe geometria local con mucho detalle | Requiere integrar muchas contribuciones |
| Hilo largo integrado | Rapido para conductores rectos extensos | Falla cerca de extremos y en tramos cortos |
| Espira central | Muy claro para bobinas circulares ideales | Solo vale exactamente en el centro |
| Modelo numerico | Sirve para geometria real compleja | Depende de discretizacion y datos de entrada |