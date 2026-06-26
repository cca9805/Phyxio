# Aplicaciones — Ciclos Brayton y Rankine

## 1. Turbinas de gas en generación eléctrica de pico

Las turbinas de gas industriales de ciclo Brayton se emplean para cubrir la demanda eléctrica de pico: arrancan en minutos, mientras que una central de vapor necesita horas para alcanzar condiciones de operación estables. Una turbina de gas típica con [[r_p]] de 18 y temperatura de entrada a la turbina de 1450 K alcanza un [[eta_th]] real del 38–42 %.

Contexto: la turbina de gas trabaja con queroseno o gas natural; los gases de escape a 550–600 °C alimentan opcionalmente un ciclo Rankine de recuperación.

Variable dominante: [[r_p]] y [[T_H]] determinan conjuntamente [[eta_th]]; la temperatura máxima está limitada por los materiales cerámicos y la refrigeración interna de los álabes.

Límite de validez: el modelo ideal sobreestima [[eta_th]] en un 15–25 % frente al real; para análisis de diseño deben usarse eficiencias isentrópicas reales del compresor y la turbina.

## 2. Motores a reacción en aviación

El motor turbofán de aviación civil es un ciclo Brayton modificado con compresores de múltiples etapas y [[r_p]] de 40–50 en los motores más modernos. A altitudes de crucero, [[T_C]] del entorno es de 220–230 K, lo que favorece el [[eta_th]] del ciclo.

Contexto: el diseño prioriza la relación empuje/peso y el consumo específico de combustible; el [[eta_th]] del núcleo termogenerador puede superar el 50 % en condiciones de crucero.

Variable dominante: en aviación, [[W_neto]] por unidad de masa es tan importante como [[eta_th]]; el [[r_p]] óptimo para máximo [[W_neto]] es diferente al de máximo [[eta_th]].

Límite de validez: a altitudes muy altas, las variaciones de [[gamma]] con la temperatura y la presencia de humedad en el aire modifican el comportamiento del ciclo respecto al modelo estándar.

## 3. Centrales de vapor de carbón y ciclo Rankine

Las centrales térmicas de carbón pulverizado usan ciclo Rankine con vapor sobrecalentado a 550–620 °C y presiones de 25–30 MPa. El recalentamiento en dos etapas y la regeneración con 7–8 extracciones elevan [[eta_th]] real al 42–47 %.

Contexto: [[Q_H]] proviene de la combustión del carbón en la caldera; [[Q_C]] se rechaza al río o a la torre de refrigeración; [[W_neto]] impulsa el generador eléctrico.

Variable dominante: [[T_H]] es la variable de mayor impacto; cada 50 K de aumento en la temperatura máxima del vapor eleva [[eta_th]] aproximadamente 1–1.5 puntos porcentuales.

Límite de validez: la temperatura del vapor está limitada por los aceros austeníticos de la caldera; superar 650 °C requiere superaleaciones con coste muy superior y es actualmente el límite de la tecnología ultra-supercrítica.

## 4. Centrales nucleares de agua a presión (PWR)

Las centrales de agua a presión usan ciclo Rankine con vapor saturado a ~290 °C porque el combustible nuclear limita [[T_H]] a 320–330 °C en el circuito primario. El resultado es un [[eta_th]] modesto del 33–36 %.

Contexto: la refrigeración del núcleo reactivo impone límites estrictos a [[T_H]]; a diferencia de las centrales de carbón, no es posible elevar fácilmente la temperatura máxima del vapor para mejorar el rendimiento.

Variable dominante: [[T_C]] del condensador tiene aquí un impacto relativo mayor que en otras centrales, ya que [[T_H]] está fijo. Las centrales costeras con agua de mar fría mejoran ligeramente [[eta_th]] respecto a las de interior.

Límite de validez: el modelo de ciclo Rankine ideal predice rendimientos del 44–46 % a esas temperaturas; la brecha con el 33–36 % real refleja las importantes irreversibilidades del generador de vapor y la turbina de baja presión.

## 5. Ciclos combinados de gas natural (CCGT)

Las centrales de ciclo combinado (Combined Cycle Gas Turbine) son la aplicación más eficiente del par Brayton-Rankine. Los gases de escape del Brayton a 550–600 °C alimentan una caldera de recuperación de calor que genera vapor para el ciclo Rankine. El [[eta_th]] global supera el 60 % en las instalaciones más modernas.

Contexto: el gas natural de alta pureza permite [[T_H]] en el Brayton de 1500–1600 K; el vapor del Rankine opera a 560–580 °C; el condensador rechaza [[Q_C]] a 35–45 °C.

Variable dominante: la mayor palanca de mejora de [[eta_th]] en el CCGT es elevar [[T_H]] del Brayton; cada 50 K de aumento en la temperatura de entrada a la turbina de gas aporta ~1 punto porcentual de rendimiento global.

Límite de validez: el modelo de ciclo combinado supone que toda la energía de los gases de escape se recupera en la caldera; en la práctica, la temperatura de los gases a la salida de la caldera de recuperación no baja de 80–100 °C, lo que representa una pérdida de recuperación del 3–5 % del [[Q_H]] primario. Los ciclos de triple presión con recalentamiento mejoran la recuperación de calor residual y permiten aproximarse al 63 % de [[eta_th]] global en las unidades más avanzadas de clase J, donde [[T_H]] del Brayton supera los 1600 K gracias a superaleaciones monocristalinas con barrera térmica cerámica.
