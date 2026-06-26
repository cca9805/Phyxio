const e=`\uFEFF# Aplicaciones de la Calefacción Resistiva\r
\r
## 1. Calefacción puntual de estancias de uso breve\r
\r
La calefacción resistiva es la solución óptima para estancias con periodos de ocupación cortos e impredecibles, como un baño, un trastero habilitado como estudio o un garaje acondicionado. En estos casos, el bajo coste de instalación y la respuesta inmediata de calor compensan el mayor coste por kWh frente a una bomba de calor, que requeriría muchas más horas de uso para amortizar la inversión inicial.\r
\r
**Variable dominante:** [[tiempo efectivo de uso|t]] — la rentabilidad de la resistiva mejora drásticamente cuando el [[t]] diario es bajo (< 2 h), reduciendo el [[consumo eléctrico|E]] total a valores manejables.\r
\r
**Límite de validez:** Esta aplicación pierde rentabilidad cuando el uso diario supera las 4–5 horas durante más de 60 días consecutivos. A partir de ese umbral, el coste acumulado de una solución alternativa con [[COP]] > 2 comienza a compensar la inversión de instalación.\r
\r
## 2. Complemento temporal en picos de frío extremo\r
\r
Los sistemas de climatización principales (bombas de calor, caldera central) están dimensionados para cubrir la demanda en condiciones normales. Durante episodios de frío extremo que superan el diseño del sistema principal, un emisor resistivo portátil puede cubrir el déficit térmico puntual sin necesidad de sobredimensionar la instalación fija.\r
\r
**Variable dominante:** [[potencia del emisor|P]] — en este contexto se selecciona la [[P]] necesaria para cubrir la diferencia entre la demanda pico y la capacidad máxima del sistema principal.\r
\r
**Límite de validez:** La aplicación es válida únicamente para picos de duración inferior a 72 horas consecutivas y con [[P]] que no comprometa el límite de potencia contratada. Si los picos son recurrentes (más de 10 días/año), conviene revisar el dimensionado del sistema principal.\r
\r
## 3. Referencia de baseline para auditorías energéticas\r
\r
El [[coeficiente de rendimiento|COP]] = 1 de la resistiva es el punto de referencia canónico para cualquier comparativa de tecnologías de calefacción. Cuando se realiza una auditoría energética de una vivienda o se evalúa la viabilidad de instalar una bomba de calor, el escenario "todo resistiva" con [[COP]] = 1 establece el límite superior de consumo eléctrico y el límite inferior de rentabilidad que cualquier otra tecnología debe superar para justificar su inversión.\r
\r
**Variable dominante:** [[consumo eléctrico|E]] estacional calculado con [[COP]] = 1, que actúa como denominador de la comparación de ahorro potencial.\r
\r
**Límite de validez:** La resistiva como baseline es válida cuando los sistemas alternativos ofrecen el mismo [[calor útil|Q]] en las mismas condiciones de confort. Si el sistema alternativo no puede mantener la temperatura de consigna en los días más fríos, la comparación no es directa.\r
\r
## 4. Calefacción en viviendas de uso estacional\r
\r
Las segundas residencias, casas de campo o cabañas de montaña con menos de 30 días de uso anual concentrado encuentran en la resistiva su mejor solución económica. El coste de instalación nulo (basta un radiador portátil), la ausencia de mantenimiento y la facilidad de uso hacen que el mayor coste energético sea irrelevante dado el bajo número total de horas de funcionamiento anuales.\r
\r
**Variable dominante:** [[tiempo efectivo de uso|t]] anual total — si el [[t]] anual acumulado es menor de 200 horas, la resistiva compite favorablemente frente a cualquier sistema con mayor [[COP]] pero mayor inversión inicial.\r
\r
**Límite de validez:** Cuando el uso estacional se concentra en semanas con temperaturas extremas (montaña en invierno), la [[P]] necesaria puede ser elevada y la simultaneidad con otros electrodomésticos debe verificarse respecto al suministro eléctrico disponible, que en localizaciones remotas puede estar limitado.\r
\r
## 5. Verificación experimental del modelo E = P·t\r
\r
La calefacción resistiva es el sistema pedagógico ideal para enseñar y verificar experimentalmente la relación entre [[consumo eléctrico|E]], [[potencia del emisor|P]] y [[tiempo efectivo de uso|t]] con medidores de consumo portátiles. La linealidad perfecta entre [[consumo eléctrico|E]], [[potencia del emisor|P]] y [[tiempo efectivo de uso|t]] permite diseñar prácticas de laboratorio donde los alumnos miden el [[E]] real y lo comparan con el calculado, obteniendo una validación del modelo con errores típicamente inferiores al 3%.\r
\r
**Variable dominante:** [[consumo eléctrico|E]] medido frente a [[E]] calculado — la discrepancia entre ambos cuantifica la desviación del modelo ideal.\r
\r
**Límite de validez:** La verificación experimental es válida para emisores con [[rendimiento de conversión|eta]] estable y sin control automático de potencia. Los emisores con variador de potencia o modulación inverter no verifican la relación lineal simple y requieren una versión extendida del experimento.\r
\r
## Consideraciones transversales\r
\r
El denominador común de todas las aplicaciones anteriores es la necesidad de conocer con precisión el [[tiempo efectivo de uso|t]] real, no el tiempo de conexión. En cualquier contexto donde se aplique la resistiva, el [[t]] efectivo es la variable con mayor impacto en el [[consumo eléctrico|E]] final y, por tanto, en la rentabilidad del sistema. El [[coeficiente de rendimiento|COP]] = 1 garantiza la predictibilidad del sistema; lo que varía entre escenarios es siempre la demanda térmica del edificio y los hábitos de uso, que se traducen directamente en variaciones del [[tiempo efectivo de uso|t]].\r
`;export{e as default};
