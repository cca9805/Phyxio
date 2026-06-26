# Ejemplo tipo examen


## Enunciado

Se quiere estimar el valor medio de un observable energético en un sistema térmico mediante el método de Monte Carlo. Se toman 10000 muestras independientes. En una primera prueba, la media de los [[valor_muestra]] es 4,80 unidades de energía y la [[varianza_muestral]] es 2,25 unidades cuadradas. Calcula el [[estimador_montecarlo]], estima el [[error_estandar]] y explica si el resultado tiene precisión suficiente para una tolerancia de 0,03 unidades. Después interpreta qué papel tendría una regla Metropolis si las muestras se obtuvieran mediante propuestas con [[energia_estado]] dependiente de [[temperatura]].

## Datos

- [[numero_muestras]]: 10000 muestras
- Media de los [[valor_muestra]]: 4,80 unidades de energía
- [[varianza_muestral]]: 2,25 unidades cuadradas
- Tolerancia deseada: 0,03 unidades de energía
- [[temperatura]]: fija durante el muestreo
- [[constante_boltzmann]]: usada solo si hay aceptación Metropolis

## Definición del sistema

El sistema se representa como una colección de configuraciones microscópicas que producen distintos valores del observable. Cada configuración muestreada aporta un [[valor_muestra]]. El objetivo no es describir una trayectoria real en el tiempo, sino estimar el promedio estadístico compatible con la preparación física. El número relevante de observaciones es [[numero_muestras]], y el resultado no debe separarse de su [[error_estandar]], porque la media Monte Carlo conserva ruido residual.

## Modelo físico

Se usa un modelo de muestreo con muestras independientes y pesos equivalentes. Por eso el promedio simple es adecuado y no se necesita [[peso_muestra]]. Si las muestras procedieran de una cadena Metropolis, habría que comprobar [[probabilidad_aceptacion]] para asegurar que la exploración térmica es razonable. La [[energia_estado]], la [[temperatura]] y la [[constante_boltzmann]] entrarían en el criterio de aceptación, no en la media simple ya calculada.

## Justificación del modelo

El modelo es válido porque el enunciado indica muestras independientes. Además, la [[varianza_muestral]] es finita y conocida, así que el [[error_estandar]] puede estimarse. La tolerancia impuesta permite decidir si el número de muestras basta. Como no se han dado pesos distintos, aplicar un promedio ponderado sería añadir una corrección no justificada. La física del problema está en conectar una nube de valores microscópicos con un promedio macroscópico controlado.

## Resolución simbólica

Primero se identifica el promedio Monte Carlo como media de los valores muestreados.

{{f:estimador_montecarlo_media}}

Después se usa la dispersión muestral para cuantificar cuánto fluctúan los valores individuales.

{{f:varianza_muestral_montecarlo}}

La incertidumbre del promedio se calcula con el error estándar.

{{f:error_estandar_montecarlo}}

Si hubiera pesos distintos, el promedio simple se sustituiría por el promedio ponderado.

{{f:promedio_ponderado_muestras}}

Y si las muestras se generaran con Metropolis, la aceptación de propuestas se controlaría por la energía y la escala térmica.

{{f:probabilidad_aceptacion_metropolis}}

## Sustitución numérica

El [[estimador_montecarlo]] toma directamente el promedio observado: 4,80 unidades de energía. La desviación típica muestral es la raíz cuadrada de [[varianza_muestral]], es decir 1,5 unidades. Al dividir por la raíz de [[numero_muestras]], el [[error_estandar]] resulta 1,5/100 = 0,015 unidades. Como 0,015 es menor que la tolerancia de 0,03, la precisión estadística declarada es suficiente dentro de este modelo.

## Validación dimensional

Los [[valor_muestra]] tienen unidades de energía, por tanto el [[estimador_montecarlo]] también tiene unidades de energía. La [[varianza_muestral]] tiene unidades de energía al cuadrado. Su raíz tiene unidades de energía y, al dividir por la raíz de [[numero_muestras]], que es adimensional, el [[error_estandar]] conserva unidades de energía. La [[probabilidad_aceptacion]] sería adimensional si se usara Metropolis.

## Interpretación física

El resultado no significa que todas las muestras valgan 4,80, sino que muchas configuraciones microscópicas producen una media estadística cercana a ese valor. La [[varianza_muestral]] indica que los valores individuales todavía están bastante dispersos, pero el gran [[numero_muestras]] reduce la incertidumbre de la media. El [[error_estandar]] de 0,015 señala que el promedio está bien controlado para la tolerancia pedida. Si se activara un muestreo Metropolis, habría que vigilar que [[probabilidad_aceptacion]] no fuese extrema, porque una cadena congelada o demasiado lenta daría un promedio aparentemente preciso pero físicamente sesgado.

# Ejemplo de aplicación real


## Contexto

En simulación molecular se puede estimar la energía media de un líquido sencillo sin visitar todas las configuraciones posibles. Cada configuración aceptada aporta un [[valor_muestra]] de energía. Si las propuestas modifican posiciones moleculares, el cambio de [[energia_estado]] se evalúa frente a la escala térmica fijada por [[temperatura]] y [[constante_boltzmann]]. La [[probabilidad_aceptacion]] decide si la configuración entra en la serie de muestras.

## Estimación física

Supón que se obtienen 200000 muestras con una dispersión típica de 0,8 unidades de energía. Entonces el [[error_estandar]] esperado estaría alrededor de 0,8 dividido por la raíz de 200000, aproximadamente 0,0018 unidades. Esta escala es pequeña frente al valor medio si el [[estimador_montecarlo]] ronda varias unidades. Si se redujera [[numero_muestras]] a 2000, el error crecería aproximadamente por un factor diez. Por eso Monte Carlo exige mirar tanto el promedio como el coste estadístico.

## Interpretación

La simulación no predice una configuración única del líquido, sino un promedio sobre configuraciones compatibles. Un [[peso_muestra]] correcto o una [[probabilidad_aceptacion]] bien ajustada son tan importantes como el número de muestras. El resultado final debe comunicarse como valor medio con incertidumbre, no como cifra desnuda. Así se ve la diferencia entre una fluctuación microscópica normal y una estimación macroscópica confiable.