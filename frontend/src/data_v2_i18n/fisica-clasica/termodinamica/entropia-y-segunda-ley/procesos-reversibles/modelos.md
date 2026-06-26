## Modelo ideal

El modelo base para procesos reversibles asume que el **sistema** puede describirse por estados de equilibrio bien definidos en cada instante del proceso (cuasi-estático) y que toda interacción con el **entorno** ocurre a través de gradientes infinitesimales de temperatura, presión y potencial químico. No hay fuentes de disipación (fricción, turbulencia, mezcla libre) en ningún punto.

La simplificación central es que el proceso puede invertirse en cada paso sin coste alguno: al revertir las condiciones externas, el sistema recorre exactamente el mismo camino en sentido contrario, devolviendo sistema y entorno a sus estados iniciales. La magnitud conservada clave es [[DeltaS_univ]] = 0.

Para máquinas térmicas cíclicas, el modelo se concreta en el ciclo de Carnot: dos isotermas (intercambio de calor con reservorios a [[T_caliente]] y [[T_frio]]) y dos adiabáticas reversibles (isentrópicas). La eficiencia de este ciclo ideal es [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]].

## Hipótesis

- **Proceso cuasi-estático**: el sistema está en equilibrio interno en cada instante. La velocidad del proceso es infinitamente lenta comparada con los tiempos de relajación del sistema.
  - Violación: procesos rápidos (explosiones, expansiones turbulentas) donde el sistema no alcanza equilibrio interno entre pasos sucesivos.

- **Sin fricción**: no hay disipación mecánica en pistones, válvulas, rodamientos ni en el fluido de trabajo.
  - Violación: todo mecanismo real tiene fricción. Incluso la viscosidad del fluido genera disipación.

- **Gradientes infinitesimales de temperatura**: el calor se transfiere con diferencia de temperatura infinitamente pequeña entre sistema y reservorio.
  - Violación: toda transferencia real requiere un gradiente finito de T, que genera entropía.

- **Reservorios ideales**: los focos caliente y frío tienen capacidad calorífica infinita; su temperatura no cambia al absorber o ceder calor.
  - Violación: si los focos son finitos, su temperatura cambia durante el proceso y la eficiencia de Carnot varía durante el ciclo.

- **Sistema cerrado**: no hay transferencia de masa con el entorno.
  - Violación: motores de combustión interna son sistemas abiertos con entrada de combustible y salida de gases.

## Dominio de validez cuantitativo

El modelo de Carnot es cuantitativamente exacto como **cota superior**: ninguna máquina real puede superar [[eta_Carnot]]. Su utilidad como predicción directa de rendimiento se limita a:

- Procesos donde la irreversibilidad es despreciable (gradientes < 1 K, fricción mínima): error respecto al ideal < 5%.
- Estimaciones de eficiencia máxima para evaluar si una inversión en mejora del proceso merece la pena.
- Benchmarking: la eficiencia de segunda ley (eta_real / [[eta_Carnot]]) cuantifica la calidad del diseño real.

> [!NOTE]
> La eficiencia de Carnot no es una predicción del rendimiento real: es un techo que la realidad nunca alcanza. Centrales térmicas modernas alcanzan el 40-60% de [[eta_Carnot]], motores de coche el 25-35%.

El modelo isentrópico (adiabático reversible) es válido como aproximación cuando:
- Las paredes del sistema están bien aisladas (pérdidas de calor < 2% del trabajo).
- La fricción interna del fluido es despreciable (número de Reynolds moderado, flujo laminar).

## Señales de fallo del modelo

- **Eficiencia real > [[eta_Carnot]]**: error de cálculo seguro. El modelo no falla; el cálculo de la eficiencia real o de las temperaturas de los focos es incorrecto.
- **[[DeltaS_univ]] > 0 significativo para un proceso descrito como reversible**: indica que hay fuentes de irreversibilidad no consideradas (fricción oculta, gradientes no despreciables).
- **Temperatura del fluido de trabajo oscila en lugar de seguir una curva suave**: indica proceso no cuasi-estático (turbulencia, choques).
- **Rendimiento de segunda ley < 0.5**: indica irreversibilidades importantes; el modelo reversible subestima enormemente las pérdidas reales.

## Modelo extendido o alternativo

Para superar las limitaciones del modelo reversible ideal:

- **Ciclos endorreversibles** (Curzon-Ahlborn): mantienen la reversibilidad interna del ciclo pero permiten transferencia de calor irreversible con los focos (gradiente finito de T). La eficiencia a máxima potencia es eta_CA = 1 − sqrt([[T_frio]]/[[T_caliente]]), que predice eficiencias reales mucho mejor que Carnot.

- **Análisis exergético con irreversibilidades**: se calcula la exergía destruida por cada componente real (turbina, compresor, intercambiador) y se resta del máximo reversible.

- **Termodinámica de tiempo finito** (Andresen, Salamon): optimiza ciclos con restricción de tiempo o potencia finita, obteniendo diseños óptimos que difieren del Carnot ideal.

Cuando conviene cambiar de modelo: la transición al modelo extendido se justifica cuando:
- Se requiere predicción cuantitativa del rendimiento real (no solo la cota superior).
- El proceso tiene restricciones de potencia o tiempo (centrales eléctricas, motores).
- Los gradientes térmicos son significativos (ΔT > 50 K entre fluido y foco).

## Comparación operativa

| Criterio | Modelo reversible (Carnot) | Modelo endorreversible (Curzon-Ahlborn) |
|---|---|---|
| **Precisión** | Cota superior exacta; sobreestima rendimiento real | Predicción realista de eficiencia a máxima potencia |
| **Complejidad** | Fórmula algebraica simple | Requiere optimización con restricción de flujo de calor |
| **Rango de aplicación** | Universal como referencia | Sistemas con transferencia de calor a ΔT finito |
| **Ventaja principal** | Límite teórico absoluto | Rendimiento práctico alcanzable |
| **Limitación principal** | No predice rendimiento real | No incluye fricción ni otras irreversibilidades internas |
| **Uso típico** | Enseñanza, benchmarking, análisis de segunda ley | Diseño preliminar de centrales, optimización industrial |
