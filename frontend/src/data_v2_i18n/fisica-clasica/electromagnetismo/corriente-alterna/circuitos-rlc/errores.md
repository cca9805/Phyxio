## Errores conceptuales


### Error 1: creer que toda corriente alta implica gran potencia util
Por que parece correcto:
En problemas de corriente continua es habitual asociar mas corriente con mas transferencia util. Esa intuicion parece trasladable a cualquier circuito electrico.

Senal de deteccion:
La solucion encuentra [[corriente_rms]] alta pero [[potencia_activa]] mucho menor que [[potencia_aparente]], o un [[phi]] apreciable y aun asi describe la carga como eficiente sin mas analisis.

Mini-ejemplo de contraste:
Dos ramas pueden exigir la misma [[corriente_rms]]. Una puede tener [[phi]] casi nula y otra un [[phi]] grande. En la segunda, la fuente sostiene mas demanda total de la que se convierte en potencia activa.

Correccion conceptual:
La corriente debe leerse junto con [[phi]], [[potencia_activa]], [[potencia_reactiva]] y [[potencia_aparente]]. En este leaf la pregunta no es solo cuanta corriente circula, sino como se reparte la demanda electrica.

**Por qué parece correcto**

Control 1: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: pensar que [[potencia_reactiva]] es energia perdida en el mismo sentido que el calor
Por que parece correcto:
Como [[potencia_reactiva]] no coincide con la potencia util, muchos alumnos la llaman perdida directa o consumo inutil absoluto.

Senal de deteccion:
Se afirma que toda potencia reactiva es desperdicio y desaparece la interpretacion de intercambio con campos magneticos y electricos.

Mini-ejemplo de contraste:
Una rama ideal reactiva puede intercambiar mucha energia con la fuente sin convertirla en disipacion media neta como hace la parte resistiva.

Correccion conceptual:
[[potencia_reactiva]] expresa intercambio alterno asociado al desfase. Tiene consecuencias tecnicas reales, pero no equivale por si sola a disipacion irreversible.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: aplicar el modelo serie lineal a cualquier montaje AC sin justificarlo
Por que parece correcto:
Las ecuaciones del leaf son compactas y producen resultados rapidos, de modo que parece tentador usarlas sobre cualquier circuito que incluya resistencia, inductor y capacitor.

Senal de deteccion:
El enunciado describe topologia paralela, varias frecuencias relevantes o parasitas fuertes, y aun asi se usa la misma cadena cerrada sin declarar aproximaciones.

Mini-ejemplo de contraste:
En una topologia paralela la interpretacion de maxima o minima oposicion cambia. Usar el modelo serie sin conversion previa altera el significado fisico del resultado.

Correccion conceptual:
Primero define sistema, topologia, frecuencia dominante y dominio de validez. Solo despues decide si este leaf es el modelo correcto.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: suponer que acercarse a compensacion siempre mejora todo
Por que parece correcto:
Si [[phi]] baja y [[potencia_reactiva]] disminuye, parece natural concluir que el circuito queda automaticamente mejor en todos los sentidos.

Senal de deteccion:
La resolucion celebra una reduccion de potencia reactiva sin revisar [[corriente_rms]], sensibilidad a frecuencia o tolerancias.

Mini-ejemplo de contraste:
Cuando [[reactancia_inductiva]] y [[reactancia_capacitiva]] casi se equilibran, [[impedancia_total]] puede acercarse a [[resistencia_serie]] y la corriente crecer con rapidez. Puede mejorar el factor de potencia y al mismo tiempo empeorar la exigencia de corriente.

Correccion conceptual:
Compensacion y seguridad no son sinonimos. Deben leerse conjuntamente [[impedancia_total]], [[corriente_rms]], [[phi]] y el contexto operativo.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: escribir la impedancia como suma algebraica simple
Por que parece correcto:
El alumno ve tres magnitudes en ohm y concluye que deben sumarse linealmente.

Senal de deteccion:
La resolucion propone una impedancia menor que [[resistencia_serie]] por simple cancelacion o incluso una magnitud negativa.

Mini-ejemplo de contraste:
Si [[resistencia_serie]] vale 40 ohm, [[reactancia_inductiva]] vale 90 ohm y [[reactancia_capacitiva]] vale 50 ohm, la parte reactiva neta no se suma a [[resistencia_serie]] en la misma direccion. El modulo final debe quedar por encima o igual a [[resistencia_serie]].

Correccion conceptual:
Las reactancias entran en cuadratura respecto a la parte resistiva. Primero se construye el desequilibrio reactivo y despues el modulo total.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: mezclar valores pico con valores RMS
Por que parece correcto:
Ambos describen la misma señal y a menudo aparecen juntos en tablas o graficas.

Senal de deteccion:
[[potencia_activa]] supera a [[potencia_aparente]], la corriente parece inverosimil o el resultado contradice la escala fisica del montaje.

Mini-ejemplo de contraste:
Si [[tension_rms]] se toma como valor pico mientras [[corriente_rms]] se deja en RMS, las potencias calculadas dejan de pertenecer al mismo marco del leaf.

Correccion conceptual:
En este tema toda la cadena operativa se construye con magnitudes RMS. Si el dato inicial viene en pico, se convierte antes de seguir.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: ignorar el signo fisico de [[phi]]
Por que parece correcto:
Muchos ejercicios piden solo un numero angular y el alumno concluye que basta con el modulo.

Senal de deteccion:
La solucion ofrece un valor para [[phi]] pero no dice si la rama es inductiva o capacitiva ni conecta el signo con [[potencia_reactiva]].

Mini-ejemplo de contraste:
Dos angulos de igual magnitud pueden corresponder a situaciones opuestas. En una domina [[reactancia_inductiva]] y en la otra domina [[reactancia_capacitiva]]. Las decisiones de compensacion cambian por completo.

Correccion conceptual:
El signo de [[phi]] no es decorativo. Es la forma compacta de leer que mecanismo reactivo domina la rama.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: leer [[potencia_aparente]] como si fuera potencia util entregada a la carga
Por que parece correcto:
[[potencia_aparente]] combina [[tension_rms]] e [[corriente_rms]] y parece el numero mas directo del balance de potencia.

Senal de deteccion:
Se dimensiona la utilidad de la carga solo con [[potencia_aparente]] o se afirma que toda la demanda de fuente se convierte en transferencia media neta.

Mini-ejemplo de contraste:
Si [[potencia_activa]] es muy inferior a [[potencia_aparente]], la instalacion soporta una demanda que no se transforma integra en potencia activa. Esa diferencia puede ser precisamente el problema tecnico del caso.

Correccion conceptual:
[[potencia_aparente]] dimensiona demanda total. [[potencia_activa]] dimensiona transferencia media neta. Una buena interpretacion debe separar ambos papeles.

## Regla de autocontrol rápido

Antes de aceptar una resolucion, repite esta secuencia: ¿[[reactancia_inductiva]] y [[reactancia_capacitiva]] pertenecen a la misma frecuencia?, ¿todas las magnitudes estan en RMS?, ¿[[impedancia_total]] salio mayor o igual que [[resistencia_serie]]?, ¿el signo de [[phi]] coincide con el caracter inductivo o capacitivo?, ¿[[potencia_activa]] queda menor o igual que [[potencia_aparente]]? Si una respuesta falla, el problema no esta cerrado aunque la aritmetica parezca limpia.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Circuitos rlc, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.