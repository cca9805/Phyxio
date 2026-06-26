const e=`# Errores frecuentes en trabajo y torque\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que torque y trabajo son lo mismo\r
**Por qué parece correcto:** Ambos pueden escribirse con unidades de newton metro.\r
**Por qué es incorrecto:** [[tau]] es acción rotacional; [[W]] es energía transferida durante un desplazamiento angular.\r
**Señal de detección:** Se informa un torque como si fuera energía sin mencionar [[theta]].\r
**Corrección conceptual:** Exigir eje, giro y signo antes de hablar de trabajo.\r
**Mini-ejemplo de contraste:** Un eje bloqueado puede tener [[tau]] grande y [[W]] nulo si no gira.\r
\r
### Error 2: olvidar el signo del trabajo\r
**Por qué parece correcto:** El alumno usa módulos positivos para todos los datos.\r
**Por qué es incorrecto:** Un torque contrario al giro extrae energía.\r
**Señal de detección:** Un freno aparece aumentando energía rotacional.\r
**Corrección conceptual:** Comparar el signo de [[tau]] con el sentido de [[omega]] o [[theta]].\r
**Mini-ejemplo de contraste:** Un motor entrega [[W]] positivo; un freno sobre el mismo giro produce [[W]] negativo.\r
\r
## Errores de modelo\r
\r
### Error 3: usar torque constante cuando no lo es\r
**Por qué parece correcto:** Multiplicar es más simple que integrar.\r
**Por qué es incorrecto:** Si [[tau]] cambia, el trabajo es área bajo la curva.\r
**Señal de detección:** El enunciado da una curva, tabla o dependencia con [[theta]].\r
**Corrección conceptual:** Usar \`trabajo_torque_variable\` o un promedio justificado.\r
**Mini-ejemplo de contraste:** Un resorte torsional no entrega el mismo trabajo que un torque constante igual al valor final.\r
\r
### Error 4: mezclar ejes distintos\r
**Por qué parece correcto:** Todos los datos parecen rotacionales.\r
**Por qué es incorrecto:** [[tau]], [[omega]] y [[theta]] deben referirse al mismo eje.\r
**Señal de detección:** La potencia calculada no explica el cambio de energía.\r
**Corrección conceptual:** Declarar eje y componente antes de operar.\r
**Mini-ejemplo de contraste:** Torque en un eje y velocidad angular de otro eje no dan potencia física.\r
\r
## Errores matemáticos\r
\r
### Error 5: usar grados como radianes\r
**Por qué parece correcto:** El ángulo suele darse en grados.\r
**Por qué es incorrecto:** La relación de trabajo angular usa radianes.\r
**Señal de detección:** El trabajo resulta unas decenas de veces mayor o menor.\r
**Corrección conceptual:** Convertir vueltas o grados a radianes.\r
**Mini-ejemplo de contraste:** Una vuelta son aproximadamente \`6.28 rad\`, no \`360 rad\`.\r
\r
### Error 6: confundir potencia con trabajo\r
**Por qué parece correcto:** Ambas se relacionan con energía.\r
**Por qué es incorrecto:** [[P]] es ritmo; [[W]] es acumulación.\r
**Señal de detección:** Se entrega un resultado en watts cuando se pedían joules.\r
**Corrección conceptual:** Multiplicar por tiempo solo si la potencia es constante o integrar si varía.\r
**Mini-ejemplo de contraste:** una potencia de \`2000 W\` durante \`5 s\` transfiere \`10000 J\`, no \`2000 J\`.\r
\r
## Errores de interpretación\r
\r
### Error 7: ignorar pérdidas\r
**Por qué parece correcto:** El trabajo calculado parece cerrar el problema.\r
**Por qué es incorrecto:** Parte de [[W]] puede ir a calor, sonido o electricidad.\r
**Señal de detección:** El cambio de energía rotacional es menor que el trabajo externo.\r
**Corrección conceptual:** Escribir un balance con pérdidas declaradas.\r
**Mini-ejemplo de contraste:** En un freno, el trabajo negativo del rotor aparece como calor.\r
\r
### Error 8: leer el gráfico sin área\r
**Por qué parece correcto:** Se mira solo la altura de la curva.\r
**Por qué es incorrecto:** Para trabajo importa el área bajo [[tau]] frente a [[theta]].\r
**Señal de detección:** Dos curvas con alturas similares pero anchos distintos se tratan igual.\r
**Corrección conceptual:** Comparar áreas algebraicas.\r
**Mini-ejemplo de contraste:** Un torque pequeño durante muchas vueltas puede hacer más trabajo que uno grande durante poco ángulo.\r
\r
## Regla de autocontrol rápido\r
\r
Revisa eje, signo, unidades angulares, constancia de [[tau]], diferencia entre [[W]] y [[P]], y presencia de pérdidas. Si cualquiera de esos puntos no está declarado, el resultado no está cerrado.`;export{e as default};
