## 1. Proceso de Haber: síntesis industrial de amoniaco

La síntesis de amoniaco a partir de nitrógeno e hidrógeno es uno de los procesos químicos más importantes de la historia moderna: proporciona el nitrógeno fijo que alimenta los fertilizantes que sostienen la agricultura global. La energía libre de Gibbs es el árbitro termodinámico que determina en qué condiciones de temperatura y presión es favorable producir amoniaco y en cuáles se invierte la dirección de la reacción.

El proceso tiene [[DeltaH]] negativa (exotérmico) y [[DeltaS]] negativa (reducción del número de moles gaseosos). El resultado es que [[DeltaG]] es negativa a temperaturas inferiores a la temperatura de inversión (alrededor de 465 K). A las temperaturas industriales de operación (673–773 K), [[DeltaG]] es positiva según el modelo estándar, lo que impone trabajar a alta presión para desplazar el equilibrio termodinámico hacia los productos. La variable dominante en el diseño del proceso es [[T_inv]]: cuanto más alta sea, mayor es la ventana de temperatura en que el proceso es espontáneo, lo que facilita la cinética sin sacrificar la termodinámica. La optimización industrial busca el punto donde la velocidad de reacción catalítica y el rendimiento de equilibrio de Gibbs se compensan mutuamente.

Variable dominante: la temperatura de inversión [[T_inv]], que determina el rango operativo donde la síntesis es termodinámicamente favorable sin necesidad de presiones extremas.

Límite de validez: el modelo estándar de Gibbs con [[DeltaH]] y [[DeltaS]] constantes es válido a bajas temperaturas; a temperaturas industriales (por encima de 400 °C) la corrección de Kirchhoff y el efecto de la presión elevada son indispensables para predecir el rendimiento real.

---

## 2. Celdas electroquímicas y baterías recargables

En una celda electroquímica, la reacción redox espontánea convierte energía química en energía eléctrica. La variación de energía libre [[DeltaG]] es directamente proporcional al voltaje de celda máximo: el potencial estándar de la celda multiplica la carga transferida da exactamente menos [[DeltaG]]. Este principio rige el diseño de baterías de litio, celdas de combustible de hidrógeno y supercondensadores.

En las baterías de litio-ion, la reacción de intercalación del litio en el electrodo de grafito tiene [[DeltaG]] negativa durante la descarga (proceso espontáneo que libera trabajo eléctrico) y [[DeltaG]] positiva durante la carga (proceso no espontáneo que requiere trabajo eléctrico externo). El análisis de [[DeltaG]] en función del estado de carga permite estimar la ventana de voltaje seguro de operación y predecir la degradación de la batería cuando la [[DeltaG]] de las reacciones secundarias comienza a ser comparable con la de la reacción principal.

Variable dominante: la variación de [[DeltaG]] durante el ciclo de carga-descarga, que determina el voltaje de operación y la eficiencia energética del dispositivo.

Límite de validez: el modelo de [[DeltaG]] constante con el estado de carga es válido solo en el rango de operación lineal; en los extremos de carga y descarga, efectos de actividad y polarización modifican el [[DeltaG]] efectivo de forma no lineal.

---

## 3. Plegamiento de proteínas y estabilidad biológica

El plegamiento espontáneo de una proteína desde su forma desplegada hasta su conformación nativa es uno de los fenómenos más complejos de la biología molecular. Termodinámicamente, el proceso es espontáneo ([[DeltaG]] negativa) en condiciones fisiológicas porque la pérdida de entropía conformacional de la cadena polipeptídica (término entrópico desfavorable) está más que compensada por la ganancia de interacciones no covalentes (enlaces de hidrógeno, fuerzas de Van der Waals, efecto hidrofóbico) que estabilizan la estructura nativa.

La dependencia de [[DeltaG]] con la temperatura es crítica para la estabilidad proteica. A temperatura fisiológica (310 K), [[DeltaG]] de plegamiento es ligeramente negativa, con valores típicos de entre 20 y 60 kJ/mol según la proteína. Al aumentar la temperatura, el término [[T]]·[[DeltaS]] aumenta y [[DeltaG]] de plegamiento tiende a cero y luego a positiva: la proteína se desnaturaliza. La temperatura de desnaturalización es esencialmente [[T_inv]] del proceso de plegamiento. Esta predicción orienta el diseño de proteínas termoestables para uso industrial (enzimas en detergentes, biocatalizadores en síntesis a alta temperatura).

Variable dominante: la magnitud de [[DeltaG]] de plegamiento a temperatura fisiológica, que determina la estabilidad cinética y termodinámica de la proteína frente a perturbaciones térmicas o de pH.

Límite de validez: el modelo de Gibbs estándar con [[DeltaH]] y [[DeltaS]] constantes solo es una primera aproximación; el plegamiento real involucra cambios de capacidad calorífica significativos y efectos del disolvente que hacen que [[DeltaH]] y [[DeltaS]] dependan marcadamente de la temperatura.

---

## 4. Metalurgia extractiva: reducción de óxidos metálicos

La producción de metales puros a partir de sus minerales (óxidos, sulfuros) requiere que la reacción de reducción sea termodinámicamente favorable. El diagrama de Ellingham representa [[DeltaG]] de formación de distintos óxidos metálicos en función de la temperatura: cada metal traza una recta con pendiente proporcional a su variación de entropía, y el metal cuya recta está más abaja "gana" termodinámicamente la competición por el oxígeno.

Para la producción de hierro en el alto horno, el carbono (en forma de coque) reduce los óxidos de hierro porque a altas temperaturas (por encima de ~1000 K) la recta de [[DeltaG]] para la formación de dióxido de carbono cae por debajo de la del óxido de hierro: la oxidación del carbono es termodinámicamente más favorable que la del hierro. La variable crítica es la temperatura a la que se produce ese cruce de rectas (la intersección de [[T_inv]] de las dos reacciones competitivas). El operador del horno controla la temperatura precisamente para mantenerse en el régimen donde [[DeltaG]] del proceso de reducción global sea negativa.

Variable dominante: la temperatura de cruce del diagrama de Ellingham, que determina por encima de qué temperatura la reducción del metal es termodinámicamente espontánea.

Límite de validez: el modelo de Gibbs lineal es válido cuando no hay cambios de fase en el rango de temperatura estudiado; en el diagrama de Ellingham, los cambios de fase producen quiebres abruptos en las pendientes de las rectas que el modelo simple no recoge.

---

## 5. Corrosión y protección catódica de estructuras metálicas

La corrosión de estructuras metálicas en contacto con electrolitos (agua salada, suelo húmedo) es un proceso electroquímico controlado por [[DeltaG]]. La celda de corrosión opera espontáneamente porque [[DeltaG]] de la reacción anódica (disolución del metal) es negativa en las condiciones del entorno. El análisis de [[DeltaG]] permite calcular qué metales se corroen espontáneamente, en qué orden de prioridad y a qué velocidad termodinámica máxima.

La protección catódica invierte la espontaneidad de la corrosión: al conectar la estructura a un ánodo de sacrificio de zinc o aluminio (metales con [[DeltaG]] de oxidación más negativa), se fuerza al sistema a operar en el régimen donde la corrosión del metal estructural tiene [[DeltaG]] positiva (proceso no espontáneo). El zinc o aluminio se oxidan preferentemente porque su [[T_inv]] para revertir la oxidación es mucho mayor que la del hierro: son termodinámicamente más "sacrificables". El diseño de la protección catódica requiere calcular la diferencia de [[DeltaG]] entre los dos electrodos para garantizar un potencial de protección suficiente durante toda la vida útil del ánodo de sacrificio.

Variable dominante: la diferencia de [[DeltaG]] de oxidación entre el ánodo de sacrificio y el metal estructural, que determina si la protección catódica es termodinámicamente efectiva.

Límite de validez: el modelo estándar de Gibbs es válido para condiciones de temperatura y concentración de electrolito moderadas; en ambientes extremos (alta temperatura, alta salinidad, condiciones ácidas) los potenciales electroquímicos reales divergen del valor estándar y el análisis requiere actividades e ionic strength.
