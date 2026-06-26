const e=`# Contexto histórico del principio

## Problema histórico

Desde la antigüedad, los filósofos intentaron cuantificar el "movimiento" de los cuerpos. El problema central era predecir qué ocurriría después de un choque: si dos carros colisionaban, ¿con qué [[velocidad_individual]] quedarían? Descartes (1644) propuso que Dios conservaba una cantidad constante de "movimiento" en el universo, definida como el producto de la [[masa_individual]] por la rapidez escalar. Aunque intuitivamente atractiva, esta idea fallaba en choques angulares: la misma cantidad escalar de movimiento podía generarse a partir de velocidades muy diferentes orientadas en distintas direcciones, produciendo predicciones contradictorias para colisiones oblicuas.

## Dificultad conceptual previa

El obstáculo fundamental era la confusión entre magnitud escalar y vectorial. Leibniz, contemporáneo de Newton, argumentó que la cantidad conservada debía ser la *vis viva* (energía cinética), no el momento. El debate se prolongó décadas porque ambas cantidades se conservan en choques elásticos. La dificultad conceptual radicaba en que para colisiones inelásticas la energía cinética se pierde parcialmente, pero el [[momento_lineal_total]] se conserva siempre, siempre que la [[fuerza_externa_neta]] sea nula. Sin una definición vectorial clara de [[momento_lineal_individual]], era imposible distinguir cuándo aplicar una ley u otra.

## Qué cambió

Newton (1687) formalizó el [[momento_lineal_individual]] como una cantidad vectorial en sus *Principia Mathematica* y enunció su segunda ley: la [[fuerza_externa_neta]] es igual a la tasa de cambio del [[momento_lineal_total]]. Esto implicó automáticamente que en ausencia de fuerzas externas, la [[variacion_momento_lineal]] es nula. Newton también estableció la tercera ley: las fuerzas internas actúan en pares iguales y opuestos, de modo que no alteran el [[momento_lineal_total]] del sistema. El cambio conceptual fue decisivo: pasar de "cantidad de movimiento" escalar a momento vectorial con orientación definida permitió resolver todos los casos que la mecánica de Descartes no podía abordar.

## Impacto en la física

La conservación del [[momento_lineal_total]] resolvió problemas imposibles para la mecánica anterior: el retroceso de armas de fuego, la propulsión de cohetes, las colisiones nucleares y la formación de sistemas estelares. En el siglo XX, Emmy Noether demostró que esta ley es la consecuencia directa de la simetría de traslación del espacio: las leyes físicas no cambian al desplazar todo el sistema en el espacio. Este descubrimiento elevó la conservación del [[momento_lineal_total]] al rango de principio fundamental que va más allá de la mecánica clásica, unificando la física clásica, relativista y cuántica bajo un mismo principio de simetría.

## Conexión con física moderna

En mecánica cuántica, el momento lineal sigue siendo conservado, aunque su medición está sujeta al principio de incertidumbre de Heisenberg: no es posible conocer simultáneamente con precisión el momento y la posición. El [[momento_lineal_individual]] cuántico es un operador que conmuta con el Hamiltoniano cuando el sistema es espacialmente simétrico. En mecánica relativista, la definición se extiende a p = γmv para mantener la conservación a toda velocidad. En física de partículas, la detección del "momento faltante" en los detectores, es decir, una [[variacion_momento_lineal]] inesperada, fue el método que permitió confirmar la existencia del neutrino y sigue siendo clave para buscar física más allá del modelo estándar.
`;export{e as default};
