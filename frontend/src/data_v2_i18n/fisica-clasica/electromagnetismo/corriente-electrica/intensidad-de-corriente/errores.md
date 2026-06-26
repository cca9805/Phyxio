## Errores conceptuales


### Error 1: Confundir [[intensidad_de_corriente]] con velocidad individual de los electrones
#### Por qué parece correcto
La palabra corriente sugiere movimiento rapido, por lo que muchos estudiantes asocian un valor alto de [[intensidad_de_corriente]] con una velocidad enorme de cada portador.
#### Señal de detección
El razonamiento ignora que [[intensidad_de_corriente]] depende tambien de [[densidad_de_portadores]] y [[area_de_seccion]], no solo de [[velocidad_de_deriva]].
#### Mini-ejemplo de contraste
Dos materiales pueden mostrar [[intensidad_de_corriente]] similar con [[velocidad_de_deriva]] distinta si cambia la densidad de portadores.
#### Corrección conceptual
Recordar que [[intensidad_de_corriente]] es magnitud macroscópica de flujo neto y que [[velocidad_de_deriva]] de deriva es solo uno de los factores del transporte.

**Por qué parece correcto**

Control 1: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: Pensar que signo negativo implica resultado imposible
#### Por qué parece correcto
En muchos ejercicios iniciales solo se trabajan modulos positivos y se asume que cualquier signo menos indica falla algebraica.
#### Señal de detección
Se corrigen manualmente signos para forzar resultado positivo sin revisar convenio.
#### Mini-ejemplo de contraste
Si el sentido real del flujo es opuesto al convenio adoptado, un valor negativo de [[intensidad_de_corriente]] es coherente.
#### Corrección conceptual
Mantener convenio fijo y leer signo como informacion direccional, no como error automatico.

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: Tratar [[carga_electrica_transportada]] como propiedad fija del sistema sin intervalo temporal
#### Por qué parece correcto
La carga se percibe como cantidad total y se olvida que en este leaf interesa la carga transportada en una ventana.
#### Señal de detección
Se reporta [[carga_electrica_transportada]] sin indicar [[tiempo]], lo que impide reconstruir la tasa de flujo.
#### Mini-ejemplo de contraste
La misma [[carga_electrica_transportada]] en un segundo y en una hora implica corrientes muy distintas.
#### Corrección conceptual
Vincular siempre [[carga_electrica_transportada]] con ventana temporal explicita para sostener interpretacion fisica.

## Errores de modelo

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: Usar area nominal cuando la conduccion efectiva es menor
#### Por qué parece correcto
El dato de plano o ficha tecnica suele mostrar un area geometrica unica y se asume que todo conduce igual.
#### Señal de detección
La [[densidad_de_corriente]] calculada parece baja, pero el sistema muestra calentamiento localizado.
#### Mini-ejemplo de contraste
Un estrechamiento en contacto reduce area efectiva y aumenta exigencia local aun con [[intensidad_de_corriente]] constante.
#### Corrección conceptual
Elegir [[area_de_seccion]] efectiva de conduccion y justificarla segun configuracion real.

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: Aplicar promedio unico en regimen con fases muy distintas
#### Por qué parece correcto
Promediar simplifica calculo y da una cifra compacta.
#### Señal de detección
La misma media no explica picos de respuesta ni comportamiento por tramos.
#### Mini-ejemplo de contraste
Una senal con arranque intenso y cola suave no se interpreta bien con una sola media temporal.
#### Corrección conceptual
Separar analisis por etapas cuando el fenomeno cambia de regimen en la ventana estudiada.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: Suponer [[densidad_de_portadores]] y [[velocidad_de_deriva]] constantes sin rango de validez
#### Por qué parece correcto
El modelo de portadores suele presentarse con parametros constantes para facilitar aprendizaje inicial.
#### Señal de detección
Para ajustar datos se alteran arbitrariamente parametros en cada ejercicio.
#### Mini-ejemplo de contraste
Cambios de temperatura pueden desplazar valores efectivos y romper consistencia entre casos.
#### Corrección conceptual
Explicitar supuestos de material y declarar el rango operativo donde se mantienen.

## Errores matemáticos

**Por qué parece correcto**

Control 21: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: Mezclar unidades temporales sin conversion
#### Por qué parece correcto
Milisegundos y segundos conviven en enunciados reales y el cambio de escala pasa desapercibido.
#### Señal de detección
Aparecen corrientes mil veces mayores o menores que el orden esperado.
#### Mini-ejemplo de contraste
Un mismo valor de [[carga_electrica_transportada]] dividido por milisegundos en lugar de segundos desplaza [[intensidad_de_corriente]] por tres ordenes.
#### Corrección conceptual
Unificar unidades al inicio y conservarlas en todo el flujo de calculo.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: Olvidar conversion de area al calcular [[densidad_de_corriente]]
#### Por qué parece correcto
Secciones en milimetros cuadrados se introducen como si fueran metros cuadrados.
#### Señal de detección
La [[densidad_de_corriente]] resultante no es compatible con limites termicos plausibles.
#### Mini-ejemplo de contraste
Tomar mm^2 como m^2 reduce artificialmente la densidad estimada.
#### Corrección conceptual
Convertir [[area_de_seccion]] a unidades SI antes de normalizar intensidad.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.


### Error 9: Redondear demasiado pronto y perder trazabilidad
#### Por qué parece correcto
Simplificar cifras intermedias da sensacion de control del procedimiento.
#### Señal de detección
El resultado final cambia mucho al repetir con mas precision.
#### Mini-ejemplo de contraste
En calculos de [[densidad_de_corriente]], redondeos tempranos de [[area_de_seccion]] afectan fuerte el valor final.
#### Corrección conceptual
Mantener precision intermedia y redondear solo al reportar resultado final.

## Errores de interpretación

**Por qué parece correcto**

Control 33: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 33.

**Por qué es incorrecto**

Control 34: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 34.

**Señal de detección**

Control 35: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 35.

**Corrección conceptual**

Control 36: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 36.


### Error 10: Concluir seguridad termica solo con [[intensidad_de_corriente]] total
#### Por qué parece correcto
La corriente total es el dato mas visible en instrumentos de panel.
#### Señal de detección
Se ignora distribucion espacial y aparecen puntos calientes inesperados.
#### Mini-ejemplo de contraste
Dos disenos con la misma [[intensidad_de_corriente]] pueden tener [[densidad_de_corriente]] muy distinta por cambio de [[area_de_seccion]].
#### Corrección conceptual
Cruzar lectura de [[intensidad_de_corriente]] con [[densidad_de_corriente]] y criterios de disipacion local.

**Por qué parece correcto**

Control 37: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 37.

**Por qué es incorrecto**

Control 38: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 38.

**Señal de detección**

Control 39: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 39.

**Corrección conceptual**

Control 40: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 40.


### Error 11: Confundir coherencia algebraica con validez fisica
#### Por qué parece correcto
Si la cuenta cierra, se asume automaticamente que el modelo representa el fenomeno.
#### Señal de detección
Los resultados no coinciden con observacion y se intenta corregir solo con mas decimales.
#### Mini-ejemplo de contraste
Una ecuacion aplicada fuera de su dominio puede producir numero correcto en forma y errado en significado.
#### Corrección conceptual
Verificar siempre supuestos de ventana temporal, area efectiva y contexto material.

**Por qué parece correcto**

Control 41: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 41.

**Por qué es incorrecto**

Control 42: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 42.

**Señal de detección**

Control 43: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 43.

**Corrección conceptual**

Control 44: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 44.


### Error 12: Usar formula correcta con magnitud objetivo equivocada
#### Por qué parece correcto
Se identifica una ecuacion familiar y se aplica sin revisar que se esta pidiendo.
#### Señal de detección
Se responde [[intensidad_de_corriente]] cuando el problema exige [[densidad_de_corriente]], o viceversa.
#### Mini-ejemplo de contraste
Calcular intensidad total no permite diagnosticar sobrecarga local si la pregunta trata esfuerzo en seccion.
#### Corrección conceptual
Declarar magnitud objetivo antes de resolver y validar que cada paso apunta a ella.

## Regla de autocontrol rápido

Antes de aceptar cualquier resultado, pasar un filtro de cinco preguntas: cual es la magnitud objetivo, que unidades se usaron, que convenio de signo aplica, que supuestos de modelo se declararon y si el orden de magnitud es plausible para el contexto. Si una de esas respuestas no esta clara, el resultado debe considerarse provisional.

**Por qué parece correcto**

Control 45: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 45.

**Por qué es incorrecto**

Control 46: En Intensidad de corriente, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 46.

**Señal de detección**

Control 47: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 47.

**Corrección conceptual**

Control 48: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 48.