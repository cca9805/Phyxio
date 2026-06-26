# Ejemplo tipo examen


## Enunciado

Se dispone de un condensador de placas circulares paralelas que se está cargando con una corriente constante. Se desea calcular el flujo eléctrico [[flujo_electrico]] a través de una superficie situada entre las placas y determinar la circulación del campo magnético [[circulacion_magnetica]] en un camino circular que rodea el espacio intermedio. Se debe verificar la consistencia entre la corriente de conducción [[corriente_encerrada]] que llega a las placas y la corriente de desplazamiento generada por la variación del flujo eléctrico [[variacion_del_flujo_electrico]] entre ellas, aplicando la ley de Ampère-Maxwell.

## Datos

- Radio de las placas circulares: cinco centimeters.
- Intensidad de la corriente de carga [[corriente_encerrada]]: dos amperios.
- Permitividad eléctrica del vacío [[epsilon0]]: valor constante estándar.
- Permeabilidad magnética del vacío [[mu0]]: valor constante estándar.
- Se asume que el campo eléctrico es uniforme entre las placas y nulo fuera de ellas (aproximación de condensador ideal).

## Definición del sistema

El sistema físico está compuesto por el espacio vacío comprendido entre las dos placas conductoras del condensador. Definimos una superficie cerrada de Gauss (forma cilíndrica) que encierra una de las placas para analizar la carga [[q_enc]]. Asimismo, definimos una superficie abierta (disco plano) situada exactamente en el centro del condensador, cuyo contorno es un camino circular de radio igual al de las placas, donde calcularemos la circulación magnética [[circulacion_magnetica]]. El entorno es el circuito externo que suministra la corriente [[corriente_encerrada]]. Se considera un régimen de carga lento pero dinámico.

## Modelo físico

El problema se resuelve utilizando el modelo de **electrodinámica clásica en forma integral**. Las leyes fundamentales aplicables son la ley de Gauss para determinar la relación entre carga y flujo, y la ley de Ampère-Maxwell para vincular la circulación con las corrientes y variaciones de campo. Las ecuaciones núcleo son:

{{f:gauss_e}}

{{f:ampere_maxwell}}

Donde la variación temporal del flujo eléctrico [[variacion_del_flujo_electrico]] actúa como una fuente efectiva de magnetismo en ausencia de portadores de carga reales entre las placas.

## Justificación del modelo

Este modelo es **válido** porque las dimensiones del sistema son mucho mayores que las escalas atómicas y las velocidades de carga son muy inferiores a la velocidad de la luz. **Se asume** que el campo eléctrico es perfectamente uniforme entre las placas, lo que simplifica el cálculo del flujo eléctrico [[flujo_electrico]]. **Se considera** que no hay pérdidas por radiación ni efectos de borde significativos. **Porque** el condensador está en proceso de carga, la ley de Ampère original (estática) fallaría al no haber corriente de conducción entre las placas; por tanto, el término de Maxwell basado en [[variacion_del_flujo_electrico]] es estrictamente necesario para mantener la coherencia física del sistema.

## Resolución simbólica

En esta etapa resolvemos el balance de flujos y circulaciones mediante las ecuaciones núcleo del leaf.

Primero, aplicamos la ley de Gauss para electricidad para relacionar la carga acumulada en la placa con el flujo eléctrico [[flujo_electrico]] que atraviesa la superficie entre las placas:

{{f:gauss_e}}

De aquí, derivando respecto al tiempo, obtenemos que la variación del flujo eléctrico [[variacion_del_flujo_electrico]] es igual a la corriente de carga [[corriente_encerrada]] dividida por la permitividad [[epsilon0]].

A continuación, aplicamos la ley de Ampère-Maxwell para la circulación sobre el camino circular que rodea el condensador. Como entre las placas no hay portadores físicos, la corriente encerrada real [[corriente_encerrada]] en esa superficie específica es cero, pero existe el término de desplazamiento:

{{f:ampere_maxwell}}

Para asegurar la consistencia del sistema, verificamos que el flujo magnético [[flujo_magnetico]] total a través de la superficie cerrada elegida es cero, tal como dicta la ley de Gauss para el magnetismo:

{{f:gauss_b}}

Asimismo, como el campo magnético en este estado cuasi-estacionario no induce una variación apreciable de flujo magnético [[flujo_magnetico]] en el tiempo, la [[emf]] inducida por la ley de Faraday-Lenz es despreciable frente a los potenciales de carga:

{{f:faraday}}

Sustituyendo la relación anterior de Ampère, observamos que el término de desplazamiento compensa exactamente la ausencia de real corriente, permitiendo que la circulación magnética [[circulacion_magnetica]] sea consistente con la que se mediría en el cable de alimentación. El balance del flujo eléctrico [[flujo_electrico]] y la circulación [[circulacion_magnetica]] garantiza la continuidad de la física.

## Sustitución numérica

Para una corriente de carga de dos amperios:
- La carga acumulada crece a un ritmo de dos culombios por segundo.
- La variación del flujo eléctrico [[variacion_del_flujo_electrico]] resulta ser el cociente entre dos amperios y la constante [[epsilon0]], lo que equivale aproximadamente a un valor de 2.26e11 voltios metro por segundo.
- Al calcular el término de desplazamiento multiplicando [[epsilon0]] por [[variacion_del_flujo_electrico]], recuperamos exactamente el valor de dos amperios.
- La circulación magnética [[circulacion_magnetica]] calculada mediante la ley de Ampère-Maxwell es igual al producto de [[mu0]] por la corriente efectiva de dos amperios, resultando en aproximadamente 2.51e-6 teslas metro.

## Validación dimensional

Verificamos las unidades del término de corriente de desplazamiento. La permitividad [[epsilon0]] tiene unidades de faradios por metro, y la variación de flujo eléctrico [[variacion_del_flujo_electrico]] tiene unidades de voltios-metro por segundo. Al realizar el análisis dimensional, observamos que el producto de estas magnitudes resulta en culombios por segundo. Como el culombio por segundo define el Amperio, el resultado tiene dimensiones de corriente eléctrica. Esto valida su suma directa con la corriente de conducción [[corriente_encerrada]] dentro de la integral de Ampère-Maxwell. La coherencia dimensional asegura que el término de Maxwell no es una mera corrección matemática, sino una magnitud física compatible con el flujo de carga.

## Interpretación física

El resultado demuestra que la variación del campo eléctrico actúa como una fuente de campo magnético real. Esta **interpretación causal** es fundamental porque significa que el magnetismo no solo nace de cargas en movimiento, sino también de campos eléctricos cambiantes. Por tanto, la simetría de las leyes de Maxwell indica que el cambio de un campo alimenta la existencia del otro en un ciclo infinito, lo que permite la existencia de las ondas electromagnéticas.

# Ejemplo de aplicación real


## Contexto

Se analiza el funcionamiento de un sistema de carga inalámbrica por inducción resonante para dispositivos móviles. En este sistema, una bobina primaria crea un flujo magnético [[flujo_magnetico]] variable que debe ser captado por una bobina secundaria en el teléfono para generar energía.

## Estimación física

Para un cargador estándar, la bobina emite un flujo que varía con una frecuencia de unos cien kilohercios. El **orden de magnitud** de la variación del flujo magnético [[variacion_del_flujo_magnetico]] es suficiente para inducir una fuerza electromotriz [[emf]] de unos cinco voltios en la bobina receptora. **Aproximadamente**, si el flujo cambia en un valor de 5e-5 webers en un microsegundo, la ley de Faraday predice un balance neto:

{{f:faraday}}

Este **valor razonable** permite cargar la batería del dispositivo mediante la corriente inducida resultante. La eficiencia depende críticamente de que el flujo magnético [[flujo_magnetico]] sea capturado casi en su totalidad por la superficie de la bobina secundaria.

## Interpretación

La carga inalámbrica es una aplicación directa de la ley de Faraday en su forma integral. Al integrar el campo eléctrico inducido a lo largo del bobinado del teléfono, convertimos una variación invisible de magnetismo en una corriente útil. La formulación integral permite a los ingenieros optimizar el área y el número de espiras para maximizar la [[emf]] capturada, demostrando que Maxwell no solo describió la luz, sino que sentó las bases para eliminar los cables de nuestra vida diaria.

## Conclusión

La forma integral de las ecuaciones de Maxwell es el puente definitivo entre la teoría de campos y la tecnología aplicada. Ya sea calculando la capacitancia de un condensador o la potencia de un motor de inducción, el uso de balances globales sobre superficies y trayectorias nos otorga un control preciso sobre la energía del universo, transformando leyes abstractas en soluciones para las necesidades humanas.