## Errores conceptuales


### Error 1: Creer que el parámetro de orden es solo una [[temperatura]]
**Por qué parece correcto**
La [[temperatura]] aparece en casi todos los gráficos de transición, así que parece natural tomarla como la magnitud que identifica la fase.

**Por qué es incorrecto**
La [[temperatura]] controla el estado térmico, pero no mide directamente la organización. El [[parametro_de_orden]] indica simetría u orden colectivo.

**Señal de detección**
El alumno afirma que al conocer la [[temperatura]] ya sabe si la fase está ordenada sin mirar ninguna magnitud estructural.

**Corrección conceptual**
Usa [[temperatura]] para ubicar el sistema y [[parametro_de_orden]] para distinguir la fase.

**Mini-ejemplo de contraste**
Dos muestras a temperaturas parecidas cerca de [[temperatura_critica]] pueden tener distinto [[parametro_de_orden]] si una está en fase ordenada y otra no.


### Error 2: Interpretar cero como ausencia de materia
**Por qué parece correcto**
Un valor cero suele sugerir que “no hay nada”.

**Por qué es incorrecto**
[[parametro_de_orden]] igual a cero significa ausencia del orden medido, no ausencia de sistema físico.

**Señal de detección**
Se dice que la fase desordenada “desaparece” porque el [[parametro_de_orden]] es nulo.

**Corrección conceptual**
El cero indica simetría restaurada o promedio nulo, no vacío.

**Mini-ejemplo de contraste**
Un imán por encima de [[temperatura_critica]] sigue existiendo, aunque su magnetización media sea cero.

## Errores de modelo


### Error 3: Aplicar la ley crítica lejos de la transición
**Por qué parece correcto**
Las leyes de potencia parecen fórmulas generales y fáciles de extrapolar.

**Por qué es incorrecto**
[[amplitud_critica]] y [[exponente_critico_beta]] describen una región cercana a [[temperatura_critica]], no toda la curva.

**Señal de detección**
Se ajustan datos con |[[temperatura_reducida]]| grande y se obtiene un exponente sin comprobar dominio.

**Corrección conceptual**
Limita el ajuste a valores pequeños de [[temperatura_reducida]] y revisa estabilidad del resultado.

**Mini-ejemplo de contraste**
Un ajuste entre |t| de 0.001 y 0.03 puede ser crítico; uno entre 0.5 y 2 describe otra física.


### Error 4: Ignorar el campo conjugado
**Por qué parece correcto**
A veces el [[campo_conjugado]] externo parece pequeño o secundario.

**Por qué es incorrecto**
Cerca de [[temperatura_critica]], incluso un [[campo_conjugado]] pequeño puede modificar el [[parametro_de_orden]].

**Señal de detección**
La [[susceptibilidad]] se calcula sin indicar qué perturbación produce la respuesta.

**Corrección conceptual**
Distingue orden espontáneo de orden inducido por [[campo_conjugado]].

**Mini-ejemplo de contraste**
Un imán puede mostrar magnetización por campo externo aunque no haya orden espontáneo estable.

## Errores matemáticos


### Error 5: Perder el signo de la [[temperatura]] reducida
**Por qué parece correcto**
El valor absoluto de [[temperatura_reducida]] mide distancia, y la distancia parece suficiente.

**Por qué es incorrecto**
El signo indica desde qué lado de [[temperatura_critica]] se observa el sistema.

**Señal de detección**
Se usa la misma interpretación por encima y por debajo de [[temperatura_critica]].

**Corrección conceptual**
Conserva el signo de [[temperatura_reducida]] y vincúlalo con fase ordenada o desordenada.

**Mini-ejemplo de contraste**
El mismo |t| puede corresponder a una fase con [[parametro_de_orden]] finito o a una fase desordenada.


### Error 6: Confundir salto con pendiente grande
**Por qué parece correcto**
Una curva muy inclinada parece casi vertical.

**Por qué es incorrecto**
Un [[salto_parametro_de_orden]] es una discontinuidad finita; una pendiente grande sigue siendo continua si no hay ruptura.

**Señal de detección**
Se declara transición abrupta sin comparar límites laterales del [[parametro_de_orden]].

**Corrección conceptual**
Comprueba si los valores a ambos lados convergen al mismo límite o no.

**Mini-ejemplo de contraste**
Una curva suave puede cambiar deprisa cerca de [[temperatura_critica]] sin tener salto.

## Errores de interpretación


### Error 7: Tomar el signo como fase nueva
**Por qué parece correcto**
Valores positivos y negativos parecen estados distintos.

**Por qué es incorrecto**
En muchos sistemas el signo del [[parametro_de_orden]] representa orientaciones equivalentes por simetría.

**Señal de detección**
Se cuentan dos fases distintas solo porque el signo cambia.

**Corrección conceptual**
Comprueba si el cambio de signo es una orientación equivalente o una fase físicamente distinta.

**Mini-ejemplo de contraste**
Magnetización hacia arriba y hacia abajo pueden ser dos dominios de la misma fase ordenada.


### Error 8: Leer [[susceptibilidad]] como cantidad aislada
**Por qué parece correcto**
La [[susceptibilidad]] aparece como número calculable.

**Por qué es incorrecto**
Su sentido depende del [[campo_conjugado]] y de cómo cambia el [[parametro_de_orden]].

**Señal de detección**
Se informa una [[susceptibilidad]] sin unidad, sin perturbación y sin régimen lineal.

**Corrección conceptual**
Interpreta la [[susceptibilidad]] como respuesta diferencial bajo condiciones controladas.

**Mini-ejemplo de contraste**
Una respuesta grande cerca de [[temperatura_critica]] indica sensibilidad crítica, no necesariamente más “cantidad de fase”.

## Regla de autocontrol rápido

Antes de clasificar, pregunta: qué mide [[parametro_de_orden]], dónde está [[temperatura_critica]], cuál es el signo de [[temperatura_reducida]], existe [[salto_parametro_de_orden]] y bajo qué [[campo_conjugado]] se midió la [[susceptibilidad]].