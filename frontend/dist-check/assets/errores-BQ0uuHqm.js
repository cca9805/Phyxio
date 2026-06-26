const e=`\uFEFF# Errores Comunes en la Calefacción Resistiva\r
\r
El aparente simplismo de la calefacción resistiva genera una falsa sensación de dominio del tema. La fórmula de consumo parece tan directa que es fácil aplicarla incorrectamente o interpretar sus resultados de forma equivocada. A continuación se detallan los errores más frecuentes y cómo detectarlos y corregirlos.\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir alta eficiencia de conversión con bajo coste energético\r
**Por qué parece correcto**\r
El emisor resistivo tiene un [[rendimiento de conversión|eta]] casi igual a 1 y un [[coeficiente de rendimiento|COP]] = 1. Si la conversión es prácticamente perfecta y no hay pérdidas, parece lógico que sea la opción más eficiente y económica.\r
\r
**Por qué es incorrecto**\r
El [[COP]] = 1 no significa eficiencia sobresaliente; significa que se obtiene 1 kWh térmico por cada kWh eléctrico invertido. Una bomba de calor con [[COP]] = 4 obtiene 4 kWh térmicos por el mismo kWh eléctrico, siendo cuatro veces más eficiente en términos energéticos. La resistiva convierte bien, pero convierte el 100% de una energía cara (electricidad) en calor, algo que otras tecnologías logran multiplicando el rendimiento aprovechando el calor del entorno.\r
\r
**Señal de detección**\r
El error se manifiesta cuando el alumno argumenta que la resistiva "es la más eficiente porque no pierde nada". La frase correcta sería: "la resistiva es la más simple y predecible, pero no la más eficiente en consumo eléctrico".\r
\r
**Corrección conceptual**\r
Distingue siempre entre rendimiento de conversión local ([[eta]], mide las pérdidas internas del emisor) y [[coeficiente de rendimiento|COP]] (mide cuánto calor útil se obtiene por unidad de electricidad, incluyendo el posible aprovechamiento del entorno). En resistiva, ambos coinciden en ≈1; en bombas de calor, [[eta]] ≈ 0,9 pero [[COP]] puede ser 3–5.\r
\r
**Mini-ejemplo de contraste**\r
Un radiador eléctrico de 2 kW entrega ~1,96 kWh de calor útil con [[eta]] = 0,98. Una bomba de calor de 0,5 kW de compresor con [[COP]] = 4 entrega los mismos 2 kWh térmicos consumiendo solo 0,5 kWh eléctricos. La diferencia en la factura es de 4:1.\r
\r
## Errores de modelo\r
\r
### Error 2: Usar las horas de aparato encendido en lugar del tiempo efectivo\r
**Por qué parece correcto**\r
Si el termostato mantiene el equipo encendido de 7:00 a 23:00, son 16 horas. Parece natural multiplicar la [[potencia del emisor|P]] por esas 16 horas para calcular el [[consumo eléctrico|E]].\r
\r
**Por qué es incorrecto**\r
El termostato desconecta la resistencia cuando la temperatura objetivo está alcanzada. En una vivienda bien aislada, la resistencia puede estar activa solo 4–6 de esas 16 horas. El [[tiempo efectivo de uso|t]] es la variable que entra en la fórmula, no las horas de aparato conectado a la red. Usar 16 horas en lugar de 5 horas sobreestima el [[consumo eléctrico|E]] por un factor de 3,2, generando presupuestos de coste completamente erróneos.\r
\r
**Señal de detección**\r
El cálculo predice un consumo muy superior al que marca la factura real. Si la factura indica 180 kWh en un mes y el cálculo da 480 kWh, el [[tiempo efectivo de uso|t]] está mal estimado.\r
\r
**Corrección conceptual**\r
Usa medidores de consumo en enchufe (disponibles desde 15 €) para medir directamente el [[consumo eléctrico|E]] real, o estima el [[tiempo efectivo de uso|t]] aplicando un factor de ciclo del termostato, que en viviendas bien aisladas suele estar entre el 25% y el 50% del tiempo de conexión.\r
\r
**Mini-ejemplo de contraste**\r
Un emisor de 2 kW conectado 10 horas con termostato activo al 40% tiene un [[tiempo efectivo de uso|t]] = 4 h. El [[consumo eléctrico|E]] real es 2 × 4 = 8 kWh, no 2 × 10 = 20 kWh. La diferencia es de 12 kWh por día, o 360 kWh por mes, que a 0,22 EUR/kWh supone 79,20 EUR de error en la estimación mensual.\r
\r
## Errores matemáticos\r
\r
### Error 3: Mezclar unidades W/kW sin conversión previa\r
**Por qué parece correcto**\r
Los catálogos de equipos a veces expresan la [[potencia del emisor|P]] en vatios (W), mientras que la fórmula de consumo opera en kW y horas. Si se multiplican directamente 1500 W y 5 h sin convertir, aparece el valor 7500 — cuya unidad correcta sería 7500 Wh, es decir, 7,5 kWh.\r
\r
**Por qué es incorrecto**\r
La fórmula opera en kW y horas para dar kWh directamente. Introducir W en vez de kW produce resultados 1000 veces mayores o menores según cómo se propague el error. Esta inconsistencia dimensional es la fuente más común de cálculos erróneos en problemas de calefacción doméstica.\r
\r
**Señal de detección**\r
Si el resultado de [[consumo eléctrico|E]] está en el rango de miles cuando debería estar en decenas de kWh, hay un error de unidades. La factura doméstica típica de calefacción resistiva está entre 50 y 500 kWh por mes, no en el orden de los miles.\r
\r
**Corrección conceptual**\r
Establece como regla fija: convierte siempre [[P]] a kW antes de calcular (divide por 1000 si está en W). Luego verifica que el resultado final esté en kWh y sea consistente con el orden de magnitud esperado.\r
\r
**Mini-ejemplo de contraste**\r
Emisor de 1500 W funcionando 4 h: usando 1,5 kW × 4 h se obtienen 6 kWh. El error frecuente es operar con 1500 (en W) y 4 h sin convertir, obteniendo 6000 Wh — un factor 1000 mayor que el resultado correcto.\r
\r
## Errores de interpretación\r
\r
### Error 4: Extrapolar un mes atípico a toda la temporada\r
**Por qué parece correcto**\r
Si en el mes de octubre el coste de calefacción fue moderado, parece razonable estimar que el invierno completo costará aproximadamente 5 veces ese valor.\r
\r
**Por qué es incorrecto**\r
El [[tiempo efectivo de uso|t]] varía drásticamente con la temperatura exterior. Octubre puede tener un ciclo de termostato del 20%, mientras que enero puede tener un 70%. Extrapolar el consumo de octubre a enero sobreestima el ahorro en los meses más fríos e infraestima el [[consumo eléctrico|E]] total de la temporada en un factor de 2–3 en climas fríos. El [[coeficiente de rendimiento|COP]] no varía, pero la demanda térmica del edificio sí.\r
\r
**Señal de detección**\r
El presupuesto anual calculado por extrapolación de un mes suave queda un 40–60% por debajo del coste real al final del invierno.\r
\r
**Corrección conceptual**\r
Analiza al menos los meses de máxima demanda (enero-febrero) y los de demanda baja (octubre-noviembre) para obtener una estimación estacional razonable. Usa datos de grados-día de tu localidad si necesitas mayor precisión.\r
\r
**Mini-ejemplo de contraste**\r
Octubre: [[t]] = 2 h/día, [[consumo eléctrico|E]] = 60 kWh/mes. Enero: [[t]] = 7 h/día, [[E]] = 210 kWh/mes. Extrapolar octubre × 5 da 300 kWh, cuando el total real (oct–feb) puede ser 750 kWh. La diferencia afecta directamente al presupuesto de inversión en mejoras.\r
\r
## Regla de autocontrol rápido\r
\r
Para verificar si tu análisis de calefacción resistiva es sólido, aplica este checklist:\r
1. **Unidades coherentes**: ¿Has convertido [[P]] a kW antes de multiplicar por [[t]] en horas?\r
2. **Tiempo efectivo**: ¿Has usado horas con resistencia activa, no solo horas de aparato encendido?\r
3. **Orden de magnitud**: ¿El [[consumo eléctrico|E]] calculado está entre 10 y 500 kWh para un emisor doméstico mensual?\r
4. **[[COP]] correcto**: ¿Has asumido [[COP]] = 1 y no un valor mayor que viola la física?\r
5. **Comparativa honesta**: ¿Has comparado el [[calor útil|Q]] entregado a igualdad de servicio cuando comparas con otras tecnologías?\r
`;export{e as default};
