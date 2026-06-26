const e=`\uFEFF# Aplicaciones del análisis del coste eléctrico\r
\r
## 1. Auditoría doméstica de la factura eléctrica\r
\r
Variable dominante: [[coste total de la factura|C_total]]\r
\r
La auditoría doméstica consiste en descomponer el [[coste total de la factura|C_total]] en sus tres componentes —[[coste de energía|C_energia]], [[coste de potencia|C_potencia]] y [[costes adicionales y peajes|C_extra]]— y asignar la [[energía por periodo tarifario|E_i]] de cada franja a las familias de carga que la generan: climatización, agua caliente sanitaria, cocina, lavado y electrodomésticos de standby. Este análisis revela en qué horas y con qué equipos se concentra el [[coste de energía|C_energia]] y qué parte del [[coste total de la factura|C_total]] es incontrolable por el usuario.\r
\r
Límite de validez: La auditoría es válida para contratos con estructura de precios conocida y periodos comparables. Si el contrato cambia de estructura tarifaria entre facturas analizadas, el desglose histórico pierde comparabilidad directa.\r
\r
Contexto real: En España, los contadores inteligentes instalados a partir de 2010 permiten descargar el perfil horario de consumo desde el portal de la distribuidora. Con ese perfil y los precios del PVPC, es posible asignar cada kWh a su franja y calcular el [[coste de energía|C_energia]] con resolución horaria real.\r
\r
---\r
\r
## 2. Optimización del horario de uso de cargas flexibles\r
\r
Variable dominante: [[energía por periodo tarifario|E_i]]\r
\r
Las cargas flexibles son equipos cuyo momento de uso puede cambiarse sin reducir el servicio: lavadora, lavavajillas, cargador de vehículo eléctrico, bombas de agua y programadores de calefacción. Desplazar [[energía por periodo tarifario|E_i]] de la franja de mayor [[precio de la energía por franja|precio_i]] a la franja de menor precio reduce el [[coste de energía|C_energia]] sin reducir el consumo total en kWh. El ahorro máximo teórico de desplazar una cantidad de energía de punta a valle es esa cantidad multiplicada por la diferencia de precios entre franjas.\r
\r
Límite de validez: Solo aplicable en contratos con discriminación horaria real. En tarifa plana, el [[precio de la energía por franja|precio_i]] es idéntico en todas las franjas y el desplazamiento no produce ahorro en [[coste de energía|C_energia]]. La medida es más eficaz cuanto mayor es la diferencia entre precios de franja.\r
\r
Contexto real: Con la tarifa PVPC en España, la diferencia entre el precio de punta y valle puede superar los 0,15 EUR/kWh en días de alta demanda. Una lavadora de 1,5 kWh desplazada de punta a valle ahorra entre 0,15 y 0,23 EUR por ciclo, lo que representa entre 5 y 8 EUR mensuales si se usa diariamente.\r
\r
---\r
\r
## 3. Evaluación del retorno de inversiones en eficiencia energética\r
\r
Variable dominante: [[ahorro porcentual|Ahorro_pct]]\r
\r
Antes de invertir en mejoras tecnológicas (bomba de calor, aislamiento, electrodomésticos de clase A+++), es necesario calcular el [[ahorro porcentual|Ahorro_pct]] esperado sobre el [[coste total de la factura|C_total]] real, no solo sobre el consumo. La inversión es rentable si el [[coste del escenario de referencia|C_base]] multiplicado por el [[ahorro porcentual|Ahorro_pct]] anual produce un ahorro absoluto que amortiza la inversión en un número de años aceptable. El período de retorno simple es la inversión dividida por el ahorro absoluto anual.\r
\r
Límite de validez: El cálculo de retorno asume que los precios de la energía son estables y que el nivel de servicio es idéntico antes y después de la mejora. Si los precios suben o si la mejora permite elevar el nivel de confort (más horas de calefacción), el ahorro real puede diferir significativamente del estimado.\r
\r
Contexto real: Una bomba de calor que reemplaza calefacción eléctrica directa puede reducir el [[coste de energía|C_energia]] de climatización en un 60–70 %, pero el [[ahorro porcentual|Ahorro_pct]] sobre el [[coste total de la factura|C_total]] total depende de cuánto pesa la climatización en la factura. Si la climatización representa el 40 % del [[coste de energía|C_energia]] y este a su vez es el 65 % de la factura, el ahorro sobre la factura total es del orden del 40 % × 65 % × 65 % ≈ 17 %, no del 65 %.\r
\r
---\r
\r
## 4. Ajuste de la potencia contratada\r
\r
Variable dominante: [[potencia contratada|P_contratada]]\r
\r
La [[potencia contratada|P_contratada]] determina directamente el [[coste de potencia|C_potencia]] a través de la [[tarifa de potencia|tarifa_potencia]] y los [[días del periodo de facturación|dias]]. Ajustarla a la baja es una medida de reducción del [[coste total de la factura|C_total]] que no requiere cambiar los hábitos de consumo. Sin embargo, requiere verificar que los picos de demanda real del hogar no superen la nueva [[potencia contratada|P_contratada]]; si lo hacen, el ICP (interruptor de control de potencia) corta el suministro.\r
\r
Límite de validez: La medida solo es segura si el pico de demanda simultánea real (medido o estimado con margen) es inferior a la nueva [[potencia contratada|P_contratada]]. Si la vivienda tiene cocina eléctrica, climatización y lavadora que pueden funcionar simultáneamente, la suma de potencias puede superar fácilmente los 7–9 kW y una reducción a 4,6 kW causaría cortes frecuentes.\r
\r
Contexto real: En España, las potencias contratadas más comunes en viviendas son 3,45 kW, 4,6 kW, 5,75 kW y 6,9 kW. Bajar de 6,9 kW a 4,6 kW supone un ahorro mensual de [[coste de potencia|C_potencia]] de aproximadamente (6,9 − 4,6) × 0,11 × 30 = 7,59 EUR, que es significativo si los picos reales lo permiten.\r
\r
---\r
\r
## 5. Comparación y negociación del tipo de contrato eléctrico\r
\r
Variable dominante: [[precio de la energía por franja|precio_i]]\r
\r
El análisis del [[coste de energía|C_energia]] real permite comparar si un contrato de mercado libre con precio fijo es más económico que el PVPC para el perfil de consumo específico del hogar. Si el hogar concentra más del 60 % de su [[energía por periodo tarifario|E_i]] en franja valle y el precio libre es 0,16 EUR/kWh plano, puede ser más económico que el PVPC con punta a 0,24 EUR/kWh aunque el valle esté a 0,10 EUR/kWh, dependiendo de la distribución exacta.\r
\r
Límite de validez: La comparación es válida solo si el período de análisis es representativo del perfil anual completo. Un perfil de verano sin climatización no es representativo de un hogar con alta demanda invernal. La comparación debe hacerse con al menos un año completo de datos o con perfiles equivalentes por estación.\r
\r
Contexto real: En periodos de alta variabilidad del PVPC (crisis energéticas, olas de frío), los precios de punta pueden superar los 0,40 EUR/kWh durante varios días. Para hogares con perfil de consumo diurno elevado, un contrato de precio fijo puede ofrecer una reducción del [[coste de energía|C_energia]] y, por tanto, del [[coste total de la factura|C_total]], especialmente en los meses de mayor incertidumbre.\r
\r
---\r
\r
## Consideraciones transversales\r
\r
El análisis del [[coste total de la factura|C_total]] es transversal a todas las decisiones de inversión y hábito en una vivienda. La variable pivote es el [[ahorro porcentual|Ahorro_pct]], pero su validez depende siempre de la calidad del [[coste del escenario de referencia|C_base]]. Sin un baseline fiable, comparable y documentado, ninguna de las cinco aplicaciones anteriores produce conclusiones verificables.\r
\r
El límite epistemológico común a todas las aplicaciones es la imposibilidad de controlar todas las variables simultáneamente en un entorno doméstico real. La solución práctica es repetir el análisis en varios periodos equivalentes y buscar consistencia estadística, no certeza en un solo dato.\r
`;export{e as default};
