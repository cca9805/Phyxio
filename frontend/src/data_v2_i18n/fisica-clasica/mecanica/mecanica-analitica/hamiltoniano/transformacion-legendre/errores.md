# Errores frecuentes en transformacion de Legendre

## Errores conceptuales

### Error 1: Confundir transformacion con sustitucion simbolica

Por que parece correcto: el alumno ve que aparecen [[p]], [[qdi]], [[L]] y [[H]], y cree que basta con reorganizar letras.

Por que es incorrecto: la transformacion exige invertir el mapa entre velocidad y momento. Si no se puede recuperar [[qdi]] desde [[p]], el hamiltoniano ordinario no queda construido.

Senal de deteccion: el resultado final conserva velocidades libres o no explica de donde sale [[p]].

Correccion conceptual: primero deriva, despues invierte y solo entonces sustituye en [[H]].

Mini-ejemplo de contraste: si [[p]] depende linealmente de [[qdi]], la inversion es directa. Si [[p]] no depende de [[qdi]], no hay transformacion ordinaria.

### Error 2: Identificar siempre hamiltoniano y energia

Por que parece correcto: en el caso cuadratico conservativo [[H]] coincide con la energia mecanica.

Por que es incorrecto: esa coincidencia depende de hipotesis sobre [[L]], [[V]] y la ausencia de dependencia temporal problematica.

Senal de deteccion: se llama energia total a [[H]] sin revisar el modelo.

Correccion conceptual: interpreta [[H]] primero como funcion de fase; despues decide si tambien representa energia.

Mini-ejemplo de contraste: una particula libre permite esa lectura energetica, pero un sistema con acoplos dependientes de velocidad exige revision.

## Errores de modelo

### Error 3: Ignorar coordenadas generalizadas

Por que parece correcto: en coordenadas cartesianas, el momento conjugado coincide con el momento lineal habitual.

Por que es incorrecto: si [[qi]] es angular o curvilinea, [[p]] puede tener otras unidades y otra lectura fisica.

Senal de deteccion: se usa kg m/s sin comprobar que la coordenada sea una distancia lineal.

Correccion conceptual: interpreta [[p]] desde la coordenada elegida, no desde una plantilla cartesiana.

Mini-ejemplo de contraste: una coordenada lineal genera momento lineal; una coordenada angular genera momento angular conjugado.

### Error 4: Aplicar el caso cuadratico donde no corresponde

Por que parece correcto: el caso con masa constante es el mas frecuente en ejercicios iniciales.

Por que es incorrecto: no todo lagrangiano tiene energia cinetica cuadratica ni masa efectiva constante [[m]].

Senal de deteccion: se escribe proporcionalidad directa entre [[p]] y [[qdi]] sin mirar la forma de [[L]].

Correccion conceptual: calcula siempre la pendiente [[DLv]] antes de simplificar.

Mini-ejemplo de contraste: en una coordenada curvilinea, la masa efectiva puede variar con la posicion.

## Errores matematicos

### Error 5: Derivar respecto de la coordenada equivocada

Por que parece correcto: [[qi]] y [[qdi]] aparecen juntos en el lagrangiano y se confunden durante la derivacion.

Por que es incorrecto: el momento conjugado se obtiene derivando respecto de la velocidad generalizada, no respecto de la coordenada.

Senal de deteccion: el resultado se parece a una fuerza o a una pendiente de potencial.

Correccion conceptual: mantén fija la coordenada al calcular la derivada que define [[p]].

Mini-ejemplo de contraste: la pendiente en velocidad mide [[DLv]]; la pendiente en posicion mide cambio configuracional.

### Error 6: Dejar velocidades ocultas en el hamiltoniano

Por que parece correcto: la expresion intermedia de [[H]] contiene [[p]] y [[qdi]].

Por que es incorrecto: una funcion hamiltoniana cerrada debe escribirse en variables de fase, no en una mezcla sin resolver.

Senal de deteccion: despues del calculo aun aparece [[qdi]] como variable independiente.

Correccion conceptual: usa la inversion velocidad-momento antes de dar por terminado el resultado.

Mini-ejemplo de contraste: escribir [[H]] con [[p]] y [[qdi]] es un paso; escribirlo con [[p]], [[qi]] y parametros completa el proceso.

## Errores de interpretacion

### Error 7: Leer el signo de p sin orientar la coordenada

Por que parece correcto: el signo negativo suele asociarse de forma precipitada con energia negativa o fallo del modelo.

Por que es incorrecto: el signo de [[p]] depende de la orientacion elegida para [[qi]].

Senal de deteccion: se interpreta un momento negativo sin mencionar el sentido positivo de la coordenada.

Correccion conceptual: fija la orientacion de [[qi]] antes de leer el signo de [[p]].

Mini-ejemplo de contraste: dos estados con momentos opuestos pueden tener el mismo [[H]] y sentidos de movimiento contrarios.

## Regla de autocontrol rapido

Antes de aceptar una transformacion, comprueba cuatro preguntas: he derivado respecto de [[qdi]], puedo despejar [[qdi]] desde [[p]], he eliminado todas las velocidades de [[H]] y se si mi modelo permite leer [[H]] como energia. Si una respuesta falla, el resultado no esta listo.

Una segunda regla util es verbalizar la variable que se abandona y la variable que se adopta. Si no puedes decir con claridad que abandonas velocidad generalizada y adoptas momento conjugado, probablemente estas haciendo algebra sin interpretar el cambio fisico.
