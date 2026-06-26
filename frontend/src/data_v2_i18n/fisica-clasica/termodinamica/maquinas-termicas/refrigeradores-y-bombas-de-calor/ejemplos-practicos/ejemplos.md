# Ejemplo tipo examen

## Enunciado

Un refrigerador doméstico mantiene el interior del congelador a menos 18 grados Celsius mientras el condensador opera a 35 grados Celsius. El compresor consume 120 W de potencia eléctrica y tiene un rendimiento isentrópico del 75 %. El COP real medido del sistema es 2.8. Determinar el COP de Carnot, la fracción de Carnot, la capacidad de refrigeración, el calor rechazado al ambiente y el consumo eléctrico diario si el compresor funciona un promedio de 8 horas al día.

## Datos

- Temperatura del congelador: menos 18 grados Celsius, equivalente a [[T_C]] de 255 K
- Temperatura del condensador: 35 grados Celsius, equivalente a [[T_H]] de 308 K
- Potencia del compresor [[W_comp]] de 120 W
- [[COP_real]] medido de 2.8
- Tiempo de operación diario: 8 horas
- Se buscan: [[COP_Carnot]], [[eta_Carnot]], [[Q_C]], [[Q_H]] y consumo diario

## Definición del sistema

Sistema cerrado formado por el refrigerante que circula en un ciclo de compresión de vapor entre el evaporador (a temperatura del congelador) y el condensador (a temperatura ambiente), con compresor eléctrico y válvula de expansión. Operación en estado estacionario.

## Modelo físico

Se aplica el modelo de refrigeración real entre [[T_H]] y [[T_C]], con [[COP_real]] dado como dato medido. El [[COP_Carnot]] se calcula como referencia teórica para evaluar la eficiencia del sistema. El balance energético establece que [[Q_H]] es la suma de [[Q_C]] y [[W_comp]].

## Justificación del modelo

El modelo de COP real con referencia al COP de Carnot es apropiado porque los datos incluyen el COP medido del sistema y las temperaturas de los focos. El COP de Carnot proporciona la referencia teórica para evaluar la calidad del diseño. El balance energético permite verificar la coherencia de los resultados.

## Resolución simbólica

El COP de Carnot de refrigeración se calcula como:

{{f:cop_carnot_referencia}}

La fracción de Carnot se obtiene de:

{{f:fraccion_carnot}}

La capacidad de refrigeración se calcula multiplicando el COP real por la potencia:

{{f:cop_real_refrigeracion}}

El calor rechazado al ambiente se obtiene del balance energético:

{{f:balance_energetico_practico}}

El consumo energético diario se calcula como:

{{f:consumo_energetico}}

Para verificación, el COP de bomba de calor se puede calcular como:

{{f:cop_real_bomba_calor}}

## Sustitución numérica

El COP de Carnot es [[T_C]] dividido entre la diferencia [[T_H]] menos [[T_C]], es decir, 255 dividido entre 308 menos 255, que da 255 dividido entre 53, resultando 4.81.

La fracción de Carnot es [[COP_real]] dividido entre [[COP_Carnot]] multiplicado por 100, es decir, 2.8 dividido entre 4.81 multiplicado por 100, dando 58.2 %. Esto indica un diseño eficiente dentro del rango esperado.

La capacidad de refrigeración es [[COP_real]] multiplicado por [[W_comp]], es decir, 2.8 multiplicado por 120, dando [[Q_C]] de 336 W.

El calor rechazado al ambiente es [[Q_C]] más [[W_comp]], es decir, 336 más 120, dando [[Q_H]] de 456 W.

El consumo diario es 120 W multiplicado por 8 horas, dando 960 Wh, equivalente a 0.96 kWh por día. En un mes de 30 días, el consumo es de 28.8 kWh.

## Validación dimensional

[[COP_Carnot]] es kelvin dividido entre kelvin, adimensional. [[Q_C]] es adimensional por vatios, dando vatios. [[Q_H]] es vatios más vatios, dando vatios. El consumo es vatios por horas, dando vatios hora. Todas las dimensiones son coherentes.

## Interpretación física

El [[COP_real]] de 2.8 significa que cada vatio de electricidad extrae 2.8 vatios de calor del congelador. La fracción de Carnot del 58 % indica un sistema bien diseñado que aprovecha más de la mitad del potencial termodinámico. El calor rechazado [[Q_H]] de 456 W supera la capacidad frigorífica [[Q_C]] de 336 W en exactamente los 120 W del compresor, cumpliendo el balance energético. El consumo mensual de 28.8 kWh es típico de un refrigerador eficiente clasificación A o superior en la etiqueta energética europea. La verificación con el COP de bomba de calor da 456 dividido entre 120, que es 3.8, y efectivamente 3.8 menos 2.8 es 1.0, confirmando la relación fundamental entre ambos COP en el límite ideal. La diferencia real puede ser ligeramente distinta de uno debido a las irreversibilidades asimétricas del ciclo de compresión de vapor.

# Ejemplo de aplicación real

## Contexto

Una empresa instala una bomba de calor aerotérmica para calefacción de una oficina de 120 metros cuadrados. La demanda de calefacción es de 6000 W cuando la temperatura exterior es de 2 grados Celsius y la interior se mantiene a 22 grados Celsius. El fabricante indica un COP de 3.2 a estas condiciones. Se quiere verificar si este valor es coherente con la termodinámica y estimar el coste eléctrico mensual a 0.15 euros por kWh suponiendo 10 horas diarias de funcionamiento.

## Estimación física

Como estimación de orden de magnitud, las temperaturas de los focos son [[T_C]] de 275 K (exterior) y [[T_H]] de 295 K (interior). El [[COP_Carnot]] de refrigeración es aproximadamente 275 dividido entre 20, que da 13.75. El COP de Carnot de bomba de calor es 13.75 más 1, dando 14.75. La fracción de Carnot es 3.2 dividido entre 14.75, que da un valor razonable del 21.7 %. Este orden de magnitud confirma que el COP declarado es termodinámicamente posible.

{{f:fraccion_carnot}}

Una fracción de Carnot del 22 % es baja pero no imposible para una bomba de calor aerotérmica con diferencia de temperatura pequeña. Las bombas de calor aerotérmicas típicas alcanzan fracciones del 20 al 35 % debido a las pérdidas en los intercambiadores de aire exterior y la descongelación del evaporador.

La potencia eléctrica necesaria es [[Q_H]] dividido entre [[COP_real]], es decir, 6000 dividido entre 3.2, dando [[W_comp]] de 1875 W. El calor extraído del exterior es [[Q_H]] menos [[W_comp]], es decir, 6000 menos 1875, dando [[Q_C]] de 4125 W.

{{f:balance_energetico_practico}}

El consumo energético diario [[E_dia]] es 1875 W multiplicado por 10 horas, dando 18750 Wh o 18.75 kWh al día. El consumo mensual es 18.75 por 30, dando 562.5 kWh. El coste es 562.5 por 0.15, resultando 84.4 euros al mes.

{{f:consumo_energetico}}

## Interpretación

El COP de 3.2 es termodinámicamente coherente: la fracción de Carnot del 22 % está dentro del rango aceptable para bombas de calor aerotérmicas a baja diferencia de temperatura. El sistema extrae 4125 W del aire exterior y añade 1875 W del compresor para entregar 6000 W al interior, cumpliendo el balance energético. El [[E_dia]] de 18.75 kWh confirma el nivel de consumo. Comparado con calefacción eléctrica directa (COP de 1), la bomba de calor reduce el consumo eléctrico a menos de un tercio. El coste mensual de 84.4 euros es competitivo frente a calefacción de gas en muchas regiones europeas.
