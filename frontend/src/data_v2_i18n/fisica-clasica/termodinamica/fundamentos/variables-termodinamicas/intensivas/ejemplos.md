# Ejemplo tipo examen

## Enunciado

Un recipiente contiene una muestra uniforme de gas con temperatura [[T]] de 300 K, presión [[P]] de 100 kPa, masa [[m]] de 0.40 kg y volumen [[V]] de 0.32 m3. Se prepara una segunda copia identica y se consideran ambas como un único sistema compuesto. Determina que ocurre con [[T]], [[P]], [[rho]] y con la cantidad total. Despues estima la variable intensiva final al mezclar dos porciones con valores [[X_A]] y [[X_B]] distintos.

## Datos

- Primera muestra: [[T]] de 300 K y [[P]] de 100 kPa.
- Cantidades extensivas de una muestra: [[m]] de 0.40 kg y [[V]] de 0.32 m3.
- Segunda muestra: identica a la primera.
- Factor de escala: [[lambda_escala]] igual a dos.
- Para la mezcla comparativa: [[X_A]] de 300 unidades y [[X_B]] de 360 unidades, con cantidades en proporcion tres a uno.

## Definición del sistema

El sistema inicial es una muestra uniforme. El sistema compuesto es la union conceptual de dos copias equivalentes, sin compresión, sin cambio de fase y sin intercambio neto con el entorno. Para la segunda parte, el sistema es una mezcla idealizada de dos porciones compatibles.

## Modelo físico

El modelo usa el test de intensividad de [[X_int]]. La [[T]] y la [[P]] son variables de estado; no se suman al juntar copias iguales. La [[rho]] se calcula como cociente entre [[m]] y [[V]], por lo que permanece constante si ambas extensivas escalan juntas. En la mezcla, el valor intensivo final se estima con una ponderacion por cantidad, no con una suma directa.

## Justificacion del modelo

La muestra se declara uniforme, de modo que una sola lectura de [[T]], [[P]] y [[rho]] representa el estado. La segunda copia tiene el mismo estado, así que [[lambda_escala]] cambia la cantidad de sistema, no la condición local. La mezcla comparativa requiere ponderacion porque las porciones no aportan la misma cantidad. Estas condiciones conectan con las relaciones nucleares del leaf:

{{f:criterio_intensividad}}

{{f:igualdad_equilibrio_intensivo}}

{{f:densidad_intensiva}}

{{f:promedio_ponderado_intensivo}}

## Resolucion simbolica

Para una copia escalada sin cambiar el estado, la variable [[X_int]] conserva su valor. Por tanto, [[T]] y [[P]] quedan iguales en el sistema compuesto. Esa igualdad corresponde a la lectura de equilibrio intensivo entre copias compatibles.

Para la densidad, como [[m]] y [[V]] se multiplican por el mismo factor, el cociente conserva el valor inicial. La cantidad total, en cambio, si aumenta porque [[m]] y [[V]] son extensivas.

{{f:densidad_intensiva}}

Para la mezcla, el valor final de [[X_int]] se estima con una ponderacion por cantidad. Si la porcion asociada a [[X_A]] tiene tres veces más cantidad que la asociada a [[X_B]], el resultado queda más cerca de [[X_A]] que de [[X_B]].

## Sustitucion numerica

La masa total pasa de 0.40 kg a 0.80 kg. El volumen total pasa de 0.32 m3 a 0.64 m3. La densidad inicial es 1.25 kg/m3 y la densidad final sigue siendo 1.25 kg/m3 porque masa y volumen crecieron juntos.

La temperatura del sistema compuesto sigue siendo 300 K. La presión sigue siendo 100 kPa. Para la mezcla de valores intensivos, tres partes a 300 unidades y una parte a 360 unidades dan un valor final de 315 unidades. El resultado no es 660 unidades ni tampoco una media simple de 330 unidades.

## Validacion dimensional

La [[T]] mantiene unidad K antes y después del escalado. La [[P]] mantiene unidad Pa. La [[rho]] se expresa como `kg m⁻³`, que coincide con masa dividida por volumen. El promedio ponderado conserva la unidad de [[X_int]] porque los pesos de cantidad se cancelan en el cociente. Esta lectura dimensional confirma que no se han sumado magnitudes incompatibles.

## Interpretacion física

El calculo muestra que el sistema compuesto contiene más gas, pero no esta en un estado térmico o mecánico más intenso. Hay más [[m]] y más [[V]], pero la misma [[T]], la misma [[P]] y la misma [[rho]]. La lectura causal es que una copia adicional no crea una diferencia de equilibrio. En la mezcla, la porcion mayor domina el valor final, lo que impide tratar las intensivas como simples etiquetas sin peso físico.

# Ejemplo de aplicación real

## Contexto

Un tecnico compara dos depositos de aire comprimido usados en una instalacion. Uno es pequeño y otro es grande, pero ambos sensores marcan temperatura cercana a 295 K y presión cercana a 600 kPa. El objetivo es decidir si el deposito grande esta "más caliente" o "más presurizado" por contener más gas.

## Estimacion física

La lectura cuantitativa separa estado e inventario. Si ambos depositos tienen la misma [[T]] y la misma [[P]], estan en condiciones intensivas equivalentes, aunque el deposito grande tenga más [[m]] y mayor [[V]]. Si el volumen del deposito grande es cinco veces mayor y mantiene una densidad similar, su masa sera unas cinco veces mayor, pero su [[rho]] no tiene por que aumentar. Un deposito de 10 litros y otro de 50 litros a igual estado tienen razon de volumen cinco a uno; la masa también escala cinco a uno, mientras las lecturas intensivas quedan comparables.

## Interpretacion

La conclusion operativa es que el deposito grande puede almacenar más cantidad total y más energía, pero no por eso tiene una temperatura mayor ni una presión mayor. Para seguridad mecánica se mira [[P]] y area de paredes; para inventario se mira [[m]]. Para comparar estado se usan intensivas. Esta separacion evita decisiones equivocadas, como rechazar un deposito solo por ser grande o ignorar otro pequeño con presión alta.
