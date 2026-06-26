# Errores frecuentes en amortiguamiento crítico

## Errores conceptuales

### Error 1: confundir frontera crítica con ausencia total de dinámica

Por que parece correcto:
Se piensa que si el sistema es crítico “ya no pasa nada interesante”, porque no hay oscilación visible en [[x]].

Senal de deteccion:
La explicación del estudiante elimina el papel de [[tau]], [[omega0]] y del término temporal [[t]], como si la respuesta fuese instantánea.

Mini-ejemplo de contraste:
Con dos sistemas críticos de distinto [[omega0]], ambos no oscilan, pero no tardan lo mismo en asentarse. El sistema con mayor [[omega0]] (menor [[tau]]) converge antes.

Correccion conceptual:
Crítico no significa estático. Significa frontera dinámica entre sub y sobre, con transitorio activo y altamente informativo.

### Error 2: creer que “crítico” es siempre la mejor elección de diseño

Por que parece correcto:
Se asume que minimizar oscilación equivale siempre a optimizar desempeño global.

Senal de deteccion:
No se evalúan objetivos múltiples (energía, desgaste, sensibilidad, robustez), solo “que no oscile”.

Mini-ejemplo de contraste:
En un sistema con ruido alto de medición, una calibración ligeramente sobreamortiguada puede ser más robusta que la crítica exacta.

Correccion conceptual:
El régimen crítico es una referencia fuerte, no una receta universal. La decisión final depende de criterios de misión y entorno.

## Errores de modelo

### Error 3: usar modelo crítico fuera de su dominio

Por que parece correcto:
La ecuación se ajusta a varios casos de práctica y da valores numéricos razonables.

Senal de deteccion:
La señal real presenta sobrepasos o cambios de pendiente incompatibles con régimen crítico, pero se insiste en el mismo modelo.

Mini-ejemplo de contraste:
Si [[gamma]] cae por debajo de [[omega0]], aparece oscilación amortiguada. Forzar el modelo crítico oculta ese cambio de régimen.

Correccion conceptual:
Verificar primero la condición de régimen comparando [[gamma]] con [[omega0]] y solo después usar la respuesta crítica para interpretar [[x]].

### Error 4: ignorar variación paramétrica

Por que parece correcto:
Se trabaja con valores nominales únicos y se omite que [[gamma]] puede variar con temperatura o carga.

Senal de deteccion:
El modelo ajusta una prueba y falla sistemáticamente en otra con condiciones distintas.

Mini-ejemplo de contraste:
Dos ensayos con mismo [[A]] y [[omega0]] pueden producir distintos tiempos efectivos si [[gamma]] cambia por calentamiento.

Correccion conceptual:
Si hay deriva observable de parámetros, usar modelo extendido o recalibrar por tramos temporales.

## Errores matemáticos

### Error 5: mezclar unidades en parámetros temporales

Por que parece correcto:
Los números parecen “de orden parecido” y se sustituyen directo.

Senal de deteccion:
[[tau]] sale en milisegundos cuando debía estar en segundos, o viceversa, sin justificación.

Mini-ejemplo de contraste:
Tomar [[omega0]] en rad/ms en una fórmula que espera rad/s cambia [[tau]] en factor 1000.

Correccion conceptual:
Normalizar unidades SI antes de sustituir y revisar consistencia dimensional en cada paso.

### Error 6: perder trazabilidad entre fórmula y magnitud objetivo

Por que parece correcto:
Se despeja algebraicamente bien, pero no se conecta el resultado con la magnitud pedida.

Senal de deteccion:
Se calcula [[gamma]] cuando el problema pedía [[x]] en cierto [[t]], o se reporta [[tau]] sin lectura física.

Mini-ejemplo de contraste:
Un ejercicio de asentamiento requiere primero [[tau]] y luego estimación de [[x]] a tiempo específico. Saltar la secuencia degrada interpretación.

Correccion conceptual:
Definir variable objetivo al inicio y ordenar la resolución para cerrar causalidad física.

## Errores de interpretación

### Error 7: tomar todo desvío como fallo físico del modelo

Por que parece correcto:
Cualquier diferencia entre medida y predicción se interpreta como “modelo incorrecto”.

Senal de deteccion:
No se hace prueba de sensibilidad numérica ni control de ruido instrumental.

Mini-ejemplo de contraste:
Refinar paso temporal reduce el desvío de [[x]] en 70 por ciento; era error numérico dominante, no ruptura de física.

Correccion conceptual:
Separar causas: física, medición y numeración. Sin esa separación, la conclusión suele ser errónea.

### Error 8: cerrar con lectura puramente numérica

Por que parece correcto:
Se entrega un número y parece suficiente para aprobar el cálculo.

Senal de deteccion:
No se explica si el valor obtenido es coherente con régimen crítico ni con escala temporal esperada.

Mini-ejemplo de contraste:
Dos resultados con igual error absoluto pueden tener significado distinto según el horizonte [[t]] y el valor de [[tau]].

Correccion conceptual:
Siempre incluir lectura física final: régimen, rapidez de asentamiento y consecuencias de diseño.

## Regla de autocontrol rápido

1. Verifica régimen comparando [[gamma]] con [[omega0]] antes de resolver salida.
2. Calcula [[tau]] desde [[omega0]] para fijar escala temporal.
3. Evalúa [[x]] con el modelo crítico en tiempos relevantes de decisión.
4. Contrasta resultado con hipótesis de linealidad y parámetros constantes.
5. Cierra con interpretación física y no solo con valor numérico.
