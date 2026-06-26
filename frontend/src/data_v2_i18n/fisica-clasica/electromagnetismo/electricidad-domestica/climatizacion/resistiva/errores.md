# Errores Comunes en la Calefacción Resistiva

El aparente simplismo de la calefacción resistiva genera una falsa sensación de dominio del tema. La fórmula de consumo parece tan directa que es fácil aplicarla incorrectamente o interpretar sus resultados de forma equivocada. A continuación se detallan los errores más frecuentes y cómo detectarlos y corregirlos.

## Errores conceptuales


### Error 1: Confundir alta eficiencia de conversión con bajo coste energético
**Por qué parece correcto**
El emisor resistivo tiene un [[rendimiento de conversión|eta]] casi igual a 1 y un [[coeficiente_de_rendimiento]] = 1. Si la conversión es prácticamente perfecta y no hay pérdidas, parece lógico que sea la opción más eficiente y económica.

**Por qué es incorrecto**
El [[coeficiente_de_rendimiento]] = 1 no significa eficiencia sobresaliente; significa que se obtiene 1 kWh térmico por cada kWh eléctrico invertido. Una bomba de calor con [[coeficiente_de_rendimiento]] = 4 obtiene 4 kWh térmicos por el mismo kWh eléctrico, siendo cuatro veces más eficiente en términos energéticos. La resistiva convierte bien, pero convierte el 100% de una energía cara (electricidad) en calor, algo que otras tecnologías logran multiplicando el rendimiento aprovechando el calor del entorno.

**Señal de detección**
El error se manifiesta cuando el alumno argumenta que la resistiva "es la más eficiente porque no pierde nada". La frase correcta sería: "la resistiva es la más simple y predecible, pero no la más eficiente en consumo eléctrico".

**Corrección conceptual**
Distingue siempre entre rendimiento de conversión local ([[eta]], mide las pérdidas internas del emisor) y [[coeficiente_de_rendimiento]] (mide cuánto calor útil se obtiene por unidad de electricidad, incluyendo el posible aprovechamiento del entorno). En resistiva, ambos coinciden en ≈1; en bombas de calor, [[eta]] ≈ 0,9 pero [[coeficiente_de_rendimiento]] puede ser 3–5.

**Mini-ejemplo de contraste**
Un radiador eléctrico de 2 kW entrega ~1,96 kWh de calor útil con [[eta]] = 0,98. Una bomba de calor de 0,5 kW de compresor con [[coeficiente_de_rendimiento]] = 4 entrega los mismos 2 kWh térmicos consumiendo solo 0,5 kWh eléctricos. La diferencia en la factura es de 4:1.

## Errores de modelo


### Error 2: Usar las horas de aparato encendido en lugar del tiempo efectivo
**Por qué parece correcto**
Si el termostato mantiene el equipo encendido de 7:00 a 23:00, son 16 horas. Parece natural multiplicar la [[potencia_del_emisor]] por esas 16 horas para calcular el [[consumo_electrico]].

**Por qué es incorrecto**
El termostato desconecta la resistencia cuando la temperatura objetivo está alcanzada. En una vivienda bien aislada, la resistencia puede estar activa solo 4–6 de esas 16 horas. El [[tiempo_efectivo_de_uso]] es la variable que entra en la fórmula, no las horas de aparato conectado a la red. Usar 16 horas en lugar de 5 horas sobreestima el [[consumo_electrico]] por un factor de 3,2, generando presupuestos de coste completamente erróneos.

**Señal de detección**
El cálculo predice un consumo muy superior al que marca la factura real. Si la factura indica 180 kWh en un mes y el cálculo da 480 kWh, el [[tiempo_efectivo_de_uso]] está mal estimado.

**Corrección conceptual**
Usa medidores de consumo en enchufe (disponibles desde 15 €) para medir directamente el [[consumo_electrico]] real, o estima el [[tiempo_efectivo_de_uso]] aplicando un factor de ciclo del termostato, que en viviendas bien aisladas suele estar entre el 25% y el 50% del tiempo de conexión.

**Mini-ejemplo de contraste**
Un emisor de 2 kW conectado 10 horas con termostato activo al 40% tiene un [[tiempo_efectivo_de_uso]] = 4 h. El [[consumo_electrico]] real es 2 × 4 = 8 kWh, no 2 × 10 = 20 kWh. La diferencia es de 12 kWh por día, o 360 kWh por mes, que a 0,22 EUR/kWh supone 79,20 EUR de error en la estimación mensual.

## Errores matemáticos


### Error 3: Mezclar unidades W/kW sin conversión previa
**Por qué parece correcto**
Los catálogos de equipos a veces expresan la [[potencia_del_emisor]] en vatios (W), mientras que la fórmula de consumo opera en kW y horas. Si se multiplican directamente 1500 W y 5 h sin convertir, aparece el valor 7500 — cuya unidad correcta sería 7500 Wh, es decir, 7,5 kWh.

**Por qué es incorrecto**
La fórmula opera en kW y horas para dar kWh directamente. Introducir W en vez de kW produce resultados 1000 veces mayores o menores según cómo se propague el error. Esta inconsistencia dimensional es la fuente más común de cálculos erróneos en problemas de calefacción doméstica.

**Señal de detección**
Si el resultado de [[consumo_electrico]] está en el rango de miles cuando debería estar en decenas de kWh, hay un error de unidades. La factura doméstica típica de calefacción resistiva está entre 50 y 500 kWh por mes, no en el orden de los miles.

**Corrección conceptual**
Establece como regla fija: convierte siempre [[potencia_del_emisor]] a kW antes de calcular (divide por 1000 si está en W). Luego verifica que el resultado final esté en kWh y sea consistente con el orden de magnitud esperado.

**Mini-ejemplo de contraste**
Emisor de 1500 W funcionando 4 h: usando 1,5 kW × 4 h se obtienen 6 kWh. El error frecuente es operar con 1500 (en W) y 4 h sin convertir, obteniendo 6000 Wh — un factor 1000 mayor que el resultado correcto.

## Errores de interpretación


### Error 4: Extrapolar un mes atípico a toda la temporada
**Por qué parece correcto**
Si en el mes de octubre el coste de calefacción fue moderado, parece razonable estimar que el invierno completo costará aproximadamente 5 veces ese valor.

**Por qué es incorrecto**
El [[tiempo_efectivo_de_uso]] varía drásticamente con la temperatura exterior. Octubre puede tener un ciclo de termostato del 20%, mientras que enero puede tener un 70%. Extrapolar el consumo de octubre a enero sobreestima el ahorro en los meses más fríos e infraestima el [[consumo_electrico]] total de la temporada en un factor de 2–3 en climas fríos. El [[coeficiente_de_rendimiento]] no varía, pero la demanda térmica del edificio sí.

**Señal de detección**
El presupuesto anual calculado por extrapolación de un mes suave queda un 40–60% por debajo del coste real al final del invierno.

**Corrección conceptual**
Analiza al menos los meses de máxima demanda (enero-febrero) y los de demanda baja (octubre-noviembre) para obtener una estimación estacional razonable. Usa datos de grados-día de tu localidad si necesitas mayor precisión.

**Mini-ejemplo de contraste**
Octubre: [[tiempo_efectivo_de_uso]] = 2 h/día, [[consumo_electrico]] = 60 kWh/mes. Enero: [[tiempo_efectivo_de_uso]] = 7 h/día, [[consumo_electrico]] = 210 kWh/mes. Extrapolar octubre × 5 da 300 kWh, cuando el total real (oct–feb) puede ser 750 kWh. La diferencia afecta directamente al presupuesto de inversión en mejoras.

## Regla de autocontrol rápido

Para verificar si tu análisis de calefacción resistiva es sólido, aplica este checklist:
1. **Unidades coherentes**: ¿Has convertido [[potencia_del_emisor]] a kW antes de multiplicar por [[tiempo_efectivo_de_uso]] en horas?
2. **Tiempo efectivo**: ¿Has usado horas con resistencia activa, no solo horas de aparato encendido?
3. **Orden de magnitud**: ¿El [[consumo_electrico]] calculado está entre 10 y 500 kWh para un emisor doméstico mensual?
4. **[[coeficiente_de_rendimiento]] correcto**: ¿Has asumido [[coeficiente_de_rendimiento]] = 1 y no un valor mayor que viola la física?
5. **Comparativa honesta**: ¿Has comparado el [[calor_util]] entregado a igualdad de servicio cuando comparas con otras tecnologías?