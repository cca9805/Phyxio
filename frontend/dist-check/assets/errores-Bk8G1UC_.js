const e=`## Errores conceptuales\r
\r
### Error 1: Pensar que la analogía es una identidad física\r
\r
**Por qué parece correcto**\r
\r
La forma de las ecuaciones invita a pensar que basta con cambiar letras: [[F]] por [[tau]], [[m]] por [[I]] y [[a]] por [[alpha]]. Es una **analogía formal** muy potente, así que el alumno puede convertirla en una igualdad de naturaleza física.\r
\r
El mecanismo cognitivo es una **generalización excesiva**: si dos ecuaciones tienen la misma estructura, se supone que sus magnitudes cumplen el mismo papel en todos los sentidos.\r
\r
**Por qué es incorrecto**\r
\r
La analogía conserva la estructura causa-resistencia-respuesta, pero no convierte las magnitudes en equivalentes físicos. La fuerza [[F]] no depende de un eje, mientras que el torque [[tau]] sí. La masa [[m]] mide inercia lineal, mientras que el momento de inercia [[I]] depende de la distribución de masa respecto al eje.\r
\r
**Señal de detección**\r
\r
El error aparece cuando se afirma que “[[I]] es la masa en rotación” sin mencionar el eje, la geometría o la distribución de masa.\r
\r
**Corrección conceptual**\r
\r
La analogía sirve para trasladar métodos, no para identificar magnitudes. Lo correcto es decir: [[m]] y [[I]] cumplen papeles estructuralmente parecidos, pero [[I]] contiene información geométrica que [[m]] no tiene.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos cuerpos pueden tener la misma [[m]] y distinto [[I]]. Una barra larga girando por un extremo cuesta más de acelerar angularmente que una masa compacta cercana al eje. Si [[I]] fuera simplemente “masa rotacional”, ambos casos deberían comportarse igual, pero no lo hacen.\r
\r
---\r
\r
## Errores de modelo\r
\r
### Error 1: Aplicar la analogía sin definir el eje de rotación\r
\r
**Por qué parece correcto**\r
\r
En traslación, muchas veces basta con escoger un eje lineal y aplicar\r
\r
{{f:segunda_ley_newton}}\r
\r
. El alumno traslada esa comodidad a rotación e intenta aplicar directamente\r
\r
{{f:segunda_ley_rotacional}}\r
\r
sin haber definido el eje o el brazo de palanca.\r
\r
El mecanismo cognitivo es una **transferencia incompleta de modelo**: se copia la ecuación, pero no las condiciones que hacen válida la versión rotacional.\r
\r
**Por qué es incorrecto**\r
\r
En rotación, el eje no es un detalle opcional. Tanto [[tau]] como [[I]] se calculan respecto a un eje concreto. Cambiar el eje puede cambiar el brazo de palanca, el sentido del torque y el valor del momento de inercia.\r
\r
**Señal de detección**\r
\r
El error se detecta cuando una solución calcula torque o momento de inercia sin indicar “respecto a qué punto” o “respecto a qué eje”.\r
\r
**Corrección conceptual**\r
\r
Antes de usar la analogía, hay que fijar el eje de giro. Solo después tiene sentido interpretar [[tau]], [[I]] y [[alpha]] dentro de una misma ecuación.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una puerta tiene la misma masa, pero no el mismo comportamiento si se empuja cerca de la bisagra o lejos de ella. La fuerza puede ser igual, pero el torque cambia porque cambia el brazo respecto al eje.\r
\r
---\r
\r
## Errores matemáticos\r
\r
### Error 1: Tratar la correspondencia como una igualdad algebraica\r
\r
**Por qué parece correcto**\r
\r
La tabla de correspondencias parece una sustitución directa: [[F]] ↔ [[tau]], [[m]] ↔ [[I]], [[a]] ↔ [[alpha]]. El alumno puede intentar operar con esas flechas como si fueran igualdades.\r
\r
El mecanismo cognitivo es una **confusión entre símbolo relacional y operación matemática**.\r
\r
**Por qué es incorrecto**\r
\r
La correspondencia no significa que [[F]] sea igual a [[tau]], ni que [[m]] sea igual a [[I]]. Sus dimensiones físicas son distintas. La fuerza tiene dimensión M L T^{-2}, mientras que el torque tiene dimensión M L^2 T^{-2}.\r
\r
**Señal de detección**\r
\r
Aparece cuando se escriben expresiones que implican que [[F]] y [[tau]] son la misma magnitud, ignorando la\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
.\r
\r
**Corrección conceptual**\r
\r
La flecha de analogía significa “ocupa un papel parecido en la estructura de la ecuación”, no “tiene el mismo valor” ni “la misma unidad”.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una fuerza de 10 N aplicada a 0.5 m del eje produce un torque de 5 N·m. No tiene sentido decir que 10 N “es igual” a 5 N·m: son magnitudes distintas.\r
\r
---\r
\r
## Errores de interpretación\r
\r
### Error 1: Memorizar la tabla sin entender qué cambia\r
\r
**Por qué parece correcto**\r
\r
La tabla lineal-angular es cómoda y rápida. Permite resolver ejercicios sustituyendo símbolos, así que puede parecer suficiente memorizarla.\r
\r
El mecanismo cognitivo es una **automatización prematura**: se aprende el patrón antes de comprender sus límites.\r
\r
**Por qué es incorrecto**\r
\r
La analogía solo funciona bien si se entiende qué conserva y qué modifica. Conserva la estructura dinámica, pero introduce dependencia geométrica en rotación. Ignorar esa diferencia lleva a interpretar mal problemas con barras, discos, poleas o rodadura.\r
\r
**Señal de detección**\r
\r
El alumno aplica\r
\r
{{f:segunda_ley_rotacional}}\r
\r
, pero no puede explicar por qué [[I]] cambia al cambiar el eje o la forma del cuerpo.\r
\r
**Corrección conceptual**\r
\r
La tabla debe leerse como una guía de razonamiento. Primero se identifica el papel físico de cada magnitud; después se usa la ecuación correspondiente.\r
\r
**Mini-ejemplo de contraste**\r
\r
Si un disco y un aro tienen la misma masa y radio, no tienen el mismo [[I]]. Memorizar que [[m]] corresponde a [[I]] no basta: hay que saber que [[I]] depende de cómo se reparte la masa.\r
\r
---\r
\r
## Regla de autocontrol rápido\r
\r
Antes de usar la analogía lineal-angular, comprueba cuatro preguntas:\r
\r
1. ¿He distinguido claramente el lado traslacional y el lado rotacional?\r
2. ¿He definido el eje de rotación antes de usar [[tau]] o [[I]]?\r
3. ¿Estoy usando la analogía como estructura, no como igualdad física?\r
4. ¿He revisado si la geometría o la distribución de masa cambia el resultado?\r
\r
Si alguna respuesta es “no”, la analogía todavía no está lista para usarse en ese problema.`;export{e as default};
