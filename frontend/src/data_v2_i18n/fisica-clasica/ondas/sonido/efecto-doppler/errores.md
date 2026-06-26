## Errores conceptuales

### Error 1: Pensar que el efecto Doppler es simetrico

**Por qué parece correcto**

El alumno razona: "si la ambulancia se acerca a 25 m/s o yo me acerco a la ambulancia a 25 m/s, la velocidad relativa es la misma en ambos casos, asi que la frecuencia que escucho debe ser la misma". Esta logica es valida en cinematica, pero no en la fisica de ondas sonoras en un medio material.

**Por qué es incorrecto**

La formula Doppler clasica no es simetrica respecto al intercambio de fuente y receptor. Cuando la fuente se acerca a [[v_sonido]]/2, el denominador de la formula de fuente movil da una [[f_obs]] de 2 veces [[f_fuente]]. Cuando el receptor se acerca a la misma velocidad (fuente fija), la formula de receptor movil da [[f_obs]] de 1.5 veces [[f_fuente]]. La asimetria existe porque el mecanismo fisico es diferente: la fuente movil modifica la longitud de onda en el medio; el receptor movil no.

**Señal de detección**

El alumno usa la misma formula tanto si se mueve la fuente como si se mueve el receptor, o confunde las dos formulas.

**Corrección conceptual**

Siempre identificar primero quien se mueve: si es la fuente, usar la relacion de fuente movil o la general con [[v_receptor]] nulo; si es el receptor, usar la relacion de receptor movil o la general con [[v_fuente]] nulo. La asimetria desaparece solo en el limite de velocidades muy pequenas comparadas con [[v_sonido]], donde ambas formulas convergen a la misma aproximacion lineal.

**Mini-ejemplo de contraste**

Fuente emite 1000 Hz. [[v_sonido]] igual a 340 m/s. Velocidad de acercamiento igual a 34 m/s (10 % de [[v_sonido]]).
Fuente movil acercandose: [[f_obs]] igual a 340 partido entre (340 menos 34) multiplicado por 1000, aproximadamente 1111 Hz.
Receptor movil acercandose: [[f_obs]] igual a (340 mas 34) partido entre 340 multiplicado por 1000, aproximadamente 1100 Hz.
Diferencia de 11 Hz: no es la misma frecuencia aunque la velocidad relativa sea identica.

---

### Error 2: Confundir el convenio de signos de la fuente y el receptor

**Por qué parece correcto**

El alumno ve que tanto [[v_fuente]] como [[v_receptor]] aparecen en la formula general y asume que tienen el mismo convenio de signos: positivo cuando el objeto se mueve en una direccion y negativo cuando se mueve en la opuesta.

**Por qué es incorrecto**

En la relacion Doppler general, el convenio es asimetrico por construccion. [[v_receptor]] es positivo cuando el receptor se mueve **hacia** la fuente (lo que aumenta [[f_obs]], de ahi el signo positivo en el numerador). [[v_fuente]] es positivo cuando la fuente se mueve **alejandose** del receptor (lo que disminuye [[f_obs]], de ahi el signo negativo en el denominador). Aplicar el mismo convenio a ambas variables invierte el efecto de una de ellas.

**Señal de detección**

El alumno calcula una [[f_obs]] menor que [[f_fuente]] para un acercamiento, o una [[f_obs]] mayor para un alejamiento.

**Corrección conceptual**

Memorizar o escribir explicitamente el convenio antes de sustituir: [[v_receptor]] positivo hacia la fuente; [[v_fuente]] positivo alejandose del receptor. Una forma de verificar: poner ambas velocidades a cero y comprobar que [[f_obs]] igual a [[f_fuente]]; luego activar una velocidad con el signo correcto y verificar que el resultado va en la direccion esperada.

**Mini-ejemplo de contraste**

Fuente emite 500 Hz y se acerca a 50 m/s. [[v_sonido]] igual a 340 m/s.
Con el convenio correcto ([[v_fuente]] negativo, acercandose): 340 partido entre (340 menos 50) multiplicado por 500, igual a 586 Hz (sube, correcto).
Con el convenio invertido ([[v_fuente]] positivo, acercandose): 340 partido entre (340 mas 50) multiplicado por 500, igual a 436 Hz (baja, incorrecto para acercamiento).

---

## Errores de modelo

### Error 1: Aplicar la formula Doppler con una fuente supersonica

**Por qué parece correcto**

El alumno ve la relacion de fuente movil y la aplica para cualquier valor de [[v_fuente]], incluyendo valores iguales o mayores que [[v_sonido]], obteniendo resultados numericos que parecen validos.

**Por qué es incorrecto**

Para [[v_fuente]] igual a [[v_sonido]], el denominador es cero: la formula da [[f_obs]] infinita, lo que no tiene sentido fisico. Para [[v_fuente]] mayor que [[v_sonido]], el denominador es negativo: la formula da [[f_obs]] negativa, que tampoco tiene sentido. Fisicamente, cuando [[v_fuente]] supera [[v_sonido]], la fuente supera sus propios frentes de onda y no existe solucion de onda periodica en la region delantera. Se forma el cono de Mach y se produce el boom sonico.

**Señal de detección**

El denominador de la formula resulta cero, negativo, o muy cercano a cero, produciendo un resultado fisicamente absurdo.

**Corrección conceptual**

Verificar siempre que [[v_fuente]] es menor que [[v_sonido]] antes de aplicar la formula Doppler. Si la fuente es supersonica, el modelo de onda Doppler no aplica: habria que usar la teoria del cono de Mach para describir el patron de onda detrás del frente de choque.

**Mini-ejemplo de contraste**

Fuente a [[v_fuente]] igual a 340 m/s (exactamente [[v_sonido]]). El denominador de la formula de fuente movil es 340 menos 340 igual a 0. La formula da infinito. Fisicamente, todos los frentes de onda emitidos se apilan en el mismo punto formando el frente de choque: el boom sonico.

---

## Errores matemáticos

### Error 1: Invertir el cociente en la formula

**Por qué parece correcto**

La formula tiene la forma [[f_fuente]] multiplicado por un cociente de velocidades. El alumno no recuerda que velocidad va en el numerador y que va en el denominador, y escribe el cociente al reves.

**Por qué es incorrecto**

En la relacion de fuente movil, el numerador es [[v_sonido]] y el denominador es [[v_sonido]] menos [[v_fuente]]. Si se invierte, el resultado es [[f_obs]] igual a [[f_fuente]] multiplicado por ([[v_sonido]] menos [[v_fuente]]) partido entre [[v_sonido]], que da siempre una frecuencia menor que [[f_fuente]] independientemente del signo de [[v_fuente]]: el resultado es incorrecto tanto para acercamiento como para alejamiento.

**Señal de detección**

El alumno obtiene [[f_obs]] siempre menor que [[f_fuente]] tanto si la fuente se acerca como si se aleja.

**Corrección conceptual**

Recordar la estructura de la formula desde el mecanismo fisico: cuando la fuente se acerca (denominador menor que [[v_sonido]]), [[f_obs]] debe ser mayor. Por tanto, [[v_sonido]] debe ir en el numerador, no en el denominador. Una comprobacion rapida: con [[v_fuente]] igual a cero el resultado debe ser [[f_fuente]]; con [[v_fuente]] negativo (acercandose) el resultado debe ser mayor que [[f_fuente]].

**Mini-ejemplo de contraste**

Fuente a 440 Hz acercandose a 34 m/s. [[v_sonido]] igual a 340 m/s.
Formula correcta: 340 partido entre (340 menos 34) multiplicado por 440 igual a aproximadamente 474 Hz (sube, correcto).
Formula invertida: (340 menos 34) partido entre 340 multiplicado por 440 igual a aproximadamente 396 Hz (baja, incorrecto para acercamiento).

---

## Errores de interpretación

### Error 1: Pensar que el boom sonico se produce solo cuando el avion pasa por encima

**Por qué parece correcto**

Cuando vemos o escuchamos un avion supersónico en el cine, el boom suena justo cuando el avion pasa. El alumno concluye que el boom es un evento instantaneo que ocurre en el momento del paso.

**Por qué es incorrecto**

El boom sonico no es un evento instantaneo ni local: es una onda de choque en forma de cono que acompaña al avion continuamente mientras vuela en regimen supersonico. El cono de Mach se extiende desde la punta del avion hacia atras con semiangulo igual al arcoseno de la razon [[v_sonido]] partido entre [[v_fuente]]. El observador en tierra escucha el boom cuando el cono pasa por su posicion, no cuando el avion esta directamente encima. Para un avion a gran altitud, el boom puede escucharse varios segundos despues de que el avion haya pasado la vertical del observador.

**Señal de detección**

El alumno describe el boom sonico como un fenomeno que ocurre "cuando el avion supera el muro del sonido" o "en el momento exacto del paso".

**Corrección conceptual**

El boom sonico es la proyeccion en tierra del cono de Mach que el avion arrastra continuamente. El tiempo entre el paso del avion y la llegada del boom al suelo depende de la altitud del vuelo y la velocidad del avion. A mayor altitud o menor numero de Mach, el boom llega mas tarde y con menor intensidad por la mayor distancia recorrida y la atenuacion geometrica.

**Mini-ejemplo de contraste**

Un avion supersónico a M igual a 2 y altitud de 10 km. El semiangulo del cono de Mach es el arcoseno de 0.5, igual a 30 grados. El boom llega al suelo cuando el cono, que viaja con el avion, alcanza la posicion del observador. Para un avion que acaba de pasar la vertical del observador, el boom todavia tardara en llegar dependiendo de cuanto tarda en propagarse el cono 10 km hacia abajo a la velocidad del sonido.

---

## Regla de autocontrol rápido

Para verificar rapidamente un calculo de efecto Doppler, aplicar las tres comprobaciones siguientes:

**Comprobacion 1 — Sentido del desplazamiento**: Si la fuente o el receptor se acercan, [[f_obs]] debe ser mayor que [[f_fuente]]. Si se alejan, menor. Si el resultado contradice esto, hay un error de signo o de formula.

**Comprobacion 2 — Caso de reposo**: Poner [[v_fuente]] igual a cero y [[v_receptor]] igual a cero en la formula general. El resultado debe ser exactamente [[f_fuente]]. Si no es asi, la formula tiene un error de escritura.

**Comprobacion 3 — Limite de velocidad de la fuente**: Verificar que [[v_fuente]] es estrictamente menor que [[v_sonido]]. Si la fuente supera [[v_sonido]], la formula no es aplicable y cualquier resultado es incorrecto.
