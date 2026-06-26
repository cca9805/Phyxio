## Modelo ideal

El modelo ideal es un cuerpo rigido que gira alrededor de un eje fijo, sin rozamiento apreciable y bajo gravedad uniforme. La coordenada del movimiento es [[theta]], la inercia relevante es [[I_O]] y el torque restaurador procede del peso aplicado en el centro de masas a distancia [[d]] del pivote.

## Hipótesis

El cuerpo no se deforma, el pivote no se desplaza, [[g]] es constante y la distribucion de masa no cambia durante la oscilacion. Para usar [[T0]] se supone ademas que el angulo es pequeno, de modo que el modelo lineal representa bien el movimiento. Para amplitudes finitas se conserva la ecuacion no lineal o la energia [[E]].

## Dominio de validez cuantitativo

El modelo exige [[I_O]] > 0, [[m]] > 0, [[g]] > 0 y [[d]] > 0. Si se usa Steiner, debe cumplirse [[I_O]] >= [[I_cm]]. Como criterio de orden de magnitud, la aproximacion lineal suele ser aceptable para amplitudes menores que 0,1 rad; por encima de 0,3 rad conviene tratar la correccion no lineal del periodo.

Tambien debe verificarse que la amortiguacion sea pequena durante la medicion. Si el periodo se mide durante pocos ciclos y la amplitud apenas cambia, el modelo conservativo es razonable. Si la amplitud cae rapidamente, el resultado de [[T0]] deja de ser una propiedad puramente geometrica e inercial.

## Señales de fallo del modelo

El modelo falla si el pivote tiene holgura, si el cuerpo flexiona, si el centro de masas no esta bien localizado o si el periodo cambia al repetir la medida con la misma amplitud. Tambien falla si se usa [[I_cm]] en lugar de [[I_O]], porque entonces se ignora el eje real de giro.

Otra señal de fallo es que el periodo dependa mucho de la amplitud sin que el calculo lo reconozca. En ese caso no falla la fisica del pendulo, sino la eleccion del modelo lineal. El dato experimental esta pidiendo pasar al enfoque energetico o no lineal.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo alternativo es cuando hay rozamiento apreciable, amplitudes grandes, pivote elastico, cuerpo flexible o acoplamiento con otros modos. Entonces se usan modelos amortiguados, integracion numerica de la ecuacion no lineal, mecanica lagrangiana con disipacion o modelos de cuerpo deformable.

Si el objetivo es solo estimar el periodo de pequenas oscilaciones, basta [[T0]]. Si el objetivo es ajustar datos de amplitud finita o estudiar transferencia de energia, conviene usar [[E]] y la ecuacion no lineal. Si el cuerpo vibra internamente, ya no es un pendulo rigido de un grado de libertad.

## Comparación operativa

El pendulo fisico basico identifica el periodo lineal. El avanzado pregunta por que ese periodo depende de la distribucion de masa, como se obtiene [[I_O]] desde [[I_cm]], que significa [[leq]] y cuando deja de bastar la linealizacion. Esa diferencia lo hace mas cercano al laboratorio universitario.

Operativamente, primero se fija el eje y se calcula [[I_O]]. Despues se calcula [[T0]]. Finalmente se comprueba la amplitud: si el angulo es pequeno, el resultado se cierra; si no lo es, se explica el limite del periodo lineal y se usa energia o ecuacion no lineal para interpretar el experimento.
