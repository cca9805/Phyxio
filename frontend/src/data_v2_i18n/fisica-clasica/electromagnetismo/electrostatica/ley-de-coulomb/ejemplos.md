# Ejemplo tipo examen


## Enunciado

Dos esferas metálicas pequeñas de masa despreciable están fijadas en un plano horizontal. La primera esfera porta una carga [[q1]] de valor 4.0 μC y la segunda porta una carga [[q2]] de valor −6.0 μC. La separación entre los centros de las esferas es [[r12]] de 8.0 cm. Determinar el módulo de la fuerza de Coulomb que ejerce cada esfera sobre la otra. Indicar si la fuerza es atractiva o repulsiva y estimar en cuánto cambiaría el módulo de [[fuerza_de_coulomb]] si la distancia se redujera a la mitad.

## Datos

- Primera carga [[q1]]: 4.0 μC, equivalente a 4.0 × 10⁻⁶ C
- Segunda carga [[q2]]: −6.0 μC, equivalente a −6.0 × 10⁻⁶ C
- Distancia entre centros [[r12]]: 8.0 cm, equivalente a 8.0 × 10⁻² m
- Constante de Coulomb [[k_e]]: 8.988 × 10⁹ N·m²·C⁻²
- Medio: aire (se aproxima al vacío)

## Definición del sistema

El sistema está formado por dos cargas puntuales en reposo sobre un eje horizontal. La separación de 8.0 cm es muy superior al tamaño de las esferas, por lo que la hipótesis de carga puntual es válida. Se pide el módulo de la fuerza [[fuerza_de_coulomb]] sobre cualquiera de las dos esferas (por la tercera ley de Newton, ambos módulos son iguales).

Se tomará el eje positivo dirigido de [[q1]] a [[q2]]. La fuerza sobre [[q2]] apuntará en sentido negativo (hacia [[q1]]) si la interacción es atractiva, y en sentido positivo (alejándose de [[q1]]) si es repulsiva.

## Modelo físico

El modelo aplicable es la ley de Coulomb para cargas puntuales en el vacío. Las magnitudes que intervienen son [[q1]], [[q2]], [[r12]] y [[k_e]]. La fórmula da el módulo de [[fuerza_de_coulomb]], que es siempre positivo; el carácter de la interacción se determina por separado comparando los signos de las cargas.

## Justificación del modelo

El modelo de carga puntual es adecuado porque [[r12]] es mucho mayor que el tamaño de las esferas (se indica que son "pequeñas"). Las cargas están en reposo sobre una superficie horizontal rígida, así que el régimen es electrostático puro. No hay conductores cercanos que induzcan redistribución de carga. El medio es aire, cuya permitividad relativa es prácticamente igual a la del vacío. Todas las condiciones de validez de Coulomb se cumplen.

El modelo dejaría de valer si las esferas se cargaran tanto que la repulsión eléctrica deformara su posición, si hubiera conductores metálicos a distancias comparables a [[r12]], o si las esferas tuvieran dimensiones del orden de centímetros (comparables a la separación de 8 cm).

## Resolución simbólica

La expresión para el módulo de la fuerza de Coulomb es la fórmula del leaf. Despejando [[fuerza_de_coulomb]] directamente:

{{f:fuerza_coulomb}}

El numerador es el producto de [[k_e]] por el valor absoluto del producto de las cargas. El denominador es el cuadrado de [[r12]]. El carácter de la interacción se determina evaluando el signo del producto [[q1]]·[[q2]]: positivo implica repulsión, negativo implica atracción.

Dividiendo [[fuerza_de_coulomb]] entre [[q2]] se obtiene además el campo eléctrico [[campo_electrico_de_carga_puntual]] creado por [[q1]] en la posición de [[q2]]:

{{f:campo_electrico_coulomb}}

Para la segunda parte del problema, reducir [[r12]] a la mitad (a 4.0 cm) con las mismas cargas. Como [[r12]] entra al cuadrado en el denominador, reducir [[r12]] a la mitad multiplica el denominador por un cuarto, lo que cuadruplica [[fuerza_de_coulomb]].

## Sustitución numérica

Aplicando la fórmula de la fuerza de Coulomb con los datos del problema:

{{f:fuerza_coulomb}}

El numerador: 8.988 × 10⁹ multiplicado por el valor absoluto del producto de 4.0 × 10⁻⁶ y 6.0 × 10⁻⁶ da 8.988 × 10⁹ × 24 × 10⁻¹² aproximadamente igual a 0.2157.

El denominador: (8.0 × 10⁻²)² da 6.4 × 10⁻³.

Dividiendo: 0.2157 dividido entre 6.4 × 10⁻³ resulta aproximadamente 33.7. Así [[fuerza_de_coulomb]] ≈ 33.7 N.

El signo del producto [[q1]]·[[q2]] es el de 4.0 × (−6.0), que es negativo, por lo tanto la interacción es **atractiva**: la segunda esfera es atraída hacia la primera y viceversa.

Para la distancia reducida a la mitad (4.0 cm), el nuevo módulo sería cuatro veces el anterior: aproximadamente 134.8 N. La dependencia cuadrática multiplica la fuerza por cuatro al reducir la distancia a la mitad.

## Validación dimensional

Unidades de [[k_e]]: N·m²·C⁻²
Unidades del producto de cargas: C · C se resuelven a C²
Unidades de la distancia al cuadrado: m · m se resuelven a m²

Comprobación dimensional: el producto N·m²·C⁻² multiplicado por C² y dividido entre m² resulta N. La dimensión es `[M L T⁻²]`, que corresponde a la unidad de fuerza. ✓

## Interpretación física

Con el resultado de [[fuerza_de_coulomb]] también es posible calcular el campo eléctrico [[campo_electrico_de_carga_puntual]] que [[q1]] crea en la posición de [[q2]]:

{{f:campo_electrico_coulomb}}

Sustituyendo [[q1]] de 4.0 × 10⁻⁶ C y [[r12]] de 8.0 × 10⁻² m, se obtiene [[campo_electrico_de_carga_puntual]] ≈ 5.62 × 10⁶ N/C en esa posición. Este campo es independiente de [[q2]]: si se colocara una carga diferente en ese punto, [[campo_electrico_de_carga_puntual]] no cambiaría.

El resultado de [[fuerza_de_coulomb]] ≈ 33.7 N indica una fuerza atractiva de casi 34 Newtons entre las dos esferas. Esta es una fuerza considerable para un sistema de laboratorio: equivale al peso de aproximadamente 3.4 kg. La razón de que sea tan intensa es la combinación de cargas de varios microcoulombios —que requieren una máquina electrostática para alcanzarse— a una separación de solo 8 cm.

Si la separación se reduce a la mitad, la fuerza se cuadruplica hasta aproximadamente 135 N. Este comportamiento no lineal es la característica más importante de la ley de Coulomb: pequeñas variaciones en [[r12]] a distancias cortas producen cambios de fuerza dramáticos. En sistemas donde [[r12]] puede variar libremente —como partículas cargadas en solución— esta sensibilidad cuadrática es la causa de la agregación rápida cuando las partículas se aproximan.

La atracción entre las cargas (signos opuestos) significa que si las esferas fueran libres de moverse, se acelerarían la una hacia la otra. Con masas de gramos y una fuerza de decenas de Newtons, las aceleraciones serían del orden de miles de metros por segundo al cuadrado —razón por la que en la práctica las esferas se fijan mecánicamente para medir la fuerza en equilibrio.

---

# Ejemplo de aplicación real


## Contexto

En los precipitadores electrostáticos industriales, las partículas de polvo o ceniza suspendidas en el gas de escape de una chimenea se cargan eléctricamente al pasar por una zona de descarga corona. Una vez cargadas, se encuentran en el campo eléctrico creado por los electrodos del precipitador. La fuerza electrostática sobre cada partícula cargada es la esencia del mecanismo de captura.

Consideremos una partícula de ceniza de diámetro 10 μm que ha adquirido una carga [[q2]] de aproximadamente 5 × 10⁻¹⁵ C (5 femtocoulombios). El electrodo de colección más cercano puede tratarse como una carga puntual equivalente con [[q1]] de −2 μC a una distancia efectiva [[r12]] de 5 cm.

## Estimación física

Aplicando la ley de Coulomb con los valores del problema, el módulo de [[fuerza_de_coulomb]] resulta:

El producto de [[k_e]] por el valor absoluto de [[q1]]·[[q2]] equivale aproximadamente a 8.988 × 10⁹ multiplicado por 2 × 10⁻⁶ multiplicado por 5 × 10⁻¹⁵, que da aproximadamente 8.988 × 10⁻¹¹.

Dividido entre el cuadrado de [[r12]] (0.05 m)², que vale 2.5 × 10⁻³, resulta [[fuerza_de_coulomb]] ≈ 3.6 × 10⁻⁸ N.

Esta fuerza de unos 36 nanonewtons parece pequeña, pero la partícula de ceniza tiene una masa de aproximadamente 1.4 × 10⁻¹² kg (estimando densidad del orden de 2700 kg/m³). La aceleración resultante sería del orden de 26 000 m/s², casi 2700 veces la gravedad. La ley de Coulomb garantiza que la partícula cargada migra hacia el electrodo de colección con una eficiencia muy alta.

## Interpretación

La eficiencia de un precipitador electrostático depende crucialmente de la dependencia inversa cuadrática de [[fuerza_de_coulomb]] con [[r12]]. Cuando la partícula está todavía lejos del electrodo (varios centímetros), la fuerza coulombiana es pequeña y la partícula avanza lentamente. A medida que se acerca, la fuerza crece con el cuadrado inverso de la distancia: al reducirse [[r12]] a la mitad, la fuerza se cuadruplica, y la aceleración hacia el electrodo aumenta rápidamente.

Este comportamiento no lineal es precisamente lo que hace eficientes a los precipitadores: la captura final, cuando la partícula está a milímetros del electrodo, ocurre con una fuerza enorme aunque la carga [[q2]] de la partícula sea muy pequeña en términos absolutos.