# Ejemplo tipo examen


## Enunciado

Una barra de aluminio de 0.5 m de longitud y seccion circular esta libre en ambos extremos. La densidad del aluminio es 2700 kg/m³ y su modulo de Young es 70 GPa. Se pide calcular la frecuencia fundamental longitudinal, la frecuencia del tercer armonico longitudinal, y la frecuencia fundamental torsional sabiendo que el modulo de cizalla es 26 GPa.

Datos del problema:

- Longitud de la barra: 0.5 m
- Densidad: 2700 kg/m³
- Modulo de Young: 70 GPa
- Modulo de cizalla: 26 GPa
- Condiciones de contorno: libre-libre

## Datos

- [[longitud_de_la_barra]]: 0.5 m
- [[rho]]: 2700 kg/m³
- [[modulo_de_young]]: 70 por diez a la novena Pa
- [[modulo_de_cizalla]]: 26 por diez a la novena Pa
- Condiciones de contorno: libre-libre

## Definición del sistema

Barra delgada homogenea, isotropa, de seccion circular, con ambos extremos libres de esfuerzo. Se supone regimen elastico lineal y longitud de onda mucho mayor que la dimension transversal (hipotesis de barra delgada valida para los primeros modos).

## Modelo físico

Se aplican las formulas de resonancia longitudinal libre-libre usando [[velocidad_de_onda_longitudinal_en_barra]] y las de resonancia torsional libre-libre usando [[velocidad_de_onda_de_corte]]. Las magnitudes clave son [[f_n]], [[n_modo]], [[velocidad_de_onda_longitudinal_en_barra]], [[velocidad_de_onda_de_corte]] y [[longitud_de_la_barra]].

## Justificación del modelo

Las formulas de barra delgada son validas porque la longitud (0.5 m) es mucho mayor que el diametro tipico (centimetros). La aproximacion de onda no dispersiva es adecuada para los primeros modos. El modelo dejaria de ser preciso para modos de orden muy alto donde la longitud de onda se aproxime al diametro.

## Resolución simbólica

Primero se calcula la velocidad longitudinal:

{{f:velocidad_longitudinal_barra}}

Se sustituyen [[modulo_de_young]] y [[rho]] para obtener [[velocidad_de_onda_longitudinal_en_barra]].

Luego la frecuencia fundamental longitudinal (n = 1):

{{f:freq_longitudinal_libre_libre}}

Se sustituyen [[n_modo]] = 1, [[velocidad_de_onda_longitudinal_en_barra]] y [[longitud_de_la_barra]].

Para el tercer armonico, se usa la misma formula con n = 3.

Si la barra, en cambio, estuviera empotrada en uno de sus extremos (condición fijo-libre), la fórmula para sus frecuencias naturales longitudinales sería:

{{f:freq_longitudinal_fijo_libre}}

La velocidad de corte:

{{f:velocidad_corte_barra}}

Se sustituyen [[modulo_de_cizalla]] y [[rho]] para obtener [[velocidad_de_onda_de_corte]].

Frecuencia fundamental torsional (n = 1):

{{f:freq_torsional_libre_libre}}

## Sustitución numérica

Velocidad longitudinal: raiz cuadrada de 70 por diez a la novena dividido entre 2700. Eso es raiz de 25.93 por diez a la sexta, que da 5092 m/s. Por tanto [[velocidad_de_onda_longitudinal_en_barra]] ≈ 5092 m/s.

Frecuencia fundamental longitudinal: 1 por 5092 dividido entre 2 por 0.5, que es 5092 dividido entre 1, que da 5092 Hz. Por tanto [[f_n]] (modo 1) ≈ 5092 Hz.

Tercer armonico longitudinal: 3 por 5092 dividido entre 1, que da 15276 Hz. Por tanto [[f_n]] (modo 3) ≈ 15276 Hz.

Velocidad de corte: raiz cuadrada de 26 por diez a la novena dividido entre 2700. Eso es raiz de 9.63 por diez a la sexta, que da 3103 m/s. Por tanto [[velocidad_de_onda_de_corte]] ≈ 3103 m/s.

Frecuencia fundamental torsional: 1 por 3103 dividido entre 2 por 0.5, que es 3103 Hz. Por tanto [[f_n]] (torsional, modo 1) ≈ 3103 Hz.

## Validación dimensional

- [[velocidad_de_onda_longitudinal_en_barra]]: raiz de Pa / (kg/m³) = raiz de (kg/(m s²)) / (kg/m³) = raiz de m²/s² = m/s ✓
- [[f_n]]: velocidad dividida por longitud produce una frecuencia en hercios.

## Interpretación física

La fundamental longitudinal (5092 Hz) esta en el rango audible agudo. El tercer armonico (15276 Hz) sigue siendo audible para la mayoria de personas. La fundamental torsional (3103 Hz) es menor que la longitudinal, como se esperaba dado que G es menor que E.

El cociente entre [[velocidad_de_onda_longitudinal_en_barra]] y [[velocidad_de_onda_de_corte]] es 1.641. La verificacion con la relacion entre modulos da el mismo valor, de modo que las velocidades longitudinal y torsional son coherentes con el coeficiente de Poisson del aluminio.

Los primeros modos de esta barra cubren el rango de 3 kHz a 15 kHz. Si se golpea la barra, el oido percibe un sonido agudo con multiples componentes armonicas.

# Ejemplo de aplicación real


## Contexto

Un tecnico de control de calidad utiliza el metodo de excitacion por impulso (norma ASTM E1876) para medir el modulo de Young de una probeta ceramica. La probeta es una barra rectangular de 100 mm de longitud y masa 15 g. Se golpea en el centro y se mide la frecuencia de resonancia longitudinal fundamental con un microfono. El resultado es 42500 Hz.

## Estimación física

La barra esta en condicion libre-libre (apoyada en los puntos nodales del primer modo flexional para no amortiguarlo). Para el modo longitudinal, la fundamental es:

{{f:freq_longitudinal_libre_libre}}

Despejando [[velocidad_de_onda_longitudinal_en_barra]] desde la referencia anterior, la velocidad longitudinal queda en 8500 m/s para la longitud y frecuencia medidas.

La densidad se obtiene de la masa y las dimensiones. Si la seccion es de 4 mm por 3 mm: volumen = 0.1 por 0.004 por 0.003 = 1.2 por diez a la menos seis m³. Densidad = 0.015 / (1.2 por diez a la menos seis) = 12500 kg/m³. Pero esto parece alto para una ceramica comun. Recalculando: si la seccion es de 10 mm por 5 mm, volumen = 0.1 por 0.01 por 0.005 = 5 por diez a la menos seis m³. Densidad = 0.015 / (5 por diez a la menos seis) = 3000 kg/m³. Esto es tipico de una ceramica tecnica.

Usando la relacion de velocidad longitudinal de barra, el modulo de Young obtenido a partir de la densidad y de [[velocidad_de_onda_longitudinal_en_barra]] es aproximadamente 217 GPa.

## Interpretación

El valor de 217 GPa es tipico de una ceramica densa como alumina (Al2O3, E ≈ 350-400 GPa) o nitruro de silicio (Si3N4, E ≈ 300 GPa) o zirconia (ZrO2, E ≈ 210 GPa). El resultado sugiere zirconia o una ceramica de rigidez intermedia.

Este metodo es no destructivo, rapido (una medida dura segundos), y proporciona E con precision mejor del 1 % si las dimensiones y la masa se miden con cuidado. Es el estandar industrial para caracterizacion elastica de ceramicas, metales sinterizados y materiales fragiles donde un ensayo de traccion seria destructivo.

Si la frecuencia medida fuera menor de lo esperado, indicaria porosidad interna, microgrietas o composicion diferente. Si fuera mayor, indicaria un material mas denso o rigido de lo esperado, o un error en las dimensiones.