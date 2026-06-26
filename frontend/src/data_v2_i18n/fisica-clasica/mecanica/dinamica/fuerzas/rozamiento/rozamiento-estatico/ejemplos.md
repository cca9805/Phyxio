# Ejemplo tipo examen

## Enunciado

Una caja se apoya sobre una plataforma horizontal y es empujada mediante una cuerda. Durante la fase estudiada no se observa deslizamiento entre caja y plataforma. El problema consiste en decidir si el contacto puede seguir sosteniendo el reposo relativo, estimar el valor de la fuerza de rozamiento estático que realmente actúa y determinar en qué condición empezaría el deslizamiento.

## Datos

- Fuerza normal medida: [[N]] = 200 N.
- Coeficiente de rozamiento estático del par de superficies: [[mus]] = 0.40.
- Demanda tangencial aplicada por la cuerda en el primer ensayo: [[Ft]] = 50 N.
- Demanda tangencial en un segundo ensayo más exigente: [[Ft]] = 90 N.

## Definición del sistema

El sistema es la caja con las fuerzas externas proyectadas sobre el plano de contacto. En dirección tangencial aparece la demanda [[Ft]], que intenta mover la caja, y la fuerza de rozamiento estático [[fs]], que se ajusta para impedir el deslizamiento. La normal [[N]] fija la escala del contacto y, junto con [[mus]], determina el máximo valor sostenible por el régimen estático, [[fsmax]].

## Modelo físico

Se utiliza el modelo de rozamiento estático con coeficiente efectivo constante en el rango de operación. El punto central no es asignar automáticamente un valor fijo a [[fs]], sino comparar la demanda [[Ft]] con el techo de adherencia [[fsmax]]. Mientras [[Ft]] no supere ese umbral, el contacto puede permanecer sin deslizamiento y [[fs]] adopta exactamente el valor necesario para equilibrar la exigencia tangencial.

## Justificación del modelo

La plataforma fue diseñada para contacto seco, deformaciones pequeñas y cargas moderadas. En esas condiciones, el modelo de umbral estático es suficiente para decidir si el sistema conserva adherencia. El problema exige distinguir con precisión tres niveles: el valor real de [[fs]], el valor máximo [[fsmax]] que el contacto podría entregar, y la condición de transición al deslizamiento cuando la demanda supera la capacidad del régimen estático.

## Resolución simbólica

Condición de ajuste estático:

{{f:condicion_estatica}}

Umbral máximo de rozamiento estático:

{{f:umbral_estatico}}

Criterio de inicio de deslizamiento:

{{f:criterio_deslizamiento}}

Lectura física del sistema: [[fs]] no toma siempre el máximo. Se ajusta a [[Ft]] mientras el contacto mantenga adherencia. El valor [[fsmax]] actúa como frontera de régimen, no como fuerza obligatoria en todo problema.

## Sustitución numérica

1. Cálculo del umbral estático:

Con [[mus]] = 0.40 y [[N]] = 200 N, el valor máximo sostenible por el contacto es [[fsmax]] = 80 N.

2. Primer ensayo:

La demanda tangencial es [[Ft]] = 50 N. Como 50 N está por debajo del umbral de 80 N, el contacto permanece en régimen estático y la fuerza real de rozamiento es [[fs]] = 50 N.

3. Segundo ensayo:

La demanda tangencial sube a [[Ft]] = 90 N. En este caso, la demanda supera el umbral estático. El modelo indica que el contacto ya no puede sostener reposo relativo y se alcanza la condición de inicio de deslizamiento.

4. Comparación entre escenarios:

El cambio decisivo no está en que la superficie “genere más fuerza” sin límite, sino en que existe una frontera cuantitativa muy clara. Debajo de 80 N el sistema sigue adherido; por encima de 80 N el régimen estático deja de ser válido.

## Validación dimensional

La relación del umbral conserva coherencia de unidades: un coeficiente adimensional multiplicado por una fuerza normal en newtons produce una fuerza en newtons. Las condiciones de ajuste y deslizamiento comparan magnitudes de la misma dimensión, lo que hace físicamente consistente la decisión de régimen.

También hay una validación conceptual importante: el valor real [[fs]] del primer caso es menor que [[fsmax]], lo cual es exactamente lo que debe ocurrir cuando el sistema se mantiene adherido sin estar al borde del deslizamiento.

## Interpretación física

Este resultado revela la diferencia esencial entre rozamiento estático y una fuerza “de catálogo”. El contacto no entrega siempre el máximo; responde de manera adaptativa a la demanda. Mientras la exigencia tangencial permanezca dentro de la capacidad del sistema, [[fs]] iguala a [[Ft]] y preserva el reposo relativo. El máximo [[fsmax]] solo aparece como frontera de validez del régimen.

Desde el punto de vista de diseño, aumentar [[mus]] o [[N]] eleva la capacidad de adherencia y amplía el rango de demandas sostenibles sin movimiento relativo. Desde el punto de vista experimental, observar cuándo [[Ft]] supera a [[fsmax]] permite detectar con claridad la transición entre adherencia y deslizamiento. Esa lectura causal es el corazón del leaf.

# Ejemplo de aplicación real

## Contexto

En una línea de ensamblaje, bandejas cargadas esperan en una mesa inclinable antes de entrar a una estación automática. El equipo de proceso necesita asegurar que las bandejas no se deslicen durante cambios de inclinación suaves ni durante pequeñas vibraciones del entorno. Si el contacto pierde adherencia antes de tiempo, se generan atascos y desalineaciones aguas abajo.

## Estimación física

El equipo mide primero la fuerza normal efectiva de una bandeja típica y estima [[mus]] para el revestimiento actual. Con esos datos calcula [[fsmax]] y lo compara con la demanda tangencial máxima esperable durante el arranque del sistema. En una prueba de referencia, [[N]] es del orden de 150 N y el coeficiente estático ronda 0.45, lo que produce un umbral cercano a 67.5 N. Las vibraciones y la inclinación combinadas generan una [[Ft]] estimada de unos 40 N, de modo que la bandeja conserva adherencia con margen suficiente.

Cuando el equipo ensaya un nuevo recubrimiento más barato, el coeficiente cae a aproximadamente 0.25. Con la misma normal, el umbral baja a un orden de 37.5 N y queda por debajo de la demanda tangencial prevista. Esa comparación cuantitativa muestra que el sistema ya no es robusto frente a perturbaciones normales de operación.

## Interpretación

La decisión técnica no se toma mirando solo el costo del material, sino comparando la demanda [[Ft]] con la capacidad [[fsmax]] del contacto. El recubrimiento inicial mantiene un margen estático razonable; el alternativo queda demasiado cerca o incluso por debajo de la exigencia operativa. La lectura física es directa: no basta con saber que existe rozamiento, hay que cuantificar si el régimen estático todavía puede sostener la adherencia sin cruzar el umbral de deslizamiento.
