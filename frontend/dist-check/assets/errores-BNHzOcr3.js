const e=`# Errores frecuentes en amortiguamiento crítico\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir frontera crítica con ausencia total de dinámica\r
\r
Por que parece correcto:\r
Se piensa que si el sistema es crítico “ya no pasa nada interesante”, porque no hay oscilación visible en [[x]].\r
\r
Senal de deteccion:\r
La explicación del estudiante elimina el papel de [[tau]], [[omega0]] y del término temporal [[t]], como si la respuesta fuese instantánea.\r
\r
Mini-ejemplo de contraste:\r
Con dos sistemas críticos de distinto [[omega0]], ambos no oscilan, pero no tardan lo mismo en asentarse. El sistema con mayor [[omega0]] (menor [[tau]]) converge antes.\r
\r
Correccion conceptual:\r
Crítico no significa estático. Significa frontera dinámica entre sub y sobre, con transitorio activo y altamente informativo.\r
\r
### Error 2: creer que “crítico” es siempre la mejor elección de diseño\r
\r
Por que parece correcto:\r
Se asume que minimizar oscilación equivale siempre a optimizar desempeño global.\r
\r
Senal de deteccion:\r
No se evalúan objetivos múltiples (energía, desgaste, sensibilidad, robustez), solo “que no oscile”.\r
\r
Mini-ejemplo de contraste:\r
En un sistema con ruido alto de medición, una calibración ligeramente sobreamortiguada puede ser más robusta que la crítica exacta.\r
\r
Correccion conceptual:\r
El régimen crítico es una referencia fuerte, no una receta universal. La decisión final depende de criterios de misión y entorno.\r
\r
## Errores de modelo\r
\r
### Error 3: usar modelo crítico fuera de su dominio\r
\r
Por que parece correcto:\r
La ecuación se ajusta a varios casos de práctica y da valores numéricos razonables.\r
\r
Senal de deteccion:\r
La señal real presenta sobrepasos o cambios de pendiente incompatibles con régimen crítico, pero se insiste en el mismo modelo.\r
\r
Mini-ejemplo de contraste:\r
Si [[gamma]] cae por debajo de [[omega0]], aparece oscilación amortiguada. Forzar el modelo crítico oculta ese cambio de régimen.\r
\r
Correccion conceptual:\r
Verificar primero la condición de régimen comparando [[gamma]] con [[omega0]] y solo después usar la respuesta crítica para interpretar [[x]].
\r
### Error 4: ignorar variación paramétrica\r
\r
Por que parece correcto:\r
Se trabaja con valores nominales únicos y se omite que [[gamma]] puede variar con temperatura o carga.\r
\r
Senal de deteccion:\r
El modelo ajusta una prueba y falla sistemáticamente en otra con condiciones distintas.\r
\r
Mini-ejemplo de contraste:\r
Dos ensayos con mismo [[A]] y [[omega0]] pueden producir distintos tiempos efectivos si [[gamma]] cambia por calentamiento.\r
\r
Correccion conceptual:\r
Si hay deriva observable de parámetros, usar modelo extendido o recalibrar por tramos temporales.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades en parámetros temporales\r
\r
Por que parece correcto:\r
Los números parecen “de orden parecido” y se sustituyen directo.\r
\r
Senal de deteccion:\r
[[tau]] sale en milisegundos cuando debía estar en segundos, o viceversa, sin justificación.\r
\r
Mini-ejemplo de contraste:\r
Tomar [[omega0]] en rad/ms en una fórmula que espera rad/s cambia [[tau]] en factor 1000.\r
\r
Correccion conceptual:\r
Normalizar unidades SI antes de sustituir y revisar consistencia dimensional en cada paso.\r
\r
### Error 6: perder trazabilidad entre fórmula y magnitud objetivo\r
\r
Por que parece correcto:\r
Se despeja algebraicamente bien, pero no se conecta el resultado con la magnitud pedida.\r
\r
Senal de deteccion:\r
Se calcula [[gamma]] cuando el problema pedía [[x]] en cierto [[t]], o se reporta [[tau]] sin lectura física.\r
\r
Mini-ejemplo de contraste:\r
Un ejercicio de asentamiento requiere primero [[tau]] y luego estimación de [[x]] a tiempo específico. Saltar la secuencia degrada interpretación.\r
\r
Correccion conceptual:\r
Definir variable objetivo al inicio y ordenar la resolución para cerrar causalidad física.\r
\r
## Errores de interpretación\r
\r
### Error 7: tomar todo desvío como fallo físico del modelo\r
\r
Por que parece correcto:\r
Cualquier diferencia entre medida y predicción se interpreta como “modelo incorrecto”.\r
\r
Senal de deteccion:\r
No se hace prueba de sensibilidad numérica ni control de ruido instrumental.\r
\r
Mini-ejemplo de contraste:\r
Refinar paso temporal reduce el desvío de [[x]] en 70 por ciento; era error numérico dominante, no ruptura de física.\r
\r
Correccion conceptual:\r
Separar causas: física, medición y numeración. Sin esa separación, la conclusión suele ser errónea.\r
\r
### Error 8: cerrar con lectura puramente numérica\r
\r
Por que parece correcto:\r
Se entrega un número y parece suficiente para aprobar el cálculo.\r
\r
Senal de deteccion:\r
No se explica si el valor obtenido es coherente con régimen crítico ni con escala temporal esperada.\r
\r
Mini-ejemplo de contraste:\r
Dos resultados con igual error absoluto pueden tener significado distinto según el horizonte [[t]] y el valor de [[tau]].\r
\r
Correccion conceptual:\r
Siempre incluir lectura física final: régimen, rapidez de asentamiento y consecuencias de diseño.\r
\r
## Regla de autocontrol rápido\r
\r
1. Verifica régimen comparando [[gamma]] con [[omega0]] antes de resolver salida.
2. Calcula [[tau]] desde [[omega0]] para fijar escala temporal.
3. Evalúa [[x]] con el modelo crítico en tiempos relevantes de decisión.
4. Contrasta resultado con hipótesis de linealidad y parámetros constantes.\r
5. Cierra con interpretación física y no solo con valor numérico.\r
`;export{e as default};
