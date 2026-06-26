const e=`# Aplicaciones de la difraccion

## 1. Espectroscopia de redes de difraccion

Los espectrometros opticos utilizan redes de difraccion para separar la luz en sus componentes espectrales. Una red con miles de lineas por milimetro dispersa diferentes longitudes de onda en angulos caracteristicos, permitiendo analizar la composicion de fuentes luminosas.

En astronomia, los espectrometros de red acoplados a telescopios permiten determinar la composicion quimica de estrellas y galaxias distantes. Cada elemento produce lineas espectrales caracteristicas que aparecen como maximos de intensidad en posiciones angulares calculables por la ecuacion de difraccion.

Variable dominante: el espaciado de la red (lineas por milimetro), que determina la dispersion angular y la resolucion espectral alcanzable.

Límite de validez: la teoria supone rendijas ideales e iluminacion coherente. En redes reales, imperfecciones de fabricacion modifican ligeramente los angulos teoricos. Ademas, a ordenes muy altos, espectros de diferentes ordenes pueden superponerse. La precision angular depende del numero total de lineas iluminadas y de la calidad de la superficie de la red.

## 2. Limites de resolucion en instrumentos opticos

Los microscopios, telescopios y camaras fotograficas estan limitados por la difraccion. La luz que pasa por aperturas circulares produce la mancha de Airy: un disco central rodeado de anillos concentricos. Dos puntos cercanos solo se distinguen si sus discos de Airy no se superponen excesivamente.

Este limite de difraccion determina la resolucion espacial maxima de cualquier instrumento optico. Microscopios de luz visible no pueden resolver detalles menores que aproximadamente 200 nanometros. Telescopios terrestres estan limitados por la difraccion del espejo primario.

Variable dominante: el diametro de la apertura (o espejo primario), que determina el tamano angular de la mancha de Airy y por tanto la resolucion maxima.

Límite de validez: el limite de difraccion es una cota inferior fundamental, pero otros factores (turbulencia atmosferica, aberraciones opticas, ruido del detector) pueden reducir aun mas la resolucion practica. El diseno de instrumentos opticos avanzados requiere compensar estos efectos mediante optica adaptativa y materiales de alta calidad.

## 3. Difraccion de rayos X por cristales

Los cristales solidos tienen planos atomicos espaciados a distancias del orden de angstroms (10^-10 m), comparables a la longitud de onda de rayos X. Cuando un haz de rayos X incide sobre un cristal, los planos atomicos actuan como una red tridimensional de difraccion.

La ley de Bragg describe los angulos donde ocurre interferencia constructiva mediante una relacion entre espaciado cristalino, angulo y [[lambda]]. Medir estos angulos permite determinar la estructura cristalina: espaciados atomicos, simetrias y contenido elemental.

Esta tecnica, descubierta por los Bragg en 1912, es fundamental para cristalografia de proteinas, determinacion de estructuras de medicamentos, nanomateriales y analisis de semiconductores.

Variable dominante: el espaciado entre planos atomicos (d), que determina los angulos de Bragg para cada longitud de onda.

Límite de validez: la ley de Bragg supone cristales perfectos y rayos X monocromaticos. En muestras con defectos cristalinos o tensiones internas, los picos de difraccion se ensanchan o desplazan, requiriendo modelos mas complejos. La calidad de los datos experimentales determina la precision de la estructura cristalina obtenida.

## 4. Holografia y almacenamiento optico

La holografia registra patrones de interferencia entre luz coherente de referencia y luz dispersada por un objeto. Este patron de interferencia (holograma) contiene informacion de amplitud y fase. Al iluminar el holograma con luz similar a la de referencia, la difraccion reconstruye la onda original, creando una imagen tridimensional virtual.

Los hologramas actuales usan redes de difraccion computarizadas generadas digitalmente (holografia computacional). Los discos opticos (CD, DVD, Blu-ray) almacenan datos como pozos microscopicos que actuan como red de difraccion: al iluminar con laser, la luz difractada se detecta y decodifica como bits de informacion.

Variable dominante: la longitud de onda del laser de lectura, que debe coincidir con la usada durante la grabacion para reconstruccion correcta.

Límite de validez: la holografia requiere luz coherente (laser) y estabilidad mecanica extrema durante la grabacion. Vibraciones de fracciones de longitud de onda destruyen el patron de interferencia.

## 5. Filtros espaciales y optica de Fourier

En optica de Fourier, lentes convierten distribuciones angulares en posiciones espaciales. Una mascara en el plano de Fourier (focal de la lente) puede eliminar ciertos angulos de difraccion, actuando como filtro espacial.

Esta tecnica permite eliminar ruido periodico de imagenes, mejorar bordes, o extraer caracteristicas espaciales especificas. En microscopia de contraste de fases, la difraccion convierte variaciones de fase en variaciones de intensidad visibles, revelando estructuras transparentes que serian invisibles en microscopia convencional.

Variable dominante: la posicion de la mascara en el plano de Fourier, que determina que frecuencias espaciales (angulos de difraccion) se transmiten y cuales se bloquean.

Límite de validez: la optica de Fourier supone lentes perfectos e iluminacion monocromatica coherente. Lentes reales introducen aberraciones que limitan la precision del filtrado, y luz policromatica produce patrones de difraccion superpuestos. Las aplicaciones industriales requieren fuentes de luz filtradas y sistemas de alineacion precisa para obtener resultados reproducibles.
`;export{e as default};
