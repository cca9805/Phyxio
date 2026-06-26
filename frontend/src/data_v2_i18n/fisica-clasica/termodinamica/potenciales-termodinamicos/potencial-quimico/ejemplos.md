# Ejemplo tipo examen

## Enunciado

A 298 K, el potencial químico estándar [[mu_std]] del vapor de agua es menos 228.6 kJ/mol y el del agua líquida pura es también menos 228.6 kJ/mol (son iguales en el equilibrio líquido-vapor a la presión de vapor del agua, que a 298 K es 0.03169 bar). Calcular el potencial químico [[mu]] del vapor de agua cuando su presión parcial es 0.020 bar y determinar si el vapor se condensará espontáneamente o evaporará.

## Datos

- [[T]] = 298 K
- [[R]] = 8.314 J/(mol·K)
- [[mu_std]] del vapor = menos 228 600 J/mol (valor de referencia a 1 bar)
- Presión parcial del vapor: 0.020 bar, por lo que [[a]] vale 0.020 en el modelo de gas ideal con referencia de 1 bar
- Presión de vapor de saturación a 298 K: 0.03169 bar, por lo que la actividad de saturación vale 0.03169

## Definición del sistema

El sistema es vapor de agua a presión parcial de 0.020 bar en contacto con agua líquida. La magnitud central es [[mu]] del vapor en esas condiciones, que se compara con [[mu]] del agua líquida a la misma temperatura para determinar la dirección del proceso espontáneo. La condición de equilibrio es la igualdad de [[mu]] en las dos fases.

Formalmente, [[mu]] es la derivada parcial de la energía libre de Gibbs [[G]] respecto a la cantidad de componente. En este ejemplo no calculamos [[G]] total, pero usamos esa idea: la fase con mayor [[mu]] puede reducir [[G]] transfiriendo materia hacia la fase de menor [[mu]].

## Modelo físico

Se aplica el modelo de gas ideal para el vapor y de líquido puro para el agua líquida (actividad del líquido puro igual a 1). El potencial químico del vapor depende logarítmicamente de su actividad, mientras que el del líquido puro es igual a [[mu_std]] del líquido. El criterio de espontaneidad es la diferencia de [[mu]] entre las dos fases.

## Justificación del modelo

El modelo de gas ideal es válido para el vapor de agua a presiones por debajo de 0.1 bar, donde las interacciones intermoleculares son despreciables. La aproximación de líquido puro con actividad unitaria es válida porque no hay solutos disueltos. Ambas condiciones se cumplen en el enunciado.

## Resolución simbólica

Para el vapor a presión parcial p con referencia a 1 bar, [[a]] es igual a p en bares. Entonces [[mu]] del vapor es [[mu_std]] del vapor más R·[[T]]·ln([[a]]). En el equilibrio, [[mu]] del vapor igual al de saturación es igual a [[mu]] del líquido, que es [[mu_std]] del líquido. La condensación es espontánea si [[mu]] del vapor a la presión dada es mayor que [[mu]] del vapor de saturación, es decir, si la presión parcial es mayor que la presión de saturación.

La condición formal de equilibrio de fases usada para comparar vapor y líquido es:

{{f:equilibrio_fases}}

En este caso, [[mu_alfa]] puede leerse como el potencial del componente en la fase vapor y [[mu_beta]] como el potencial del mismo componente en la fase líquida. La comparación decide si la transferencia neta aumenta la cantidad de vapor o la reduce.

## Sustitución numérica

El producto de [[R]] por [[T]] vale 8.314 por 298, es decir, 2477.6 J/mol.

Término logarítmico para el vapor a 0.020 bar: R·[[T]]·ln(0.020) = 2477.6 por (menos 3.912) = menos 9693 J/mol, es decir, aproximadamente menos 9.7 kJ/mol.

El potencial químico del vapor resulta de sumar menos 228 600 J/mol y el término logarítmico de menos 9693 J/mol. El valor final es aproximadamente menos 238.3 kJ/mol.

Para el vapor de saturación a 0.03169 bar: R·[[T]]·ln(0.03169) = 2477.6 por (menos 3.452) = menos 8554 J/mol.

El potencial químico del vapor saturado resulta de sumar menos 228 600 J/mol y el término logarítmico de menos 8554 J/mol. El valor final es aproximadamente menos 237.2 kJ/mol.

[[mu]] del vapor a 0.020 bar es menos 238.3 kJ/mol, menor que el valor de saturación de menos 237.2 kJ/mol. Por tanto, el vapor no condensa: el proceso espontáneo es la evaporación del líquido para aumentar la presión parcial hasta el equilibrio.

## Validación dimensional

R en J/(mol·K) por [[T]] en K por logaritmo adimensional da J/mol. Sumado a [[mu_std]] en J/mol, el resultado es J/mol. Coherente.

## Interpretación física

El vapor a 0.020 bar está por debajo de la presión de saturación (0.0317 bar), por lo que su [[mu]] es más negativo que el del vapor en equilibrio con el líquido. Esto implica que el líquido puede reducir la energía libre total [[G]] si transfiere moléculas a la fase vapor hasta elevar la presión parcial. La diferencia de [[mu]] es de aproximadamente 1.1 kJ/mol en favor de la evaporación: el líquido evaporará espontáneamente hasta que la presión parcial alcance el valor de saturación y se restablezca el equilibrio. Esta diferencia de [[mu]] es la fuerza impulsora de la evaporación en condiciones de baja humedad relativa.

---

# Ejemplo de aplicación real

## Contexto

En la industria farmacéutica, la liofilización (secado por congelación) elimina el agua de fármacos biológicos manteniendo su actividad. El proceso consiste en congelar el producto y luego reducir la presión hasta que [[mu]] del hielo es mayor que [[mu]] del vapor de agua en la cámara, forzando la sublimación directa del sólido al gas sin pasar por la fase líquida. La variable dominante es [[mu]] del agua en cada fase en las condiciones de operación.

## Estimación física

A la temperatura de operación típica de menos 40 °C (233 K), la presión de vapor del hielo es aproximadamente 0.013 mbar. Para que ocurra sublimación, la presión parcial del vapor en la cámara debe ser inferior a 0.013 mbar, de modo que [[mu]] del vapor en la cámara sea menor que [[mu]] del hielo, creando una diferencia de [[mu]] que impulsa la transferencia de masa. La diferencia de [[mu]] entre el hielo y el vapor a 0.010 mbar a 233 K es de aproximadamente R·233·ln(0.013/0.010), que es del orden de 0.5 kJ/mol. Esta diferencia pequeña pero consistente mantiene el proceso durante las horas o días que dura la liofilización.

## Interpretación

El control del proceso de liofilización consiste en mantener [[mu]] del vapor en la cámara por debajo de [[mu]] del hielo en el producto, lo que se consigue manteniendo la presión de la cámara por debajo de la presión de vapor del hielo a la temperatura del producto. Si la presión de la cámara supera ese valor, la diferencia de [[mu]] se invierte y el proceso se detiene o incluso ocurre condensación indeseable. La comprensión cuantitativa de [[mu]] permite optimizar la presión y temperatura de la cámara para maximizar la velocidad de sublimación sin fundir el producto.
