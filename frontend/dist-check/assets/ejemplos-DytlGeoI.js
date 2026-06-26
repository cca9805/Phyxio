const a=`# Ejemplo tipo examen

## Enunciado

Un condensador de placas planas paralelas tiene armaduras cuadradas de 15 cm de lado, separadas 2 mm. El espacio entre armaduras está relleno con un dieléctrico de constante relativa εᵣ = 5. El condensador se conecta a una fuente de 120 V hasta cargarse completamente y se desconecta.

(a) Calcula la capacidad del condensador.
(b) Calcula la carga almacenada y la energía almacenada.
(c) Si tras desconectar la fuente se retira el dieléctrico y se sustituye por aire (εᵣ ≈ 1), calcula la nueva tensión entre armaduras y la nueva energía almacenada. Explica el origen de la diferencia de energía.

## Datos

- Lado de la armadura: 15 cm (0.15 m)
- Separación: 2 mm (2×10⁻³ m)
- Permitividad relativa del dieléctrico: εᵣ = 5
- Tensión inicial: [[V]] de 120 V
- Permitividad del vacío: ε₀ = 8.854×10⁻¹² F/m

## Definición del sistema

El sistema es un condensador de placas planas paralelas con dieléctrico. Se analiza en dos estados: (1) con dieléctrico y cargado a 120 V, y (2) con el dieléctrico retirado y sin conexión a la fuente (carga constante).

## Modelo físico

Se aplica el modelo de condensador ideal de placas planas con campo uniforme. Las magnitudes centrales del problema son la capacidad [[C_plana]] (determinada por la geometría y el material), la carga almacenada [[Q]] (constante tras la desconexión), la tensión [[V]] (variable cuando cambia el dieléctrico) y la energía almacenada [[E_cap]] (que cambia porque cambia C con V constante Q).

## Justificación del modelo

El modelo de condensador ideal con campo uniforme es válido porque la separación (2 mm) es mucho menor que el lado de la placa (150 mm); el cociente separación/lado es aproximadamente 0.013, lo que cumple ampliamente la condición de campo uniforme. El dieléctrico es lineal e isotrópico para εᵣ constante, sin pérdidas. El modelo dejaría de ser válido si la separación fuera comparable al tamaño de las placas, si el campo superara el límite de ruptura del dieléctrico, o si se operara a frecuencias lo suficientemente altas como para que la inductancia parásita fuera relevante.

## Resolución simbólica

**Apartado (a):** La capacidad con dieléctrico se calcula con la fórmula del condensador plano:

{{f:capacidad_plana}}

donde [[epsilon]] es el producto de ε₀ por εᵣ, el área A es el cuadrado del lado y d es la separación.

**Apartado (b):** Con [[C_plana]] conocida y la tensión [[V]] aplicada, la carga almacenada y la energía son:

{{f:capacidad_definicion}}

{{f:energia_condensador}}

**Apartado (c):** Tras desconectar la fuente y retirar el dieléctrico, la carga [[Q]] permanece constante (no puede fluir). La nueva capacidad con aire es [[C_plana]] dividida por εᵣ. La nueva tensión se obtiene dividiendo [[Q]] entre la nueva [[C_plana]]; la nueva energía se recalcula con la nueva [[C_plana]] y la nueva [[V]].

## Sustitución numérica

**Apartado (a):**

El área de las armaduras es A = (0.15)² = 0.0225 m². La permitividad del dieléctrico es ε = ε₀·εᵣ = 8.854×10⁻¹²·5 = 4.427×10⁻¹¹ F/m.

Aplicando la fórmula del condensador plano, multiplicar ε por A y dividir por d da: (4.427×10⁻¹¹ × 0.0225) / (2×10⁻³) = 9.96×10⁻¹³ / 2×10⁻³ ≈ 4.98×10⁻¹⁰ F. Por tanto [[C_plana]] ≈ 498 pF.

**Apartado (b):**

Aplicando la definición de capacidad, multiplicar [[C_plana]] por los 120 V de [[V]]: 4.98×10⁻¹⁰ × 120 da aproximadamente 5.97×10⁻⁸ C. Por tanto [[Q]] ≈ 59.7 nC.

Para la energía, aplicar la fórmula de energía almacenada: (1/2) × 4.98×10⁻¹⁰ × (120)² = (1/2) × 4.98×10⁻¹⁰ × 14400 ≈ 3.58×10⁻⁶ J. Por tanto [[E_cap]] ≈ 3.58 µJ.

**Apartado (c):**

Con aire, la nueva [[C_plana]] se obtiene dividiendo 4.98×10⁻¹⁰ F entre 5, lo que da aproximadamente 9.96×10⁻¹¹ F (≈ 99.6 pF). Como [[Q]] se mantiene en 59.7 nC, la nueva tensión se obtiene dividiendo [[Q]] entre la nueva [[C_plana]]: 5.97×10⁻⁸ / 9.96×10⁻¹¹ ≈ 599 V, es decir εᵣ veces mayor.

La nueva energía es (1/2) × 9.96×10⁻¹¹ × (599)² = (1/2) × 9.96×10⁻¹¹ × 3.59×10⁵ ≈ 1.787×10⁻⁵ J. Por tanto la nueva [[E_cap]] ≈ 17.87 µJ, exactamente εᵣ veces mayor (un factor 5) que antes.

## Validación dimensional

- Capacidad: \`[ε]·[A]/[d]\` → \`[F m⁻¹]·[m²]·[m⁻¹]\` → \`[F]\` ✓
- Carga: \`[C]·[V]\` → \`[F]·[V]\` → \`[C V⁻¹]·[V]\` → \`[C]\` ✓
- Energía: \`[F]·[V]²\` → \`[C V⁻¹]·[V²]\` → \`[C·V]\` → \`[J]\` ✓
- Dimensiones SI: capacidad \`[M⁻¹ L⁻² T⁴ I²]\`, carga \`[T I]\`, energía \`[M L² T⁻²]\` ✓

## Interpretación física

El resultado del apartado (c) ilustra uno de los fenómenos más pedagógicamente ricos del condensador: **retirar un dieléctrico con la fuente desconectada aumenta la energía almacenada**. La energía inicial con dieléctrico era [[E_cap]] ≈ 3.58 µJ; tras retirar el dieléctrico sube a 17.87 µJ, multiplicándose por εᵣ = 5. ¿De dónde viene esta energía extra? La respuesta es que proviene del **trabajo mecánico realizado al extraer el dieléctrico**: el campo eléctrico, que tiene polarizado el dieléctrico, se opone a la extracción del material y hay que hacer trabajo para separarlo de las armaduras. Ese trabajo se convierte en energía eléctrica adicional almacenada en el campo.

La situación inversa es igualmente instructiva: si la fuente permaneciera conectada durante la extracción, la tensión [[V]] quedaría fija en 120 V, la capacidad caería a 99.6 pF y la carga disminuiría de 59.7 nC a 11.95 nC. La energía pasaría de 3.58 µJ a solo 0.716 µJ, una reducción. En este caso, el trabajo de extraer el dieléctrico se suma a la energía devuelta a la fuente y no aparece como incremento de [[E_cap]].

La dependencia de la energía con el cuadrado de la tensión explica por qué la tensión final de 599 V con aire produce 5 veces más energía que 120 V con dieléctrico, aunque la carga es la misma: la tensión se multiplicó por εᵣ y la energía proporcional a V² se multiplicó por εᵣ².

# Ejemplo de aplicación real

## Contexto

Los flashes de las cámaras fotográficas utilizan condensadores electrolíticos para almacenar la energía necesaria para el destello. Un flash típico requiere un destello de unos 100 J en un tiempo de unos 1 ms. El condensador se carga lentamente desde las pilas (proceso que puede durar varios segundos) y libera toda su energía de golpe en la fracción de milisegundo que dura el destello.

Se quiere estimar la capacidad del condensador y la tensión de carga necesaria para un flash de 80 J con un condensador que opera a 300 V.

## Estimación física

La energía a almacenar es [[E_cap]] de 80 J y la tensión de trabajo [[V]] es 300 V. Despejando [[C]] de la fórmula de [[E_cap]] (multiplicar 2 por 80 J y dividir por el cuadrado de 300 V, es decir 90 000 V²) da aproximadamente 1.78×10⁻³ F, es decir [[C]] ≈ 1780 µF.

Este valor es completamente coherente con los condensadores electrolíticos que se encuentran en los flashes reales de cámaras profesionales, que típicamente están en el rango de 1000–4700 µF a 300–400 V. La carga almacenada en ese condensador sería [[Q]] de aproximadamente 0.534 C (producto de [[C]] por [[V]]).

La corriente media de descarga durante el milisegundo del destello es del orden de [[Q]] dividida entre el tiempo: 0.534 C dividido entre 10⁻³ s da aproximadamente 534 A, una corriente enorme pero brevísima. La potencia pico es [[E_cap]] dividida entre el tiempo: 80 J entre 10⁻³ s da 80 kW.

## Interpretación

Este ejemplo pone de manifiesto la ventaja singular del condensador frente a las baterías para aplicaciones de **alta potencia pico**: las pilas de la cámara (típicamente AA de 1.5 V y 2500 mAh) no pueden suministrar 80 kW durante un milisegundo —su resistencia interna y su química lo impiden. En cambio, pueden cargar lentamente el condensador durante varios segundos a una corriente de unos 100 mA, y el condensador actúa como un «almacén de energía de alta potencia» que libera todo de golpe cuando se necesita.

La fórmula de energía almacenada muestra que, a capacidad [[C]] fija, la forma más eficiente de aumentar [[E_cap]] es aumentar [[V]]. Duplicar la tensión de 300 V a 600 V cuadruplicaría la energía almacenada para la misma capacidad de 1780 µF. Sin embargo, los condensadores electrolíticos de alta tensión son más grandes, caros y sensibles, lo que explica por qué los diseñadores de cámaras buscan compromisos entre [[C]] y [[V]] dependiendo del tamaño del equipo.
`;export{a as default};
