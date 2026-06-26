const e=`# Errores comunes

## Errores conceptuales

### Error 1: tratar la energia disipada como energia desaparecida

Por que parece correcto: al comparar [[Emi]] y [[Emf]], la energia mecanica final puede ser menor y parece que falta energia.

Por que es incorrecto: el rozamiento reduce energia mecanica util, pero la transforma en calentamiento, sonido o deformacion. No viola conservacion de energia.

Senal de deteccion: el resultado dice "se pierde energia" sin indicar sistema ni forma energetica final.

Correccion conceptual: distingue energia mecanica del sistema y energia total cuando se incluye el entorno.

Mini-ejemplo: un bloque que se calienta al frenar no destruye energia; cambia energia mecanica por energia interna.

### Error 2: confundir [[Wr]] con [[Edis]]

Por que parece correcto: en el caso simple tienen el mismo modulo numerico.

Por que es incorrecto: [[Wr]] es trabajo firmado sobre el sistema; [[Edis]] es energia transformada y se informa positiva.

Senal de deteccion: aparece [[Edis]] negativa o [[Wr]] positivo en un tramo donde el rozamiento se opone al movimiento.

Correccion conceptual: primero escribe el signo de [[Wr]] y despues convierte su modulo en [[Edis]].

Mini-ejemplo: si [[Wr]] = -50 J, entonces [[Edis]] = 50 J, no -50 J.

## Errores de modelo

### Error 3: sustituir siempre [[N]] por [[m]][[g]]

Por que parece correcto: en una mesa horizontal sin otras fuerzas verticales funciona.

Por que es incorrecto: en rampas, ascensores o cuerpos presionados, la normal cambia y deja de coincidir con el peso.

Senal de deteccion: el calculo usa [[m]][[g]] aunque el dibujo tenga inclinacion o fuerzas verticales extra.

Correccion conceptual: calcula [[N]] desde el equilibrio perpendicular antes de usar [[fr]].

Mini-ejemplo: en una rampa, usar [[m]][[g]] como normal sobrestima el rozamiento.

### Error 4: usar [[mu]] constante cuando el contacto cambia

Por que parece correcto: las tablas dan un solo coeficiente para cada par de materiales.

Por que es incorrecto: [[mu]] depende del regimen, la temperatura, la lubricacion y el estado de las superficies.

Senal de deteccion: el problema incluye calentamiento, desgaste, humedad o lubricante y aun asi se mantiene un unico valor.

Correccion conceptual: declara el rango de validez del coeficiente o cambia a un modelo alternativo.

Mini-ejemplo: un freno muy caliente puede perder adherencia aunque al principio tuviera [[mu]] alto.

## Errores matemáticos

### Error 5: perder el signo del trabajo

Por que parece correcto: multiplicar fuerza por distancia produce un numero positivo si se usan modulos.

Por que es incorrecto: el trabajo depende del sentido relativo entre fuerza y desplazamiento.

Senal de deteccion: [[Wr]] sale positivo aunque el rozamiento frena al cuerpo.

Correccion conceptual: si el rozamiento se opone al movimiento, usa [[Wr]] negativo y despues calcula [[Edis]] positiva.

Mini-ejemplo: si el bloque avanza a la derecha y el rozamiento apunta a la izquierda, el trabajo es negativo.

### Error 6: mezclar unidades de energia y potencia

Por que parece correcto: ambas magnitudes hablan de disipacion y suelen aparecer juntas.

Por que es incorrecto: [[Edis]] mide cantidad total en J; [[Pdis]] mide ritmo temporal en W.

Senal de deteccion: aparece una energia en vatios o una potencia en julios.

Correccion conceptual: divide por [[t]] solo cuando quieras pasar de energia disipada a potencia media.

Mini-ejemplo: 100 J y 100 W no describen lo mismo; el segundo implica ritmo temporal.

## Errores de interpretación

### Error 7: cerrar el ejercicio sin revisar el sistema elegido

Por que parece correcto: el numero puede coincidir con el esperado aunque la explicacion sea incompleta.

Por que es incorrecto: el signo de [[Wr]] depende de si el sistema es solo el bloque o incluye tambien la superficie.

Senal de deteccion: no aparece ninguna frase que declare la frontera del sistema.

Correccion conceptual: empieza indicando que el sistema es el cuerpo que desliza, o justifica otra eleccion.

Mini-ejemplo: el bloque pierde energia mecanica, pero bloque+mesa+entorno no pierde energia total.

### Error 8: ignorar la potencia disipada

Por que parece correcto: el balance energetico final ya da la energia total transformada.

Por que es incorrecto: el daño termico depende tambien de lo rapido que se disipa la energia.

Senal de deteccion: se comparan dos procesos con igual [[Edis]] sin mirar [[t]].

Correccion conceptual: calcula [[Pdis]] si hay frenos, cojinetes, herramientas o riesgo de calentamiento.

Mini-ejemplo: 3000 J en 600 s calienta poco; 3000 J en 2 s puede dañar el contacto.

## Regla de autocontrol rápido

1. Identifica el sistema antes de escribir el balance.
2. Calcula [[N]] y despues [[fr]].
3. Coloca [[Wr]] con signo en el balance.
4. Informa [[Edis]] como energia positiva transformada.
5. Usa [[Pdis]] cuando el tiempo [[t]] sea relevante.
`;export{e as default};
