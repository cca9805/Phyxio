# Modelos de la Calefacción Resistiva

El análisis de la calefacción resistiva puede abordarse con distintos niveles de complejidad según el objetivo del cálculo. Desde el modelo estacionario más simple hasta la simulación horaria dinámica, cada aproximación tiene su dominio de validez y sus señales de fallo. Conocer cuándo conviene cambiar de modelo es tan importante como dominar el modelo en sí.

## Modelo ideal

El modelo estacionario ideal de la resistiva asume que el [[consumo_electrico]] se calcula exclusivamente como el producto de la [[potencia_del_emisor]] por el [[tiempo_efectivo_de_uso]], con un [[rendimiento de conversión|eta]] constante próximo a 1 y un [[coeficiente_de_rendimiento]] = 1. Este modelo representa la calefacción como un proceso puramente lineal: duplicar la [[potencia_del_emisor]] o el [[tiempo_efectivo_de_uso]] duplica el [[consumo_electrico]] y el coste.

Este modelo es el punto de partida canónico para cualquier estimación residencial de primera aproximación. Su fortaleza reside en la transparencia: solo requiere conocer [[potencia_del_emisor]] y [[tiempo_efectivo_de_uso]] para obtener [[consumo_electrico]] con alta fiabilidad cuando el sistema opera en régimen cuasi-estacionario. Es la herramienta adecuada para comparar escenarios de uso y evaluar el impacto de cambios de hábitos.

## Hipótesis

Para que el modelo ideal sea aplicable, se asumen las siguientes condiciones simplificadoras:
1. **Potencia constante**: La [[potencia_del_emisor]] se mantiene en su valor nominal durante todo el periodo analizado; no hay variaciones por tensión de red ni degradación del elemento resistivo.
2. **Tiempo efectivo conocido**: El [[tiempo_efectivo_de_uso]] representa las horas reales con la resistencia activa, no las horas con el aparato encendido. El ciclo del termostato se asume correctamente contabilizado en el promedio.
3. **Rendimiento estable**: El [[rendimiento de conversión|eta]] del emisor es constante e independiente de la carga o de la temperatura ambiente.
4. **Sin efectos dinámicos dominantes**: La inercia térmica del recinto y del emisor no altera significativamente el promedio energético de la temporada.

## Dominio de validez cuantitativo

El modelo estacionario es preciso (error < 10%) cuando se cumplen estas condiciones cuantitativas:
- La [[potencia_del_emisor]] del emisor se conoce con precisión de ±5%.
- El [[tiempo_efectivo_de_uso]] se estima o mide con error menor al 15%.
- La temperatura de consigna no varía más de ±3 °C durante el periodo analizado.
- La potencia simultánea total no supera el 90% de la potencia contratada (sin riesgo de corte).
- El horizonte temporal es al menos una semana completa para promediar los ciclos del termostato.

## Señales de fallo del modelo

Es necesario abandonar el modelo estacionario simple cuando aparecen estas señales observables:
- **Discrepancia factura-cálculo > 20%**: Si el consumo medido en la factura difiere en más del 20% del calculado con la fórmula principal de consumo, el [[tiempo_efectivo_de_uso]] está mal estimado o hay cargas adicionales sin contabilizar.
- **Alta variabilidad diaria**: Si el consumo diario fluctúa más del 40% entre días similares con la misma temperatura exterior, el modelo estacionario no captura los efectos dinámicos del recinto.
- **Equipo en ciclos muy cortos**: Si el emisor enciende y apaga más de 8 veces por hora, la inercia térmica del recinto domina el balance y el promedio estacionario pierde validez.

## Modelo extendido o alternativo

Cuando el modelo simple falla, la transicion recomendada es hacia uno de estos enfoques más precisos. Cuando conviene cambiar: la precisión requerida supera el ±10% o se toman decisiones de inversión basadas en ahorros proyectados. Cambiar a un modelo más complejo solo se justifica en esos casos:

- **Modelo de demanda por vivienda**: Incorpora las pérdidas de la envolvente, las ganancias solares y la inercia térmica para calcular la demanda real hora a hora. Es necesario cuando se evalúa el impacto de mejoras de aislamiento.
- **Modelo comparativo con bomba de calor**: Reemplaza el [[coeficiente_de_rendimiento]] = 1 de la resistiva por el SCOP estacional de la alternativa (típicamente 3–5), permitiendo comparar el [[consumo_electrico]] anual para el mismo [[calor_util]] entregado.
- **Simulación dinámica horaria**: Calcula minuto a minuto el balance térmico del recinto, incluyendo inercia, ganancias internas y variación climática. Necesaria para edificios con alta inercia o para diseño de sistemas de control avanzado.

## Comparación operativa

| Característica | Modelo Estacionario | Modelo de Demanda | Simulación Dinámica |
| :--- | :--- | :--- | :--- |
| **Complejidad** | Baja | Media | Alta |
| **Datos necesarios** | [[potencia_del_emisor]] y [[tiempo_efectivo_de_uso]] | Envolvente + clima | Datos horarios completos |
| **Precisión** | ±10–20% | ±5–10% | ±1–5% |
| **Uso principal** | Estimación rápida | Auditoría de rehabilitación | Diseño y control avanzado |

El modelo estacionario resistivo es la mejor herramienta para la toma de decisiones cotidianas y para la enseñanza de los conceptos fundamentales de energía y coste. Solo conviene escalar a modelos más complejos cuando las decisiones tienen impacto económico significativo y se requiere mayor certeza en las proyecciones.