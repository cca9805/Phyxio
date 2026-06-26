# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un material magnético presenta una [[temperatura_critica]] de 300 K. En la fase ordenada se mide el [[parametro_de_orden]] para varias temperaturas cercanas al punto crítico. Se desea estimar el valor esperado de [[parametro_de_orden]] a 297 K, la tendencia de la [[susceptibilidad]] y el crecimiento de la [[longitud_correlacion]]. Usa un modelo crítico continuo con amplitudes y exponentes dados.

## Datos
- [[temperatura]]: 297 K
- [[temperatura_critica]]: 300 K
- [[amplitud_critica]]: 1,20 unidades del parámetro de orden
- [[exponente_critico_beta]]: 0,33
- [[amplitud_susceptibilidad]]: 0,80 unidades de respuesta
- [[exponente_critico_gamma]]: 1,24
- [[amplitud_correlacion]]: 0,30 nm
- [[exponente_critico_nu]]: 0,63

## Definición del sistema
El sistema es una muestra macroscópica que atraviesa una transición continua al variar [[temperatura]]. Se estudia por debajo de [[temperatura_critica]], donde existe fase ordenada y el [[parametro_de_orden]] es distinto de cero. La muestra se supone suficientemente homogénea y grande para que la [[longitud_correlacion]] calculada no alcance el tamaño real del material.

## Modelo físico
Se aplica el modelo de leyes críticas. La [[temperatura_reducida]] mide la distancia relativa al punto crítico. El [[parametro_de_orden]] decrece como una potencia de esa distancia, mientras la [[susceptibilidad]] y la [[longitud_correlacion]] crecen al acercarse a [[temperatura_critica]]. No se incluyen campos externos ni redondeo por tamaño finito.

## Justificación del modelo
La transición se describe como continua porque no se menciona calor latente ni salto abrupto. El punto de medida está a 3 K de [[temperatura_critica]], lo que da una distancia relativa pequeña. Esa cercanía justifica usar exponentes críticos para una primera estimación. Además, estudiar simultáneamente [[parametro_de_orden]], [[susceptibilidad]] y [[longitud_correlacion]] permite comprobar coherencia: el orden debe debilitarse, la respuesta debe crecer y las correlaciones deben extenderse.

## Resolución simbólica
Primero se calcula la distancia crítica:

{{f:temperatura_reducida_critica}}

Después se estima el orden en la fase ordenada:

{{f:parametro_orden_ley_critica}}

La respuesta se evalúa con:

{{f:susceptibilidad_critica}}

Y la escala espacial de fluctuaciones con:

{{f:longitud_correlacion_critica}}

La estructura simbólica muestra que un mismo valor pequeño de [[temperatura_reducida]] controla tres lecturas físicas diferentes: desaparición del orden, aumento de respuesta y crecimiento espacial.

## Sustitución numérica
Para [[temperatura]] de 297 K y [[temperatura_critica]] de 300 K, la [[temperatura_reducida]] vale aproximadamente -0,01. Su módulo es 0,01. El [[parametro_de_orden]] estimado es 1,20 multiplicado por 0,01 elevado a 0,33, aproximadamente 0,26 unidades. La [[susceptibilidad]] resulta del orden de 0,80 multiplicado por 0,01 elevado a -1,24, unas 240 unidades de respuesta. La [[longitud_correlacion]] es aproximadamente 0,30 nm multiplicado por 0,01 elevado a -0,63, unas 5,5 nm.

## Validación dimensional
La [[temperatura_reducida]] es adimensional porque compara temperaturas. El [[parametro_de_orden]] conserva las unidades fijadas por [[amplitud_critica]]. La [[susceptibilidad]] conserva las unidades de [[amplitud_susceptibilidad]], ya que la potencia actúa sobre una variable adimensional. La [[longitud_correlacion]] queda en nanómetros porque [[amplitud_correlacion]] lleva unidad de longitud. Esto confirma que las potencias críticas modifican escala, no dimensión física.

## Interpretación física
El resultado indica un sistema muy cercano al punto crítico, pero todavía en la fase ordenada. El [[parametro_de_orden]] no ha desaparecido, aunque ya está reducido respecto a su escala natural. La [[susceptibilidad]] elevada señala que una perturbación pequeña puede producir una respuesta colectiva intensa. La [[longitud_correlacion]] de varios nanómetros implica que las fluctuaciones no son atómicas aisladas: regiones enteras se comportan de manera coordinada. La coherencia física está en que las tres magnitudes se mueven juntas al acercarse a [[temperatura_critica]]: menos orden, más respuesta y mayor alcance espacial. Si un experimento mostrara [[parametro_de_orden]] creciente en ese intervalo, habría que revisar el convenio o el modelo.

# Ejemplo de aplicación real
## Contexto
En un laboratorio de materiales se estudia una aleación ferromagnética para sensores. Cerca de [[temperatura_critica]], la [[susceptibilidad]] alta puede aumentar la sensibilidad, pero también vuelve el dispositivo inestable ante ruido térmico y campos residuales. El objetivo no es operar exactamente en el punto crítico, sino seleccionar una ventana donde la respuesta sea grande y reproducible.

## Estimación física
Supongamos que el sensor trabaja con |[[temperatura_reducida]]| cercano a 0,02. Si [[amplitud_correlacion]] es 0,25 nm y [[exponente_critico_nu]] ronda 0,6, la [[longitud_correlacion]] puede alcanzar algunos nanómetros. Ese valor es mucho mayor que la escala atómica, pero menor que el tamaño del dispositivo, por lo que la ley crítica todavía puede ser útil. Si al reducir |[[temperatura_reducida]]| a 0,005 la señal aumenta pero también aparece saturación, el límite probablemente no es la teoría sino el tamaño de grano, impurezas o control térmico.

## Interpretación
La aplicación muestra la doble cara de la criticidad. La gran [[susceptibilidad]] permite detectar perturbaciones débiles, pero también amplifica ruido. La [[longitud_correlacion]] grande confirma que el material responde por dominios correlacionados, no por átomos independientes. El diseño práctico busca un compromiso: suficientemente cerca de [[temperatura_critica]] para aprovechar la respuesta, pero no tan cerca como para que el comportamiento sea irreproducible.

En una práctica real se repetirían medidas a ambos lados de [[temperatura_critica]] para comprobar que la tendencia no depende de una sola lectura. adicional.

