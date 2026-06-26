# Ejemplos del coste eléctrico doméstico

# Ejemplo tipo examen


## Enunciado

Una vivienda con tarifa de discriminación horaria en dos periodos (punta y valle) recibe su factura mensual con los siguientes datos conocidos: [[energia_por_periodo_tarifario]] de 120 kWh en hora punta a [[precio_i]] de 0,24 EUR/kWh, y 160 kWh en hora valle a 0,12 EUR/kWh. La [[potencia_contratada]] es 4,6 kW, la [[tarifa_potencia]] es 0,10 EUR/(kW·día), el periodo tiene 30 [[dias]] y los [[costes_adicionales_y_peajes]] son 8,50 EUR.

Se pide: (a) calcular el [[coste_de_energia]], (b) el [[coste_de_potencia]], (c) el [[coste_total_de_la_factura]].

## Datos

- [[energia_por_periodo_tarifario]] punta: 120 kWh a [[precio_i]] = 0,24 EUR/kWh
- [[energia_por_periodo_tarifario]] valle: 160 kWh a [[precio_i]] = 0,12 EUR/kWh
- [[potencia_contratada]] = 4,6 kW
- [[tarifa_potencia]] = 0,10 EUR/(kW·día)
- [[dias]] = 30
- [[costes_adicionales_y_peajes]] = 8,50 EUR

## Definición del sistema

Sistema: vivienda residencial con tarifa de discriminación horaria en dos franjas (punta y valle). Variables de estado: [[energia_por_periodo_tarifario]] por franja, [[potencia_contratada]] y [[dias]].

## Modelo físico

El modelo aplicable es el simplificado de factura con discriminación horaria en dos franjas. El [[coste_total_de_la_factura]] es la suma de tres términos independientes. La [[potencia_contratada]] determina el [[coste_de_potencia]] de forma totalmente independiente del consumo real de [[energia_por_periodo_tarifario]].

## Justificación del modelo

El modelo simplificado es válido porque ambas franjas tienen precios fijos conocidos, el periodo tiene duración definida y el nivel de servicio es constante. No se requiere corrección climática porque el objetivo es calcular la factura, no compararla con otra.

## Resolución simbólica

Primero se calcula el [[coste_de_energia]] sumando el producto de [[energia_por_periodo_tarifario]] por [[precio_i]] en cada franja:

{{f:coste_energia}}

Después el [[coste_de_potencia]] como producto de [[potencia_contratada]] por [[tarifa_potencia]] por [[dias]]:

{{f:coste_potencia}}

Finalmente el [[coste_total_de_la_factura]] sumando los tres componentes:

{{f:coste_total}}

Para comparar este escenario con otro (por ejemplo, tras aplicar medidas de ahorro), se usa el [[ahorro_porcentual]]:

{{f:ahorro_pct}}

## Sustitución numérica

Aplicando con los datos dados del [[coste_de_energia]]:

{{f:coste_energia}}

El resultado numérico es: 120 × 0,24 + 160 × 0,12 = 28,80 + 19,20 = **48,00 EUR**.

Aplicando la fórmula del [[coste_de_potencia]]:

{{f:coste_potencia}}

El resultado numérico es: 4,6 × 0,10 × 30 = **13,80 EUR**.

Aplicando la fórmula del [[coste_total_de_la_factura]]:

{{f:coste_total}}

El resultado numérico es: 48,00 + 13,80 + 8,50 = **70,30 EUR**.

## Validación dimensional

- [[coste_de_energia]]: unidades kWh × EUR/kWh dan EUR. Correcto.
- [[coste_de_potencia]]: unidades kW × EUR/(kW·día) × días dan EUR. Correcto.
- [[coste_total_de_la_factura]]: suma de términos en EUR. Correcto.

## Interpretación física

El resultado físicamente significativo es que el [[coste_de_energia]] representa el 68,3 % del [[coste_total_de_la_factura]] y el [[coste_de_potencia]] el 19,6 %. Esto significa que cualquier medida que reduzca el consumo actúa sobre menos de dos tercios de la factura; el tercio restante es inelástico respecto al uso. Físicamente, el [[coste_de_potencia]] indica que la vivienda paga 13,80 EUR al mes por tener disponible hasta 4,6 kW en cualquier momento, independientemente de si los usa.

Además, el [[precio_i]] de punta (0,24 EUR/kWh) duplica al de valle (0,12 EUR/kWh), lo que implica que cada kWh consumido en punta tiene el doble de impacto económico que el mismo kWh en valle. Desplazar consumo de punta a valle no reduce la [[energia_por_periodo_tarifario]] total, pero sí reduce el [[coste_de_energia]].

# Ejemplo de aplicación real


## Contexto

La misma vivienda del ejemplo anterior decide aplicar dos medidas de ahorro simultáneas: (1) desplazar 50 kWh de punta a valle programando la lavadora y el lavavajillas en horario nocturno, y (2) sustituir una caldera eléctrica antigua por un modelo más eficiente, reduciendo el consumo total en 40 kWh. Se quiere calcular el [[ahorro_porcentual]] y el ahorro absoluto en EUR.

## Estimación física

Orden de magnitud esperado: desplazar 50 kWh de 0,24 EUR/kWh a 0,12 EUR/kWh ahorra 50 × (0,24 − 0,12) = 6,00 EUR. Reducir 40 kWh a precio medio de valle (0,12 EUR/kWh) ahorra otros 4,80 EUR. El ahorro combinado estimado es del orden de 10–11 EUR, es decir, aproximadamente el 14–16 % del [[coste_total_de_la_factura]] original. Dado que la factura original es de 70,30 EUR y que los términos fijos son 22,30 EUR, el ahorro máximo teórico sobre el [[coste_de_energia]] es de 48,00 EUR, y el ahorro combinado de ~10,80 EUR representa el 22,5 % del componente variable.

## Interpretación

El [[ahorro_porcentual]] de 15,4 % significa que las dos medidas combinadas reducen el [[coste_total_de_la_factura]] de 70,30 EUR a 59,50 EUR, un ahorro mensual de 10,80 EUR. La medida de desplazamiento horario aporta 6,00 EUR (el 55,6 % del ahorro total) y la mejora de eficiencia aporta 4,80 EUR (el 44,4 %). Esto implica que, en este caso, el desplazamiento horario es ligeramente más eficaz que la mejora tecnológica, aunque ambas medidas son comparables en impacto.

El [[ahorro_porcentual]] total (15,4 %) es menor que el porcentaje de reducción del consumo total (90 kWh / 280 kWh = 32,1 %) porque los términos fijos del [[coste_total_de_la_factura]] (22,30 EUR, el 31,7 % de la factura original) no se reducen con estas medidas. Este resultado depende directamente de la estructura de precios y de la distribución del consumo entre franjas.

## Validación del orden de magnitud

El orden de magnitud del resultado (70,30 EUR/mes) es coherente con el rango típico de una vivienda de tamaño medio en invierno. Una estimación rápida usando un precio medio de 0,18 EUR/kWh sobre 280 kWh totales daría 50,40 EUR solo en energía, al que se suman ~22 EUR de fijos y extras, llegando a ~72 EUR. La diferencia entre la estimación de precio medio y el cálculo por franjas (70,30 vs 72) es pequeña porque el reparto entre punta y valle es bastante equilibrado en este caso.

---

## Resolución del nuevo escenario

Nuevo [[coste_de_energia]] con las medidas aplicadas:
- Punta: (120 − 50) × 0,24 = 70 × 0,24 = 16,80 EUR
- Valle: (160 + 50 − 40) × 0,12 = 170 × 0,12 = 20,40 EUR
- [[coste_de_energia]] nuevo = 16,80 + 20,40 = 37,20 EUR

Los términos fijos no cambian: [[coste_de_potencia]] = 13,80 EUR, [[costes_adicionales_y_peajes]] = 8,50 EUR.

Nuevo [[coste_total_de_la_factura]] = 37,20 + 13,80 + 8,50 = **59,50 EUR** ([[coste_del_escenario_nuevo]]).

El [[coste_del_escenario_de_referencia]] es el [[coste_total_de_la_factura]] original de 70,30 EUR.

Aplicando la fórmula del [[ahorro_porcentual]]:

{{f:ahorro_pct}}

El resultado es: 100 × (1 − 59,50 / 70,30) = 100 × (1 − 0,846) = **15,4 %**.