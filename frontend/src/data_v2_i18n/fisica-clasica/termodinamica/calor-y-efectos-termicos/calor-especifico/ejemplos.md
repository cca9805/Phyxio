# Ejemplo tipo examen

## Enunciado

En un experimento de calorimetría se introduce un trozo de metal desconocido de 120 g, calentado previamente hasta 95 °C en un baño de agua hirviente, dentro de un calorímetro que contiene 200 g de agua a 22 °C. La temperatura de equilibrio de la mezcla es 27.4 °C. Determinar el calor específico del metal desconocido, despreciando el calor absorbido por el propio calorímetro.

## Datos

- Masa del metal: 0.120 kg
- Temperatura inicial del metal: 95 °C
- Masa del agua: 0.200 kg
- Temperatura inicial del agua: 22 °C
- Temperatura de equilibrio: 27.4 °C
- Calor específico del agua: 4186 J/(kg·K)

## Definición del sistema

El sistema es el conjunto metal + agua dentro del calorímetro ideal. La variable a determinar es [[c]] del metal desconocido. El principio de conservación de energía establece que el calor cedido por el metal al enfriarse es igual en módulo al calor absorbido por el agua al calentarse, con signos opuestos.

## Modelo físico

El proceso completo es de calor sensible: no hay cambio de estado ni en el metal ni en el agua. El metal cede calor al pasar de 95 °C a 27.4 °C y el agua lo absorbe al pasar de 22 °C a 27.4 °C. El calor específico del metal [[c]] se obtiene de la condición de equilibrio energético del sistema aislado.

## Justificación del modelo

El modelo de calor sensible con [[c]] constante es válido porque el rango de temperatura del metal (27.4 °C a 95 °C, es decir 67.6 K) y del agua (22 °C a 27.4 °C, es decir 5.4 K) son moderados y no incluyen transiciones de fase de ninguno de los dos materiales. Se desprecia el calor absorbido por el calorímetro por hipótesis del enunciado. La condición de aislamiento térmico del calorímetro ideal justifica que la suma de calores del sistema sea cero.

## Resolución simbólica

Aplicando el principio de conservación de energía al sistema aislado: el calor cedido por el metal más el calor absorbido por el agua es igual a cero. El calor de cada material sigue la fórmula de calor sensible:

{{f:definicion_c}}

Para comparar la inercia térmica de cada cuerpo se usa también la capacidad calorífica total:

{{f:capacidad_calorifica_total}}

La condición de equilibrio es: [[m]] del metal · [[c]] del metal · [[DeltaT]] del metal + [[m]] del agua · [[c]] del agua · [[DeltaT]] del agua es igual a cero. Despejando [[c]] del metal:

[[c]] del metal es igual al cociente entre el módulo del calor absorbido por el agua y el producto de la masa del metal por el módulo del [[DeltaT]] del metal.

## Sustitución numérica

Primero se calculan las variaciones de temperatura:

[[DeltaT]] del metal: temperatura de equilibrio menos temperatura inicial del metal, es decir 27.4 − 95, que resulta −67.6 K (el metal se enfría).

[[DeltaT]] del agua: temperatura de equilibrio menos temperatura inicial del agua, es decir 27.4 − 22, que resulta 5.4 K (el agua se calienta).

Calor absorbido por el agua: 0.200 × 4186 × 5.4. El producto 0.200 × 4186 es 837.2; multiplicado por 5.4 resulta aproximadamente 4521 J.

Calor cedido por el metal: −4521 J (por conservación de energía, en módulo es el mismo).

Calor específico del metal: 4521 dividido entre (0.120 × 67.6). El producto 0.120 × 67.6 es 8.112. El cociente 4521 / 8.112 resulta aproximadamente 557 J/(kg·K).

## Validación dimensional

El numerador tiene unidades de [masa] · [c_agua] · [temperatura], es decir kg · J/(kg·K) · K, que simplifica a J. El denominador tiene unidades de [masa] · [temperatura], es decir kg · K. El cociente J / (kg · K) resulta en J/(kg·K), que es la unidad correcta de [[c]].

## Interpretación física

El resultado de aproximadamente 557 J/(kg·K) sitúa al metal entre el hierro (450 J/(kg·K)) y el aluminio (900 J/(kg·K)). Comparando con la tabla de calores específicos, el valor es compatible con el níquel (444 J/(kg·K)), el hierro (450 J/(kg·K)) o materiales intermedios como el acero inoxidable (490–510 J/(kg·K)). Dado que el valor experimental puede tener una incertidumbre del 5–10 % por las pérdidas del calorímetro despreciadas, el material podría ser hierro o acero.

El hecho de que [[c]] del metal sea muy inferior al del agua (557 frente a 4186 J/(kg·K)) explica por qué la temperatura de equilibrio queda mucho más próxima a la del agua que a la del metal: aunque el metal partía de 95 °C y el agua de 22 °C, la temperatura final de 27.4 °C está a solo 5.4 K del agua y a 67.6 K del metal. El agua tiene mayor capacidad calorífica total ([[C_total]] del agua = 0.200 × 4186 ≈ 837 J/K; [[C_total]] del metal = 0.120 × 557 ≈ 67 J/K): la inercia térmica del agua domina ampliamente la mezcla.

---

# Ejemplo de aplicación real

## Contexto

Un ingeniero de materiales debe seleccionar el material más adecuado para fabricar el núcleo de un acumulador térmico de bajo coste destinado a una instalación de energía solar. El acumulador debe almacenar la máxima energía posible en un volumen fijo de 0.5 m³, calentándose de 50 °C a 300 °C con el excedente solar. Se comparan tres materiales: agua líquida (solo viable hasta 100 °C a presión atmosférica), hormigón ([[c]] ≈ 880 J/(kg·K), densidad ≈ 2200 kg/m³) y hierro fundido ([[c]] ≈ 450 J/(kg·K), densidad ≈ 7000 kg/m³).

## Estimación física

Para cada material se calcula la energía almacenada como producto de [[C_total]] por [[DeltaT]] utilizable, donde [[C_total]] es la capacidad calorífica total del volumen dado y [[DeltaT]] es el rango de temperatura útil.

{{f:capacidad_calorifica_total}}

Hormigón: masa = 2200 × 0.5 = 1100 kg. [[C_total]] = 1100 × 880 = 968 000 J/K. [[DeltaT]] útil = 250 K (de 50 °C a 300 °C). Energía almacenada = 968 000 × 250 = 242 000 000 J, equivalentes a 242 MJ.

Hierro fundido: masa = 7000 × 0.5 = 3500 kg. [[C_total]] = 3500 × 450 = 1 575 000 J/K. [[DeltaT]] útil = 250 K. Energía almacenada = 1 575 000 × 250 = 393 750 000 J, equivalentes a aproximadamente 394 MJ.

La comparación muestra que el hierro fundido almacena un 63 % más de energía que el hormigón en el mismo volumen, a pesar de tener un [[c]] menor (450 frente a 880 J/(kg·K)), porque su densidad es mucho mayor (7000 frente a 2200 kg/m³). La magnitud determinante no es solo [[c]] sino el producto densidad · [[c]], que equivale a la capacidad calorífica volumétrica. Para el hormigón este producto es 2200 × 880 ≈ 1 936 000 J/(m³·K); para el hierro fundido es 7000 × 450 ≈ 3 150 000 J/(m³·K).

## Interpretación

Este ejemplo ilustra que en aplicaciones de ingeniería donde el volumen es la restricción (no la masa), la propiedad relevante es la capacidad calorífica volumétrica (densidad × [[c]]), no [[c]] solo. El hierro fundido gana la comparación por su alta densidad a pesar de su menor calor específico másico. Si la restricción fuera la masa transportada (por ejemplo, en un vehículo), el criterio sería la capacidad calorífica másica ([[C_total]] por kg) y el resultado podría ser distinto. La selección correcta del material depende de identificar qué magnitud es la restricción operativa del diseño.
