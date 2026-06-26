# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: equilibrio-estadistico
# Target response file: aplicaciones.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Aplicaciones
## 1. Defectos en sólidos
Variable dominante: [[flujo_probabilidad]]
Límite de validez: [[desbalance_estadistico]] < 10^-2 con temperatura estable
En cristales con defectos, átomos o vacantes saltan entre configuraciones locales. El equilibrio estadístico permite decidir si las ocupaciones medias son constantes aunque los saltos continúen. Se mide [[probabilidad_estado]] de cada configuración y se estima [[tasa_transicion]] directa e inversa. Si [[flujo_probabilidad]] es compatible con cero, no hay deriva neta de población. Esto restringe modelos de difusión y evita confundir actividad microscópica con evolución macroscópica.

## 2. Poblaciones moleculares en dos conformaciones
Variable dominante: [[probabilidad_estado]]
Límite de validez: suma de probabilidades entre 0.999 y 1.001
Una molécula flexible puede alternar entre conformaciones. La distribución de ocupaciones depende de [[energia_estado]], [[temperatura]] y [[peso_boltzmann]] cuando el entorno térmico es estable. La aplicación predice qué fracción de moléculas está en cada conformación y si esa fracción permanece estacionaria durante el [[tiempo]] observado.

## 3. Simulaciones Monte Carlo
Variable dominante: [[desbalance_estadistico]]
Límite de validez: observación mayor que 50 tiempos de correlación
En una simulación, el equilibrio se diagnostica verificando que las ocupaciones no deriven y que [[flujo_probabilidad]] entre regiones del espacio de estados se compense. Si [[desbalance_estadistico]] disminuye hasta el nivel de ruido, la muestra puede usarse para estimar [[entropia]].

## 4. Transiciones químicas reversibles
Variable dominante: [[tasa_transicion]]
Límite de validez: tasas directas e inversas constantes dentro del 5%
En reacciones reversibles elementales, el equilibrio estadístico se observa cuando la población de cada estado deja de cambiar aunque haya conversiones moleculares. La [[tasa_transicion]] directa no tiene que ser igual a la inversa; lo que debe compensarse es el producto entre tasa y [[probabilidad_estado]].

## 5. Sistemas mesoscópicos con ruido
Variable dominante: [[entropia]]
Límite de validez: fluctuaciones pequeñas frente al promedio medido
En dispositivos mesoscópicos, la ocupación de estados puede fluctuar mucho. La [[entropia]] ayuda a resumir la dispersión de ocupaciones y [[flujo_probabilidad]] indica si hay una corriente estadística persistente. La aplicación constriñe si el sistema puede tratarse como equilibrado o si requiere un modelo impulsado.

