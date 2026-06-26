const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un ciclista parte del reposo desde el punto A y llega al punto B siguiendo una carretera con curvas. La [[distancia]] total recorrida es 12,0 km, mientras que el [[desplazamiento]] neto entre A y B tiene módulo 9,6 km. El recorrido dura [[intervalo_tiempo]] de 40 min. Al salir de A el ciclista está en reposo (0 m/s), y al llegar a B su velocímetro marca 5,0 m/s.\r
\r
Se pide calcular:\r
\r
1. la ** [[velocidad]] [[velocidad]] media [[velocidad_media]] ** y la ** [[rapidez]] [[rapidez]] media [[rapidez_media]] ** del recorrido completo;\r
2. el **cambio de [[velocidad]] [[cambio_velocidad]] ** \\( \\Delta v \\) y la **aceleración [[aceleracion]] media [[aceleracion_media]] ** durante el trayecto;\r
3. interpretar físicamente por qué las magnitudes promedio obtenidas no describen toda la riqueza del movimiento real.\r
\r
## Datos\r
\r
| Símbolo | Significado | Valor |\r
|---|---|---|\r
| s | [[distancia]] recorrida | 12,0 km (12 000 m) |\r
| |Δx| | módulo del [[desplazamiento]] | 9,6 km (9 600 m) |\r
| Δt | [[intervalo_tiempo]] | 40 min (2 400 s) |\r
| \\( v_1 \\) | [[velocidad]] inicial | \\( 0\\;\\text{m/s} \\) |\r
| \\( v_2 \\) | [[velocidad]] final | \\( 5{,}0\\;\\text{m/s} \\) |\r
\r
Tomamos como sentido positivo el que va de A hacia B.\r
\r
## Definición del sistema\r
\r
El sistema es la partícula puntual que representa al ciclista. El análisis se hace en una dimensión efectiva, proyectando el movimiento sobre el eje A→B para describir el [[desplazamiento]] y la [[velocidad]] media. La longitud real del trayecto se representa mediante la [[distancia]] recorrida \\( s \\), que no depende del signo ni del sentido del movimiento, sino de la trayectoria total seguida.\r
\r
En términos del leaf, aquí intervienen de manera explícita las magnitudes núcleo [[distancia]] , [[desplazamiento]] , [[cambio_velocidad]] , [[velocidad_media]] , [[rapidez_media]] y [[aceleracion_media]] . El interés físico del ejemplo no está solo en “hacer cuentas”, sino en distinguir qué magnitud resume la geometría del camino, cuál resume el cambio neto de posición [[posicion]] y cuál resume la variación del estado de movimiento.\r
\r
## Modelo físico\r
\r
El modelo físico es el de cinemática de punto material descrita mediante medias en un intervalo finito. En este marco, las relaciones núcleo del leaf son [[velocidad_media]] , [[rapidez_media]] y [[aceleracion_media]] . La primera conecta el [[desplazamiento]] neto con el [[tiempo]] [[tiempo]] ; la segunda conecta la [[distancia]] total con el [[tiempo]] ; la tercera conecta el cambio de [[velocidad]] con el [[tiempo]] . Dicho de otro modo, el modelo separa tres lecturas distintas del mismo trayecto:\r
\r
- lectura geométrica global del camino mediante [[distancia]] ,\r
- lectura neta del cambio de posición mediante [[desplazamiento]] ,\r
- lectura dinámica del cambio de estado mediante [[cambio_velocidad]] y [[aceleracion_media]] .\r
\r
No se necesita conocer la función completa \\( x(t) \\) para calcular estas magnitudes promedio, porque el problema no pide la evolución instantánea del movimiento, sino una síntesis global del intervalo analizado.\r
\r
## Justificación del modelo\r
\r
Este modelo es físicamente válido porque los datos disponibles son precisamente datos iniciales, finales y duración total del trayecto. Con esa información sí se pueden calcular [[velocidad_media]] , [[rapidez_media]] y [[aceleracion_media]] sin reconstruir el detalle punto a punto de la ruta. La [[distancia]] total \\( s \\) recoge la longitud real del camino, aunque haya curvas; el [[desplazamiento]] \\( \\Delta x \\) recoge únicamente el cambio neto entre origen y destino; y el [[cambio_velocidad]] resume cómo ha cambiado el estado de movimiento entre el inicio y el final.\r
\r
El modelo dejaría de ser suficiente si la pregunta fuese otra. Por ejemplo, si se pidiera saber en qué tramo el ciclista alcanzó su valor máximo de [[velocidad]], cuándo frenó con mayor intensidad o cómo cambió el movimiento al entrar en una curva concreta, entonces las medias globales serían demasiado pobres y habría que pasar a la relacion correspondiente y la relacion correspondiente, o incluso a la relacion correspondiente si se conociera \\( x(t) \\). Esa es justamente una de las ideas centrales del leaf: una magnitud media no sustituye a una magnitud instantánea, y una descripción global no reemplaza una ley temporal.\r
\r
{{f:velocidad_instantanea}}\r
\r
{{f:aceleracion_instantanea}}\r
\r
{{f:aceleracion_como_segunda_derivada}}\r
\r
\r
## Resolución simbólica\r
\r
Primero usamos la fórmula núcleo [[rapidez_media]] :\r
\r
{{f:rapidez_media}}\r
\r
Después usamos la fórmula núcleo [[velocidad_media]] :\r
\r
{{f:velocidad_media}}\r
\r
El [[cambio_velocidad]] es la diferencia entre la [[velocidad]] al final y al inicio del trayecto.\r
\r
Y la fórmula núcleo [[aceleracion_media]] es:\r
\r
{{f:aceleracion_media}}\r
\r
Como conexión con la teoría del leaf, conviene recordar que estas relaciones promedio no agotan la descripción cinemática. Si dispusiéramos de la ley temporal completa, aparecerían también las relaciones diferenciales:\r
\r
{{f:velocidad_instantanea}}\r
\r
{{f:aceleracion_instantanea}}\r
\r
{{f:aceleracion_como_segunda_derivada}}\r
\r
Estas tres expresiones no se usan aquí para obtener el valor promedio principal, pero sí forman parte de la resolución conceptual del problema porque indican qué ocurriría si dispusiéramos de la función temporal de posición. La derivada temporal de posición define la [[velocidad]] instantánea, la derivada temporal de la [[velocidad]] define la aceleración instantánea ( [[aceleracion]] ) y la segunda derivada temporal de posición expresa la aceleración instantánea como derivada de orden dos. Por tanto, la resolución distingue explícitamente entre magnitudes medias, que sí calculamos, y magnitudes instantáneas, que aquí quedan identificadas como extensión natural del mismo marco cinemático.\r
\r
Aquí no las usamos para calcular el resultado numérico principal, pero sí para interpretar correctamente qué información falta cuando solo disponemos de medias temporales.\r
\r
## Sustitución numérica\r
\r
Aplicamos [[rapidez_media]] :\r
\r
La [[rapidez_media]] resulta: 12 000 m ÷ 2 400 s → 5,0 m/s.\r
\r
Aplicamos [[velocidad_media]] :\r
\r
La [[velocidad_media]] resulta: 9 600 m ÷ 2 400 s → 4,0 m/s.\r
\r
El [[cambio_velocidad]] calculado: 5,0 − 0 = 5,0 m/s.\r
\r
Aplicamos [[aceleracion_media]] :\r
\r
La [[aceleracion_media]] resulta: 5,0 m/s ÷ 2 400 s ≈ 2,1 × 10⁻³ m/s².\r
\r
El cociente [[distancia]] / [[desplazamiento]] : 12 000 ÷ 9 600 = 1,25, lo que indica que la longitud real del camino supera en un 25 % al cambio neto de posición.\r
\r
Ese cociente indica que la longitud real del camino supera en un 25 % al cambio neto de posición. No es una fórmula núcleo independiente del leaf, pero sí una lectura cuantitativa razonable de la diferencia entre trayectoria y [[desplazamiento]] .\r
\r
## Validación dimensional\r
\r
La relación [[rapidez_media]] tiene coherencia dimensional: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.\r
\r
La relación [[velocidad_media]] también: [[distancia]] (m) ÷ [[tiempo]] (s) = m/s.\r
\r
Y la relación [[aceleracion_media]] mantiene la dimensión correcta: [[velocidad]] (m/s) ÷ [[tiempo]] (s) = m/s².\r
\r
Por tanto, los resultados no solo son numéricamente plausibles, sino también dimensionalmente consistentes con las magnitudes definidas en el leaf.\r
\r
## Interpretación física\r
\r
La primera lectura importante es geométrica. La [[rapidez]] media vale \\( 5{,}0\\;\\text{m/s} \\), mientras que la [[velocidad]] media vale \\( 4{,}0\\;\\text{m/s} \\). La diferencia no es un detalle algebraico, sino una consecuencia física de que el ciclista no ha seguido una línea recta ideal entre A y B. Ha recorrido más camino del que correspondería al [[desplazamiento]] neto, y por eso la razón basada en [[distancia]] supera a la basada en [[desplazamiento]] .\r
\r
La segunda lectura es cinemática. El cambio de [[velocidad]] es positivo, de modo que el estado final del movimiento no coincide con el inicial. El ciclista parte del reposo y termina con una [[velocidad]] no nula. Sin embargo, la [[aceleracion_media]] obtenida es muy pequeña. Eso no significa que “casi no haya acelerado”, sino que el cambio total de [[velocidad]] queda repartido sobre un intervalo temporal muy largo, de 40 minutos. La media aplana la historia real del trayecto.\r
\r
La tercera lectura conecta con la teoría del leaf. Durante el recorrido real pudo haber tramos con aceleración instantánea grande al arrancar, zonas con aceleración casi nula al rodar a ritmo estable y fases con aceleración negativa al frenar o subir una pendiente. Nada de eso aparece en un único valor promedio. Si el [[tiempo]] total fuese menor manteniendo el mismo \\( \\Delta v \\), [[aceleracion_media]] aumentaría. Si el trayecto fuera todavía más sinuoso manteniendo el mismo origen, destino y [[tiempo]] , [[rapidez_media]] aumentaría pero [[velocidad_media]] no necesariamente lo haría. Justamente por eso este leaf insiste en que cada magnitud responde a una pregunta física distinta.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un ciclocomputador mide la [[rapidez]] instantánea detectando el paso periódico de un imán ante un sensor. A partir de esas lecturas estima la [[distancia]] total recorrida y, con el [[tiempo]] total de salida, calcula [[rapidez_media]] . Imaginemos que al terminar una ruta la pantalla muestra: [[distancia]] \\( 45\\;\\text{km} \\), [[tiempo]] \\( 1\\;\\text{h}\\;52\\;\\text{min} \\) y [[rapidez]] media de \\( 24{,}1\\;\\text{km/h} \\).\r
\r
## Estimación física\r
\r
Convertimos unidades: 45 km → 45 000 m; 1 h 52 min → 6 720 s.\r
\r
Aplicando [[rapidez_media]] : 45 000 m ÷ 6 720 s ≈ 6,70 m/s.\r
\r
Pasando a kilómetros por hora: 6,70 m/s × 3,6 ≈ 24,1 km/h.\r
\r
La lectura es coherente con el instrumento. Ahora bien, si la ruta fue circular y terminó en el mismo punto de partida, entonces el [[desplazamiento]] neto sería aproximadamente cero y [[velocidad_media]] sería también aproximadamente cero, pese a que la [[rapidez_media]] mantiene un valor claramente positivo y útil.\r
\r
## Interpretación\r
\r
Este caso muestra por qué un dispositivo cotidiano puede dar una magnitud correcta y, al mismo [[tiempo]], insuficiente para otra pregunta física. El ciclocomputador informa de [[rapidez_media]] porque eso resume el esfuerzo y el rendimiento sobre la ruta real. Pero si el objetivo fuera describir el cambio neto de posición entre origen y destino, haría falta [[velocidad_media]], no [[rapidez_media]]. Y si se quisiera estudiar dónde se produjo el mayor esfuerzo o la frenada más intensa, entonces habría que recurrir a la relacion correspondiente y la relacion correspondiente.\r
\r
{{f:velocidad_instantanea}}\r
\r
{{f:aceleracion_instantanea}}\r
\r
\r
La lección operativa es muy clara: no basta con saber calcular una razón entre espacio y [[tiempo]] . Hay que decidir qué espacio entra en el numerador, qué aspecto del movimiento se quiere resumir y qué información se pierde al promediar. Esa es la competencia física central de este leaf.\r
`;export{e as default};
