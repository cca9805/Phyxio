El estudio de la eficiencia en climatización no se basa en un único modelo universal, sino en una jerarquía de aproximaciones que equilibran la precisión física con la viabilidad práctica para la toma de decisiones. Cada modelo tiene un dominio de validez específico y señales de fallo que nos indican cuándo debemos transitar hacia una descripción más compleja de la realidad.

## Modelo ideal

Este es el modelo de referencia para la mayoría de auditorías energéticas residenciales, conocido como balance estacional ideal. Se basa en la hipótesis de que podemos representar un periodo de tiempo extenso (como un invierno de 5 meses) mediante un único valor agregado de [[demanda_termica_estacional]] y un coeficiente de [[rendimiento_estacional_scop]].

Este modelo es extremadamente útil para realizar estimaciones rápidas de [[consumo_electrico_estacional]] y comparar de forma estandarizada dos equipos de climatización mediante sus etiquetas energéticas. Sin embargo, su simplicidad oculta la dinámica temporal. Trata la casa como un sistema en estado estacionario, ignorando que el flujo de calor fluctúa minuto a minuto según la radiación solar y la ocupación.

## Hipótesis

Para que el modelo ideal sea aplicable, se asumen las siguientes hipótesis simplificadoras:
1. **Estado Estacionario Promediado**: Se asume que las variaciones horarias de temperatura se compensan a lo largo de la temporada.
2. **Linealidad de Carga**: Se supone que el equipo de climatización mantiene su [[rendimiento_estacional_scop]] nominal de forma constante, sin verse penalizado por arranques frecuentes o condiciones extremas puntuales.
3. **Uso Homogéneo**: Se asume que el usuario mantiene una temperatura de confort constante y no modifica sus hábitos drásticamente entre el escenario [[base]] y el [[nuevo]].

## Dominio de validez cuantitativo

El modelo de balance estacional es válido y preciso (con un margen de error menor al 10%) siempre que se cumplan las siguientes condiciones cuantitativas:
- El horizonte temporal de análisis debe ser al menos de una temporada completa (mínimo 120 días).
- La temperatura interior de confort debe mantenerse estable, con una variación máxima de ±2 °C respecto al valor de diseño.
- La diferencia de temperatura media exterior entre el escenario [[base]] y el [[nuevo]] no debe superar los 3 °C; de lo contrario, se requiere una normalización por grados-día.
- El salto térmico entre el interior y el exterior no debe superar de forma sostenida los 25 °C.

## Señales de fallo del modelo

Es imperativo abandonar el modelo estacional simplificado cuando se presenten las siguientes señales de fallo observables:
- **Discrepancia Dimensional Crítica**: Si tras recolectar datos reales de facturación se observa que el consumo medido difiere en más de un 25% del calculado teóricamente.
- **Inestabilidad Térmica Sostenida**: Si la vivienda no logra alcanzar la temperatura objetivo (confort) en los días más fríos a pesar de que el cálculo de potencia era correcto. El modelo falla al no capturar la potencia de pico necesaria.
- **Ciclos Cortos del Compresor**: Si el equipo de climatización realiza más de 6 arranques y paradas por hora ( *cycling* ), lo que invalida cualquier proyección de ahorro basada en promedios estacionales.

## Modelo extendido o alternativo

Para análisis de mayor profundidad donde el modelo ideal falla, se utiliza el modelo de bloques acoplados o la simulación dinámica horaria. La **transición** a estos modelos es necesaria **cuando conviene cambiar a** una descripción más precisa:
- **Modelo de Bloques**: Descompone la eficiencia en cuatro subsistemas: Envolvente, Generación, Distribución y Control. Permite detectar fallos sistémicos, como pérdidas en tuberías o ineficiencia de emisores.
- **Simulación Dinámica**: Necesaria cuando la inercia térmica de la vivienda es muy alta (edificios de piedra) y las ganancias solares son muy variables. Este modelo calcula el balance energético minuto a minuto, capturando picos de demanda críticos.

## Comparación operativa

| Característica | Modelo Estacional | Modelo de Bloques | Modelo Dinámico |
| :--- | :--- | :--- | :--- |
| **Complejidad** | Baja | Media | Alta |
| **Uso Principal** | Etiquetas energéticas | Auditoría técnica | Diseño arquitectónico |
| **Datos Requeridos** | Consumos anuales | Características de materiales | Datos meteorológicos horarios |
| **Precisión** | Suficiente para ahorros | Buena para optimizar | Máxima para confort |

En conclusión, para la mayoría de las decisiones de ahorro en el hogar, el modelo estacional ofrece el mejor equilibrio entre esfuerzo de cálculo y utilidad práctica, siempre que se respeten sus límites de validez física.