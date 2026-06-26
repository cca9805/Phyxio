# Ejemplo tipo examen


## Enunciado

Un circuito monofásico de [[tension_de_suministro]] = 230 V tiene instalado un magnetotérmico de calibre [[corriente_nominal_del_magnetotermico]] = 16 A y un diferencial de sensibilidad [[umbral_diferencial_nominal]] = 30 mA. Se conectan simultáneamente equipos con [[potencia_de_carga]] total de 4 400 W. En otro circuito del mismo cuadro se miden [[corriente_de_fase]] = 9,62 A e [[corriente_de_neutro]] = 9,57 A.

Se pide: (a) calcular la [[corriente_de_carga]] del primer circuito y determinar si hay sobrecarga; (b) calcular el [[desequilibrio_diferencial]] del segundo circuito y determinar si el diferencial actúa; (c) calcular [[margen_termico]] y [[margen_dif]] en ambos casos.

## Datos

- [[tension_de_suministro]] = 230 V
- [[corriente_nominal_del_magnetotermico]] = 16 A (calibre magnetotérmico del circuito de sobrecarga)
- [[umbral_diferencial_nominal]] = 30 mA equivalente a 0,030 A (sensibilidad diferencial)
- [[potencia_de_carga]] = 4 400 W (potencia del circuito de sobrecarga)
- [[corriente_de_fase]] = 9,62 A (corriente de fase del circuito de fuga)
- [[corriente_de_neutro]] = 9,57 A (corriente de neutro del circuito de fuga)

## Definición del sistema

Sistema: cuadro eléctrico residencial monofásico con magnetotérmico estándar y diferencial de alta sensibilidad. Variables de estado: [[corriente_de_carga]] en cada circuito y [[desequilibrio_diferencial]] entre fase y neutro.

## Modelo físico

Se aplica el modelo ideal de dos protecciones independientes. El magnetotérmico actúa cuando [[margen_termico]] supera la unidad. El diferencial actúa cuando [[margen_dif]] supera la unidad. Ambas condiciones son independientes entre sí.

## Justificación del modelo

El modelo simplificado es válido porque los calibres son estándar, las cargas son resistivas aproximadas y no se describen condiciones ambientales especiales. No se requiere el modelo con curvas de tiempo-corriente porque el objetivo es determinar si hay disparo, no predecir el tiempo exacto de actuación.

## Resolución simbólica

Corriente de carga a partir de [[potencia_de_carga]] y [[tension_de_suministro]]:

{{f:corriente_carga}}

Ratio térmico para evaluar sobrecarga magnetotérmica:

{{f:ratio_termico}}

Diferencia absoluta entre [[corriente_de_fase]] e [[corriente_de_neutro]] (fuga a tierra):

{{f:desequilibrio}}

Ratio diferencial para evaluar disparo del diferencial:

{{f:ratio_diferencial}}

Potencia límite del magnetotérmico:

{{f:potencia_limite}}

## Sustitución numérica

Aplicando la fórmula de corriente de carga con [[potencia_de_carga]] = 4 400 W y [[tension_de_suministro]] = 230 V se obtiene [[corriente_de_carga]] = 19,1 A.

El [[margen_termico]] resulta de dividir 19,1 A entre 16 A, dando un valor de 1,19. Este valor supera la unidad, lo que indica sobrecarga del 19 %. El magnetotérmico actuará en minutos si la carga se mantiene.

El [[desequilibrio_diferencial]] del segundo circuito es la diferencia absoluta entre 9,62 A y 9,57 A, resultando 0,05 A equivalente a 50 mA.

El [[margen_dif]] resulta de dividir 50 mA entre 30 mA, dando 1,67. Este valor supera la unidad, por lo que el diferencial actúa.

La [[potencia_limite_magnetotermica]] del magnetotérmico de 16 A a 230 V es de 3 680 W.

## Validación dimensional

La [[corriente_de_carga]] se obtiene en vatios dividido por voltios, que equivale a amperios. El [[desequilibrio_diferencial]] resulta de restar dos corrientes en amperios, quedando en amperios. El [[margen_termico]] y el [[margen_dif]] son cocientes de amperios entre amperios, resultando adimensionales. La [[potencia_limite_magnetotermica]] es el producto de voltios por amperios, que equivale a vatios. Todas las dimensiones son coherentes.

## Interpretación física

El [[margen_termico]] de 1,19 indica que la [[corriente_de_carga]] supera el calibre [[corriente_nominal_del_magnetotermico]]. El magnetotérmico del primer circuito actuará si la carga se mantiene. El diferencial de ese circuito no actúa porque [[corriente_de_fase]] e [[corriente_de_neutro]] son iguales: no hay fuga a tierra.

En el segundo circuito, la [[corriente_de_carga]] total de aproximadamente 9,6 A está muy por debajo de cualquier calibre magnetotérmico estándar. Sin embargo, el [[desequilibrio_diferencial]] de 50 mA supera [[umbral_diferencial_nominal]] de 30 mA. Existe una fuga a tierra. El diferencial actúa. El magnetotérmico no actúa porque la [[corriente_de_carga]] total es pequeña.

---

# Ejemplo de aplicación real


## Contexto

Un usuario reporta que el diferencial de su vivienda salta de forma intermitente, principalmente en invierno, cuando usa el calefactor del baño. El magnetotérmico del circuito de baño no ha saltado nunca. El calefactor tiene [[potencia_de_carga]] = 1 500 W.

## Estimación física

Con [[tension_de_suministro]] = 230 V y [[potencia_de_carga]] = 1 500 W, la [[corriente_de_carga]] esperada es de aproximadamente 6,5 A. Usando un magnetotérmico de [[corriente_nominal_del_magnetotermico]] = 16 A, el [[margen_termico]] es de 0,41: bien por debajo de la unidad. No hay sobrecarga magnetotérmica. El problema es de tipo diferencial. El diferencial salta porque el [[desequilibrio_diferencial]] supera [[umbral_diferencial_nominal]] de 30 mA cuando el calefactor está encendido. Para que el [[margen_dif]] supere la unidad con [[umbral_diferencial_nominal]] = 30 mA, el [[desequilibrio_diferencial]] debe alcanzar al menos 30 mA, lo que representa el 0,46 % de la [[corriente_de_carga]] total del circuito. Este valor puede generarse por degradación del aislamiento en el calefactor, especialmente en condiciones de humedad o temperatura baja al arranque.

## Interpretación

El patrón estacional apunta a degradación de aislamiento dependiente de temperatura o humedad. La acción correcta es revisar el calefactor y su toma de corriente, no modificar [[umbral_diferencial_nominal]]. Subir [[umbral_diferencial_nominal]] a 300 mA eliminaría la protección personal ante una fuga que puede volverse peligrosa. El diferencial de 30 mA está dimensionado para detectar fugas por el cuerpo humano antes de que sean letales; ese umbral no debe modificarse para resolver lo que es un problema de aislamiento del aparato. La solución permanente es corregir la fuga en su origen.