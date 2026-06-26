const e=`## 1. Auditoría exergética en centrales termoeléctricas\r
\r
En una central de ciclo combinado (gas + vapor), cada componente genera entropía por distintas fuentes: la cámara de combustión por gradientes térmicos y reacción química irreversible, la turbina por fricción aerodinámica, el condensador por transferencia de calor a ΔT finito. El ingeniero de eficiencia calcula [[S_gen]] de cada componente para elaborar un «mapa de destrucción de exergía» que identifica dónde se pierde más trabajo potencial.\r
\r
El balance entrópico se aplica a cada componente como volumen de control en régimen estacionario. La tasa de generación de entropía es [[S_gen]] = Σ(ṁ·s)_salida − Σ(ṁ·s)_entrada − ΣQ̇/T_frontera. La exergía destruida por segundo en cada componente es T_0 · [[S_gen]], expresada en kW.\r
\r
En una central típica de 500 MW, la cámara de combustión destruye 200–300 MW de exergía (la mayor fuente), la turbina 20–40 MW y el condensador 30–50 MW. El análisis entrópico permite priorizar inversiones: mejorar la combustión (precalentamiento del aire, relación estequiométrica óptima) produce mayor ahorro que pulir la turbina.\r
\r
Variable dominante: [[S_gen]] por componente en W/K (o equivalentemente, exergía destruida en kW)\r
Límite de validez: el modelo de régimen estacionario falla durante transitorios de arranque o parada. El modelo de componente aislado falla si hay acoplamiento térmico significativo entre componentes adyacentes.\r
\r
## 2. Optimización de la cadena de frío alimentaria\r
\r
En la distribución de alimentos refrigerados, cada eslabón (producción, transporte, almacén, punto de venta) introduce irreversibilidad por transferencia de calor a ΔT finito entre el alimento y el medio refrigerante. El ingeniero de logística calcula [[DeltaS_univ]] acumulado a lo largo de la cadena para identificar los eslabones con mayor degradación térmica.\r
\r
La generación de entropía en cada eslabón se estima como [[S_gen]] ≈ Q_fuga · (1/T_alimento − 1/T_ambiente), donde Q_fuga es el calor que penetra por las paredes del contenedor. Minimizar [[S_gen]] implica minimizar ΔT (mejor aislamiento) o minimizar Q_fuga (menor superficie expuesta, material aislante superior).\r
\r
El criterio de rechazo del producto se basa indirectamente en la entropía acumulada: si la temperatura del alimento ha subido demasiado tiempo (exceso de Q absorbido), la degradación bioquímica (proporcional a [[S_gen]] acumulado) excede el umbral de seguridad.\r
\r
Variable dominante: [[S_gen]] acumulado por eslabón de la cadena (J/K por ciclo de transporte)\r
Límite de validez: el modelo falla cuando la temperatura del alimento no es uniforme (gradientes internos en piezas grandes de carne o pescado). En ese caso se requiere el balance entrópico diferencial con difusión de calor.\r
\r
## 3. Diseño de disipadores térmicos en microprocesadores\r
\r
Los microprocesadores modernos disipan 50–200 W en áreas de pocos cm². El calor fluye desde la superficie del chip (≈ 370 K) a través del disipador hasta el aire ambiente (≈ 310 K). Cada resistencia térmica en la cadena (interfaz chip-disipador, aletas, convección al aire) genera entropía proporcional al flujo de calor y al ΔT local.\r
\r
El ingeniero electrónico calcula [[S_gen]] en cada interfaz:\r
\r
- Interfaz térmica (TIM): [[S_gen]] ≈ Q · ΔT_TIM / (T_chip · T_base) ≈ 150 × 5 / (370 × 365) ≈ 0.0056 W/K\r
- Disipador a aire: [[S_gen]] ≈ Q · ΔT_conv / (T_base · T_aire) ≈ 150 × 50 / (365 × 310) ≈ 0.066 W/K\r
\r
La convección al aire es la fuente dominante de irreversibilidad. Mejorar la convección (mayor flujo de aire, mejor diseño de aletas) reduce [[S_gen]] y permite al chip operar a menor temperatura, aumentando su vida útil y rendimiento.\r
\r
Variable dominante: [[S_gen]] total del sistema de refrigeración del chip (W/K)\r
Límite de validez: el modelo falla en regímenes de ebullición (cambio de fase del refrigerante en cooling líquido) donde la contribución isotérmica del cambio de fase altera el perfil de [[S_gen]].\r
\r
## 4. Análisis de irreversibilidad en procesos de mezcla industrial\r
\r
En la producción de polímeros, dos corrientes de monómero a diferentes temperaturas y composiciones se mezclan en un reactor. La mezcla genera entropía por dos fuentes: (1) igualación de temperaturas (irreversibilidad térmica) y (2) igualación de composiciones (irreversibilidad de mezcla).\r
\r
La contribución térmica se calcula como para la mezcla de dos cuerpos a distintas temperaturas. La contribución de mezcla se expresa como una parte de [[S_gen]] asociada a las fracciones molares de cada componente en la mezcla final.
\r
El ingeniero químico evalúa si la irreversibilidad de mezcla es aceptable o si conviene usar un proceso de mezclado gradual (etapas múltiples) que reduce [[S_gen]] a costa de mayor complejidad del equipo.\r
\r
Variable dominante: [[S_gen]] total del proceso de mezcla (J/(K·mol)) desglosado en contribución térmica y de composición\r
Límite de validez: para polímeros con entalpía de mezcla no ideal y no nula, la contribución entrópica de mezcla difiere del caso ideal y requiere modelos de actividad (Flory-Huggins, NRTL).
\r
## 5. Evaluación de irreversibilidad en frenado regenerativo de vehículos eléctricos\r
\r
En un vehículo eléctrico, el frenado regenerativo convierte energía cinética en energía eléctrica almacenada en la batería. Sin embargo, el proceso no es perfectamente reversible: hay pérdidas por resistencia eléctrica en el motor/generador, por fricción mecánica residual y por la resistencia interna de la batería.\r
\r
La entropía generada en cada fuente es:\r
- Motor/generador: contribución de [[S_gen]] por disipación Joule.
- Batería: contribución de [[S_gen]] por resistencia interna.
- Fricción mecánica: contribución de [[S_gen]] por disipación en el freno.
\r
La eficiencia de segunda ley del frenado regenerativo compara la exergía recuperada con la energía cinética inicial, descontando la destrucción asociada a [[S_gen]] total. Un vehículo eléctrico moderno alcanza valores cercanos al 60-75%, lo que significa que el 25-40% de la energía cinética se degrada irreversiblemente en cada frenada.
\r
El cálculo de [[S_gen]] por componente permite al ingeniero identificar qué mejora (menor resistencia eléctrica, mejor lubricación, batería con menor R_interna) produce mayor ganancia en eficiencia regenerativa.\r
\r
Variable dominante: [[S_gen]] por frenada desglosado por componente (J/K por evento de frenado)\r
Límite de validez: el modelo lineal, donde las pérdidas escalan con la corriente al cuadrado, falla a corrientes muy altas donde efectos no lineales (saturación magnética, calentamiento adiabático) modifican las resistencias. También falla durante frenadas de emergencia donde la disipación es tan rápida que no hay tiempo para que el calor se distribuya uniformemente.
`;export{e as default};
