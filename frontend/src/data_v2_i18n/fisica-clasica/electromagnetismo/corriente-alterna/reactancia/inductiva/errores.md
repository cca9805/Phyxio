## Errores conceptuales


### Error 1: confundir reactancia con resistencia disipativa
Por que parece correcto:
Ambas se expresan en ohmios y ambas aparecen en ecuaciones de corriente.

Senal de deteccion:
Se concluye que una rama inductiva con [[reactancia_inductiva]] alta necesariamente consume mucha potencia activa.

Mini-ejemplo de contraste:
Una rama puede mostrar gran oposicion [[reactancia_inductiva]] y corriente [[corriente_inductiva_eficaz]] moderada sin que eso implique disipacion activa dominante en el ideal.

Correccion conceptual:
Distingue oposicion reactiva de disipacion resistiva antes de interpretar energia.

**Por qué parece correcto**

Control 1: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: creer que la oposicion inductiva es constante
Por que parece correcto:
Se memoriza una ecuacion y se usa como si fuera un valor fijo del componente.

Senal de deteccion:
Se mantiene el mismo valor de [[reactancia_inductiva]] al comparar escenarios con distinta [[frecuencia]].

Mini-ejemplo de contraste:
Con [[inductancia]] fija, aumentar [[frecuencia]] debe aumentar [[reactancia_inductiva]] en modelo ideal.

Correccion conceptual:
Trata [[reactancia_inductiva]] como resultado de regimen y no como identidad inmutable del elemento.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: usar modelo ideal fuera de rango magnetico
Por que parece correcto:
Las cuentas son limpias y la salida numerica parece razonable.

Senal de deteccion:
La tendencia medida de [[corriente_inductiva_eficaz]] no coincide con la tendencia esperada del modelo minimo.

Mini-ejemplo de contraste:
Si hay saturacion magnetica o perdidas de nucleo relevantes, el modelo ideal deja de describir correctamente la rama.

Correccion conceptual:
Declara umbrales de validez y cambia a modelo extendido cuando esos umbrales se superan.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: ignorar trazabilidad metrologica
Por que parece correcto:
Se asume que cualquier valor de tension sirve para cualquier ecuacion.

Senal de deteccion:
Se mezclan mediciones de distintos instrumentos o estados de operacion sin control de consistencia.

Mini-ejemplo de contraste:
Una tension pico leida en osciloscopio no equivale automaticamente a tension RMS para relacion de corriente de rama.

Correccion conceptual:
Alinea tipo de dato, contexto de medicion y ecuacion utilizada.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: mezclar Hz y rad/s sin control
Por que parece correcto:
En lenguaje informal ambas magnitudes se llaman [[frecuencia]].

Senal de deteccion:
Los resultados cambian por factores de escala inexplicables.

Mini-ejemplo de contraste:
Usar directamente [[frecuencia]] donde la ecuacion requiere [[omega]] distorsiona [[reactancia_inductiva]] y arrastra error en [[corriente_inductiva_eficaz]].

Correccion conceptual:
Fija la convencion de unidad al inicio y manten conversion explicita.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: no convertir milihenrios a henrios
Por que parece correcto:
El prefijo se omite por rapidez en sustituciones rutinarias.

Senal de deteccion:
La oposicion estimada resulta absurdamente pequena o grande para la [[frecuencia]] dada.

Mini-ejemplo de contraste:
Un mismo valor numerico cambia tres ordenes de magnitud entre mH y H.

Correccion conceptual:
Normaliza unidades SI antes de cualquier operacion formal.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: leer potencia reactiva como consumo activo
Por que parece correcto:
Ambas magnitudes aparecen en estudios de potencia y se reportan en la misma evaluacion de sistema.

Senal de deteccion:
Se juzga eficiencia del sistema solo por aumento de [[potencia_reactiva_inductiva]].

Mini-ejemplo de contraste:
El intercambio reactivo puede crecer sin igual crecimiento de potencia activa neta.

Correccion conceptual:
Separa explicitamente balance reactivo y balance activo.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: cerrar solucion sin causalidad fisica
Por que parece correcto:
Una cuenta numerica cerrada produce sensacion de problema resuelto.

Senal de deteccion:
La conclusion final repite valores pero no explica que variable domino el resultado.

Mini-ejemplo de contraste:
Dos casos con misma [[tension_eficaz]] pueden dar distinta [[corriente_inductiva_eficaz]] por cambios en [[inductancia]] o [[frecuencia]].

Correccion conceptual:
Cierra cada resolucion con una lectura causa-efecto y un limite de validez.

## Regla de autocontrol rápido

Antes de validar tu respuesta, verifica cuatro puntos: tipo de magnitud de entrada, conversion de unidades, coherencia de tendencia y validez del modelo. Si cualquiera falla, la interpretacion no esta lista para uso tecnico.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Inductiva, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.