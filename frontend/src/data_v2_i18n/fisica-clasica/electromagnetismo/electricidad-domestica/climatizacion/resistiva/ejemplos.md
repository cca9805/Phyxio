# Ejemplo tipo examen

## Enunciado

En una vivienda unifamiliar de construcción tradicional, el sistema de calefacción consiste en dos emisores resistivos: un convector eléctrico de [[potencia_del_emisor]] = 2,0 kW en el salón y un radiador de aceite de [[potencia_del_emisor]] = 1,5 kW en el dormitorio principal. Durante la temporada invernal (150 días), el convector funciona con un [[tiempo_efectivo_de_uso]] de 5 horas diarias y el radiador con un [[tiempo_efectivo_de_uso]] de 4 horas diarias. El [[rendimiento de conversión|eta]] de ambos equipos es de 0,97. El precio de la electricidad es de 0,22 EUR/kWh.

Se pide: (1) calcular el [[consumo_electrico]] total de la temporada, (2) determinar el [[calor_util]] total entregado, (3) calcular el [[coeficiente_de_rendimiento]] del sistema, y (4) estimar el coste total de la temporada.

## Datos

- Convector: [[potencia_del_emisor]] = 2,0 kW; [[tiempo_efectivo_de_uso]] = 5 h/día; temporada = 150 días; [[eta]] = 0,97.
- Radiador: [[potencia_del_emisor]] = 1,5 kW; [[tiempo_efectivo_de_uso]] = 4 h/día; temporada = 150 días; [[eta]] = 0,97.
- Precio electricidad: 0,22 EUR/kWh.

## Definición del sistema

El sistema físico analizado es el conjunto de dos emisores resistivos operando en paralelo en distintas estancias de la vivienda. El sistema es termodinámicamente abierto respecto a la vivienda (entrega calor al recinto) pero puede analizarse como cerrado en cuanto al balance energético eléctrico: toda la energía que entra en forma de electricidad se contabiliza. Las pérdidas de distribución son nulas (no hay red de tuberías); las únicas pérdidas son las internas de cada emisor, capturadas por [[rendimiento de conversión|eta]].

## Modelo físico

Se utiliza el modelo estacionario lineal de la calefacción resistiva. Las hipótesis son:
- La [[potencia_del_emisor]] de cada equipo es constante durante todo el periodo activo.
- El [[tiempo_efectivo_de_uso]] representa las horas reales con la resistencia activa, correctamente estimadas.
- El [[rendimiento de conversión|eta]] de cada equipo es constante e independiente de la temperatura.
- Los ciclos del termostato están promediados en el [[tiempo_efectivo_de_uso]] diario.

El modelo físico considera magnitudes fundamentales del sistema como [[calor_util]], [[coeficiente_de_rendimiento]], [[consumo_electrico]].

## Justificación del modelo

El modelo lineal resistivo es aplicable porque el [[tiempo_efectivo_de_uso]] está definido como las horas con resistencia activa (no horas de conexión), lo que elimina el principal factor de error. Con una temporada de 150 días y condiciones climáticas estables, el promedio estacionario es representativo con un margen de error esperado menor del 10%. Este modelo es el adecuado para una estimación de planificación o auditoría básica.

## Resolución simbólica

El [[consumo_electrico]] de cada emisor se calcula con la fórmula principal:

{{f:energia}}

Para el convector: [[consumo_electrico]] = 2,0 kW × 5 h/día × 150 días = 1500 kWh.

Para el radiador: [[consumo_electrico]] = 1,5 kW × 4 h/día × 150 días = 900 kWh.

[[consumo_electrico]] total de la temporada: 1500 + 900 = 2400 kWh.

El [[calor_util]] total se obtiene aplicando el [[rendimiento de conversión|eta]]:

{{f:calor_util}}

[[calor_util]] total = 0,97 × 2400 = 2328 kWh térmicos.

El [[coeficiente_de_rendimiento]] del sistema es:

{{f:cop_resistiva}}

[[coeficiente_de_rendimiento]] = [[calor_util]] / [[consumo_electrico]] = 2328 / 2400 = 0,97 ≈ 1, confirmando la naturaleza resistiva del sistema.

## Sustitución numérica

- [[consumo_electrico]] convector: 2,0 × 5 × 150 = **1500 kWh**
- [[consumo_electrico]] radiador: 1,5 × 4 × 150 = **900 kWh**
- [[consumo_electrico]] total: 1500 + 900 = **2400 kWh**
- [[calor_util]] total: 0,97 × 2400 = **2328 kWh**
- [[coeficiente_de_rendimiento]]: 2328 / 2400 = **0,97**
- Coste total: 2400 × 0,22 = **528 EUR**

## Validación dimensional

- Consumo [[consumo_electrico]]: kW × h → kWh ✓
- Calor útil [[calor_util]]: adimensional × kWh → kWh ✓
- Rendimiento [[coeficiente_de_rendimiento]]: kWh / kWh → adimensional ✓
- Coste económico: kWh × EUR/kWh → EUR ✓

## Interpretación física

El resultado físicamente relevante es que el [[coeficiente_de_rendimiento]] = 0,97 indica que el sistema opera dentro del régimen esperado: prácticamente toda la energía eléctrica consumida (2400 kWh) se convierte en [[calor_util]] (2328 kWh). Esto significa que no hay ganancia energética posible más allá de lo que entra.

El valor del [[consumo_electrico]] depende directamente del producto [[potencia_del_emisor]] × [[tiempo_efectivo_de_uso]]; aumenta linealmente con cada kW de potencia y con cada hora de uso. Esto implica que la única forma de reducirlo, manteniendo el mismo [[calor_util]], es cambiar de tecnología. Físicamente, el [[coeficiente_de_rendimiento]] = 1 de la resistiva es el límite inferior irreducible de cualquier sistema de calefacción eléctrica directa. Comparado con [[coeficiente_de_rendimiento]] = 3,5 de una bomba de calor, el ahorro potencial es de 2400 − 665 = **1735 kWh por temporada (381 EUR)**.

# Ejemplo de aplicación real


## Contexto

Una familia evalúa si instalar una bomba de calor en su vivienda de 80 m² para sustituir los dos emisores resistivos del ejemplo anterior. La vivienda consume 2400 kWh eléctricos por temporada para calefacción. El coste instalado de la bomba de calor es de 3500 EUR; se estima un [[coeficiente_de_rendimiento]] estacional de 3,5 para el clima de la localidad. El precio de la electricidad es 0,22 EUR/kWh.

## Estimación física

Escala de magnitud: una vivienda de 80 m² en clima templado tiene una demanda térmica del orden de 2000–3000 kWh/temporada. El valor calculado (2400 kWh) es coherente con ese orden de magnitud estimado para una vivienda media.

Aproximación cuantitativa del contraste:
- [[consumo_electrico]] total temporada resistiva: 2400 kWh.
- [[calor_util]] total necesario: 0,97 × 2400 = 2328 kWh.
- [[consumo_electrico]] equivalente con bomba de calor ([[coeficiente_de_rendimiento]] = 3,5): 2328 / 3,5 ≈ 665 kWh.
- Ahorro anual en energía: 2400 − 665 = 1735 kWh (del orden del 72%).
- Ahorro económico anual: 1735 × 0,22 ≈ 381 EUR/temporada.
- Periodo de retorno simple: 3500 / 381 ≈ 9,2 temporadas.

## Interpretación

El [[coeficiente_de_rendimiento]] = 1 de la resistiva es exactamente el denominador del argumento económico a favor de la bomba de calor. Con [[coeficiente_de_rendimiento]] = 3,5, el sistema alternativo cubre el mismo [[calor_util]] consumiendo el 28% de la electricidad de la resistiva. El ahorro anual de 381 EUR permite recuperar la inversión de instalación en menos de 10 temporadas.

Esta comparación ilustra la pregunta física central del leaf: aunque [[rendimiento de conversión|eta]] ≈ 1 parece óptimo, el [[coeficiente_de_rendimiento]] = 1 convierte cada temporada de uso en un coste irremediable que solo puede evitarse cambiando la tecnología de base. La linealidad perfecta del modelo resistivo ([[consumo_electrico]] = [[potencia_del_emisor]] · [[tiempo_efectivo_de_uso]]) facilita este cálculo comparativo con precisión de auditoría básica.