const e=`# Errores frecuentes

## Errores conceptuales

### Error 1: Confundir intensidad con energia total

**Por qué parece correcto**

La palabra intensidad se usa como sinonimo de "mucha energia". Esa analogia cotidiana hace que el alumno lea [[S_med]] como energia almacenada o energia final recibida.

**Por qué es incorrecto**

[[S_med]] es potencia por area. La energia por volumen se lee con [[u_EM]] y la potencia total necesita el area [[A]] para obtener [[P_rad]].

**Señal de detección**

El alumno obtiene un resultado en W/m2 y lo interpreta como energia o como potencia total de un dispositivo.

**Corrección conceptual**

Primero separa lectura local y lectura total. [[S_med]] describe la onda en una region; [[P_rad]] describe lo que recibe un objeto concreto.

**Mini-ejemplo de contraste**

Dos sensores bajo la misma [[S_med]] no reciben la misma [[P_rad]] si sus areas efectivas son distintas. La onda local es la misma, pero la captacion total cambia.

## Errores de modelo

### Error 2: Duplicar siempre la presion de radiacion

**Por qué parece correcto**

Muchos ejercicios usan espejos, y el alumno generaliza en exceso el caso reflectante. Memoriza que el empuje puede duplicarse y lo aplica tambien a superficies absorbentes.

**Por qué es incorrecto**

Este leaf usa [[p_rad]] para absorcion ideal. Si hay reflexion especular, cambia el momento saliente y hace falta un modelo optico extendido.

**Señal de detección**

El enunciado dice absorbente, negro o detector termico, pero la solucion trata la superficie como espejo perfecto.

**Corrección conceptual**

Antes de calcular [[p_rad]], decide si la superficie absorbe, refleja o mezcla ambos comportamientos. Sin esa decision, el modelo mecanico no esta fijado.

**Mini-ejemplo de contraste**

Una lamina negra y un espejo bajo la misma [[S_med]] no tienen la misma presion efectiva. Aplicar el caso del espejo a la lamina negra exagera el empuje.

## Errores matemáticos

### Error 3: Mezclar intensidad, presion y potencia

**Por qué parece correcto**

Las relaciones son cortas y parecen simples conversiones. La confusion de magnitudes lleva a mover [[c]] o [[A]] sin pensar que cambia la pregunta fisica.

**Por qué es incorrecto**

[[S_med]], [[p_rad]] y [[P_rad]] tienen dimensiones distintas. [[S_med]] es flujo local, [[p_rad]] es fuerza por area y [[P_rad]] es potencia total interceptada.

**Señal de detección**

La solucion compara W/m2 con W, o habla de presion sin haber usado la conversion desde intensidad mediante [[c]].

**Corrección conceptual**

Haz una lectura dimensional antes de interpretar. Si aparece [[A]], la pregunta probablemente es total; si aparece una superficie mecanica, probablemente es presion.

**Mini-ejemplo de contraste**

Un haz intenso sobre una ventana diminuta puede tener [[S_med]] grande y [[P_rad]] pequeña. Decir que ambas lecturas son equivalentes cambia el sistema estudiado.

## Errores de interpretación

### Error 4: Comparar directamente campos electricos y magneticos

**Por qué parece correcto**

Los dibujos de ondas EM muestran [[E0]] y [[B0]] con simetria visual. Esa imagen induce a esperar valores numericos parecidos en unidades SI.

**Por qué es incorrecto**

[[E0]] y [[B0]] tienen dimensiones distintas y se conectan mediante [[c]]. La simetria geometrica no implica igualdad numerica.

**Señal de detección**

El alumno sospecha que [[B0]] es irrelevante solo porque su numero en teslas es mucho menor que el numero de [[E0]] en V/m.

**Corrección conceptual**

Lee ambos campos como partes acopladas de una misma onda. El transporte de energia y momento es electromagnetico, no electricamente aislado.

**Mini-ejemplo de contraste**

Una onda puede tener [[B0]] pequeño en escala SI y aun asi transportar energia mediante [[S_med]]. El valor numerico aislado no mide importancia fisica.

## Regla de autocontrol rápido

Antes de aceptar un resultado, aplica tres preguntas. Primero, pregunta si la magnitud pedida es local o total: [[u_EM]], [[S_med]], [[g_EM]] y [[p_rad]] son lecturas locales, mientras [[P_rad]] necesita [[A]]. Segundo, identifica si la superficie absorbe o refleja. Tercero, verifica si [[c]] convierte en la direccion fisica correcta.

La regla practica es sencilla: W/m2 no es W, presion no es potencia, y campo magnetico pequeño en teslas no significa campo irrelevante. Si la interpretacion no distingue esas tres ideas, el calculo puede ser numericamente razonable y fisicamente incorrecto.
`;export{e as default};
