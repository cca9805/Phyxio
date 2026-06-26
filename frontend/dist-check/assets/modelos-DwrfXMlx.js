const e=`# Modelos físicos: colisiones elásticas

## Modelo ideal

El modelo ideal de colisiones elásticas supone que la interacción entre dos masas, [[m1]] y [[m2]], es puramente conservativa. En este nivel, se eliminan todos los detalles secundarios del material (como la fricción interna o la plasticidad) y del entorno (como el rozamiento del aire). El choque se trata como un evento instantáneo donde solo actúan fuerzas internas impulsivas. La estructura imprescindible del modelo es la conservación simultánea del momento lineal [[p]] y la energía cinética total [[K]]. Este modelo es una abstracción valiosa porque describe el límite superior de eficiencia mecánica y permite obtener una solución única para las velocidades finales [[v1f]] y [[v2f]] sin introducir parámetros empíricos complejos.

## Hipótesis

Las hipótesis fundamentales de este modelo son:
1. **Cuerpos puntuales o rígidos**: Se ignora la rotación y la estructura interna de las masas [[m1]] y [[m2]].
2. **Sistema aislado**: No hay fuerzas externas netas significativas durante el intervalo del impacto.
3. **Elasticidad perfecta**: El coeficiente de restitución [[e]] es exactamente 1.0.
4. **Unidimensionalidad**: El choque ocurre estrictamente a lo largo de una línea recta (colisión frontal o "head-on").

## Dominio de validez cuantitativo

El dominio de validez del modelo elástico debe verificarse mediante umbrales cuantitativos. Como regla mínima, para que el modelo sea aplicable con un error menor al 1 por ciento (orden de magnitud de 0.01), los materiales deben poseer un módulo de elasticidad alto y una baja histéresis. En términos de velocidad, el modelo es fiable para velocidades de impacto muy por debajo de la velocidad del sonido en el material (aproximadamente 5000 m/s en acero), evitando así regímenes de choque destructivo donde se rompe la red cristalina. Si la pérdida de energía calculada mediante [[DeltaK]] supera el 1-2 por ciento del presupuesto inicial [[Ki]], el modelo elástico deja de ser una descripción fiel y debe considerarse inelástico.

## Señales de fallo del modelo

Las señales de fallo del modelo elástico no empiezan en la calculadora, sino en la observación física. Si tras el choque los cuerpos quedan unidos o se mueven con la misma velocidad, el modelo ha fallado catastróficamente (choque totalmente inelástico). Otra señal de fallo es la detección de un aumento de temperatura en el punto de contacto, lo que indica que parte de la energía inicial [[Ki]] se ha degradado a calor, violando la premisa de que [[DeltaK]] = 0. En términos de datos, si el cálculo de velocidades finales [[v1f]] o [[v2f]] contradice la relación de velocidades relativas, existe una inconsistencia fundamental en la aplicación de las leyes de conservación.

## Modelo extendido o alternativo

El modelo extendido introduce correcciones cuando la elasticidad no es perfecta o el choque no es puramente 1D. El refinamiento más común es el modelo de **Colisión Parcialmente Inelástica**, que introduce el coeficiente de restitución [[e]] como un valor real entre 0 y 1. Otro modelo alternativo es la **Colisión 2D**, donde se consideran ángulos de dispersión y se descompone el momento en componentes vectoriales. El objetivo de estas extensiones no es añadir ruido algebraico, sino capturar la disipación energética real que ocurre en sistemas macroscópicos donde la fricción interna y la deformación plástica no son despreciables.

Cuando conviene pasar al modelo extendido: si las hipótesis de conservación total de energía se rompen debido a la deformación plástica o si el impacto no es frontal, la transición al modelo de coeficiente de restitución o al modelo bidimensional es necesaria para mantener la precisión predictiva.

## Comparación operativa

La comparación entre el modelo elástico ideal y los modelos inelásticos es el paso que evita aplicar por costumbre ecuaciones que no corresponden al escenario real. Mientras que el modelo elástico maximiza el rebote y la transferencia de energía [[T_fraction]], el modelo inelástico predice estados finales donde los cuerpos tienden a moverse juntos con una pérdida neta de energía. La mejor elección es el modelo elástico cuando trabajamos con partículas elementales, gases ideales o materiales muy rígidos, mientras que para materiales deformables (como arcilla o metales blandos) la descripción inelástica es operativa y físicamente superior.
`;export{e as default};
