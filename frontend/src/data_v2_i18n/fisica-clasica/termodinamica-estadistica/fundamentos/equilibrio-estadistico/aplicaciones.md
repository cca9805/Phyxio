# Aplicaciones

## 1. Defectos en sólidos
Variable dominante: [[flujo_probabilidad]]
Límite de validez: [[desbalance_estadistico]] < 10^-2 con [[temperatura]] estable
En cristales con defectos, átomos o vacantes saltan entre configuraciones locales. El equilibrio estadístico permite decidir si las ocupaciones medias son constantes aunque los saltos continúen. Se mide [[probabilidad_estado]] de cada configuración y se estima [[tasa_transicion]] directa e inversa. Si [[flujo_probabilidad]] es compatible con cero, no hay deriva neta de población. Esto restringe modelos de difusión y evita confundir actividad microscópica con evolución macroscópica. La [[constante_boltzmann]] entra en la estimación de [[peso_boltzmann]] cuando se conoce la [[energia_estado]] de cada configuración y la [[temperatura]] del entorno. Si la diferencia de [[energia_estado]] entre las dos configuraciones es del orden de kT, ambas tendrán occupaciones similares. Si la diferencia supera varias unidades de kT, la configuración de menor [[energia_estado]] domina y [[flujo_probabilidad]] puede ser casi nulo aunque [[tasa_transicion]] no sea igual en ambas direcciones.

## 2. Poblaciones moleculares en dos conformaciones
Variable dominante: [[probabilidad_estado]]
Límite de validez: suma de probabilidades entre 0.999 y 1.001
Una molécula flexible puede alternar entre conformaciones. La distribución de ocupaciones depende de [[energia_estado]], [[temperatura]] y [[peso_boltzmann]] cuando el entorno térmico es estable. La aplicación predice qué fracción de moléculas está en cada conformación y si esa fracción permanece estacionaria durante el [[tiempo]] observado. Cuando la [[temperatura]] sube, la diferencia relativa de [[peso_boltzmann]] entre conformaciones disminuye y la distribución se hace más uniforme, lo que aumenta la [[entropia]] de Gibbs. Este análisis permite estimar umbrales de [[temperatura]] de transición conformacional en polímeros y proteínas.

## 3. Simulaciones Monte Carlo
Variable dominante: [[desbalance_estadistico]]
Límite de validez: observación mayor que 50 tiempos de correlación
En una simulación, el equilibrio se diagnostica verificando que las ocupaciones no deriven y que [[flujo_probabilidad]] entre regiones del espacio de estados se compense. Si [[desbalance_estadistico]] disminuye hasta el nivel de ruido, la muestra puede usarse para estimar [[entropia]]. El criterio práctico usa [[desbalance_estadistico]] como función del paso de simulación: si el desbalance decrece de forma monótona hasta el nivel del ruido muestral, la muestra puede usarse para estimaciones termodinámicas. La [[constante_boltzmann]] convierte la [[entropia]] calculada en unidades SI comparables con mediciones termométricas.

## 4. Transiciones químicas reversibles
Variable dominante: [[tasa_transicion]]
Límite de validez: tasas directas e inversas constantes dentro del 5%
En reacciones reversibles elementales, el equilibrio estadístico se observa cuando la población de cada estado deja de cambiar aunque haya conversiones moleculares. La [[tasa_transicion]] directa no tiene que ser igual a la inversa; lo que debe compensarse es el producto entre tasa y [[probabilidad_estado]]. La [[constante_boltzmann]] conecta la barrera energética de la reacción con [[peso_boltzmann]] del estado de transición. Si la [[temperatura]] sube, la ocupación de los estados activados aumenta y la tasa directa puede dejar de compensar la inversa, generando [[flujo_probabilidad]] neto hacia el producto de mayor [[entropia]].

## 5. Sistemas mesoscópicos con ruido
Variable dominante: [[entropia]]
Límite de validez: fluctuaciones pequeñas frente al promedio medido
En dispositivos mesoscópicos, la ocupación de estados puede fluctuar mucho. La [[entropia]] ayuda a resumir la dispersión de ocupaciones y [[flujo_probabilidad]] indica si hay una corriente estadística persistente. La aplicación constriñe si el sistema puede tratarse como equilibrado o si requiere un modelo impulsado. En dispositivos de punto cuántico, [[probabilidad_estado]] de cada nivel cuántico depende del potencial electroquímico del reservorio y de la [[temperatura]] mediante la [[constante_boltzmann]]. El equilibrio estadístico se detecta como igualdad de [[flujo_probabilidad]] entrante y saliente del reservorio.

## 6. Fotones en cavidad óptica
Variable dominante: [[probabilidad_estado]]
Límite de validez: [[temperatura]] estable y promedio de fotones grande frente al ruido cuántico
En una cavidad óptica acoplada a un baño térmico de radiación, los modos del campo pueden ocupar diferentes números de fotones con [[probabilidad_estado]] que depende de la [[energia_estado]] de cada modo y la [[temperatura]] del baño. El equilibrio estadístico se alcanza cuando el [[flujo_probabilidad]] de absorción y emisión espontánea se compensan por pares de transición. La [[constante_boltzmann]] y la [[temperatura]] determinan la escala energética que separa los modos significativamente ocupados de los vacíos. La [[entropia]] de la distribución en equilibrio mide la dispersión de fotones entre modos del campo. Si se introduce ganancia óptica activa, [[flujo_probabilidad]] deja de anularse y el sistema entra en régimen de láser o amplificación estimulada.

## 7. Canales iónicos en membrana celular
Variable dominante: [[flujo_probabilidad]]
Límite de validez: [[temperatura]] fisiológica estable y voltaje de membrana constante
Los canales iónicos en membranas celulares alternan entre configuraciones abiertas y cerradas con [[tasa_transicion]] que dependen del voltaje de membrana y la [[temperatura]]. En equilibrio estadístico, [[probabilidad_estado]] de cada configuración permanece constante y [[flujo_probabilidad]] neto entre estados es cero. La [[constante_boltzmann]] y la [[energia_estado]] de activación del canal orientan la estimación de [[peso_boltzmann]] bajo condiciones fisiológicas. Cuando se aplica un voltaje fuera del equilibrio, las [[tasa_transicion]] dejan de compensarse y aparece [[flujo_probabilidad]] neto que genera corriente iónica macroscópica medible. El diagnóstico de equilibrio frente a no-equilibrio en canales iónicos es central para la farmacología de bloqueantes y moduladores.

## 8. Redes de tráfico estadístico
Variable dominante: [[tasa_transicion]]
Límite de validez: carga de red menor que 80% de la capacidad máxima de cada nodo
En redes de comunicación o transporte, los paquetes o vehículos transitan entre nodos con [[tasa_transicion]] de entrada y salida. El equilibrio estadístico se interpreta como la condición en que [[probabilidad_estado]] de cada nodo no varía sistemáticamente. Cuando [[flujo_probabilidad]] neto entre dos nodos es compatible con cero, el tráfico entre ellos está balanceado. Si la carga aumenta y [[tasa_transicion]] de salida no puede compensar la de entrada, [[desbalance_estadistico]] crece y el nodo acumula carga. La [[entropia]] del reparto de carga sirve como indicador de uniformidad: una distribución concentrada en pocos nodos tiene menor [[entropia]] y señala un desequilibrio estadístico incipiente.