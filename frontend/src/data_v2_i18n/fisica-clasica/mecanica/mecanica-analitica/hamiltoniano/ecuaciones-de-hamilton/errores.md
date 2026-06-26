# Errores frecuentes en ecuaciones de Hamilton

## Errores conceptuales

### Error 1: Creer que H constante significa reposo

Por que parece correcto: si una magnitud se conserva, el alumno puede pensar que nada cambia.

Por que es incorrecto: [[H]] puede conservarse mientras [[qi]] y [[p]] evolucionan sobre una curva de nivel.

Senal de deteccion: se concluye que [[qd]] y [[pd]] son cero solo porque [[dHdt]] es cero.

Correccion conceptual: conservacion significa permanecer sobre una superficie de nivel, no detener el flujo.

Mini-ejemplo de contraste: un oscilador ideal conserva [[H]] y aun asi recorre una elipse de fase.

### Error 2: Tratar H solo como energia numerica

Por que parece correcto: en muchos modelos conservativos [[H]] coincide con energia.

Por que es incorrecto: en Hamilton, lo decisivo son las pendientes de [[H]], porque causan [[qd]] y [[pd]].

Senal de deteccion: se calcula [[H]] pero no se derivan sus pendientes.

Correccion conceptual: usa [[H]] como funcion generadora de movimiento, no solo como resultado numerico.

Mini-ejemplo de contraste: dos puntos pueden tener igual [[H]] y direcciones de movimiento distintas.

## Errores de modelo

### Error 3: Usar variables no canonicas

Por que parece correcto: muchas parejas de variables parecen posicion y momento.

Por que es incorrecto: las ecuaciones de Hamilton exigen pares canonicos; no cualquier variable sirve.

Senal de deteccion: las unidades o signos de las ecuaciones no encajan con [[qd]] y [[pd]].

Correccion conceptual: verifica que [[p]] sea conjugado de [[qi]] y que [[H]] este escrito en esas variables.

Mini-ejemplo de contraste: usar velocidad en lugar de momento rompe la forma canonica simple.

### Error 4: Aplicar el oscilador lineal fuera de rango

Por que parece correcto: la forma cuadratica es simple y familiar.

Por que es incorrecto: una rigidez efectiva [[k]] constante solo describe pequenas oscilaciones lineales.

Senal de deteccion: se usa [[pd]] proporcional a [[qi]] para desplazamientos grandes sin justificar.

Correccion conceptual: revisa si el potencial sigue siendo cuadratico en la region estudiada.

Mini-ejemplo de contraste: un potencial no lineal conserva la estructura de Hamilton, pero no la recta [[pd]] frente a [[qi]].

## Errores matematicos

### Error 5: Intercambiar derivadas

Por que parece correcto: ambas ecuaciones contienen derivadas parciales de [[H]].

Por que es incorrecto: [[qd]] viene de la derivada respecto de [[p]], mientras [[pd]] viene de la derivada respecto de [[qi]] con signo menos.

Senal de deteccion: la coordenada cambia por una pendiente espacial y el momento por una pendiente cinetica.

Correccion conceptual: escribe primero que variable mantienes fija en cada derivada.

Mini-ejemplo de contraste: para el oscilador, derivar respecto de [[p]] da velocidad; derivar respecto de [[qi]] da fuerza restauradora con signo cambiado.

### Error 6: Perder el signo menos

Por que parece correcto: el signo parece un detalle algebraico.

Por que es incorrecto: el signo menos produce la orientacion correcta del flujo canonico.

Senal de deteccion: el oscilador se aleja del equilibrio en lugar de regresar.

Correccion conceptual: conserva el signo estructural de la segunda ecuacion.

Mini-ejemplo de contraste: con [[qi]] positiva y [[k]] positiva, [[pd]] debe ser negativa.

## Errores de interpretacion

### Error 7: Leer el grafico como dos curvas independientes

Por que parece correcto: el grafico puede mostrar [[qd]] y [[pd]] con ejes separados.

Por que es incorrecto: ambas componentes forman un unico vector de fase.

Senal de deteccion: se interpreta [[qd]] sin combinarlo con [[pd]].

Correccion conceptual: cada punto necesita las dos componentes para indicar la direccion del estado.

Mini-ejemplo de contraste: qdot positivo y pdot negativo describen avance de coordenada con perdida de momento.

## Regla de autocontrol rapido

Antes de aceptar el resultado, comprueba si [[H]] esta en variables canonicas, si derivaste respecto de la variable correcta, si mantuviste el signo menos y si distingues conservacion de reposo. Si alguna respuesta falla, la lectura hamiltoniana no esta completa.
