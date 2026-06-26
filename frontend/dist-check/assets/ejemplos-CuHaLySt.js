const e=`# Ejemplo tipo examen

## Enunciado

Una barra cilíndrica de aluminio 6061-T6 de 3 metros de longitud y 10 mm de diámetro está sujeta por un extremo. Se golpea el extremo libre con un martillo, generando un pulso longitudinal. Datos del material: módulo de Young 69 GPa, densidad 2700 kg/m³. Determinar: (a) la velocidad de la onda longitudinal, (b) el tiempo que tarda el pulso en llegar al extremo fijo, (c) la longitud de onda si la frecuencia dominante del impacto es 5 kHz.

Datos del aluminio 6061-T6: módulo de Young 69 GPa (69 × 10⁹ Pa), densidad 2700 kg/m³.

## Datos

- [[E_young]] (aluminio) = 69 × 10⁹ Pa
- [[rho]] (aluminio) = 2700 kg/m³
- Longitud de la barra: 3 m
- Diámetro: 10 mm (0.010 m)
- [[f]] dominante del impacto: 5000 Hz

## Definición del sistema

El sistema es una barra cilíndrica delgada de aluminio con un extremo libre y otro fijo. La onda se genera en el extremo libre por impacto mecánico y se propaga longitudinalmente hacia el extremo fijo. Se asume que el diámetro es mucho menor que la longitud de onda, validando el modelo de onda plana unidimensional.

## Modelo físico

Se aplica el modelo de velocidad de onda longitudinal en barra delgada: [[v_fase]] depende de [[E_young]] y [[rho]]. La condición de barra delgada se cumple porque el diámetro (10 mm) es mucho menor que la longitud de onda esperada. Para el tiempo de tránsito se divide la longitud entre la velocidad. Para la longitud de onda se usa la relación de dispersión fundamental.

## Justificación del modelo

El modelo es válido porque el diámetro de la barra (10 mm) es muy inferior a la longitud de onda esperada. A 5 kHz, la longitud de onda será del orden de un metro, más de 100 veces el diámetro. El criterio de barra delgada se satisface con amplio margen. El aluminio 6061-T6 es un material isótropo y linealmente elástico en el régimen de deformaciones pequeñas producidas por un impacto ordinario.

## Resolución simbólica

Velocidad de onda longitudinal en barra delgada:

{{f:velocidad_longitudinal_barra}}

Tiempo de tránsito: el tiempo es la distancia dividida entre la velocidad.

Longitud de onda con la relación de dispersión:

{{f:relacion_dispersion}}

## Sustitución numérica

(a) Velocidad longitudinal:

[[v_fase]] = √([[E_young]] / [[rho]]) = √(69 × 10⁹ / 2700) = √(25.56 × 10⁶) ≈ 5055 m/s

(b) Tiempo de tránsito:

Tiempo = longitud / [[v_fase]] = 3 / 5055 ≈ 5.93 × 10⁻⁴ s ≈ 0.593 ms

(c) Longitud de onda:

[[lambda]] = [[v_fase]] / [[f]] = 5055 / 5000 ≈ 1.011 m

## Validación dimensional

[[v_fase]]: √(Pa / (kg/m³)) = √((kg/(m·s²)) / (kg/m³)) = √(m²/s²) = m/s ✓

Tiempo: m / (m/s) = s ✓

[[lambda]]: (m/s) / (1/s) = m ✓

## Interpretación física

La velocidad de 5055 m/s es coherente con los valores tabulados para aluminio (entre 5000 y 5200 m/s para barras delgadas). El pulso tarda menos de un milisegundo en recorrer los 3 metros de la barra, lo que muestra la gran rapidez de propagación en metales. La longitud de onda de aproximadamente un metro confirma que el modelo de barra delgada es válido: la longitud de onda es 100 veces mayor que el diámetro.

Si se quisiera trabajar con ondas transversales en el mismo aluminio, se usaría [[G_mod]] (unos 26 GPa) en lugar de [[E_young]], obteniendo una velocidad menor de unos 3100 m/s. Esto significa que un receptor colocado en el extremo fijo detectaría primero la llegada longitudinal y aproximadamente 0.35 ms después la llegada transversal. Esta separación temporal es la base de técnicas de localización de fuentes por diferencia de tiempos de llegada.

La coherencia del resultado se confirma también por el orden de magnitud: los metales ligeros como el aluminio tienen velocidades longitudinales en el rango de 5000 a 6500 m/s, mientras que los polímeros rígidos están entre 1500 y 2700 m/s.

# Ejemplo de aplicación real

## Contexto

En una planta de fabricación aeronáutica se recibe un lote de barras de aluminio 6061-T6 que deben verificarse antes de su uso como refuerzos estructurales. Se utiliza un equipo ultrasónico de pulso-eco para medir la velocidad longitudinal en cada barra y compararla con el valor de referencia del material certificado.

## Estimación física

Como estimación de orden de magnitud, la velocidad medida sería aproximadamente de 5050 a 5150 m/s debido a variaciones en la composición exacta de la aleación, el tratamiento térmico y la textura cristalográfica. La dispersión entre muestras del mismo lote raramente supera el 2%. Si alguna barra da una velocidad inferior a 4800 m/s, podría indicar porosidad interna, inclusiones o un tratamiento térmico defectuoso. En inspección industrial, estas barras se examinarían con transductores de 1 a 10 MHz, donde las longitudes de onda serían de 0.5 a 5 mm, ya en el límite del modelo de barra delgada para diámetros de 10 mm.

## Interpretación

La medida de velocidad ultrasónica actúa como un control de calidad rápido y no destructivo. Una velocidad dentro del rango esperado confirma que las propiedades elásticas del material son correctas. Desviaciones significativas señalan posibles defectos microestructurales que requerirían inspección adicional por otros métodos. Este es uno de los usos industriales más directos de los conceptos de velocidad de onda en sólidos presentados en este leaf.
`;export{e as default};
