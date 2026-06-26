const e=`# Ejemplo tipo examen

## Enunciado

Se dispone de un calorímetro de poliestireno de equivalente en agua despreciable. En él se vierten 300 g de agua a 85 °C. A continuación se introduce una pieza de cobre de 150 g que estaba a 20 °C. Calcular la temperatura de equilibrio final del sistema.

Dato adicional: calor específico del agua: 4186 J/(kg·K); calor específico del cobre: 386 J/(kg·K).

## Datos

- Masa del agua: 0.300 kg
- Temperatura inicial del agua: 85 °C
- Masa del cobre: 0.150 kg
- Temperatura inicial del cobre: 20 °C
- Calor específico del agua: 4186 J/(kg·K)
- Calor específico del cobre: 386 J/(kg·K)
- Equivalente en agua del calorímetro: despreciable

## Definición del sistema

El sistema es el conjunto agua + cobre dentro del calorímetro ideal. El calorímetro no interviene en el balance porque su equivalente en agua es despreciable. La incógnita es la temperatura de equilibrio [[T_eq]] a la que llegará el sistema después del intercambio de calor.

## Modelo físico

El proceso es de calor sensible puro: ni el agua ni el cobre sufren cambios de estado en el rango de temperaturas del problema. Para cada cuerpo se usa [[Q_i]] con su [[m_i]], su [[c_i]] y su [[DeltaT_i]] respecto a [[T_eq]]. El calorímetro es ideal (pérdidas despreciables), de modo que el calor cedido por el agua al enfriarse compensa el calor absorbido por el cobre al calentarse.

## Justificación del modelo

El modelo de calor sensible con [[c_i]] constante es válido porque el rango de temperatura del agua (de 85 °C hasta [[T_eq]]) y del cobre (de 20 °C hasta [[T_eq]]) son moderados. Para el cobre, la variación de [[c_i]] entre 20 °C y 85 °C es inferior al 3 %, por lo que el valor constante de 386 J/(kg·K) es una buena aproximación. Para el agua, la variación de [[c_i]] en ese rango es inferior al 0.5 %. El calorímetro es despreciable según el enunciado.

## Resolución simbólica

Aplicando el principio de calorimetría al sistema aislado:

{{f:principio_calorimetria}}

Cada calor parcial se calcula como calor sensible:

{{f:calor_sensible_i}}

Expandiendo cada [[Q_i]] en términos de la relación de calor sensible y despejando [[T_eq]]:

{{f:temperatura_equilibrio_dos_cuerpos}}

Donde el subíndice 1 corresponde al agua y el subíndice 2 al cobre.

## Sustitución numérica

Calculando las capacidades caloríficas totales de cada cuerpo:

Capacidad calorífica total del agua: 0.300 × 4186. El producto resulta 1255.8 J/K.

Capacidad calorífica total del cobre: 0.150 × 386. El producto resulta 57.9 J/K.

Temperatura de equilibrio: numerador = 1255.8 × 85 + 57.9 × 20. El primer sumando es 1255.8 × 85 = 106 743 J. El segundo sumando es 57.9 × 20 = 1158 J. El numerador total es 107 901 J.

Denominador: 1255.8 + 57.9 = 1313.7 J/K.

[[T_eq]] = 107 901 / 1313.7 ≈ 82.1 °C.

## Validación dimensional

El numerador combina capacidad calorífica total por temperatura, por lo que queda en julios. El denominador queda en julios por kelvin. Al dividir ambas cantidades se recupera una temperatura, que puede expresarse en kelvin o en grados Celsius para esta mezcla.

## Interpretación física

El resultado de 82.1 °C es mucho más cercano a la temperatura inicial del agua (85 °C) que a la del cobre (20 °C), lo cual es coherente con que la capacidad calorífica total del agua (1255.8 J/K) es aproximadamente 21 veces mayor que la del cobre (57.9 J/K). El agua actúa como un gran depósito térmico que apenas se enfría al ceder calor al cobre.

El resultado está dentro del intervalo (20 °C, 85 °C), como debe ser físicamente. Verificación de la suma de calores:

[[Q_i]] del agua: 0.300 × 4186 × (82.1 − 85) ≈ −3641 J.

[[Q_i]] del cobre: 0.150 × 386 × (82.1 − 20) ≈ 3596 J.

Suma: −3641 + 3596 ≈ −45 J, diferencia inferior al 1.3 % de la energía total intercambiada, atribuible al redondeo de [[T_eq]] a una cifra decimal.

---

# Ejemplo de aplicación real

## Contexto

En un proceso de templado rápido de una pieza de acero inoxidable de 2.5 kg que sale de un horno a 850 °C, la pieza se introduce en un tanque de aceite de 40 litros (densidad 0.87 kg/L) inicialmente a 25 °C. El ingeniero de proceso necesita estimar la temperatura final del aceite para verificar que no supera el punto de inflamación de 180 °C. Se utilizan: calor específico del acero inoxidable = 490 J/(kg·K); calor específico del aceite de temple = 1900 J/(kg·K).

## Estimación física

Se aplica el principio de calorimetría al sistema pieza de acero + aceite, suponiendo sistema aislado (sin pérdidas al entorno durante el corto tiempo del temple). La estimación usa [[m_i]] y [[c_i]] de cada cuerpo para obtener sus capacidades caloríficas totales y luego calcula [[T_eq]] con la media ponderada calorimétrica.

Masa del aceite: 40 × 0.87 = 34.8 kg.

Capacidad calorífica total del acero: 2.5 × 490 = 1225 J/K.

Capacidad calorífica total del aceite: 34.8 × 1900 = 66 120 J/K.

Temperatura de equilibrio: numerador = 1225 × 850 + 66 120 × 25. El primer sumando vale 1 041 250 J. El segundo vale 1 653 000 J. El numerador total es 2 694 250 J.

Denominador: 1225 + 66 120 = 67 345 J/K.

[[T_eq]] = 2 694 250 / 67 345 ≈ 40.0 °C.

## Interpretación

La temperatura de equilibrio estimada de 40 °C está muy por debajo del punto de inflamación del aceite de 180 °C, lo que confirma que el proceso de temple es seguro en este caso. La razón es que la capacidad calorífica total del aceite (66 120 J/K) es más de 50 veces mayor que la del acero (1225 J/K): el aceite actúa como un reservorio térmico enorme que apenas se calienta al absorber el calor de la pieza.

Este ejemplo ilustra la potencia del análisis calorimétrico como herramienta de diseño: sin necesidad de resolver ecuaciones diferenciales de transferencia de calor, el principio de calorimetría proporciona en segundos una estimación de la temperatura final que permite tomar decisiones de seguridad. El modelo asume sistema aislado, lo que sobreestima ligeramente la temperatura del aceite (en la práctica el aceite también pierde calor al entorno del tanque), por lo que la estimación es conservadora: si el modelo dice que es seguro, la realidad también lo será.
`;export{e as default};
