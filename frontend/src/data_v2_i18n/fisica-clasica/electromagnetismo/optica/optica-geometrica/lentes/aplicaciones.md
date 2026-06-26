# Aplicaciones


## 1. Correccion de miopia con lente divergente

El ojo miope forma la imagen de objetos lejanos delante de la retina porque el globo ocular es demasiado largo o el cristalino converge en exceso. Para corregir este defecto, se antepone una lente divergente ([[distancia_focal]] negativo) que reduce la convergencia total del sistema ojo-lente. La lente divergente desplaza el foco imagen hacia atras, hasta que coincide con la retina.

La focal necesaria depende de la distancia del punto remoto del paciente. Si el punto remoto esta a 50 cm, la lente correctora debe tener una potencia optica de menos 2 dioptrias (focal de menos 50 cm) para que los rayos de un objeto en el infinito salgan de la lente como si procedieran de 50 cm, punto que el ojo miope puede enfocar.

Variable dominante: la distancia focal [[distancia_focal]] de la lente correctora, que determina cuanto se reduce la convergencia del sistema.
Limite de validez: el modelo de lente delgada es valido para gafas convencionales; para lentes de contacto, el espesor y la proximidad a la cornea requieren considerar la distancia al vertice y la curvatura corneal.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 1

## 2. Lupa simple para inspeccion de componentes electronicos

Un tecnico utiliza una lupa de 50 mm de focal para inspeccionar soldaduras en una placa de circuito impreso. Al colocar la placa a unos 40 mm de la lente (ligeramente menos que [[distancia_focal]]), obtiene una imagen virtual amplificada y derecha que observa mirando a traves de la lupa.

El aumento angular es aproximadamente el cociente entre la distancia convencional de vision nitida (250 mm) y [[distancia_focal]] (50 mm), lo que da un factor de 5. Las soldaduras de 0.3 mm aparecen como si midieran 1.5 mm, suficiente para detectar defectos de flujo o microfisuras. La imagen es virtual porque [[d_o]] es menor que [[distancia_focal]] en una lente convergente.

Variable dominante: la distancia focal [[distancia_focal]] de la lupa, que fija el aumento maximo utilizable antes de que la aberracion cromatica degrade la imagen.
Limite de validez: para aumentos superiores a 10 la aberracion cromatica del vidrio simple produce halos inaceptables; se requiere un doblete acromatico o un sistema de varias lentes.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 2

## 3. Objetivo fotografico de una camara reflex

El objetivo de una camara forma una imagen real e invertida del paisaje sobre el sensor digital. Un objetivo de 50 mm de focal (considerado normal para formato completo) produce una imagen a escala del paisaje en el plano focal cuando el sujeto esta a mas de 10 metros (practicamente en el infinito a efectos de la ecuacion de la lente).

El enfoque se logra desplazando la lente ligeramente respecto al sensor. Para un retrato a 2 metros, [[d_i]] resulta aproximadamente 51.3 mm: el objetivo debe avanzar 1.3 mm respecto a la posicion de infinito. El aumento lateral para un sujeto de 1.7 m de altura a 2 m es de aproximadamente menos 0.026, produciendo una imagen de unos 44 mm de altura en el sensor.

Variable dominante: la distancia del objeto [[d_o]], que determina el desplazamiento necesario del objetivo para enfocar y el aumento resultante.
Limite de validez: el modelo de lente delgada unica se aplica como primera aproximacion; los objetivos reales son sistemas de multiples lentes optimizados para minimizar aberraciones en todo el campo.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 3

## 4. Lente condensadora en un sistema de iluminacion de microscopio

La lente condensadora del microscopio concentra la luz del iluminador sobre la muestra, asegurando iluminacion uniforme en todo el campo de vision. Se coloca entre la fuente de luz y la platina, y su focal tipica esta entre 10 y 20 mm.

La condensadora forma una imagen real de la fuente en el plano de la muestra (iluminacion Kohler) o cerca de el (iluminacion critica). Ajustando la posicion de la condensadora (variando [[d_o]] entre la fuente y la lente), se controla la uniformidad y el angulo del cono de iluminacion. Una apertura numerica mayor de la condensadora permite resoluciones mas altas en la observacion.

Variable dominante: la posicion [[d_o]] de la fuente respecto a la condensadora, que controla la distribucion espacial de la luz sobre la muestra.
Limite de validez: para condensadoras de alta apertura numerica (mayor de 0.9) la aproximacion paraxial falla; se requiere trazado de rayos exacto y a menudo se usa aceite de inmersion para alcanzar el medio homogeneo requerido.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 4

## 5. Lente de enfoque en un sistema laser de corte industrial

En el corte laser, una lente convergente de focal corta (tipicamente 50 a 125 mm) enfoca el haz colimado del laser sobre la pieza metalica. La alta densidad de potencia en el punto focal (del orden de megavatios por centimetro cuadrado) funde o vaporiza el material.

La posicion del foco respecto a la superficie de la pieza es critica: desplazamientos de fracciones de milimetro cambian drasticamente el diametro del punto y la densidad de potencia. La relacion entre [[d_o]] (distancia del haz colimado, efectivamente infinita) y [[d_i]] (posicion del foco) se simplifica a [[d_i]] igual a [[distancia_focal]]. El diametro del punto focal depende de la difraccion, pero la posicion axial esta dominada por la focal de la lente.

Variable dominante: la distancia focal [[distancia_focal]], que determina la distancia de trabajo y el tamano del punto focal sobre la pieza.
Limite de validez: el modelo geometrico predice la posicion del foco, pero el tamano real del punto esta limitado por difraccion y aberraciones termicas de la lente al absorber una fraccion del haz de alta potencia.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 5