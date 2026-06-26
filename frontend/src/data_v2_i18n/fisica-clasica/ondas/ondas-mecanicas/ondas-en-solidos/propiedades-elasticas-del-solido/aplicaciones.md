# Aplicaciones

## 1. Diseño estructural de vigas y columnas de acero

El dimensionamiento de elementos estructurales en construccion civil depende directamente del [[modulo_de_young]] del acero. Un ingeniero estructural necesita garantizar que la flecha maxima de una viga bajo carga de servicio no supere una fraccion permitida de la luz (tipicamente la longitud dividida entre 250 o 300). La flecha es inversamente proporcional al modulo de Young: a mayor rigidez, menor deformacion bajo la misma carga.

Para una viga simplemente apoyada con carga puntual centrada, la flecha maxima depende del cubo de la luz, de la carga y del producto del modulo de Young por el momento de inercia de la seccion. La decision de diseño consiste en elegir un perfil cuyo momento de inercia, combinado con el [[modulo_de_young]] del acero (200 GPa), mantenga la flecha dentro del limite. Si se usa aluminio (70 GPa), la seccion debe ser significativamente mayor para lograr la misma rigidez.

Variable dominante: el [[modulo_de_young]] del material, que controla la deformacion elastica de la estructura bajo cargas de servicio.
Limite de validez: el modelo deja de ser valido cuando la tension supera el limite elastico del acero (tipicamente entre 250 y 600 MPa), momento en el que aparece deformacion plastica permanente.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 1

## 2. Caracterizacion no destructiva de materiales por ultrasonidos

La medicion de velocidades de ondas ultrasonicas en una pieza permite determinar sus constantes elasticas sin dañarla. La velocidad longitudinal depende del modulo de onda plana (combinacion de [[modulo_de_compresibilidad]] y [[modulo_de_cizalla]]) y la velocidad transversal depende exclusivamente de [[modulo_de_cizalla]]. Con ambas velocidades y la densidad se calculan todos los modulos.

Esta tecnica se utiliza rutinariamente en control de calidad de fundiciones, forjas y soldaduras. Un defecto interno (poro, inclusion, grieta) modifica localmente las constantes elasticas y altera la velocidad de propagacion, permitiendo su deteccion. La precision depende de la frecuencia del transductor y de la calidad del acoplamiento acustico entre el sensor y la pieza.

Variable dominante: el [[modulo_de_cizalla]] del material, cuya variacion local senala la presencia de defectos o cambios microestructurales.
Limite de validez: la tecnica requiere que la longitud de onda sea mucho mayor que el tamano de grano del material para que la propagacion sea coherente. A frecuencias superiores a 20 MHz en metales de grano grueso, la dispersion por grano invalida las mediciones.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 2

## 3. Seleccion de materiales para muelles y resortes

El diseño de un resorte helicoidal para una suspension de vehiculo exige conocer el [[modulo_de_cizalla]] del acero del alambre. La constante de rigidez del resorte es directamente proporcional al modulo de cizalla y a la cuarta potencia del diametro del alambre, e inversamente proporcional al cubo del diametro medio de la espira y al numero de espiras activas.

El ingeniero debe seleccionar un acero con [[modulo_de_cizalla]] adecuado (tipicamente 80 GPa para aceros de resorte) y verificar que la tension tangencial maxima no supere el limite de fatiga del material. Un error en el modulo de cizalla produce un resorte demasiado blando o demasiado rigido, comprometiendo el confort o la seguridad del vehiculo.

Variable dominante: el [[modulo_de_cizalla]] del material del alambre, que fija la constante de rigidez del resorte.
Limite de validez: el modelo elastico lineal falla si la deformacion angular del alambre supera el regimen elastico, generalmente cuando la tension tangencial excede el 40 % de la tension de rotura del acero.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 3

## 4. Sismologia y estructura interna de la Tierra

Los sismologos utilizan las velocidades de las ondas P (longitudinales) y S (transversales) registradas por redes de estaciones para inferir la distribucion de [[modulo_de_compresibilidad]] y [[modulo_de_cizalla]] en el interior terrestre. La desaparicion de las ondas S al atravesar el nucleo externo demostro que este es liquido, porque un fluido tiene [[modulo_de_cizalla]] nulo y no soporta ondas transversales.

La relacion entre velocidades P y S proporciona el [[nu_poisson]] efectivo de cada capa geologica. Las discontinuidades sismicas (Mohorovicic, Gutenberg, Lehmann) corresponden a cambios bruscos de las constantes elasticas asociados a transiciones de fase o cambios de composicion. La resolucion de la tomografia sismica depende de la densidad de estaciones y de la cobertura angular de los trayectos de onda.

Variable dominante: la relacion entre [[modulo_de_compresibilidad]] y [[modulo_de_cizalla]] en cada capa geologica, que determina las velocidades de onda y la existencia o ausencia de ondas transversales.
Limite de validez: el modelo elastico isotropo falla en regiones con anisotropia sismica (como el manto superior bajo dorsales oceanicas), donde las velocidades dependen de la direccion de propagacion y se necesitan modelos con al menos cinco constantes.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 4

## 5. Diseño de protesis ortopedicas y biomateriales

En la implantologia ortopedica, la seleccion del material de una protesis de cadera o rodilla debe considerar la compatibilidad elastica con el hueso circundante. Si el [[modulo_de_young]] del implante es muy superior al del hueso (hueso cortical tiene aproximadamente 15-25 GPa, mientras que aleaciones de titanio tienen 110 GPa y acero inoxidable 200 GPa), se produce el fenomeno de apantallamiento de tension (stress shielding): el implante absorbe la mayor parte de la carga y el hueso adyacente, al no ser estimulado mecanicamente, se reabsorbe y debilita.

Para mitigar este problema, la ingenieria biomedica desarrolla materiales porosos o espumas metalicas cuyo [[modulo_de_young]] efectivo se aproxima al del hueso, asi como aleaciones de titanio beta con modulos mas bajos (50-80 GPa). El [[nu_poisson]] del material tambien influye en la distribucion de tensiones en la interfaz hueso-implante.

Variable dominante: el [[modulo_de_young]] del material del implante, cuya discrepancia con el del hueso determina el grado de apantallamiento de tension.
Limite de validez: el modelo elastico lineal es insuficiente para tejido oseo, que es anisotropo, viscoelastico y se remodela biologicamente en respuesta a la carga. El analisis requiere modelos acoplados mecanobiologicos cuando el periodo de estudio supera las semanas.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 5