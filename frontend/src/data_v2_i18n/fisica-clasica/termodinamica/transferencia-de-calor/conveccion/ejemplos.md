# Ejemplo tipo examen


## Enunciado

Una placa metálica plana se mantiene a una [[temperatura_superficie]] alta mientras una corriente de aire pasa sobre ella con una [[temperatura_fluido]] menor. La placa tiene un [[area]] conocida y el ensayo dura un [[tiempo]] de varios minutos. Se pide estimar la [[diferencia_temperatura]], la [[potencia_termica]] entregada al aire, el [[flujo_calor]], el [[calor_transferido]] acumulado y la [[resistencia_termica_conveccion]]. Además, se quiere obtener el [[coeficiente_conveccion]] a partir de un [[numero_nusselt]] experimental, usando la [[conductividad_termica_fluido]] del aire y la [[longitud_caracteristica]] de la placa.

## Datos

Los valores de entrada del problema son:

- [[temperatura_superficie]]: 80 °C (placa caliente)
- [[temperatura_fluido]]: 25 °C (aire que circula)
- [[area]]: 0,40 m² (superficie expuesta)
- [[tiempo]]: 300 s (5 minutos de ensayo)
- [[longitud_caracteristica]]: 0,50 m (dimensión de la placa)
- [[numero_nusselt]]: 75 (correlación experimental)
- [[conductividad_termica_fluido]]: 0,026 W m⁻¹ K⁻¹ (propiedad del aire)

## Definición del sistema

El sistema físico es la frontera entre una placa caliente y el aire que circula sobre ella. No se estudia el interior completo de la placa ni el movimiento detallado de cada partícula del aire, sino el intercambio térmico promedio en la superficie expuesta. La [[temperatura_superficie]] representa la pared metálica en contacto con el fluido y la [[temperatura_fluido]] representa el aire lejos de la capa térmica pegada a la placa. El [[area]] corresponde a la superficie bañada por la corriente. La [[longitud_caracteristica]] se toma como la dimensión de la placa en la dirección principal del flujo, porque esa escala controla el desarrollo de la capa térmica. El [[tiempo]] permite pasar de ritmo térmico a energía acumulada.

## Modelo físico

El modelo elegido es convección forzada promedio. El [[coeficiente_conveccion]] no se toma como dato directo, sino que se obtiene con el [[numero_nusselt]], la [[conductividad_termica_fluido]] y la [[longitud_caracteristica]]. Después se calcula la [[diferencia_temperatura]], la [[potencia_termica]], el [[flujo_calor]], el [[calor_transferido]] y la [[resistencia_termica_conveccion]]. Las fórmulas que organizan el modelo son:

{{f:diferencia_temperatura_conveccion}}

{{f:ley_enfriamiento_newton_conveccion}}

{{f:flujo_calor_conveccion}}

{{f:flujo_potencia_area}}

{{f:calor_potencia_tiempo}}

{{f:resistencia_termica_conveccion}}

{{f:potencia_resistencia_conveccion}}

{{f:coeficiente_conveccion_nusselt}}

## Justificación del modelo

La placa está expuesta a una corriente de aire, por lo que la hipótesis de convección forzada es más adecuada que una descripción de convección natural. Se acepta un [[coeficiente_conveccion]] medio porque el enunciado pide una estimación global y no una distribución punto a punto del [[flujo_calor]]. La [[temperatura_superficie]] se considera uniforme, lo cual es razonable en una placa metálica bien conducida y controlada térmicamente. La [[temperatura_fluido]] se toma como la del aire antes de calentarse junto a la superficie. El uso del [[numero_nusselt]] permite incorporar el efecto del movimiento sin resolver todo el campo de velocidades. La [[resistencia_termica_conveccion]] se incluye porque ofrece una lectura alternativa del mismo intercambio y ayuda a comprobar si el resultado tiene sentido.

## Resolución simbólica

Primero se expresa el salto térmico entre la superficie y el fluido.

{{f:diferencia_temperatura_conveccion}}

A partir de la correlación resumida por el [[numero_nusselt]], se obtiene el [[coeficiente_conveccion]].

{{f:coeficiente_conveccion_nusselt}}

Con el [[coeficiente_conveccion]], el [[area]] y la [[diferencia_temperatura]], se calcula la [[potencia_termica]].

{{f:ley_enfriamiento_newton_conveccion}}

El [[flujo_calor]] puede hallarse directamente desde la [[diferencia_temperatura]] o dividiendo la [[potencia_termica]] entre el [[area]].

{{f:flujo_calor_conveccion}}

{{f:flujo_potencia_area}}

La energía acumulada se obtiene a partir de la [[potencia_termica]] y el [[tiempo]].

{{f:calor_potencia_tiempo}}

La oposición térmica de la frontera se expresa como [[resistencia_termica_conveccion]], y permite recalcular la [[potencia_termica]] desde la misma [[diferencia_temperatura]].

{{f:resistencia_termica_conveccion}}

{{f:potencia_resistencia_conveccion}}

## Sustitución numérica

Aplicando las fórmulas del modelo con los datos anteriores:

La [[diferencia_temperatura]] entre 80 °C y 25 °C vale 55 K.

El [[coeficiente_conveccion]] se obtiene del número de Nusselt multiplicando 75 por 0,026 W m⁻¹ K⁻¹ y dividiendo entre 0,50 m, lo que da 3,9 W m⁻² K⁻¹.

Multiplicando ese [[coeficiente_conveccion]] por el [[area]] de 0,40 m² y la [[diferencia_temperatura]] de 55 K se obtiene una [[potencia_termica]] de 85,8 W.

El [[flujo_calor]] por unidad de área resulta 214,5 W m⁻², obtenido dividiendo la [[potencia_termica]] entre el [[area]] o multiplicando el [[coeficiente_conveccion]] por la [[diferencia_temperatura]].

El [[calor_transferido]] total durante el ensayo resulta de multiplicar 85,8 W por 300 s, lo que da 25 740 J.

La [[resistencia_termica_conveccion]] de la frontera se calcula como el inverso del producto del [[coeficiente_conveccion]] por el [[area]], resultando 0,641 K W⁻¹. La [[diferencia_temperatura]] dividida entre ese valor reproduce los 85,8 W de [[potencia_termica]].

## Validación dimensional

El [[coeficiente_conveccion]] tiene dimensión W m⁻² K⁻¹. Al multiplicarlo por [[area]] en m² y por [[diferencia_temperatura]] en K, queda W, que equivale a `[M L² T⁻³]`; por tanto la [[potencia_termica]] es dimensionalmente correcta.

El [[flujo_calor]] queda en W m⁻², que equivale a `[M T⁻³]`.
El [[calor_transferido]] se obtiene como W multiplicado por s, por lo que queda J, equivalente a `[M L² T⁻²]`.
La [[resistencia_termica_conveccion]] queda en K W⁻¹, y al usarla con la [[diferencia_temperatura]] se recupera W. La validación dimensional confirma que cada paso conserva el significado físico de las magnitudes.

## Interpretación física

El valor de [[potencia_termica]] indica que la placa entrega energía al aire a un ritmo moderado. No es un intercambio enorme porque el [[coeficiente_conveccion]] calculado es relativamente bajo, propio de una corriente suave o de una geometría poco favorable. Sin embargo, el [[flujo_calor]] muestra que cada metro cuadrado de placa sí sostiene una transferencia apreciable gracias a la [[diferencia_temperatura]] de 55 K.

El [[calor_transferido]] acumulado durante el [[tiempo]] del ensayo supera varias decenas de kilojulios, lo que recuerda que un ritmo térmico no demasiado grande puede producir una energía total significativa si se mantiene. La [[resistencia_termica_conveccion]] aporta la lectura inversa: la frontera aire placa todavía ofrece una oposición notable. Si se quisiera enfriar más rápido, habría que aumentar el [[coeficiente_conveccion]], aumentar el [[area]] efectiva o reducir la [[temperatura_fluido]] de entrada.

# Ejemplo de aplicación real


## Contexto

Un caso real muy común es el disipador de un pequeño módulo electrónico dentro de una caja ventilada. El chip genera [[potencia_termica]] y transmite energía hacia una placa metálica con aletas. El aire impulsado por un ventilador tiene una [[temperatura_fluido]] cercana a la del interior de la caja, mientras la base del disipador alcanza una [[temperatura_superficie]] mayor. La [[area]] efectiva no es solo la base visible: incluye las caras de las aletas bañadas por el flujo. La [[longitud_caracteristica]] puede asociarse a la altura o separación típica de las aletas, según la correlación usada. La [[conductividad_termica_fluido]] del aire y el [[numero_nusselt]] permiten estimar el [[coeficiente_conveccion]] si no se mide directamente.

## Estimación física

Supongamos [[temperatura_superficie]] de 60 °C, [[temperatura_fluido]] de 35 °C, [[area]] efectiva de 0,08 m², [[coeficiente_conveccion]] de 30 W m⁻² K⁻¹ y [[tiempo]] de 600 s. La [[diferencia_temperatura]] aproximada entre ambas temperaturas es 25 K. La [[potencia_termica]] estimada, producto del [[coeficiente_conveccion]] por el [[area]] y la [[diferencia_temperatura]], da 60 W. El [[flujo_calor]] asociado, obtenido dividiendo 60 W entre 0,08 m², resulta 750 W m⁻². En diez minutos, el [[calor_transferido]] aproximado alcanza 36 000 J. La [[resistencia_termica_conveccion]] vale alrededor de 0,42 K W⁻¹.

## Interpretación

La estimación muestra por qué las aletas y el ventilador son tan eficaces: aumentan [[area]] y [[coeficiente_conveccion]] a la vez. Si el ventilador falla, el [[numero_nusselt]] efectivo baja, el [[flujo_calor]] disminuye y la [[temperatura_superficie]] puede subir con rapidez. El cálculo no sustituye a un ensayo térmico, pero orienta el diseño antes de fabricar el prototipo.