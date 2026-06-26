const e=`## 1. Compresores de aire de tornillo con refrigeracion por aceite

Los compresores de tornillo modernos inyectan aceite en la camara de compresion para absorber el calor generado durante la compresion del aire. Esta tecnica mantiene la temperatura del aire muy proxima a la temperatura ambiente durante todo el proceso, aproximando el comportamiento isotermico del gas. El resultado es un consumo electrico menor que el de un compresor adiabatico equivalente, porque el area bajo la curva isotermica en el diagrama pV es menor que el area bajo la curva adiabatica para la misma relacion de compresion.

La clave del rendimiento es que el aceite, al tener alta capacidad calórica especifica, absorbe el calor en la zona de compresion y lo transfiere al radiador externo sin elevar significativamente su propia temperatura. La variable dominante es [[T]]: cuanto mas baja sea la temperatura durante la compresion, menor es el trabajo necesario para comprimir el mismo volumen de aire hasta la misma presion.

Variable dominante: la temperatura del gas durante la compresion; mantenerla cerca de [[T]] ambiente determina la eficiencia energetica del compresor.
Límite de validez: el modelo isotermico es valido cuando la velocidad de rotacion del tornillo es menor de 3000 rpm y el caudal de aceite es suficiente para mantener la temperatura del gas por debajo de 80 °C.

## 2. Respiracion de mamiferos marinos bajo el agua

Cuando una ballena bucea a grandes profundidades, el aire contenido en sus pulmones y cavidades conectadas se comprime por el aumento de la presion hidrostatica del agua. A profundidades de 200 metros, la presion exterior es de unos 20 atm. Los tejidos blandos de los pulmones ceden al exterior y el volumen de aire se reduce segun la ley de Boyle, porque la temperatura corporal del animal (37 °C aproximadamente) se mantiene relativamente constante gracias a la alta capacidad calórica del tejido biologico.

El volumen residual del pulmon a 200 metros de profundidad es aproximadamente un veinteavos del volumen a la superficie. Este colapso controlado es posible porque los alveolos del cetaceo son muy flexibles y porque el intercambio de calor con los tejidos circundantes mantiene la temperatura dentro del rango normal. El animal ha de subir lentamente para que el gas se reexpanda de forma cuasiestatica y el volumen pulmonar vuelva al valor inicial sin generar presiones daninas.

Variable dominante: la presion hidrostatica [[p1]], que aumenta linealmente con la profundidad y determina la reduccion del volumen [[V2]] segun la ley de Boyle.
Límite de validez: el modelo isotermico pulmonar falla a profundidades mayores de 300 metros, donde la presion supera los 30 atm y los efectos biologicos de la compresion generan calor adicional que eleva la temperatura del gas.

## 3. Manometros de Boyle en metrologia de presiones

Los manometros de Boyle son instrumentos de laboratorio que determinan presiones absolutas desconocidas midiendo el cambio de volumen de un gas de referencia a temperatura controlada. El principio es directo: si se conoce el estado inicial del gas de referencia y se mide el volumen tras equilibrar con la presion desconocida, la ley de Boyle permite calcular esa presion con alta precision.

Estos instrumentos se usan en metrologia de vacio, en la calibracion de sensores de presion industriales y en la determinacion experimental de la constante de los gases. La temperatura del gas de referencia se controla mediante un bano termostático cuya temperatura se mide con termometros de precision de milikelvin. El proceso de medicion es lento y cuasiestatico para garantizar que la isoterma se siga fielmente.

Variable dominante: el cociente [[V1]] sobre [[V2]], cuya precision en la medicion directamente determina la incertidumbre en la presion calculada.
Límite de validez: la medicion isotermica es valida para presiones entre 0.1 Pa y 10 000 Pa; por encima, las correcciones por imperfeccion del gas son significativas y requieren ecuaciones de estado de orden superior.

## 4. Botellas de gas comprimido para submarinismo

Una botella de buceo de 12 litros cargada a 200 bar contiene aire comprimido cuya cantidad de moles se calcula mediante la ecuacion de estado del gas ideal. Cuando el buzo respira, la presion en la botella disminuye casi isotermicamente porque el metal de la botella tiene alta capacidad calórica y mantiene la temperatura del gas muy proxima a la temperatura del agua (5 a 25 °C dependiendo de la zona).

El regulador de presion del equipo de buceo reduce la presion del gas desde el nivel de la botella hasta la presion ambiental del entorno del buzo. Este proceso de expansion ocurre en dos etapas, siendo la segunda expansion aproximadamente isotermica cuando el flujo de gas es bajo (buceo tranquilo). La ley de Boyle predice con buena precision el numero de respiraciones disponibles conociendo la presion inicial, la temperatura del agua y el volumen de cada inspiracion.

Variable dominante: la presion [[p1]] dentro de la botella, que determina directamente el volumen total de gas disponible para respirar a presion ambiental.
Límite de validez: la aproximacion isotermica falla en actividades de alta intensidad fisica donde el flujo de gas es rapido; en esos casos, la expansion es parcialmente adiabatica y la temperatura del gas cae, reduciendo ligeramente la presion de entrega del regulador.

## 5. Celulas de Langmuir-Blodgett para peliculas finas

En la tecnica de Langmuir-Blodgett para depositar peliculas monomoleculares sobre sustratos solidos, una monocapa de moleculas anfifílicas flota sobre la superficie del agua en una cubeta equipada con una barrera movil. Al desplazar la barrera, el area superficial disponible disminuye y la presion superficial de la monocapa aumenta. Este proceso es el analogo bidimensional del proceso isotermico: la temperatura del agua se mantiene constante mediante circulacion termostatizada y la "ley de Boyle bidimensional" relaciona la presion superficial con el area por molecula.

El diagrama presion superficial frente a area por molecula es el analogo bidimensional del diagrama pV de la isoterma. Las inflexiones en esta curva revelan transiciones de fase de la monocapa (analogas a las transiciones gas-liquido-solido en tres dimensiones). El control preciso de [[T]] mediante el termostato es esencial para obtener isotermas reproducibles y depositar peliculas de alta calidad.

Variable dominante: la temperatura [[T]] del agua, que determina la forma de la isoterma y la presion a la que ocurren las transiciones de fase de la monocapa.
Límite de validez: el modelo isotermico bidimensional falla cuando la velocidad de compresion de la barrera supera la tasa de relajacion de la monocapa, generando estados fuera de equilibrio que producen peliculas defectuosas.
`;export{e as default};
