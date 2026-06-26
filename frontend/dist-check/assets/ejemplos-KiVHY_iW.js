const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
En una vivienda unifamiliar de construcción tradicional, el sistema de calefacción consiste en dos emisores resistivos: un convector eléctrico de [[potencia del emisor|P]] = 2,0 kW en el salón y un radiador de aceite de [[potencia del emisor|P]] = 1,5 kW en el dormitorio principal. Durante la temporada invernal (150 días), el convector funciona con un [[tiempo efectivo de uso|t]] de 5 horas diarias y el radiador con un [[tiempo efectivo de uso|t]] de 4 horas diarias. El [[rendimiento de conversión|eta]] de ambos equipos es de 0,97. El precio de la electricidad es de 0,22 EUR/kWh.\r
\r
Se pide: (1) calcular el [[consumo eléctrico|E]] total de la temporada, (2) determinar el [[calor útil|Q]] total entregado, (3) calcular el [[coeficiente de rendimiento|COP]] del sistema, y (4) estimar el coste total de la temporada.\r
\r
## Datos\r
\r
- Convector: [[P]] = 2,0 kW; [[t]] = 5 h/día; temporada = 150 días; [[eta]] = 0,97.\r
- Radiador: [[P]] = 1,5 kW; [[t]] = 4 h/día; temporada = 150 días; [[eta]] = 0,97.\r
- Precio electricidad: 0,22 EUR/kWh.\r
\r
## Definición del sistema\r
\r
El sistema físico analizado es el conjunto de dos emisores resistivos operando en paralelo en distintas estancias de la vivienda. El sistema es termodinámicamente abierto respecto a la vivienda (entrega calor al recinto) pero puede analizarse como cerrado en cuanto al balance energético eléctrico: toda la energía que entra en forma de electricidad se contabiliza. Las pérdidas de distribución son nulas (no hay red de tuberías); las únicas pérdidas son las internas de cada emisor, capturadas por [[rendimiento de conversión|eta]].\r
\r
## Modelo físico\r
\r
Se utiliza el modelo estacionario lineal de la calefacción resistiva. Las hipótesis son:\r
- La [[potencia del emisor|P]] de cada equipo es constante durante todo el periodo activo.\r
- El [[tiempo efectivo de uso|t]] representa las horas reales con la resistencia activa, correctamente estimadas.\r
- El [[rendimiento de conversión|eta]] de cada equipo es constante e independiente de la temperatura.\r
- Los ciclos del termostato están promediados en el [[tiempo efectivo de uso|t]] diario.\r
\r
## Justificación del modelo\r
\r
El modelo lineal resistivo es aplicable porque el [[tiempo efectivo de uso|t]] está definido como las horas con resistencia activa (no horas de conexión), lo que elimina el principal factor de error. Con una temporada de 150 días y condiciones climáticas estables, el promedio estacionario es representativo con un margen de error esperado menor del 10%. Este modelo es el adecuado para una estimación de planificación o auditoría básica.\r
\r
## Resolución simbólica\r
\r
El [[consumo eléctrico|E]] de cada emisor se calcula con la fórmula principal:\r
\r
{{f:energia}}\r
\r
Para el convector: [[E]] = 2,0 kW × 5 h/día × 150 días = 1500 kWh.\r
\r
Para el radiador: [[E]] = 1,5 kW × 4 h/día × 150 días = 900 kWh.\r
\r
[[consumo eléctrico|E]] total de la temporada: 1500 + 900 = 2400 kWh.\r
\r
El [[calor útil|Q]] total se obtiene aplicando el [[rendimiento de conversión|eta]]:\r
\r
{{f:calor_util}}\r
\r
[[Q]] total = 0,97 × 2400 = 2328 kWh térmicos.\r
\r
El [[coeficiente de rendimiento|COP]] del sistema es:\r
\r
{{f:cop_resistiva}}\r
\r
[[COP]] = [[Q]] / [[E]] = 2328 / 2400 = 0,97 ≈ 1, confirmando la naturaleza resistiva del sistema.\r
\r
## Sustitución numérica\r
\r
- [[E]] convector: 2,0 × 5 × 150 = **1500 kWh**\r
- [[E]] radiador: 1,5 × 4 × 150 = **900 kWh**\r
- [[E]] total: 1500 + 900 = **2400 kWh**\r
- [[Q]] total: 0,97 × 2400 = **2328 kWh**\r
- [[COP]]: 2328 / 2400 = **0,97**\r
- Coste total: 2400 × 0,22 = **528 EUR**\r
\r
## Validación dimensional\r
\r
- Consumo [[E]]: kW × h → kWh ✓\r
- Calor útil [[Q]]: adimensional × kWh → kWh ✓\r
- Rendimiento [[COP]]: kWh / kWh → adimensional ✓\r
- Coste económico: kWh × EUR/kWh → EUR ✓\r
\r
## Interpretación física\r
\r
El resultado físicamente relevante es que el [[COP]] = 0,97 indica que el sistema opera dentro del régimen esperado: prácticamente toda la energía eléctrica consumida (2400 kWh) se convierte en [[calor útil|Q]] (2328 kWh). Esto significa que no hay ganancia energética posible más allá de lo que entra.\r
\r
El valor del [[consumo eléctrico|E]] depende directamente del producto [[potencia del emisor|P]] × [[tiempo efectivo de uso|t]]; aumenta linealmente con cada kW de potencia y con cada hora de uso. Esto implica que la única forma de reducirlo, manteniendo el mismo [[calor útil|Q]], es cambiar de tecnología. Físicamente, el [[COP]] = 1 de la resistiva es el límite inferior irreducible de cualquier sistema de calefacción eléctrica directa. Comparado con [[COP]] = 3,5 de una bomba de calor, el ahorro potencial es de 2400 − 665 = **1735 kWh por temporada (381 EUR)**.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una familia evalúa si instalar una bomba de calor en su vivienda de 80 m² para sustituir los dos emisores resistivos del ejemplo anterior. La vivienda consume 2400 kWh eléctricos por temporada para calefacción. El coste instalado de la bomba de calor es de 3500 EUR; se estima un [[coeficiente de rendimiento|COP]] estacional de 3,5 para el clima de la localidad. El precio de la electricidad es 0,22 EUR/kWh.\r
\r
## Estimación física\r
\r
Escala de magnitud: una vivienda de 80 m² en clima templado tiene una demanda térmica del orden de 2000–3000 kWh/temporada. El valor calculado (2400 kWh) es coherente con ese orden de magnitud estimado para una vivienda media.\r
\r
Aproximación cuantitativa del contraste:\r
- [[consumo eléctrico|E]] total temporada resistiva: 2400 kWh.\r
- [[calor útil|Q]] total necesario: 0,97 × 2400 = 2328 kWh.\r
- [[consumo eléctrico|E]] equivalente con bomba de calor ([[COP]] = 3,5): 2328 / 3,5 ≈ 665 kWh.\r
- Ahorro anual en energía: 2400 − 665 = 1735 kWh (del orden del 72%).\r
- Ahorro económico anual: 1735 × 0,22 ≈ 381 EUR/temporada.\r
- Periodo de retorno simple: 3500 / 381 ≈ 9,2 temporadas.\r
\r
## Interpretación\r
\r
El [[coeficiente de rendimiento|COP]] = 1 de la resistiva es exactamente el denominador del argumento económico a favor de la bomba de calor. Con [[COP]] = 3,5, el sistema alternativo cubre el mismo [[calor útil|Q]] consumiendo el 28% de la electricidad de la resistiva. El ahorro anual de 381 EUR permite recuperar la inversión de instalación en menos de 10 temporadas.\r
\r
Esta comparación ilustra la pregunta física central del leaf: aunque [[rendimiento de conversión|eta]] ≈ 1 parece óptimo, el [[COP]] = 1 convierte cada temporada de uso en un coste irremediable que solo puede evitarse cambiando la tecnología de base. La linealidad perfecta del modelo resistivo ([[E]] = [[P]] · [[t]]) facilita este cálculo comparativo con precisión de auditoría básica.\r
`;export{e as default};
