# Flotación - Modelo y validez

## Modelo ideal
El modelo ideal de flotación se basa en la aproximación hidrostática de un cuerpo rígido en un fluido incompresible y uniforme. En este modelo, el empuje se considera una fuerza puntual aplicada en el centro de carena, y se desprecia cualquier efecto de tensión superficial, viscosidad o dinámica del fluido. El sistema se asume en un estado de reposo absoluto o cuasi-estático, donde las únicas fuerzas relevantes son el peso gravitatorio y la reacción de presión del fluido. Este modelo permite predecir con gran precisión la línea de flotación de objetos geométricamente simples y densidades constantes.

## Hipótesis
- **Cuerpo rígido e indeformable**: El volumen total [[Vtot]] no cambia bajo la presión del fluido.
- **Fluido incompresible**: La densidad del fluido [[rho_f]] es constante en todo el dominio.
- **Densidad uniforme del objeto**: O, en su defecto, un centro de gravedad $G$ bien definido que no se desplaza internamente.
- **Ausencia de efectos dinámicos**: No hay oleaje, corrientes ni movimientos relativos rápidos entre el fluido y el cuerpo.
- **Efectos de superficie despreciables**: Se ignora la capilaridad y la tensión superficial en la interfase aire-fluido-objeto.

## Dominio de validez cuantitativo
El modelo es altamente fiable bajo las siguientes condiciones numéricas y físicas:
- **Criterio de flotabilidad**: Se cumple estrictamente cuando la densidad del objeto no supera la densidad del fluido. Si la densidad del objeto supera la del fluido, el modelo estático de flotación parcial colapsa y se debe transicionar a la **Dinámica de Descenso en Fluidos Viscosos (Ley de Stokes)** o al equilibrio de fuerzas incluyendo la **Normal** del fondo del recipiente.
- **Orden de magnitud**: Efectivo para densidades de sólidos entre $10 \text{ kg/m}^3$ (espumas) y $22000 \text{ kg/m}^3$ (metales densos), siempre que el fluido sea más denso.
- **Rango de presión**: Válido en la superficie terrestre y hasta profundidades cercanas a 100 m en agua, donde la incompresibilidad del agua permite ignorar cambios de densidad del fluido menores al uno por ciento.
- **Presión moderada**: El cuerpo debe ser capaz de soportar la presión hidrostática sin compactarse. Si el módulo de compresibilidad del cuerpo es bajo, el volumen [[Vtot]] disminuye con la profundidad, aumentando su densidad y rompiendo el equilibrio.
- **Estabilidad estática**: El metacentro del cuerpo debe estar por encima de su centro de gravedad. Si la distancia metacéntrica es negativa, el cuerpo volcará y el modelo de "flotación vertical" dejará de ser descriptivo del estado real del sistema.

## Señales de fallo del modelo
- **Oscilaciones no amortiguadas**: Si el cuerpo comienza a oscilar verticalmente o balancearse sin detenerse, los efectos dinámicos y de inercia del fluido (masa añadida) son relevantes y el modelo estático falla.
- **Variación de la línea de flotación**: Si el cuerpo parece "hundirse" más de lo calculado sin variar su peso, puede indicar porosidad (absorción de fluido) o deformación por presión.
- **Efecto de succión**: En fondos muy lodosos, el modelo de Arquímedes puede verse alterado por fuerzas de adhesión que impiden que el fluido ejerza presión en la cara inferior del objeto.

## Modelo extendido o alternativo
Para situaciones complejas, se recurre a modelos de **Hidrodinámica de Buques** o **Interacción Fluido-Estructura (FSI)**.
- **Qué cambia**: Se incorporan las ecuaciones de Navier-Stokes para modelar la resistencia al avance y el efecto de las olas.
- **Alternativa**: En escalas micrométricas, se debe usar el modelo de fuerzas capilares y tensión superficial, donde un objeto más denso (como un clip) puede "flotar" sin desplazar su peso en fluido debido a la elasticidad de la superficie.

## Comparación operativa
El modelo ideal es suficiente para el diseño preliminar de barcos, boyas y cálculos de carga de icebergs. Sin embargo, para la navegación en mar abierto o el diseño de submarinos (donde la densidad del fluido varía con la salinidad y temperatura a diferentes profundidades), se requieren los modelos extendidos para garantizar la seguridad estructural y la maniobrabilidad.