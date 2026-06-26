# Energia orbital

## Contexto conceptual

La energia orbital permite leer una orbita como un estado mecanico, no solo como una trayectoria dibujada en el espacio. La posicion instantanea [[r]] y la velocidad [[v]] no dicen por separado si un satelite queda atrapado, escapa o cambia de orbita: lo decide la combinacion entre energia cinetica, energia potencial y referencia de escape.

En gravitacion newtoniana se toma energia potencial cero en el infinito. Por eso una orbita ligada tiene energia negativa: no significa que la energia sea "imposible", sino que falta aportar energia para llevar el objeto hasta el infinito con velocidad nula. Esta idea conecta lanzamiento, transferencia orbital, escape y estabilidad en una sola lectura.

## 🟢 Nivel esencial

Una orbita ligada es energeticamente un objeto dentro de un pozo gravitatorio. Si el satelite tiene poca energia mecanica total, queda confinado alrededor de la masa central. Si recibe energia suficiente para alcanzar el umbral cero, puede escapar. La energia orbital no pregunta solo "a que velocidad va", sino si esa velocidad compensa la profundidad del campo en el punto donde se encuentra.

La energia cinetica mide movimiento y siempre es positiva. La energia potencial en un campo atractivo es negativa si el cero se coloca en el infinito. La suma mecanica indica el balance real: puede haber mucha rapidez y aun asi seguir ligado si la parte potencial es todavia mas profunda. Por eso dos satelites con igual rapidez no tienen necesariamente la misma situacion orbital si estan a distinta distancia.

Para comparar orbitas sin depender de la masa del satelite se usa la energia especifica [[eps]]. Esta magnitud divide la energia mecanica por unidad de masa y permite clasificar estados orbitales de sondas, satelites o fragmentos sin que el resultado dependa de cuantos kilogramos tiene cada uno.

## 🔵 Nivel formal

La energia mecanica total suma las dos contribuciones principales:

{{f:energia_total_desde_k_u}}

La contribucion asociada al movimiento se calcula con la masa del satelite [[m]] y la rapidez instantanea [[v]]:

{{f:energia_cinetica}}

La contribucion de posicion en el campo de la masa central [[M]], con referencia cero en el infinito, es:

{{f:energia_potencial}}

La constante [[G]] fija la escala de la interaccion gravitatoria en las relaciones potenciales y orbitales. Junto con la masa central, determina la profundidad del pozo y el umbral energetico de escape.

Cuando interesa clasificar el estado sin arrastrar la masa [[m]], se usa la energia especifica:

{{f:energia_especifica_estado}}

Para una orbita ligada kepleriana, la energia total se relaciona directamente con el semieje mayor [[a]]:

{{f:energia_total_ligada}}

La misma relacion por unidad de masa es:

{{f:energia_especifica_ligada}}

La orbita circular es un caso particular en el que [[r]] coincide con [[a]]:

{{f:energia_circular}}

Finalmente, el criterio conceptual por signo energetico clasifica el estado:

{{f:clasificacion_orbital_conceptual}}

Si [[E]] o [[eps]] es negativa, la orbita queda ligada; si alcanza el umbral [[E0]], se entra en escape parabolico ideal; si es positiva, la trayectoria queda abierta.

## 🔴 Nivel estructural

El modelo supone un sistema de dos cuerpos con masa central dominante, regimen newtoniano y ausencia de empujes, rozamiento atmosferico o perturbaciones intensas. Bajo esas condiciones, la energia mecanica se conserva y se puede usar como criterio global. Si hay motor encendido, frenado atmosferico o encuentros cercanos con terceros cuerpos, [[E]] deja de ser constante y hay que especificar intervalo y modelo.

La diferencia entre [[r]] y [[a]] es estructural. El radio [[r]] describe el punto actual de la orbita; el semieje mayor [[a]] resume el tamaño de una orbita ligada completa. En una circunferencia coinciden, pero en una elipse no. Confundirlos hace que el estudiante aplique relaciones circulares a estados elipticos y pierda la lectura energetica correcta.

La energia especifica [[eps]] es especialmente potente porque elimina la masa [[m]] del satelite. Dos objetos en el mismo estado orbital alrededor de la misma [[M]] tienen igual [[eps]] aunque sus masas sean distintas. En cambio, la energia total [[E]] si escala con [[m]] y es necesaria cuando se calcula trabajo, combustible o potencia asociada al cambio orbital.

## Interpretación física profunda

La energia orbital convierte la pregunta "donde esta y como se mueve" en una pregunta de destino dinamico. Una rapidez alta no garantiza escape si el satelite esta muy profundo en el pozo gravitatorio; una rapidez moderada puede bastar lejos del cuerpo central. El signo energetico resume esa competencia entre movimiento y posicion.

Tambien permite entender por que cambiar de orbita cuesta energia de manera no intuitiva. Para elevar una orbita ligada hay que hacer la energia menos negativa, no simplemente "aumentarla" sin referencia. Para circularizar, se ajusta la distribucion entre energia cinetica y potencial hasta que el estado sea compatible con una trayectoria circular.

## Orden de magnitud

En una orbita baja terrestre, las energias especificas tipicas son del orden de decenas de millones de joules por kilogramo en valor absoluto. Ese numero parece enorme porque mover un kilogramo orbital implica vencer una escala gravitatoria planetaria, no solo acelerar un objeto en laboratorio.

En orbitas altas, [[eps]] se acerca a cero desde valores negativos. Esto no significa que el satelite se detenga, sino que esta menos ligado. En el limite ideal de escape, la energia especifica llega a cero con velocidad residual nula en el infinito.

## Método de resolución personalizado

Primero identifica si el problema da un estado instantaneo o una orbita ya descrita por [[a]]. Si da [[r]] y [[v]], conviene usar energia especifica de estado y despues clasificar el signo. Si da semieje mayor, conviene usar la relacion de energia ligada. Si ademas pide energia total, multiplica la lectura especifica por [[m]] o usa directamente las formulas con masa.

Despues verifica la referencia: en este leaf el cero energetico esta en el infinito. Con esa convencion, [[U]] es negativa, [[K]] positiva y [[E]] puede ser negativa, cero o positiva. El cierre debe interpretar el signo: ligado, umbral de escape o trayectoria abierta.

Por ultimo, distingue resultado energetico y geometria orbital. La energia fija el tamaño de una orbita ligada mediante [[a]], pero no determina por si sola orientacion, plano, fase ni excentricidad. Para una descripcion completa hacen falta otras magnitudes orbitales.

## Casos especiales y ejemplo extendido

En orbita circular, la energia total vale la mitad de la potencial y tiene signo negativo. Esto produce una lectura clara: la rapidez circular no es rapidez de escape, sino la rapidez que mantiene la caida alrededor del centro con energia ligada.

En una trayectoria de escape ideal, [[E]] y [[eps]] alcanzan el umbral cero. Si el satelite conserva energia positiva, llega al infinito con rapidez residual. Si queda negativa, no escapa: aunque suba mucho, volvera si no hay otros efectos.

En una orbita eliptica, la rapidez cambia durante la trayectoria, pero la energia mecanica total se mantiene constante si no hay fuerzas no conservativas. El satelite va mas rapido cerca del pericentro y mas lento cerca del apocentro, sin que eso implique que [[E]] cambie.

## Preguntas reales del alumno

¿Por que una energia negativa no es un error? Porque el cero se eligio en el infinito. Una energia negativa significa que el objeto esta ligado y hace falta aportar energia para separarlo definitivamente.

¿Por que la masa del satelite desaparece en [[eps]]? Porque se divide toda la energia por [[m]]. Asi se estudia la orbita como estado dinamico, independientemente de si el objeto es una sonda pequeña o un satelite pesado.

¿Energia orbital y velocidad orbital son lo mismo? No. La velocidad aporta la parte cinetica, pero la energia orbital tambien incluye posicion en el campo gravitatorio. La misma [[v]] puede significar situaciones distintas a radios distintos.

## Conexiones transversales y rutas de estudio

Este leaf conecta con velocidad orbital porque la rapidez entra en la energia cinetica y en la energia especifica de estado. Tambien conecta con energia potencial gravitatoria, ya que el signo negativo de [[U]] es la base del criterio de ligadura.

Despues de este tema, la ruta natural pasa por transferencias orbitales, velocidad de escape, maniobras de Hohmann y perturbaciones. En todos esos casos, la pregunta energetica es previa a la geometrica: primero se decide si el estado energetico permite la trayectoria deseada.

## Síntesis final

Comprender energia orbital significa leer una orbita por su balance mecanico. La competencia entre [[K]], [[U]], [[E]] y [[eps]] permite decidir si el satelite esta ligado, si puede escapar y como se relaciona la energia con el tamaño orbital. El objetivo final es usar la energia como criterio fisico, no como una suma algebraica sin interpretacion.
