# Ejemplo tipo examen

## Enunciado

Un parte meteorológico de Estados Unidos indica que la temperatura máxima del día fue de 95 °F y la mínima de 41 °F. Calcula a qué temperaturas corresponden estos valores en grados Celsius y en kelvin. Determina además la variación de temperatura [[DeltaT]] del día en las tres escalas y comprueba que el valor numérico de [[DeltaT]] es el mismo en Celsius y en kelvin.

## Datos

- Temperatura máxima: 95 °F
- Temperatura mínima: 41 °F

Ambos datos pertenecen a la misma escala inicial, por lo que pueden convertirse estado a estado y luego compararse mediante [[DeltaT]].

## Definición del sistema

El sistema es el conjunto de datos meteorológicos del día. Se trabaja con dos estados del sistema: el estado de temperatura máxima y el estado de temperatura mínima. Las magnitudes relevantes son [[T_F]], [[T_C]], [[T_K]] y [[DeltaT]].

## Modelo físico

Se aplican las dos relaciones de conversión de escala: la conversión Fahrenheit-Celsius y la conversión Celsius-kelvin. La variación de temperatura se calcula como temperatura máxima menos temperatura mínima (tomando el máximo como estado final del ciclo diario).

## Justificación del modelo

Las relaciones de conversión entre escalas son definiciones exactas del SI, sin hipótesis físicas adicionales. Son válidas para cualquier temperatura por encima del cero absoluto. Los valores del enunciado (95 °F y 41 °F) están muy por encima del cero absoluto, por lo que no existe ningún límite de validez relevante.

La elección del modelo se justifica porque no se calcula calor ni energía interna, sino el mismo estado térmico expresado con tres reglas de escala. [[T_F]] y [[T_C]] difieren por pendiente y desplazamiento; [[T_K]] comparte tamaño de grado con [[T_C]] pero cambia el origen. Por eso una temperatura absoluta exige sumar el desplazamiento, mientras una diferencia [[DeltaT]] cancela el desplazamiento.

## Resolución simbólica

Para convertir de Fahrenheit a Celsius se aplica:

{{f:conversion_fahrenheit_celsius}}

despejando [[T_C]].

Para convertir de Celsius a kelvin se aplica:

{{f:conversion_celsius_kelvin}}

La variación de temperatura entre los dos estados se calcula como:

{{f:variacion_temperatura}}

## Sustitución numérica

Conversión de 95 °F a Celsius: restar 32 da 63, multiplicar por 5 novenos da 35 °C.

Conversión de 41 °F a Celsius: restar 32 da 9, multiplicar por 5 novenos da 5 °C.

Conversión de 35 °C a kelvin: sumar 273.15 da 308.15 K.

Conversión de 5 °C a kelvin: sumar 273.15 da 278.15 K.

Variación de temperatura en Fahrenheit: 95 menos 41 da 54 °F.

Variación de temperatura en Celsius: 35 menos 5 da 30 °C.

Variación de temperatura en kelvin: 308.15 menos 278.15 da 30 K.

## Validación dimensional

Las unidades de [[T_C]] son °C, las de [[T_K]] son K, las de [[T_F]] son °F. Todas son unidades de temperatura. Las conversiones aplicadas son dimensionalmente correctas: el factor 5/9 es adimensional (ratio de grados), los términos 32 y 273.15 son desplazamientos de escala numéricos.

## Interpretación física

Las temperaturas máxima y mínima del día son 35 °C (308 K) y 5 °C (278 K). La variación diaria de temperatura es 30 K o 30 °C —el mismo valor numérico en ambas escalas, lo que confirma que 1 K y 1 °C tienen el mismo tamaño de grado. En Fahrenheit, la misma variación física de 30 K corresponde a 54 °F, mayor porque el grado Fahrenheit es más pequeño (9 grados Fahrenheit equivalen a 5 grados Celsius).

Esta verificación —que [[DeltaT]] en Celsius e en kelvin coincide numéricamente— es la comprobación más directa de que la diferencia de 273.15 en los ceros de ambas escalas se cancela al restar dos temperaturas.

La lectura física no depende del nombre de la escala: el día tuvo una amplitud térmica moderada de 30 K. Lo que cambia entre escalas es la etiqueta numérica. Kelvin se reserva para temperaturas absolutas como [[T_K]], porque mide distancia al cero absoluto; Celsius y Fahrenheit son escalas prácticas con orígenes históricos.

---

# Ejemplo de aplicación real

## Contexto

Los sondas espaciales de la NASA operan en entornos con variaciones de temperatura extremas. La sonda Curiosity en Marte registra temperaturas superficiales que oscilan entre aproximadamente –90 °C en invierno nocturno y 20 °C en verano diurno. Los sistemas electrónicos a bordo están diseñados para operar en ese rango. Los ingenieros de la NASA trabajan internamente con kelvin para todos los cálculos termodinámicos (aislamiento, radiación), pero publican los datos climáticos en Celsius para los medios y en Fahrenheit para el público estadounidense.

## Estimación física

La variación de temperatura entre el mínimo invernal nocturno de Marte y el máximo estival diurno es de 20 menos menos 90, que da [[DeltaT]] de 110 °C o equivalentemente 110 K.

En kelvin, la temperatura mínima de –90 °C corresponde a 183 K y la máxima de 20 °C corresponde a 293 K.

En Fahrenheit, –90 °C corresponde a multiplicar por 9/5 y sumar 32, resultado –130 °F; 20 °C corresponde a 68 °F.

La diferencia en Fahrenheit es 68 menos menos 130, que da 198 °F. Esta diferencia de 198 °F equivale exactamente a 110 °C (198 multiplicado por 5/9), confirmando la coherencia de las tres escalas.

## Interpretación

La variación de temperatura de 110 K a la que están sometidos los sistemas de la sonda es más del doble de la variación de temperatura anual en una ciudad europea de clima continental (unos 50 K). Esto explica por qué los componentes electrónicos de las sondas espaciales requieren calificación espacial con ciclos térmicos de alta amplitud.

El hecho de que [[DeltaT]] en kelvin y en Celsius sea idéntico numéricamente (110 en ambos casos) permite a los ingenieros de la NASA usar indistintamente ambas escalas para los cálculos de variación de temperatura, mientras que reservan kelvin para los cálculos de temperatura absoluta (como la potencia radiada por el cuerpo negro de la sonda o la eficiencia de los generadores termoeléctricos de radioisótopos).
