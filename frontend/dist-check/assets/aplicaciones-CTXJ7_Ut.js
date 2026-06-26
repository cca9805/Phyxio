const e=`# Aplicaciones de las ondas estacionarias\r
\r
## 1. Instrumentos musicales de cuerda\r
\r
Los instrumentos de cuerda como violines, cellos, guitarras y pianos funcionan mediante ondas estacionarias. Cuando un musico toca una cuerda, excita preferentemente el modo fundamental pero inevitablemente introduce componentes de modos superiores. La combinacion especifica de estas frecuencias determina el **timbre caracteristico** de cada instrumento.\r
\r
La frecuencia fundamental, determinada por la longitud de la cuerda y la velocidad de propagacion, establece la altura del tono percibido. Los luthiers ajustan estas magnitudes mediante la tension de afinado y la eleccion de materiales con densidades lineales especificas.\r
\r
Variable dominante: la longitud de cuerda [[longitud_cuerda]] controla directamente la frecuencia fundamental mediante una relacion inversamente proporcional; acortar [[longitud_cuerda]] aumenta [[frecuencia_fundamental]] y alarga [[longitud_cuerda]] la reduce.\r
\r
Limite de validez: el modelo lineal de ondas estacionarias es valido para amplitudes pequenas comparadas con la longitud de onda; vibraciones muy intensas introducen efectos no lineales que distorsionan el espectro armonico.\r
\r
## 2. Diseno de diapasones y afinadores\r
\r
Los diapasones son herramientas de precision que utilizan ondas estacionarias para generar tonos de referencia exactos. Un diapason tipico de 440 Hz consiste en una barra metalica con extremos que vibran en modos longitudinales estacionarios. La frecuencia depende de la longitud, densidad y modulo de elasticidad del material.\r
\r
Los afinadores electronicos modernos analizan el espectro de frecuencias de las ondas estacionarias producidas por instrumentos, identificando la fundamental y comparandola con valores de referencia para determinar si la nota esta demasiado aguda o grave.\r
\r
Variable dominante: la frecuencia del modo fundamental [[frecuencia_fundamental]] esta determinada por la longitud del brazo y la velocidad de propagacion en el material; variar cualquiera de las dos cambia el tono de referencia del diapason. El factor de calidad mecanico del acero permite que el modo fundamental persista durante segundos sin excitacion continua, lo que resulta imprescindible para su funcion de referencia.\r
\r
Limite de validez: para diapasones, el modelo requiere que las dimensiones transversales sean mucho menores que la longitud; es valido para diapasones esbeltos pero no para bloques compactos o formas no esbeltas.\r
\r
## 3. Cavitaciones y resonancias acusticas\r
\r
Las ondas estacionarias en cavidades acusticas son fundamentales en el diseno de salas de concierto, estudios de grabacion y sistemas de sonido. Las dimensiones de una sala determinan las frecuencias de resonancia donde las ondas sonoras establecen patrones estacionarios con nodos y vientres de presion.\r
\r
Los ingenieros acusticos utilizan paneles absorbentes y difusores para controlar estas resonancias indeseadas. El conocimiento preciso de los modos estacionarios permite disenar espacios con respuesta acustica uniforme evitando zonas de cancelacion o excesiva reverberacion.\r
\r
Variable dominante: las dimensiones geometricas de la cavidad determinan las longitudes de onda permitidas [[longitud_onda_estacionaria]] y sus correspondientes frecuencias de resonancia; modificar la geometria cambia la posicion de nodos y vientres de presion. En salas de concierto, los modos de baja frecuencia, cuyas longitudes de onda son comparables a las dimensiones de la sala, son los mas dificiles de controlar acusticamente y los que producen coloracion tonal mas perceptible.\r
\r
Limite de validez: el modelo de onda estacionaria es aplicable cuando las dimensiones de la cavidad son mucho mayores que la longitud de onda; es invalido para cavidades sublongitudinales donde solo caben fracciones de onda.\r
\r
## 4. Laseres y cavidades opticas\r
\r
En optica, los laseres funcionan mediante ondas estacionarias electromagneticas confinadas en cavidades resonantes. Los espejos del laser actuan como analogos de los extremos fijos de una cuerda, imponiendo condiciones de contorno que cuantizan las frecuencias de oscilacion permitidas.\r
\r
Los modos longitudinales del laser corresponden exactamente a ondas estacionarias donde la longitud de la cavidad contiene un numero entero de medias longitudes de onda. Esta cuantizacion determina los modos de emision laser y sus separaciones espectrales.\r
\r
Variable dominante: el numero de modo longitudinal [[numero_armonico]] etiqueta cada linea espectral permitida en la emision laser; la separacion entre modos consecutivos es inversamente proporcional a la longitud de cavidad [[longitud_cuerda]].\r
\r
Limite de validez: el modelo de onda estacionaria clasica requiere que la longitud de cavidad sea mucho mayor que la longitud de onda optica; no es valido para microcavidades de dimensiones comparables a la longitud de onda.\r
\r
## 5. Medicion de propiedades de materiales\r
\r
Las ondas estacionarias proporcionan metodos experimentales para determinar propiedades mecanicas de materiales. Mediante la excitacion de vibraciones estacionarias en una muestra y la medicion de sus frecuencias de resonancia, es posible calcular el modulo de elasticidad, la densidad y el coeficiente de amortiguamiento.\r
\r
Esta tecnica se aplica en ensayos no destructivos para detectar defectos internos en estructuras. Las discontinuidades modifican las condiciones de contorno efectivas, desplazando las frecuencias de los modos estacionarios respecto a los valores teoricos predichos para un material sano.\r
\r
Variable dominante: la velocidad de propagacion [[velocidad_propagacion]] conecta directamente con las propiedades elasticas del material a traves de su relacion con el modulo de Young y la densidad; su medicion experimental permite inferir ambas propiedades sin contacto destructivo.\r
\r
Limite de validez: el analisis modal requiere que las frecuencias de medicion correspondan a modos estacionarios bien definidos; no es valido cuando el amortiguamiento es tan fuerte que los modos se solapan o no se distinguen espectralmente.\r
`;export{e as default};
