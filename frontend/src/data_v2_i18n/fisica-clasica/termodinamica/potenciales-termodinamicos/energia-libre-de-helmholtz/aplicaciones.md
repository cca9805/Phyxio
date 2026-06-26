## 1. Calorimetría de bomba: combustión en recipiente sellado

La calorimetría de bomba mide el calor de combustión de una sustancia en un recipiente de acero de volumen fijo, completamente sellado y sumergido en un baño termostatado. En estas condiciones, el volumen no cambia y el criterio termodinámico adecuado es la energía libre de Helmholtz, no la de Gibbs. La variación de [[DeltaA]] determina si la combustión es espontánea a la temperatura del experimento y cuánto trabajo no expansivo máximo podría extraerse en un proceso reversible.

Para la combustión del benzoato de sodio en una bomba calorimétrica a 298 K, [[DeltaU]] es muy negativa (alrededor de menos 26 MJ/kg) y [[DeltaS]] es ligeramente positiva por el aumento de moles gaseosas de productos. El resultado es [[DeltaA]] enormemente negativa: la combustión es termodinámicamente inevitable en el recipiente confinado. La variable dominante es [[DeltaU]], que fija la magnitud del calor medido directamente por el calorímetro.

Variable dominante: la variación de energía interna [[DeltaU]], que determina directamente el calor liberado medido por el calorímetro de bomba.

Límite de validez: el modelo de Helmholtz con [[DeltaU]] y [[DeltaS]] constantes es válido para combustiones completas a temperatura ambiente; a temperaturas superiores a 800 K pueden formarse productos de combustión incompleta que alteran [[DeltaU]] y [[DeltaS]].

---

## 2. Criogenia: licuefacción de gases en tanques rígidos

La licuefacción de gases como el nitrógeno o el helio en tanques criogénicos de volumen fijo requiere enfriar el gas hasta que la variación de Helmholtz de la transición gas-líquido sea negativa. En un tanque sellado, la presión interna cambia durante el enfriamiento pero el volumen permanece constante, haciendo de [[DeltaA]] el criterio operativo correcto para determinar la temperatura de licuefacción espontánea.

Para el nitrógeno, la transición gas-líquido tiene [[DeltaU]] negativa y [[DeltaS]] negativa, con [[T_inv]] alrededor de 77 K. Por debajo de esta temperatura, [[DeltaA]] es negativa y la licuefacción es espontánea en el tanque confinado. Los ingenieros de criogenia diseñan los sistemas de enfriamiento para alcanzar temperaturas por debajo de [[T_inv]] del gas almacenado.

Variable dominante: la temperatura de inversión [[T_inv]], que marca el umbral criogénico por debajo del cual la fase líquida es termodinámicamente preferida en el tanque rígido.

Límite de validez: el modelo es válido para gases puros sin impurezas; la presencia de impurezas modifica [[T_inv]] y puede inducir solidificación antes de la licuefacción completa, fenómeno no capturado por el modelo estándar.

---

## 3. Elastómeros y caucho: retracción elástica a volumen aparentemente constante

Los elastómeros como el caucho natural almacenan energía elástica cuando se estiran y liberan esa energía al contraerse. Termodinámicamente, el proceso de retracción elástica en condiciones de temperatura ambiente puede analizarse mediante [[DeltaA]] cuando el cambio de volumen macroscópico del cuerpo es pequeño comparado con los cambios conformacionales internos de las cadenas poliméricas.

La retracción del caucho estirado tiene [[DeltaU]] negativa (las cadenas poliméricas liberan energía conformacional al volver a su estado enrollado) y [[DeltaS]] negativa (mayor orden de las cadenas). A temperatura ambiente, [[DeltaA]] es negativa: la retracción es espontánea. A temperaturas muy altas (por encima de [[T_inv]]), el término entrópico domina y el caucho pierde su elasticidad: se degrada termodinámicamente.

Variable dominante: la variación de [[DeltaA]] a temperatura ambiente, que determina la fuerza de retracción elástica y la estabilidad termodinámica del estado retraído.

Límite de validez: el modelo de Helmholtz con [[DeltaU]] y [[DeltaS]] constantes es una primera aproximación; la retracción real involucra cambios de capacidad calorífica significativos y efectos de cristalización que hacen que [[DeltaU]] y [[DeltaS]] dependan de la extensión y la temperatura.

---

## 4. Baterías selladas: equilibrio electroquímico en celda cerrada

Las baterías selladas (plomo-ácido selladas, baterías de litio en envolvente rígida) operan en un volumen prácticamente constante. La reacción electroquímica de descarga tiene una variación de Helmholtz que determina el voltaje máximo de la celda y la espontaneidad de la reacción redox en el recipiente confinado.

En una batería de plomo-ácido sellada, la reacción de descarga tiene [[DeltaU]] negativa y [[DeltaS]] negativa (formación de sulfato de plomo sólido a partir de líquidos). A temperatura ambiente, [[DeltaA]] es negativa: la descarga es espontánea. A temperaturas elevadas (por encima de [[T_inv]], alrededor de 350 K para esta reacción), la descarga deja de ser termodinámicamente favorable y la batería se autodescarga por procesos paralelos.

Variable dominante: la variación de [[DeltaA]] durante el ciclo de carga-descarga, que determina el voltaje de operación y la eficiencia energética en el recipiente sellado.

Límite de validez: el modelo de [[DeltaA]] constante con el estado de carga es válido solo en el rango de operación lineal; en los extremos de carga y descarga, efectos de actividad y polarización modifican el [[DeltaA]] efectivo de forma no lineal.

---

## 5. Almacenamiento de hidrógeno en hidruros metálicos

Los hidruros metálicos como el LaNi₅H₆ almacenan hidrógeno en un recipiente rígido mediante absorción en la red cristalina del metal. La formación del hidruro es un proceso a volumen constante (el tanque no cambia de tamaño) y temperatura controlada, donde [[DeltaA]] determina la presión de equilibrio de hidrógeno sobre el hidruro.

Para la formación de LaNi₅H₆ desde LaNi₅ y H₂, [[DeltaU]] es negativa (enlaces metal-hidrógeno liberan energía) y [[DeltaS]] es negativa (gas se convierte en átomos de hidrógeno en la red). A temperatura ambiente, [[DeltaA]] es negativa: la absorción de hidrógeno es espontánea. La temperatura de desorción (regeneración del hidruro) corresponde a [[T_inv]]: por encima de este umbral, [[DeltaA]] se vuelve positiva y el hidrógeno se libera espontáneamente del recipiente rígido.

Variable dominante: la temperatura de inversión [[T_inv]], que determina la temperatura de operación del ciclo absorción-desorción de hidrógeno en el tanque de almacenamiento.

Límite de validez: el modelo estándar de Helmholtz es válido para hidruros estables en el rango 273–373 K; a temperaturas superiores, la descomposición del metal base y la sinterización del material alteran [[DeltaU]] y [[DeltaS]] de forma irreversible.
