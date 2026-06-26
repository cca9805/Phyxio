const e=`# Errores comunes en la Formulación de Kelvin-Planck\r
\r
## Errores conceptuales\r
\r
### Error 1: "La primera ley permite un motor perfecto"\r
\r
**Descripción.** El alumno razona que, si la energía se conserva, basta con transformar todo [[Q_H]] en [[W]]. Olvida que la primera ley no decide la direccion ni la calidad de la conversion energética.\r
\r
**Por que parece correcto.** Parece correcto porque el balance de energía no muestra perdida si se igualan calor y trabajo.\r
\r
**Senal de deteccion.** Kelvin-Planck agrega una restriccion independiente: en un [[ciclo]], el único efecto no puede ser tomar calor de un foco y convertirlo completamente en trabajo. El balance energético puede cerrar, pero el balance de entropía no.\r
\r
**Correccion conceptual.** Primero aplica conservación de energía. Despues aplica la prohibicion de segunda ley. Ambas deben cumplirse.\r
\r
**Mini-ejemplo de contraste.** Si un motor toma 1000 J y entrega 1000 J como trabajo sin rechazo, conserva energía, pero viola la segunda ley. Si toma 1000 J, entrega 350 J y rechaza 650 J, puede ser compatible con Kelvin-Planck.\r
\r
### Error 2: "El calor rechazado es solo mala ingenieria"\r
\r
**Descripción.** Se piensa que [[Q_C]] desapareceria con materiales perfectos, turbinas sin rozamiento o aislamiento ideal.\r
\r
**Por que parece correcto.** Parece correcto porque muchas perdidas reales si disminuyen al mejorar materiales y procesos.\r
\r
**Senal de deteccion.** Las mejoras reducen irreversibilidades, pero no eliminan el requisito de rechazo para una maquina ciclica entre focos finitos. Incluso un [[ciclo]] reversible de Carnot rechaza calor.\r
\r
**Correccion conceptual.** Interpreta [[Q_C]] como parte estructural del [[ciclo]], no solo como perdida accidental. La ingenieria puede acercar [[eta]] a [[eta_carnot]], pero no hacer [[eta]] igual a uno.\r
\r
**Mini-ejemplo de contraste.** Una turbina más eficiente aumenta el trabajo neto, pero sigue necesitando condensador o foco frio. Sin foco frio, no hay motor térmico ciclico ordinario.\r
\r
## Errores de modelo\r
\r
### Error 3: "Aplicar Kelvin-Planck a cualquier proceso con calor"\r
\r
**Descripción.** El alumno aplica el enunciado a una expansión única, a una reaccion quimica o a una bateria como si todo fuese una maquina térmica ciclica.\r
\r
**Por que parece correcto.** Parece correcto porque todos esos sistemas intercambian energía y pueden producir trabajo.\r
\r
**Senal de deteccion.** El enunciado habla de dispositivos que operan en [[ciclo]]. Si el sistema termina en otro estado, hay que incluir cambio de energía interna, composicion, masa o energía quimica.\r
\r
**Correccion conceptual.** Antes de usar Kelvin-Planck, pregunta si el sistema vuelve al estado inicial. Si no lo hace, usa un modelo de proceso abierto o no ciclico.\r
\r
**Mini-ejemplo de contraste.** Un gas que se expande una sola vez puede producir trabajo mientras cambia de estado. Un motor ciclico debe volver al inicio y no puede ocultar energía interna acumulada.\r
\r
## Errores matemáticos\r
\r
### Error 4: "Usar Celsius en el limite de Carnot"\r
\r
**Descripción.** Se introducen temperaturas en grados Celsius en el limite de Carnot y se obtiene una eficiencia absurda.\r
\r
**Por que parece correcto.** Parece correcto porque Celsius es la escala cotidiana de temperatura.\r
\r
**Senal de deteccion.** Las razones de temperatura termodinámica usan escala absoluta. [[T_H]] y [[T_C]] deben expresarse en kelvin.\r
\r
**Correccion conceptual.** Convierte siempre a kelvin antes de comparar temperaturas en el limite de Carnot. Despues verifica que [[eta_carnot]] queda entre cero y uno.\r
\r
**Mini-ejemplo de contraste.** Un foco a 500 grados Celsius y un ambiente a 25 grados Celsius no se introducen como 500 y 25 en la razon de Carnot; se convierten a temperaturas absolutas.\r
\r
## Errores de interpretacion\r
\r
### Error 5: "Confundir eficiencia alta con violacion de segunda ley"\r
\r
**Descripción.** Se cree que cualquier [[eta]] grande viola Kelvin-Planck.\r
\r
**Por que parece correcto.** Parece correcto porque el enunciado suele resumirse como una prohibicion de rendimiento perfecto.\r
\r
**Senal de deteccion.** La segunda ley no prohibe motores eficientes. Prohibe eficiencia perfecta en [[ciclo]] de un único foco y superar el limite reversible entre dos focos.\r
\r
**Correccion conceptual.** Compara [[eta]] con uno y con [[eta_carnot]]. Si queda por debajo de ambas fronteras y el balance energético cierra, no hay violacion.\r
\r
**Mini-ejemplo de contraste.** Un motor con eficiencia 0.45 puede ser posible si su limite de Carnot es 0.60. Un motor con eficiencia 1.00 en [[ciclo]] queda prohibido.\r
\r
## Regla de autocontrol rápido\r
\r
Si una propuesta dice "un motor ciclico toma calor de un único foco y todo sale como trabajo", marca violacion de Kelvin-Planck. Si hay dos focos, calcula [[eta]], comprueba [[eta_carnot]] y busca el rechazo [[Q_C]].\r
`;export{e as default};
