const e=`## Modelo ideal

El **modelo de hilo recto infinito** es la idealización central de este leaf para el cálculo de campo magnético. En él, toda la corriente [[I]] fluye por un conductor rectilíneo de longitud infinita y sección despreciable, y el espacio circundante es vacío con permeabilidad constante. Bajo estas hipótesis, el campo magnético [[B]] en cualquier punto queda completamente determinado por [[mu_0]], [[I]] y la distancia perpendicular [[r]].

Para la interacción carga-campo se usa el **modelo de Lorentz**: la carga [[q]] es puntual, su movimiento es no relativista, y el campo [[B]] en la región donde se mueve es uniforme o varía lentamente en comparación con la escala de la trayectoria.

## Hipótesis

- **Hilo recto de longitud infinita**: la longitud del conductor es mucho mayor que la distancia de evaluación [[r]]. Si se viola esta hipótesis (hilo finito), el campo real es menor que el predicho por el modelo, especialmente cerca de los extremos.
- **Corriente estacionaria**: la corriente no varía en el tiempo. Si la corriente es alterna o pulsante, el campo magnético oscila y aparecen efectos de radiación que el modelo estático ignora.
- **Vacío o medio lineal homogéneo**: no hay materiales magnéticos que alteren la distribución del campo. En medios con permeabilidad relativa distinta de uno, el campo se amplifica o atenúa según la permeabilidad del material.
- **Velocidad no relativista**: para la fuerza de Lorentz, la rapidez [[v]] de la carga debe ser mucho menor que la velocidad de la luz. Por encima del 10% de c los efectos relativistas superan el 1%.
- **Carga puntual**: la partícula tiene tamaño despreciable frente a las escalas del campo. Para partículas extendidas o distribuciones de carga, se requiere integración.

## Dominio de validez cuantitativo

El modelo de hilo recto infinito es aplicable cuando la distancia de evaluación [[r]] cumple: r > radio del conductor y r < longitud del conductor dividida entre diez. Para un cable doméstico de 2 m de longitud, el modelo es válido para r menor de 20 cm.

Para la fuerza de Lorentz, el modelo clásico es fiable cuando la rapidez [[v]] es menor del 10% de la velocidad de la luz, es decir, v < 3×10⁷ m/s. La energía cinética clásica difiere menos del 1% de la relativista en ese régimen.

## Señales de fallo del modelo

- El campo calculado no decae con 1/r sino que se mantiene aproximadamente constante con la distancia: puede indicar que el conductor es demasiado corto o que hay efectos de solenoides o bobinas que el modelo lineal ignora.
- La fuerza magnética calculada supera el peso de la partícula en campos moderados (por ejemplo, más de 1 N sobre un electrón en 1 mT): indica un error de escala, posiblemente confusión entre unidades de carga o magnitudes.
- El radio de curvatura calculado para una partícula en el campo es comparable al tamaño de la fuente: el campo no puede considerarse uniforme en la escala de la trayectoria y el modelo de campo constante falla.

## Modelo extendido o alternativo

El **modelo de distribución continua de corriente** extiende el hilo recto al caso de geometrías arbitrarias mediante la ley de Biot-Savart: el campo total es la integral de las contribuciones de todos los elementos de corriente. Este modelo recupera el hilo recto como caso límite para conductores infinitos rectos.

El **modelo de solenoide** aplica a bobinas cilíndricas largas: en el interior produce un campo uniforme proporcional al número de espiras por unidad de longitud y a la corriente, y prácticamente nulo en el exterior. Es la base de los electroimanes y los imanes de resonancia magnética.

El **modelo relativista** combina la fuerza de Lorentz con la dinámica relativista para velocidades apreciables frente a c, usando la masa en reposo y el factor de Lorentz.

Cuando conviene pasar al modelo de Biot-Savart: cuando el conductor tiene geometría compleja (arco circular, espira, bobina finita), cuando la longitud del hilo es comparable a la distancia de evaluación, o cuando se necesita el campo dentro o muy cerca del conductor.

## Comparación operativa

| Criterio | Hilo recto infinito | Biot-Savart general |
|---|---|---|
| Complejidad | Mínima: fórmula directa | Alta: integral vectorial |
| Rango de aplicación | r << longitud del hilo | Cualquier geometría |
| Precisión en extremos del hilo | Baja | Alta |
| Herramienta recomendada | Fórmula analítica | Integración numérica o analítica por simetría |
| Señal de fallo | Campo constante inesperado con r | Integral divergente sin simetría aprovechable |
`;export{e as default};
