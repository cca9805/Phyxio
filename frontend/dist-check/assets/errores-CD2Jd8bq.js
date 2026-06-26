const e=`# Errores comunes en equilibrio termodinámico\r
\r
## Errores conceptuales\r
\r
### Error 1: "Equilibrio significa que nada se mueve"\r
\r
**Descripción.** El alumno imagina un sistema congelado microscopicamente.\r
\r
**Por que parece correcto.** En lenguaje cotidiano, equilibrio se asocia con reposo.\r
\r
**Senal de deteccion.** Se niega el movimiento molecular o se dice que las particulas quedan quietas.\r
\r
**Correccion conceptual.** Equilibrio significa ausencia de cambio macroscopico neto. Las particulas siguen moviendose, pero las variables de estado permanecen constantes.\r
\r
**Mini-ejemplo de contraste.** Un gas en equilibrio tiene moleculas moviendose; aun asi [[T]] y [[P]] macroscopicas son estables.\r
\r
### Error 2: "Temperatura uniforme basta para equilibrio completo"\r
\r
**Descripción.** Se declara equilibrio solo porque [[DeltaT]] es cero.\r
\r
**Por que parece correcto.** El equilibrio térmico es el caso más familiar.\r
\r
**Senal de deteccion.** Se ignoran [[DeltaP]], composicion o reacciones posibles.\r
\r
**Correccion conceptual.** El equilibrio completo exige revisar todos los procesos permitidos: calor, movimiento de fronteras, difusion y reaccion.\r
\r
**Mini-ejemplo de contraste.** Dos gases pueden tener la misma [[T]] y distinta [[P]]; si un pistón se mueve, no hay equilibrio mecánico.\r
\r
## Errores de modelo\r
\r
### Error 3: "Estado estacionario es lo mismo que equilibrio"\r
\r
**Descripción.** Se toma cualquier sistema constante en el tiempo como equilibrio.\r
\r
**Por que parece correcto.** En ambos casos las variables pueden no cambiar temporalmente.\r
\r
**Senal de deteccion.** Hay flujos permanentes a traves del sistema.\r
\r
**Correccion conceptual.** Un estado estacionario puede sostener corrientes internas. El equilibrio termodinámico exige ausencia de flujos netos internos.\r
\r
**Mini-ejemplo de contraste.** Una barra con calor entrando por un extremo y saliendo por otro es estacionaria, pero no esta en equilibrio.\r
\r
## Errores matemáticos\r
\r
### Error 4: "Usar igualdad exacta sin tolerancia experimental"\r
\r
**Descripción.** Se exige que dos sensores den exactamente el mismo valor.\r
\r
**Por que parece correcto.** Las formulas de equilibrio se escriben con igualdad.\r
\r
**Senal de deteccion.** Se rechaza equilibrio por diferencias menores que la incertidumbre de medida.\r
\r
**Correccion conceptual.** En laboratorio, equilibrio se evalua dentro de tolerancias. Lo relevante es si [[DeltaT]] o [[DeltaP]] son físicamente apreciables.\r
\r
**Mini-ejemplo de contraste.** Dos lecturas de 300.00 K y 300.02 K pueden ser indistinguibles si el sensor tiene incertidumbre de 0.05 K.\r
\r
## Errores de interpretacion\r
\r
### Error 5: "Equilibrio siempre se alcanza rápido"\r
\r
**Descripción.** Se supone que el sistema llega al equilibrio en cuanto se conecta o se deja aislado.\r
\r
**Por que parece correcto.** Muchos ejemplos escolares idealizan la relajación.\r
\r
**Senal de deteccion.** No se considera el tiempo de relajación [[tau]].\r
\r
**Correccion conceptual.** El equilibrio requiere una escala temporal suficiente. Si [[tau]] es grande, el sistema puede parecer estable sin estar equilibrado.\r
\r
**Mini-ejemplo de contraste.** Un bloque grueso puede tardar horas en igualar temperatura interna aunque su superficie parezca estable.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de declarar equilibrio, pregunta: que intercambios permite la frontera, que gradientes quedan y en que tiempo se observan. Si queda [[DeltaT]], [[DeltaP]] o [[A]] relevante, no hay equilibrio completo.\r
\r
Una forma práctica de evitar errores es separar tres frases. Primero: "el sistema no cambia apreciablemente durante mi observación". Segundo: "no detecto gradientes que puedan producir flujo". Tercero: "las restricciones permiten o impiden cada intercambio". Solo la combinacion de las tres justifica llamar equilibrio al estado. Si solo se cumple la primera, probablemente se trata de un transitorio lento o de un regimen estacionario.\r
`;export{e as default};
