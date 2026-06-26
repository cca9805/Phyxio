# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: equilibrio-estadistico
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un sistema puede ocupar dos estados A y B. Durante una observación larga, las ocupaciones medias permanecen constantes. Se desea decidir si el sistema está en equilibrio estadístico usando [[probabilidad_estado]], [[tasa_transicion]] y [[flujo_probabilidad]].

## Datos
Probabilidad del estado A: 0,60
Probabilidad del estado B: 0,40
Tasa A hacia B: 0,20 s^-1
Tasa B hacia A: 0,30 s^-1
Tiempo de observación: 200 s

## Definición del sistema
El sistema estadístico se define como un conjunto de copias idénticas que pueden ocupar dos estados accesibles. No se sigue una trayectoria individual, sino la población media en A y B. La [[probabilidad_estado]] representa fracción de ensemble, y [[tiempo]] sirve para comprobar si esas fracciones derivan.

## Modelo físico
Se usa un modelo markoviano de dos estados con [[tasa_transicion]] constante. El equilibrio estadístico se reconoce por probabilidad estacionaria, normalización y ausencia de [[flujo_probabilidad]] neto.

## Justificación del modelo
Las tasas se consideran estables durante 200 s, mucho más que el tiempo típico de salto. Como las probabilidades dadas suman 1, la población estadística está cerrada. No se introduce [[peso_boltzmann]] porque no se pide deducir la distribución desde [[temperatura]] y [[energia_estado]].

## Resolución simbólica
Primero se comprueba la estacionariedad:

{{f:criterio_probabilidad_estacionaria}}

Luego se revisa que la distribución esté normalizada:

{{f:normalizacion_probabilidades}}

Para dos estados, el balance detallado compara p_A k_AB con p_B k_BA:

{{f:balance_detallado_dos_estados}}

El diagnóstico final usa el flujo neto:

{{f:flujo_probabilidad_neto}}

Si el flujo es nulo, no hay transferencia preferente entre A y B.

## Sustitución numérica
Tránsito A hacia B: 0,60 · 0,20 s^-1 = 0,12 s^-1. Tránsito B hacia A: 0,40 · 0,30 s^-1 = 0,12 s^-1. Por tanto, [[flujo_probabilidad]] neto es 0 s^-1. La suma de probabilidades es 0,60 + 0,40 = 1.

## Validación dimensional
[[probabilidad_estado]] es adimensional. [[tasa_transicion]] tiene unidad s^-1. El producto de ambos tiene unidad s^-1, que corresponde a [[flujo_probabilidad]] como tráfico estadístico por unidad de [[tiempo]]. La normalización es adimensional, así que la comparación es coherente.

## Interpretación física
El resultado indica equilibrio estadístico porque las transiciones continúan, pero están compensadas. En cada segundo estadístico sale de A hacia B la misma fracción que entra desde B hacia A. Eso no significa que cada copia permanezca quieta; significa que el conjunto no cambia de forma macroscópica. La [[probabilidad_estado]] mayor de A no contradice el equilibrio, porque la tasa de salida desde A es menor. La compensación entre ocupación y [[tasa_transicion]] elimina el [[flujo_probabilidad]] neto.

# Ejemplo de aplicación real
## Contexto
En un material con defectos microscópicos, un átomo puede saltar entre dos configuraciones locales. Aunque los átomos individuales saltan por agitación térmica, el número promedio en cada configuración puede permanecer estable. Ese caso se interpreta con equilibrio estadístico si los flujos directos e inversos se compensan.

## Estimación física
Si la tasa típica de salto es 10^3 s^-1, observar durante 0,1 s ya cubre unos 100 saltos característicos. Si las fracciones ocupadas cambian menos de 1% y el [[desbalance_estadistico]] queda por debajo de 10^-2, la lectura de equilibrio es razonable. La [[temperatura]] debe mantenerse estable; si cambia, las ocupaciones esperadas también pueden cambiar.

## Interpretación
La aplicación muestra por qué el equilibrio estadístico es una idea de ensemble. Un microscopio hipotético vería saltos constantes, pero un medidor macroscópico vería estabilidad. El diagnóstico útil no pregunta si hay movimiento, sino si existe [[flujo_probabilidad]] preferente entre configuraciones.

