const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una varilla no uniforme de longitud [[L]] = 2.0 m está apoyada sobre una mesa horizontal. La coordenada a lo largo de la varilla se denota por [[x]] y se mide desde el extremo izquierdo. La densidad lineal no es constante, sino que aumenta suavemente hacia la derecha. El problema pide calcular la coordenada [[xcm]] del centro de masas y justificar físicamente por qué el resultado no coincide con la mitad geométrica.\r
\r
Se solicita además verificar que el resultado sea coherente con la masa total [[M]] y con la definición de centro de masas en cuerpos extendidos, donde cada elemento [[dm]] tiene peso diferente en el promedio según su posición [[r]].\r
\r
## Datos\r
\r
- [[L]] = 2.0 m.\r
- Ley de densidad lineal: [[lambda]]([[x]]) = 2 + [[x]] en kg/m, con [[x]] en m.\r
- Dominio geométrico: 0 <= [[x]] <= [[L]].\r
- Sistema unidimensional, por lo que se usa la coordenada [[xcm]] y no todo el vector [[R_cm]].\r
- Se asume cuerpo continuo e integrable, sin huecos ni saltos de masa.\r
\r
## Definición del sistema\r
\r
El sistema físico es una distribución continua de masa sobre una línea. No modelamos partículas puntuales, sino una familia de elementos diferenciales [[dm]] ubicados en cada posición [[x]]. La geometría importa porque el valor de la coordenada multiplica al diferencial de masa en el momento de primer orden [[I_x]].\r
\r
Se fija el origen en el extremo izquierdo para que la lectura del resultado sea directa. Si [[xcm]] queda mayor que [[L]]/2, significa desplazamiento hacia la derecha, lo cual debería ocurrir porque [[lambda]] crece con [[x]].\r
\r
## Modelo físico\r
\r
El modelo usa la formulación de cuerpo extendido continuo:\r
\r
- Masa diferencial: [[dm]] = [[lambda]]([[x]]) d[[x]].\r
- Masa total [[M]] como suma continua de diferenciales.\r
- Centro de masas como promedio ponderado por masa.\r
\r
Las relaciones núcleo para la resolución son:\r
\r
{{f:masa_longitud}}\r
\r
{{f:cm_x}}\r
\r
Como chequeo conceptual, también se mantiene la forma vectorial general:\r
\r
{{f:cm_vectorial}}\r
\r
## Justificación del modelo\r
\r
Se elige modelo lineal porque la varilla es delgada y su sección transversal no altera la distribución principal de masa. Por eso, usar [[lambda]] y [[L]] es más adecuado que usar [[rho]] y [[V]] o [[sigma]] y [[A]].\r
\r
En otras palabras, para este enunciado no corresponde emplear las formas:\r
\r
{{f:masa_area}}\r
\r
{{f:masa_volumen}}\r
\r
Estas dos expresiones siguen siendo parte del núcleo del leaf porque definen cómo cambiaría el problema si la geometría fuera laminar o volumétrica. Sin embargo, en este caso concreto su papel es de comparación de modelo, no de cálculo directo.\r
\r
## Resolución simbólica

La forma vectorial general fija la idea de partida: centro de masas como primer momento dividido por masa total.

{{f:cm_vectorial}}

Primero, se escribe la masa total como integral sobre la longitud:
\r
[[M]] = integral de [[dm]] = integral de [[lambda]]([[x]]) d[[x]] en 0..[[L]].\r
\r
Sustituyendo [[lambda]]([[x]]) = 2 + [[x]]:\r
\r
[[M]] = integral de (2 + [[x]]) d[[x]] en 0..2.\r
\r
Luego, el primer momento de masa respecto del origen:\r
\r
[[I_x]] = integral de [[x]] d[[dm]] = integral de [[x]] [[lambda]]([[x]]) d[[x]] en 0..[[L]].\r
\r
Con la misma ley:\r
\r
[[I_x]] = integral de [[x]](2 + [[x]]) d[[x]] en 0..2.\r
\r
Finalmente,\r
\r
[[xcm]] = [[I_x]]/[[M]].\r
\r
La estructura es la esencia del concepto: no basta conocer masa total; hay que conocer cómo está distribuida en el espacio mediante [[dm]] y la posición [[r]] o [[x]].\r
\r
## Sustitución numérica\r
\r
Evaluamos [[M]]:\r
\r
[[M]] = [2[[x]] + [[x]]^2/2] de 0 a 2 = 4 + 2 = 6 kg.\r
\r
Evaluamos [[I_x]]:\r
\r
[[I_x]] = integral de (2[[x]] + [[x]]^2) d[[x]] en 0..2\r
\r
[[I_x]] = [[[x]]^2 + [[x]]^3/3] de 0 a 2 = 4 + 8/3 = 20/3 kg m.\r
\r
Entonces:\r
\r
El cociente entre el primer momento y la masa total da un valor final de 10/9 m, aproximadamente 1.11 m para [[xcm]].
\r
Comparación con mitad geométrica: [[L]]/2 = 1.0 m. El centro de masas queda desplazado 0.11 m hacia la zona de mayor [[lambda]].\r
\r
## Validación dimensional\r
\r
- [[M]] tiene unidades de kg porque [[lambda]] está en kg/m y d[[x]] en m.\r
- [[I_x]] tiene unidades de kg m porque [[x]] multiplica a [[dm]].\r
- [[xcm]] = [[I_x]]/[[M]] queda en m.\r
\r
Chequeo de rango: al estar toda la masa dentro de 0 y [[L]], debe cumplirse 0 <= [[xcm]] <= [[L]]. Se obtiene 1.11 m, valor admisible.\r
\r
Chequeo físico de sesgo: como [[lambda]] aumenta con [[x]], el resultado debe ser mayor que [[L]]/2. También se cumple.\r
\r
## Interpretación física\r
\r
El número 1.11 m no es un dato aislado: resume la historia causal del sistema. La parte derecha aporta mayor [[dm]] por cada intervalo de posición y por eso "tira" del promedio ponderado.\r
\r
Si se hiciera la varilla uniforme ([[lambda]] constante), [[xcm]] volvería a [[L]]/2. Si la ley creciera más rápido con [[x]], el centro avanzaría más hacia la derecha. Este tipo de lectura conecta cálculo con diseño: permite decidir dónde conviene sostener una pieza real para equilibrarla sin giro.

Físicamente, el resultado indica que la mitad geométrica no basta para describir la varilla. La coordenada calculada depende de cómo se reparte la masa, no solo de la longitud total. Esto implica que cualquier rediseño que aumente [[lambda]] cerca del extremo derecho moverá el punto de apoyo hacia ese lado, mientras que retirar masa allí lo desplazará hacia la izquierda. La lectura es coherente con el modelo porque [[xcm]] permanece dentro del intervalo y se orienta hacia la región más densa.
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En fabricación de drones pequeños, la placa electrónica, batería y carcasa no siempre quedan distribuidas de forma simétrica. Si el centro de masas global no coincide con la línea de empuje, aparecen pares no deseados y el controlador debe compensar continuamente.\r
\r
El equipo de diseño modela el dron como superposición de partes: una batería (modelo volumétrico, [[rho]] y [[V]]), una placa delgada (modelo superficial, [[sigma]] y [[A]]) y brazos estrechos (modelo lineal, [[lambda]] y [[L]]). El objetivo es ubicar el [[R_cm]] total cerca del eje de referencia del chasis.\r
\r
## Estimación física\r
\r
Se hace una estimación por orden de magnitud para la coordenada principal [[xcm]]:\r
\r
1. Se calcula [[M]] de cada subsistema con su relación apropiada: [[rho]][[V]], [[sigma]][[A]] o [[lambda]][[L]].\r
2. Se mide la posición media de cada bloque en el eje [[x]].\r
3. Se suma el primer momento total [[I_x]] y luego se divide por la masa total [[M]].\r
\r
Resultado típico: un desplazamiento de 1 a 2 cm respecto del eje nominal ya puede aumentar consumo energético porque el control corrige con más esfuerzo. No parece grande en términos geométricos, pero dinámicamente es relevante en un sistema ligero.\r
\r
## Interpretación\r
\r
La lectura física final es que el centro de masas en cuerpos extendidos no es una curiosidad geométrica, sino una variable de desempeño. Si el diseño ignora la distribución real de [[dm]], aparecerán vibraciones, sobreconsumo y menor estabilidad.\r
\r
La ventaja del enfoque de este leaf es que permite cambiar de modelo sin perder coherencia: lineal, superficial o volumétrico. La pregunta siempre es la misma, dónde queda [[R_cm]], pero la construcción de [[M]] y del momento depende de la geometría material. Esa flexibilidad es exactamente lo que se necesita en problemas reales de ingeniería.\r
`;export{e as default};
