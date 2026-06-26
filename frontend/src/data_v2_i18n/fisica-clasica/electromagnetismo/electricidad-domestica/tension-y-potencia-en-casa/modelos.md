# Modelos físicos

## Modelo ideal

El modelo ideal asume cargas estables a tensión constante (230 V), sin transitorios, con comportamiento equivalente lineal. Este es el modelo base utilizado para cálculos de primera estimación en instalaciones domésticas. Simplifica el análisis eliminando complejidades secundarias que, aunque presentes en la realidad, no alteran significativamente los resultados para la mayoría de aplicaciones cotidianas.

En este modelo, las magnitudes conservadas son [[tension_electrica]], [[intensidad_de_corriente]] y [[resistencia_electrica]], relacionadas mediante la ley de Ohm. Las magnitudes ignoradas incluyen las variaciones temporales de la resistencia con la temperatura, los efectos inductivos y capacitivos, y la resistencia del cableado de conexión. Esta simplificación permite cálculos directos sin necesidad de métodos numéricos o simulaciones complejas.

El significado físico de la simplificación central radica en que, para cargas puramente resistivas en régimen permanente, la potencia disipada depende únicamente de la tensión aplicada y la resistencia de carga, con [[potencia_electrica]] proporcional al cuadrado de [[tension_electrica]] e inversamente proporcional a [[resistencia_electrica]]. Esta aproximación captura el comportamiento esencial del sistema sin introducir parámetros que complicarían innecesariamente el análisis para estimaciones preliminares.

## Hipótesis

- **Tensión de red constante a 230 V**: La tensión permanece fija independientemente de los cambios de carga. Si se viola esta hipótesis, las caídas de tensión bajo cargas pesadas producirán valores de corriente inferiores a los calculados, subestimando el riesgo térmico en el cableado.

- **Resistencias lineales y constantes**: Las resistencias exhiben comportamiento óhmico sin dependencia de la temperatura o el tiempo de operación. Violación: elementos calefactores aumentan su resistencia hasta un 10-15% al calentarse, reduciendo la corriente real respecto al valor inicial calculado.

- **Régimen permanente sin transitorios**: El sistema opera en estado estacionario, ignorando fenómenos de arranque y estabilización. Violación: motores eléctricos presentan corrientes de arranque 3-7 veces superiores a la nominal, que pueden disparar protecciones dimensionadas solo para régimen permanente.

- **Factor de potencia unitario**: Las cargas son puramente resistivas sin componente reactiva. Violación: motores y transformadores presentan factores de potencia típicos de 0.7-0.9, requiriendo corrientes mayores para entregar la misma potencia activa calculada con el modelo ideal.

- **Circuitos independientes sin acoplamiento**: Cada carga opera de forma aislada sin influencia de otras conectadas simultáneamente. Violación: la simultaneidad de múltiples cargas de alta potencia puede saturar el circuito incluso cuando individualmente cumplen los límites.

## Dominio de validez cuantitativo

Los modelos son físicamente razonables cuando se operan dentro de rangos específicos que garantizan que las hipótesis simplificadoras no introducen errores inaceptables. La aproximación ideal mantiene precisión aceptable (< 10% de error) bajo las siguientes condiciones:

**Desigualdad de validez para tensión:** 207 V ≤ [[tension_electrica]] ≤ 253 V (230 V ± 10% según normativa europea EN 50160). Fuera de este rango, los equipos domésticos pueden funcionar incorrectamente o sufrir daños.

**Rango de corriente por circuito:** 0.1 A ≤ [[intensidad_de_corriente]] ≤ 25 A, donde el límite superior depende de la sección del conductor (1.5 mm² → ~16 A, 2.5 mm² → ~25 A) y el tipo de protección instalada.

**Orden de magnitud de potencia unitaria:** 20 W ≤ [[potencia_electrica]] ≤ 4000 W para electrodomésticos individuales. Potencias inferiores corresponden a estado standby o pequeña electrónica; potencias superiores típicamente requieren circuitos dedicados según el Reglamento Electrotécnico de Baja Tensión (REBT).

**Rango de resistencia operativa:** 1 Ω ≤ [[resistencia_electrica]] ≤ 100 kΩ. Resistencias inferiores a 1 Ω indican probable cortocircuito; superiores a 100 kΩ corresponden a fugas o aislamiento, no cargas operativas.

**Umbrales de transición:** Cuando la corriente calculada excede el 70% de la capacidad nominal del circuito, o cuando se consideran simultáneamente más de tres cargas de alta potencia (> 1000 W), el modelo extendido se vuelve necesario para garantizar seguridad.

## Señales de fallo del modelo

Síntomas observables que indican que las hipótesis del modelo ideal o extendido ya no aplican, y que el alumno puede detectar mediante medición o inspección:

- **Calentamiento localizado en conexiones** a corrientes calculadas como "seguras": indica resistencia de contacto elevada no contemplada en el modelo, típica de enchufes deteriorados o conexiones flojas.

- **Disparos de protección durante el arranque** de electrodomésticos sin sobrecarga permanente: señal de que los transitorios de inserción superan los límites de la protección, ignorados en el cálculo de régimen permanente.

- **Caídas de tensión medidas superiores al 5%** en los extremos del circuito: el modelo asume tensión constante, pero la resistencia del cableado real produce caídas significativas bajo cargas elevadas.

- **Diferencias sistemáticas > 20%** entre potencia calculada y medida con vatímetro: sugiere factor de potencia significativamente diferente de 1, típico de cargas inductivas o electrónicas con fuentes conmutadas.

- **Variación temporal de la resistencia medida** en elementos calefactores: resistencia que cambia más de 5% entre frío y caliente invalida la hipótesis de resistencia constante.

- **Mezcla de unidades sin conversión** produciendo errores de orden de magnitud: confusión entre W y kW, o entre minutos y horas, genera resultados imposibles físicamente (ej. consumo de 1000 kWh en una hora por un aparato doméstico).

## Modelo extendido o alternativo

El modelo extendido abandona las simplificaciones del modelo ideal para incorporar fenómenos relevantes en escenarios de mayor complejidad o criticidad. La diferencia fundamental reside en reconocer que las instalaciones domésticas reales operan con variables que fluctúan en el tiempo y espacio.

**Extensiones principales:**

- **Multiplicadores de arranque**: Motores eléctricos presentan corrientes de inserción 3-7 veces superiores a la nominal durante los primeros segundos. El modelo extendido incorpora estos picos temporales para dimensionar protecciones con márgenes adecuados.

- **Ciclos de trabajo (duty cycle)**: Electrodomésticos como frigoríficos y termos eléctricos operan en ciclos ON/OFF. El modelo extendido calcula consumo energético promediado en el tiempo, no potencia instantánea constante.

- **Caídas de tensión resistivas**: Incluye la resistencia del cableado de instalación (típicamente 0.1-0.5 Ω dependiendo de longitud y sección), produciendo caídas del 1-3% bajo carga nominal.

- **Factores de simultaneidad**: Reconoce que no todos los electrodomésticos conectados operan simultáneamente a plena potencia. Se aplican coeficientes de simultaneidad de 0.7-0.9 al sumar cargas individuales para estimar la demanda máxima probable.

- **Corrección del factor de potencia**: Para cargas inductivas (motores, transformadores, fluorescentes), el modelo extendido distingue entre potencia activa (W), reactiva (VAR) y aparente (VA), calculando la corriente real dividiendo [[potencia_electrica]] entre el producto de [[tension_electrica]] por el factor de potencia cos φ.

**Transición explícita:** Conviene pasar al modelo extendido y abandonar el ideal cuando:
- La corriente calculada ideal excede el 70% de la capacidad del circuito de protección
- Se dimensionan protecciones para electrodomésticos con motor (lavadoras, neveras, acondicionadores)
- Se evalúa instalaciones antiguas (> 20 años) donde la resistencia de contacto puede ser significativa
- Se requiere estimación precisa de consumo energético mensual/anual para comparación con factura real

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|----------|--------------|------------------|
| **Precisión** | ±10-15% respecto a realidad | ±3-5% con mediciones de soporte |
| **Complejidad** | Cálculo directo, una fórmula | Requiere tablas de simultaneidad, factores de corrección |
| **Rango de aplicación** | Estimaciones preliminares, cargas únicas conocidas | Dimensionado de protecciones, múltiples cargas simultáneas |
| **Datos requeridos** | Solo valores nominales de placa | Histórico de uso, mediciones in situ, características de arranque |
| **Tiempo de cálculo** | Inmediato | 3-5× mayor por consideración de múltiples escenarios |
| **Seguridad inherente** | Baja (puede subestimar demandas puntuales) | Alta (incorpora márgenes de seguridad normativos) |
| **Cumplimiento normativo** | No suficiente para certificación | Requerido por REBT para instalaciones nuevas |

**Ventajas del modelo ideal:** Rapidez, simplicidad conceptual, suficiente para decisiones cotidianas simples (¿puedo enchufar este aparato?). Ideal para primer acercamiento didáctico.

**Ventajas del modelo extendido:** Precisión, seguridad garantizada, cumplimiento normativo, válido para cualquier escenario doméstico real. Esencial para instaladores profesionales y auditorías energéticas.

**Limitaciones del ideal:** Inadecuado para situaciones límite, ignora fenómenos transitorios potencialmente peligrosos, no considera envejecimiento de instalaciones.

**Limitaciones del extendido:** Requiere datos que el usuario particular no siempre posee (curvas de arranque de motores, resistencia real del cableado), mayor carga cognitiva, riesgo de sobre-dimensionamiento conservador si se aplican todos los márgenes simultáneamente.

**Integración con otros modelos:** Ambos modelos eléctricos se acoplan con modelos térmicos para evaluación de calentamiento de cables (I²R), modelos económicos para optimización tarifaria, y modelos de confiabilidad para estimación de vida útil de componentes. El análisis completo de una instalación requiere necesariamente esta visión multidisciplinar.