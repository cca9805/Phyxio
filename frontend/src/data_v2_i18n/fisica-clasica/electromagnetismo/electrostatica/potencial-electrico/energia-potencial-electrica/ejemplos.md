# Ejemplo tipo examen


## Enunciado

Un protón (carga 1.6×10⁻¹⁹ C, masa 1.67×10⁻²⁷ kg) parte del reposo en el punto A, donde el potencial eléctrico es 400 V, y se desplaza hasta el punto B, donde el potencial eléctrico es 100 V. El campo eléctrico entre A y B es conservativo. Calcular la energía potencial eléctrica del protón en A y en B, la variación de energía potencial al desplazarse de A a B, el trabajo realizado por el campo eléctrico durante el desplazamiento y la velocidad del protón al llegar a B.

## Datos

- Carga del protón: 1.6×10⁻¹⁹ C
- Masa del protón: 1.67×10⁻²⁷ kg
- Potencial en el punto A: 400 V
- Potencial en el punto B: 100 V
- Velocidad inicial en A: el protón parte del reposo

## Definición del sistema

El sistema está formado por el protón (carga [[carga_de_prueba]]) y el campo eléctrico externo que produce los potenciales [[potencial_electrico_en_el_punto_a]] en el punto A y [[potencial_electrico_en_el_punto_a]] en el punto B. El protón es la carga de prueba cuya energía potencial y velocidad se calculan. No se consideran efectos relativistas (la velocidad esperada del protón es mucho menor que la velocidad de la luz), ni fuerzas externas adicionales (solo actúa la fuerza eléctrica). El convenio de referencia de energía potencial es el del problema: los potenciales 400 V y 100 V están dados respecto al cero de referencia del campo.

## Modelo físico

El modelo aplicado es el de una carga puntual [[carga_de_prueba]] en un campo electrostático conservativo. La energía potencial [[energia_potencial_electrica]] del protón en cualquier punto es el producto de su carga por el potencial en ese punto. La variación de energía potencial [[variacion_de_energia_potencial_electrica]] al pasar de A a B es la diferencia entre la energía final y la inicial. El trabajo del campo es el negativo de [[variacion_de_energia_potencial_electrica]]. La conservación de energía mecánica permite obtener la velocidad final a partir del trabajo del campo, dado que no actúan otras fuerzas.

## Justificación del modelo

El modelo es válido porque el protón se puede tratar como carga puntual a las escalas del problema, el campo es conservativo (electrostático), y la velocidad esperada es no relativista. El modelo dejaría de ser válido si el campo variase en el tiempo (no conservativo) o si la velocidad del protón alcanzara fracciones apreciables de la velocidad de la luz.

## Resolución simbólica

La energía potencial del protón en el punto A se obtiene aplicando:

{{f:energia_potencial_punto}}

El valor en A utiliza el potencial [[potencial_electrico_en_el_punto_a]] en ese punto y la carga [[carga_de_prueba]] del protón. La energía en B se obtiene de la misma fórmula con el potencial correspondiente al punto B.

La variación de energía potencial al pasar de A a B sigue la definición:

{{f:variacion_energia_potencial}}

La diferencia es [[variacion_de_energia_potencial_electrica]], que resulta de restar la energía final menos la inicial. El trabajo del campo eléctrico sobre el protón durante el desplazamiento es el negativo de [[variacion_de_energia_potencial_electrica]].

Por conservación de energía mecánica (sin fuerzas externas adicionales), la energía cinética ganada por el protón es igual al trabajo del campo, que a su vez es el negativo de [[variacion_de_energia_potencial_electrica]]. Partiendo del reposo, la energía cinética final iguala ese trabajo. A partir de la energía cinética final se despeja la velocidad del protón en B.

## Sustitución numérica

Energía potencial en A: la carga del protón es 1.6×10⁻¹⁹ C y el potencial en A es 400 V. Multiplicando ambos valores se obtiene que [[energia_potencial_electrica]] en A es aproximadamente 6.4×10⁻¹⁷ J.

Energía potencial en B: el potencial en B es 100 V. Multiplicando por la misma carga se obtiene que [[energia_potencial_electrica]] en B es aproximadamente 1.6×10⁻¹⁷ J.

Variación de energía potencial: restando la energía en B menos la energía en A, [[variacion_de_energia_potencial_electrica]] resulta aproximadamente −4.8×10⁻¹⁷ J. El signo negativo confirma que la energía potencial del protón disminuyó al moverse de A a B.

Trabajo del campo: el trabajo del campo sobre el protón es el negativo de [[variacion_de_energia_potencial_electrica]], es decir, aproximadamente 4.8×10⁻¹⁷ J. El campo realizó trabajo positivo sobre el protón, lo que es coherente con que el protón se movió de mayor a menor potencial (la fuerza eléctrica sobre una carga positiva apunta de mayor a menor potencial).

Velocidad en B: la energía cinética en B iguala el trabajo del campo (partida del reposo). Dividiendo dos veces esa energía por la masa del protón y tomando la raíz cuadrada se obtiene la velocidad. Con 4.8×10⁻¹⁷ J y masa 1.67×10⁻²⁷ kg, la velocidad del protón en B es aproximadamente 2.4×10⁵ m/s. Este valor es el 0.08 % de la velocidad de la luz, confirmando que el tratamiento no relativista es válido.

## Validación dimensional

- Energía potencial: multiplicar coulombios por voltios da julios. El voltio se puede expresar como julio por coulombio, de modo que el producto `[C]·[J/C]` resulta en `[J]`. Correcto.
- Trabajo: tiene las mismas unidades que la energía, `[J]`. Correcto.
- Velocidad: la raíz cuadrada de `[J/kg]` da `[m/s]`, ya que el julio se descompone en `[kg·m²·s⁻²]`. Correcto.

## Interpretación física

El protón ganó aproximadamente 4.8×10⁻¹⁷ J de energía cinética al desplazarse del punto A al punto B. Esta ganancia se explica porque el protón (carga positiva) se movió desde una zona de mayor potencial (400 V) hacia una zona de menor potencial (100 V): la fuerza eléctrica, que sobre una carga positiva apunta en la dirección de potencial decreciente, impulsó al protón en la dirección del movimiento. El campo realizó trabajo positivo, la energía potencial del protón disminuyó en 4.8×10⁻¹⁷ J y esa cantidad se convirtió íntegramente en energía cinética.

El hecho de que el potencial en A sea cuatro veces el de B explica cuantitativamente el resultado: la diferencia de potencial de 300 V multiplicada por la carga del protón da directamente el trabajo del campo. Esto ilustra la potencia del enfoque energético: no fue necesario conocer la trayectoria ni la distribución del campo entre A y B para calcular la velocidad final.

Si el potencial en A fuera menor que el de B (el protón se moviera de bajo a alto potencial), el protón necesitaría energía cinética inicial para llegar a B, y la velocidad disminuiría en lugar de aumentar. Este es exactamente el comportamiento de los protones en los aceleradores lineales, donde se llevan de bajo a alto potencial para ganar energía cinética acelerándolos en la dirección contraria.

---

# Ejemplo de aplicación real


## Contexto

En un tubo de rayos catódicos —tecnología usada en televisores analógicos y osciloscopios—, electrones son acelerados desde un cátodo hasta una pantalla fosforescente mediante una diferencia de potencial de varios kilovolts. La energía que el campo eléctrico transfiere a los electrones determina la velocidad con la que impactan en la pantalla y, por tanto, la intensidad luminosa del punto que producen.

Un televisor de la época de los tubos de rayos catódicos operaba típicamente con una tensión de aceleración de 20 kV. Un electrón (carga −1.6×10⁻¹⁹ C, masa 9.11×10⁻³¹ kg) parte prácticamente del reposo en el cátodo, que está al potencial más bajo (referencia cero). La anode está a 20 000 V. Se busca estimar la velocidad del electrón al llegar a la pantalla y verificar si el tratamiento no relativista es adecuado.

## Estimación física

Antes de analizar el tubo de rayos catódicos, se considera el caso de dos cargas puntuales de prueba: [[q_1]] es el electrón emisor del cátodo, con carga [[q_1]] igual a −1.6×10⁻¹⁹ C, y una segunda carga de referencia [[q_2]] a una distancia [[r_12]] de 1 nm. La energía de interacción entre ambas se obtiene aplicando:

{{f:energia_interaccion_coulomb}}

Con [[k_e]] igual a 8.99×10⁹ N·m²·C⁻², el producto [[q_1]]·[[q_2]] determina el signo de la interacción y [[r_12]] fija su escala. Para una carga positiva [[q_2]] igual a 1.6×10⁻¹⁹ C a 1 nm de distancia, [[energia_potencial_electrica]] resulta aproximadamente −2.3×10⁻¹⁰ J (interacción atractiva). Este valor, unas 1400 veces mayor en módulo que la energía térmica a temperatura ambiente (del orden de 4×10⁻²¹ J), confirma que las fuerzas electrostáticas dominan a escala atómica.

La diferencia de potencial entre ánodo y cátodo es de 20 000 V. El electrón tiene carga negativa: al moverse desde el cátodo (potencial bajo, referencia cero) hacia el ánodo (potencial alto, 20 000 V), el potencial aumenta. La energía potencial del electrón cambia en el producto de su carga (negativa) por la diferencia de potencial: [[variacion_de_energia_potencial_electrica]] es el producto de −1.6×10⁻¹⁹ C por 20 000 V, lo que da aproximadamente −3.2×10⁻¹⁵ J. La variación es negativa, lo que significa que la energía potencial del electrón disminuye.

Por conservación de energía, la energía cinética ganada por el electrón es aproximadamente 3.2×10⁻¹⁵ J (en valor absoluto igual al descenso de [[energia_potencial_electrica]]). Esta cantidad equivale a 20 000 eV, o 20 keV. Partiendo del reposo y con masa 9.11×10⁻³¹ kg, la velocidad estimada sería aproximadamente 8.4×10⁷ m/s, cerca del 28 % de la velocidad de la luz. A esta velocidad, la corrección relativista es significativa (del orden del 4 %) pero el resultado no relativista sirve como estimación de orden de magnitud. En los cálculos reales de ingeniería de tubos de rayos catódicos se utiliza la fórmula relativista para obtener la velocidad exacta.

La velocidad de impacto de los electrones determina directamente la energía depositada en el fósforo y, por tanto, la brillantez de la imagen. Duplicar la tensión de aceleración no duplica la velocidad (el aumento es más lento por la raíz cuadrada), pero sí cuadruplica la energía cinética. Esto permite ajustar el brillo de la pantalla controlando con precisión la tensión de aceleración.

## Interpretación

Este ejemplo muestra que el concepto de [[energia_potencial_electrica]] y su conversión a energía cinética tiene aplicación directa en tecnología de visualización. La misma fórmula con [[k_e]], [[q_1]] y [[q_2]] que gobierna la interacción entre cargas puntuales a escala atómica es formalmente idéntica a la que describe la energía potencial en dispositivos macroscópicos: solo cambia la escala de [[r_12]] y los valores de las cargas. La velocidad de los electrones en un tubo de rayos catódicos no se calcula integrando la fuerza eléctrica a lo largo de la trayectoria (que sería complicado por la geometría del tubo) sino aplicando directamente la conservación de energía: la variación de [[energia_potencial_electrica]] da toda la información necesaria.

El hecho de que [[variacion_de_energia_potencial_electrica]] sea negativa para el electrón moviéndose hacia el ánodo —aunque el potencial aumente— ilustra perfectamente el papel del signo de la carga: las cargas negativas ganan energía cinética al moverse hacia regiones de mayor potencial, exactamente al contrario que las cargas positivas. Entender este signo es esencial para diseñar correctamente cualquier dispositivo de aceleración de partículas.