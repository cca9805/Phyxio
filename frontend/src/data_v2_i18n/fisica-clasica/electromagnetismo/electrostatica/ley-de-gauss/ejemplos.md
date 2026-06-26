# Ejemplo tipo examen


## Enunciado

Una esfera aislante de radio 0.15 m lleva una carga total de 4.8 μC distribuida uniformemente en su volumen. Determina el campo eléctrico en un punto exterior situado a 0.25 m del centro de la esfera, el flujo eléctrico a través de la superficie gaussiana correspondiente, y el campo en un punto interior situado a 0.08 m del centro. Justifica en cada caso la elección de la superficie gaussiana y discute si el modelo de carga puntual sería equivalente para el punto exterior.

## Datos

- Radio de la esfera: 0.15 m
- Carga total: 4.8×10⁻⁶ C (distribuida uniformemente en el volumen)
- Punto exterior: distancia al centro 0.25 m (mayor que el radio)
- Punto interior: distancia al centro 0.08 m (menor que el radio)
- Permitividad del vacío [[epsilon_0]]: 8.854×10⁻¹² C²·N⁻¹·m⁻²

## Definición del sistema

El sistema es una esfera aislante con distribución de carga volumétrica uniforme. La simetría esférica de la distribución permite elegir superficies gaussianas esféricas concéntricas con la esfera cargada. Cada superficie gaussiana esférica garantiza que [[campo_electrico_gaussiano]] es constante en módulo y perpendicular a la superficie en todos sus puntos, lo que permite aplicar directamente la fórmula del campo gaussiano.

Para el punto exterior (r₁ > R): la superficie gaussiana es una esfera de radio r₁ que encierra completamente la carga Q. La carga encerrada [[carga_encerrada]] coincide con la carga total: 4.8×10⁻⁶ C.

Para el punto interior (r₂ < R): la superficie gaussiana es una esfera de radio r₂ que solo encierra la fracción de carga contenida en esa esfera. Como la distribución es uniforme, [[carga_encerrada]] es proporcional al volumen y escala con el cubo del radio relativo respecto a R.

## Modelo físico

El modelo se basa en la ley de Gauss con simetría esférica perfecta. Se aplica la fórmula que extrae [[campo_electrico_gaussiano]] de la integral de flujo:

{{f:campo_gaussiano}}

El flujo eléctrico total se obtiene de la ley de Gauss directa:

{{f:ley_gauss}}

Las hipótesis del modelo son: distribución de carga esféricamente simétrica, vacío (permitividad [[epsilon_0]]), y cargas en reposo. La simetría esférica garantiza que [[campo_electrico_gaussiano]] es constante sobre cualquier esfera concéntrica, validando la extracción del campo de la integral.

## Justificación del modelo

La distribución uniforme en el volumen tiene simetría esférica perfecta. Por esa simetría, el campo en cualquier punto a distancia r del centro solo puede apuntar radialmente y solo puede depender de r. Esta propiedad hace que el campo sea constante en módulo y perpendicular sobre cualquier esfera concéntrica, lo que justifica elegir esferas gaussianas y aplicar la fórmula del campo gaussiano.

El modelo es válido mientras la distribución sea esféricamente simétrica y las cargas estén en reposo. Dejaría de valer si la distribución fuera asimétrica (por ejemplo, carga concentrada en un hemisferio) o si el sistema no fuera electrostático.

## Resolución simbólica

**Punto exterior (r₁ > R):**

La carga encerrada es la carga total Q. El área de la superficie gaussiana esférica de radio r₁ es cuatro veces pi por el cuadrado de r₁.

Aplicando la ley de Gauss para el flujo:

{{f:ley_gauss}}

Aplicando la fórmula del campo gaussiano:

{{f:campo_gaussiano}}

El campo en el exterior crece con Q y decae con el cuadrado del área, es decir, con el cuadrado de r₁. Este comportamiento es idéntico al de una carga puntual de valor Q en el centro.

**Punto interior (r₂ < R):**

La carga encerrada es la fracción volumétrica de Q que cabe en una esfera de radio r₂. Como la densidad de carga es uniforme, la carga encerrada escala con el cubo del radio relativo.

El área de la superficie gaussiana de radio r₂ es cuatro veces pi por el cuadrado de r₂. El campo interior resultante crece linealmente con r₂ y decrece con R al cubo.

## Sustitución numérica

**Punto exterior (distancia 0.25 m):**

Dividiendo [[carga_encerrada]] entre [[epsilon_0]], el flujo resulta 4.8×10⁻⁶ / 8.854×10⁻¹². El resultado, cerca de 5.42×10⁵ N·m²·C⁻¹, es el valor de [[flujo_electrico]] para el punto exterior.

Área gaussiana exterior [[area_de_la_superficie_gaussiana]]: cuatro veces pi por 0.0625 m² da aproximadamente 0.785 m².

Campo exterior: dividiendo el flujo entre [[area_de_la_superficie_gaussiana]], el resultado es 5.42×10⁵ / 0.785, cerca de 6.91×10⁵ N/C. Ese es el valor de [[campo_electrico_gaussiano]] en el punto exterior.

Verificación alternativa: 8.988×10⁹ × 4.8×10⁻⁶ / (0.25)² da aproximadamente 6.91×10⁵ N/C. Los dos métodos coinciden, confirmando la equivalencia con la carga puntual para el exterior.

**Punto interior (distancia 0.08 m):**

Carga encerrada interior: multiplicando 4.8×10⁻⁶ por (0.08/0.15)³ (aproximadamente 0.1521) da cerca de 7.30×10⁻⁷ C. Ese es el valor de [[carga_encerrada]] para el punto interior.

Área gaussiana interior [[area_de_la_superficie_gaussiana]]: cuatro veces pi por 0.0064 m² da aproximadamente 0.0804 m².

Flujo interior: dividiendo 7.30×10⁻⁷ entre [[epsilon_0]], el resultado es cerca de 8.24×10⁴ N·m²·C⁻¹. Ese es el valor de [[flujo_electrico]] para el punto interior.

Campo interior: dividiendo el flujo entre [[area_de_la_superficie_gaussiana]] se obtiene 8.24×10⁴ / 0.0804, cerca de 1.03×10⁶ N/C. Ese es el valor de [[campo_electrico_gaussiano]] en el punto interior.

## Validación dimensional

Flujo [[flujo_electrico]]: `[I T] / [M⁻¹ L⁻³ T⁴ I²]` se reduce a `[M L³ T⁻³ I⁻¹]`, equivalente a N·m²·C⁻¹ ✓

Campo [[campo_electrico_gaussiano]]: `[I T] / ([M⁻¹ L⁻³ T⁴ I²] · [L²])` se reduce a `[M L T⁻³ I⁻¹]`, equivalente a N/C ✓

La constante [[epsilon_0]] tiene dimensión `[M⁻¹ L⁻³ T⁴ I²]`, que en el denominador compensa exactamente las dimensiones de la carga para dar el flujo correcto.

## Interpretación física

El campo exterior calculado (cerca de 6.91×10⁵ N/C) confirma el **teorema de la cáscara esférica**: una distribución esféricamente simétrica de carga produce, en el exterior, exactamente el mismo campo que si toda la carga estuviera concentrada en el centro. Esto tiene una consecuencia práctica importante: a efectos de calcular fuerzas sobre cargas exteriores, una esfera cargada se comporta como una carga puntual, independientemente de cómo esté distribuida la carga en su interior.

El campo interior calculado (cerca de 1.03×10⁶ N/C a 0.08 m del centro) es mayor que el exterior, lo que puede sorprender. Ocurre porque, aunque [[carga_encerrada]] disminuye con el cubo del radio, [[area_de_la_superficie_gaussiana]] disminuye con el cuadrado, y la tasa de decaimiento del área domina para radios pequeños dentro de la esfera, aumentando [[campo_electrico_gaussiano]]. Si aumentáramos la distancia hacia R, el campo interior se acercaría al valor en la superficie.

Si la distribución de carga fuera no uniforme —por ejemplo, carga concentrada en la superficie de la esfera—, el campo interior sería exactamente cero (conductor ideal) y el exterior igual al de una carga puntual. La comparación entre estos dos casos muestra que la distribución interior de carga sí afecta al campo dentro de la esfera, aunque no al campo exterior.

---

# Ejemplo de aplicación real


## Contexto

En el diseño de **pararrayos** y terminales de alta tensión, el campo eléctrico en los bordes y puntas de los conductores puede superar el campo de ruptura dieléctrica del aire (aproximadamente 3×10⁶ N/C). Cuando esto ocurre, el aire se ioniza y conduce corriente, lo que puede producir descargas no deseadas o, en el caso del pararrayos, la descarga controlada que protege el edificio.

La ley de Gauss aplicada a superficies gaussianas alrededor de una punta conductora esférica permite estimar el campo máximo en función del radio de curvatura de la punta y la carga acumulada. Este análisis orienta el diseño: cuanto menor es el radio de curvatura, mayor es el campo en la superficie, y más eficiente es la descarga controlada.

## Estimación física

Consideramos una punta conductora aproximada como una esfera de radio 5 mm (equivalente a 5×10⁻³ m), cargada a un potencial alto. En el diseño de pararrayos, la carga [[carga_encerrada]] acumulada antes de la descarga puede ser del orden de 1 μC.

Usando la ley de Gauss, el campo en la superficie de la esfera se estima dividiendo el flujo entre el área esférica. El área de la superficie de la esfera de radio 5 mm es cuatro veces pi por (5×10⁻³)² ≈ 3.14×10⁻⁴ m².

Dividiendo [[carga_encerrada]] entre [[epsilon_0]], el flujo es 10⁻⁶ / 8.854×10⁻¹², cerca de 1.13×10⁵ N·m²·C⁻¹. Ese es el valor de [[flujo_electrico]]. Dividiendo [[flujo_electrico]] entre el área [[area_de_la_superficie_gaussiana]] de 3.14×10⁻⁴ m², el campo resultante es cerca de 3.6×10⁸ N/C. Ese es el valor de [[campo_electrico_gaussiano]], más de cien veces el campo de ruptura del aire.

Este resultado indica que la descarga eléctrica es inevitable para esa combinación de carga y radio: el campo supera ampliamente el umbral de ionización del aire. Un radio mayor (punta más roma) requeriría más carga para alcanzar el mismo campo.

## Interpretación

El resultado pone de manifiesto por qué los pararrayos tienen puntas agudas: una punta de radio pequeño concentra el campo eléctrico de forma que la descarga se produce con menor carga acumulada y a un voltaje más bajo. Esto protege la estructura porque descarga la nube antes de que se acumule suficiente carga para una descarga mucho más energética y destructiva.

El análisis con la ley de Gauss muestra que [[campo_electrico_gaussiano]] escala inversamente con el cuadrado del radio de curvatura para la misma carga: reducir el radio a la mitad cuadruplica el campo. Esta dependencia explica por qué los bordes afilados de cualquier conductor —no solo los pararrayos— son puntos preferentes de descarga eléctrica, un principio que también se aplica al diseño de electrodos en física de plasma y en aceleradores de partículas.