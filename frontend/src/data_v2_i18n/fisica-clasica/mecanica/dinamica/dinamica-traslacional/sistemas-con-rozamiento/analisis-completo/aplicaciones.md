# Aplicaciones: Analisis completo

## 1. Frenado de emergencia en automóviles

Cuando un conductor pisa el freno a fondo, los neumáticos pasan de rodar sin deslizar (régimen estático) a bloquear las ruedas (régimen cinético). La distancia de frenado depende críticamente de en qué régimen se trabaja, porque el coeficiente estático neumático-asfalto (alrededor de 0.7 a 0.9 en seco) es mayor que el cinético (0.5 a 0.7). Los sistemas ABS mantienen las ruedas justo por debajo del umbral de deslizamiento para aprovechar la mayor adherencia estática y acortar la frenada.

La decisión de régimen es exactamente la de este leaf: comparar la fuerza tangencial sobre el neumático con [[F_ext_crit]] del contacto. Si se supera, las ruedas patinan y la deceleración cae. El ABS modula la presión de frenado miles de veces por segundo para no cruzar ese umbral.

Variable dominante: coeficiente de rozamiento estático entre neumático y calzada, que depende de la humedad y el estado del asfalto.
Límite de validez: el modelo de coeficiente constante falla en condiciones de aquaplaning, donde una película de agua elimina el contacto seco.

## 2. Diseño de cintas transportadoras industriales

Una cinta transportadora mueve objetos aprovechando la fricción estática entre la superficie de la banda y la base del objeto. El motor aplica una fuerza a la banda, pero el objeto solo avanza si la fricción estática disponible es suficiente para transmitir la aceleración necesaria sin que el objeto deslice sobre la cinta. Si la cinta arranca demasiado rápido, [[F_ext]] supera [[F_ext_crit]] y los objetos patinan, perdiendo sincronización con la línea de producción.

Los ingenieros seleccionan materiales de banda con [[mu_e]] alto (caucho rugoso, por ejemplo) y limitan la aceleración de arranque para garantizar que los objetos nunca entren en régimen cinético. En sectores como la industria alimentaria, donde las superficies pueden estar húmedas, se añaden texturas o se inclinan ligeramente las cintas para mejorar el agarre.

Variable dominante: aceleración de arranque de la cinta, que determina si la fuerza inercial sobre el objeto supera el umbral estático.
Límite de validez: el modelo falla cuando la superficie del objeto es irregular o deformable, porque el área de contacto efectiva cambia y el coeficiente deja de ser constante.

## 3. Ajuste de mordazas y tornillos de banco

Un tornillo de banco sujeta una pieza metálica por presión: las mordazas ejercen una fuerza normal sobre la pieza y el rozamiento estático resultante impide que la pieza se deslice cuando se aplica una fuerza de mecanizado (taladrado, limado, fresado). La fuerza de corte actúa como [[F_ext]] y el umbral estático [[F_ext_crit]] depende del producto de [[mu_e]] por la fuerza de apriete.

Si el operario no aprieta lo suficiente, la fuerza de corte supera el umbral y la pieza se desplaza dentro del tornillo, arruinando la operación y generando un riesgo de seguridad. En la práctica, los técnicos sobredimensionan el apriete para mantener un margen de seguridad amplio, lo que aumenta [[N]] y eleva [[f_emax]] muy por encima de la fuerza de mecanizado esperada.

Variable dominante: fuerza normal de apriete del tornillo, que controla directamente el umbral estático disponible.
Límite de validez: el modelo se rompe si las mordazas deforman plásticamente la pieza, porque la geometría de contacto cambia y la fricción deja de ser proporcional a la normal.

## 4. Escalada deportiva y adherencia de la suela

En escalada en roca, el escalador apoya la suela del pie sobre una presa o una superficie inclinada y confía en que el rozamiento estático sostenga su peso. La componente tangencial de la gravedad actúa como [[F_ext]] y el máximo rozamiento estático depende de [[mu_e]] entre el caucho de la suela y la roca, multiplicado por la componente normal del contacto. Si la inclinación supera cierto ángulo, la componente tangencial supera [[F_ext_crit]] y el pie resbala.

Las suelas de escalada se fabrican con caucho de alto coeficiente (a menudo por encima de 0.8 en seco) y se diseñan con perfiles que maximizan el contacto. Los escaladores aprenden a cargar el peso sobre los pies para aumentar [[N]] en el punto de apoyo, lo que eleva [[f_emax]] y permite adherirse a paredes más verticales. En roca mojada, [[mu_e]] puede caer a la mitad y el mismo movimiento que era seguro se vuelve imposible.

Variable dominante: ángulo de inclinación de la superficie de apoyo, que determina la proporción entre componente tangencial y normal del peso.
Límite de validez: el modelo de Coulomb se rompe en superficies mojadas, arenosas o con musgo, donde la adherencia depende de factores que no se reducen a un coeficiente constante.

## 5. Prevención de deslizamientos en estanterías de almacén

Las estanterías de almacén soportan cajas apiladas que pueden deslizar si un golpe, una vibración sísmica o una maniobra brusca de carretilla genera una fuerza horizontal transitoria. La estabilidad de cada caja depende de que la fuerza horizontal inducida no supere el umbral [[F_ext_crit]] dado por [[mu_e]] entre la base de la caja y la balda. Las normativas de seguridad industrial exigen verificar que la aceleración máxima esperada (por sismo o impacto) multiplicada por la masa de la caja no exceda el rozamiento estático disponible.

Las soluciones prácticas incluyen alfombrillas antideslizantes que aumentan [[mu_e]], rebordes físicos en las baldas y la distribución de los objetos más pesados en los niveles inferiores para bajar el centro de gravedad del conjunto. Cada medida modifica un parámetro distinto del modelo de este leaf: o bien eleva el coeficiente, o bien reduce la fuerza horizontal efectiva.

Variable dominante: aceleración horizontal transitoria (sísmica o por impacto), que actúa como fuerza perturbadora sobre cada caja.
Límite de validez: el modelo no contempla el vuelco por momento de fuerza; si la caja es alta y estrecha, puede volcarse antes de deslizar, y el análisis de fricción pura resulta insuficiente.
