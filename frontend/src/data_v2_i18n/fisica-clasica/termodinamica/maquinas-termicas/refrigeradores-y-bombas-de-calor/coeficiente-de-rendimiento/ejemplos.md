# Ejemplo tipo examen

## Enunciado

Un refrigerador doméstico mantiene el interior a menos 15 grados Celsius ([[T_C]] de 258 K) mientras el condensador opera a 35 grados Celsius ([[T_H]] de 308 K). El compresor consume 150 W de potencia eléctrica. Determinar el COP de Carnot de refrigeración, el COP de Carnot de bomba de calor, la capacidad máxima de refrigeración y el calor rechazado al ambiente suponiendo operación reversible.

## Datos

- Temperatura del foco frío [[T_C]] de 258 K, correspondiente a menos 15 grados Celsius (congelador)
- Temperatura del foco caliente [[T_H]] de 308 K, correspondiente a 35 grados Celsius (condensador)
- Trabajo consumido [[W]] de 150 W de potencia eléctrica del compresor
- Se buscan: [[COP_ref]] de Carnot, [[COP_bc]] de Carnot, [[Q_C]] y [[Q_H]]

## Definición del sistema

Sistema cerrado formado por el fluido refrigerante que recorre un ciclo invertido reversible de Carnot entre dos focos térmicos a temperaturas constantes, extrayendo calor del interior del refrigerador y entregándolo al ambiente exterior.

## Modelo físico

Se asume ciclo de Carnot invertido completamente reversible entre [[T_H]] y [[T_C]], sin pérdidas por fricción, caídas de presión ni diferencias finitas de temperatura en los intercambiadores. Los focos térmicos mantienen temperatura constante durante todo el proceso. El [[COP_ref]] depende exclusivamente del cociente de temperaturas absolutas.

## Justificación del modelo

El ciclo de Carnot invertido es el modelo termodinámico de referencia para refrigeración porque establece el COP máximo teórico con una expresión cerrada que depende únicamente de las temperaturas absolutas de los focos. Se elige este modelo porque permite calcular el techo de eficiencia y dimensionar la capacidad máxima de refrigeración sin necesidad de especificar el refrigerante ni los detalles del ciclo. Es apropiado cuando se busca una estimación del límite superior y cuando las temperaturas de los focos están bien definidas.

## Resolución simbólica

El COP de Carnot de refrigeración se obtiene de:

{{f:cop_carnot_ref}}

El COP de Carnot de bomba de calor se obtiene de:

{{f:cop_carnot_bc}}

La capacidad de refrigeración se calcula mediante la definición de COP de refrigeración:

{{f:cop_refrigeracion}}

El calor entregado al foco caliente se puede calcular también desde la definición de COP de bomba de calor:

{{f:cop_bomba_calor}}

El calor rechazado al ambiente se obtiene del balance energético:

{{f:balance_energetico_cop}}

La verificación de coherencia se realiza con:

{{f:relacion_cop}}

## Sustitución numérica

Para calcular el COP de Carnot de refrigeración, se divide [[T_C]] entre la diferencia [[T_H]] menos [[T_C]], es decir, 258 dividido entre 308 menos 258, que es 258 dividido entre 50, dando 5.16.

Para el COP de Carnot de bomba de calor, se divide [[T_H]] entre la misma diferencia, es decir, 308 dividido entre 50, dando 6.16. La verificación es directa: 5.16 más 1 da 6.16, coherente.

La capacidad máxima de refrigeración es [[COP_ref]] multiplicado por [[W]], es decir, 5.16 multiplicado por 150 W, dando 774 W de calor extraído del interior.

El calor rechazado al ambiente es [[Q_C]] más [[W]], es decir, 774 más 150, dando 924 W entregados al ambiente.

## Validación dimensional

El COP es adimensional: [K] dividido entre [K] da [1]. La potencia de refrigeración tiene unidades de [W], coherente con potencia. El calor rechazado tiene las mismas unidades de potencia.

## Interpretación física

El COP de 5.16 significa que, en condiciones ideales, por cada vatio de potencia eléctrica consumida se podrían extraer 5.16 vatios de calor del interior del refrigerador. El ambiente recibiría 6.16 vatios por cada vatio consumido. En la práctica, un refrigerador doméstico real con estas temperaturas alcanza un COP de 2 a 3, lo que representa un 40 a 60 % del valor ideal. La diferencia se debe a las irreversibilidades del ciclo de compresión de vapor real: compresión no isentrópica, caídas de presión en tuberías, diferencias finitas de temperatura en evaporador y condensador, y pérdidas mecánicas del compresor. Si la temperatura del condensador subiera de 308 a 318 K, el COP de Carnot caería de 5.16 a 4.30, un descenso del 17 % que ilustra la sensibilidad del COP a la temperatura del foco caliente.

# Ejemplo de aplicación real

## Contexto

Una bomba de calor geotérmica extrae calor del subsuelo a [[T_C]] de 283 K (10 grados Celsius) para calentar una vivienda a [[T_H]] de 318 K (45 grados Celsius, temperatura del circuito de calefacción). Se desea estimar el COP máximo teórico y compararlo con el rendimiento de una caldera de gas.

## Estimación física

El COP de Carnot de bomba de calor se calcula como [[T_H]] dividido entre la diferencia [[T_H]] menos [[T_C]], es decir, 318 dividido entre 318 menos 283, que da 318 dividido entre 35, aproximadamente 9.1. Este es el techo termodinámico. Las bombas de calor geotérmicas reales alcanzan COP de 3.5 a 5, representando un 38 a 55 % del valor de Carnot.

{{f:cop_carnot_bc}}

Con un [[COP_bc]] real de 4, cada kWh de electricidad entrega 4 kWh de calor a la vivienda. Una caldera de gas de condensación entrega como máximo 0.98 kWh térmicos por kWh de gas. Si la electricidad cuesta tres veces más que el gas por kWh, el coste de calefacción con bomba de calor es 3 dividido entre 4, es decir, 0.75 unidades monetarias por kWh térmico, mientras que la caldera cuesta 1 dividido entre 0.98, es decir, 1.02 unidades por kWh térmico. La bomba de calor resulta un 26 % más económica.

## Interpretación

La estimación muestra que incluso con irreversibilidades reales, las bombas de calor geotérmicas son significativamente más eficientes y económicas que las calderas de gas cuando la diferencia de temperaturas entre fuente y sumidero es moderada. La ventaja se amplifica en climas templados y con fuentes geotérmicas estables. La comparación directa con el COP de Carnot permite evaluar cuánto margen de mejora tecnológica queda disponible y justificar la inversión inicial más elevada de la bomba de calor.
