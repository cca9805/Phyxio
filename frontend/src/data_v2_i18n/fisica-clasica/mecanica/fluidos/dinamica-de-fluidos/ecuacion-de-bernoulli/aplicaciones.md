# Ecuacion De Bernoulli - Aplicaciones

## 1. Medición de velocidad con tubo de Pitot

La ecuación de Bernoulli entre el punto de corriente libre y el punto de estancamiento del tubo de Pitot permite calcular la velocidad del fluido a partir de la diferencia de presiones medida:

{{f:head}}

donde la diferencia entre presión de estancamiento y presión estática se interpreta como conversión entre energía de presión y energía cinética, con densidad [[rho]] conocida.

- **Variable dominante:** velocidad del fluido [[v]] (m/s).
- **Límite de validez:** Ma < 0.3; flujo estacionario y uniforme en la sección del tubo. Para gases compresibles se requiere corrección de Rayleigh-Pitot.
- Aplicación industrial: aeronáutica (velocímetro de aeronaves), metrología hidráulica y control de ventilación industrial.

El tubo de Pitot es el instrumento de medición directa de velocidad más sencillo disponible para fluidos en movimiento. En aeronaves modernas, el sistema Pitot-estático combina el tubo de Pitot con una toma de presión estática lateral para calcular velocidad aerodínamica, tasa de ascenso y altitud simultáneamente.

## 2. Efecto Venturi y aforo de caudal

Un tubo Venturi aprovecha la reducción de sección transversal para acelerar el fluido y generar una caída de presión medible. Aplicando Bernoulli y continuidad entre la sección ancha A_1 y la garganta A_2:

{{f:head}}

- **Variable dominante:** caudal volumétrico Q (m³/s).
- **Límite de validez:** fluido incompresible, flujo estacionario, Re > 10^5 para garantizar que el coeficiente de descarga se mantenga cercano al valor de diseño; no aplica a fluidos con alta viscosidad ni a caudales muy bajos.
- Aplicación industrial: medidores de caudal en refinerías, plantas de tratamiento de agua y sistemas de gas natural.

El coeficiente de descarga real suele ubicarse cerca de 0.96 a 0.99 y compensa las pérdidas de fricción en la garganta. El diseño óptimo exige un ángulo de divergencia de salida de aproximadamente 7 a 15 grados para evitar separación de la capa límite aguas abajo, lo que aumentaría las pérdidas y reduciría la precisión del aforo.

## 3. Teorema de Torricelli — Vaciado de depósitos

Para un depósito abierto con orificio en la pared lateral a profundidad h respecto a la superficie libre, Bernoulli simplificado da la velocidad de vaciado:

{{f:head}}

- **Variable dominante:** altura [[z]] (m) de la columna de agua sobre el orificio.
- **Límite de validez:** depósito lo suficientemente grande para que la velocidad en la superficie sea despreciable; presión idéntica en superficie y orificio (ambas a la atmósfera). Para orificios en el fondo con perfil de contracción, se aplica un coeficiente de contracción típico cercano a 0.64.
- Aplicación práctica: diseño de compuertas, vaciado de silos de grano, sistemas de extinción de incendios.

El tiempo de vaciado completo de un depósito depende de la sección del tanque, de la sección del orificio y de la altura inicial de fluido. Esta expresión, obtenida por integración de la ecuación de continuidad con Torricelli, permite dimensionar los depósitos de almacenamiento industrial.

## 4. Aerodinámica de perfiles — Sustentación de alas

La diferencia de velocidad entre la corriente superior (mayor velocidad) e inferior (menor velocidad) de un perfil aerodinámico genera una diferencia de presión que produce la fuerza de sustentación. Bernoulli muestra que:

{{f:q_dinamica}}

La fuerza de sustentación por unidad de longitud de ala se obtiene a partir de la diferencia de presión entre extradós e intradós y de la cuerda del perfil.

- **Variable dominante:** diferencia de velocidades entre extradós e intradós del perfil.
- **Límite de validez:** flujo subsónico (Ma < 0.8 para perfiles delgados); modelo de fluido irrotacional e inviscido (teoría potencial). Los efectos viscosos y de separación de capa límite se modelan separadamente. No aplica en ángulos de ataque superiores al ángulo de entrada en pérdida.
- Aplicación industrial: diseño de perfiles de ala, palas de turbinas eólicas e hidráulicas, diseño de ventiladores.

En la práctica del diseño aeronáutico, Bernoulli describe la condición de presión pero la sustentación cuantitativa requiere también el teorema de Kutta-Joukowski y los métodos de panel. Sin embargo, para estimaciones de orden de magnitud de la fuerza sustentadora en flujo subsoníco, el enfoque de Bernoulli resulta práctico y pedagógicamente claro.

## 5. Red de tuberías doméstica — Presión en grifos

En una red doméstica, la presión disponible en un grifo de planta alta es menor que en la planta baja. Bernoulli entre el punto de entrada a la vivienda y un grifo superior, con velocidades comparables, permite estimar la caída de presión debida a la diferencia de altura.

{{f:head}}

- **Variable dominante:** diferencia de altura [[z]] entre los puntos de la red.
- **Límite de validez:** solo aplicable cuando la velocidad en ambos puntos es similar y las pérdidas de carga en la tubería son despreciables (tubería corta y de gran diámetro). En redes reales con una diferencia de altura cercana a 5 m, la pérdida de presión por altura puede rondar medio bar, y ese efecto puede ser significativo si la presión de suministro es baja.
- Aplicación práctica: verificación de presión mínima en instalaciones de fontanería, dimensionado de grupos de presión.

En redes con múltiples ramales y tomadas, la pérdida de presión total se calcula con la ecuación extendida de Bernoulli que incorpora el término de pérdidas de carga h_f. La norma UNE-EN 806 y los códigos de instalaciones hidráulicas exigen verificar que la presión disponible en cada punto de consumo supere un mínimo garantizado.


