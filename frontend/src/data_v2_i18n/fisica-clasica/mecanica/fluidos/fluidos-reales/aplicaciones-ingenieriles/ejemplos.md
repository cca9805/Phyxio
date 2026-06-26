# Ejemplo tipo examen

## Enunciado
Un edificio de diez plantas requiere subir un flujo constante de líquido desde una cisterna situada en el sótano hasta un tanque elevado situado a una altura neta de treinta metros sobre el nivel de succión. El ingeniero de planta estima que las caídas por rozamiento viscoso en la tubería vertical y en los accesorios equivalen a un diez por ciento adicional de la carga estática teórica. Determine la potencia útil [[P_util]] necesaria para realizar este trabajo hidráulico y la potencia de entrada [[P_in]] que debe suministrar el motor eléctrico si el conjunto bomba-motor tiene un rendimiento global del sesenta y cinco por ciento. El caudal requerido es de cinco unidades de volumen por unidad de tiempo (0,005 metros cúbicos por s).

## Datos
-   **Altura geométrica (h):** 30 metros.
-   **Caudal volumétrico [[Q]]:** 0,005 metros cúbicos por s.
-   **Densidad del líquido (agua):** 1000 kg/m³.
-   **Gravedad local (g):** 9,81 m/s².
-   **Eficiencia global [[eta]]:** 0,65 (65%).
-   **Factor de seguridad (k):** 1,10 (representa el 10% adicional por fricción).

## Definición del sistema
El sistema se define como un volumen de control cerrado que abarca desde la superficie libre del agua en la cisterna inferior (presión atmosférica) hasta la sección de descarga en el tanque elevado superior. El fluido de trabajo es agua dulce, considerada como un líquido incompresible y en régimen de flujo estacionario para los propósitos del diseño manométrico del sistema de presión. Las fronteras del sistema incluyen las paredes internas de la tubería, la carcasa de la bomba y el eje de transmisión mecánica donde se inyecta la energía del motor.

## Modelo físico
El modelo se fundamenta en la aplicación de la ecuación de conservación de la energía para fluidos reales en régimen permanente. La potencia útil [[P_util]] entregada por la máquina hidráulica debe ser suficiente para compensar el cambio de energía potencial gravitatoria del fluido y disipar la energía mecánica que se convierte en calor por la viscosidad del fluido en movimiento. La relación fundamental utilizada es la ecuación de potencia de bombeo

{{f:potencia_bomba}}

, donde la presión [[dp]] representa la altura manométrica total del sistema expresada en pascales. Complementariamente, se utiliza la definición de rendimiento energética para determinar el consumo eléctrico total mediante la ecuación

{{f:eficiencia}}

.

## Justificación del modelo
Se utiliza el modelo de flujo incompresible porque la variación de densidad del agua a las presiones de trabajo típicas de un edificio es despreciable para fines prácticos. La simplificación de las caídas de carga como un porcentaje fijo de la carga estática es una práctica aceptada en cálculos preliminares de ingeniería donde las longitudes de tubería son cortas y las velocidades de flujo se mantienen bajas para evitar ruidos y vibraciones excesivas en la estructura. Se asume que el motor y la bomba operan en su punto de diseño estacionario, ignorando los transitorios de arranque y parada.

## Resolución simbólica
Primero, definimos el incremento de presión total necesario para vencer la gravedad y la fricción:
 [[dp]]  igual a  rho cdot g cdot h cdot k 
Segundo, calculamos la potencia útil que la bomba debe transferir efectivamente al fluido para mantener el flujo deseado:
 [[P_util]]  igual a  [[dp]] cdot [[Q]] 
Finalmente, la potencia de entrada total requerida de la red eléctrica se obtiene mediante la relación inversa del rendimiento mecánico-eléctrico:
 [[P_in]]  igual a  frac{[[P_util]]}{[[eta]]} 

## Sustitución numérica
Presión estática de elevación:  1000 cdot 9,81 cdot 30  igual a  294300  Pa.
Presión manométrica total requerida [[dp]]:  294300 cdot 1,10  igual a  323730  Pa (donde 1,10 es el factor k).
Cálculo de la potencia útil [[P_util]]:  323730 cdot 0,005  igual a  1618,65  W.
Cálculo de la potencia de entrada [[P_in]]:  1618,65 / 0,65  igual a  2490,23  W.
Este valor de potencia de entrada es el que determinará el dimensionamiento del cableado y las protecciones eléctricas del sistema.

## Validación dimensional
La presión [[dp]] tiene unidades de Fuerza por unidad de Área (kg·m/s² / m²  igual a  kg/m·s²). El caudal [[Q]] tiene unidades de Volumen por unidad de Tiempo (m³/s). El producto de ambas magnitudes resulta en:
 (kg/m cdot s^2) cdot (m^3/s)  igual a  kg cdot m^2 / s^3  igual a  text{J/s}  igual a  text{W} .
Dado que la rendimiento [[eta]] es una magnitud adimensional, la potencia de entrada [[P_in]] resultante mantiene la unidad de W, validando la consistencia dimensional del cálculo físico realizado según las normas del Sistema Internacional.

## Interpretación física
El resultado obtenido indica que el motor eléctrico consume aproximadamente un cincuenta por ciento más de energía de la que efectivamente se traduce en trabajo hidráulico útil sobre el agua. Esta diferencia energética se disipa íntegramente en forma de calor residual debido a tres factores principales: el rozamiento mecánico en los cojinetes, las pérdidas hidráulicas por turbulencia dentro de la voluta de la bomba y la fricción viscosa en las paredes internas de la tubería. Un aumento en la altura del edificio o un incremento en la demanda de flujo aumentaría la demanda energética de forma lineal, lo que demuestra la importancia de seleccionar equipos con alta rendimiento [[eta]].

# Ejemplo de aplicación real

## Contexto
En una planta moderna de desalinización de agua de mar por ósmosis inversa, se requiere un sistema de bombeo de alta presión para forzar el paso del líquido a través de membranas semipermeables. Este proceso es extremadamente crítico desde el punto de vista energético, ya que la presión osmótica natural del agua salada es muy elevada. Cualquier ineficiencia en el diseño del sistema de bombeo se traduce directamente en costos operativos masivos debido al alto consumo eléctrico constante de la instalación industrial, que suele operar las veinticuatro horas del día.

## Estimación física
Para un flujo de producción industrial de cien metros cúbicos por h (aprox. 0,0278 m³/s), se requieren presiones de operación constantes de unos sesenta bares (6.000.000 Pa). Aplicando el modelo de aplicaciones ingenieriles, la potencia útil [[P_util]] teórica requerida por el proceso es:
 [[P_util]]  igual a  6.000.000 cdot 0,0278 approx 166800  W.
Si la planta utiliza bombas de alta tecnología con una rendimiento [[eta]] optimizada del ochenta por ciento, el motor debe suministrar una potencia de entrada [[P_in]] de aproximadamente 208.500 W (unos 208,5 kW). Esta estimación permite a los gestores de la planta prever un gasto energético significativo que debe ser cubierto por fuentes de energía fiables.

## Interpretación
Este ejemplo de ingeniería real demuestra que en aplicaciones de alta presión, la demanda de potencia es extremadamente sensible al caudal [[Q]] y al rendimiento. Si la rendimiento [[eta]] del sistema cayera apenas un cinco por ciento debido al desgaste prematuro por la corrosión salina o la obstrucción parcial de las membranas, el consumo eléctrico aumentaría significativamente. Por ello, los ingenieros de mantenimiento monitorizan continuamente la relación entre [[P_util]] y [[P_in]] para detectar desviaciones en el rendimiento y programar intervenciones preventivas antes de que las pérdidas económicas y el impacto ambiental sean inaceptables para la viabilidad del proyecto.

