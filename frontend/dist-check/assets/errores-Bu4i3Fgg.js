const e=`# Errores frecuentes: Problemas tipo examen\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto en las fuerzas\r
\r
**Por qué parece correcto**: La Segunda Ley de Newton iguala fuerza y aceleración, y cuando se trabaja con ecuaciones algebraicas da la misma relación en ambos sentidos.\r
\r
**Por qué es incorrecto**: La [[fuerza_rozamiento]] no causa el movimiento; es consecuencia de la [[fuerza_normal]] y del [[coeficiente_rozamiento]]. Tampoco la [[tension_cuerda]] genera la [[aceleracion_sistema]]; es la fuerza neta global la causa. Intercambiar causa y efecto lleva a plantear el sistema de ecuaciones al revés.\r
\r
**Señal de detección**: Si en tu diagrama de cuerpo libre asignas la [[tension_cuerda]] como causa de la [[fuerza_rozamiento]], o tratas la [[aceleracion_sistema]] como una fuerza aplicada, has invertido la causalidad.\r
\r
**Corrección conceptual**: Traza el diagrama de cuerpo libre antes de escribir ninguna ecuación. Identifica todas las fuerzas externas reales sobre cada objeto (peso, [[fuerza_normal]], [[tension_cuerda]], [[fuerza_rozamiento]]) y solo entonces aplica la Segunda Ley.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: "La [[aceleracion_sistema]] empuja [[masa_2]] hacia abajo, generando la [[tension_cuerda]]."\r
\r
Correcto: La fuerza neta sobre [[masa_2]] (peso menos [[tension_cuerda]]) produce la [[aceleracion_sistema]]. La [[tension_cuerda]] es la reacción de la cuerda al peso transmitido, no su causa.\r
\r
---\r
\r
### Error 2: Aplicar la fórmula de la aceleración sin calcular las fuerzas previas\r
\r
**Por qué parece correcto**: La fórmula de la [[aceleracion_sistema]] tiene todos los términos visibles, parece que basta con sustituir los datos.\r
\r
**Por qué es incorrecto**: La fórmula requiere como entradas la [[componente_tangencial_peso]] y la [[fuerza_rozamiento]], que a su vez necesitan la [[fuerza_normal]]. Ignorar este encadenamiento e introducir directamente el peso total de [[masa_1]] genera un error sistemático.\r
\r
**Señal de detección**: Si usas el peso completo de [[masa_1]] (es decir, [[masa_1]] × [[aceleracion_gravedad]]) en lugar de [[componente_tangencial_peso]] = [[masa_1]] × [[aceleracion_gravedad]] × sin([[angulo_plano]]), el error aumenta con el [[angulo_plano]].\r
\r
**Corrección conceptual**: Calcula siempre en este orden: primero la [[fuerza_normal]], luego la [[fuerza_rozamiento]], luego la [[componente_tangencial_peso]], y por último la [[aceleracion_sistema]]. Las fórmulas tienen un orden lógico de aplicación.\r
\r
#### Mini-ejemplo de contraste\r
\r
Con [[angulo_plano]] = 30°, usar el peso total da [[componente_tangencial_peso]] = 3 × 9.8 = 29.4 N (error). El valor correcto es 3 × 9.8 × sin(30°) = 14.7 N. El error en la [[aceleracion_sistema]] resultante es del 50%.\r
\r
---\r
\r
## Errores de modelo\r
\r
### Error 3: Confundir [[masa_1]] y [[masa_2]] al proyectar fuerzas\r
\r
**Por qué parece correcto**: Ambas masas aparecen en la misma ecuación de la [[aceleracion_sistema]] y se suman en el denominador, lo que hace fácil perder la pista de cuál actúa en el plano y cuál cuelga.\r
\r
**Por qué es incorrecto**: [[masa_1]] es la que está sobre el plano inclinado y tiene [[fuerza_normal]], [[fuerza_rozamiento]] y [[componente_tangencial_peso]]. [[masa_2]] solo tiene su peso como fuerza motriz (ignoring the rope). Intercambiarlas cambia por completo el balance de fuerzas.\r
\r
**Señal de detección**: Si tu [[fuerza_normal]] incluye [[masa_2]], o si calculas [[componente_tangencial_peso]] usando [[masa_2]], has intercambiado las masas.\r
\r
**Corrección conceptual**: Etiqueta físicamente: [[masa_1]] = "sobre el plano" (tiene [[angulo_plano]], [[fuerza_rozamiento]]); [[masa_2]] = "cuelga verticalmente" (no tiene rozamiento con el plano). Nunca mezcles sus ecuaciones.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: [[fuerza_normal]] = ([[masa_1]] + [[masa_2]]) × [[aceleracion_gravedad]] × cos([[angulo_plano]]). Correcto: [[fuerza_normal]] = [[masa_1]] × [[aceleracion_gravedad]] × cos([[angulo_plano]]). [[masa_2]] no toca el plano y no contribuye a la [[fuerza_normal]].\r
\r
---\r
\r
### Error 4: No reconocer cuándo el modelo de polea ideal falla\r
\r
**Por qué parece correcto**: La polea ideal (sin masa, sin fricción) simplifica enormemente el problema y es la hipótesis estándar en los textos de introducción a la mecánica.\r
\r
**Por qué es incorrecto**: Una polea real tiene inercia rotacional que absorbe parte de la [[tension_cuerda]] y reduce la [[aceleracion_sistema]] efectiva. Si la masa de la polea supera el 5% de [[masa_1]] + [[masa_2]], el error supera el 5% y el modelo ideal subestima la inercia del sistema.\r
\r
**Señal de detección**: El resultado experimental de [[aceleracion_sistema]] es consistentemente menor que el calculado, aunque todos los parámetros estén bien medidos.\r
\r
**Corrección conceptual**: En problemas de laboratorio real, verifica siempre la masa de la polea. Si es apreciable, añade su contribución como \\(\\frac{1}{2} m_p r^2\\) en el término de inercia del denominador.\r
\r
#### Mini-ejemplo de contraste\r
\r
Con [[masa_1]] = [[masa_2]] = 1 kg y polea de 0.2 kg (radio 0.05 m), el modelo ideal da [[aceleracion_sistema]] = 0 m/s². Con polea real, el denominador aumenta 10% y la [[aceleracion_sistema]] calculada cambia, mientras la medida experimental ya incorpora la inercia de la polea.\r
\r
---\r
\r
### Error 5: Usar el [[coeficiente_rozamiento]] estático en lugar del dinámico\r
\r
**Por qué parece correcto**: Muchos problemas enuncian "coeficiente de rozamiento" sin especificar si es estático o dinámico, y se tiende a usar el único valor disponible.\r
\r
**Por qué es incorrecto**: El modelo de la [[fuerza_rozamiento]] de Coulomb cinético es válido solo cuando el sistema ya está en movimiento. Si el sistema está en reposo, rige el coeficiente estático (mayor). Usar el dinámico en reposo subestima la resistencia al inicio del movimiento.\r
\r
**Señal de detección**: El sistema calculado debería moverse (aceleración positiva), pero en el experimento permanece en reposo. La causa es que el coeficiente estático es mayor que el dinámico y el sistema aún no ha superado el umbral.\r
\r
**Corrección conceptual**: Diferencia siempre entre la condición de inicio (rozamiento estático máximo) y la de movimiento (rozamiento dinámico). Verifica cuál es el dato dado antes de sustituir.\r
\r
#### Mini-ejemplo de contraste\r
\r
Si el enunciado da [[coeficiente_rozamiento]] = 0.30 (dinámico) pero el coeficiente estático es 0.40, la [[fuerza_rozamiento]] máxima en reposo es 0.40 × [[fuerza_normal]], no 0.30 × [[fuerza_normal]]. Con el dinámico, la [[aceleracion_sistema]] saldría positiva; con el estático, el sistema no arrancaría.\r
\r
---\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos con errores de signo en el vínculo de aceleración\r
\r
**Por qué parece correcto**: La ecuación de la [[aceleracion_sistema]] es una fracción con varios términos, y al despejar parece que basta con mover términos al otro lado.\r
\r
**Por qué es incorrecto**: El convenio de signo del eje positivo para [[masa_1]] y [[masa_2]] debe ser coherente. Si el positivo de [[masa_2]] es "hacia abajo" y el positivo de [[masa_1]] es "hacia arriba por el plano", un error de signo en uno de los cuerpos produce una [[aceleracion_sistema]] con signo opuesto al real.\r
\r
**Señal de detección**: La [[aceleracion_sistema]] calculada tiene signo negativo cuando físicamente el sistema debería acelerar, o viceversa.\r
\r
**Corrección conceptual**: Define explícitamente el eje positivo para cada cuerpo al inicio del problema. Escribe las ecuaciones de cada cuerpo por separado antes de combinarlas. No saltes al resultado combinado directamente.\r
\r
#### Mini-ejemplo de contraste\r
\r
Si defines positivo "hacia arriba" para ambos cuerpos y luego sumas las ecuaciones sin corregir el peso de [[masa_2]] (que actúa hacia abajo), obtienes un signo erróneo en la [[aceleracion_sistema]]. El error se evita escribiendo explícitamente la ecuación de cada cuerpo antes de combinarlas: para el bloque colgante, la fuerza neta es el peso de [[masa_2]] menos la [[tension_cuerda]]; para el bloque sobre el plano, la fuerza neta es la [[tension_cuerda]] menos la [[componente_tangencial_peso]] menos la [[fuerza_rozamiento]].\r
\r
---\r
\r
### Error 7: Olvidar convertir el [[angulo_plano]] a radianes en calculadora\r
\r
**Por qué parece correcto**: El enunciado da el [[angulo_plano]] en grados (30°), que es la unidad natural de expresión del ángulo.\r
\r
**Por qué es incorrecto**: Las funciones trigonométricas en muchas calculadoras científicas y en código (Python, MATLAB) esperan radianes por defecto. sin(30) en radianes ≈ −0.988, no 0.5.\r
\r
**Señal de detección**: La [[componente_tangencial_peso]] o la [[fuerza_normal]] calculadas son mucho mayores o menores que los valores esperados (orden de magnitud claramente erróneo).\r
\r
**Corrección conceptual**: Verifica siempre el modo de la calculadora (DEG vs RAD). Habitúate a escribir sin(30°) explícitamente o a convertir a radianes antes de evaluar.\r
\r
#### Mini-ejemplo de contraste\r
\r
[[angulo_plano]] = 30°: sin(30° en grados) = 0.5; sin(30 radianes) ≈ −0.988. Con este error, la [[componente_tangencial_peso]] de [[masa_1]] = 3 kg cambia de 14.7 N a −29.1 N, lo que arruina completamente el análisis.\r
\r
---\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar [[aceleracion_sistema]] negativa como error de cálculo\r
\r
**Por qué parece correcto**: Se elige un sentido positivo esperando que el sistema acelere en ese sentido, y un resultado negativo parece indicar un fallo matemático.\r
\r
**Por qué es incorrecto**: La [[aceleracion_sistema]] negativa significa que el sistema acelera en sentido contrario al convenio elegido, o que el sistema no se mueve en la dirección asumida. No es un error; es información física valiosa que indica que las fuerzas resistivas superan las motrices.\r
\r
**Señal de detección**: Si el resultado da [[aceleracion_sistema]] < 0 y la primera reacción es buscar un error algebraico, probablemente el resultado es correcto y el sistema simplemente no acelera en el sentido asumido.\r
\r
**Corrección conceptual**: Un valor negativo de [[aceleracion_sistema]] es una respuesta válida. Significa: "el sistema se mueve (o tendería a moverse) en sentido contrario al eje positivo elegido". Interpreta el signo, no lo elimines.\r
\r
#### Mini-ejemplo de contraste\r
\r
Con [[masa_1]] = 3 kg, [[angulo_plano]] = 30°, [[coeficiente_rozamiento]] = 0.20, [[masa_2]] = 2 kg, la [[aceleracion_sistema]] ≈ −0.04 m/s². Esto significa que las fuerzas resistivas del plano casi igualan el peso de [[masa_2]]; el sistema no acelera en el sentido asumido. Es un resultado correcto, no un error.\r
\r
---\r
\r
### Error 9: Omitir la interpretación física del resultado numérico\r
\r
**Por qué parece correcto**: Una vez que se tiene el número de la [[aceleracion_sistema]] o la [[tension_cuerda]], el problema parece resuelto. La interpretación parece un comentario opcional.\r
\r
**Por qué es incorrecto**: La física exige dar significado al número. Un valor de [[tension_cuerda]] = 19.6 N dice algo concreto: la cuerda soporta exactamente el peso de [[masa_2]] cuando [[aceleracion_sistema]] ≈ 0, lo que revela el equilibrio del sistema. Sin esta interpretación, el alumno no detecta si el resultado es absurdo o si tiene implicaciones importantes para el diseño.\r
\r
**Señal de detección**: Si el resultado de [[aceleracion_sistema]] es positivo pero [[masa_2]] debería bajar y [[masa_1]] subir, y el alumno reporta el número sin verificar que el movimiento físico sea coherente, está omitiendo la interpretación.\r
\r
**Corrección conceptual**: Tras calcular, responde siempre: ¿Qué movimiento predice este valor de [[aceleracion_sistema]]? ¿Es coherente con el enunciado? ¿El valor de [[tension_cuerda]] está entre 0 y el peso de [[masa_2]] × [[aceleracion_gravedad]], como físicamente debe ser?\r
\r
#### Mini-ejemplo de contraste\r
\r
[[tension_cuerda]] = 25 N con [[masa_2]] = 2 kg y [[aceleracion_gravedad]] = 9.8 m/s²: el peso de [[masa_2]] es 19.6 N. Una [[tension_cuerda]] mayor que el peso de [[masa_2]] es físicamente imposible si solo actúa la gravedad sobre [[masa_2]]. El alumno que reporta 25 N sin interpretarlo pierde la señal de error más obvia del problema.\r
\r
---\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por cerrado el problema, verifica mentalmente:\r
\r
1. ¿Dibujé el diagrama de cuerpo libre de **cada** cuerpo por separado antes de escribir ecuaciones?\r
2. ¿La [[fuerza_normal]] solo incluye [[masa_1]] (no [[masa_2]])?\r
3. ¿Calculé [[fuerza_normal]] → [[fuerza_rozamiento]] → [[componente_tangencial_peso]] en ese orden?\r
4. ¿El módulo de [[tension_cuerda]] está entre 0 y [[masa_2]] × [[aceleracion_gravedad]]?\r
5. ¿El signo de [[aceleracion_sistema]] es coherente con el movimiento físico esperado?\r
6. ¿El valor de [[aceleracion_sistema]] está entre 0 y [[aceleracion_gravedad]]?\r
\r
Si algún punto falla, reexamina antes de dar el resultado por válido.\r
`;export{e as default};
