# Errores frecuentes en el análisis del coste eléctrico

El análisis del coste eléctrico combina física, economía y estadística. Identificar los errores típicos es tan importante como dominar las fórmulas, porque un error de modelo o de comparación puede producir conclusiones de ahorro completamente inversas a la realidad.

## Errores conceptuales


### Error 1: confundir consumo con coste

#### Por qué parece correcto

En el lenguaje cotidiano "gastar más luz" equivale a "pagar más". Si el consumo sube, la factura sube; si baja, la factura baja. Esta relación parece directa y proporcional.

#### Por qué es incorrecto

El [[coste_de_energia]] es solo parte del [[coste_total_de_la_factura]]. El [[coste_de_potencia]] y los [[costes_adicionales_y_peajes]] persisten aunque el consumo sea cero. Si estos términos fijos representan el 35 % de la factura, una reducción del 30 % de consumo solo reduce el [[coste_total_de_la_factura]] en un 19,5 %, no en un 30 %.

#### Señal de detección

Calcular la factura multiplicando kWh totales por un precio único y obtener un resultado inferior al total real de la factura impresa.

#### Corrección conceptual

Descomponer siempre la factura en [[coste_de_energia]], [[coste_de_potencia]] y [[costes_adicionales_y_peajes]] antes de proyectar ahorros. Aplicar la reducción solo sobre el componente afectado.

#### Mini-ejemplo

Factura real: 70 EUR. [[coste_de_energia]] = 45 EUR, [[coste_de_potencia]] = 15 EUR, [[costes_adicionales_y_peajes]] = 10 EUR. Una reducción del 20 % del consumo ahorra 20 % de 45 = 9 EUR, es decir, el 12,9 % de la factura total, no el 20 %.

**Por qué parece correcto**

Control 1: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

**Mini-ejemplo de contraste**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

### Error 2: concluir que la factura solo depende del consumo mensual

#### Por qué parece correcto

Cada mes se recibe una factura con un importe y se sabe cuánto se ha consumido. Parece lógico que mayor consumo implique mayor factura de forma proporcional.

#### Por qué es incorrecto

El [[coste_de_potencia]] depende de los [[días del periodo de facturación|dias]] y de la [[potencia_contratada]], no del consumo. Dos meses con igual consumo pero distinto número de días tendrán distinto [[coste_total_de_la_factura]] aunque el [[coste_de_energia]] sea idéntico.

#### Señal de detección

Dos facturas con igual consumo en kWh pero importes totales distintos sin cambio de tarifa.

#### Corrección conceptual

Verificar siempre los [[días del periodo de facturación|dias]] antes de comparar facturas. El [[coste_de_potencia]] varía linealmente con los días: 31 días cuesta un 3,3 % más que 30 días.

#### Mini-ejemplo

Enero (31 días): [[coste_de_potencia]] = 4,6 × 0,11 × 31 = 15,69 EUR. Febrero (28 días): [[coste_de_potencia]] = 4,6 × 0,11 × 28 = 14,17 EUR. Diferencia de 1,52 EUR sin cambio de consumo ni de contrato.

## Errores de modelo

**Por qué parece correcto**

Control 6: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Por qué es incorrecto**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Señal de detección**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

**Corrección conceptual**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Mini-ejemplo de contraste**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

### Error 3: comparar periodos no equivalentes sin normalizar

#### Por qué parece correcto

La comparación mes a mes parece natural; la factura llega mensualmente y el usuario compara con la del mes anterior o del mismo mes del año pasado.

#### Por qué es incorrecto

El modelo simplificado solo es válido para comparaciones entre periodos equivalentes. Si los [[días del periodo de facturación|dias]] difieren en más de 3 o la temperatura media mensual difiere en más de 5 °C, el error del modelo puede superar el ahorro que se pretende medir.

#### Señal de detección

El [[ahorro_porcentual]] calculado varía significativamente (más de 3 puntos porcentuales) entre distintos pares de meses comparados que deberían mostrar el mismo ahorro si la medida fuera consistente.

#### Corrección conceptual

Normalizar por día antes de comparar (dividir [[coste_total_de_la_factura]] entre [[días del periodo de facturación|dias]]). Para comparaciones interanuales, usar el mismo mes del año anterior con condiciones equivalentes de ocupación.

#### Mini-ejemplo

Enero base: 85 EUR / 31 días = 2,74 EUR/día. Enero nuevo: 78 EUR / 28 días = 2,79 EUR/día. El [[coste_del_escenario_nuevo]] tiene coste diario mayor, no menor; la medida no ha producido ahorro cuando se normaliza correctamente.

**Por qué parece correcto**

Control 11: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Por qué es incorrecto**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

**Señal de detección**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Corrección conceptual**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Mini-ejemplo de contraste**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

### Error 4: ignorar el peso del término fijo al proyectar ahorros

#### Por qué parece correcto

Las campañas de ahorro expresan el potencial en porcentaje de consumo ("ahorra un 20 % de energía"). Parece directo trasladar ese porcentaje a la factura.

#### Por qué es incorrecto

El [[coste_de_potencia]] y los [[costes_adicionales_y_peajes]] son inelásticos respecto al consumo. Si representan el 35 % de la factura, el [[ahorro_porcentual]] máximo posible actuando solo sobre [[coste_de_energia]] es del 65 % de lo proyectado.

#### Señal de detección

El ahorro en euros observado en la factura es sistemáticamente inferior al proyectado multiplicando el porcentaje de reducción de consumo por el [[coste_del_escenario_de_referencia]].

#### Corrección conceptual

Calcular el [[ahorro_porcentual]] usando los valores completos de [[coste_del_escenario_de_referencia]] y [[coste_del_escenario_nuevo]] que incluyan los tres componentes.

#### Mini-ejemplo

Se proyecta un ahorro del 25 % sobre 70 EUR, que serían 17,5 EUR. Pero [[coste_de_potencia]] más [[costes_adicionales_y_peajes]] suman 25 EUR y no se reducen. El ahorro real máximo es el 25 % de los 45 EUR de [[coste_de_energia]], es decir 11,25 EUR, el 16 % de la factura total.

## Errores matemáticos

**Por qué parece correcto**

Control 16: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

**Por qué es incorrecto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Señal de detección**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Corrección conceptual**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Mini-ejemplo de contraste**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.

### Error 5: bajar la potencia contratada sin verificar los picos reales

#### Por qué parece correcto

El [[coste_de_potencia]] no depende del consumo; parece un coste fácil de reducir simplemente cambiando el valor de la [[potencia_contratada]] en el contrato.

#### Por qué es incorrecto

La [[potencia_contratada]] es también el techo de potencia simultánea disponible. Si se baja por debajo del pico real de demanda del hogar, el interruptor de control de potencia (ICP) salta y corta el suministro en los momentos de mayor uso.

#### Señal de detección

Cortes de suministro al encender simultáneamente cocina eléctrica, lavavajillas y climatización.

#### Corrección conceptual

Registrar los picos de demanda simultánea durante al menos un mes completo en estación de alta demanda. Fijar la nueva [[potencia_contratada]] al menos un 10–15 % por encima del pico máximo observado.

#### Mini-ejemplo

Hogar con cocina (3 kW) + lavavajillas (1,8 kW) + climatizador (1,5 kW) simultáneos = 6,3 kW pico. Bajar la [[potencia_contratada]] de 6,9 kW a 5,75 kW causaría cortes; solo sería seguro bajar a 3,45 kW si nunca se usan varios aparatos a la vez.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.

**Mini-ejemplo de contraste**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

### Error 6: atribuir el ahorro a la medida equivocada sin desglose

#### Por qué parece correcto

Si se instala un nuevo sistema y la factura baja el mes siguiente, la conexión causal parece obvia: el sistema nuevo es la causa del ahorro.

#### Por qué es incorrecto

El [[coste_total_de_la_factura]] puede cambiar por múltiples causas simultáneas: menos [[días del periodo de facturación|dias]], temperatura más suave, menor ocupación o variación del [[precio de la energía por franja|precio_i]]. Sin controlar estas variables, no se puede atribuir el cambio a una medida concreta.

#### Señal de detección

El [[ahorro_porcentual]] varía más de 5 puntos porcentuales entre distintos periodos de comparación que deberían mostrar el mismo efecto de la medida.

#### Corrección conceptual

Comparar el [[coste_del_escenario_nuevo]] con el [[coste_del_escenario_de_referencia]] en periodos equivalentes. Si no es posible controlar todas las variables, repetir la comparación en varios periodos y buscar consistencia estadística.

#### Mini-ejemplo

Factura de marzo (post-medida): 55 EUR. Factura de febrero (pre-medida): 80 EUR. Diferencia aparente: −25 EUR (−31 %). Pero febrero tiene 28 días y marzo 31; la temperatura de marzo es 8 °C más alta; y hay 3 días menos de ocupación. El ahorro atribuible a la medida puede ser cero.

## Regla de autocontrol rápido

Antes de concluir que existe ahorro real atribuible a una medida:

1. Verificar igualdad de [[días del periodo de facturación|dias]] o normalizar por día.
2. Comprobar que [[coste_del_escenario_de_referencia]] y [[coste_del_escenario_nuevo]] son comparables en servicio, temperatura y ocupación.
3. Descomponer en [[coste_de_energia]], [[coste_de_potencia]] y [[costes_adicionales_y_peajes]]; identificar qué componente cambia.
4. Calcular [[ahorro_porcentual]] sobre [[coste_total_de_la_factura]] completo.
5. Confirmar la tendencia en al menos dos periodos equivalentes.

**Por qué parece correcto**

Control 26: En Coste de la electricidad, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Por qué es incorrecto**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Señal de detección**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.

**Corrección conceptual**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Mini-ejemplo de contraste**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.