const e=`# Aplicaciones de enchufes y tomas\r
\r
## 1. Dimensionamiento de regletas en zonas de trabajo\r
\r
En puestos de trabajo con múltiples equipos informáticos, la evaluación de [[P_tot]] e [[I_tot]] determina la capacidad mínima de la regleta necesaria. El protocolo consiste en listar todos los equipos conectados, sumar sus potencias nominales para obtener [[P_tot]], calcular [[I_tot]] y verificar que [[margen_uso]] no supera 0,8 en uso continuo.\r
\r
Para un puesto típico con ordenador de 400 W, dos monitores de 80 W, impresora de 150 W y cargadores de 30 W: [[P_tot]] = 740 W, [[I_tot]] = 3,2 A, [[margen_uso]] = 0,20 con regleta de [[I_max]] = 16 A. Margen amplio. Si se añade un calefactor eléctrico de 2 000 W, [[P_tot]] sube a 2 740 W, [[I_tot]] a 11,9 A y [[margen_uso]] a 0,74: zona de vigilancia. Añadir un segundo calefactor de 2 000 W eleva [[P_tot]] a 4 740 W, [[I_tot]] a 20,6 A y [[margen_uso]] a 1,28: sobrecarga activa que requiere usar una toma dedicada para el calefactor.\r
\r
**Variable dominante:** [[margen_uso]] como indicador de uso de la capacidad nominal; [[I_max]] como parámetro de diseño de la regleta.\r
\r
**Límite de validez:** Aplicable para cargas con factor de potencia > 0,8. Para equipos con fuentes conmutadas de baja calidad, la corriente pico puede exceder la eficaz en factor 2 o más.\r
\r
## 2. Diagnóstico de calentamiento en enchufes de instalaciones antiguas\r
\r
En instalaciones de más de 30 años con cableado de aluminio o contactos de latón oxidados, [[R_contacto]] puede ser significativamente mayor que en instalaciones nuevas. El calentamiento visible u olfativo de un enchufe con carga moderada indica [[R_contacto]] elevada, no necesariamente sobrecarga de corriente.\r
\r
El diagnóstico requiere medir [[I_tot]] con un amperímetro de pinza y estimar [[P_perdida]] = [[I_tot]]² × [[R_contacto]]. Si [[I_tot]] es baja pero hay calor perceptible, [[R_contacto]] es el factor dominante. La solución es la sustitución del mecanismo de toma, no la redistribución de carga. Una [[P_perdida]] de 5 W en un contacto de tamaño de una moneda puede elevar la temperatura superficial del plástico por encima del punto de ablandamiento del PVC (70-80 °C) en entornos poco ventilados.\r
\r
**Variable dominante:** [[R_contacto]] como magnitud de diagnóstico; [[P_perdida]] como indicador de riesgo térmico local.\r
\r
**Límite de validez:** El modelo de Joule localizado es válido para régimen permanente. En instalaciones con corrientes armónicas elevadas, la corriente eficaz puede no reflejar el calentamiento pico.\r
\r
## 3. Verificación de regletas en cocinas y zonas húmedas\r
\r
Las cocinas tienen restricciones especiales para tomas: deben instalarse fuera de zonas de salpicadura. En cocinas, la suma de potencias puede ser muy elevada. Un horno de 2 000 W, un microondas de 1 200 W, una cafetera de 1 200 W y una tostadora de 900 W dan [[P_tot]] = 5 300 W. Un circuito dedicado para cocina de 20 A con [[P_max]] = 4 600 W puede parecer suficiente para el circuito, pero si todos los equipos anteriores se conectan en la misma toma individual de [[I_max]] = 16 A ([[P_max]] = 3 680 W), el [[margen_uso]] de esa toma sería 5 300 / 3 680 = 1,44: sobrecarga severa aunque el circuito global no dispare el magnetotérmico.\r
\r
**Variable dominante:** [[P_max]] de la toma individual como límite de diseño; [[P_tot]] como variable de evaluación.\r
\r
**Límite de validez:** En cocinas se asume que no todos los equipos de alta potencia están encendidos simultáneamente. El peor caso (todos encendidos) es la estimación de seguridad; en uso real el factor de simultaneidad reduce [[P_tot]] efectivo.\r
\r
## 4. Selección de alargadores y adaptadores de viaje\r
\r
Los alargadores tienen [[I_max]] propio que puede ser menor que el de la toma de origen. Un alargador de 6 A en una toma de 16 A no hereda la capacidad de la toma: el límite operativo es el del elemento más restrictivo en la cadena. La evaluación de [[margen_uso]] debe hacerse con el [[I_max]] del alargador, no de la toma.\r
\r
Los adaptadores de viaje introducen [[R_contacto]] adicional que puede ser significativa en adaptadores de baja calidad. Con [[I_tot]] = 10 A y [[R_contacto]] = 0,5 Ω en el adaptador, [[P_perdida]] = 50 W: condición de riesgo aunque la carga esté dentro del [[I_max]] declarado.\r
\r
**Variable dominante:** [[I_max]] del elemento más restrictivo en la cadena; [[R_contacto]] del adaptador como factor de riesgo adicional.\r
\r
**Límite de validez:** El modelo asume que el único punto de resistencia parásita significativa es el adaptador o el contacto de la toma. En alargadores largos (> 10 m), la resistencia del cable también contribuye a la pérdida total.\r
\r
## 5. Educación en seguridad eléctrica doméstica\r
\r
El análisis de [[margen_uso]] y [[P_perdida]] proporciona un marco cuantitativo para la educación en seguridad eléctrica doméstica. Permite reemplazar la regla empírica "no conectes muchas cosas en la misma regleta" por un criterio preciso: calcular [[P_tot]], obtener [[I_tot]] = [[P_tot]] / [[V]] y verificar que [[margen_uso]] = [[I_tot]] / [[I_max]] no supera 0,8 en uso continuo.\r
\r
Este marco es aplicable por cualquier usuario sin instrumentación: solo requiere conocer las potencias nominales de los equipos (impresas en la etiqueta del fabricante), la tensión de red (230 V en Europa) y el [[I_max]] de la toma o regleta (etiqueta o norma nacional). Las cinco fórmulas del leaf forman una cadena completa desde el dato observable ([[P]] de la etiqueta) hasta el indicador de riesgo ([[margen_uso]] y [[P_perdida]]).\r
\r
**Variable dominante:** [[margen_uso]] como indicador preventivo principal; [[P_tot]] como suma de entrada.\r
\r
**Límite de validez:** Aplicable a instalaciones monofásicas residenciales con cargas de factor de potencia > 0,8. Para instalaciones industriales, trifásicas o con cargas muy no lineales, se requiere un análisis más detallado de la corriente real.`;export{e as default};
