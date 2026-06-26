const e=`# Errores frecuentes: Velocidad terminal\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Como [[v_t]] es el numero final que se calcula, muchos alumnos creen que esa rapidez "causa" el equilibrio.\r
\r
#### por que es incorrecto\r
La causalidad va al reves: el equilibrio entre peso y arrastre produce [[v_t]]. La rapidez terminal es consecuencia del balance de fuerzas, no su origen.\r
\r
#### senal de deteccion\r
La solucion dice "cuando el objeto alcanza [[v_t]] desaparece el peso" o frases parecidas.\r
\r
#### correccion conceptual\r
Repetir siempre la cadena causal correcta: peso y arrastre se igualan, la fuerza neta se anula, la aceleracion desaparece y la rapidez queda en [[v_t]].\r
\r
#### mini-ejemplo\r
Mal: "[[v_t]] hace que ya no haya fuerza".\r
Bien: "cuando arrastre y peso se compensan, la rapidez se estabiliza en [[v_t]]".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
La ecuacion esta disponible y parece suficiente sustituir datos.\r
\r
#### por que es incorrecto\r
El problema real es elegir entre modelo lineal y cuadratico. Si esa decision falla, el valor calculado de [[v_t]] pierde significado fisico.\r
\r
#### senal de deteccion\r
Se usa [[b]] en un problema donde el enunciado enfatiza [[rho]], [[C_d]] y [[A]], o al reves.\r
\r
#### correccion conceptual\r
Antes de calcular, justificar que ley de arrastre es defendible en ese contexto.\r
\r
#### mini-ejemplo\r
Mal: usar la formula lineal para un paracaidas grande sin discutir geometria.\r
Bien: usar el bloque cuadratico y explicar el papel de [[A]] y [[C_d]].\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
El alumno mezcla facilmente [[v_t]] con una velocidad instantanea cualquiera o confunde [[C_d]] con [[b]].\r
\r
#### por que es incorrecto\r
[[v_t]] es una rapidez de equilibrio, mientras [[b]] y [[C_d]] pertenecen a modelos distintos de arrastre.\r
\r
#### senal de deteccion\r
La solucion presenta [[v_t]] como si fuera la velocidad inicial o usa [[b]] y [[C_d]] en la misma ecuacion sin transicion de modelo.\r
\r
#### correccion conceptual\r
Separar magnitudes por rol: [[v_t]] es resultado; [[b]] es parametro lineal; [[C_d]] es parametro cuadratico; [[A]] aparece solo en el bloque cuadratico.\r
\r
#### mini-ejemplo\r
Mal: "si aumenta [[C_d]], tambien aumenta [[b]] automaticamente".\r
Bien: "[[C_d]] no reemplaza a [[b]]; pertenece a otro bloque de modelado".\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
Un modelo que dio un buen valor en un ejercicio previo parece suficiente para cualquier caso parecido.\r
\r
#### por que es incorrecto\r
La rapidez limite depende de la ley de arrastre. Un bloque que ajusta a baja rapidez puede dejar de representar bien el sistema en otra banda.\r
\r
#### senal de deteccion\r
El valor calculado de [[v_t]] contradice de forma sistematica datos experimentales o una grafica de velocidad-tiempo.\r
\r
#### correccion conceptual\r
Comparar tendencias observadas con la ley de arrastre supuesta y cambiar de bloque si el error crece con la rapidez.\r
\r
#### mini-ejemplo\r
Mal: sostener un modelo lineal aunque la respuesta observada cambie con rapidez de forma no proporcional.\r
Bien: pasar a un modelo cuadratico o por tramos.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
Una vez aprendida la formula, parece tentador tratarla como universal.\r
\r
#### por que es incorrecto\r
[[C_d]], [[A]] y hasta [[rho]] dependen del contexto. Sin declarar esas condiciones, el valor de [[v_t]] se vuelve poco transferible.\r
\r
#### senal de deteccion\r
Se cita una rapidez terminal sin mencionar medio, postura o area efectiva.\r
\r
#### correccion conceptual\r
Declarar siempre medio, geometria y criterio de modelo junto con el resultado.\r
\r
#### mini-ejemplo\r
Mal: "la velocidad terminal del ciclista es X".\r
Bien: "la velocidad terminal es X para esta postura, esta [[A]] y esta densidad de aire".\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
Los pasos algebraicos parecen rutinarios.\r
\r
#### por que es incorrecto\r
Un error de despeje puede invertir dependencias y hacer que [[v_t]] aumente cuando deberia disminuir.\r
\r
#### senal de deteccion\r
El alumno concluye que aumentar [[rho]] o [[A]] incrementa [[v_t]] en el modelo cuadratico.\r
\r
#### correccion conceptual\r
Verificar monotonia fisica antes de aceptar el resultado: mayor [[rho]], [[C_d]] o [[A]] deben reducir [[v_t]] en el modelo cuadratico.\r
\r
#### mini-ejemplo\r
Mal: escribir [[v_t]] proporcional a [[rho]].\r
Bien: revisar el radical y comprobar la dependencia inversa.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Las unidades parecen un detalle secundario frente al numero final.\r
\r
#### por que es incorrecto\r
Una mala conversion desplaza [[v_t]] varios ordenes de magnitud y cambia la interpretacion del problema.\r
\r
#### senal de deteccion\r
El resultado numerico es incompatible con la experiencia fisica elemental del sistema.\r
\r
#### correccion conceptual\r
Unificar SI desde el inicio y revisar que [[v_t]] quede en m/s.\r
\r
#### mini-ejemplo\r
Mal: usar [[A]] en cm² y [[m]] en kg sin conversion.\r
Bien: convertir todo a SI antes de sustituir.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales parecen sinonimo de rigor.\r
\r
#### por que es incorrecto\r
La incertidumbre del modelo suele ser mayor que la precision numerica mostrada.\r
\r
#### senal de deteccion\r
Se reporta [[v_t]] con varias cifras decimales sin discutir incertidumbre de [[C_d]] o [[A]].\r
\r
#### correccion conceptual\r
Usar cifras significativas coherentes con la calidad del modelo y de los datos.\r
\r
#### mini-ejemplo\r
Mal: "[[v_t]] = 47.382914 m/s".\r
Bien: "[[v_t]] ~ 47 m/s" con nota de validez del modelo.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Llegar a un numero parece cerrar el problema.\r
\r
#### por que es incorrecto\r
Sin explicar por que esa rapidez es limite y que variable la gobierna, no hay comprension fisica del resultado.\r
\r
#### senal de deteccion\r
La solucion termina tras el calculo sin mencionar equilibrio de fuerzas ni variable dominante.\r
\r
#### correccion conceptual\r
Cerrar siempre con: equilibrio responsable, parametro dominante y limite de validez.\r
\r
#### mini-ejemplo\r
Mal: "resultado final [[v_t]] = 12 m/s".\r
Bien: "[[v_t]] = 12 m/s porque el arrastre equilibra al peso en ese valor bajo el modelo cuadratico adoptado".\r
\r
## Regla de autocontrol rápido\r
\r
Checklist final:\r
\r
- ¿Se justifico el bloque de arrastre usado?\r
- ¿[[v_t]] fue interpretada como rapidez de equilibrio y no como velocidad cualquiera?\r
- ¿Las dependencias con [[m]], [[b]], [[rho]], [[C_d]] y [[A]] tienen sentido fisico?\r
- ¿Las unidades llevan a m/s?\r
- ¿El resultado viene acompañado por limite de validez?\r
\r
Si alguna respuesta es no, la resolucion todavia no esta cerrada.\r
`;export{e as default};
