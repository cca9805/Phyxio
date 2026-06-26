# Ecuación de Continuidad — Aplicaciones

## 1. Diseño de redes de distribución de agua

Las redes urbanas de abastecimiento de agua potable se diseñan garantizando que el caudal que entra a cada nodo de la red sea igual a la suma de los caudales que salen. La ecuación de continuidad es la restricción de balance nodal que permite dimensionar los diámetros de cada tramo para satisfacer la demanda de cada zona. Un descenso inesperado de presión en un punto de la red es síntoma de que el caudal no se conserva: indica una fuga, un obstáculo o un diámetro de tubería insuficiente. En ingeniería sanitaria, el cumplimiento de la continuidad es un requisito normativo (ISO 4422, UNE-EN 805).

Variable dominante: Q (caudal volumétrico en m³/s o m³/h).

Límite de validez: modelo ideal válido mientras Δρ/ρ < 5% y flujo estacionario; para demandas variables en el tiempo se requiere el modelo no estacionario con término de inercia.

## 2. Toberas y difusores en aeronaútica y propulsión

En motores de reacción y turbinas de gas, las toberas convergentes-divergentes convierten energía de presión en energía cinética. El balance de continuidad másica rige el diseño de la geometría interna: al estrechar el área en el cuello de la tobera, la velocidad del gas aumenta hasta alcanzar Mach 1 (velocidad del sonido). A partir de ese punto, la sección diverge para acelerar el flujo a régimen supersónico. Sin la ecuación de continuidad, no sería posible calcular el área de salida de la tobera para obtener el empuje deseado. Una variación pequeña del área del cuello puede cambiar de forma sensible el empuje final.

Variable dominante: ṁ (caudal másico en kg/s), ya que la densidad varía con la presión y la temperatura.

Límite de validez: para Mach mayor que 1 se requiere el modelo compresible con ecuación de estado; el modelo incompresible puede introducir errores relevantes a partir de Mach alrededor de 0.5.

## 3. Medidores de caudal tipo Venturi y Pitot

El medidor Venturi es uno de los instrumentos de flujo más precisos disponibles. Su principio de funcionamiento combina la ecuación de continuidad con la ecuación de Bernoulli. Al conocer la diferencia de presión entre la entrada y el cuello, y conociendo las áreas, es posible calcular el flujo con alta precisión. Se usa en tuberías de gran diámetro para plantas de tratamiento de agua, refinerías y centrales hidroeléctricas. El tubo de Pitot aplica el mismo principio para medir velocidades locales en aerodinámica (aviones, túneles de viento).

Variable dominante: A (relación de áreas entre la entrada y el cuello, directamente proporcional a la precisión del instrumento).

Límite de validez: el Venturi requiere flujo turbulento desarrollado aguas arriba; en flujo laminar la velocidad media no puede tomarse como representativa sin correcciones de perfil.

## 4. Sistema circulatorio humano y biológica

El corazón bombea un caudal másico de aproximadamente 5 L/min en reposo. Este caudal se conserva a lo largo de todo el sistema circulatorio: desde la aorta (diámetro ~2.5 cm, velocidad ~0.3 m/s) hasta los capilares (diámetro ~8 μm, velocidad ~0.5 mm/s). La reducción de velocidad en los capilares no viola la continuidad: aunque cada capilar es muchísimo más estrecho que la aorta, la suma del área total de todos los capilares (~3000 cm²) es vastamente mayor que el área de la aorta (~5 cm²), lo que físicamente explica por qué la sangre se ralentiza para permitir el intercambio gaseoso con los tejidos. En bíologa y medicina, la ecuación de continuidad explica la aterosclerosis: el estrech amiento de una arteria aumenta localmente la velocidad y genera turbulencia.

Variable dominante: Q hemodinámico (gasto cardíaco en L/min), conservado a lo largo de la circulación mayor.

Límite de validez: la sangre no es un fluido newtoniano a escala de los capilares (efecto Fahraeus-Lindqvist); el modelo continuo clásico se aplica solo para vasos de diámetro > 0.3 mm.

## 5. Hidráulica de canales abiertos y gestión de recursos hídricos

En ríos, canales de riego y presas, la ecuación de continuidad permite calcular el flujo de drenaje, la velocidad en distintos tramos y el nivel del agua en función de la sección mojada. En el diseño de presas, la ecuación de continuidad aplicada al embalse relaciona el flujo de entrada (lluvias, ríos afluentes), el flujo de salida (turbinas, vertedero de seguridad) y la variación del volumen embalsado mediante un balance neto de almacenamiento. En gestión de inundaciones, este balance permite calcular cuánto tiempo tardará un embalse en llenarse o cuál es el flujo punta en una avenida fluvial. La Directiva Marco del Agua de la UE (2000/60/CE) requiere estos diagramas de cálculo para la gestión sostenible de cuencas hidrográficas.

Variable dominante: Q (m³/s), el caudal de flujo libre que determina la capacidad de transporte y el nivel de inundacion.

Límite de validez: el modelo unidimensional es suficiente para canales regulares; en tramos con fuertes curvas, sección irregular o flujo crítico se requieren modelos 2D o Saint-Venant.