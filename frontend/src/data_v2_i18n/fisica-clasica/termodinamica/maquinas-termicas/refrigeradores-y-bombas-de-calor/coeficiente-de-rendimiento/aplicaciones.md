# Aplicaciones — Coeficiente de rendimiento

## 1. Refrigerador domestico

El refrigerador doméstico es la aplicación más común del COP de refrigeración. Opera típicamente con [[T_C]] de 255 K (menos 18 grados Celsius para el congelador) y [[T_H]] de 305 a 315 K (temperatura del condensador en la parte trasera, ligeramente superior a la temperatura ambiente). El COP de Carnot de refrigeración para estas condiciones es de 4.3 a 5.1, mientras que los refrigeradores modernos con compresor inverter alcanzan COP reales de 2 a 3.5, representando un 45 a 70 % del valor teórico. La eficiencia se clasifica mediante la etiqueta energética europea (A+++ a G), donde la clase A+++ corresponde a COP superiores a 3. El COP varía estacionalmente: en verano, el aumento de [[T_H]] reduce el COP y aumenta el consumo eléctrico en un 10 a 20 %.

Variable dominante: [[T_H]], que sube en verano aumentando la diferencia de temperaturas y reduciendo el COP.
Límite de validez: cuando la carga de refrigerante es insuficiente o el condensador está obstruido, el modelo de COP basado en temperaturas de focos subestima el consumo real.

## 2. Aire acondicionado residencial

Los sistemas de aire acondicionado residencial operan como refrigeradores con [[T_C]] de 293 a 298 K (interior a 20 a 25 grados Celsius) y [[T_H]] de 308 a 318 K (exterior a 35 a 45 grados Celsius). La diferencia de temperaturas es menor que en refrigeración, lo que da COP de Carnot de 15 a 30, valores muy altos que reflejan la facilidad termodinámica del proceso. Los sistemas reales alcanzan COP de 3 a 6 (expresado como EER en la industria), representando un 15 a 25 % del valor de Carnot. La discrepancia se debe a las grandes irreversibilidades en intercambiadores, compresión y distribución de aire. Los sistemas multisplit con compresor inverter alcanzan los valores más altos de COP al ajustar la capacidad a la demanda.

Variable dominante: la diferencia [[T_H]] menos [[T_C]], que en días muy calurosos puede superar 25 K reduciendo significativamente el COP.
Límite de validez: cuando la humedad relativa exterior es muy alta, la carga de refrigeración incluye deshumidificación y el COP basado solo en temperaturas no captura el coste energético real.

## 3. Bomba de calor geotermica

Las bombas de calor geotérmicas extraen calor del subsuelo a [[T_C]] de 280 a 288 K (temperatura estable del suelo a 2 a 3 metros de profundidad) para calentar una vivienda a [[T_H]] de 308 a 323 K (circuito de calefacción por suelo radiante o radiadores). El COP de Carnot de bomba de calor es de 8 a 12, y los sistemas reales alcanzan COP de 3.5 a 5.5. La ventaja principal de la fuente geotérmica es la estabilidad de [[T_C]] durante todo el año, a diferencia de las bombas de calor aire-agua cuya fuente [[T_C]] cae en invierno cuando más calor se necesita. Con un COP real de 4.5, cada kWh eléctrico entrega 4.5 kWh térmicos, lo que hace la bomba de calor geotérmica entre un 30 y un 50 % más económica que una caldera de gas en climas templados.

Variable dominante: [[T_C]] del subsuelo, que permanece estable entre 280 y 288 K garantizando un COP alto constante.
Límite de validez: si el intercambiador geotérmico está subdimensionado, la extracción continuada de calor enfría el suelo circundante y reduce [[T_C]] progresivamente, degradando el COP a lo largo de la temporada.

## 4. Congelacion industrial

Los sistemas de congelación industrial para la cadena de frío alimentaria operan con [[T_C]] de 233 a 248 K (menos 40 a menos 25 grados Celsius) y [[T_H]] de 308 a 318 K (condensador). La diferencia de temperaturas de 60 a 85 K es mucho mayor que en refrigeración doméstica, lo que reduce el COP de Carnot a 2.7 a 4.1. Los COP reales son de 1.0 a 2.0, representando un 35 a 50 % del valor de Carnot. El bajo COP explica el alto coste energético de la cadena de frío: la refrigeración industrial consume aproximadamente el 8 % de la electricidad global. Los sistemas de compresión en dos etapas con interenfriamiento mejoran el COP en un 15 a 25 % respecto a una etapa simple al reducir la relación de compresión de cada etapa.

Variable dominante: [[T_C]], que al ser muy baja genera una gran diferencia de temperaturas y un COP intrínsecamente bajo.
Límite de validez: a temperaturas inferiores a 223 K el modelo de COP simple no captura las pérdidas por lubricación del compresor, la necesidad de múltiples etapas de compresión y las limitaciones de los refrigerantes convencionales.

## 5. Bomba de calor aire-agua para calefaccion urbana

Las bombas de calor aire-agua para redes de calefacción de distrito extraen calor del aire exterior ([[T_C]] variable de 268 a 288 K según la estación) y lo entregan a la red a [[T_H]] de 333 a 353 K (temperaturas altas necesarias para redes existentes con radiadores). La diferencia de temperaturas de 45 a 85 K da COP de Carnot de 3.9 a 14.2, con COP reales de 2.0 a 3.5. La principal limitación es que en los días más fríos de invierno, cuando la demanda de calor es máxima, [[T_C]] cae y el COP se reduce drásticamente: a menos 5 grados Celsius, el COP real puede bajar de 2.0, haciendo la bomba de calor apenas competitiva con una caldera de gas. Las soluciones incluyen bombas de calor en cascada y la combinación con fuentes de calor residual industrial.

Variable dominante: [[T_C]] del aire exterior, que fluctúa estacionalmente y reduce el COP precisamente cuando más calor se necesita.
Límite de validez: cuando [[T_C]] baja de 263 K, la formación de escarcha en el evaporador requiere ciclos de desescarche que reducen el COP efectivo por debajo de las predicciones del modelo estacionario.
