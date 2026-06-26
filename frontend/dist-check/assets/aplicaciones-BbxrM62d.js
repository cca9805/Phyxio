const e=`# Aplicaciones

## 1. Espectrometria de masas

La aplicacion mas directa es la separacion de iones en espectrometros de masas. Una particula cargada entra en una zona con [[B]] y su trayectoria se curva. El detector no mide la fuerza de forma directa, sino una posicion de impacto asociada a [[r]].

Variable dominante: [[r]].
Límite de validez: el campo debe ser uniforme y los iones deben tener rapidez controlada.

La lectura fisica es potente porque convierte una diferencia de [[m]] o de [[q]] en una distancia medible. Iones mas masivos, a igual carga y rapidez, se desvian menos. Iones con signos opuestos se curvan hacia lados contrarios.

En la practica, el instrumento suele preparar primero un haz con energia o rapidez conocida. Despues deja que el campo magnetico actue como analizador de curvatura. La precision no depende solo de medir bien [[B]], sino de conocer la anchura del haz, la posicion del detector y el valor efectivo de [[v]].

Esta aplicacion muestra una lectura completa del leaf. [[F_B]] inicia la desviacion, [[m]] resiste el cambio de direccion y [[r]] traduce esa competencia a una coordenada observable. Por eso la formula no es un calculo aislado, sino el puente entre una propiedad microscopica y una huella experimental.

## 2. Aceleradores y lineas de haz

En aceleradores, los imanes curvan y enfocan haces de particulas cargadas. La magnitud [[F_B]] determina la capacidad de cambiar la direccion del haz, mientras [[r]] permite fijar la curvatura de una seccion de transporte.

Variable dominante: [[B]].
Límite de validez: a altas energias deben incluirse correcciones relativistas.

El diseno no busca que el campo magnetico aumente la energia cinetica; para eso se usan campos electricos. Los imanes mantienen el haz dentro de una trayectoria prevista, seleccionan momento y corrigen desviaciones transversales.

En una linea de haz, pequenos cambios de [[B]] pueden mover el punto de impacto muchos centimetros despues de varios metros de recorrido. Esto obliga a calibrar los imanes con precision y a vigilar que la componente perpendicular de [[v]] sea la prevista. Una mala alineacion modifica [[s_theta]] y altera la fuerza real.

La aplicacion tambien aclara por que un acelerador usa familias de elementos. Los dipolos curvan, los cuadrupolos enfocan y otros correctores afinan la trayectoria. Todos parten de la misma idea local: una carga movil siente desviacion magnetica cuando atraviesa el campo con orientacion adecuada.

## 3. Camaras de niebla y detectores de particulas

En detectores visuales, una particula ionizante deja una traza curvada si atraviesa un campo magnetico. La curvatura permite inferir el signo de [[q]] y estimar la relacion entre cantidad de movimiento y carga.

Variable dominante: [[F_B]].
Límite de validez: la traza debe ser suficientemente limpia y el campo conocido.

La informacion experimental no aparece como una ecuacion en pantalla, sino como una curva. Una curva cerrada indica desviacion fuerte; una trayectoria casi recta puede indicar energia alta, campo debil o carga pequena.

La lectura del sentido es tan importante como la lectura del modulo. Si dos trazas se curvan hacia lados opuestos bajo el mismo [[B]], la interpretacion natural es que los signos de [[q]] son opuestos. Si se curvan hacia el mismo lado pero con radios distintos, la diferencia puede estar en [[m]], en [[v]] o en la carga efectiva.

Los detectores modernos sustituyen la gota visible por sensores electronicos, pero la logica fisica permanece. Se reconstruye la trayectoria, se estima [[r]] y se infiere informacion sobre la particula. La fuerza magnetica actua como convertidor entre movimiento invisible y geometria medible.

## 4. Confinamiento magnetico de plasmas

En un plasma, electrones e iones cargados tienden a girar alrededor de lineas de campo. Aunque el plasma real requiere modelos colectivos, la idea local de [[F_B]] sobre cargas moviles explica por que el campo puede limitar el transporte transversal.

Variable dominante: [[r]].
Límite de validez: las colisiones, gradientes y efectos colectivos pueden dominar sobre la orbita simple.

El radio de giro, relacionado con [[m]], [[q]], [[v]] y [[B]], ayuda a estimar si una especie queda bien confinada. Campos mas intensos reducen el radio y dificultan que las particulas crucen transversalmente la region de confinamiento.

Esta aplicacion obliga a pensar por especies. Los electrones, con masa mucho menor, pueden tener radios de giro muy distintos de los iones aun dentro del mismo campo. El resultado afecta transporte de energia, estabilidad y perdida de particulas hacia las paredes.

El leaf no reemplaza la fisica de plasma, pero proporciona la unidad local de razonamiento. Antes de hablar de corrientes colectivas, ondas o turbulencia, hay que entender que cada carga movil siente una desviacion determinada por [[F_B]] y por su inercia.

## 5. Sensores y seleccion de velocidad

Los dispositivos que combinan campos electricos y magneticos pueden seleccionar particulas por velocidad. En la parte magnetica, la desviacion depende de [[v]] y [[B]], de modo que ajustar el campo permite controlar que particulas atraviesan una region sin impactar paredes o diafragmas.

Variable dominante: [[v]].
Límite de validez: el haz debe ser colimado y las fuerzas externas no modeladas deben ser pequenas.

Esta aplicacion obliga a separar intensidad y direccion. Una particula con la rapidez prevista puede seguir el canal; otra con rapidez distinta se desvia mas o menos. La lectura de [[s_theta]] tambien importa, porque una mala alineacion cambia la desviacion esperada.

En sensores de efecto Hall y dispositivos de diagnostico de haces, la desviacion de cargas moviles produce una separacion transversal medible. Aunque el dispositivo completo incluya materiales, contactos y electronica, la primera lectura fisica sigue siendo que las cargas en movimiento dentro de [[B]] reciben una [[F_B]] lateral.

El limite practico aparece cuando el medio material modifica la movilidad, cuando las colisiones son frecuentes o cuando la geometria del dispositivo no permite tratar el movimiento como una particula libre. Entonces el leaf sigue siendo la base conceptual, pero debe acoplarse a modelos de transporte electrico.
`;export{e as default};
