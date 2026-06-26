const a=`## Errores conceptuales

### Error 1: creer que la materia viaja con la onda

**Por qué parece correcto**

La analogia con objetos que se desplazan hace pensar que la forma visible arrastra al material completo. En agua o cuerda, la cresta parece una cosa que avanza.

**Por qué es incorrecto**

El patron se propaga, pero cada punto del medio puede oscilar localmente alrededor de su equilibrio. [[v]] pertenece al patron y [[y]] al estado local.

**Señal de detección**

El alumno afirma que una particula de la cuerda recorre una longitud de onda en cada ciclo.

**Corrección conceptual**

Distinguir avance de la forma y movimiento del medio. Una marca en la cuerda sube y baja, mientras la cresta se desplaza.

**Mini-ejemplo de contraste**

Una cinta atada a la cuerda oscila en su sitio cuando pasa el pulso. Si la cinta no avanza con la cresta, la materia no esta viajando con la onda.

## Errores de modelo

### Error 2: forzar periodicidad en un pulso unico

**Por qué parece correcto**

El primer dibujo escolar de onda suele ser sinusoidal. Esa imagen lleva a buscar [[lambda]], [[f]] y [[T]] incluso cuando solo hay un pulso aislado.

**Por qué es incorrecto**

Un pulso unico puede propagarse sin repeticion espacial estable. Forzar magnitudes periodicas introduce una precision falsa y desplaza la atencion de [[y]].

**Señal de detección**

El alumno intenta medir distancia entre crestas donde solo aparece una perturbacion aislada.

**Corrección conceptual**

Primero decidir si hay patron repetitivo. Si no lo hay, describir forma, amplitud y rapidez de avance sin inventar periodicidad.

**Mini-ejemplo de contraste**

Un golpe unico en una cuerda viaja de izquierda a derecha. Es una onda, aunque no tenga muchas crestas sucesivas.

## Errores matemáticos

### Error 3: usar frecuencia como si fuera velocidad

**Por qué parece correcto**

La asociacion intuitiva entre "mas rapido" y "mas veces por segundo" mezcla ritmo temporal con avance espacial.

**Por qué es incorrecto**

[[f]] cuenta ciclos por segundo; [[v]] mide distancia recorrida por el patron por segundo. Para conectar ambas hace falta [[lambda]].

**Señal de detección**

El resultado de velocidad aparece expresado en hertzios o el alumno no usa ninguna distancia espacial.

**Corrección conceptual**

Leer primero si el dato describe repeticion temporal o separacion espacial. Solo despues se conecta con la rapidez del patron.

**Mini-ejemplo de contraste**

Dos ondas en el mismo medio pueden propagarse con rapidez parecida y tener frecuencias distintas. La diferencia visible aparece en la separacion entre crestas.

## Errores de interpretación

### Error 4: confundir amplitud con longitud de onda

**Por qué parece correcto**

[[A]] y [[lambda]] son distancias, asi que una lectura rapida puede tratarlas como el mismo tipo de medida.

**Por qué es incorrecto**

[[A]] mide separacion respecto al equilibrio; [[lambda]] mide separacion entre puntos equivalentes del patron. Una es lectura local y otra lectura espacial.

**Señal de detección**

El alumno mide [[lambda]] desde el eje de equilibrio hasta una cresta.

**Corrección conceptual**

Dibujar [[A]] verticalmente desde el equilibrio y [[lambda]] horizontalmente entre dos crestas consecutivas.

**Mini-ejemplo de contraste**

Una ondulacion larga y baja tiene gran [[lambda]] y pequena [[A]]. Cambiar una no obliga a cambiar la otra.

## Regla de autocontrol rápido

Antes de cerrar una respuesta, aplicar tres preguntas. Primera: estoy describiendo movimiento local o avance del patron? Segunda: la distancia medida es altura de perturbacion o separacion entre fases equivalentes? Tercera: el dato temporal cuenta ciclos por segundo o duracion de un ciclo?

Si una respuesta mezcla esas lecturas, no conviene recalcular de inmediato. La correccion empieza identificando que magnitud representa cada dato y que pregunta fisica responde.
`;export{a as default};
