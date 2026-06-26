const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Compara el momento de inercia [[I]] de un disco macizo y de una esfera maciza que tienen la misma masa [[m]] y el mismo radio [[R]]. Ambos giran alrededor de su eje de simetria central. Determina cual presenta mayor resistencia al cambio de velocidad angular y explica por que el resultado no depende solo de la masa total.\r
\r
## Datos\r
- [[m]] = 8 kg\r
- [[R]] = 0.20 m\r
- Eje de giro: eje de simetria central en ambos cuerpos\r
\r
Ademas, se pide comentar que ocurriria si se mantuviera [[m]] constante y se duplicara [[R]].\r
\r
## Definicion del sistema\r
Se comparan dos solidos rigidos ideales con igual [[m]] y [[R]], pero con distinta distribucion interna de masa respecto al eje. El sistema no incluye rozamiento ni deformacion, porque el objetivo es aislar el efecto geometrico sobre [[I]].\r
\r
El problema es comparativo y no de dinamica completa: no se solicita calcular torque ni aceleracion angular, sino identificar como cambia [[I]] al cambiar la geometria.\r
\r
## Modelo fisico\r
Para el disco macizo:\r
\r
{{f:disco-macizo}}\r
\r
Para la esfera maciza:\r
\r
{{f:esfera-maciza}}\r
\r
Como referencia transversal para una geometria distinta con el mismo [[m]] y [[R]], un aro fino cumple:\r
\r
{{f:aro-fino}}\r
\r
## Justificacion del modelo\r
El modelo de solido rigido homogeneo es adecuado cuando la pieza real tiene densidad aproximadamente uniforme y no presenta huecos internos grandes. En esas condiciones, las expresiones tipicas capturan bien la distribucion de masa dominante.\r
\r
Se justifica usar eje central porque el enunciado lo especifica y porque ese eje coincide con el definido en las expresiones elegidas. Si el eje estuviera desplazado, estas formulas ya no representarian correctamente el sistema y habria que usar un tratamiento de ejes paralelos.\r
\r
Tambien se asume que el problema es cuasiestatico de comparacion geometrica: no hay necesidad de incluir perdidas por friccion ni deformaciones elasticas para responder la pregunta principal.\r
\r
## Resolucion simbolica\r
Con la misma [[m]] y [[R]], la diferencia entre disco y esfera queda determinada por el factor geometrico de cada expresion. El disco tiene coeficiente 1/2 y la esfera 2/5, por lo que el disco presenta mayor [[I]].\r
\r
La comparacion simbolica se puede leer como cociente de inercias: el disco supera a la esfera en un 25 por ciento para iguales [[m]] y [[R]]. Esta conclusion es robusta porque no depende de valores numericos concretos, solo de la forma.\r
\r
Si [[R]] se duplicara manteniendo [[m]], ambos [[I]] se multiplicarian aproximadamente por cuatro. La jerarquia entre geometrias se mantiene, pero el costo dinamico absoluto aumenta de forma notable.\r
\r
Para conectar con otros cuerpos del catalogo, una barra delgada usa [[L]] y una placa rectangular usa [[a]] y [[b]]:\r
\r
{{f:barra-centro}}\r
\r
{{f:placa-rectangular}}\r
\r
Esto refuerza la idea de que la longitud caracteristica relevante depende de la geometria.\r
\r
## Sustitucion numerica\r
Disco:\r
\r
{{f:disco-macizo}}\r
\r
Esfera:\r
\r
{{f:esfera-maciza}}\r
\r
Resultado: para los mismos [[m]] y [[R]], el disco tiene un [[I]] un 25 por ciento mayor que la esfera.\r
\r
Como contraste conceptual, si ambos cuerpos fueran reemplazados por un aro fino con los mismos [[m]] y [[R]], el [[I]] seria aun mayor que en disco y esfera, mostrando que desplazar masa hacia la periferia incrementa fuertemente la inercia.\r
\r
## Validacion dimensional\r
En ambos casos, [[I]] queda en unidades SI de kg m^2, consistentes con la definicion de momento de inercia.\r
\r
La validacion dimensional confirma coherencia matematica, pero no reemplaza la validacion fisica. El resultado tambien debe respetar la intuicion estructural de distribucion de masa.\r
\r
## Interpretacion fisica\r
El resultado muestra que no basta conocer [[m]]: la geometria decide cuanta parte de la masa actua a mayor distancia efectiva del eje. Por eso, con igual [[m]] y [[R]], el disco resulta mas inercial que la esfera.\r
\r
En terminos de diseno, una geometria con menor [[I]] permite arranques y cambios de velocidad angular mas rapidos para el mismo actuador. Una geometria con mayor [[I]] filtra perturbaciones y reduce variaciones bruscas de velocidad, pero exige mayor esfuerzo de aceleracion.\r
\r
La lectura no es solo numerica. El 25 por ciento obtenido no es un dato aislado: expresa un mecanismo de distribucion de masa. Si el sistema real se aparta de la homogeneidad ideal, la diferencia exacta puede cambiar, pero la logica causal permanece.\r
\r
Un chequeo cualitativo adicional es imaginar una redistribucion de masa sin cambiar [[m]]: si se desplaza masa hacia la periferia, [[I]] debe aumentar; si se concentra hacia el eje, [[I]] debe disminuir. Esta prueba mental confirma que la interpretacion se basa en causalidad fisica y no solo en una sustitucion numerica.\r
\r
Tambien es importante recordar el dominio del modelo. Si el cuerpo real tiene huecos, nervaduras o componentes no homogeneos, la comparacion exacta entre factores geometricos cambia. Aun asi, la direccion del efecto se conserva y permite decisiones preliminares de diseno.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
En una planta de envasado, una linea con paradas frecuentes usa rodillos para arrastre de cinta. El equipo de mantenimiento debe decidir entre rodillos de pared delgada y rodillos macizos con igual [[m]] y [[R]].\r
\r
La decision impacta consumo electrico, calentamiento del motor y tiempo de ciclo. El problema no es academico: la geometria del rodillo afecta costos operativos diarios.\r
\r
## Estimacion fisica\r
Con igual [[m]] y [[R]], se modela el rodillo de pared delgada como aro fino y el rodillo macizo como disco:\r
\r
{{f:aro-fino}}\r
\r
{{f:disco-macizo}}\r
\r
La estimacion muestra que el rodillo de pared delgada tiene un [[I]] aproximadamente doble que el rodillo macizo. Si el torque disponible del motor se mantiene, la aceleracion angular sera menor para el rodillo hueco, y los transitorios de arranque se alargaran.\r
\r
En una linea con 100 arranques por hora, esta diferencia puede traducirse en picos de corriente mas altos y mayor fatiga termica. Como orden de magnitud, duplicar [[I]] en el mismo regimen de servicio suele elevar la demanda energetica en transitorios y reducir margen de respuesta ante cambios rapidos de consigna.\r
\r
Para extender el criterio a otras piezas lineales o placas, pueden usarse tambien modelos con [[L]], [[a]] y [[b]] cuando la geometria real se aproxime a barra o placa:\r
\r
{{f:barra-extremo}}\r
\r
{{f:placa-rectangular}}\r
\r
## Interpretacion\r
Si el objetivo principal es eficiencia y respuesta rapida, conviene priorizar geometria de menor [[I]] para la misma [[m]] y [[R]]. Si el objetivo es suavizar fluctuaciones y estabilizar velocidad bajo perturbaciones, una geometria con [[I]] mayor puede ser beneficiosa.\r
\r
La decision final debe balancear dinamica, temperatura y vida util. En ciclos intensivos de arranque y parada, reducir [[I]] suele disminuir carga termica y mantenimiento. En funcionamiento continuo con perturbaciones, aumentar [[I]] puede mejorar estabilidad.\r
\r
Este ejemplo ilustra el valor practico de momentos tipicos: no solo permiten calcular, sino justificar elecciones de diseno con criterio fisico verificable.`;export{e as default};
