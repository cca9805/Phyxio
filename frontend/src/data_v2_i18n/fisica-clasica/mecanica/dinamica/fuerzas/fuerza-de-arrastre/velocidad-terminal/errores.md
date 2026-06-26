# Errores frecuentes: Velocidad terminal

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Como [[v_t]] es el numero final que se calcula, muchos alumnos creen que esa rapidez "causa" el equilibrio.

#### por que es incorrecto
La causalidad va al reves: el equilibrio entre peso y arrastre produce [[v_t]]. La rapidez terminal es consecuencia del balance de fuerzas, no su origen.

#### senal de deteccion
La solucion dice "cuando el objeto alcanza [[v_t]] desaparece el peso" o frases parecidas.

#### correccion conceptual
Repetir siempre la cadena causal correcta: peso y arrastre se igualan, la fuerza neta se anula, la aceleracion desaparece y la rapidez queda en [[v_t]].

#### mini-ejemplo
Mal: "[[v_t]] hace que ya no haya fuerza".
Bien: "cuando arrastre y peso se compensan, la rapidez se estabiliza en [[v_t]]".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
La ecuacion esta disponible y parece suficiente sustituir datos.

#### por que es incorrecto
El problema real es elegir entre modelo lineal y cuadratico. Si esa decision falla, el valor calculado de [[v_t]] pierde significado fisico.

#### senal de deteccion
Se usa [[b]] en un problema donde el enunciado enfatiza [[rho]], [[C_d]] y [[A]], o al reves.

#### correccion conceptual
Antes de calcular, justificar que ley de arrastre es defendible en ese contexto.

#### mini-ejemplo
Mal: usar la formula lineal para un paracaidas grande sin discutir geometria.
Bien: usar el bloque cuadratico y explicar el papel de [[A]] y [[C_d]].

### Error 3: Confundir magnitudes similares

#### por que parece correcto
El alumno mezcla facilmente [[v_t]] con una velocidad instantanea cualquiera o confunde [[C_d]] con [[b]].

#### por que es incorrecto
[[v_t]] es una rapidez de equilibrio, mientras [[b]] y [[C_d]] pertenecen a modelos distintos de arrastre.

#### senal de deteccion
La solucion presenta [[v_t]] como si fuera la velocidad inicial o usa [[b]] y [[C_d]] en la misma ecuacion sin transicion de modelo.

#### correccion conceptual
Separar magnitudes por rol: [[v_t]] es resultado; [[b]] es parametro lineal; [[C_d]] es parametro cuadratico; [[A]] aparece solo en el bloque cuadratico.

#### mini-ejemplo
Mal: "si aumenta [[C_d]], tambien aumenta [[b]] automaticamente".
Bien: "[[C_d]] no reemplaza a [[b]]; pertenece a otro bloque de modelado".

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
Un modelo que dio un buen valor en un ejercicio previo parece suficiente para cualquier caso parecido.

#### por que es incorrecto
La rapidez limite depende de la ley de arrastre. Un bloque que ajusta a baja rapidez puede dejar de representar bien el sistema en otra banda.

#### senal de deteccion
El valor calculado de [[v_t]] contradice de forma sistematica datos experimentales o una grafica de velocidad-tiempo.

#### correccion conceptual
Comparar tendencias observadas con la ley de arrastre supuesta y cambiar de bloque si el error crece con la rapidez.

#### mini-ejemplo
Mal: sostener un modelo lineal aunque la respuesta observada cambie con rapidez de forma no proporcional.
Bien: pasar a un modelo cuadratico o por tramos.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
Una vez aprendida la formula, parece tentador tratarla como universal.

#### por que es incorrecto
[[C_d]], [[A]] y hasta [[rho]] dependen del contexto. Sin declarar esas condiciones, el valor de [[v_t]] se vuelve poco transferible.

#### senal de deteccion
Se cita una rapidez terminal sin mencionar medio, postura o area efectiva.

#### correccion conceptual
Declarar siempre medio, geometria y criterio de modelo junto con el resultado.

#### mini-ejemplo
Mal: "la velocidad terminal del ciclista es X".
Bien: "la velocidad terminal es X para esta postura, esta [[A]] y esta densidad de aire".

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
Los pasos algebraicos parecen rutinarios.

#### por que es incorrecto
Un error de despeje puede invertir dependencias y hacer que [[v_t]] aumente cuando deberia disminuir.

#### senal de deteccion
El alumno concluye que aumentar [[rho]] o [[A]] incrementa [[v_t]] en el modelo cuadratico.

#### correccion conceptual
Verificar monotonia fisica antes de aceptar el resultado: mayor [[rho]], [[C_d]] o [[A]] deben reducir [[v_t]] en el modelo cuadratico.

#### mini-ejemplo
Mal: escribir [[v_t]] proporcional a [[rho]].
Bien: revisar el radical y comprobar la dependencia inversa.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Las unidades parecen un detalle secundario frente al numero final.

#### por que es incorrecto
Una mala conversion desplaza [[v_t]] varios ordenes de magnitud y cambia la interpretacion del problema.

#### senal de deteccion
El resultado numerico es incompatible con la experiencia fisica elemental del sistema.

#### correccion conceptual
Unificar SI desde el inicio y revisar que [[v_t]] quede en m/s.

#### mini-ejemplo
Mal: usar [[A]] en cm² y [[m]] en kg sin conversion.
Bien: convertir todo a SI antes de sustituir.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales parecen sinonimo de rigor.

#### por que es incorrecto
La incertidumbre del modelo suele ser mayor que la precision numerica mostrada.

#### senal de deteccion
Se reporta [[v_t]] con varias cifras decimales sin discutir incertidumbre de [[C_d]] o [[A]].

#### correccion conceptual
Usar cifras significativas coherentes con la calidad del modelo y de los datos.

#### mini-ejemplo
Mal: "[[v_t]] = 47.382914 m/s".
Bien: "[[v_t]] ~ 47 m/s" con nota de validez del modelo.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Llegar a un numero parece cerrar el problema.

#### por que es incorrecto
Sin explicar por que esa rapidez es limite y que variable la gobierna, no hay comprension fisica del resultado.

#### senal de deteccion
La solucion termina tras el calculo sin mencionar equilibrio de fuerzas ni variable dominante.

#### correccion conceptual
Cerrar siempre con: equilibrio responsable, parametro dominante y limite de validez.

#### mini-ejemplo
Mal: "resultado final [[v_t]] = 12 m/s".
Bien: "[[v_t]] = 12 m/s porque el arrastre equilibra al peso en ese valor bajo el modelo cuadratico adoptado".

## Regla de autocontrol rápido

Checklist final:

- ¿Se justifico el bloque de arrastre usado?
- ¿[[v_t]] fue interpretada como rapidez de equilibrio y no como velocidad cualquiera?
- ¿Las dependencias con [[m]], [[b]], [[rho]], [[C_d]] y [[A]] tienen sentido fisico?
- ¿Las unidades llevan a m/s?
- ¿El resultado viene acompañado por limite de validez?

Si alguna respuesta es no, la resolucion todavia no esta cerrada.
