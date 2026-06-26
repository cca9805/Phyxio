# Modelos del coste eléctrico doméstico

El análisis del coste eléctrico puede abordarse con distintos niveles de detalle según el objetivo del estudio. Cada modelo es una simplificación válida dentro de su dominio; elegir el modelo equivocado produce conclusiones incorrectas aunque el cálculo matemático sea correcto.

## Modelo ideal

El modelo simplificado de la factura eléctrica calcula el [[coste_total_de_la_factura]] como la suma de tres componentes: [[coste_de_energia]] (variable por consumo), [[coste_de_potencia]] (fijo por contrato) y [[costes_adicionales_y_peajes]] (regulatorios). Es el modelo principal de este leaf y permite calcular, comparar y proyectar ahorros con datos de una factura real.

## Hipótesis

El modelo simplificado de factura eléctrica asume:

1. El [[coste_total_de_la_factura]] puede descomponerse en tres términos independientes: [[coste_de_energia]], [[coste_de_potencia]] y [[costes_adicionales_y_peajes]].
2. Cada franja tarifaria tiene un [[precio de la energía por franja|precio_i]] fijo durante todo el periodo de facturación.
3. La [[potencia_contratada]] y la [[tarifa de potencia|tarifa_potencia]] son constantes en el periodo analizado.
4. Los [[días del periodo de facturación|dias]] son conocidos y fijos.
5. El servicio prestado (temperatura de confort, disponibilidad de equipos) es equivalente entre los escenarios que se comparan.

## Dominio de validez cuantitativo

El modelo es aplicable cuando la diferencia de días entre periodos comparados es inferior a 3 días, las condiciones climáticas son equivalentes (diferencia de temperatura media mensual < 5 °C) y el nivel de servicio es idéntico. Para variaciones de tarifa superiores al 5 % entre facturas o diferencias de días mayores, el modelo introduce errores que pueden superar el ahorro estimado.

## Señales de fallo del modelo

El modelo simplificado emite señales de fallo observables cuando:

- El [[ahorro_porcentual]] calculado es inferior al 3 % entre periodos con diferencias climáticas o de días no controladas.
- El [[coste_total_de_la_factura]] del nuevo escenario es mayor que el de referencia a pesar de haber reducido el consumo, lo que señala que la variación de [[días del periodo de facturación|dias]] o de [[costes_adicionales_y_peajes]] compensa el ahorro en [[coste_de_energia]].
- El desglose de componentes revela que el [[coste_de_potencia]] representa más del 35 % de la factura, lo que indica que la [[potencia_contratada]] puede estar sobredimensionada para la demanda real.

### Error del modelo: confusión entre consumo y coste

El error conceptual más grave en este modelo es tratar el [[coste_de_energia]] como si fuera el [[coste_total_de_la_factura]]. El [[coste_de_potencia]] y los [[costes_adicionales_y_peajes]] representan entre el 25 % y el 45 % de la factura en muchos contratos residenciales. Ignorarlos produce estimaciones de ahorro sistemáticamente optimistas.

## Modelo extendido o alternativo

El modelo extendido desagrega la [[energia_por_periodo_tarifario]] hora a hora (o en periodos más cortos) y utiliza precios variables en tiempo real, como el PVPC en España. También modela la variación estacional de la demanda aplicando un factor de corrección climática para comparar periodos con temperaturas distintas.

**Cuándo conviene cambiar de modelo:** conviene pasar al modelo extendido cuando el objetivo es optimizar el horario de uso de equipos flexibles (lavadora, lavavajillas, carga de vehículo eléctrico), cuando la diferencia de temperatura media entre periodos comparados supera los 5 °C, o cuando la factura tiene más de dos franjas con precios significativamente distintos. El modelo simplificado no captura los efectos de desplazamiento horario con suficiente precisión para contratos PVPC con alta variabilidad horaria.

## Comparación operativa

| Característica | Modelo simplificado | Modelo extendido |
|---|---|---|
| Franjas tarifarias | 2–3 fijas | Horaria o dinámica |
| Corrección climática | No | Sí (grados-día) |
| Complejidad de datos | Baja | Alta |
| Uso recomendado | Estimación inicial, auditoría básica | Optimización de hábitos, contratos PVPC |
| Error típico de comparación | 3–8 % | < 2 % |

## Modelo estacionario simplificado (modelo principal)

El modelo estacionario simplificado calcula el [[coste_total_de_la_factura]] como la suma de sus tres componentes, donde el [[coste_de_energia]] es el producto del consumo por franja por el precio de esa franja.

**Hipótesis clave:** precios constantes por franja, periodo homogéneo, sin variación de tarifa entre facturas.

**Dominio de validez cuantitativo:** aplicable cuando la diferencia de condiciones entre escenarios comparados es inferior al 10 % en días facturados y el servicio es idéntico. Para diferencias de más de 3 días entre periodos o variaciones de tarifa superiores al 5 %, el modelo introduce errores que pueden superar el ahorro que se pretende medir.

**Señales de fallo:** si el [[ahorro_porcentual]] calculado es inferior al 3 %, el resultado puede estar dentro del error del modelo y no ser estadísticamente distinguible del ruido de periodos no homogéneos.

## Condición cuantitativa de cambio de modelo

El modelo simplificado pierde fiabilidad cuando la variación del [[coste_de_potencia]] entre periodos comparados supera el 5 % del [[coste_total_de_la_factura]], o cuando la variación de [[días del periodo de facturación|dias]] entre facturas comparadas supera los 3 días. En ese caso, el [[ahorro_porcentual]] calculado tiene una incertidumbre que puede ser comparable o superior al ahorro real estimado.

Una regla operativa: si la diferencia de días entre periodos es mayor que 3 o la diferencia de temperatura media mensual es mayor que 5 °C, normalizar primero (por día o por grado-día) antes de aplicar el modelo simplificado.