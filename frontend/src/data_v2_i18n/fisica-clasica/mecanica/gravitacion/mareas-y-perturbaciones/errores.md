# Errores frecuentes

## Errores conceptuales

### Error 1 : Confundir marea con fuerza gravitatoria total
**Por qué parece correcto**: Como la Luna atrae a la Tierra, parece natural identificar la marea con la atracción completa de la masa perturbadora [[M]].
**Por qué es incorrecto**: La marea mide diferencia de aceleración dentro del cuerpo afectado. Si todo el planeta acelerara igual, habría caída global, pero no deformación interna.
**Señal de detección**: El alumno calcula una gravedad lunar total y la compara directamente con el peso cotidiano.
**Corrección conceptual**: Leer [[am]] como gradiente de campo sobre una escala [[R]], no como gravedad total.
**Mini-ejemplo de contraste**: Un ascensor en caída libre siente gravedad externa, pero si el campo fuera uniforme no aparecería estiramiento mareal interno.

### Error 2 : Decidir el perturbador dominante mirando solo la masa
**Por qué parece correcto**: Una masa mayor suele asociarse con una fuerza mayor, así que parece lógico elegir el cuerpo más masivo.
**Por qué es incorrecto**: La marea depende de masa y distancia; [[d1]] y [[d2]] entran con una sensibilidad muy fuerte.
**Señal de detección**: La respuesta afirma que el Sol domina todas las mareas terrestres solo porque su masa es mayor que la lunar.
**Corrección conceptual**: Comparar simultáneamente [[M1]], [[M2]], [[d1]] y [[d2]] antes de elegir el efecto dominante.
**Mini-ejemplo de contraste**: La Luna puede dominar la marea terrestre aunque el Sol sea más masivo, porque está mucho más cerca.

### Error 3 : Creer que perturbación pequeña significa efecto nulo
**Por qué parece correcto**: Si [[eps]] es muy pequeño, parece que la perturbación no tiene importancia física.
**Por qué es incorrecto**: Una perturbación pequeña puede acumular fase, energía o orientación durante muchas órbitas.
**Señal de detección**: Se elimina [[ap]] de una misión larga sin justificar duración, resonancia ni precisión requerida.
**Corrección conceptual**: Usar [[eps]] para clasificar la escala instantánea y después preguntar si el efecto se acumula.
**Mini-ejemplo de contraste**: Una corrección minúscula por vuelta puede producir una precesión observable después de miles de vueltas.

## Errores de modelo

### Error 4 : Usar la aproximación mareal cerca del límite geométrico
**Por qué parece correcto**: La relación de primer orden es simple y parece aplicable a cualquier distancia.
**Por qué es incorrecto**: La condición física exige que [[R]] sea mucho menor que [[d]]. Si no, el campo no se representa con un solo gradiente.
**Señal de detección**: El problema usa un cuerpo afectado casi tan grande como su separación al perturbador.
**Corrección conceptual**: Pasar a un cálculo espacial del campo o a un modelo extendido cuando la geometría deja de ser pequeña.
**Mini-ejemplo de contraste**: Un satélite lejano puede usar escala mareal; un cuerpo rozando el límite de Roche requiere análisis más completo.

### Error 5 : Tratar el torque mareal como fórmula cerrada
**Por qué parece correcto**: El símbolo [[tau]] sugiere un resultado calculable igual que una aceleración.
**Por qué es incorrecto**: El torque mareal depende de deformación, disipación, fase y distribución interna, no solo de una escala gravitatoria.
**Señal de detección**: Se da un valor numérico de [[tau]] sin datos sobre desfase o propiedades internas.
**Corrección conceptual**: Usar [[tau]] como indicador de evolución rotacional y declarar qué modelo adicional falta.
**Mini-ejemplo de contraste**: Dos lunas con la misma [[am]] pueden calentarse de forma distinta si una es rígida y otra disipa energía.

### Error 6 : Aplicar comparación relativa a cuerpos afectados diferentes
**Por qué parece correcto**: Las razones entre masas y distancias parecen universales.
**Por qué es incorrecto**: La comparación entre [[am1]] y [[am2]] presupone el mismo cuerpo afectado y la misma escala interna.
**Señal de detección**: Se compara una marea sobre la Tierra con otra sobre Io como si compartieran [[R]].
**Corrección conceptual**: Mantener fijo el cuerpo afectado o recalcular cada marea desde sus propios datos.
**Mini-ejemplo de contraste**: Comparar Sol-Luna sobre la Tierra es válido; comparar Tierra-Io y Luna-Tierra exige dos sistemas distintos.

## Errores matemáticos

### Error 7 : Olvidar el cubo de la distancia
**Por qué parece correcto**: La ley gravitatoria más recordada usa dependencia cuadrática, y esa memoria se arrastra al problema mareal.
**Por qué es incorrecto**: La marea no mide fuerza, sino cambio espacial de la fuerza; por eso la distancia aparece con dependencia más intensa.
**Señal de detección**: Al duplicar [[d]], el alumno predice una reducción de cuatro veces en lugar de una reducción mucho mayor.
**Corrección conceptual**: Antes de calcular, verificar que la marea se debilita más rápido que la fuerza gravitatoria total.
**Mini-ejemplo de contraste**: Alejar el perturbador al doble reduce drásticamente [[am]], no solo de manera moderada.

### Error 8 : Invertir la razón de distancias
**Por qué parece correcto**: En un cociente largo, es fácil colocar [[d1]] y [[d2]] en posiciones intercambiadas.
**Por qué es incorrecto**: Invertir la razón cambia el resultado por órdenes de magnitud y puede hacer dominante al perturbador equivocado.
**Señal de detección**: Al acercar el perturbador 1, el resultado calculado para [[am1]] disminuye.
**Corrección conceptual**: Hacer una prueba cualitativa: si una distancia baja, su marea debe subir.
**Mini-ejemplo de contraste**: Un cuerpo que se acerca no puede producir una marea menor si todo lo demás permanece igual.

## Errores de interpretación

### Error 9 : Sumar aceleraciones como escalares sin geometría
**Por qué parece correcto**: El parámetro [[eps]] permite comparar tamaños, y eso puede parecer suficiente.
**Por qué es incorrecto**: [[ac]] y [[ap]] son aceleraciones con dirección; para trayectoria real hace falta suma vectorial.
**Señal de detección**: Se predice excentricidad, fase o inclinación usando solo módulos.
**Corrección conceptual**: Usar [[eps]] para decidir importancia y un modelo vectorial para predecir geometría orbital.
**Mini-ejemplo de contraste**: Dos perturbaciones iguales pueden reforzarse o cancelarse según su dirección.

### Error 10 : Presentar un número sin declarar validez
**Por qué parece correcto**: Un resultado numérico da sensación de cierre.
**Por qué es incorrecto**: Un valor de [[am]] o [[eps]] no dice por sí solo si la aproximación se puede usar.
**Señal de detección**: La solución no menciona relación entre [[R]] y [[d]], pequeñez de [[eps]] ni acumulación temporal.
**Corrección conceptual**: Cerrar siempre con condiciones de validez y con una lectura física del resultado.
**Mini-ejemplo de contraste**: Un mismo [[eps]] puede ser irrelevante en una práctica corta y crucial en una misión de años.

## Regla de autocontrol rápido

Antes de aceptar una respuesta, comprueba tres preguntas: ¿calculo diferencia de campo y no gravedad total?, ¿incluyo el efecto fuerte de la distancia?, ¿comparo la perturbación con la escala central mediante [[eps]] o una justificación equivalente? Si cualquiera de las tres falla, la solución necesita revisión.
