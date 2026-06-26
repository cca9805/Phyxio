## Errores conceptuales


### Error 1: confundir reactancia con resistencia disipativa
Por que parece correcto:
Ambas se expresan en ohmios y aparecen en ecuaciones de corriente.

Senal de deteccion:
Se concluye que una rama capacitiva "consume" potencia activa por el solo hecho de tener oposición.

Mini-ejemplo de contraste:
Una rama puede tener [[reactancia_capacitiva]] baja y [[corriente_capacitiva_eficaz]] alta sin disipación activa dominante en el ideal.

Correccion conceptual:
Distingue oposición reactiva de disipación resistiva antes de interpretar energía.

**Por qué parece correcto**

Control 1: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: creer que la oposición capacitiva es constante
Por que parece correcto:
Se aprende una fórmula y luego se aplica como si fuera un valor fijo de componente.

Senal de deteccion:
Se mantiene el mismo valor de reactancia al comparar escenarios con frecuencias distintas.

Mini-ejemplo de contraste:
Al subir [[frecuencia]] en un mismo capacitor, la oposición debe disminuir en el ideal.

Correccion conceptual:
Trata [[reactancia_capacitiva]] como resultado de régimen, no como propiedad inmutable.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: usar modelo ideal fuera de rango operativo
Por que parece correcto:
Las cuentas son limpias y el resultado parece razonable.

Senal de deteccion:
La tendencia medida de corriente no coincide con la tendencia del modelo mínimo.

Mini-ejemplo de contraste:
Si pérdidas y temperatura alteran fuertemente la respuesta, el modelo ideal deja de ser suficiente.

Correccion conceptual:
Declara umbrales de validez y cambia de modelo cuando esos umbrales se superan.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: ignorar trazabilidad metrológica
Por que parece correcto:
Se asume que cualquier lectura de tensión sirve para cualquier fórmula.

Senal de deteccion:
Se mezclan datos de distintos instrumentos y condiciones sin advertirlo.

Mini-ejemplo de contraste:
Una tensión pico tomada en osciloscopio no equivale automáticamente a tensión eficaz de cálculo.

Correccion conceptual:
Alinea tipo de medición, estado de operación y ecuación utilizada.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: mezclar Hz y rad/s sin control
Por que parece correcto:
Ambas magnitudes suelen llamarse "[[frecuencia]]" en lenguaje informal.

Senal de deteccion:
Los resultados cambian por factores inexplicables de escala.

Mini-ejemplo de contraste:
Usar directamente [[frecuencia]] en hertz donde la ecuación requiere [[frecuencia]] angular distorsiona [[reactancia_capacitiva]].

Correccion conceptual:
Establece la convención de unidad al inicio y mantén conversión explícita.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: no convertir microfaradios a faradios
Por que parece correcto:
El prefijo se omite por rapidez en sustituciones rutinarias.

Senal de deteccion:
La corriente estimada es absurdamente pequeña o exageradamente grande.

Mini-ejemplo de contraste:
Un mismo valor numérico cambia seis órdenes de magnitud entre microfaradios y faradios.

Correccion conceptual:
Normaliza unidades SI antes de cualquier operación formal.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: leer potencia reactiva como consumo activo
Por que parece correcto:
Ambas potencias se reportan con magnitudes energéticas del sistema.

Senal de deteccion:
Se concluye eficiencia baja solo por aumento de magnitud reactiva.

Mini-ejemplo de contraste:
El intercambio reactivo puede aumentar sin implicar igual aumento de energía neta consumida.

Correccion conceptual:
Diferencia explícitamente balance reactivo de balance activo.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: concluir sin explicar causalidad física
Por que parece correcto:
La resolución numérica entrega un valor y parece cerrar el problema.

Senal de deteccion:
La conclusión final repite números pero no dice qué variable dominó el resultado.

Mini-ejemplo de contraste:
Dos casos con igual tensión pueden requerir corrientes distintas por cambios en [[frecuencia]] o capacidad.

Correccion conceptual:
Cierra toda resolución con una lectura de causa-efecto y límite de validez.

## Regla de autocontrol rápido

Antes de validar tu respuesta, verifica cuatro puntos: tipo de magnitud de entrada, conversión de unidades, coherencia de tendencia y validez del modelo. Si cualquiera de estos puntos falla, la interpretación no está lista para uso técnico.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Capacitiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.