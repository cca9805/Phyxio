const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una regleta doméstica con [[I_max]] = 10 A está conectada a una toma de [[V]] = 230 V. En este momento tiene conectados simultáneamente los siguientes equipos: un calefactor de sobremesa de [[P]] = 1 500 W, un ordenador portátil de [[P]] = 85 W, una lámpara de escritorio LED de [[P]] = 12 W y un cargador de teléfono de [[P]] = 18 W.\r
\r
Se pide: (a) calcular [[I_tot]] de la regleta; (b) calcular [[P_tot]] y [[P_max]] de la regleta; (c) calcular [[margen_uso]] y determinar si hay sobrecarga; (d) estimar [[P_perdida]] si [[R_contacto]] = 0,15 Ω.\r
\r
## Datos\r
\r
- [[V]] = 230 V (tensión de suministro nominal)\r
- [[I_max]] = 10 A (regleta con calibre de 10 A)\r
- [[P]] calefactor = 1 500 W\r
- [[P]] portátil = 85 W\r
- [[P]] lámpara = 12 W\r
- [[P]] cargador = 18 W\r
- [[P_tot]] = 1 500 + 85 + 12 + 18 = 1 615 W (dato calculado de entrada)\r
- [[R_contacto]] = 0,15 Ω (estimación para regleta de uso habitual)\r
\r
## Definición del sistema\r
\r
Sistema: regleta doméstica de [[I_max]] = 10 A con cuatro equipos conectados simultáneamente. Variables de estado: [[I_tot]] en los contactos de la regleta y [[P_perdida]] en la interfaz de contacto. Se modela la corriente total como [[P_tot]] / [[V]] y el riesgo térmico como [[I_tot]]² · [[R_contacto]].\r
\r
## Modelo físico\r
\r
Se aplica el modelo de suma de cargas resistivas independientes para calcular [[P_tot]] e [[I]] individual de cada equipo. Se usa el modelo de Joule localizado en [[R_contacto]] para estimar [[P_perdida]]. Se compara [[I_tot]] con [[I_max]] mediante el ratio [[margen_uso]].\r
\r
## Justificación del modelo\r
\r
El modelo resistivo es válido para estas cargas: el calefactor es puramente resistivo, el portátil y los cargadores tienen fuente conmutada pero a efectos de potencia promedio la aproximación resistiva es razonable para el cálculo de [[I]] de cada equipo. No se modelan transitorios de arranque porque el calefactor no tiene motor.\r
\r
## Resolución simbólica\r
\r
Corriente individual del calefactor a partir de [[P]] y [[V]]:\r
\r
{{f:corriente_individual}}\r
\r
Corriente total de la regleta a partir de [[P_tot]] y [[V]]:\r
\r
{{f:corriente_total}}\r
\r
Potencia máxima nominal de la regleta:\r
\r
{{f:potencia_max}}\r
\r
Ratio de uso de la regleta:\r
\r
{{f:ratio_uso}}\r
\r
Potencia disipada en los contactos por efecto Joule:\r
\r
{{f:perdida_contacto}}\r
\r
## Sustitución numérica\r
\r
La [[I]] del calefactor individual resulta de dividir 1 500 W entre 230 V, dando 6,52 A.\r
\r
La [[P_tot]] es la suma de las cuatro potencias: 1 500 W + 85 W + 12 W + 18 W, dando 1 615 W.\r
\r
La [[I_tot]] resulta de dividir 1 615 W entre 230 V, dando 7,02 A.\r
\r
La [[P_max]] de la regleta de [[I_max]] = 10 A a [[V]] = 230 V es de 2 300 W.\r
\r
El [[margen_uso]] resulta de dividir 7,02 A entre 10 A, dando 0,70. Este valor es inferior a 1: no hay sobrecarga. Sin embargo, el margen es del 30%, lo que significa que añadir cualquier equipo adicional de más de 690 W superaría el límite de [[I_max]].\r
\r
La [[P_perdida]] resulta de elevar al cuadrado 7,02 A y multiplicar por [[R_contacto]] = 0,15 Ω, dando 7,4 W disipados en el contacto.\r
\r
## Validación dimensional\r
\r
Las dimensiones son coherentes: [[I_tot]] en amperios, [[P_max]] en vatios, [[margen_uso]] adimensional y [[P_perdida]] en vatios. El análisis dimensional confirma que todas las fórmulas son homogéneas.\r
\r
## Interpretación física\r
\r
El [[margen_uso]] de 0,70 indica que la regleta opera al 70% de su capacidad nominal. Está dentro del límite pero en uso continuo sería prudente no añadir más carga. La [[P_perdida]] de 7,4 W en el contacto es significativa: si [[R_contacto]] aumenta por degradación a 0,5 Ω, [[P_perdida]] alcanzaría 24,6 W, suficiente para iniciar degradación del plástico de la regleta. El mayor riesgo no es la sobrecarga actual sino la degradación progresiva del contacto por el uso continuado.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una familia usa una regleta de baja calidad (con [[I_max]] nominal desconocido) en el salón con la televisión de [[P]] = 120 W, un decodificador de [[P]] = 25 W, una consola de [[P]] = 150 W, un sistema de sonido de [[P]] = 80 W y una lámpara de [[P]] = 60 W. Al cabo de meses, el enchufe de la regleta está caliente al tacto.\r
\r
## Estimación física\r
\r
La [[P_tot]] total es 120 + 25 + 150 + 80 + 60, dando 435 W. Con [[V]] = 230 V, la [[I_tot]] resultante es 1,9 A. Si [[I_max]] = 10 A, el [[margen_uso]] es solo 0,19: la carga es muy baja. La causa del calor no es sobrecarga sino una [[R_contacto]] elevada por ser una regleta de baja calidad. Con [[I_tot]] = 1,9 A y calor perceptible, [[R_contacto]] puede estimarse en varios ohmios, lo que implica una [[P_perdida]] de varios vatios en un contacto de pequeño tamaño.\r
\r
## Interpretación\r
\r
El riesgo térmico en este caso no proviene de la sobrecarga ([[margen_uso]] muy bajo) sino de la mala calidad del contacto metálico ([[R_contacto]] elevada). La solución es sustituir la regleta por una de calidad certificada con [[R_contacto]] garantizada según norma, no redistribuir la carga. Este caso ilustra que el análisis de seguridad de una toma requiere evaluar tanto [[margen_uso]] como el estado del contacto: ambas vías pueden generar riesgo de forma independiente.\r
`;export{a as default};
