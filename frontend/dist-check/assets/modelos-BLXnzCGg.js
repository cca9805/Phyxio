const e=`\uFEFF# Modelos del coste eléctrico doméstico\r
\r
El análisis del coste eléctrico puede abordarse con distintos niveles de detalle según el objetivo del estudio. Cada modelo es una simplificación válida dentro de su dominio; elegir el modelo equivocado produce conclusiones incorrectas aunque el cálculo matemático sea correcto.\r
\r
## Modelo ideal\r
\r
El modelo simplificado de la factura eléctrica calcula el [[coste total de la factura|C_total]] como la suma de tres componentes: [[coste de energía|C_energia]] (variable por consumo), [[coste de potencia|C_potencia]] (fijo por contrato) y [[costes adicionales y peajes|C_extra]] (regulatorios). Es el modelo principal de este leaf y permite calcular, comparar y proyectar ahorros con datos de una factura real.\r
\r
## Hipótesis\r
\r
El modelo simplificado de factura eléctrica asume:\r
\r
1. El [[coste total de la factura|C_total]] puede descomponerse en tres términos independientes: [[coste de energía|C_energia]], [[coste de potencia|C_potencia]] y [[costes adicionales y peajes|C_extra]].\r
2. Cada franja tarifaria tiene un [[precio de la energía por franja|precio_i]] fijo durante todo el periodo de facturación.\r
3. La [[potencia contratada|P_contratada]] y la [[tarifa de potencia|tarifa_potencia]] son constantes en el periodo analizado.\r
4. Los [[días del periodo de facturación|dias]] son conocidos y fijos.\r
5. El servicio prestado (temperatura de confort, disponibilidad de equipos) es equivalente entre los escenarios que se comparan.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es aplicable cuando la diferencia de días entre periodos comparados es inferior a 3 días, las condiciones climáticas son equivalentes (diferencia de temperatura media mensual < 5 °C) y el nivel de servicio es idéntico. Para variaciones de tarifa superiores al 5 % entre facturas o diferencias de días mayores, el modelo introduce errores que pueden superar el ahorro estimado.\r
\r
## Modelo estacionario simplificado (modelo principal)\r
\r
El modelo estacionario simplificado calcula el [[coste total de la factura|C_total]] como la suma de sus tres componentes, donde el [[coste de energía|C_energia]] es el producto del consumo por franja por el precio de esa franja.\r
\r
**Hipótesis clave:** precios constantes por franja, periodo homogéneo, sin variación de tarifa entre facturas.\r
\r
**Dominio de validez cuantitativo:** aplicable cuando la diferencia de condiciones entre escenarios comparados es inferior al 10 % en días facturados y el servicio es idéntico. Para diferencias de más de 3 días entre periodos o variaciones de tarifa superiores al 5 %, el modelo introduce errores que pueden superar el ahorro que se pretende medir.\r
\r
**Señales de fallo:** si el [[ahorro porcentual|Ahorro_pct]] calculado es inferior al 3 %, el resultado puede estar dentro del error del modelo y no ser estadísticamente distinguible del ruido de periodos no homogéneos.\r
\r
## Señales de fallo del modelo\r
\r
El modelo simplificado emite señales de fallo observables cuando:\r
\r
- El [[ahorro porcentual|Ahorro_pct]] calculado es inferior al 3 % entre periodos con diferencias climáticas o de días no controladas.\r
- El [[coste total de la factura|C_total]] del nuevo escenario es mayor que el de referencia a pesar de haber reducido el consumo, lo que señala que la variación de [[días del periodo de facturación|dias]] o de [[costes adicionales y peajes|C_extra]] compensa el ahorro en [[coste de energía|C_energia]].\r
- El desglose de componentes revela que el [[coste de potencia|C_potencia]] representa más del 35 % de la factura, lo que indica que la [[potencia contratada|P_contratada]] puede estar sobredimensionada para la demanda real.\r
\r
### Error del modelo: confusión entre consumo y coste\r
\r
El error conceptual más grave en este modelo es tratar el [[coste de energía|C_energia]] como si fuera el [[coste total de la factura|C_total]]. El [[coste de potencia|C_potencia]] y los [[costes adicionales y peajes|C_extra]] representan entre el 25 % y el 45 % de la factura en muchos contratos residenciales. Ignorarlos produce estimaciones de ahorro sistemáticamente optimistas.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido desagrega la [[energía por periodo tarifario|E_i]] hora a hora (o en periodos más cortos) y utiliza precios variables en tiempo real, como el PVPC en España. También modela la variación estacional de la demanda aplicando un factor de corrección climática para comparar periodos con temperaturas distintas.\r
\r
**Cuándo conviene cambiar de modelo:** conviene pasar al modelo extendido cuando el objetivo es optimizar el horario de uso de equipos flexibles (lavadora, lavavajillas, carga de vehículo eléctrico), cuando la diferencia de temperatura media entre periodos comparados supera los 5 °C, o cuando la factura tiene más de dos franjas con precios significativamente distintos. El modelo simplificado no captura los efectos de desplazamiento horario con suficiente precisión para contratos PVPC con alta variabilidad horaria.\r
\r
## Comparación operativa\r
\r
| Característica | Modelo simplificado | Modelo extendido |\r
|---|---|---|\r
| Franjas tarifarias | 2–3 fijas | Horaria o dinámica |\r
| Corrección climática | No | Sí (grados-día) |\r
| Complejidad de datos | Baja | Alta |\r
| Uso recomendado | Estimación inicial, auditoría básica | Optimización de hábitos, contratos PVPC |\r
| Error típico de comparación | 3–8 % | < 2 % |\r
\r
## Condición cuantitativa de cambio de modelo\r
\r
El modelo simplificado pierde fiabilidad cuando la variación del [[coste de potencia|C_potencia]] entre periodos comparados supera el 5 % del [[coste total de la factura|C_total]], o cuando la variación de [[días del periodo de facturación|dias]] entre facturas comparadas supera los 3 días. En ese caso, el [[ahorro porcentual|Ahorro_pct]] calculado tiene una incertidumbre que puede ser comparable o superior al ahorro real estimado.\r
\r
Una regla operativa: si la diferencia de días entre periodos es mayor que 3 o la diferencia de temperatura media mensual es mayor que 5 °C, normalizar primero (por día o por grado-día) antes de aplicar el modelo simplificado.\r
`;export{e as default};
