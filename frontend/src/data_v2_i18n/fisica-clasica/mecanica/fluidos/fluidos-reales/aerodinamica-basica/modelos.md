# Modelos de Aerodinámica

## Modelo ideal
El modelo ideal de aerodinámica básica se basa en la aplicación de las ecuaciones de sustentación y arrastre sobre un cuerpo rígido inmerso en un flujo de aire uniforme y estacionario. Este modelo asume que el aire se comporta como un medio continuo y que las fuerzas resultantes pueden describirse mediante coeficientes constantes [[C_D]] y [[C_L]] para un ángulo de ataque dado. Es la representación dominante utilizada en el diseño preliminar aeronáutico y automotriz, permitiendo una cuantificación rápida de la eficiencia sin recurrir a simulaciones computacionales complejas (CFD).

## Hipótesis
- **Cuerpo rígido e indeformable**: El volumen y el área [[A]] no cambian bajo las cargas aerodinámicas.
- **Fluido continuo e incompresible**: Se ignora la naturaleza molecular y los cambios de densidad por velocidad (M < 0.3).
- **Flujo estacionario**: Las propiedades del fluido en cualquier punto son constantes en el tiempo respecto al cuerpo.
- **Capa límite delgada**: Los efectos viscosos se concentran en una zona milimétrica cerca de la superficie.
- **Atmósfera estándar**: Se asume una densidad [[rho]] constante para un nivel de altitud específico.

## Dominio de validez cuantitativo
Este modelo es operativo bajo las siguientes restricciones métricas:
- **Régimen de velocidad**: Subsónico bajo, típicamente v < 100 text{ m/s} para garantizar que la incompresibilidad sea una hipótesis válida.
- **Número de Mach**: M < 0.3. Por encima de este valor, la compresibilidad del aire altera significativamente los coeficientes.
- **Número de Reynolds**: Debe ser superior a 10^4. Si el número de Reynolds es muy bajo, el flujo es puramente viscoso (Stokes) y el arrastre ya no es cuadrático con la velocidad.
- **Ángulos de ataque moderados**: Para la sustentación, el ángulo debe ser inferior al de pérdida (alpha < 12^circ-15^circ).

## Señales de fallo del modelo
- **Entrada en pérdida (Stall)**: Si el cuerpo aumenta su inclinación y la sustentación cae bruscamente mientras el arrastre sube de forma explosiva.
- **Vibraciones por buffet**: Aparición de fluctuaciones de presión que indican que el flujo se ha vuelto turbulento y se ha separado de la superficie.
- **Divergencia de arrastre**: Si al aumentar ligeramente la velocidad el arrastre sube mucho más de lo predicho por el cuadrado de v, indicando cercanía a la velocidad del sonido.

## Modelo extendido o alternativo
Para situaciones que exceden los límites anteriores, se recurre a modelos de **Dinámica de Fluidos Computacional (CFD)** o **Teoría de Flujo Compresible**.
- **Qué cambia**: Se incorporan las ecuaciones de Navier-Stokes completas para modelar la viscosidad real punto a punto.
- **Alternativa**: En régimen supersónico, se utilizan las relaciones de expansión y ondas de choque de Prandtl-Meyer.
- **Enfoque micrométrico**: Si el objeto es muy pequeño (micro-drones), se deben usar modelos de bajo número de Reynolds donde la fricción domina sobre la presión.

## Transición al modelo alternativo
**¿Cuándo conviene cambiar de modelo?** El modelo incompresible colapsa y se debe transicionar al modelo alternativo cuando obligatoriamente en dos escenarios críticos:
1. **Escala de Velocidad**: Cuando el número de Mach supera 0.3. En este punto, el error de omitir la compresibilidad del aire supera el 5% y el modelo incompresible deja de ser aceptable para ingeniería.
2. **Escala de Ángulo**: Cuando el flujo se separa (Stall). Aquí, la relación lineal entre el coeficiente [[C_L]] y el ángulo desaparece, y se debe transicionar a modelos empíricos de flujo separado o simulaciones CFD de alta fidelidad.

## Comparación operativa
El modelo ideal es una herramienta de "lápiz y papel" excelente para el aprendizaje conceptual y el diseño inicial. El modelo extendido (CFD) es una herramienta de precisión que requiere gran capacidad de cálculo. Mientras el modelo básico destaca por mostrar la relación cuadrática fundamental con la velocidad [[v]], los modelos avanzados son necesarios para capturar la física compleja de las ondas de choque y las turbulencias de estela.
