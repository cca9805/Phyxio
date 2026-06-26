# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: metodo-de-montecarlo
# Target response file: aplicaciones.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Aplicaciones
## 1. Energía media en simulaciones moleculares
Variable dominante: [[estimador_montecarlo]]
Límite de validez: [[numero_muestras]] > 10⁴ y [[error_estandar]]/|[[estimador_montecarlo]]| < 0,05

En simulación molecular, el método de Monte Carlo permite estimar la energía media de un sistema sin recorrer todas las configuraciones posibles. Cada configuración aceptada aporta un [[valor_muestra]], y el promedio de muchos valores produce el [[estimador_montecarlo]]. Lo que se mide no es una trayectoria temporal, sino una media estadística compatible con [[temperatura]] y con el criterio de muestreo. La [[varianza_muestral]] informa de cuánto fluctúan las configuraciones individuales, mientras que [[error_estandar]] indica si el promedio ya es útil. Si se emplea Metropolis, [[probabilidad_aceptacion]] debe mantenerse en un rango operativo para evitar cadenas bloqueadas.

## 2. Integrales de alta dimensión
Variable dominante: [[numero_muestras]]
Límite de validez: el [[error_estandar]] debe decrecer al aumentar [[numero_muestras]]

Muchas magnitudes termodinámicas se expresan como promedios sobre espacios de estados enormes. Monte Carlo convierte el problema en una estimación por muestras. Cada [[valor_muestra]] representa una evaluación del integrando físico en una región aleatoria. El método predice un promedio y restringe su incertidumbre mediante [[error_estandar]]. Es especialmente útil cuando una cuadrícula regular sería imposible. El límite aparece si la [[varianza_muestral]] es demasiado grande o si las muestras no visitan las regiones que más contribuyen. En ese caso se necesitan [[peso_muestra]] o técnicas de importancia estadística.

## 3. Muestreo Metropolis de estados térmicos
Variable dominante: [[probabilidad_aceptacion]]
Límite de validez: 0,2 < [[probabilidad_aceptacion]] < 0,8 como criterio orientativo

En modelos térmicos, una propuesta de cambio puede aumentar o disminuir [[energia_estado]]. La [[probabilidad_aceptacion]] decide si ese cambio entra en la secuencia de muestras, con una escala controlada por [[temperatura]] y [[constante_boltzmann]]. Esta aplicación predice promedios físicos manteniendo una distribución compatible con el equilibrio térmico. Si la aceptación es casi nula, se explora poco; si es casi total por pasos diminutos, también puede haber mala exploración. El [[estimador_montecarlo]] solo es fiable cuando la cadena recorre estados relevantes y el [[error_estandar]] se interpreta junto con la mezcla de la cadena.

## 4. Cálculo de observables con pesos
Variable dominante: [[peso_muestra]]
Límite de validez: ningún pequeño subconjunto de muestras debe concentrar casi todo el peso

Cuando las muestras no son equivalentes, cada una recibe un [[peso_muestra]]. Esto ocurre en muestreo de importancia, reponderación o correcciones de distribuciones auxiliares. Lo que se predice es un promedio físico corregido, no una media aritmética simple. El [[estimador_montecarlo]] ponderado permite aprovechar muestras generadas de forma eficiente, pero exige revisar la normalización de pesos. Si unos pocos pesos dominan, la [[varianza_muestral]] efectiva aumenta y el [[error_estandar]] puede estar subestimado.

## 5. Control de precisión computacional
Variable dominante: [[error_estandar]]
Límite de validez: el coste de aumentar [[numero_muestras]] debe ser compatible con la precisión requerida

Monte Carlo se usa para decidir cuándo detener una simulación. El observable puede seguir fluctuando, pero el [[error_estandar]] permite saber si el promedio ya tiene precisión suficiente. Esta aplicación no mide solo una magnitud física; también constriñe el coste computacional. Si reducir el error a la mitad exige multiplicar mucho [[numero_muestras]], conviene evaluar si la precisión pedida es físicamente necesaria. La [[varianza_muestral]] orienta la estrategia: si es alta, quizá convenga mejorar el muestreo antes de acumular más datos.

