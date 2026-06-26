## Errores conceptuales


### Error 1: Confundir superficies cerradas con contornos abiertos

#### Por qué parece correcto
Porque en ambos casos estamos "encerrando" algo. El estudiante asocia la palabra "encerrada" de la ley de Gauss con el "área encerrada" por un lazo de Ampère, pensando que son intercambiables.

#### Por qué es incorrecto
La topología es fundamentalmente distinta. Una superficie cerrada (Gauss) delimita un volumen 3D y no tiene bordes. Un contorno cerrado (Ampère/Faraday) delimita una superficie 2D abierta y sí tiene un borde (el propio camino). Mezclarlos anula el significado del teorema de la divergencia y el teorema de Stokes.

#### Señal de detección
Si intentas calcular un flujo a través de una esfera para la ley de Ampère, o si intentas calcular una circulación a lo largo del borde de un cubo. El validador detectará que las unidades del resultado no coinciden con la magnitud buscada.

#### Corrección conceptual
Visualiza la ley de Gauss como una "burbuja" (flujo neto) y las leyes de Ampère/Faraday como un "aro de jabón" (circulación en el borde). Nunca intentes medir la circulación en una burbuja sin bordes.

#### Mini-ejemplo
*Incorrecto*: Calcular la circulación magnética [[circulacion_magnetica]] integrando sobre la superficie de una esfera.
*Correcto*: Calcular la circulación magnética [[circulacion_magnetica]] a lo largo de un camino circular que bordea un disco plano.

**Por qué parece correcto**

Control 1: En Formulacion integral, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

**Mini-ejemplo de contraste**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.


### Error 2: Omitir el signo negativo de la ley de Faraday-Lenz

#### Por qué parece correcto
Porque al trabajar con magnitudes eléctricas, a menudo solo nos interesa el valor absoluto de la tensión (voltaje) para alimentar un componente, ignorando la dirección de la corriente inducida.

#### Por qué es incorrecto
Viola la ley de Lenz y, por extensión, el principio de conservación de la energía. Sin el signo negativo, la inducción crearía un campo que reforzaría la variación inicial, generando una retroalimentación infinita e imposible.

#### Señal de detección
El dispositivo inducido se calienta espontáneamente o la simulación muestra una corriente que crece sin límite. Matemáticamente, el signo de la [[emf]] será opuesto al que dicta la regla de la mano derecha.

#### Corrección conceptual
La naturaleza es "conservadora": siempre intenta mantener el status quo magnético. Si el flujo magnético [[flujo_magnetico]] aumenta, la respuesta del sistema debe ser crear un campo que lo disminuya.

#### Mini-ejemplo
*Incorrecto*: La [[emf]] es igual a la variación del flujo magnético [[variacion_del_flujo_magnetico]].
*Correcto*: La [[emf]] es igual a la variación del flujo magnético [[variacion_del_flujo_magnetico]] cambiada de signo, como se define en:

{{f:faraday}}

## Errores de modelo

**Por qué parece correcto**

Control 6: En Formulacion integral, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Por qué es incorrecto**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Señal de detección**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

**Corrección conceptual**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Mini-ejemplo de contraste**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.


### Error 3: Ignorar la corriente de desplazamiento en regímenes dinámicos

#### Por qué parece correcto
Porque en la mayoría de los problemas de circuitos de corriente continua, no hay condensadores o estos están ya cargados, por lo que el término [[variacion_del_flujo_electrico]] es cero y la ley de Ampère original funciona perfectamente.

#### Por qué es incorrecto
Sin este término, es imposible explicar cómo se propaga la luz a través del vacío o cómo fluye la corriente "a través" de un condensador. La ley de Ampère-Maxwell sería inconsistente dependiendo de la superficie elegida.

#### Señal de detección
La circulación magnética [[circulacion_magnetica]] calculada en un cable no coincide con la calculada justo al lado de una placa de condensador. Existe una discontinuidad en el campo magnético que no debería estar ahí.

#### Corrección conceptual
El cambio en el flujo eléctrico [[flujo_electrico]] es, a efectos magnéticos, idéntico a una corriente física. Maxwell lo llamó "corriente de desplazamiento" para enfatizar esta equivalencia.

#### Mini-ejemplo
*Incorrecto*: Afirmar que entre las placas de un condensador el campo magnético es nulo porque no hay electrones moviéndose.
*Correcto*: Usar el término de desplazamiento para hallar la circulación [[circulacion_magnetica]] en el espacio vacío mediante la relación:

{{f:ampere_maxwell}}

## Errores matemáticos

**Por qué parece correcto**

Control 11: En Formulacion integral, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Por qué es incorrecto**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

**Señal de detección**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Corrección conceptual**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Mini-ejemplo de contraste**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.


### Error 4: Inconsistencia en la orientación de normales y trayectorias

#### Por qué parece correcto
Porque uno asume que puede elegir cualquier sentido de giro y que el signo final se ajustará solo al final del problema.

#### Por qué es incorrecto
La relación entre el vector superficie y el sentido de la integral de línea está rígidamente definida por la regla de la mano derecha. Si cambias uno sin cambiar el otro, obtendrás una [[emf]] o una [[circulacion_magnetica]] con el signo invertido.

#### Señal de detección
Obtienes una fuerza contra-electromotriz que en realidad es motriz, o un campo magnético que gira en sentido contrario al esperado por la corriente [[corriente_encerrada]].

#### Corrección conceptual
Usa siempre la regla del pulgar: si el pulgar apunta en la dirección de la normal a la superficie, los dedos al cerrarse indican el sentido positivo del camino de integración.

#### Mini-ejemplo
*Incorrecto*: Definir la normal hacia arriba y considerar el sentido horario como positivo.
*Correcto*: Si la normal va hacia arriba, el sentido positivo de circulación es el antihorario (regla de la mano derecha).

## Errores de interpretación

**Por qué parece correcto**

Control 16: En Formulacion integral, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

**Por qué es incorrecto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Señal de detección**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Corrección conceptual**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Mini-ejemplo de contraste**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 5: Considerar que el flujo eléctrico neto es igual al campo local

#### Por qué parece correcto
Porque en problemas con mucha simetría, como una esfera, el flujo [[flujo_electrico]] y el campo E son proporcionales al área, lo que lleva a confundirlos como si fueran la misma cosa.

#### Por qué es incorrecto
El flujo [[flujo_electrico]] es una magnitud escalar que resulta de sumar (integrar) todo el campo sobre una superficie. El campo eléctrico es una magnitud vectorial que existe en cada punto. Puedes tener un campo muy intenso en un punto pero un flujo neto nulo sobre una superficie cerrada.

#### Señal de detección
Intentar sumar unidades de flujo con unidades de intensidad de campo local. O afirmar que el flujo es cero porque el campo es cero en un solo punto de la superficie.

#### Corrección conceptual
El flujo es la "cantidad total de líneas" que atraviesan una frontera, no la intensidad de la fuerza en un punto específico de esa frontera.

#### Mini-ejemplo
*Incorrecto*: Decir que el campo eléctrico es nulo porque el flujo neto [[flujo_electrico]] a través de una superficie que encierra un dipolo es cero.
*Correcto*: Reconocer que el flujo es cero porque las líneas que salen de la carga positiva entran en la negativa, aunque el campo interno sea intenso.

## Regla de autocontrol rápido

1. **Unidades**: ¿la magnitud tiene unidades de flujo (Wb, V·m) o de circulación (T·m, V)?
2. **Topología**: ¿la superficie elegida es cerrada? Si no lo es, usa Ampère o Faraday, no Gauss.
3. **Signo**: ¿el sentido de la corriente inducida se opone a la causa que la produce?
4. **Coherencia**: ¿el término de desplazamiento coincide con la corriente de carga del condensador?

**Por qué parece correcto**

Control 21: En Formulacion integral, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.

**Mini-ejemplo de contraste**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.