# Ejemplo tipo examen


## Enunciado

Una regleta doméstica con [[corriente_maxima_nominal]] = 10 A está conectada a una toma de [[tension_de_suministro]] = 230 V. En este momento tiene conectados simultáneamente los siguientes equipos: un calefactor de sobremesa de [[potencia_de_carga]] = 1 500 W, un ordenador portátil de [[potencia_de_carga]] = 85 W, una lámpara de escritorio LED de [[potencia_de_carga]] = 12 W y un cargador de teléfono de [[potencia_de_carga]] = 18 W.

Se pide: (a) calcular [[corriente_total_en_la_toma]] de la regleta; (b) calcular [[potencia_total_simultanea]] y [[potencia_maxima_nominal]] de la regleta; (c) calcular [[margen_uso]] y determinar si hay sobrecarga; (d) estimar [[potencia_disipada_en_el_contacto]] si [[resistencia_de_contacto]] = 0,15 Ω.

## Datos

- [[tension_de_suministro]] = 230 V (tensión de suministro nominal)
- [[corriente_maxima_nominal]] = 10 A (regleta con calibre de 10 A)
- [[potencia_de_carga]] calefactor = 1 500 W
- [[potencia_de_carga]] portátil = 85 W
- [[potencia_de_carga]] lámpara = 12 W
- [[potencia_de_carga]] cargador = 18 W
- [[potencia_total_simultanea]] = 1 500 + 85 + 12 + 18 = 1 615 W (dato calculado de entrada)
- [[resistencia_de_contacto]] = 0,15 Ω (estimación para regleta de uso habitual)

## Definición del sistema

Sistema: regleta doméstica de [[corriente_maxima_nominal]] = 10 A con cuatro equipos conectados simultáneamente. Variables de estado: [[corriente_total_en_la_toma]] en los contactos de la regleta y [[potencia_disipada_en_el_contacto]] en la interfaz de contacto. Se modela la corriente total como [[potencia_total_simultanea]] / [[tension_de_suministro]] y el riesgo térmico como [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]].

## Modelo físico

Se aplica el modelo de suma de cargas resistivas independientes para calcular [[potencia_total_simultanea]] e [[corriente_individual_de_carga]] individual de cada equipo. Se usa el modelo de Joule localizado en [[resistencia_de_contacto]] para estimar [[potencia_disipada_en_el_contacto]]. Se compara [[corriente_total_en_la_toma]] con [[corriente_maxima_nominal]] mediante el ratio [[margen_uso]].

## Justificación del modelo

El modelo resistivo es válido para estas cargas: el calefactor es puramente resistivo, el portátil y los cargadores tienen fuente conmutada pero a efectos de potencia promedio la aproximación resistiva es razonable para el cálculo de [[corriente_individual_de_carga]] de cada equipo. No se modelan transitorios de arranque porque el calefactor no tiene motor.

## Resolución simbólica

Corriente individual del calefactor a partir de [[potencia_de_carga]] y [[tension_de_suministro]]:

{{f:corriente_individual}}

Corriente total de la regleta a partir de [[potencia_total_simultanea]] y [[tension_de_suministro]]:

{{f:corriente_total}}

Potencia máxima nominal de la regleta:

{{f:potencia_max}}

Ratio de uso de la regleta:

{{f:ratio_uso}}

Potencia disipada en los contactos por efecto Joule:

{{f:perdida_contacto}}

## Sustitución numérica

La [[corriente_individual_de_carga]] del calefactor individual resulta de dividir 1 500 W entre 230 V, dando 6,52 A.

La [[potencia_total_simultanea]] es la suma de las cuatro potencias: 1 500 W + 85 W + 12 W + 18 W, dando 1 615 W.

La [[corriente_total_en_la_toma]] resulta de dividir 1 615 W entre 230 V, dando 7,02 A.

La [[potencia_maxima_nominal]] de la regleta de [[corriente_maxima_nominal]] = 10 A a [[tension_de_suministro]] = 230 V es de 2 300 W.

El [[margen_uso]] resulta de dividir 7,02 A entre 10 A, dando 0,70. Este valor es inferior a 1: no hay sobrecarga. Sin embargo, el margen es del 30%, lo que significa que añadir cualquier equipo adicional de más de 690 W superaría el límite de [[corriente_maxima_nominal]].

La [[potencia_disipada_en_el_contacto]] resulta de elevar al cuadrado 7,02 A y multiplicar por [[resistencia_de_contacto]] = 0,15 Ω, dando 7,4 W disipados en el contacto.

## Validación dimensional

Las dimensiones son coherentes: [[corriente_total_en_la_toma]] en amperios, [[potencia_maxima_nominal]] en vatios, [[margen_uso]] adimensional y [[potencia_disipada_en_el_contacto]] en vatios. El análisis dimensional confirma que todas las fórmulas son homogéneas.

## Interpretación física

El [[margen_uso]] de 0,70 indica que la regleta opera al 70% de su capacidad nominal. Está dentro del límite pero en uso continuo sería prudente no añadir más carga. La [[potencia_disipada_en_el_contacto]] de 7,4 W en el contacto es significativa: si [[resistencia_de_contacto]] aumenta por degradación a 0,5 Ω, [[potencia_disipada_en_el_contacto]] alcanzaría 24,6 W, suficiente para iniciar degradación del plástico de la regleta. El mayor riesgo no es la sobrecarga actual sino la degradación progresiva del contacto por el uso continuado.

---

# Ejemplo de aplicación real


## Contexto

Una familia usa una regleta de baja calidad (con [[corriente_maxima_nominal]] nominal desconocido) en el salón con la televisión de [[potencia_de_carga]] = 120 W, un decodificador de [[potencia_de_carga]] = 25 W, una consola de [[potencia_de_carga]] = 150 W, un sistema de sonido de [[potencia_de_carga]] = 80 W y una lámpara de [[potencia_de_carga]] = 60 W. Al cabo de meses, el enchufe de la regleta está caliente al tacto.

## Estimación física

La [[potencia_total_simultanea]] total es 120 + 25 + 150 + 80 + 60, dando 435 W. Con [[tension_de_suministro]] = 230 V, la [[corriente_total_en_la_toma]] resultante es 1,9 A. Si [[corriente_maxima_nominal]] = 10 A, el [[margen_uso]] es solo 0,19: la carga es muy baja. La causa del calor no es sobrecarga sino una [[resistencia_de_contacto]] elevada por ser una regleta de baja calidad. Con [[corriente_total_en_la_toma]] = 1,9 A y calor perceptible, [[resistencia_de_contacto]] puede estimarse en varios ohmios, lo que implica una [[potencia_disipada_en_el_contacto]] de varios vatios en un contacto de pequeño tamaño.

## Interpretación

El riesgo térmico en este caso no proviene de la sobrecarga ([[margen_uso]] muy bajo) sino de la mala calidad del contacto metálico ([[resistencia_de_contacto]] elevada). La solución es sustituir la regleta por una de calidad certificada con [[resistencia_de_contacto]] garantizada según norma, no redistribuir la carga. Este caso ilustra que el análisis de seguridad de una toma requiere evaluar tanto [[margen_uso]] como el estado del contacto: ambas vías pueden generar riesgo de forma independiente.