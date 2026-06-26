## Errores conceptuales

### Error 1: Contar ligaduras redundantes como independientes

**Por qué parece correcto**
Dos ecuaciones distintas pueden tener aspecto diferente y aun así describir la misma restricción física. Al ver dos expresiones para [[phi]], el alumno tiende a sumar dos unidades a [[C]] sin revisar independencia.

**Por qué es incorrecto**
[[C]] solo debe contar restricciones independientes. Si una ligadura es combinación de otra, no reduce una dirección adicional del espacio de configuración y el valor de [[f]] queda artificialmente bajo.

**Señal de detección**
El conteo entrega [[f]] menor que la movilidad observable, o aparece una reacción [[lambda]] extrema sin causa física clara.

**Corrección conceptual**
Antes de calcular [[f]], comprobar independencia local mediante rango o razonamiento geométrico. No basta con contar líneas escritas.

**Mini-ejemplo de contraste**
Imponer distancia fija y también la misma distancia elevada al cuadrado no introduce dos ligaduras. Ambas expresiones describen la misma condición y deben contar como una sola restricción independiente.

## Errores de modelo

### Error 2: Tratar una ligadura no holónoma como si fuera [[phi]]([[q]],[[t]])=0

**Por qué parece correcto**
Muchas restricciones escolares son geométricas y se escriben como ecuaciones de posición. Esa costumbre lleva a forzar cualquier condición como si fuera holónoma.

**Por qué es incorrecto**
Una condición sobre velocidades o rodadura sin deslizamiento puede no integrarse como una ecuación de configuración. Usar el conteo holónomo en ese caso cambia indebidamente [[f]] y altera el significado de [[delta_q]].

**Señal de detección**
La restricción habla de velocidades admisibles, direcciones bloqueadas o contacto rodante, pero el modelo intenta escribirla solo con [[q]].

**Corrección conceptual**
Clasificar primero la restricción: holónoma, no holónoma, unilateral o dependiente del tiempo. Después se elige el formalismo.

**Mini-ejemplo de contraste**
Una partícula en una guía fija admite [[phi]]=0. Un disco que rueda sin deslizar exige una relación entre traslación y rotación; no siempre se reduce igual que una guía geométrica.

## Errores matemáticos

### Error 3: Interpretar [[lambda]] como una coordenada libre

**Por qué parece correcto**
El multiplicador aparece como incógnita adicional en las ecuaciones y puede confundirse con una nueva variable de estado.

**Por qué es incorrecto**
[[lambda]] no aumenta [[f]]. Representa intensidad de reacción asociada a una ligadura activa. Añadirlo como grado de libertad duplica información y rompe la lectura dinámica.

**Señal de detección**
El alumno suma multiplicadores al conteo de grados libres o afirma que una restricción crea movimiento adicional.

**Corrección conceptual**
Separar variables de configuración [[q]] de variables auxiliares de reacción. El conteo de [[f]] depende de [[Nq]] y [[C]], no del número de multiplicadores escritos.

**Mini-ejemplo de contraste**
Un péndulo con cuerda rígida tiene una reacción de tensión asociada a la ligadura, pero esa tensión no permite una segunda coordenada independiente.

## Errores de interpretación

### Error 4: Confundir desplazamiento virtual [[delta_q]] con desplazamiento real

**Por qué parece correcto**
Ambos se escriben como variaciones pequeñas y suelen aparecer cerca de ecuaciones diferenciales.

**Por qué es incorrecto**
[[delta_q]] describe una variación compatible instantánea con la ligadura. No es una trayectoria temporal ni implica que el sistema evolucione realmente en esa dirección.

**Señal de detección**
Se usa [[delta_q]] para calcular tiempo, velocidad o camino recorrido sin introducir dinámica ni condiciones iniciales.

**Corrección conceptual**
Leer [[delta_q]] como herramienta de compatibilidad y trabajo virtual; leer [[qdot]] como cambio temporal real de coordenadas.

**Mini-ejemplo de contraste**
En una partícula obligada a moverse sobre una circunferencia, el desplazamiento virtual tangencial indica una dirección permitida. No dice cuánto avanza la partícula en un segundo.

## Regla de autocontrol rápido

Antes de aceptar el modelo, responder en orden: 1) ¿la restricción puede escribirse como [[phi]]([[q]],[[t]])=0? 2) ¿las [[C]] ligaduras son independientes? 3) ¿[[f]] queda entero y no negativo? 4) ¿[[lambda]] se interpreta como reacción y no como coordenada? 5) ¿[[delta_q]] se usa solo como variación compatible?

Si alguna respuesta falla, no conviene seguir calculando. La prioridad es corregir la arquitectura de ligaduras, porque un conteo mal planteado contamina teoría, ejemplos, interpretación y cualquier simulación posterior.
