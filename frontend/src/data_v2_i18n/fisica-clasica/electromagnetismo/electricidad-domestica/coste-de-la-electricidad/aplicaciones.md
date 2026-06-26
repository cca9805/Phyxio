# Aplicaciones

﻿# Aplicaciones del análisis del coste eléctrico


## 1. Auditoría doméstica de la factura eléctrica

Variable dominante: [[coste_total_de_la_factura]]

La auditoría doméstica consiste en descomponer el [[coste_total_de_la_factura]] en sus tres componentes —[[coste_de_energia]], [[coste_de_potencia]] y [[costes_adicionales_y_peajes]]— y asignar la [[energia_por_periodo_tarifario]] de cada franja a las familias de carga que la generan: climatización, agua caliente sanitaria, cocina, lavado y electrodomésticos de standby. Este análisis revela en qué horas y con qué equipos se concentra el [[coste_de_energia]] y qué parte del [[coste_total_de_la_factura]] es incontrolable por el usuario.

Límite de validez: La auditoría es válida para contratos con estructura de precios conocida y periodos comparables. Si el contrato cambia de estructura tarifaria entre facturas analizadas, el desglose histórico pierde comparabilidad directa.

Contexto real: En España, los contadores inteligentes instalados a partir de 2010 permiten descargar el perfil horario de consumo desde el portal de la distribuidora. Con ese perfil y los precios del PVPC, es posible asignar cada kWh a su franja y calcular el [[coste_de_energia]] con resolución horaria real.

---

## 2. Optimización del horario de uso de cargas flexibles

Variable dominante: [[energia_por_periodo_tarifario]]

Las cargas flexibles son equipos cuyo momento de uso puede cambiarse sin reducir el servicio: lavadora, lavavajillas, cargador de vehículo eléctrico, bombas de agua y programadores de calefacción. Desplazar [[energia_por_periodo_tarifario]] de la franja de mayor [[precio de la energía por franja|precio_i]] a la franja de menor precio reduce el [[coste_de_energia]] sin reducir el consumo total en kWh. El ahorro máximo teórico de desplazar una cantidad de energía de punta a valle es esa cantidad multiplicada por la diferencia de precios entre franjas.

Límite de validez: Solo aplicable en contratos con discriminación horaria real. En tarifa plana, el [[precio de la energía por franja|precio_i]] es idéntico en todas las franjas y el desplazamiento no produce ahorro en [[coste_de_energia]]. La medida es más eficaz cuanto mayor es la diferencia entre precios de franja.

Contexto real: Con la tarifa PVPC en España, la diferencia entre el precio de punta y valle puede superar los 0,15 EUR/kWh en días de alta demanda. Una lavadora de 1,5 kWh desplazada de punta a valle ahorra entre 0,15 y 0,23 EUR por ciclo, lo que representa entre 5 y 8 EUR mensuales si se usa diariamente.

---

## 3. Evaluación del retorno de inversiones en eficiencia energética

Variable dominante: [[ahorro_porcentual]]

Antes de invertir en mejoras tecnológicas (bomba de calor, aislamiento, electrodomésticos de clase A+++), es necesario calcular el [[ahorro_porcentual]] esperado sobre el [[coste_total_de_la_factura]] real, no solo sobre el consumo. La inversión es rentable si el [[coste_del_escenario_de_referencia]] multiplicado por el [[ahorro_porcentual]] anual produce un ahorro absoluto que amortiza la inversión en un número de años aceptable. El período de retorno simple es la inversión dividida por el ahorro absoluto anual.

Límite de validez: El cálculo de retorno asume que los precios de la energía son estables y que el nivel de servicio es idéntico antes y después de la mejora. Si los precios suben o si la mejora permite elevar el nivel de confort (más horas de calefacción), el ahorro real puede diferir significativamente del estimado.

Contexto real: Una bomba de calor que reemplaza calefacción eléctrica directa puede reducir el [[coste_de_energia]] de climatización en un 60–70 %, pero el [[ahorro_porcentual]] sobre el [[coste_total_de_la_factura]] total depende de cuánto pesa la climatización en la factura. Si la climatización representa el 40 % del [[coste_de_energia]] y este a su vez es el 65 % de la factura, el ahorro sobre la factura total es del orden del 40 % × 65 % × 65 % ≈ 17 %, no del 65 %.

---

## 4. Ajuste de la potencia contratada

Variable dominante: [[potencia_contratada]]

La [[potencia_contratada]] determina directamente el [[coste_de_potencia]] a través de la [[tarifa de potencia|tarifa_potencia]] y los [[días del periodo de facturación|dias]]. Ajustarla a la baja es una medida de reducción del [[coste_total_de_la_factura]] que no requiere cambiar los hábitos de consumo. Sin embargo, requiere verificar que los picos de demanda real del hogar no superen la nueva [[potencia_contratada]]; si lo hacen, el ICP (interruptor de control de potencia) corta el suministro.

Límite de validez: La medida solo es segura si el pico de demanda simultánea real (medido o estimado con margen) es inferior a la nueva [[potencia_contratada]]. Si la vivienda tiene cocina eléctrica, climatización y lavadora que pueden funcionar simultáneamente, la suma de potencias puede superar fácilmente los 7–9 kW y una reducción a 4,6 kW causaría cortes frecuentes.

Contexto real: En España, las potencias contratadas más comunes en viviendas son 3,45 kW, 4,6 kW, 5,75 kW y 6,9 kW. Bajar de 6,9 kW a 4,6 kW supone un ahorro mensual de [[coste_de_potencia]] de aproximadamente (6,9 − 4,6) × 0,11 × 30 = 7,59 EUR, que es significativo si los picos reales lo permiten.

---

## 5. Comparación y negociación del tipo de contrato eléctrico

Variable dominante: [[precio de la energía por franja|precio_i]]

El análisis del [[coste_de_energia]] real permite comparar si un contrato de mercado libre con precio fijo es más económico que el PVPC para el perfil de consumo específico del hogar. Si el hogar concentra más del 60 % de su [[energia_por_periodo_tarifario]] en franja valle y el precio libre es 0,16 EUR/kWh plano, puede ser más económico que el PVPC con punta a 0,24 EUR/kWh aunque el valle esté a 0,10 EUR/kWh, dependiendo de la distribución exacta.

Límite de validez: La comparación es válida solo si el período de análisis es representativo del perfil anual completo. Un perfil de verano sin climatización no es representativo de un hogar con alta demanda invernal. La comparación debe hacerse con al menos un año completo de datos o con perfiles equivalentes por estación.

Contexto real: En periodos de alta variabilidad del PVPC (crisis energéticas, olas de frío), los precios de punta pueden superar los 0,40 EUR/kWh durante varios días. Para hogares con perfil de consumo diurno elevado, un contrato de precio fijo puede ofrecer una reducción del [[coste_de_energia]] y, por tanto, del [[coste_total_de_la_factura]], especialmente en los meses de mayor incertidumbre.

---

## Consideraciones transversales

El análisis del [[coste_total_de_la_factura]] es transversal a todas las decisiones de inversión y hábito en una vivienda. La variable pivote es el [[ahorro_porcentual]], pero su validez depende siempre de la calidad del [[coste_del_escenario_de_referencia]]. Sin un baseline fiable, comparable y documentado, ninguna de las cinco aplicaciones anteriores produce conclusiones verificables.

El límite epistemológico común a todas las aplicaciones es la imposibilidad de controlar todas las variables simultáneamente en un entorno doméstico real. La solución práctica es repetir el análisis en varios periodos equivalentes y buscar consistencia estadística, no certeza en un solo dato.