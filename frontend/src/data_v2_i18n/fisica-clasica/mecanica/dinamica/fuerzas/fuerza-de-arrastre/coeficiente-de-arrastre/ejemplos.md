# Ejemplo tipo examen

## Enunciado

Un equipo de estudiantes compara dos carenados para un prototipo terrestre de baja altura. Ambos se ensayan en el mismo tunel de viento, con igual area de referencia [[A]] y misma densidad de fluido [[rho]]. El objetivo es estimar la diferencia de fuerza de arrastre [[F_d]] y de potencia resistiva [[P_d]] a dos velocidades de operacion, y usar esa comparacion para justificar cual diseno conviene si la meta es reducir demanda energetica sin cambiar propulsion.

El examen no pide solo calcular. Pide interpretar que significa un cambio de [[C_d]] en terminos de forma y estela, y explicar por que una mejora modesta en [[C_d]] puede tener impacto grande en [[P_d]] cuando la rapidez [[v]] aumenta.

## Datos

Datos entregados por el laboratorio:

- Mismo fluido en ambas pruebas, con [[rho]] estable durante la sesion.
- Misma area de referencia [[A]] para los dos carenados.
- Dos velocidades objetivo: [[v]]_1 y [[v]]_2, con [[v]]_2 mayor.
- Coeficientes medidos: [[C_d]]_A para carenado A y [[C_d]]_B para carenado B.

Se solicita calcular:

1. [[F_d]] de cada carenado en [[v]]_1 y en [[v]]_2.
2. [[P_d]] de cada carenado en ambas velocidades.
3. Diferencia relativa de potencia entre disenos en la velocidad alta.

Tambien se exige concluir si la mejora en [[C_d]] es suficiente para justificar el rediseño desde el punto de vista energetico.

## Definición del sistema

Sistema: vehiculo + interaccion con flujo en direccion principal de avance.

Convenciones del problema:

- [[v]] es rapidez relativa al fluido.
- [[A]] se mantiene fija por definicion de ensayo.
- [[C_d]] representa efecto integrado de forma y estela para cada carenado.
- [[F_d]] se interpreta como modulo de fuerza resistiva.
- [[P_d]] se interpreta como potencia necesaria para compensar arrastre en regimen casi estacionario.

Esta definicion evita la confusion frecuente de comparar [[C_d]] obtenidos con areas de referencia distintas.

## Modelo físico

Relacion de arrastre usada para calcular fuerza:

{{f:arrastre_cuadratico_estandar}}

Relacion para traducir esa fuerza en costo de potencia:

{{f:potencia_de_arrastre}}

Estas dos formulas son el nucleo del leaf: una conecta forma con fuerza, la otra conecta fuerza con energia por unidad de tiempo.

## Justificación del modelo

El modelo es adecuado para este examen porque:

1. Las pruebas se realizaron con mismo criterio de area [[A]], que permite comparar [[C_d]] sin sesgo de referencia.
2. Las condiciones de flujo se mantienen dentro del rango de calibracion del tunel.
3. El objetivo es comparar dos configuraciones de forma en un rango acotado de [[v]], no construir un mapa completo de todos los regimenes.

Ademas, incluir [[P_d]] en la resolucion es fisicamente necesario. Dos carenados pueden tener diferencia moderada en [[F_d]] a velocidad media y, sin embargo, mostrar diferencia operativa relevante en [[P_d]] a velocidad alta.

## Resolución simbólica

Para cada carenado y cada velocidad:

{{f:arrastre_cuadratico_estandar}}

De este paso salen [[F_d]]_A1, [[F_d]]_A2, [[F_d]]_B1 y [[F_d]]_B2.

Luego, para cada caso:

{{f:potencia_de_arrastre}}

Se obtienen [[P_d]]_A1, [[P_d]]_A2, [[P_d]]_B1 y [[P_d]]_B2.

Comparaciones simbolicas relevantes:

- A igualdad de [[rho]], [[A]] y [[v]], el cociente de [[F_d]] entre carenados se aproxima al cociente de [[C_d]].
- A igualdad de [[v]], si baja [[C_d]], bajan [[F_d]] y [[P_d]].
- A igualdad de carenado, al subir [[v]] crecen [[F_d]] y [[P_d]], siendo [[P_d]] especialmente sensible por depender tambien de [[v]].

Estas relaciones permiten comprobar coherencia aun antes de sustituir numeros concretos.

## Sustitución numérica

Al sustituir valores del problema, el carenado con menor [[C_d]] produce menor [[F_d]] en ambas velocidades. En [[v]]_1 la diferencia de fuerza puede parecer moderada, pero en [[v]]_2 la diferencia de potencia [[P_d]] se vuelve mucho mas relevante para el consumo.

Este resultado ilustra una leccion de diseño: una mejora de forma que reduce [[C_d]] puede tener retorno energetico creciente cuando el sistema opera cerca de su velocidad alta de trabajo.

Tambien se debe revisar consistencia interna:

- Si [[C_d]]_B < [[C_d]]_A, no deberia aparecer [[F_d]]_B mayor a igualdad de [[rho]], [[A]] y [[v]].
- Si [[F_d]] baja en un diseno, [[P_d]] debe bajar en la misma condicion de [[v]].

Cuando alguna de estas reglas falla, suele haber error de sustitucion, de unidades o de convencion de referencia.

## Validación dimensional

Chequeos minimos:

1. [[F_d]] debe quedar en N.
2. [[P_d]] debe quedar en W.
3. [[C_d]] debe mantenerse adimensional.
4. [[rho]], [[A]] y [[v]] deben expresarse en unidades SI coherentes.

Chequeos de validez del modelo:

- Misma definicion de [[A]] en todas las comparaciones.
- Mismo contexto de flujo para no mezclar valores de [[C_d]] incompatibles.
- Rango de [[v]] dentro de la ventana experimental usada para caracterizar el problema.

Sin estos chequeos, la cuenta puede parecer correcta pero la conclusion fisica ser debil.

## Interpretación física

La interpretacion central es que [[C_d]] organiza la lectura de forma y estela, no la reemplaza. Un [[C_d]] menor sugiere una configuracion que penaliza menos el flujo, y eso se traduce en menor [[F_d]] para igual [[rho]], [[A]] y [[v]].

La segunda lectura clave es energetica. La decision de diseño no debe basarse solo en fuerza instantanea. Debe considerar [[P_d]], porque el costo de sostener velocidad es lo que determina viabilidad de operacion continua.

Tambien hay una lectura causal de estabilidad: cuando la estela es mas limpia y el parametro [[C_d]] baja de forma consistente, no solo disminuye la resistencia media; se reduce la sensibilidad del sistema a pequeñas variaciones de postura. Esa reduccion de sensibilidad es relevante en operacion real, porque permite mantener desempeño con menos correcciones del piloto o del control automatico.

Ademas, el ejemplo enseña una leccion de frontera del modelo. Si en un nuevo ensayo la comparacion cambia de signo sin modificar protocolo, la respuesta correcta no es "la fisica se contradice", sino revisar referencia de [[A]], calidad del dato y rango de flujo. Esta actitud evita decisiones basadas en una tabla fija y refuerza pensamiento de modelo con validez declarada.

En este examen, el carenado que reduce [[C_d]] resulta preferible en el tramo rapido por su menor demanda de [[P_d]]. La conclusion es fisica, no estetica: menos penalizacion de estela implica menor costo para mantener desempeño.

# Ejemplo de aplicación real

## Contexto

Un fabricante de bicicletas de pista compara dos cascos en sesiones de tunel de viento. Ambos cascos se prueban con la misma postura del ciclista, igual definicion de area de referencia [[A]] y el mismo protocolo de velocidad. El objetivo es decidir cual casco usar en una prueba de persecucion de alta exigencia energetica.

La eleccion no depende solo del mejor tiempo en una corrida corta. Debe sostenerse con lectura de [[C_d]], [[F_d]] y [[P_d]] bajo condiciones comparables.

## Estimación física

Para cada casco, el equipo obtiene un valor efectivo de [[C_d]] en la ventana principal de [[v]]. Con ese dato estima fuerza:

{{f:arrastre_cuadratico_estandar}}

y luego potencia:

{{f:potencia_de_arrastre}}

La estimacion muestra que el casco con menor [[C_d]] reduce [[F_d]] en todo el rango y reduce [[P_d]] de manera particularmente visible en el extremo alto de velocidad. Esta diferencia permite sostener objetivo de ritmo con menor coste fisiologico y mayor margen tactico en los ultimos segundos del esfuerzo.

Tambien se evalua robustez: si el ciclista cambia ligeramente la postura, la ventaja se mantiene pero disminuye. Esa observacion recuerda que [[C_d]] no es universal; depende del sistema real de uso.

## Interpretación

La aplicacion confirma el mensaje del leaf: [[C_d]] es util cuando se interpreta con referencia y contexto claros. Su poder no esta en producir un unico numero, sino en conectar forma, fuerza y potencia para tomar decisiones de operacion y diseño.

La conclusion profesional no es "este casco tiene mejor numero". Es "este casco reduce [[P_d]] en el rango competitivo manteniendo condiciones comparables de ensayo". Esa forma de concluir evita sobrepromesas y mejora la calidad tecnica de la decision.