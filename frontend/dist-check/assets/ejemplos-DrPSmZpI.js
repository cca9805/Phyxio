const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de masa [[m]] se libera desde el reposo en la parte alta de una rampa rígida de longitud [[L]] y ángulo [[theta]]. La rampa se idealiza sin fricción. Determinar la aceleración [[a]], la velocidad final [[v_f]] al final del tramo y el tiempo [[t]] de descenso. Además, justificar por qué el modelo sin rozamiento es aceptable como primera aproximación y discutir qué evidencia experimental obligaría a cambiar de modelo.\r
\r
## Datos\r
\r
- [[m]] = 2.0 kg\r
- [[g]] = 9.8 m/s2\r
- [[theta]] = 30 grados\r
- [[L]] = 4.0 m\r
- [[v]] inicial = 0\r
\r
Datos de control para validación:\r
\r
- Tolerancia de comparación medición-modelo: 10 por ciento.\r
- Repeticiones esperadas: al menos 3 ensayos equivalentes.\r
\r
## Definición del sistema\r
\r
Sistema: bloque puntual de masa [[m]] moviéndose en una dimensión efectiva a lo largo del plano.\r
\r
Interacciones relevantes:\r
\r
- Peso total [[P]] generado por [[m]] y [[g]].\r
- Reacción normal [[N]] del plano.\r
\r
Ejes elegidos:\r
\r
- Eje tangencial al plano (dirección de deslizamiento).\r
- Eje normal al plano (dirección de contacto).\r
\r
Magnitudes derivadas clave:\r
\r
- Componente paralela [[P_par]]: responsable de la aceleración tangencial.\r
- Componente perpendicular [[P_perp]]: asociada al cierre de contacto con [[N]].\r
\r
Esta definición evita el error clásico de usar [[P]] completa en el eje de movimiento.\r
\r
## Modelo físico\r
\r
Modelo ideal sin rozamiento con estas hipótesis:\r
\r
1. La fuerza de fricción es despreciable frente a [[P_par]].\r
2. La rampa es rígida y de [[theta]] constante.\r
3. El contacto bloque-rampa se mantiene durante todo el trayecto.\r
4. La aceleración [[a]] es constante para el tramo analizado.\r
\r
Relaciones núcleo del leaf:\r
\r
{{f:descomposicion_paralela}}\r
\r
{{f:descomposicion_perpendicular}}\r
\r
{{f:normal_plano_ideal}}\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
## Justificación del modelo\r
\r
La justificación no es "porque el problema lo dice", sino por escala de efectos. Si la superficie está pulida, el trayecto es corto y la velocidad moderada, las pérdidas por fricción y aire pueden ser secundarias en comparación con la fuerza motriz [[P_par]]. Bajo esa condición, el modelo ideal entrega predicciones robustas de primer orden para [[a]], [[v_f]] y [[t]].\r
\r
Además, este modelo es físicamente transparente: separa causa tangencial (componente [[P_par]]) de condición de contacto (par [[P_perp]], [[N]]). Esa separación mejora el diagnóstico. Si luego la medición difiere, sabemos dónde buscar: o aparece disipación, o cambian las hipótesis geométricas, o se degradó la repetibilidad experimental.\r
\r
## Resolución simbólica\r
\r
1. Proyección del peso sobre el eje tangencial y normal con [[theta]]:\r
\r
{{f:descomposicion_paralela}}\r
\r
{{f:descomposicion_perpendicular}}\r
\r
2. Cierre del eje normal para obtener [[N]]:\r
\r
{{f:normal_plano_ideal}}\r
\r
3. Dinámica tangencial para [[a]]:\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
4. Cinemática de aceleración constante para velocidad final [[v_f]] y tiempo [[t]] sobre distancia [[L]]:\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
Conclusión simbólica: todo el problema queda reducido a cómo [[theta]] modula la fracción útil del peso.\r
\r
## Sustitución numérica\r
\r
Con [[theta]] = 30 grados:\r
\r
- [[a]] = [[g]] sen([[theta]]) = 9.8 x 0.5 = 4.9 m/s2.\r
- [[v_f]] = sqrt(2 x [[a]] x [[L]]) = sqrt(2 x 4.9 x 4.0) = sqrt(39.2) ~= 6.26 m/s.\r
- [[t]] = sqrt((2 x [[L]])/[[a]]) = sqrt(8.0/4.9) ~= 1.28 s.\r
\r
Lectura del número:\r
\r
- [[a]] es intermedia entre 0 y [[g]], coherente con una rampa de inclinación media.\r
- [[v_f]] de unos 6 m/s sugiere necesidad de control al final del tramo en contextos reales.\r
- [[t]] cercano a 1.3 s muestra que variaciones pequeñas de [[theta]] pueden cambiar bastante el ritmo del proceso.\r
\r
## Validación dimensional\r
\r
- [[a]] debe tener unidades m/s2: correcto.\r
- [[v_f]] debe tener unidades m/s: correcto.\r
- [[t]] debe tener unidades s: correcto.\r
\r
Chequeos de límite:\r
\r
- Si [[theta]] -> 0, [[a]] -> 0, no hay deslizamiento espontáneo.\r
- Si [[theta]] aumenta, [[a]] aumenta de forma no lineal y [[t]] disminuye.\r
\r
Chequeo de consistencia causal:\r
\r
- [[P_par]] explica cambio de [[v]], no [[P_perp]].\r
- [[N]] cierra equilibrio normal; no impulsa en el eje tangencial.\r
\r
## Interpretación física\r
\r
El resultado enseña una idea estructural: en un plano inclinado, la aceleración no depende de "tener más peso" en abstracto, sino de cuánto del peso se alinea con la trayectoria. Esa parte es [[P_par]], y su magnitud está controlada por [[theta]]. Por eso el ángulo es variable de diseño y no un simple dato geométrico.\r
\r
También queda claro por qué este caso es la puerta de entrada a modelos más realistas. Una vez comprendido el papel de [[N]] y de las proyecciones, incorporar fricción en el siguiente leaf es natural: la disipación se conecta precisamente con la fuerza normal de contacto.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una empresa de logística usa una rampa para desplazar cajas desde una mesa de preparación hasta una banda transportadora inferior. El equipo quiere reducir tiempos de ciclo sin añadir motores en esa etapa. Se plantea ajustar [[theta]] manteniendo fija la longitud [[L]] por restricciones de espacio.\r
\r
La pregunta operativa es doble: ¿qué rango de ángulos ofrece un descenso suficientemente rápido y, al mismo tiempo, una velocidad final [[v_f]] segura para manipulación humana? El modelo sin rozamiento se utiliza como herramienta de preselección para no diseñar por intuición.\r
\r
## Estimación física\r
\r
Se toma [[L]] = 3.0 m y se evalúan tres ángulos de ensayo.\r
\r
La estimación física aquí no es decorativa: usa [[a]], [[v_f]] y [[t]] para decidir si una rampa queda dentro del margen operativo o si debe rediseñarse antes de construir.\r
\r
1. [[theta]] = 12 grados:\r
\r
- [[a]] ~= 2.04 m/s2\r
- [[t]] ~= 1.72 s\r
- [[v_f]] ~= 3.50 m/s\r
\r
2. [[theta]] = 20 grados:\r
\r
- [[a]] ~= 3.35 m/s2\r
- [[t]] ~= 1.34 s\r
- [[v_f]] ~= 4.48 m/s\r
\r
3. [[theta]] = 28 grados:\r
\r
- [[a]] ~= 4.60 m/s2\r
- [[t]] ~= 1.14 s\r
- [[v_f]] ~= 5.26 m/s\r
\r
Cálculo de referencia para interpretar el diseño:\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
{{f:tiempo_deslizamiento}}\r
\r
Con esas relaciones, se ve que aumentar [[theta]] incrementa directamente [[a]] y [[v_f]], pero reduce [[t]]. En una planta con límite de salida [[v_f]] <= 4.5 m/s, el caso de 12 grados cumple holgadamente, el de 20 grados queda en zona de revisión y el de 28 grados se descarta.\r
\r
La diferencia cuantitativa entre 12 y 28 grados no es marginal: [[v_f]] sube de alrededor de 3.5 m/s a 5.3 m/s, un aumento de casi 2 m/s, mientras que [[t]] baja desde ~1.7 s a ~1.1 s. Eso significa que el mismo tramo puede pasar de una transferencia cómoda a una transferencia potencialmente agresiva según solo cambie el ángulo. Esta lectura es justamente la razón por la que el modelo ideal sirve como filtro inicial de diseño.\r
\r
Visto como ganancia de ciclo, pasar de 12 a 20 grados reduce [[t]] en unas 0.38 s, cerca de un 22 por ciento, y pasar de 20 a 28 grados solo recorta unas 0.20 s más, pero a costa de empujar [[v_f]] por encima del margen de 4.5 m/s. Esa comparación muestra el punto exacto en el que la mejora de productividad deja de compensar el riesgo mecánico.\r
\r
Lectura cuantitativa: subir [[theta]] baja tiempo de ciclo, pero eleva [[v_f]]. Si el límite ergonómico de recepción es cercano a 4.5 m/s, [[theta]] alrededor de 20 grados aparece como compromiso inicial razonable.\r
\r
## Interpretación\r
\r
La aplicación real muestra cómo un modelo ideal puede guiar decisiones tempranas de ingeniería con bajo costo cognitivo. No entrega la verdad final del sistema, pero sí una región candidata útil para prototipado. Luego, la validación experimental decide si el error permanece dentro de tolerancia o si se requiere incorporar fricción.\r
\r
Cuantitativamente, este prefiltrado importa porque diferencia entre una rampa que entrega una [[v_f]] cercana a 3.5 m/s y otra cercana a 5.3 m/s, es decir, una variación suficiente para cambiar el criterio de seguridad o el tipo de recepción necesaria. También separa tiempos de ciclo de aproximadamente 1.7 s, 1.3 s y 1.1 s, que en una línea real pueden significar estaciones sincronizadas o bloqueos acumulados.\r
\r
Si el umbral interno de la planta es, por ejemplo, [[v_f]] <= 4.5 m/s, entonces la opción de [[theta]] = 12 grados queda dentro de margen, [[theta]] = 20 grados queda cerca del borde, y [[theta]] = 28 grados lo supera. Esa lectura no es decorativa: define si el diseño pasa o no a la etapa siguiente. En paralelo, la diferencia de casi 0.6 s entre 12 grados y 20 grados puede representar una mejora de productividad sin llegar todavía al régimen de riesgo del ángulo más alto.\r
\r
La ganancia didáctica es fuerte: el estudiante ve que las ecuaciones no son un fin, sino un medio para tomar decisiones justificadas. Se aprende a diseñar con hipótesis explícitas, validar con datos y actualizar el modelo cuando las evidencias lo piden.`;export{e as default};
