const e=`# Errores Comunes en el Análisis de Eficiencia\r
\r
El estudio de la eficiencia energética en climatización es propenso a malentendidos debido a la mezcla de conceptos técnicos, métricas estacionales y factores económicos. A continuación, se detallan los errores más frecuentes que pueden invalidar una auditoría o una decisión de inversión.\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que la eficiencia depende únicamente del equipo instalado\r
**Por qué parece correcto**\r
Es común pensar que si compramos el equipo con la mejor etiqueta energética (por ejemplo, A+++), el ahorro está garantizado. La publicidad suele centrarse en el [[SCOP]] de la máquina como un valor absoluto de calidad.\r
\r
**Por qué es incorrecto**\r
Físicamente, el consumo depende del sistema completo. Un equipo de alta eficiencia instalado en una casa con graves infiltraciones de aire o mal aislamiento tendrá que trabajar a máxima potencia constantemente, saliendo de su zona de operación óptima. La eficiencia real es el producto del rendimiento del equipo y la gestión de la [[demanda térmica estacional|Q_est]] de la vivienda.\r
\r
**Señal de detección**\r
Se observa cuando el usuario instala un equipo [[nuevo]] pero su factura eléctrica no baja según lo previsto, o cuando el equipo no logra mantener la temperatura de consigna a pesar de ser teóricamente potente.\r
\r
**Corrección conceptual**\r
Debes ver la eficiencia como un sistema de vasos comunicantes: para reducir el consumo, puedes mejorar el "grifo" (el equipo) o tapar los "agujeros" (el aislamiento). Ignorar la [[demanda|Q_est]] es ignorar la mitad de la ecuación.\r
\r
**Mini-ejemplo de contraste**\r
Instalar una aerotermia de última generación en una casa con las ventanas abiertas es menos eficiente que tener una estufa vieja en una casa perfectamente aislada. El ahorro real viene del equilibrio entre ambas partes.\r
\r
## Errores de modelo\r
\r
### Error 2: Comparar ahorros sin fijar el mismo nivel de confort\r
**Por qué parece correcto**\r
Al comparar el consumo de un año con el anterior, solemos mirar solo la cifra total de kWh o el importe en euros, asumiendo que "vivimos igual".\r
\r
**Por qué es incorrecto**\r
El ahorro físico solo es comparable si mantenemos constantes las variables de control. Si en el escenario [[base]] la casa estaba a 19 °C y en el escenario [[nuevo]] a 21 °C, el aumento de temperatura enmascarará la mejora técnica. El [[ahorro energético porcentual|Ahorro_pct]] calculado no será un reflejo fiel de la mejora del sistema, sino de un cambio en los hábitos de uso.\r
\r
**Señal de detección**\r
Aparece cuando los resultados de ahorro son contradictorios entre meses similares, o cuando se atribuye el éxito de una medida a la suerte climática en lugar de a la intervención técnica.\r
\r
**Corrección conceptual**\r
El análisis de eficiencia requiere una "normalización". Siempre que compares dos escenarios, asegúrate de que la temperatura de consigna y las horas de funcionamiento sean idénticas.\r
\r
**Mini-ejemplo de contraste**\r
Decir que has ahorrado un 50% de energía este invierno porque has pasado menos tiempo en casa no es una mejora de eficiencia; es una reducción de servicio. La eficiencia real es consumir menos haciendo lo mismo.\r
\r
## Errores matemáticos\r
\r
### Error 3: Usar el [[SCOP]] nominal para cálculos de ahorro garantizado\r
**Por qué parece correcto**\r
La ficha técnica del fabricante da un valor de [[rendimiento estacional|SCOP]] (por ejemplo, 4.5). Es tentador multiplicar este número directamente por la demanda teórica para obtener el [[consumo eléctrico estacional|E_est]].\r
\r
**Por qué es incorrecto**\r
El [[SCOP]] nominal se mide en laboratorios bajo condiciones de ensayo estandarizadas. En la realidad, factores como la suciedad en los filtros, la longitud de las tuberías de refrigerante o la acumulación de escarcha en la unidad exterior reducen el rendimiento efectivo. Usar el valor máximo lleva a subestimar el consumo real y a sobreestimar el ahorro económico.\r
\r
**Señal de detección**\r
Se detecta cuando el tiempo de retorno de la inversión calculado es mucho más corto de lo que la realidad de las facturas demuestra tras el primer año de uso.\r
\r
**Corrección conceptual**\r
Aplica siempre un factor de seguridad o "corrección de campo" al [[SCOP]] comercial. Un descuento del 15-20% sobre el valor de catálogo suele ofrecer una estimación mucho más cercana al comportamiento físico real.\r
\r
**Mini-ejemplo de contraste**\r
Es como el consumo homologado de un coche: en la pista de pruebas gasta 4 litros, pero en una ciudad con cuestas y tráfico gasta 6. Si calculas tu presupuesto de gasolina con los 4 litros, te quedarás corto a mitad de mes.\r
\r
## Errores de interpretación\r
\r
### Error 4: Confundir ahorro energético con ahorro económico\r
**Por qué parece correcto**\r
Si el sistema es más eficiente y gasta menos kWh, se asume automáticamente que la factura en euros debe bajar en la misma proporción.\r
\r
**Por qué es incorrecto**\r
El [[coste económico estacional|C_est]] depende de la energía pero también del precio del mercado. Si durante el año de la mejora el [[precio medio de la energía|precio_medio]] sube drásticamente, es posible que el usuario pague lo mismo o más que el año anterior, a pesar de haber reducido su consumo físico. Esto genera la falsa sensación de que la mejora de eficiencia no ha funcionado.\r
\r
**Señal de detección**\r
Se manifiesta en la frustración del usuario que, tras invertir en aislamiento, ve que su factura no baja, ignorando que el precio de la electricidad ha subido un 30% en el mismo periodo.\r
\r
**Corrección conceptual**\r
Separa siempre el análisis técnico (energía) del análisis financiero (dinero). El éxito técnico se mide en kilovatio-hora, el éxito financiero en euros. Ambos están acoplados por el precio, pero responden a causas distintas.\r
\r
**Mini-ejemplo de contraste**\r
Puedes haber reducido tu consumo de agua a la mitad instalando grifos eficientes, pero si la empresa municipal dobla el precio del metro cúbico, tu factura no bajará. Esto no significa que los grifos no funcionen, sino que el entorno económico ha cambiado.\r
\r
## Regla de autocontrol rápido\r
\r
Para verificar si tu análisis de eficiencia es sólido, aplica este checklist de tres puntos:\r
1. **Consistencia de Confort**: ¿Se ha mantenido la misma temperatura interior en ambos escenarios? Si no es así, el cálculo de [[ahorro energético porcentual|Ahorro_pct]] no es válido.\r
2. **Coherencia de Unidades**: ¿Has separado correctamente la demanda térmica ([[Q_est]]) del consumo eléctrico ([[E_est]])? Recuerda que el [[SCOP]] es el puente entre ambas.\r
3. **Validación de Factura**: ¿El [[coste económico estacional|C_est]] calculado coincide con el sumatorio de facturas reales dentro de un margen razonable? Si la diferencia supera el 15%, revisa los supuestos de tu modelo.\r
`;export{e as default};
