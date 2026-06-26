## Errores conceptuales


### Error 1: creer que la [[corriente]] se consume al atravesar resistencias
Por que parece correcto:
La intuicion cotidiana confunde caida de tension con perdida de [[corriente]], y eso lleva a pensar que [[corriente]] disminuye tras cada componente.
Senal de deteccion:
Si en una rama serie reportas valores distintos de [[corriente]] para [[resistencia_uno]], [[resistencia_dos]] y [[resistencia_tres]], hay incoherencia topologica.
Mini-ejemplo de contraste:
Con una sola ruta cerrada, la carga no puede elegir caminos alternativos; por eso el flujo de [[corriente]] es comun.
Correccion conceptual:
Distinguir entre [[corriente]] comun y reparto de [[caida_de_tension]]. Lo que cambia en serie es la caida local, no la [[corriente]] de rama.

**Por qué parece correcto**

Control 1: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: suponer que [[resistencia_equivalente]] puede ser menor que una resistencia individual positiva
Por que parece correcto:
Se mezcla sin querer la regla de paralelo con el caso serie.
Senal de deteccion:
Si [[resistencia_equivalente]] calculada sale menor que [[resistencia_uno]] o [[resistencia_dos]] siendo todas positivas, el resultado no es fisicamente consistente.
Mini-ejemplo de contraste:
En serie cada [[resistencia_generica]] agrega oposicion; no existe cancelacion pasiva entre resistencias.
Correccion conceptual:
Usar siempre la regla de suma para serie y validar monotonia de [[resistencia_equivalente]].

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: usar modelo ideal cuando la carga externa altera el reparto
Por que parece correcto:
El esquema de pizarra muestra serie pura y se asume que esa topologia no cambia al conectar la salida.
Senal de deteccion:
La [[caida_de_tension]] de salida cae de forma notable al conectar la carga real.
Mini-ejemplo de contraste:
Un repartidor en vacio puede dar salida esperada, pero con carga baja la red efectiva deja de ser la ideal inicial.
Correccion conceptual:
Incluir impedancia de carga en el modelo cuando su magnitud no es mucho mayor que el tramo de salida.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: ignorar deriva termica de [[resistencia_generica]]
Por que parece correcto:
Se trabaja con valores nominales y se olvida que calentamiento cambia parametros.
Senal de deteccion:
[[corriente]] medida deriva con el tiempo aun con [[tension_total]] estable.
Mini-ejemplo de contraste:
Si un componente se calienta, su resistencia efectiva cambia y modifica [[resistencia_equivalente]].
Correccion conceptual:
Verificar estabilidad temporal y, si hace falta, pasar a modelo extendido con dependencia termica.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: mezclar ohm y kiloohm sin conversion
Por que parece correcto:
Los numeros parecen razonables en papel, pero las unidades no son homogéneas.
Senal de deteccion:
[[corriente]] sale dos o tres ordenes de magnitud fuera de rango esperado.
Mini-ejemplo de contraste:
Una resistencia en kiloohm escrita como ohm produce corrientes exageradas.
Correccion conceptual:
Normalizar unidades antes de calcular [[resistencia_equivalente]] y [[corriente]].

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: no cerrar malla con [[tension_total]]
Por que parece correcto:
Se confia en resultados intermedios y se omite comprobacion final.
Senal de deteccion:
La suma de [[caida_de_tension]] no reconstruye la fuente.
Mini-ejemplo de contraste:
Un signo invertido en una caida local puede arruinar todo el balance aunque el resto de cuentas parezca correcto.
Correccion conceptual:
Incluir cierre de malla como paso obligatorio de validacion.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: concluir que menor [[corriente]] implica siempre mayor seguridad
Por que parece correcto:
Se observa solo la variable global de [[corriente]] y se ignora la distribucion local.
Senal de deteccion:
Un resistor concentra gran [[caida_de_tension]] y potencia, aunque la [[corriente]] total sea moderada.
Mini-ejemplo de contraste:
Incrementar un [[resistencia_generica]] puede reducir [[corriente]] global y al mismo tiempo aumentar esfuerzo local en ese elemento.
Correccion conceptual:
Interpretar conjuntamente [[corriente]], [[caida_de_tension]] y potencia por componente.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: leer una sola magnitud y declarar el problema resuelto
Por que parece correcto:
La respuesta numerica de una ecuacion se confunde con comprension fisica completa.
Senal de deteccion:
No se discuten condiciones de validez ni sensibilidad a carga.
Mini-ejemplo de contraste:
Un resultado correcto en nominal puede fallar en operacion real por tolerancia o carga externa.
Correccion conceptual:
Acompanhar cada resultado con causalidad fisica, dominio de validez y chequeo de coherencia.

## Regla de autocontrol rápido

1. Confirmar topologia serie real antes de aplicar ecuaciones.
2. Normalizar unidades de [[resistencia_uno]], [[resistencia_dos]], [[resistencia_tres]], [[resistencia_generica]] y [[tension_total]].
3. Calcular [[resistencia_equivalente]] y verificar que sea no negativa y coherente.
4. Calcular [[corriente]] y revisar orden de magnitud.
5. Calcular [[caida_de_tension]] por elemento y validar reparto fisico.
6. Cerrar malla frente a [[tension_total]].
7. Evaluar si carga o temperatura exigen migrar de modelo.

Si estas siete verificaciones se cumplen, la probabilidad de error conceptual, matematico y de interpretacion cae de forma drastica.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Resistencias en serie, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.