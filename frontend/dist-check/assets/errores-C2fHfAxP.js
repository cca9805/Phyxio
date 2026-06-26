const e=`## Errores conceptuales

### Error 1: creer que toda corriente alta implica gran potencia util
Por que parece correcto:
En problemas de corriente continua es habitual asociar mas corriente con mas transferencia util. Esa intuicion parece trasladable a cualquier circuito electrico.

Senal de deteccion:
La solucion encuentra [[I]] alta pero [[P]] mucho menor que [[S]], o un [[phi]] apreciable y aun asi describe la carga como eficiente sin mas analisis.

Mini-ejemplo de contraste:
Dos ramas pueden exigir la misma [[I]]. Una puede tener [[phi]] casi nula y otra un desfase grande. En la segunda, la fuente sostiene mas demanda total de la que se convierte en potencia activa.

Correccion conceptual:
La corriente debe leerse junto con [[phi]], [[P]], [[Q]] y [[S]]. En este leaf la pregunta no es solo cuanta corriente circula, sino como se reparte la demanda electrica.

### Error 2: pensar que [[Q]] es energia perdida en el mismo sentido que el calor
Por que parece correcto:
Como [[Q]] no coincide con la potencia util, muchos alumnos la llaman perdida directa o consumo inutil absoluto.

Senal de deteccion:
Se afirma que toda potencia reactiva es desperdicio y desaparece la interpretacion de intercambio con campos magneticos y electricos.

Mini-ejemplo de contraste:
Una rama ideal reactiva puede intercambiar mucha energia con la fuente sin convertirla en disipacion media neta como hace la parte resistiva.

Correccion conceptual:
[[Q]] expresa intercambio alterno asociado al desfase. Tiene consecuencias tecnicas reales, pero no equivale por si sola a disipacion irreversible.

## Errores de modelo

### Error 3: aplicar el modelo serie lineal a cualquier montaje AC sin justificarlo
Por que parece correcto:
Las ecuaciones del leaf son compactas y producen resultados rapidos, de modo que parece tentador usarlas sobre cualquier circuito que incluya resistencia, inductor y capacitor.

Senal de deteccion:
El enunciado describe topologia paralela, varias frecuencias relevantes o parasitas fuertes, y aun asi se usa la misma cadena cerrada sin declarar aproximaciones.

Mini-ejemplo de contraste:
En una topologia paralela la interpretacion de maxima o minima oposicion cambia. Usar el modelo serie sin conversion previa altera el significado fisico del resultado.

Correccion conceptual:
Primero define sistema, topologia, frecuencia dominante y dominio de validez. Solo despues decide si este leaf es el modelo correcto.

### Error 4: suponer que acercarse a compensacion siempre mejora todo
Por que parece correcto:
Si [[phi]] baja y [[Q]] disminuye, parece natural concluir que el circuito queda automaticamente mejor en todos los sentidos.

Senal de deteccion:
La resolucion celebra una reduccion de potencia reactiva sin revisar [[I]], sensibilidad a frecuencia o tolerancias.

Mini-ejemplo de contraste:
Cuando [[Xl]] y [[Xc]] casi se equilibran, [[Z]] puede acercarse a [[R]] y la corriente crecer con rapidez. Puede mejorar el factor de potencia y al mismo tiempo empeorar la exigencia de corriente.

Correccion conceptual:
Compensacion y seguridad no son sinonimos. Deben leerse conjuntamente [[Z]], [[I]], [[phi]] y el contexto operativo.

## Errores matemáticos

### Error 5: escribir la impedancia como suma algebraica simple
Por que parece correcto:
El alumno ve tres magnitudes en ohm y concluye que deben sumarse linealmente.

Senal de deteccion:
La resolucion propone una impedancia menor que [[R]] por simple cancelacion o incluso una magnitud negativa.

Mini-ejemplo de contraste:
Si [[R]] vale 40 ohm, [[Xl]] vale 90 ohm y [[Xc]] vale 50 ohm, la parte reactiva neta no se suma a [[R]] en la misma direccion. El modulo final debe quedar por encima o igual a [[R]].

Correccion conceptual:
Las reactancias entran en cuadratura respecto a la parte resistiva. Primero se construye el desequilibrio reactivo y despues el modulo total.

### Error 6: mezclar valores pico con valores RMS
Por que parece correcto:
Ambos describen la misma señal y a menudo aparecen juntos en tablas o graficas.

Senal de deteccion:
[[P]] supera a [[S]], la corriente parece inverosimil o el resultado contradice la escala fisica del montaje.

Mini-ejemplo de contraste:
Si [[V]] se toma como valor pico mientras [[I]] se deja en RMS, las potencias calculadas dejan de pertenecer al mismo marco del leaf.

Correccion conceptual:
En este tema toda la cadena operativa se construye con magnitudes RMS. Si el dato inicial viene en pico, se convierte antes de seguir.

## Errores de interpretación

### Error 7: ignorar el signo fisico de [[phi]]
Por que parece correcto:
Muchos ejercicios piden solo un numero angular y el alumno concluye que basta con el modulo.

Senal de deteccion:
La solucion ofrece un valor para [[phi]] pero no dice si la rama es inductiva o capacitiva ni conecta el signo con [[Q]].

Mini-ejemplo de contraste:
Dos angulos de igual magnitud pueden corresponder a situaciones opuestas. En una domina [[Xl]] y en la otra domina [[Xc]]. Las decisiones de compensacion cambian por completo.

Correccion conceptual:
El signo de [[phi]] no es decorativo. Es la forma compacta de leer que mecanismo reactivo domina la rama.

### Error 8: leer [[S]] como si fuera potencia util entregada a la carga
Por que parece correcto:
[[S]] combina [[V]] e [[I]] y parece el numero mas directo del balance de potencia.

Senal de deteccion:
Se dimensiona la utilidad de la carga solo con [[S]] o se afirma que toda la demanda de fuente se convierte en transferencia media neta.

Mini-ejemplo de contraste:
Si [[P]] es muy inferior a [[S]], la instalacion soporta una demanda que no se transforma integra en potencia activa. Esa diferencia puede ser precisamente el problema tecnico del caso.

Correccion conceptual:
[[S]] dimensiona demanda total. [[P]] dimensiona transferencia media neta. Una buena interpretacion debe separar ambos papeles.

## Regla de autocontrol rápido
Antes de aceptar una resolucion, repite esta secuencia: ¿[[Xl]] y [[Xc]] pertenecen a la misma frecuencia?, ¿todas las magnitudes estan en RMS?, ¿[[Z]] salio mayor o igual que [[R]]?, ¿el signo de [[phi]] coincide con el caracter inductivo o capacitivo?, ¿[[P]] queda menor o igual que [[S]]? Si una respuesta falla, el problema no esta cerrado aunque la aritmetica parezca limpia.
`;export{e as default};
