const e=`# Ejemplo tipo examen

## Enunciado
Un medidor de Venturi se instala en una tubería horizontal de agua ([[rho]] = 1000 kg/m³). La sección ancha tiene un diámetro de 20 cm y la garganta tiene un diámetro de 10 cm. Si un manómetro diferencial conectado entre ambas secciones marca una caída de presión [[dp]] de 20 kPa, calcula la velocidad del fluido en la sección ancha [[v1]] y el caudal volumétrico [[Q]].

## Datos
- Diámetro de entrada: D1 = 20 cm; [[A1]] ≈ 0.0314 m²
- Diámetro de garganta: D2 = 10 cm; [[A2]] ≈ 0.00785 m²
- Densidad del agua [[rho]] = 1000 kg/m³
- Caída de presión [[dp]] = 20 000 Pa

## Definición del sistema
El sistema consiste en un volumen de control que abarca el tramo de tubería desde la sección ancha hasta la garganta. Se analiza el flujo interno de un líquido incompresible en régimen estacionario. El flujo es horizontal, lo que elimina la contribución de la energía potencial gravitatoria de la ecuación de Bernoulli.

## Modelo físico
Se modela el flujo como estacionario, incompresible e ideal (sin fricción). Las magnitudes involucradas son las velocidades [[v1]] y [[v2]], las áreas [[A1]] y [[A2]], y las presiones [[p1]] y [[p2]]. El caudal [[Q]] se mantiene constante por continuidad.

## Justificación del modelo
El fluido se trata como ideal porque la viscosidad dinámica del agua es baja (del orden de 10⁻³ Pa·s) y el trayecto entre secciones es corto, de modo que las pérdidas por fricción representan menos del 2 % del balance energético total. El flujo se considera incompresible porque la variación de densidad [[rho]] del agua a la presión de trabajo es inferior al 0.01 %. El modelo de Bernoulli es directamente aplicable porque el tubo es horizontal y el flujo es estacionario.

## Resolución simbólica
**Paso 1 — Continuidad**: la ecuación de continuidad exige que el caudal [[Q]] sea idéntico en ambas secciones:

{{f:continuity_venturi}}

Para secciones circulares, la relación de áreas vale [[A1]]/[[A2]] = (D1/D2)² = (20/10)² = 4. Por tanto [[v2]] = 4·[[v1]].

**Paso 2 — Bernoulli**: conservamos la energía mecánica entre la sección ancha y la garganta:

{{f:bernoulli_venturi}}

Reorganizando, la caída de presión [[dp]] = [[p1]] − [[p2]] se expresa en función de [[v1]] y la relación de áreas. Sustituyendo [[v2]] = 4·[[v1]] el factor geométrico ([[A1]]/[[A2]])² − 1 = 16 − 1 = 15:

{{f:dp_venturi}}

## Sustitución numérica
Despejando [[v1]] de la expresión anterior con [[dp]] = 20 000 Pa, [[rho]] = 1000 kg/m³ y factor geométrico = 15:

- [[v1]] = raíz cuadrada de (2 · 20 000 / (15 · 1000)) = raíz cuadrada de (40/15) ≈ 1.63 m/s
- [[v2]] = 4 · 1.63 ≈ 6.52 m/s
- [[Q]] = [[A1]] · [[v1]] ≈ 0.0314 · 1.63 ≈ 0.051 m³/s

El caudal resultante es de 51 litros por segundo, lo que corresponde a un flujo doméstico a alta demanda o a un circuito industrial de pequeño caudal.

## Validación dimensional
La expresión de caída de presión [[dp]] tiene dimensiones de presión (pascal = kg por metro-cubico por metro-cuadrado por segundo-cuadrado). Al despejar [[v1]] el resultado es una velocidad en m/s, y [[Q]] = [[A1]]·[[v1]] tiene dimensiones de caudal en m³/s. El análisis dimensional confirma la coherencia del resultado.

## Interpretación física
Una diferencia de presión de 20 kPa entre la sección ancha y la garganta es suficiente para que el fluido cuadruplique su velocidad al atravesar el estrechamiento. La energía de presión [[p1]] − [[p2]] se convierte completamente en energía cinética adicional (½·[[rho]]·([[v2]]² − [[v1]]²)), sin pérdida neta de energía en el modelo ideal. El medidor de Venturi aprovecha precisamente este intercambio: mide [[dp]] con un manómetro diferencial y deduce [[v1]] y [[Q]] sin partes móviles, lo que lo convierte en un instrumento de alta fiabilidad para la industria de procesos.

Conviene destacar que el orden de magnitud de [[dp]] (decenas de kilopascales) para velocidades de unos pocos metros por segundo confirma que el efecto Venturi es perfectamente medible con equipos industriales estándar, y que pequeñas variaciones en el diámetro de la garganta tienen un efecto cuadrático en la caída de presión, lo que exige tolerancias de fabricación ajustadas.

Físicamente, esto significa que el dispositivo no está midiendo una fuerza abstracta, sino la redistribución de energía entre presión y velocidad. Antes del estrechamiento, parte de la energía del fluido está almacenada como presión estática; después del estrechamiento, una fracción mayor aparece como movimiento. Si la garganta fuera algo más ancha, la caída de presión sería menor y el caudal deducido también; si fuera más estrecha, el sistema ganaría sensibilidad pero se acercaría antes al límite de pérdidas y cavitación. Esa relación entre geometría y régimen de flujo es lo que hace útil al Venturi como sensor.

# Ejemplo de aplicación real

## Contexto
El pulverizador de pintura (aerógrafo industrial) utiliza el efecto Venturi para succionar el líquido desde un depósito situado debajo de la boquilla. El aire comprimido que circula a gran velocidad por la boquilla crea una zona de baja presión [[p2]] en la garganta, que succiona la pintura hacia arriba. No hay bomba ni pieza móvil: la única fuente de energía es la presión del aire comprimido.

## Estimación física
Considerar un aerografo donde el aire circula a [[v1]] ≈ 5 m/s por la sección principal de área [[A1]] = 2 cm², y la garganta tiene área [[A2]] = 0.2 cm². La ecuación de continuidad indica que [[v2]] será diez veces mayor, es decir, 50 m/s. Con densidad [[rho]] del aire de 1.2 kg/m³ y el factor geométrico ([[A1]]/[[A2]])² − 1 igual a 99, la caída de presión [[dp]] es del orden de 1485 Pa. Para elevar una columna de pintura de densidad 1200 kg/m³ hasta 12 cm de altura se necesitan unos 1411 Pa. El margen de succión es de 74 Pa. Aumentar [[v2]] a 60 m/s mediante una boquilla más estrecha elevaría [[dp]] a unos 2160 Pa, con un margen de seguridad del 53 %.

## Interpretación
El análisis cuantitativo desvela una clave de diseño fundamental: el efecto Venturi no es una curiosidad pasiva, sino una herramienta de ingeniería activa. La dependencia cuadrática de [[dp]] con [[v2]] significa que pequeños cambios geométricos producen grandes efectos de presión. Para líquidos densos o columnas de aspiración altas, el diseñador debe incrementar [[v2]] — ya sea reduciendo [[A2]] o aumentando el caudal de aire — mientras vigila que [[p2]] permanezca por encima de la presión de vapor del líquido (límite de cavitación). Si [[A2]] baja un 10 %, la caída de presión ya no cambia linealmente: el efecto se amplifica y puede mover el sistema de una succión débil a una succión útil o, en el extremo opuesto, a cavitación. El coeficiente de descarga C (típicamente 0.97 para una boquilla bien diseñada) introduce una corrección del 3 % en el caudal ideal, lo que confirma que el modelo Venturi ideal es una excelente primera aproximación para dispositivos reales y valida su uso generalizado en diseño de ingeniería preliminar sin recurrir a simulaciones computacionales complejas.

Esto implica un cambio de régimen muy claro: por debajo del umbral de presión, el aire solo acelera sin lograr elevar pintura; por encima de ese umbral, aparece una succión estable y el líquido asciende de forma continua. En otras palabras, el número no sirve solo para calcular una magnitud, sino para decidir si el pulverizador funciona o no funciona en condiciones reales.

Desde el punto de vista físico, el dato importante no es solo cuánto vale [[dp]], sino si esa caída supera la columna hidrostática equivalente de la pintura. Si la succión disponible queda por debajo de ese umbral, el sistema se comporta como un conducto de aire rápido sin arrastre eficaz del líquido. Si lo supera con margen, la pintura entra, se atomiza y el flujo se vuelve estable; si se fuerza demasiado, aparecen pérdidas, niebla excesiva y riesgo de cavitación local. Por eso la interpretación correcta exige comparar escalas, no solo leer un número aislado.`;export{e as default};
