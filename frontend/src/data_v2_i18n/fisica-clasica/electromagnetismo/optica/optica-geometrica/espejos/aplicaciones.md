# Aplicaciones


## 1. Telescopio reflector newtoniano

Los telescopios reflectores utilizan un espejo concavo primario de gran diametro para recoger la luz de objetos astronomicos distantes. Los rayos paralelos procedentes de una estrella convergen en el foco del espejo primario, donde un espejo plano secundario redirige la imagen hacia el ocular lateral. La capacidad de captacion de luz depende del area del espejo primario, y la posicion focal esta determinada por [[distancia_focal_del_espejo]], que a su vez depende de [[radio_de_curvatura_del_espejo]].

En telescopios de gran apertura, la aberracion esferica del espejo primario se corrige usando superficies parabolicas en lugar de esfericas. La ecuacion del espejo esferico se emplea como primera aproximacion para dimensionar el sistema, y el trazado de rayos se usa para el diseno final. La calidad optica del telescopio depende directamente de la precision con que la superficie del espejo reproduce la forma parabolica.

Variable dominante: distancia focal del espejo primario, que fija la escala de la imagen y la razon focal del instrumento.
Limite de validez: el modelo esferico falla cuando la apertura supera el 10 por ciento del radio de curvatura, requiriendo correccion parabolica o uso de correctores de campo.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 1

## 2. Retrovisor convexo de vehiculo

Los retrovisores exteriores de los automoviles son espejos convexos con radios de curvatura de 1 a 3 metros. Al tener [[distancia_focal_del_espejo]] negativo, siempre producen imagenes virtuales, derechas y reducidas, lo que permite abarcar un campo de vision considerablemente mas amplio que un espejo plano del mismo tamano. Esta propiedad es critica para la seguridad vial, ya que el conductor puede observar carriles adyacentes y vehiculos en el angulo muerto.

El inconveniente es que los objetos reflejados parecen mas lejanos de lo que estan realmente, porque la imagen es reducida. Por eso la normativa obliga a incluir la advertencia "los objetos estan mas cerca de lo que aparentan". El aumento [[aumento_lateral]], siempre menor que uno en valor absoluto, determina exactamente cuanto se reduce la imagen y, por tanto, cuanto se subestima la distancia.

Variable dominante: radio de curvatura del espejo, que controla el campo de vision y la magnitud de la reduccion de la imagen.
Limite de validez: el modelo esferico es adecuado para retrovisores de uso comercial; la aberracion esferica es despreciable dado el bajo poder convergente del espejo convexo a estas escalas.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 2

## 3. Horno solar de concentracion

Los hornos solares utilizan grandes espejos concavos (o conjuntos de espejos planos orientados hacia un espejo concavo central) para concentrar la radiacion solar en una zona pequena cercana al foco. La densidad de potencia en el foco puede alcanzar miles de kilovatios por metro cuadrado, suficiente para fundir metales o realizar ensayos de materiales a temperaturas extremas.

La posicion del punto focal depende de [[distancia_focal_del_espejo]], y la concentracion maxima esta limitada por el tamano angular del disco solar y la calidad optica del espejo. Si la superficie no es exactamente parabolica, la aberracion esferica ensancha la mancha focal y reduce la densidad de energia. En instalaciones como el horno solar de Odeillo (Francia), espejos segmentados reproducen un perfil parabolico con precision milimetrica.

Variable dominante: distancia focal del concentrador, que determina la ubicacion del punto de maxima densidad de energia.
Limite de validez: el modelo de espejo esferico simple falla para concentradores de gran apertura donde la aberracion esferica reduce significativamente la concentracion; se requiere geometria parabolica o correccion segmentada.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 3

## 4. Espejo dental para inspeccion oral

Los dentistas emplean espejos concavos de radio de curvatura entre 2 y 5 centimetros para inspeccionar zonas de dificil acceso en la cavidad oral. Al colocar el diente entre el foco y el vertice del espejo, el profesional obtiene una imagen virtual, derecha y aumentada del area examinada, lo que permite detectar caries, fisuras y otros defectos con mayor facilidad.

El aumento [[aumento_lateral]] depende de la relacion entre [[d_o]] y [[distancia_focal_del_espejo]]. Con distancias de trabajo tipicas de 1 a 2 centimetros y focales de 1 a 2.5 centimetros, el aumento alcanza valores de 2 a 5, suficientes para ampliar detalles milimetricos. Si el dentista aleja el espejo mas alla del foco, la imagen se invierte y pierde utilidad practica, lo que obliga a mantener una distancia de trabajo controlada.

Variable dominante: distancia del diente al vertice del espejo, que determina si la imagen es virtual aumentada o real invertida.
Limite de validez: el modelo es valido mientras la superficie dental examinada sea suficientemente pequena para permanecer en la region paraxial; superficies curvas o de gran extension producen distorsion en los bordes de la imagen.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 4

## 5. Faro de vehiculo con reflector parabolico

Los faros de automoviles y motocicletas utilizan un reflector con perfil parabolico cuyo foco coincide con la posicion de la bombilla o LED. La luz emitida desde el foco se refleja en forma de haz paralelo al eje, proporcionando iluminacion direccional de largo alcance. Para generar el patron de corte del haz de cruce, se usan pantallas y lentes adicionales que bloquean parte de la luz reflejada.

Aunque el reflector es parabolico y no esferico, el principio de funcionamiento se comprende a partir de la ecuacion del espejo: una fuente en el foco produce rayos reflejados paralelos al eje ([[d_o]] igual a [[distancia_focal_del_espejo]] da [[d_i]] infinito). Si la bombilla se desplaza ligeramente respecto al foco, los rayos dejan de ser paralelos y el haz se ensancha o desvia, lo que permite ajustar la geometria del patron luminoso.

Variable dominante: posicion de la fuente de luz respecto al foco del reflector, que controla la colimacion y la apertura del haz.
Limite de validez: el modelo paraxial simple no describe el patron completo del haz, que incluye reflexiones secundarias y efectos de difraccion en los bordes del reflector; el diseno final requiere simulacion optica completa.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 5