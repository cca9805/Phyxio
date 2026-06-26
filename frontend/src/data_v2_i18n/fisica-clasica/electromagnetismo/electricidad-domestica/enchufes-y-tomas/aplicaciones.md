# Aplicaciones

## 1. Dimensionamiento de regletas en zonas de trabajo

En puestos de trabajo con múltiples equipos informáticos, la evaluación de [[potencia_total_simultanea]] e [[corriente_total_en_la_toma]] determina la capacidad mínima de la regleta necesaria. El protocolo consiste en listar todos los equipos conectados, sumar sus potencias nominales para obtener [[potencia_total_simultanea]], calcular [[corriente_total_en_la_toma]] y verificar que [[margen_uso]] no supera 0,8 en uso continuo.

Para un puesto típico con ordenador de 400 W, dos monitores de 80 W, impresora de 150 W y cargadores de 30 W: [[potencia_total_simultanea]] = 740 W, [[corriente_total_en_la_toma]] = 3,2 A, [[margen_uso]] = 0,20 con regleta de [[corriente_maxima_nominal]] = 16 A. Margen amplio. Si se añade un calefactor eléctrico de 2 000 W, [[potencia_total_simultanea]] sube a 2 740 W, [[corriente_total_en_la_toma]] a 11,9 A y [[margen_uso]] a 0,74: zona de vigilancia. Añadir un segundo calefactor de 2 000 W eleva [[potencia_total_simultanea]] a 4 740 W, [[corriente_total_en_la_toma]] a 20,6 A y [[margen_uso]] a 1,28: sobrecarga activa que requiere usar una toma dedicada para el calefactor.

Variable dominante: ** [[margen_uso]] como indicador de uso de la capacidad nominal; [[corriente_maxima_nominal]] como parámetro de diseño de la regleta.

Límite de validez: ** Aplicable para cargas con factor de potencia > 0,8. Para equipos con fuentes conmutadas de baja calidad, la corriente pico puede exceder la eficaz en factor 2 o más.

## 2. Diagnóstico de calentamiento en enchufes de instalaciones antiguas

En instalaciones de más de 30 años con cableado de aluminio o contactos de latón oxidados, [[resistencia_de_contacto]] puede ser significativamente mayor que en instalaciones nuevas. El calentamiento visible u olfativo de un enchufe con carga moderada indica [[resistencia_de_contacto]] elevada, no necesariamente sobrecarga de corriente.

El diagnóstico requiere medir [[corriente_total_en_la_toma]] con un amperímetro de pinza y estimar [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² × [[resistencia_de_contacto]]. Si [[corriente_total_en_la_toma]] es baja pero hay calor perceptible, [[resistencia_de_contacto]] es el factor dominante. La solución es la sustitución del mecanismo de toma, no la redistribución de carga. Una [[potencia_disipada_en_el_contacto]] de 5 W en un contacto de tamaño de una moneda puede elevar la temperatura superficial del plástico por encima del punto de ablandamiento del PVC (70-80 °C) en entornos poco ventilados.

Variable dominante: ** [[resistencia_de_contacto]] como magnitud de diagnóstico; [[potencia_disipada_en_el_contacto]] como indicador de riesgo térmico local.

Límite de validez: ** El modelo de Joule localizado es válido para régimen permanente. En instalaciones con corrientes armónicas elevadas, la corriente eficaz puede no reflejar el calentamiento pico.

## 3. Verificación de regletas en cocinas y zonas húmedas

Las cocinas tienen restricciones especiales para tomas: deben instalarse fuera de zonas de salpicadura. En cocinas, la suma de potencias puede ser muy elevada. Un horno de 2 000 W, un microondas de 1 200 W, una cafetera de 1 200 W y una tostadora de 900 W dan [[potencia_total_simultanea]] = 5 300 W. Un circuito dedicado para cocina de 20 A con [[potencia_maxima_nominal]] = 4 600 W puede parecer suficiente para el circuito, pero si todos los equipos anteriores se conectan en la misma toma individual de [[corriente_maxima_nominal]] = 16 A ([[potencia_maxima_nominal]] = 3 680 W), el [[margen_uso]] de esa toma sería 5 300 / 3 680 = 1,44: sobrecarga severa aunque el circuito global no dispare el magnetotérmico.

Variable dominante: ** [[potencia_maxima_nominal]] de la toma individual como límite de diseño; [[potencia_total_simultanea]] como variable de evaluación.

Límite de validez: ** En cocinas se asume que no todos los equipos de alta potencia están encendidos simultáneamente. El peor caso (todos encendidos) es la estimación de seguridad; en uso real el factor de simultaneidad reduce [[potencia_total_simultanea]] efectivo.

## 4. Selección de alargadores y adaptadores de viaje

Los alargadores tienen [[corriente_maxima_nominal]] propio que puede ser menor que el de la toma de origen. Un alargador de 6 A en una toma de 16 A no hereda la capacidad de la toma: el límite operativo es el del elemento más restrictivo en la cadena. La evaluación de [[margen_uso]] debe hacerse con el [[corriente_maxima_nominal]] del alargador, no de la toma.

Los adaptadores de viaje introducen [[resistencia_de_contacto]] adicional que puede ser significativa en adaptadores de baja calidad. Con [[corriente_total_en_la_toma]] = 10 A y [[resistencia_de_contacto]] = 0,5 Ω en el adaptador, [[potencia_disipada_en_el_contacto]] = 50 W: condición de riesgo aunque la carga esté dentro del [[corriente_maxima_nominal]] declarado.

Variable dominante: ** [[corriente_maxima_nominal]] del elemento más restrictivo en la cadena; [[resistencia_de_contacto]] del adaptador como factor de riesgo adicional.

Límite de validez: ** El modelo asume que el único punto de resistencia parásita significativa es el adaptador o el contacto de la toma. En alargadores largos (> 10 m), la resistencia del cable también contribuye a la pérdida total.

## 5. Educación en seguridad eléctrica doméstica

El análisis de [[margen_uso]] y [[potencia_disipada_en_el_contacto]] proporciona un marco cuantitativo para la educación en seguridad eléctrica doméstica. Permite reemplazar la regla empírica "no conectes muchas cosas en la misma regleta" por un criterio preciso: calcular [[potencia_total_simultanea]], obtener [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]] y verificar que [[margen_uso]] = [[corriente_total_en_la_toma]] / [[corriente_maxima_nominal]] no supera 0,8 en uso continuo.

Este marco es aplicable por cualquier usuario sin instrumentación: solo requiere conocer las potencias nominales de los equipos (impresas en la etiqueta del fabricante), la tensión de red (230 V en Europa) y el [[corriente_maxima_nominal]] de la toma o regleta (etiqueta o norma nacional). Las cinco fórmulas del leaf forman una cadena completa desde el dato observable ([[potencia_de_carga]] de la etiqueta) hasta el indicador de riesgo ([[margen_uso]] y [[potencia_disipada_en_el_contacto]]).

Variable dominante: ** [[margen_uso]] como indicador preventivo principal; [[potencia_total_simultanea]] como suma de entrada.

Límite de validez: ** Aplicable a instalaciones monofásicas residenciales con cargas de factor de potencia > 0,8. Para instalaciones industriales, trifásicas o con cargas muy no lineales, se requiere un análisis más detallado de la corriente real.