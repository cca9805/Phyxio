const e=`# Ejemplo tipo examen

## Enunciado

Dos esferas metálicas pequeñas se encuentran en el vacío separadas por una distancia de 0.12 m entre sus centros. La primera esfera porta una carga de 4.0 µC y la segunda porta una carga de −6.0 µC. Determina la fuerza eléctrica que ejerce la primera esfera sobre la segunda, indicando su módulo, su dirección y su sentido. A continuación, calcula la intensidad del campo eléctrico que crea la primera esfera en el punto donde se encuentra la segunda.

## Datos

- Distancia entre centros: 0.12 m
- Primera carga: 4.0 µC (positiva)
- Segunda carga: 6.0 µC (negativa, de signo contrario a la primera)
- Constante de Coulomb: 8.988×10⁹ N·m²·C⁻²
- Medio: vacío

## Definición del sistema

El sistema está compuesto por las dos esferas tratadas como cargas puntuales, lo cual es válido porque sus radios son mucho menores que la distancia de separación. Se define un eje que une los centros de las dos esferas; se toma como positivo el sentido desde la primera hacia la segunda esfera.

La primera esfera actúa como [[q1]] (carga fuente) y la segunda como [[q2]] (carga receptora). La distancia [[r]] es la separación entre centros.

## Modelo físico

El modelo aplicable es la **ley de Coulomb para cargas puntuales** en el vacío. Las magnitudes núcleo son [[q1]], [[q2]] y [[r]], y la magnitud resultado es [[F_C]]. El campo eléctrico [[E_C]] creado por [[q1]] en el punto de [[q2]] se calcula a partir de la segunda fórmula del leaf.

Este modelo es válido porque los radios de las esferas son del orden de milímetros, mucho menores que los 12 cm de separación. La relación entre radio y separación es inferior al 5 %, lo que garantiza un error menor al 1 % al usar el modelo puntual.

## Justificación del modelo

La ley de Coulomb puntual se justifica por la simetría esférica de las cargas metálicas: aunque las cargas estén sobre la superficie metálica, para una esfera conductora la distribución es uniforme cuando no hay inducción significativa de cargas externas. A distancias mucho mayores que el radio, el campo de una esfera cargada uniformemente es idéntico al de una carga puntual situada en su centro.

El modelo dejaría de ser válido si la distancia entre esferas fuera del mismo orden que sus radios: en ese caso la distribución de carga en la superficie de cada esfera se redistribuye por inducción, y la fuerza real diferiría de la predicción de Coulomb puntual.

## Resolución simbólica

Aplicando la ley de Coulomb para obtener [[F_C]]:

{{f:fuerza_coulomb}}

Los valores de las cargas con signo son [[q1]] positiva y [[q2]] negativa. El producto [[q1]]·[[q2]] es negativo, lo que anticipa una fuerza atractiva.

Para el campo eléctrico creado por [[q1]] en la posición de [[q2]]:

{{f:campo_electrico_coulomb}}

En este cálculo [[q1]] es la carga fuente y [[r]] es la misma distancia de separación. El resultado [[E_C]] es positivo porque [[q1]] es positiva (el campo apunta hacia fuera de [[q1]]).

## Sustitución numérica

Conversión de unidades: [[q1]] de 4.0 µC equivale a 4.0×10⁻⁶ C; [[q2]] de 6.0 µC equivale a 6.0×10⁻⁶ C con signo negativo, es decir, −6.0×10⁻⁶ C.

Sustituyendo en la ley de Coulomb: el numerador es el producto de 8.988×10⁹, 4.0×10⁻⁶ y −6.0×10⁻⁶, que da 8.988×10⁹ × (−24×10⁻¹²). El resultado del numerador es aproximadamente −215.7×10⁻³ N·m². El denominador es (0.12)², es decir, 0.0144 m².

Dividiendo: [[F_C]] es aproximadamente −215.7×10⁻³ / 0.0144, lo que da [[F_C]] ≈ −15.0 N.

Para el campo eléctrico: el numerador es 8.988×10⁹ × 4.0×10⁻⁶, que da aproximadamente 35952 N·m²/C. Dividiendo entre (0.12)² da [[E_C]] ≈ 35952 / 0.0144 ≈ 2496 kN/C, es decir, [[E_C]] ≈ 2.50×10⁶ N/C.

## Validación dimensional

Para [[F_C]]: la constante [[k_e]] tiene unidades \`[M L³ T⁻⁴ I⁻²]\`, las cargas tienen unidades \`[I T]\` cada una, y la distancia al cuadrado tiene unidades \`[L²]\`. El cociente resulta en \`[M L³ T⁻⁴ I⁻²] · [I T]² / [L²]\`, que se reduce a \`[M L T⁻²]\`, es decir, newtons. ✓

Para [[E_C]]: el cociente da unidades \`[M L T⁻⁴ I⁻²] · [I T] / [L²]\`, que se reduce a \`[M L T⁻³ I⁻¹]\`, es decir, N/C. ✓

## Interpretación física

El resultado [[F_C]] ≈ −15.0 N indica que la fuerza es **atractiva**: la segunda esfera es atraída hacia la primera con una intensidad de 15 N. Este valor es considerable: equivale a sostener un peso de aproximadamente 1.5 kg. Para cargas de solo unas pocas microcoulombios a 12 cm de distancia, este resultado ilustra la enorme intensidad de la fuerza eléctrica comparada con la gravitatoria a escala de laboratorio.

El signo negativo no es un error: **significa** que las cargas tienen signos contrarios y la interacción es atractiva. Si el alumno hubiera obtenido un valor positivo con estas cargas, indicaría un error de signo en la sustitución.

El campo eléctrico [[E_C]] ≈ 2.50×10⁶ N/C es una propiedad de la primera esfera en ese punto del espacio, independiente de la segunda. Si [[q2]] fuera el doble (−12 µC en lugar de −6 µC), [[F_C]] también sería el doble (≈ −30.0 N), pero [[E_C]] no cambiaría porque solo depende de [[q1]] y de [[r]]. Esta diferencia entre [[F_C]] y [[E_C]] es el núcleo conceptual del leaf.

Por la tercera ley de Newton, la fuerza que [[q2]] ejerce sobre [[q1]] tiene el mismo módulo (15 N) pero sentido contrario: [[q1]] también es atraída hacia [[q2]] con 15 N. En problemas de equilibrio, ambas fuerzas deben tenerse en cuenta.

---

# Ejemplo de aplicación real

## Contexto

En los sistemas de depuración electrostática de aire industrial (precipitadores electrostáticos), partículas de polvo cargadas son atraídas hacia electrodos de signo contrario por la fuerza eléctrica de Coulomb. El diseño del separador requiere estimar la fuerza sobre cada partícula para calcular su tiempo de tránsito y garantizar que llegue al electrodo antes de salir por el otro extremo del dispositivo.

Una partícula de polvo típica porta una carga neta de −0.5 nC (adquirida por contacto con el campo de corona del cargador). El electrodo colector más próximo puede tratarse como una carga equivalente de +200 µC distribuida uniformemente a 5 cm de la partícula.

## Estimación física

Convirtiendo: [[q1]] del electrodo equivale a 2.0×10⁻⁴ C; [[q2]] de la partícula equivale a −5.0×10⁻¹⁰ C; [[r]] de 5 cm equivale a 0.05 m.

Aplicando la ley de Coulomb: el numerador es 8.988×10⁹ × 2.0×10⁻⁴ × (−5.0×10⁻¹⁰), que da aproximadamente −8.988×10⁻⁴ N·m². El denominador es (0.05)², es decir, 2.5×10⁻³ m². La fuerza [[F_C]] es del orden de −8.988×10⁻⁴ / 2.5×10⁻³, lo que da [[F_C]] ≈ −0.36 N.

El signo negativo indica atracción: la partícula es atraída hacia el electrodo con una fuerza de aproximadamente 0.36 N.

## Interpretación

Una fuerza de 0.36 N sobre una partícula de polvo con masa típica de 10⁻⁸ kg **implica** una aceleración enorme: del orden de 3.6×10⁷ m/s². Esto significa que la partícula alcanza el electrodo en tiempos muy cortos (microsegundos), lo que explica la alta eficiencia de los precipitadores electrostáticos.

Este resultado **indica** que la variable dominante no es la masa de la partícula sino su carga [[q2]]: partículas más ligeras con la misma carga alcanzan el electrodo más rápido (mayor aceleración), mientras que partículas más pesadas con la misma carga tardan más. El diseño optimiza la carga impartida a cada partícula para garantizar que incluso las más pesadas lleguen al electrodo dentro de la longitud disponible del dispositivo.

Si la distancia [[r]] se redujera a la mitad (2.5 cm), [[F_C]] se cuadruplicaría (≈ 1.44 N), aumentando la aceleración en el mismo factor. Este comportamiento cuadrático **describe** cómo los electrodos cónicos o con geometría convergente concentran la fuerza en la zona de captura.
`;export{e as default};
