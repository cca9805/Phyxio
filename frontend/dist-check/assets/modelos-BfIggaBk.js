const e=`# Modelos físicos: ecuación fundamental de la dinámica rotacional\r
\r
## Modelo ideal\r
\r
El modelo ideal de la ecuación fundamental supone un cuerpo rígido que gira alrededor de un eje fijo. Bajo estas condiciones, el torque neto [[tau]] sobre el sistema produce una aceleración angular [[alpha]] proporcional:\r
\r
{{f:momento_angular}}\r
\r
. Solo se conservan las interacciones relevantes — el torque neto aplicado y el momento de inercia del cuerpo — porque en este régimen describen completamente la respuesta dinámica. Los efectos de deformación, rozamiento interno y variación de I con la posición se descartan como correcciones de segundo orden. La simplificación es válida mientras el alumno pueda argumentar por qué esos efectos no cambian la conclusión esencial del problema.\r
\r
## Hipótesis\r
\r
- Cuerpo rígido: la distribución de masa no cambia durante el movimiento, por lo que I es constante.\r
- Eje de rotación fijo: el vector que define el eje no varía, lo que hace que [[alpha]] sea escalar en el plano.\r
- Torque neto bien definido: se conocen todos los torques externos sobre el sistema y pueden sumarse algebraicamente respecto al mismo eje.\r
- Marco inercial o correcciones explícitas: si el marco no es inercial, se añaden torques ficticios para conservar la validez de la ecuación.\r
- Pérdidas despreciables en primera aproximación: fricción en cojinetes y resistencia del aire se tratan como nulas salvo que se declare un modelo extendido.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es fiable cuando la deformación relativa del cuerpo durante el movimiento es menor del 1 %, cuando la velocidad angular no provoca efectos giroscópicos significativos sobre el eje, y cuando los torques de fricción representan menos del 5 % del torque neto total. Para sistemas mecánicos de laboratorio y problemas de ingeniería básica, eso equivale a velocidades angulares inferiores a unos pocos cientos de rad/s y dimensiones entre 10^-2 y 10^1 m. Fuera de estos rangos, las correcciones por elasticidad, calentamiento o precesión dejan de ser despreciables.\r
\r
## Señales de fallo del modelo\r
\r
Las señales de fallo aparecen en la lectura física antes que en la calculadora. Si [[alpha]] calculado no concuerda con la tendencia observada en el sistema real, si la deceleración no sigue la predicción cuando se retira el torque motor, o si el cuerpo oscila en lugar de girar de forma uniforme, alguna hipótesis del modelo ideal se ha roto. También es sospechoso que un torque supuestamente pequeño de rozamiento domine la expresión o que I cambie visiblemente durante el movimiento. En todos esos casos, el modelo pide una extensión antes de continuar.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido introduce pérdidas de fricción como torque resistente\r
\r
{{f:momento_angular}}\r
\r
, variación de I con la posición angular cuando la geometría cambia, o efectos giroscópicos cuando el eje no es fijo. El modelo de energía — trabajando con el teorema trabajo-energía rotacional — es una alternativa equivalente útil para problemas donde se conocen desplazamientos angulares en lugar de torques instantáneos. El modelo de momento angular (\r
\r
{{f:momento_angular}}\r
\r
) es adecuado cuando el torque neto es nulo y se analiza conservación.\r
\r
Cuándo conviene pasar al modelo extendido o alternativo: cuando la fricción o la deformación alteran el resultado en más de un 5 %, cuando el eje precesa visiblemente, o cuando los datos del problema son desplazamientos y velocidades angulares en lugar de torques directos.\r
\r
## Comparación operativa\r
\r
El modelo ideal permite resolver directamente [[alpha]] a partir de [[tau]] e I con una sola operación. El modelo extendido con fricción requiere una ecuación diferencial de primer orden, lo que aumenta la complejidad pero mejora la predicción en sistemas reales. El modelo energético evita calcular torques explícitamente cuando la geometría de las fuerzas es complicada. La elección depende de qué datos están disponibles y qué precisión pide el problema: para diagnóstico rápido en aula, el modelo ideal basta; para diseño de actuadores o frenos, el extendido es necesario.`;export{e as default};
