# Errores comunes en la dispersión angular en 2D

## Errores conceptuales

### Error 1: Ignorar el carácter vectorial de la colisión
**Por qué parece correcto**: El cerebro tiende a simplificar problemas sumando rapideces directamente como si fueran escalares en una sola dimensión.
**Por qué es incorrecto**: En 2D, el momento lineal se conserva como un vector. Sumar [[v1f]] y [[v2f]] sin considerar sus ángulos [[theta1]] y [[theta2]] viola la geometría del espacio y las leyes de Newton.
**Señal de detección**: Si al sumar las rapideces finales obtienes un valor igual o mayor a la inicial sin aplicar senos o cosenos, estás cometiendo este error.
**Corrección conceptual**: Siempre descompón la velocidad en componentes X e Y antes de realizar cualquier suma o balance.
**Mini-ejemplo**: Si lanzas una bola a 1 m/s, las velocidades de salida podrían ser [[v1f]] = 0.7 m/s y [[v2f]] = 0.7 m/s a 45 grados. La suma escalar es 1.4 m/s (incorrecto), pero la vectorial es 1 m/s (correcto).

### Error 2: Asumir que los ángulos siempre suman 90 grados
**Por qué parece correcto**: Es un resultado famoso que se enseña como regla general en billar y física introductoria.
**Por qué es incorrecto**: Esta regla solo es válida para choques perfectamente elásticos entre masas idénticas donde el blanco está inicialmente en reposo.
**Señal de detección**: Aplicar que [[theta_total]] = 90° cuando las masas son diferentes o el choque es inelástico.
**Corrección conceptual**: Calcula los ángulos individualmente usando los balances de momento para cada eje a menos que se cumplan todas las condiciones restrictivas.
**Mini-ejemplo**: En un choque entre una bola de boliche [[m1]] y una de ping-pong [[m2]], el ángulo de apertura será mucho menor a 90 grados.

## Errores de modelo

### Error 3: Confundir los ejes de referencia
**Por qué parece correcto**: Se eligen ejes arbitrarios que parecen facilitar el dibujo pero complican el álgebra.
**Por qué es incorrecto**: El modelo estándar del leaf define el eje X como la dirección de incidencia de [[v1i]]. Cambiar esto sin ajustar las funciones trigonométricas lleva a errores de proyección.
**Señal de detección**: Obtener que el momento vertical inicial no es cero cuando debería serlo según el planteamiento estándar.
**Corrección conceptual**: Alinea siempre el vector incidente con el eje X. Así, el momento inicial en Y será siempre cero por definición.
**Mini-ejemplo**: Si la bola entra en diagonal, rótala mentalmente para que entre horizontal antes de aplicar las fórmulas núcleo.

### Error 4: Aplicar conservación de energía en choques inelásticos
**Por qué parece correcto**: Existe la idea de que la energía "siempre se conserva" (lo cual es cierto para la energía total, pero no para la cinética mecánica).
**Por qué es incorrecto**: En choques reales, parte de la energía se convierte en calor o deformación. Usar el balance de energía elástica en un choque inelástico sobreestima las rapideces finales.
**Señal de detección**: El enunciado menciona "pérdida de energía" o "choque plástico" y tú sigues igualando [[Ki]] a [[Kf]].
**Corrección conceptual**: Usa solo los balances de momento lineal, que se conservan independientemente de la elasticidad del impacto.
**Mini-ejemplo**: En un choque de autos que quedan abollados, la energía cinética final [[Kf]] es drásticamente menor a la inicial [[Ki]].

## Errores matemáticos

### Error 5: Intercambiar seno y coseno en las proyecciones
**Por qué parece correcto**: Confusión rápida al identificar el ángulo con el eje adyacente o el opuesto.
**Por qué es incorrecto**: El eje X (incidencia) requiere el coseno para la componente paralela, mientras que el eje Y requiere el seno para la lateral.
**Señal de detección**: Obtener componentes de momento en Y que no se cancelan correctamente.
**Corrección conceptual**: Recuerda que la componente que "cierra" el ángulo con el eje X es siempre el coseno.
**Mini-ejemplo**: Para un ángulo de 30°, la componente de avance es [[v1f]] * cos(30°), no [[v1f]] * sin(30°).

### Error 6: No despejar correctamente en sistemas de dos ecuaciones
**Por qué parece correcto**: El sistema de ecuaciones de 2D puede volverse algebraicamente denso y se omiten pasos intermedios.
**Por qué es incorrecto**: Tienes dos ecuaciones independientes (X e Y) y dos incógnitas principales ([[v1f]] y [[v2f]]). Un error de signo al despejar invalida ambos resultados.
**Señal de detección**: Valores de rapidez negativos o imaginarios al resolver la raíz cuadrada de la energía.
**Corrección conceptual**: Despeja una variable en la ecuación de Y (que es más sencilla al ser igual a cero) y sustitúyela en la de X.
**Mini-ejemplo**: Si de Y obtienes [[v1f]] = [[v2f]], asegúrate de que esto sea físicamente posible según los ángulos dados.

## Errores de interpretación

### Error 7: Ignorar el significado de un ángulo negativo
**Por qué parece correcto**: Se asumen los ángulos como valores absolutos en el primer cuadrante.
**Por qué es incorrecto**: Físicamente, si un cuerpo sale hacia "arriba", el otro debe salir hacia "abajo". Ignorar esto en el balance de momento lateral lleva a creer que el momento se crea de la nada.
**Señal de detección**: Escribir que la suma de momentos verticales es positiva en lugar de cero.
**Corrección conceptual**: Considera que [[theta2]] representa una dirección opuesta a [[theta1]]. En las fórmulas, esto se refleja en el signo negativo de la componente vertical del segundo cuerpo.
**Mini-ejemplo**: Dos bolas saliendo ambas hacia arriba tras chocar horizontalmente es un evento físicamente imposible.

### Error 8: Creer que la dispersión angular es independiente de las masas
**Por qué parece correcto**: Se piensa que solo importa "el ángulo con el que se golpea".
**Por qué es incorrecto**: La relación de masas [[m1]]/[[m2]] dicta el ángulo máximo posible y el reparto de energía.
**Señal de detección**: Usar la misma solución para un choque de billar que para un choque de un neutrón contra un núcleo pesado.
**Corrección conceptual**: Verifica siempre cómo afecta la inercia de cada cuerpo a la desviación final. Las masas son los "pesos" que determinan qué vector tiene más influencia.
**Mini-ejemplo**: Un camión [[m1]] apenas se desvía al chocar lateralmente con un mosquito [[m2]], sin importar el ángulo de impacto.

## Preguntas reales del alumno
- **¿Puede [[theta1]] ser 0?** Solo en choques perfectamente frontales (1D) o si no hay interacción en absoluto (parámetro de impacto infinito).

## Regla de autocontrol rápido
Para validar tu resultado al instante, comprueba el balance en el eje Y: el producto [[m1]] * [[v1f]] * sin([[theta1]]) debe ser igual a [[m2]] * [[v2f]] * sin([[theta2]]). Si no coinciden, tu geometría de salida es incorrecta. Además, en cualquier choque pasivo, la rapidez final del proyectil [[v1f]] debe ser estrictamente menor o igual a la inicial [[v1i]]. Si obtienes una velocidad mayor, has "creado" energía accidentalmente en tus cálculos.
