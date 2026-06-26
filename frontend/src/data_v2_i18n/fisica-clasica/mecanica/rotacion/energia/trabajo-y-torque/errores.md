# Errores frecuentes en trabajo y torque

## Errores conceptuales

### Error 1: creer que torque y trabajo son lo mismo
**Por qué parece correcto:** Ambos pueden escribirse con unidades de newton metro.
**Por qué es incorrecto:** [[tau]] es acción rotacional; [[W]] es energía transferida durante un desplazamiento angular.
**Señal de detección:** Se informa un torque como si fuera energía sin mencionar [[theta]].
**Corrección conceptual:** Exigir eje, giro y signo antes de hablar de trabajo.
**Mini-ejemplo de contraste:** Un eje bloqueado puede tener [[tau]] grande y [[W]] nulo si no gira.

### Error 2: olvidar el signo del trabajo
**Por qué parece correcto:** El alumno usa módulos positivos para todos los datos.
**Por qué es incorrecto:** Un torque contrario al giro extrae energía.
**Señal de detección:** Un freno aparece aumentando energía rotacional.
**Corrección conceptual:** Comparar el signo de [[tau]] con el sentido de [[omega]] o [[theta]].
**Mini-ejemplo de contraste:** Un motor entrega [[W]] positivo; un freno sobre el mismo giro produce [[W]] negativo.

## Errores de modelo

### Error 3: usar torque constante cuando no lo es
**Por qué parece correcto:** Multiplicar es más simple que integrar.
**Por qué es incorrecto:** Si [[tau]] cambia, el trabajo es área bajo la curva.
**Señal de detección:** El enunciado da una curva, tabla o dependencia con [[theta]].
**Corrección conceptual:** Usar `trabajo_torque_variable` o un promedio justificado.
**Mini-ejemplo de contraste:** Un resorte torsional no entrega el mismo trabajo que un torque constante igual al valor final.

### Error 4: mezclar ejes distintos
**Por qué parece correcto:** Todos los datos parecen rotacionales.
**Por qué es incorrecto:** [[tau]], [[omega]] y [[theta]] deben referirse al mismo eje.
**Señal de detección:** La potencia calculada no explica el cambio de energía.
**Corrección conceptual:** Declarar eje y componente antes de operar.
**Mini-ejemplo de contraste:** Torque en un eje y velocidad angular de otro eje no dan potencia física.

## Errores matemáticos

### Error 5: usar grados como radianes
**Por qué parece correcto:** El ángulo suele darse en grados.
**Por qué es incorrecto:** La relación de trabajo angular usa radianes.
**Señal de detección:** El trabajo resulta unas decenas de veces mayor o menor.
**Corrección conceptual:** Convertir vueltas o grados a radianes.
**Mini-ejemplo de contraste:** Una vuelta son aproximadamente `6.28 rad`, no `360 rad`.

### Error 6: confundir potencia con trabajo
**Por qué parece correcto:** Ambas se relacionan con energía.
**Por qué es incorrecto:** [[P]] es ritmo; [[W]] es acumulación.
**Señal de detección:** Se entrega un resultado en watts cuando se pedían joules.
**Corrección conceptual:** Multiplicar por tiempo solo si la potencia es constante o integrar si varía.
**Mini-ejemplo de contraste:** una potencia de `2000 W` durante `5 s` transfiere `10000 J`, no `2000 J`.

## Errores de interpretación

### Error 7: ignorar pérdidas
**Por qué parece correcto:** El trabajo calculado parece cerrar el problema.
**Por qué es incorrecto:** Parte de [[W]] puede ir a calor, sonido o electricidad.
**Señal de detección:** El cambio de energía rotacional es menor que el trabajo externo.
**Corrección conceptual:** Escribir un balance con pérdidas declaradas.
**Mini-ejemplo de contraste:** En un freno, el trabajo negativo del rotor aparece como calor.

### Error 8: leer el gráfico sin área
**Por qué parece correcto:** Se mira solo la altura de la curva.
**Por qué es incorrecto:** Para trabajo importa el área bajo [[tau]] frente a [[theta]].
**Señal de detección:** Dos curvas con alturas similares pero anchos distintos se tratan igual.
**Corrección conceptual:** Comparar áreas algebraicas.
**Mini-ejemplo de contraste:** Un torque pequeño durante muchas vueltas puede hacer más trabajo que uno grande durante poco ángulo.

## Regla de autocontrol rápido

Revisa eje, signo, unidades angulares, constancia de [[tau]], diferencia entre [[W]] y [[P]], y presencia de pérdidas. Si cualquiera de esos puntos no está declarado, el resultado no está cerrado.