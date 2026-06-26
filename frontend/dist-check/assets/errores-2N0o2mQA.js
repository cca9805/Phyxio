const e=`\uFEFF# Errores frecuentes en el análisis del coste eléctrico\r
\r
El análisis del coste eléctrico combina física, economía y estadística. Identificar los errores típicos es tan importante como dominar las fórmulas, porque un error de modelo o de comparación puede producir conclusiones de ahorro completamente inversas a la realidad.\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir consumo con coste\r
\r
#### Por qué parece correcto\r
\r
En el lenguaje cotidiano "gastar más luz" equivale a "pagar más". Si el consumo sube, la factura sube; si baja, la factura baja. Esta relación parece directa y proporcional.\r
\r
#### Por qué es incorrecto\r
\r
El [[coste de energía|C_energia]] es solo parte del [[coste total de la factura|C_total]]. El [[coste de potencia|C_potencia]] y los [[costes adicionales y peajes|C_extra]] persisten aunque el consumo sea cero. Si estos términos fijos representan el 35 % de la factura, una reducción del 30 % de consumo solo reduce el [[coste total de la factura|C_total]] en un 19,5 %, no en un 30 %.\r
\r
#### Señal de detección\r
\r
Calcular la factura multiplicando kWh totales por un precio único y obtener un resultado inferior al total real de la factura impresa.\r
\r
#### Corrección conceptual\r
\r
Descomponer siempre la factura en [[coste de energía|C_energia]], [[coste de potencia|C_potencia]] y [[costes adicionales y peajes|C_extra]] antes de proyectar ahorros. Aplicar la reducción solo sobre el componente afectado.\r
\r
#### Mini-ejemplo\r
\r
Factura real: 70 EUR. [[coste de energía|C_energia]] = 45 EUR, [[coste de potencia|C_potencia]] = 15 EUR, [[costes adicionales y peajes|C_extra]] = 10 EUR. Una reducción del 20 % del consumo ahorra 20 % de 45 = 9 EUR, es decir, el 12,9 % de la factura total, no el 20 %.\r
\r
### Error 2: concluir que la factura solo depende del consumo mensual\r
\r
#### Por qué parece correcto\r
\r
Cada mes se recibe una factura con un importe y se sabe cuánto se ha consumido. Parece lógico que mayor consumo implique mayor factura de forma proporcional.\r
\r
#### Por qué es incorrecto\r
\r
El [[coste de potencia|C_potencia]] depende de los [[días del periodo de facturación|dias]] y de la [[potencia contratada|P_contratada]], no del consumo. Dos meses con igual consumo pero distinto número de días tendrán distinto [[coste total de la factura|C_total]] aunque el [[coste de energía|C_energia]] sea idéntico.\r
\r
#### Señal de detección\r
\r
Dos facturas con igual consumo en kWh pero importes totales distintos sin cambio de tarifa.\r
\r
#### Corrección conceptual\r
\r
Verificar siempre los [[días del periodo de facturación|dias]] antes de comparar facturas. El [[coste de potencia|C_potencia]] varía linealmente con los días: 31 días cuesta un 3,3 % más que 30 días.\r
\r
#### Mini-ejemplo\r
\r
Enero (31 días): [[coste de potencia|C_potencia]] = 4,6 × 0,11 × 31 = 15,69 EUR. Febrero (28 días): [[coste de potencia|C_potencia]] = 4,6 × 0,11 × 28 = 14,17 EUR. Diferencia de 1,52 EUR sin cambio de consumo ni de contrato.\r
\r
## Errores de modelo\r
\r
### Error 3: comparar periodos no equivalentes sin normalizar\r
\r
#### Por qué parece correcto\r
\r
La comparación mes a mes parece natural; la factura llega mensualmente y el usuario compara con la del mes anterior o del mismo mes del año pasado.\r
\r
#### Por qué es incorrecto\r
\r
El modelo simplificado solo es válido para comparaciones entre periodos equivalentes. Si los [[días del periodo de facturación|dias]] difieren en más de 3 o la temperatura media mensual difiere en más de 5 °C, el error del modelo puede superar el ahorro que se pretende medir.\r
\r
#### Señal de detección\r
\r
El [[ahorro porcentual|Ahorro_pct]] calculado varía significativamente (más de 3 puntos porcentuales) entre distintos pares de meses comparados que deberían mostrar el mismo ahorro si la medida fuera consistente.\r
\r
#### Corrección conceptual\r
\r
Normalizar por día antes de comparar (dividir [[coste total de la factura|C_total]] entre [[días del periodo de facturación|dias]]). Para comparaciones interanuales, usar el mismo mes del año anterior con condiciones equivalentes de ocupación.\r
\r
#### Mini-ejemplo\r
\r
Enero base: 85 EUR / 31 días = 2,74 EUR/día. Enero nuevo: 78 EUR / 28 días = 2,79 EUR/día. El [[coste del escenario nuevo|C_nuevo]] tiene coste diario mayor, no menor; la medida no ha producido ahorro cuando se normaliza correctamente.\r
\r
### Error 4: ignorar el peso del término fijo al proyectar ahorros\r
\r
#### Por qué parece correcto\r
\r
Las campañas de ahorro expresan el potencial en porcentaje de consumo ("ahorra un 20 % de energía"). Parece directo trasladar ese porcentaje a la factura.\r
\r
#### Por qué es incorrecto\r
\r
El [[coste de potencia|C_potencia]] y los [[costes adicionales y peajes|C_extra]] son inelásticos respecto al consumo. Si representan el 35 % de la factura, el [[ahorro porcentual|Ahorro_pct]] máximo posible actuando solo sobre [[coste de energía|C_energia]] es del 65 % de lo proyectado.\r
\r
#### Señal de detección\r
\r
El ahorro en euros observado en la factura es sistemáticamente inferior al proyectado multiplicando el porcentaje de reducción de consumo por el [[coste del escenario de referencia|C_base]].\r
\r
#### Corrección conceptual\r
\r
Calcular el [[ahorro porcentual|Ahorro_pct]] usando los valores completos de [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]] que incluyan los tres componentes.\r
\r
#### Mini-ejemplo\r
\r
Se proyecta un ahorro del 25 % sobre 70 EUR, que serían 17,5 EUR. Pero [[coste de potencia|C_potencia]] más [[costes adicionales y peajes|C_extra]] suman 25 EUR y no se reducen. El ahorro real máximo es el 25 % de los 45 EUR de [[coste de energía|C_energia]], es decir 11,25 EUR, el 16 % de la factura total.\r
\r
## Errores matemáticos\r
\r
### Error 5: bajar la potencia contratada sin verificar los picos reales\r
\r
#### Por qué parece correcto\r
\r
El [[coste de potencia|C_potencia]] no depende del consumo; parece un coste fácil de reducir simplemente cambiando el valor de la [[potencia contratada|P_contratada]] en el contrato.\r
\r
#### Por qué es incorrecto\r
\r
La [[potencia contratada|P_contratada]] es también el techo de potencia simultánea disponible. Si se baja por debajo del pico real de demanda del hogar, el interruptor de control de potencia (ICP) salta y corta el suministro en los momentos de mayor uso.\r
\r
#### Señal de detección\r
\r
Cortes de suministro al encender simultáneamente cocina eléctrica, lavavajillas y climatización.\r
\r
#### Corrección conceptual\r
\r
Registrar los picos de demanda simultánea durante al menos un mes completo en estación de alta demanda. Fijar la nueva [[potencia contratada|P_contratada]] al menos un 10–15 % por encima del pico máximo observado.\r
\r
#### Mini-ejemplo\r
\r
Hogar con cocina (3 kW) + lavavajillas (1,8 kW) + climatizador (1,5 kW) simultáneos = 6,3 kW pico. Bajar la [[potencia contratada|P_contratada]] de 6,9 kW a 5,75 kW causaría cortes; solo sería seguro bajar a 3,45 kW si nunca se usan varios aparatos a la vez.\r
\r
## Errores de interpretación\r
\r
### Error 6: atribuir el ahorro a la medida equivocada sin desglose\r
\r
#### Por qué parece correcto\r
\r
Si se instala un nuevo sistema y la factura baja el mes siguiente, la conexión causal parece obvia: el sistema nuevo es la causa del ahorro.\r
\r
#### Por qué es incorrecto\r
\r
El [[coste total de la factura|C_total]] puede cambiar por múltiples causas simultáneas: menos [[días del periodo de facturación|dias]], temperatura más suave, menor ocupación o variación del [[precio de la energía por franja|precio_i]]. Sin controlar estas variables, no se puede atribuir el cambio a una medida concreta.\r
\r
#### Señal de detección\r
\r
El [[ahorro porcentual|Ahorro_pct]] varía más de 5 puntos porcentuales entre distintos periodos de comparación que deberían mostrar el mismo efecto de la medida.\r
\r
#### Corrección conceptual\r
\r
Comparar el [[coste del escenario nuevo|C_nuevo]] con el [[coste del escenario de referencia|C_base]] en periodos equivalentes. Si no es posible controlar todas las variables, repetir la comparación en varios periodos y buscar consistencia estadística.\r
\r
#### Mini-ejemplo\r
\r
Factura de marzo (post-medida): 55 EUR. Factura de febrero (pre-medida): 80 EUR. Diferencia aparente: −25 EUR (−31 %). Pero febrero tiene 28 días y marzo 31; la temperatura de marzo es 8 °C más alta; y hay 3 días menos de ocupación. El ahorro atribuible a la medida puede ser cero.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de concluir que existe ahorro real atribuible a una medida:\r
\r
1. Verificar igualdad de [[días del periodo de facturación|dias]] o normalizar por día.\r
2. Comprobar que [[coste del escenario de referencia|C_base]] y [[coste del escenario nuevo|C_nuevo]] son comparables en servicio, temperatura y ocupación.\r
3. Descomponer en [[coste de energía|C_energia]], [[coste de potencia|C_potencia]] y [[costes adicionales y peajes|C_extra]]; identificar qué componente cambia.\r
4. Calcular [[ahorro porcentual|Ahorro_pct]] sobre [[coste total de la factura|C_total]] completo.\r
5. Confirmar la tendencia en al menos dos periodos equivalentes.\r
`;export{e as default};
