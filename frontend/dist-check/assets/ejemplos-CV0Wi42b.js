const e=`\uFEFF# Ejemplos del coste eléctrico doméstico\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una vivienda con tarifa de discriminación horaria en dos periodos (punta y valle) recibe su factura mensual con los siguientes datos conocidos: [[E_i]] de 120 kWh en hora punta a [[precio_i]] de 0,24 EUR/kWh, y 160 kWh en hora valle a 0,12 EUR/kWh. La [[P_contratada]] es 4,6 kW, la [[tarifa_potencia]] es 0,10 EUR/(kW·día), el periodo tiene 30 [[dias]] y los [[C_extra]] son 8,50 EUR.\r
\r
Se pide: (a) calcular el [[C_energia]], (b) el [[C_potencia]], (c) el [[C_total]].\r
\r
## Datos\r
\r
- [[E_i]] punta: 120 kWh a [[precio_i]] = 0,24 EUR/kWh\r
- [[E_i]] valle: 160 kWh a [[precio_i]] = 0,12 EUR/kWh\r
- [[P_contratada]] = 4,6 kW\r
- [[tarifa_potencia]] = 0,10 EUR/(kW·día)\r
- [[dias]] = 30\r
- [[C_extra]] = 8,50 EUR\r
\r
## Definición del sistema\r
\r
Sistema: vivienda residencial con tarifa de discriminación horaria en dos franjas (punta y valle). Variables de estado: [[E_i]] por franja, [[P_contratada]] y [[dias]].\r
\r
## Modelo físico\r
\r
El modelo aplicable es el simplificado de factura con discriminación horaria en dos franjas. El [[C_total]] es la suma de tres términos independientes. La [[P_contratada]] determina el [[C_potencia]] de forma totalmente independiente del consumo real de [[E_i]].\r
\r
## Justificación del modelo\r
\r
El modelo simplificado es válido porque ambas franjas tienen precios fijos conocidos, el periodo tiene duración definida y el nivel de servicio es constante. No se requiere corrección climática porque el objetivo es calcular la factura, no compararla con otra.\r
\r
## Resolución simbólica\r
\r
Primero se calcula el [[C_energia]] sumando el producto de [[E_i]] por [[precio_i]] en cada franja:\r
\r
{{f:coste_energia}}\r
\r
Después el [[C_potencia]] como producto de [[P_contratada]] por [[tarifa_potencia]] por [[dias]]:\r
\r
{{f:coste_potencia}}\r
\r
Finalmente el [[C_total]] sumando los tres componentes:\r
\r
{{f:coste_total}}\r
\r
Para comparar este escenario con otro (por ejemplo, tras aplicar medidas de ahorro), se usa el [[Ahorro_pct]]:\r
\r
{{f:ahorro_pct}}\r
\r
## Sustitución numérica\r
\r
Aplicando con los datos dados del [[C_energia]]:\r
\r
{{f:coste_energia}}\r
\r
El resultado numérico es: 120 × 0,24 + 160 × 0,12 = 28,80 + 19,20 = **48,00 EUR**.\r
\r
Aplicando la fórmula del [[C_potencia]]:\r
\r
{{f:coste_potencia}}\r
\r
El resultado numérico es: 4,6 × 0,10 × 30 = **13,80 EUR**.\r
\r
Aplicando la fórmula del [[C_total]]:\r
\r
{{f:coste_total}}\r
\r
El resultado numérico es: 48,00 + 13,80 + 8,50 = **70,30 EUR**.\r
\r
## Validación dimensional\r
\r
- [[C_energia]]: unidades kWh × EUR/kWh dan EUR. Correcto.\r
- [[C_potencia]]: unidades kW × EUR/(kW·día) × días dan EUR. Correcto.\r
- [[C_total]]: suma de términos en EUR. Correcto.\r
\r
## Interpretación física\r
\r
El resultado físicamente significativo es que el [[C_energia]] representa el 68,3 % del [[C_total]] y el [[C_potencia]] el 19,6 %. Esto significa que cualquier medida que reduzca el consumo actúa sobre menos de dos tercios de la factura; el tercio restante es inelástico respecto al uso. Físicamente, el [[C_potencia]] indica que la vivienda paga 13,80 EUR al mes por tener disponible hasta 4,6 kW en cualquier momento, independientemente de si los usa.\r
\r
Además, el [[precio_i]] de punta (0,24 EUR/kWh) duplica al de valle (0,12 EUR/kWh), lo que implica que cada kWh consumido en punta tiene el doble de impacto económico que el mismo kWh en valle. Desplazar consumo de punta a valle no reduce la [[E_i]] total, pero sí reduce el [[C_energia]].\r
\r
## Validación del orden de magnitud\r
\r
El orden de magnitud del resultado (70,30 EUR/mes) es coherente con el rango típico de una vivienda de tamaño medio en invierno. Una estimación rápida usando un precio medio de 0,18 EUR/kWh sobre 280 kWh totales daría 50,40 EUR solo en energía, al que se suman ~22 EUR de fijos y extras, llegando a ~72 EUR. La diferencia entre la estimación de precio medio y el cálculo por franjas (70,30 vs 72) es pequeña porque el reparto entre punta y valle es bastante equilibrado en este caso.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
La misma vivienda del ejemplo anterior decide aplicar dos medidas de ahorro simultáneas: (1) desplazar 50 kWh de punta a valle programando la lavadora y el lavavajillas en horario nocturno, y (2) sustituir una caldera eléctrica antigua por un modelo más eficiente, reduciendo el consumo total en 40 kWh. Se quiere calcular el [[Ahorro_pct]] y el ahorro absoluto en EUR.\r
\r
## Estimación física\r
\r
Orden de magnitud esperado: desplazar 50 kWh de 0,24 EUR/kWh a 0,12 EUR/kWh ahorra 50 × (0,24 − 0,12) = 6,00 EUR. Reducir 40 kWh a precio medio de valle (0,12 EUR/kWh) ahorra otros 4,80 EUR. El ahorro combinado estimado es del orden de 10–11 EUR, es decir, aproximadamente el 14–16 % del [[C_total]] original. Dado que la factura original es de 70,30 EUR y que los términos fijos son 22,30 EUR, el ahorro máximo teórico sobre el [[C_energia]] es de 48,00 EUR, y el ahorro combinado de ~10,80 EUR representa el 22,5 % del componente variable.\r
\r
## Resolución del nuevo escenario\r
\r
Nuevo [[C_energia]] con las medidas aplicadas:\r
- Punta: (120 − 50) × 0,24 = 70 × 0,24 = 16,80 EUR\r
- Valle: (160 + 50 − 40) × 0,12 = 170 × 0,12 = 20,40 EUR\r
- [[C_energia]] nuevo = 16,80 + 20,40 = 37,20 EUR\r
\r
Los términos fijos no cambian: [[C_potencia]] = 13,80 EUR, [[C_extra]] = 8,50 EUR.\r
\r
Nuevo [[C_total]] = 37,20 + 13,80 + 8,50 = **59,50 EUR** ([[C_nuevo]]).\r
\r
El [[C_base]] es el [[C_total]] original de 70,30 EUR.\r
\r
Aplicando la fórmula del [[Ahorro_pct]]:\r
\r
{{f:ahorro_pct}}\r
\r
El resultado es: 100 × (1 − 59,50 / 70,30) = 100 × (1 − 0,846) = **15,4 %**.\r
\r
## Interpretación\r
\r
El [[Ahorro_pct]] de 15,4 % significa que las dos medidas combinadas reducen el [[C_total]] de 70,30 EUR a 59,50 EUR, un ahorro mensual de 10,80 EUR. La medida de desplazamiento horario aporta 6,00 EUR (el 55,6 % del ahorro total) y la mejora de eficiencia aporta 4,80 EUR (el 44,4 %). Esto implica que, en este caso, el desplazamiento horario es ligeramente más eficaz que la mejora tecnológica, aunque ambas medidas son comparables en impacto.\r
\r
El [[Ahorro_pct]] total (15,4 %) es menor que el porcentaje de reducción del consumo total (90 kWh / 280 kWh = 32,1 %) porque los términos fijos del [[C_total]] (22,30 EUR, el 31,7 % de la factura original) no se reducen con estas medidas. Este resultado depende directamente de la estructura de precios y de la distribución del consumo entre franjas.\r
`;export{e as default};
