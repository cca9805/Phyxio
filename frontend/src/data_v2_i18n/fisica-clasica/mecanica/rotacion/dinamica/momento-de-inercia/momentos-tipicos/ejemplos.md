# Ejemplo tipo examen

## Enunciado
Compara el momento de inercia [[I]] de un disco macizo y de una esfera maciza que tienen la misma masa [[m]] y el mismo radio [[R]]. Ambos giran alrededor de su eje de simetria central. Determina cual presenta mayor resistencia al cambio de velocidad angular y explica por que el resultado no depende solo de la masa total.

## Datos
- [[m]] = 8 kg
- [[R]] = 0.20 m
- Eje de giro: eje de simetria central en ambos cuerpos

Ademas, se pide comentar que ocurriria si se mantuviera [[m]] constante y se duplicara [[R]].

## Definicion del sistema
Se comparan dos solidos rigidos ideales con igual [[m]] y [[R]], pero con distinta distribucion interna de masa respecto al eje. El sistema no incluye rozamiento ni deformacion, porque el objetivo es aislar el efecto geometrico sobre [[I]].

El problema es comparativo y no de dinamica completa: no se solicita calcular torque ni aceleracion angular, sino identificar como cambia [[I]] al cambiar la geometria.

## Modelo fisico
Para el disco macizo:

{{f:disco-macizo}}

Para la esfera maciza:

{{f:esfera-maciza}}

Como referencia transversal para una geometria distinta con el mismo [[m]] y [[R]], un aro fino cumple:

{{f:aro-fino}}

## Justificacion del modelo
El modelo de solido rigido homogeneo es adecuado cuando la pieza real tiene densidad aproximadamente uniforme y no presenta huecos internos grandes. En esas condiciones, las expresiones tipicas capturan bien la distribucion de masa dominante.

Se justifica usar eje central porque el enunciado lo especifica y porque ese eje coincide con el definido en las expresiones elegidas. Si el eje estuviera desplazado, estas formulas ya no representarian correctamente el sistema y habria que usar un tratamiento de ejes paralelos.

Tambien se asume que el problema es cuasiestatico de comparacion geometrica: no hay necesidad de incluir perdidas por friccion ni deformaciones elasticas para responder la pregunta principal.

## Resolucion simbolica
Con la misma [[m]] y [[R]], la diferencia entre disco y esfera queda determinada por el factor geometrico de cada expresion. El disco tiene coeficiente 1/2 y la esfera 2/5, por lo que el disco presenta mayor [[I]].

La comparacion simbolica se puede leer como cociente de inercias: el disco supera a la esfera en un 25 por ciento para iguales [[m]] y [[R]]. Esta conclusion es robusta porque no depende de valores numericos concretos, solo de la forma.

Si [[R]] se duplicara manteniendo [[m]], ambos [[I]] se multiplicarian aproximadamente por cuatro. La jerarquia entre geometrias se mantiene, pero el costo dinamico absoluto aumenta de forma notable.

Para conectar con otros cuerpos del catalogo, una barra delgada usa [[L]] y una placa rectangular usa [[a]] y [[b]]:

{{f:barra-centro}}

{{f:placa-rectangular}}

Esto refuerza la idea de que la longitud caracteristica relevante depende de la geometria.

## Sustitucion numerica
Disco:

{{f:disco-macizo}}

Esfera:

{{f:esfera-maciza}}

Resultado: para los mismos [[m]] y [[R]], el disco tiene un [[I]] un 25 por ciento mayor que la esfera.

Como contraste conceptual, si ambos cuerpos fueran reemplazados por un aro fino con los mismos [[m]] y [[R]], el [[I]] seria aun mayor que en disco y esfera, mostrando que desplazar masa hacia la periferia incrementa fuertemente la inercia.

## Validacion dimensional
En ambos casos, [[I]] queda en unidades SI de kg m^2, consistentes con la definicion de momento de inercia.

La validacion dimensional confirma coherencia matematica, pero no reemplaza la validacion fisica. El resultado tambien debe respetar la intuicion estructural de distribucion de masa.

## Interpretacion fisica
El resultado muestra que no basta conocer [[m]]: la geometria decide cuanta parte de la masa actua a mayor distancia efectiva del eje. Por eso, con igual [[m]] y [[R]], el disco resulta mas inercial que la esfera.

En terminos de diseno, una geometria con menor [[I]] permite arranques y cambios de velocidad angular mas rapidos para el mismo actuador. Una geometria con mayor [[I]] filtra perturbaciones y reduce variaciones bruscas de velocidad, pero exige mayor esfuerzo de aceleracion.

La lectura no es solo numerica. El 25 por ciento obtenido no es un dato aislado: expresa un mecanismo de distribucion de masa. Si el sistema real se aparta de la homogeneidad ideal, la diferencia exacta puede cambiar, pero la logica causal permanece.

Un chequeo cualitativo adicional es imaginar una redistribucion de masa sin cambiar [[m]]: si se desplaza masa hacia la periferia, [[I]] debe aumentar; si se concentra hacia el eje, [[I]] debe disminuir. Esta prueba mental confirma que la interpretacion se basa en causalidad fisica y no solo en una sustitucion numerica.

Tambien es importante recordar el dominio del modelo. Si el cuerpo real tiene huecos, nervaduras o componentes no homogeneos, la comparacion exacta entre factores geometricos cambia. Aun asi, la direccion del efecto se conserva y permite decisiones preliminares de diseno.

# Ejemplo de aplicacion real

## Contexto
En una planta de envasado, una linea con paradas frecuentes usa rodillos para arrastre de cinta. El equipo de mantenimiento debe decidir entre rodillos de pared delgada y rodillos macizos con igual [[m]] y [[R]].

La decision impacta consumo electrico, calentamiento del motor y tiempo de ciclo. El problema no es academico: la geometria del rodillo afecta costos operativos diarios.

## Estimacion fisica
Con igual [[m]] y [[R]], se modela el rodillo de pared delgada como aro fino y el rodillo macizo como disco:

{{f:aro-fino}}

{{f:disco-macizo}}

La estimacion muestra que el rodillo de pared delgada tiene un [[I]] aproximadamente doble que el rodillo macizo. Si el torque disponible del motor se mantiene, la aceleracion angular sera menor para el rodillo hueco, y los transitorios de arranque se alargaran.

En una linea con 100 arranques por hora, esta diferencia puede traducirse en picos de corriente mas altos y mayor fatiga termica. Como orden de magnitud, duplicar [[I]] en el mismo regimen de servicio suele elevar la demanda energetica en transitorios y reducir margen de respuesta ante cambios rapidos de consigna.

Para extender el criterio a otras piezas lineales o placas, pueden usarse tambien modelos con [[L]], [[a]] y [[b]] cuando la geometria real se aproxime a barra o placa:

{{f:barra-extremo}}

{{f:placa-rectangular}}

## Interpretacion
Si el objetivo principal es eficiencia y respuesta rapida, conviene priorizar geometria de menor [[I]] para la misma [[m]] y [[R]]. Si el objetivo es suavizar fluctuaciones y estabilizar velocidad bajo perturbaciones, una geometria con [[I]] mayor puede ser beneficiosa.

La decision final debe balancear dinamica, temperatura y vida util. En ciclos intensivos de arranque y parada, reducir [[I]] suele disminuir carga termica y mantenimiento. En funcionamiento continuo con perturbaciones, aumentar [[I]] puede mejorar estabilidad.

Este ejemplo ilustra el valor practico de momentos tipicos: no solo permiten calcular, sino justificar elecciones de diseno con criterio fisico verificable.