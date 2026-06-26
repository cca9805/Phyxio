## Errores conceptuales


### Error 1: pensar que Kirchhoff es solo una receta
Por que parece correcto:
Se practican ejercicios repetitivos y se memoriza forma sin fisica.

Senal de deteccion:
Se escriben ecuaciones sin justificar nodo o malla correspondiente.

Mini-ejemplo de contraste:
Al cambiar la topologia, la receta deja de funcionar aunque la algebra sea correcta.

Correccion conceptual:
Primero define principio conservativo, despues ecuacion.

**Por qué parece correcto**

Control 1: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: creer que signo negativo invalida la solucion
Por que parece correcto:
Se asocia negativo con “mal calculado”.

Senal de deteccion:
Se cambia signo final para “normalizar” respuesta.

Mini-ejemplo de contraste:
Una corriente negativa suele indicar direccion real opuesta al supuesto.

Correccion conceptual:
Conserva el valor y corrige interpretacion de sentido.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: mezclar variables de tramos distintos
Por que parece correcto:
Se usan magnitudes cercanas en el dibujo sin verificar pertenencia.

Senal de deteccion:
Se combina corriente de una rama con resistencia de otra al calcular caida.

Mini-ejemplo de contraste:
Puede cerrar una cuenta local y romper cierre global de red.

Correccion conceptual:
Cada ecuacion local usa variables del mismo tramo fisico.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: usar ecuaciones redundantes como si fueran nuevas
Por que parece correcto:
Mas ecuaciones parece igual a mas precision.

Senal de deteccion:
Sistema singular o con soluciones inestables pese a datos razonables.

Mini-ejemplo de contraste:
Dos balances equivalentes de nodo no agregan informacion independiente.

Correccion conceptual:
Selecciona base minima independiente y usa el resto para control.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: cambiar convencion de signos a mitad del desarrollo
Por que parece correcto:
Al pasar de nodo a malla se reinicia orientacion sin notarlo.

Senal de deteccion:
Una misma rama aparece con signos opuestos sin explicacion.

Mini-ejemplo de contraste:
Se obtiene numero plausible en una ecuacion y contradiccion en otra.

Correccion conceptual:
Congela referencias desde el diagrama inicial.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: perder control dimensional
Por que parece correcto:
Se omiten unidades para agilizar calculo.

Senal de deteccion:
Aparecen sumas o restas entre magnitudes incompatibles.

Mini-ejemplo de contraste:
No puedes sumar corriente y tension en un mismo termino fisico.

Correccion conceptual:
Verifica unidades en cada ecuacion de cierre.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: cerrar ejercicio sin validacion cruzada
Por que parece correcto:
Una incognita coincide con expectativa y se detiene el proceso.

Senal de deteccion:
No se revisan nodos secundarios ni mallas adicionales.

Mini-ejemplo de contraste:
Un valor puntual correcto puede convivir con red global incoherente.

Correccion conceptual:
Aplica chequeo nodal y de malla al final.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: confundir resultado numerico con decision tecnica
Por que parece correcto:
Se asume que resolver ecuaciones agota el problema.

Senal de deteccion:
No se analiza impacto sobre proteccion, caida o seguridad.

Mini-ejemplo de contraste:
Un resultado correcto puede exigir rediseno por sobrecorriente en rama.

Correccion conceptual:
Traduce solucion a accion de diseno, mantenimiento o proteccion.

## Regla de autocontrol rápido

Antes de aceptar una solucion, revisa: referencias fijas, ecuaciones independientes, consistencia tramo-variable, cierre de nodos criticos, cierre de mallas criticas y coherencia dimensional. Si uno falla, reabre planteo antes de interpretar.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Leyes de kirchhoff, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.