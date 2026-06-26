# Ejemplo tipo examen


## Enunciado

Un sistema canónico tiene tres microestados no degenerados con energías 0, 2.0e-21 J y 5.0e-21 J. Está en equilibrio con un baño a 300 K. Se pide construir la [[funcion_particion]], estimar la [[energia_media]] mediante pesos canónicos y explicar cómo cambiaría al aumentar la [[temperatura]].

## Datos

- [[temperatura]]: 300 K
- [[constante_boltzmann]]: 1.38e-23 J/K
- [[energia_microestado]] del estado 0: 0 J
- [[energia_microestado]] del estado 1: 2.0e-21 J
- [[energia_microestado]] del estado 2: 5.0e-21 J
- Condición: volumen constante y equilibrio térmico

## Definición del sistema

El sistema está formado por una colección ideal de microestados discretos, todos accesibles y sin degeneración adicional. No se modela intercambio de partículas ni trabajo mecánico. La [[temperatura]] fija el baño térmico y, por tanto, la [[beta]] que controla los pesos. El objetivo no es seguir trayectorias microscópicas, sino obtener un promedio energético estable. La [[energia_media]] será una propiedad del conjunto estadístico, no de un microestado individual.

## Modelo físico

Se usa el conjunto canónico. Cada [[energia_microestado]] entra en la [[funcion_particion]] con un peso decreciente al crecer la energía. La [[funcion_particion]] normaliza esos pesos y permite obtener promedios. La derivada formal de ln Z respecto a [[beta]] daría directamente la [[energia_media]], pero en este ejemplo discreto también puede verse como suma ponderada equivalente.

## Justificación del modelo

El modelo es adecuado porque el sistema está en equilibrio térmico, la [[temperatura]] está fijada por un baño y las energías disponibles son conocidas. La escala [[constante_boltzmann]] T vale aproximadamente 4.14e-21 J, comparable con los dos niveles excitados. Eso significa que el primer nivel excitado debe contribuir bastante y el segundo no puede ignorarse por completo. Si el segundo nivel se omitiera, la [[funcion_particion]] sería demasiado pequeña y la [[energia_media]] quedaría infravalorada. La hipótesis de volumen constante permite asociar cambios posteriores de [[energia_media]] con [[capacidad_calorifica]] sin mezclar trabajo de expansión.

## Resolución simbólica

Primero se define la escala térmica inversa:

{{f:beta_inversa_termica}}

Después se construye la suma de pesos canónicos:

{{f:funcion_particion_canonica}}

La energía media se obtiene desde la sensibilidad de ln Z:

{{f:energia_media_desde_derivada_beta}}

Si el problema proporciona una curva frente a [[temperatura]], se usa la forma térmica equivalente:

{{f:energia_media_desde_derivada_temperatura}}

Para estudiar respuesta al calentamiento se usa:

{{f:capacidad_calorifica_desde_energia_media}}

En una suma discreta no degenerada, el mismo resultado se interpreta como promedio de cada [[energia_microestado]] ponderada por su peso relativo dentro de [[funcion_particion]].

## Sustitución numérica

La escala térmica es [[constante_boltzmann]] T ≈ 4.14e-21 J. Los exponentes relativos son 0, -0.48 y -1.21. Los pesos aproximados son 1, 0.62 y 0.30, de modo que [[funcion_particion]] ≈ 1.92. La contribución energética ponderada es 0·1 + 2.0e-21·0.62 + 5.0e-21·0.30 ≈ 2.74e-21 J. Al dividir por [[funcion_particion]], se obtiene [[energia_media]] ≈ 1.43e-21 J. Este valor queda por encima del estado fundamental y por debajo del primer nivel excitado, como corresponde a un promedio estadístico.

## Validación dimensional

La [[funcion_particion]] es adimensional porque suma pesos exponenciales. La [[beta]] tiene dimensión J^-1, ya que procede de una energía térmica inversa. La derivada [[derivada_log_particion_beta]] tiene dimensión de energía con signo opuesto al promedio. La [[energia_media]] obtenida en la sustitución está en julios. Si se calculara [[capacidad_calorifica]], su unidad sería J/K, porque mediría variación de [[energia_media]] por variación de [[temperatura]].

## Interpretación física

El resultado indica que a 300 K el sistema no está pegado al estado fundamental, pero tampoco ocupa de forma dominante el nivel de 5.0e-21 J. La [[temperatura]] es suficiente para activar parcialmente el primer nivel excitado y dar una contribución visible del segundo. La [[energia_media]] de 1.43e-21 J no debe buscarse como energía de un microestado; es la media del reparto canónico. Si se aumenta [[temperatura]], la penalización de las energías altas disminuye, la [[funcion_particion]] crece y la [[energia_media]] tenderá a acercarse al promedio de los niveles disponibles. La [[capacidad_calorifica]] sería mayor en el intervalo donde el cambio de ocupaciones sea más rápido.

# Ejemplo de aplicación real


## Contexto

En un sólido molecular idealizado, una molécula puede tener varios estados rotacionales de baja energía. A temperaturas moderadas no todos están igualmente ocupados. La [[funcion_particion]] rotacional permite estimar la [[energia_media]] asociada a esos grados de libertad sin seguir molécula por molécula.

## Estimación física

Supón separaciones de energía rotacional del orden de 1e-22 J a 1e-21 J. A [[temperatura]] ambiente, [[constante_boltzmann]] T es del orden de 4e-21 J, de modo que muchos estados rotacionales bajos tienen pesos apreciables. Una estimación razonable es que la [[energia_media]] rotacional por molécula esté en la escala de 1e-21 J, no de 1e-18 J ni de 1e-25 J. Si se enfría el sistema hasta temperaturas mucho menores, [[beta]] aumenta y los estados excitados pierden peso. Si se calienta, se desbloquean más estados y crece la respuesta térmica.

## Interpretación

La utilidad práctica está en que [[funcion_particion]] convierte una lista microscópica compleja en predicciones macroscópicas. Medir cómo cambia la energía con [[temperatura]] permite inferir [[capacidad_calorifica]] y detectar qué grados de libertad están activos. En un experimento real, una [[capacidad_calorifica]] mayor de lo esperado puede revelar niveles adicionales, degeneraciones o interacciones no consideradas en el modelo simple.