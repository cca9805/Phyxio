const e=`# Modelos de ondas estacionarias\r
\r
## Modelo ideal\r
\r
El modelo ideal de ondas estacionarias en cuerdas describe una cuerda perfectamente elastica, de densidad uniforme y tension constante, anclada en extremos absolutamente rigidos. La superposicion de dos ondas viajeras de igual amplitud y frecuencia propagandose en sentidos opuestos produce un patron espacial fijo con nodos y vientres perfectamente definidos.\r
\r
La frecuencia de cada modo es un multiplo entero exacto de la frecuencia fundamental, formando una serie armonica perfecta. El patron espacial es exactamente sinusoidal y no evoluciona en amplitud con el tiempo.\r
\r
## Hipotesis\r
\r
- La cuerda es un medio continuo con densidad lineal uniforme a lo largo de toda su longitud\r
- Las oscilaciones son pequenas respecto a la longitud de onda, validando la aproximacion lineal\r
- El material es perfectamente elastico, sin disipacion interna ni radiacion energetica al entorno\r
- La vibracion es puramente transversal, sin acoplamiento con modos longitudinales ni torsionales\r
- La velocidad de propagacion es independiente de la frecuencia (ausencia de dispersion)\r
- Los extremos impiden completamente el movimiento transversal en todo momento\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es fiable dentro de los siguientes rangos:\r
\r
- Amplitud de vibracion menor que el 10% de la longitud de onda del modo: [[amplitud_maxima]] inferior a 0.1 [[longitud_onda_estacionaria]]\r
- Numero de modo [[numero_armonico]] menor que 10 para cuerdas tipicas; para [[numero_armonico]] entre 10 y 20 las correcciones son del orden del 1%\r
- Tension uniforme con variaciones menores al 5% a lo largo de la cuerda\r
- Longitud de onda [[longitud_onda_estacionaria]] mucho mayor que el diametro de la cuerda (relacion mayor de 20 a 1)\r
- Frecuencia de amortiguamiento mucho menor que la frecuencia de oscilacion (factor de calidad mayor que 10)\r
\r
## Señales de fallo del modelo\r
\r
**Nodos imperfectos**: los puntos de amplitud minima no alcanzan cero en la medicion experimental, indicando amortiguamiento significativo o condiciones de contorno imperfectas en los extremos.\r
\r
**Frecuencias no armonicas**: las razones entre frecuencias de modos consecutivos difieren del valor entero teorico, revelando inarmonicidad por rigidez de flexion de la cuerda.\r
\r
**Desplazamiento de extremos**: los puntos de anclaje vibran perceptiblemente durante la oscilacion, desplazando las frecuencias de resonancia respecto a las predicciones del modelo.\r
\r
**Decaimiento rapido**: la amplitud decae significativamente en tiempos comparables al periodo de oscilacion, haciendo inadecuado el modelo sin amortiguamiento.\r
\r
**Desviacion sinusoidal**: para amplitudes grandes la forma del patron deja de ser perfectamente sinusoidal, mostrando efectos no lineales.\r
\r
## Modelo extendido o alternativo\r
\r
**Modelo de cuerda con rigidez (Rayleigh)**: incorpora el momento de flexion. Las frecuencias de los modos superiores se elevan por encima de la prediccion armonica ideal, con una correccion que crece con el cuadrado del numero de modo. Este modelo se aplica cuando se requiere precision superior al 1% en cuerdas de piano o alambres de alta rigidez. El paso al modelo extendido es necesario cuando las frecuencias medidas de modos superiores superan en mas de un 2% los multiplos enteros de la fundamental.\r
\r
**Modelo con amortiguamiento**: incluye terminos de disipacion viscosa proporcionales a la velocidad de deformacion. Predice el decaimiento exponencial de la amplitud y el ensanchamiento de las curvas de resonancia. Se aplica en cuerdas sumergidas en fluidos densos, materiales con alto coeficiente de perdidas o analisis de respuesta transitoria.\r
\r
## Comparacion operativa\r
\r
| Aspecto | Modelo ideal | Modelo con rigidez | Modelo con amortiguamiento |\r
|---|---|---|---|\r
| Espectro | Armonico exacto | Inarmonico creciente | Armonico con decaimiento |\r
| Validez en n alto | Solo [[numero_armonico]] menor que 10 | Hasta [[numero_armonico]] de 20 o mas | Independiente de n |\r
| Nodos | Amplitud cero exacta | Amplitud cero exacta | Amplitud minima no nula |\r
| Aplicacion | Calculo basico | Piano, cuerdas rigidas | Cuerdas en fluidos, acustica |\r
\r
El modelo ideal es suficiente para la mayoria de calculos de fisica basica. Cuando conviene cambiar al modelo extendido: si la inarmonicidad supera el 2%, si se trabaja con cuerdas de piano o alambres rigidos a modos altos, o si el amortiguamiento observable hace que los nodos no alcancen amplitud cero. La transicion al modelo con amortiguamiento es necesaria cuando el decaimiento de la amplitud es comparable al periodo de oscilacion.\r
`;export{e as default};
