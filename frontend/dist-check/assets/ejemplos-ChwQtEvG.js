const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un circuito monofásico de [[V]] = 230 V tiene instalado un magnetotérmico de calibre [[I_n]] = 16 A y un diferencial de sensibilidad [[I_dn]] = 30 mA. Se conectan simultáneamente equipos con [[P]] total de 4 400 W. En otro circuito del mismo cuadro se miden [[I_fase]] = 9,62 A e [[I_neutro]] = 9,57 A.\r
\r
Se pide: (a) calcular la [[I]] del primer circuito y determinar si hay sobrecarga; (b) calcular el [[I_delta]] del segundo circuito y determinar si el diferencial actúa; (c) calcular [[margen_termico]] y [[margen_dif]] en ambos casos.\r
\r
## Datos\r
\r
- [[V]] = 230 V\r
- [[I_n]] = 16 A (calibre magnetotérmico del circuito de sobrecarga)\r
- [[I_dn]] = 30 mA equivalente a 0,030 A (sensibilidad diferencial)\r
- [[P]] = 4 400 W (potencia del circuito de sobrecarga)\r
- [[I_fase]] = 9,62 A (corriente de fase del circuito de fuga)\r
- [[I_neutro]] = 9,57 A (corriente de neutro del circuito de fuga)\r
\r
## Definición del sistema\r
\r
Sistema: cuadro eléctrico residencial monofásico con magnetotérmico estándar y diferencial de alta sensibilidad. Variables de estado: [[I]] en cada circuito y [[I_delta]] entre fase y neutro.\r
\r
## Modelo físico\r
\r
Se aplica el modelo ideal de dos protecciones independientes. El magnetotérmico actúa cuando [[margen_termico]] supera la unidad. El diferencial actúa cuando [[margen_dif]] supera la unidad. Ambas condiciones son independientes entre sí.\r
\r
## Justificación del modelo\r
\r
El modelo simplificado es válido porque los calibres son estándar, las cargas son resistivas aproximadas y no se describen condiciones ambientales especiales. No se requiere el modelo con curvas de tiempo-corriente porque el objetivo es determinar si hay disparo, no predecir el tiempo exacto de actuación.\r
\r
## Resolución simbólica\r
\r
Corriente de carga a partir de [[P]] y [[V]]:\r
\r
{{f:corriente_carga}}\r
\r
Ratio térmico para evaluar sobrecarga magnetotérmica:\r
\r
{{f:ratio_termico}}\r
\r
Diferencia absoluta entre [[I_fase]] e [[I_neutro]] (fuga a tierra):\r
\r
{{f:desequilibrio}}\r
\r
Ratio diferencial para evaluar disparo del diferencial:\r
\r
{{f:ratio_diferencial}}\r
\r
Potencia límite del magnetotérmico:\r
\r
{{f:potencia_limite}}\r
\r
## Sustitución numérica\r
\r
Aplicando la fórmula de corriente de carga con [[P]] = 4 400 W y [[V]] = 230 V se obtiene [[I]] = 19,1 A.\r
\r
El [[margen_termico]] resulta de dividir 19,1 A entre 16 A, dando un valor de 1,19. Este valor supera la unidad, lo que indica sobrecarga del 19 %. El magnetotérmico actuará en minutos si la carga se mantiene.\r
\r
El [[I_delta]] del segundo circuito es la diferencia absoluta entre 9,62 A y 9,57 A, resultando 0,05 A equivalente a 50 mA.\r
\r
El [[margen_dif]] resulta de dividir 50 mA entre 30 mA, dando 1,67. Este valor supera la unidad, por lo que el diferencial actúa.\r
\r
La [[P_lim]] del magnetotérmico de 16 A a 230 V es de 3 680 W.\r
\r
## Validación dimensional\r
\r
La [[I]] se obtiene en vatios dividido por voltios, que equivale a amperios. El [[I_delta]] resulta de restar dos corrientes en amperios, quedando en amperios. El [[margen_termico]] y el [[margen_dif]] son cocientes de amperios entre amperios, resultando adimensionales. La [[P_lim]] es el producto de voltios por amperios, que equivale a vatios. Todas las dimensiones son coherentes.\r
\r
## Interpretación física\r
\r
El [[margen_termico]] de 1,19 indica que la [[I]] supera el calibre [[I_n]]. El magnetotérmico del primer circuito actuará si la carga se mantiene. El diferencial de ese circuito no actúa porque [[I_fase]] e [[I_neutro]] son iguales: no hay fuga a tierra.\r
\r
En el segundo circuito, la [[I]] total de aproximadamente 9,6 A está muy por debajo de cualquier calibre magnetotérmico estándar. Sin embargo, el [[I_delta]] de 50 mA supera [[I_dn]] de 30 mA. Existe una fuga a tierra. El diferencial actúa. El magnetotérmico no actúa porque la [[I]] total es pequeña.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un usuario reporta que el diferencial de su vivienda salta de forma intermitente, principalmente en invierno, cuando usa el calefactor del baño. El magnetotérmico del circuito de baño no ha saltado nunca. El calefactor tiene [[P]] = 1 500 W.\r
\r
## Estimación física\r
\r
Con [[V]] = 230 V y [[P]] = 1 500 W, la [[I]] esperada es de aproximadamente 6,5 A. Usando un magnetotérmico de [[I_n]] = 16 A, el [[margen_termico]] es de 0,41: bien por debajo de la unidad. No hay sobrecarga magnetotérmica. El problema es de tipo diferencial. El diferencial salta porque el [[I_delta]] supera [[I_dn]] de 30 mA cuando el calefactor está encendido. Para que el [[margen_dif]] supere la unidad con [[I_dn]] = 30 mA, el [[I_delta]] debe alcanzar al menos 30 mA, lo que representa el 0,46 % de la [[I]] total del circuito. Este valor puede generarse por degradación del aislamiento en el calefactor, especialmente en condiciones de humedad o temperatura baja al arranque.\r
\r
## Interpretación\r
\r
El patrón estacional apunta a degradación de aislamiento dependiente de temperatura o humedad. La acción correcta es revisar el calefactor y su toma de corriente, no modificar [[I_dn]]. Subir [[I_dn]] a 300 mA eliminaría la protección personal ante una fuga que puede volverse peligrosa. El diferencial de 30 mA está dimensionado para detectar fugas por el cuerpo humano antes de que sean letales; ese umbral no debe modificarse para resolver lo que es un problema de aislamiento del aparato. La solución permanente es corregir la fuga en su origen.\r
`;export{e as default};
