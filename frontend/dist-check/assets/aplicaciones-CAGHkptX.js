const e=`## 1. Localizacion del epicentro por triangulacion sismica

Una red de estaciones sismologicas (minimo tres) mide la diferencia de tiempos [[delta_t_ps]] de cada sismo registrado. Cada estacion convierte su [[delta_t_ps]] en una distancia [[d_foco]] utilizando las velocidades medias conocidas del medio. Se traza un circulo centrado en cada estacion con radio igual a la distancia estimada. La interseccion de los tres circulos localiza el epicentro en superficie. La componente vertical se obtiene ajustando la profundidad para que las tres distancias hipocentricas sean consistentes.

El metodo es rapido y permite alertas automaticas en menos de 10 segundos en redes densas como las de Japon o California. Su precision depende de la calidad del modelo de velocidades y de la geometria de la red (estaciones bien distribuidas azimutalmente). Para sismos muy lejanos, la curvatura terrestre y la estratificacion del manto obligan a usar dromocronas calculadas con modelos como PREM en lugar de la formula lineal directa.

Variable dominante: la diferencia de tiempos P-S medida en cada estacion, que se transforma directamente en distancia hipocentral.
Límite de validez: para distancias mayores de 200 km con modelo homogeneo, el error supera el 10 por ciento y hay que usar dromocronas corregidas por estructura radial terrestre.

## 2. Deteccion de reservorios de hidrocarburos mediante sismica de reflexion

En exploracion de petroleo y gas, se generan ondas sismicas artificiales (con vibradores o explosivos) y se registra su reflexion en interfaces geologicas profundas. La clave es medir [[v_p]] y [[v_s]] en las distintas capas. Una roca saturada de fluido (petroleo o gas) muestra un aumento anomalo del [[ratio_vp_vs]] respecto a la roca seca circundante, porque el fluido incrementa [[K_bulk]] pero apenas afecta a [[G_shear]].

Este contraste permite cartografiar reservorios a profundidades de 2 a 5 km sin perforacion. Las tecnicas AVO (amplitud versus offset) aprovechan que la reflectividad de la interfaz depende del angulo de incidencia, que a su vez depende del contraste de [[v_p]] y [[v_s]] entre capas. Un cambio de [[ratio_vp_vs]] de 1.7 (roca seca) a 2.1 (roca saturada) es una anomalia de «bright spot» directamente interpretable como posible trampa de hidrocarburo.

Variable dominante: el cociente de velocidades P y S en la capa objetivo, que revela la presencia de fluidos en los poros de la roca reservorio.
Límite de validez: en reservorios con gas a muy baja saturacion (menor del 5 por ciento), el efecto sobre [[ratio_vp_vs]] puede ser indetectable por encima del ruido sismico.

## 3. Clasificacion geotecnica de suelos para diseno sismorresistente

Las normas internacionales de construccion (Eurocodigo 8, NEHRP, NSR-10) clasifican el suelo de cimentacion segun la velocidad [[v_s]] promedio en los primeros 30 metros de profundidad (parametro VS30). Suelos blandos (VS30 menor de 180 m/s) amplifican dramaticamente las ondas sismicas superficiales, mientras suelos duros o roca (VS30 mayor de 760 m/s) transmiten las ondas con poca amplificacion.

La medicion de [[v_s]] se realiza mediante ensayos cross-hole, down-hole o MASW (analisis multicanal de ondas superficiales). El valor VS30 determina directamente el factor de amplificacion del suelo y por tanto el espectro de diseno sismico con el que se dimensionan las estructuras. Un error de 50 m/s en la estimacion de VS30 puede cambiar la categoria del suelo (de C a D, por ejemplo) y aumentar un 40 por ciento las fuerzas de diseno.

Variable dominante: la velocidad de onda S promedio en los 30 metros superiores del terreno, que controla la amplificacion sismica local.
Límite de validez: VS30 no captura efectos de resonancia por capas blandas profundas (efecto sitio 1D complejo) ni heterogeneidades laterales como valles sedimentarios que producen efectos 2D/3D.

## 4. Confirmacion de la estructura interna de la Tierra mediante zonas de sombra

Las estaciones sismologicas situadas entre 104 y 140 grados de distancia angular respecto al epicentro no reciben ondas P directas (zona de sombra P) y no reciben ondas S en absoluto mas alla de 104 grados. La explicacion requiere un nucleo externo liquido: [[G_shear]] nulo implica [[v_s]] nulo, absorbiendo completamente las ondas S, y el cambio brusco de [[v_p]] refracta las P alejandolas de la zona intermedia.

En 1936, Inge Lehmann observo llegadas debiles de P dentro de la zona de sombra y propuso un nucleo interno solido que las refractaba de vuelta. Este descubrimiento se confirmo con las velocidades sismicas: el nucleo interno tiene [[v_p]] de 11000 m/s y [[v_s]] finita (3500 m/s), demostrando que es solido. La sismologia global sigue usando las ondas P y S como la unica herramienta capaz de diagnosticar el estado fisico de capas a miles de km de profundidad.

Variable dominante: la velocidad de onda S en las distintas capas terrestres, cuya anulacion en el nucleo externo crea la zona de sombra y demuestra la existencia de fluido.
Límite de validez: el modelo radial 1D no explica anomalias laterales como las provincias de baja velocidad en la base del manto (LLSVPs), que requieren tomografia 3D.

## 5. Monitoreo de pruebas nucleares subterraneas y verificacion del CTBT

El Tratado de Prohibicion Completa de Ensayos Nucleares (CTBT) se verifica mediante una red global de estaciones sismologicas (IMS, International Monitoring System) que detectan ondas P generadas por explosiones subterraneas. Una explosion nuclear genera un patron sismico caracteristico: ondas P muy energeticas con frecuencias altas (5-20 Hz) y poca energia en ondas S comparada con un terremoto natural de la misma magnitud.

La discriminacion explosion-terremoto se basa precisamente en el [[ratio_vp_vs]] aparente y en la relacion de amplitudes entre ondas P y S: una explosion produce fundamentalmente compresion radial (rico en P), mientras un terremoto natural (deslizamiento de falla con cizalla) genera P y S en proporciones comparables. Estaciones a 1000-3000 km detectan explosiones de apenas 1 kiloton gracias a la alta sensibilidad a [[v_p]] y la discriminacion P/S. El sistema puede localizar el evento con precision de 10 km usando [[delta_t_ps]] de multiples estaciones.

Variable dominante: la relacion de amplitudes entre ondas P y S en la señal registrada, que permite discriminar entre explosion (P dominante) y terremoto natural (P y S equilibrados).
Límite de validez: explosiones de muy baja potencia (inferiores a 0.1 kiloton) o realizadas en cavidades desacopladas producen señales por debajo del umbral de deteccion de la red a distancias regionales.
`;export{e as default};
