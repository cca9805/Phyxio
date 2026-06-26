const e=`# Transformacion legendre

## Contexto conceptual

La transformacion de Legendre aparece cuando una descripcion fisica escrita con una variable y su velocidad se quiere reescribir con la variable y su momento conjugado. En mecanica analitica, el lagrangiano [[L]] vive de forma natural en el espacio de configuracion: usa la coordenada generalizada [[qi]], la velocidad generalizada [[qdi]] y, si el sistema lo requiere, el tiempo. El hamiltoniano [[H]] vive en el espacio de fases: usa [[qi]] y el momento conjugado [[p]].

El cambio no es una traduccion estetica. Cambia que informacion se considera primaria. En el formalismo lagrangiano se pregunta que trayectoria hace estacionaria la accion; en el formalismo hamiltoniano se pregunta como evoluciona un punto de fase. La transformacion de Legendre es el puente tecnico que permite pasar de una lectura a la otra cuando la relacion entre velocidad y momento es invertible.

## 🟢 Nivel esencial

La idea esencial es sencilla: si conoces como cambia el lagrangiano al variar la velocidad generalizada, puedes definir una nueva variable dinamica. Esa variable mide una pendiente fisica, no necesariamente un momento lineal cartesiano. En una particula libre ordinaria coincide con la intuicion de masa y movimiento; en coordenadas generalizadas o sistemas con campos, puede tener otra forma.

Despues se construye una nueva funcion dinamica que ya no toma la velocidad como variable primaria. Pero el resultado solo es realmente hamiltoniano si la velocidad puede eliminarse y escribirse a partir del momento conjugado. Por eso la transformacion de Legendre siempre incluye una condicion fisica: no basta con escribir simbolos; hay que poder invertir el mapa velocidad-momento y conservar la informacion del estado.

## 🔵 Nivel formal

Para fijar el caso mecanico mas simple, se parte de un lagrangiano con energia cinetica cuadratica y energia potencial [[V]]:

{{f:lagrangiano_cuadratico}}

La pendiente de [[L]] respecto de [[qdi]] define el momento conjugado. En esta notacion, [[DLv]] representa esa derivada parcial evaluada manteniendo fija la coordenada:

{{f:momento_conjugado_legendre}}

Si la masa efectiva [[m]] es constante, la relacion se reduce a una proporcionalidad directa:

{{f:momento_cuadratico}}

La regularidad de la transformacion se ve al invertir esa relacion. Cuando [[m]] no es cero, la velocidad se reconstruye desde el momento:

{{f:velocidad_desde_momento}}

En varias coordenadas, esa misma idea se expresa con el Hessiano de velocidades [[W]]. La condicion formal no es "que la formula parezca despejable", sino que el determinante de esa matriz no se anule:

{{f:condicion_regularidad_legendre}}

La funcion hamiltoniana se define entonces como transformada de Legendre del lagrangiano respecto de la velocidad:

{{f:hamiltoniano_legendre}}

Al sustituir la relacion cuadratica anterior, el hamiltoniano queda escrito solo con [[p]], [[m]] y [[V]]:

{{f:hamiltoniano_cuadratico}}

Estas expresiones contienen la estructura minima del cambio de variables. Primero se calcula la pendiente conjugada, despues se comprueba que la velocidad puede recuperarse y por ultimo se escribe [[H]] sin dejar velocidades ocultas. Si queda una [[qdi]] no eliminada en el resultado final, el paso al espacio de fases no se ha completado.

## 🔴 Nivel estructural

La transformacion de Legendre no pertenece solo a la mecanica. Es una operacion general para cambiar de una variable a su variable conjugada. En termodinamica, por ejemplo, permite pasar de energia interna a potenciales que usan temperatura o presion como variables naturales. En mecanica, el par conjugado relevante es velocidad-momento.

La condicion profunda es la curvatura de [[L]] respecto de [[qdi]]. En una sola coordenada esa curvatura se reduce a una masa efectiva; en varias, queda recogida por [[W]]. Si esa curvatura permite distinguir velocidades distintas mediante momentos distintos, el cambio de variables es regular. Si varias velocidades producen el mismo [[p]], el sistema tiene una degeneracion: aparecen restricciones y la formulacion hamiltoniana ordinaria deja de ser directa.

Tambien es importante entender que el signo y el valor numerico de [[H]] dependen del modelo. En sistemas conservativos con potencial independiente de la velocidad, [[H]] coincide con la energia mecanica. En sistemas dependientes del tiempo, con campos electromagneticos o con coordenadas no inerciales, esa identificacion requiere cuidado.

Desde el punto de vista estructural, la transformacion decide si dos lenguajes contienen la misma informacion. Cuando el mapa es regular, cada estado descrito mediante configuracion y velocidad tiene un estado equivalente descrito mediante configuracion y momento. Cuando el mapa no es regular, aparecen variables redundantes o restricciones que obligan a ampliar el metodo. Esta frontera es central para no enseñar el hamiltoniano como una receta algebraica, sino como una reconstruccion controlada del estado fisico.

## Interpretacion fisica profunda

El lagrangiano organiza la dinamica desde el balance entre tendencia cinetica y estructura potencial. El hamiltoniano reorganiza esa misma informacion desde el estado instantaneo en espacio de fases. En lugar de preguntar "con que velocidad pasa el sistema por esta configuracion", pregunta "con que momento conjugado ocupa esta configuracion".

Esa diferencia es didacticamente importante. En problemas lagrangianos, las velocidades suelen aparecer como derivadas de coordenadas. En problemas hamiltonianos, [[qi]] y [[p]] se tratan como variables independientes del estado. La transformacion de Legendre explica por que esa independencia no contradice la definicion original de [[p]]: procede de una inversion local del mapa entre [[qdi]] y [[p]].

## Orden de magnitud

En una particula de masa de orden un kilogramo moviendose a un metro por segundo, [[p]] tiene orden unidad en unidades SI. Si la energia potencial tambien tiene orden de un julio, [[H]] queda en el mismo rango que la energia mecanica observable. Esta escala ayuda a detectar errores: usar gramos como kilogramos o confundir velocidad con momento altera [[H]] por factores grandes.

En coordenadas angulares, las unidades cambian aunque la logica no. El momento conjugado de un angulo es momento angular, no momento lineal. Por eso la unidad de [[p]] debe leerse desde la coordenada [[qi]] elegida, no desde una plantilla universal.

## Metodo de resolucion personalizado

Primero identifica la coordenada [[qi]] y escribe [[L]] en funcion de [[qi]] y [[qdi]]. Segundo calcula [[p]] derivando respecto de la velocidad, no respecto de la coordenada. Tercero intenta despejar [[qdi]] en funcion de [[p]]. Si no puedes hacerlo de forma unica, no avances como si el hamiltoniano ordinario estuviera construido.

Cuarto sustituye la velocidad despejada en la definicion de [[H]]. Quinto revisa si [[H]] conserva una lectura energetica: comprueba si el lagrangiano no depende explicitamente del tiempo y si el potencial no depende de la velocidad. Sexto interpreta las variables de fase: un punto con la misma posicion y distinto momento representa un estado fisico distinto.

## Casos especiales y ejemplo extendido

En el caso cuadratico, todo parece casi automatico porque [[p]] es proporcional a [[qdi]]. Esa facilidad puede ocultar el criterio fisico real: la transformacion funciona porque la pendiente de [[L]] cambia de forma monotona con la velocidad. Si la energia cinetica fuera singular o si una velocidad no apareciera en [[L]], el momento conjugado no permitiria recuperar esa velocidad.

Un oscilador armonico simple ilustra el caso regular. La coordenada [[qi]] es el desplazamiento, [[m]] mide la inercia efectiva y [[V]] aumenta con el cuadrado de la posicion. La transformacion convierte la informacion cinetica en un termino cuadratico de [[p]], de modo que el estado queda descrito por posicion y momento. Esa forma es la que permite dibujar orbitas cerradas en espacio de fases.

## Preguntas reales del alumno

Una pregunta frecuente es por que no se define directamente el hamiltoniano como energia total. La razon es que el formalismo necesita una construccion que funcione desde [[L]]. En muchos sistemas el resultado coincide con la energia, pero esa coincidencia es una consecuencia de hipotesis fisicas, no una definicion universal.

Otra duda es por que [[p]] se llama momento si se obtiene derivando. La respuesta es que en coordenadas cartesianas ordinarias esa derivada reproduce el momento lineal. En coordenadas generalizadas, el nombre se conserva porque la variable cumple el papel dinamico conjugado a la coordenada, aunque su unidad y su interpretacion dependan del sistema.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con energia cinetica y potencial, ecuaciones de Lagrange y ecuaciones de Hamilton. Antes de estudiarlo conviene dominar como se construye [[L]] y que significa una coordenada generalizada. Despues, el paso natural es ver como [[H]] genera ecuaciones de movimiento para [[qi]] y [[p]].

Tambien prepara ideas de fisica moderna. La nocion de variables conjugadas aparece en mecanica estadistica, optica hamiltoniana y mecanica cuantica. La transformacion de Legendre ensena que cambiar variables no es perder informacion, siempre que el mapa sea regular.

## Sintesis final

La transformacion de Legendre convierte una descripcion con velocidades en una descripcion con momentos conjugados. Su nucleo es calcular [[p]], comprobar que se puede recuperar [[qdi]] y construir [[H]] sin dejar dependencias ocultas. Al terminar este nodo debes poder decidir cuando el hamiltoniano representa la energia mecanica y cuando solo es la funcion de fase que organiza la dinamica.
`;export{e as default};
