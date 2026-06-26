const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un motor térmico ciclico recibe 2400 J de calor de un foco caliente por cada vuelta. El foco caliente esta a 900 K y el foco frio esta a 300 K. El motor entrega 700 J de trabajo útil por [[ciclo]]. Se pide calcular el calor rechazado, la eficiencia real, el limite reversible de Carnot y decidir si la propuesta respeta la formulacion de Kelvin-Planck.\r
\r
## Datos\r
\r
- Calor absorbido del foco caliente: [[Q_H]] vale 2400 J por [[ciclo]].\r
- Trabajo útil neto: [[W]] vale 700 J por [[ciclo]].\r
- Temperatura del foco caliente: [[T_H]] vale 900 K.\r
- Temperatura del foco frio: [[T_C]] vale 300 K.\r
- La maquina opera en [[ciclo]], por lo que no almacena energía interna neta.\r
- Magnitudes de diagnostico: [[Q_C]], [[eta]], [[eta_carnot]] y [[DeltaS_universo]].\r
\r
## Definición del sistema\r
\r
El sistema es la maquina térmica completa durante una vuelta. El entorno contiene los dos focos térmicos y el eje que recibe el trabajo útil. Al final de la vuelta, la sustancia de trabajo vuelve al estado inicial, así que el balance de energía del [[ciclo]] no incluye variación neta de energía interna.\r
\r
## Modelo físico\r
\r
Usamos el modelo de maquina térmica ciclica entre dos focos. El motor toma [[Q_H]] del foco caliente, entrega [[W]] al exterior y rechaza [[Q_C]] al foco frio. La pregunta física no es solo si la energía se conserva, sino si la eficiencia [[eta]] queda por debajo de los limites de segunda ley.\r
\r
El modelo esta anclado al enunciado de Kelvin-Planck porque identifica la situación prohibida: conversion total del calor absorbido en trabajo, sin rechazo al foco frio. Aqui comprobaremos si existe rechazo positivo y si la eficiencia no supera el limite reversible.\r
\r
## Justificacion del modelo\r
\r
El enunciado declara que el dispositivo opera en [[ciclo]], de modo que Kelvin-Planck aplica directamente. También se dan dos temperaturas absolutas, lo que permite usar el limite de Carnot como comparacion superior. No se pide potencia, friccion detallada ni transferencia finita, por lo que basta el modelo ideal de balance por [[ciclo]].\r
\r
## Resolucion simbolica\r
\r
El balance energético del motor es:\r
\r
{{f:balance_motor_termico}}\r
\r
La eficiencia real se evalua con:\r
\r
{{f:eficiencia_motor}}\r
\r
El criterio conceptual de Kelvin-Planck exige:\r
\r
{{f:limite_kelvin_planck}}\r
\r
Y el limite reversible entre los focos dados es:\r
\r
{{f:eficiencia_carnot_motor}}\r
\r
La lectura entrópica de coherencia general es:\r
\r
{{f:entropia_ciclo_motor}}\r
\r
## Sustitucion numerica\r
\r
Con el balance energético, el calor rechazado resulta 1700 J. Esta cantidad no es una perdida accidental dentro del planteamiento: es el calor que permite cerrar el [[ciclo]] sin intentar conversion total de [[Q_H]] en [[W]].\r
\r
La eficiencia real resulta aproximadamente 0.292. Es decir, el motor convierte cerca del 29.2 por ciento del calor absorbido en trabajo útil. La eficiencia de Carnot para los focos dados resulta aproximadamente 0.667, de modo que el motor real queda por debajo del techo reversible.\r
\r
La comparacion física es clara: [[eta]] es menor que [[eta_carnot]] y también menor que uno. Además [[Q_C]] es positivo. Por tanto, la propuesta no viola Kelvin-Planck.\r
\r
## Validacion dimensional\r
\r
- [[Q_H]], [[Q_C]] y [[W]] son energías: \`[M L² T⁻²]\`.\r
- [[eta]] y [[eta_carnot]] son cocientes de energías o temperaturas absolutas: \`[1]\`.\r
- [[T_H]] y [[T_C]] son temperaturas absolutas en kelvin.\r
- [[DeltaS_universo]] se expresa como energía por temperatura: \`[M L² T⁻² Theta⁻¹]\`.\r
\r
Estas dimensiones separan magnitudes de energía, cocientes adimensionales y diagnostico entrópico.\r
\r
## Interpretacion física\r
\r
El motor no es perfecto: rechaza una parte importante del calor al foco frio. Esa observación no es un defecto del ejercicio; es exactamente la marca de compatibilidad con Kelvin-Planck. Si el calculo hubiese dado [[Q_C]] nulo con [[W]] positivo, el motor habria sido imposible como maquina ciclica.\r
\r
El limite de Carnot también ayuda a interpretar. La maquina real usa menos de la mitad del margen reversible disponible, así que hay espacio para mejoras de ingenieria, pero ninguna mejora puede llevar [[eta]] hasta uno mientras el sistema siga operando como motor térmico ciclico ordinario.\r
\r
Esto implica que el rechazo [[Q_C]] domina la lectura física del resultado: no es una resta secundaria, sino la condición que permite repetir el [[ciclo]] sin violar la segunda ley.\r
\r
La lectura causal es que el foco frio no es un accesorio: es el canal por el que el [[ciclo]] descarga la parte de energía que no puede organizarse como trabajo. El número 1700 J muestra una consecuencia física, no solo una resta. Gracias a ese rechazo, el motor puede repetirse sin dejar al fluido en otro estado ni exigir una disminucion imposible de [[DeltaS_universo]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una planta electrica de vapor quema combustible para calentar un fluido, expande vapor en una turbina y condensa el vapor en un foco frio cercano al ambiente. La planta no puede convertir toda la energía térmica del combustible en electricidad porque debe rechazar calor en el condensador.\r
\r
## Estimacion física\r
\r
Supongamos una planta que absorbe 100 MJ por [[ciclo]] equivalente y produce 35 MJ de trabajo electrico neto. El balance indica que debe rechazar unos 65 MJ al foco frio. Si sus temperaturas efectivas son 800 K y 300 K, el limite reversible estaria alrededor de 0.625, mientras que la eficiencia real seria 0.35.\r
\r
La lectura cuantitativa muestra dos cosas. Primero, la planta no viola Kelvin-Planck porque [[Q_C]] es grande y positivo. Segundo, la diferencia entre 0.35 y el limite reversible mide margen perdido por irreversibilidades, no posibilidad de llegar a eficiencia perfecta.\r
\r
La estimacion también permite una lectura de escala: de cada 100 MJ que entran como calor, solo 35 MJ salen como electricidad neta y unos 65 MJ deben gestionarse en el condensador, torres de refrigeración o agua de enfriamiento. Ese reparto explica por que el diseno del sumidero térmico es tan importante como la turbina.\r
\r
## Interpretacion\r
\r
En una central real, mejorar aislamiento, turbinas y condensadores reduce perdidas, pero no convierte el condensador en un componente prescindible. Kelvin-Planck explica por que toda planta térmica necesita un sumidero de calor y por que el rendimiento debe compararse con [[eta_carnot]], no con el ideal imposible de conversion total.\r
\r
Esto implica que el dato numerico no se interpreta como simple rendimiento bajo: físicamente indica que el motor necesita un entorno frio para cerrar el [[ciclo]]. Por tanto, el rechazo de calor no contradice el objetivo de producir trabajo, sino que se opone a la idea de una conversion total y mantiene coherente la segunda ley.\r
`;export{e as default};
