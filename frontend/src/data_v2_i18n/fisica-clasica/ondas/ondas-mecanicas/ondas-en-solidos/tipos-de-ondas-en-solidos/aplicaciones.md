# Aplicaciones

## 1. Inspeccion por ultrasonidos de soldaduras en acero estructural

La inspeccion no destructiva de soldaduras en estructuras metalicas es la aplicacion industrial mas extendida de las ondas elasticas en solidos. Los equipos de ultrasonidos generan un pulso de onda P (longitudinal) que penetra en el cordon de soldadura y regresa al transductor si encuentra una discontinuidad interna —poro, grieta, inclusion de escoria— cuya impedancia acustica difiere de la del acero base.

El tecnico selecciona ondas P para inspeccionar el volumen de la soldadura porque [[velocidad_de_onda_longitudinal_p]] del acero (en torno a 5900 m/s) permite frecuencias de inspección de 2 a 5 MHz con longitudes de onda de 1 a 3 mm, suficientes para detectar discontinuidades mayores de 1 mm. Para inspeccionar grietas orientadas verticalmente (paralelas a la superficie), se cambia a transductores de onda S, que generan [[velocidad_de_onda_transversal_s]] en torno a 3200 m/s y son mas sensibles a reflexiones en planos de corte.

La eleccion del tipo de onda determina la resolucion, la profundidad de penetracion y la sensibilidad a distintos tipos de defecto. Sin el conocimiento de [[velocidad_de_onda_longitudinal_p]] y [[velocidad_de_onda_transversal_s]] del material base y del material de aportacion, no es posible calibrar los tiempos de vuelo ni las posiciones de los ecos detectados.

Variable dominante: velocidad de onda longitudinal [[velocidad_de_onda_longitudinal_p]] del material base, que fija la escala de tiempo del ensayo.
Límite de validez: el modelo de onda plana en medio homogeneo es valido cuando la longitud de onda supera en un factor 10 al tamaño de grano del acero inspeccionado; por encima de 15 MHz el scattering de grano enmascara los ecos de defecto en aceros con grano grueso.

---

## 2. Caracterización elastica de suelos por analisis espectral de ondas superficiales

La tecnica SASW (Spectral Analysis of Surface Waves) y su extension MASW (Multichannel Analysis) explotan la dispersion de las ondas de Rayleigh para determinar el perfil de [[velocidad_de_onda_transversal_s]] con la profundidad en suelos y pavimentos. Los ingenieros geotecnicos y de infraestructuras usan esta tecnica para evaluar la rigidez del terreno sin perforaciones, lo que la hace especialmente valiosa en areas urbanas.

El principio es el siguiente: en un suelo estratificado, [[velocidad_de_onda_de_rayleigh]] depende de la frecuencia porque cada frecuencia "muestrea" una profundidad diferente. Las frecuencias bajas penetran mas profundo y ven el sustrato mas rigido; las frecuencias altas quedan confinadas a las capas superficiales mas blandas. Midiendo [[velocidad_de_onda_de_rayleigh]] en funcion de la frecuencia (curva de dispersion) y ajustando el modelo de capas, se obtiene el perfil de [[velocidad_de_onda_transversal_s]] en profundidad, del que se deriva [[modulo_de_corte]] y, con la densidad, el modulo de Young.

Esta tecnica es ampliamente usada para clasificar el terreno segun normas sismicas (Eurocodigo 8, NEHRP) en funcion del valor promedio de [[velocidad_de_onda_transversal_s]] en los primeros 30 m de profundidad.

Variable dominante: velocidad de Rayleigh [[velocidad_de_onda_de_rayleigh]] en funcion de la frecuencia, cuya dispersion revela la estratificacion del suelo.
Límite de validez: la tecnica pierde resolucion cuando las capas son muy delgadas (espesor menor de la decima parte de la longitud de onda de inspección) o cuando el gradiente de propiedades es muy abrupto entre capas adyacentes; en esos casos se producen artefactos en la curva de dispersion.

---

## 3. Medición de la textura cristalografica en chapas laminadas

Durante el laminado en frio de chapa de acero o aluminio, la presion de laminacion genera una textura cristalografica preferente (anisotropia) que afecta a las propiedades de embuticion y conformado. Las medidas ultrasonicas de [[velocidad_de_onda_longitudinal_p]] y [[velocidad_de_onda_transversal_s]] en distintas direcciones de la chapa permiten cuantificar el grado de anisotropia sin necesidad de difraccion de rayos X ni de tecnicas de laboratorio destructivas.

En una chapa perfectamente isotropa, [[velocidad_de_onda_longitudinal_p]] seria identica en todas las direcciones. En una chapa texturada, [[velocidad_de_onda_longitudinal_p]] varia tipicamente entre 1 y 5 % segun la orientacion medida. La diferencia entre la velocidad en la direccion de laminacion y la perpendicular, dividida entre su valor medio, es un indicador directo del coeficiente de anisotropia r de Lankford, que determina la aptitud de la chapa para el embutido profundo.

La aplicacion industrial consiste en medir [[velocidad_de_onda_longitudinal_p]] con transductores EMAT (electromagneticos, sin contacto) en linea durante la produccion, detectando en tiempo real si la textura se desvía de la especificacion.

Variable dominante: variacion angular de [[velocidad_de_onda_longitudinal_p]] con la orientacion de medicion, que refleja la anisotropia elastica inducida por la textura de laminacion.
Límite de validez: la medicion ultrasonics detecta la anisotropia elastica, que no siempre es proporcional a la anisotropia plastica (coeficiente r). Para chapas con tratamientos termicos complejos, la relacion entre ambas puede desviarse y requerirse calibracion especifica.

---

## 4. Alerta sismica temprana basada en deteccion diferencial de onda P y onda S

Los sistemas de alerta sismica temprana (EEW, Earthquake Early Warning) se basan en detectar la llegada de la onda P (longitudinal, mas rapida) en redes de sismografos cercanos al epicentro y usar esos datos para estimar la magnitud y emitir una alerta a zonas mas alejadas antes de que llegue la onda S o la onda de Rayleigh, que son las responsables del daño estructural.

El fundamento fisico es que [[velocidad_de_onda_longitudinal_p]] de la corteza terrestre (en torno a 6000 m/s) supera a [[velocidad_de_onda_transversal_s]] (en torno a 3500 m/s) en un factor de aproximadamente 1.7. Esto significa que para una estacion a 200 km del epicentro, la onda P llega unos 24 segundos antes que la onda S. Ese intervalo, aunque breve, permite emitir alertas a poblaciones y automatismos (cierre de valvulas de gas, detencion de trenes de alta velocidad, apertura de puertas de emergencia) antes de la llegada de la sacudida dañina.

Las ondas de Rayleigh llegan incluso mas tarde que las S pero con mayor amplitud, de modo que el intervalo de alerta util entre onda P y onda de Rayleigh puede ser de 30 a 60 segundos para terremotos con epicentro a 150 a 200 km de la estacion.

Variable dominante: diferencia de tiempos de llegada entre onda P (usa [[velocidad_de_onda_longitudinal_p]]) y onda S (usa [[velocidad_de_onda_transversal_s]]), que es el margen de tiempo disponible para la alerta.
Límite de validez: para epicentros muy cercanos a la estacion (menos de 30 km), el tiempo de alarma es de apenas unos segundos y puede no ser suficiente para activar protocolos automaticos; ademas, la deteccion automatica de la onda P puede confundirse con ruido microsismico en redes de baja sensibilidad.

---

## 5. Control de la adherencia de recubrimientos duros mediante ondas de Rayleigh

Los recubrimientos duros (TiN, TiAlN, DLC) depositados sobre herramientas de corte o implantes ortopedicos pueden desprenderse si la adhesion en la interfaz es insuficiente. La tecnica de inspeccion por ondas de Rayleigh permite detectar defectos de adhesion superficiales sin contacto liquido ni dano al recubrimiento.

Cuando una onda de Rayleigh se propaga sobre un recubrimiento correctamente adherido, su velocidad es la del sistema recubrimiento-sustrato, que depende de la frecuencia (dispersion) porque la longitud de onda de Rayleigh muestrea diferentes profundidades. Si el recubrimiento esta desprendido (delaminado), la onda de Rayleigh se refleja y atenua en el borde del defecto, produciendo una señal caracteristica en el dominio del tiempo.

La sensibilidad de la tecnica depende de que la longitud de onda de Rayleigh sea comparable al espesor del recubrimiento. Para recubrimientos de 5 µm y [[velocidad_de_onda_de_rayleigh]] de 3000 m/s, la frecuencia necesaria es del orden de 600 MHz, lo que requiere equipos de microondas acusticas o laser ultrasonico.

Variable dominante: velocidad de Rayleigh [[velocidad_de_onda_de_rayleigh]] del sistema recubrimiento-sustrato, cuya variacion con la frecuencia revela la presencia y extension de la delaminacion.
Límite de validez: la tecnica distingue defectos de adherencia cuando la delaminacion tiene una extension lateral mayor que la longitud de onda; defectos mas pequeños producen señales de amplitud insuficiente para ser distinguidas del ruido del ensayo.