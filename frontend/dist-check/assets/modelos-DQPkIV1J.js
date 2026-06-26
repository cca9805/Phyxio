const e=`# Modelos de resistencias en paralelo\r
\r
## Modelo ideal\r
El modelo ideal representa cada rama como resistencia lineal conectada entre dos nodos comunes. Bajo este marco, la tensión [[V]] se comparte en todas las ramas y las corrientes de rama se determinan por oposición local. Es el modelo preferido para aprendizaje, diseño preliminar y verificación rápida de consistencia física.\r
\r
Su fortaleza principal es la claridad causal: menor resistencia de rama implica mayor corriente de rama para una tensión común constante. Además, permite identificar con rapidez si [[Req]] y [[It]] siguen tendencias esperadas al añadir o retirar ramas.\r
\r
## Hipótesis\r
El modelo ideal usa hipótesis explícitas. Las ramas son predominantemente resistivas, el régimen es cuasiestacionario, los nodos comunes no acumulan carga neta y las resistencias permanecen en rango aproximadamente lineal para la temperatura de trabajo. También se asume que las conexiones no introducen caídas relevantes en comparación con la tensión de rama.\r
\r
Estas hipótesis no son decorativas. Son condiciones que delimitan cuándo la predicción de reparto de corriente es confiable para decisiones de diseño y protección.\r
\r
## Dominio de validez cuantitativo\r
El modelo ideal suele considerarse operativo cuando se cumplen criterios explícitos. Por ejemplo, error_relativo <= 0.05 entre corrientes medidas y corrientes modeladas en prueba de banco, caida_en_cable / V <= 0.03 en cada rama, y variacion_termica_resistencia <= 0.10 durante régimen estable.\r
\r
También puede expresarse con cotas operativas directas: 0.95 <= I_modelo/I_medido <= 1.05 para cada rama activa y 1e-3 <= R_cable/[[R1]] <= 3e-2 cuando se pretende ignorar cableado sin sesgo dominante.\r
\r
Si alguno de esos criterios queda fuera de rango, la lectura ideal puede seguir siendo útil para tendencia cualitativa, pero no para ajuste fino de protección ni para diagnóstico causal robusto.\r
\r
## Señales de fallo del modelo\r
Una señal típica es que [[It]] medida se mantiene por encima de la predicción en forma sistemática. Otra señal es que el reparto [[I1]], [[I2]], [[I3]] cambia con temperatura sin variación equivalente en [[V]]. Una tercera señal aparece cuando una rama supuestamente secundaria concentra potencia y calentamiento no previstos.\r
\r
Cuando surgen estas señales, insistir en el modelo ideal suele ocultar la causa real del desvío y retrasa decisiones correctivas.\r
\r
## Modelo extendido o alternativo\r
El modelo extendido conserva balance nodal, pero incorpora no idealidades: resistencia de cableado, tolerancias de componente, dependencia térmica y posibles comportamientos no lineales de carga. En aplicaciones de campo también puede incluirse resistencia de contacto y variación de fuente bajo demanda.\r
\r
Este modelo alternativo no reemplaza el ideal por complejidad gratuita. Lo reemplaza cuando conviene cambiar de modelo para mantener coherencia entre predicción, medición y decisión operativa.\r
\r
## Comparación operativa\r
Modelo ideal:\r
- Rápido para evaluar arquitectura y tendencia.\r
- Menor costo de parametrización.\r
\r
Modelo extendido:\r
- Mejor para diagnóstico de desvíos persistentes.\r
- Mejor para protección térmica y confiabilidad.\r
\r
Cuándo conviene cambiar de modelo:\r
Cuando conviene cambiar a modelo extendido es cuando el desvío medido afecta márgenes de seguridad, selección de fuente o priorización de mantenimiento. Si el desvío no altera decisiones operativas, el modelo ideal sigue siendo suficiente para control de tendencia.`;export{e as default};
