## Errores conceptuales


### Error 1: contar corriente cercana como corriente encerrada

**Por qué parece correcto**

La analogia intuitiva dice que una corriente cercana deberia influir en todo campo proximo, asi que el alumno la cuenta automaticamente.

**Por qué es incorrecto**

La ley usa [[corriente_encerrada]], no corriente cercana. Solo importa la corriente que atraviesa la superficie limitada por la curva elegida.

**Señal de detección**

El resultado cambia al mover una corriente exterior aunque la curva no la encierre.

**Corrección conceptual**

Dibuja la curva, elige la superficie y cuenta solo los cruces reales de corriente.

**Mini-ejemplo de contraste**

Una corriente paralela situada fuera de una circunferencia puede modificar [[campo_magnetico]] localmente, pero no añade corriente encerrada. La circulacion neta asociada a esa curva sigue dependiendo de los cruces interiores.

## Errores de modelo


### Error 2: elegir una curva sin simetria

**Por qué parece correcto**

Parece que cualquier curva cerrada sirve porque la ley se escribe para curvas cerradas.

**Por qué es incorrecto**

Ampere siempre impone una condicion global, pero solo calcula [[campo_magnetico]] directamente si la curva hace que el campo sea constante, tangente o nulo por tramos.

**Señal de detección**

El alumno multiplica una longitud por un campo que no ha justificado como constante.

**Corrección conceptual**

Elige circunferencias para hilos largos y rectangulos para solenoides largos; si no hay simetria, cambia de modelo.

**Mini-ejemplo de contraste**

Una curva irregular alrededor de un hilo encierra la misma corriente que una circunferencia, pero no permite sacar [[campo_magnetico]] de la integral. La circunferencia si aprovecha la simetria.

## Errores matemáticos


### Error 3: perder el sentido de orientacion

**Por qué parece correcto**

El calculo parece escalar y el signo se ve como un detalle posterior.

**Por qué es incorrecto**

[[circulacion_magnetica]] y [[corriente_encerrada]] son cantidades orientadas. Cambiar el sentido de recorrido cambia la normal positiva asociada y el signo de la corriente.

**Señal de detección**

El signo final contradice la regla de la mano derecha.

**Corrección conceptual**

Fija primero el sentido de recorrido y despues asigna el signo de cada corriente segun cruce la superficie positiva o negativa.

**Mini-ejemplo de contraste**

Si inviertes el recorrido de la curva, tambien debes invertir el criterio de corriente positiva. Mantener uno y cambiar el otro fabrica un signo falso.

## Errores de interpretación


### Error 4: creer que circulacion nula implica campo nulo

**Por qué parece correcto**

Se confunde una suma neta nula con ausencia de campo en cada punto.

**Por qué es incorrecto**

[[circulacion_magnetica]] puede anularse por cancelacion global aunque existan valores locales de [[campo_magnetico]] sobre la curva.

**Señal de detección**

El alumno concluye que no hay campo solo porque la corriente neta encerrada es nula.

**Corrección conceptual**

Circulacion nula significa balance cerrado nulo, no campo local nulo.

**Mini-ejemplo de contraste**

Dos corrientes opuestas encerradas por la misma curva pueden dar corriente neta nula. Aun asi, cerca de cada conductor puede haber campo apreciable.

## Regla de autocontrol rápido

Antes de calcular, responde cuatro preguntas: que curva usas, que sentido de recorrido elegiste, que corriente atraviesa la superficie y que simetria permite simplificar [[campo_magnetico]]. Si alguna respuesta no esta clara, no sustituyas datos.