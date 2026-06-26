## Contexto conceptual

La propagacion en medios estudia que cambia cuando una onda electromagnetica deja el vacio o el aire ideal y entra en un material. La onda sigue siendo electromagnetica, pero el medio responde electricamente y magneticamente, de modo que la velocidad de fase, la longitud de onda y la direccion de propagacion pueden cambiar.

Este leaf conecta el espectro electromagnetico con la optica real. En el vacio basta usar [[velocidad_de_la_luz_en_el_vacio]] como referencia; en un vidrio, agua, plastico o fibra optica aparece el indice [[indice_de_refraccion_efectivo]], que resume cuanto se modifica la propagacion. Pensar en medios permite entender refraccion, retardo, guiado, dispersion y perdida sin confundirlos con un cambio de naturaleza de la onda.

La idea central no es que la luz se vuelva otra cosa dentro del material. La idea es que la frecuencia la fija la fuente, mientras el medio decide [[v_m]] y [[lambda_m]]. Esa separacion evita muchos errores al pasar de formulas de vacio a situaciones experimentales.

## 🟢 Nivel esencial

Cuando una onda electromagnetica entra en un medio ordinario, suele propagarse mas despacio que en el vacio. El indice [[indice_de_refraccion_efectivo]] mide precisamente ese efecto: cuanto mayor es el indice, menor es la velocidad de propagacion [[v_m]] y mas corta queda la longitud de onda dentro del material.

La frecuencia no se ajusta libremente al entrar en el medio. La fuente impone el ritmo temporal, y el material modifica la escala espacial. Por eso un mismo color conserva su frecuencia al atravesar una lamina de vidrio, aunque sus frentes de onda queden mas juntos dentro de la lamina.

El alumno debe distinguir tres lecturas: [[velocidad_de_la_luz_en_el_vacio]] es la referencia de vacio, [[v_m]] es la rapidez dentro del medio, y [[lambda_m]] es la escala espacial dentro del medio. Mezclarlas produce resultados incoherentes.

> [!NOTE]
> En un medio ordinario, decir que la onda va mas lenta no significa que pierda automaticamente frecuencia. La frecuencia queda ligada a la fuente; cambia la velocidad y cambia la longitud de onda.

## 🔵 Nivel formal

El primer modelo formal usa el indice efectivo para corregir la velocidad de fase. Si el medio es lineal, homogeneo e isotropo como primera aproximacion, [[v_m]] se obtiene comparando [[velocidad_de_la_luz_en_el_vacio]] con [[indice_de_refraccion_efectivo]].

{{f:velocidad_en_medio}}

Esta relacion expresa una idea fisica directa: [[indice_de_refraccion_efectivo]] no tiene unidades y actua como factor de reduccion. Un medio con indice mayor produce una velocidad de fase menor. En materiales ordinarios transparentes, esta lectura describe la propagacion de ondas planas y permite estimar tiempos de retardo.

El indice tambien puede conectarse con parametros electromagneticos efectivos. La permitividad relativa [[epsilon_r]] mide la respuesta electrica del medio y la permeabilidad relativa [[mu_r]] mide su respuesta magnetica.

{{f:indice_medio_em}}

En muchos dielectricos opticos [[mu_r]] es cercana a uno, pero eso no elimina su papel conceptual: el indice surge de la respuesta electromagnetica completa del medio. Para ondas fuera del rango optico o materiales especiales, ignorar la respuesta magnetica puede ser una mala aproximacion.

Por ultimo, la longitud de onda dentro del medio se obtiene comparando la longitud de onda de vacio [[lambda0]] con el mismo indice.

{{f:longitud_onda_en_medio}}

La formula no dice que la onda cambie de frecuencia al entrar. Dice que, al reducirse la velocidad de fase para el mismo ritmo temporal, los frentes de onda quedan mas cercanos. Esa es la lectura que conecta propagacion material con refraccion y guiado.

## 🔴 Nivel estructural

La estructura profunda del tema separa tres capas: propiedades del material, propagacion de la onda y condicion de frontera. Las propiedades materiales se condensan en [[epsilon_r]], [[mu_r]] y [[indice_de_refraccion_efectivo]]. La propagacion se expresa mediante [[v_m]] y [[lambda_m]]. La frontera entre medios decide como se conectan las fases y por que la frecuencia se conserva al cruzarla.

Esta separacion es esencial porque el indice no es una etiqueta fija para siempre. Puede depender de la frecuencia, de la temperatura, de la polarizacion, de la direccion de propagacion o de la intensidad si el material deja de ser lineal. Cuando [[indice_de_refraccion_efectivo]] cambia con la frecuencia aparece dispersion: distintos colores avanzan con distintas velocidades de fase y una señal puede deformarse.

Tambien hay que distinguir velocidad de fase, velocidad de grupo y transporte de energia. En este leaf [[v_m]] representa la velocidad de fase de un modelo simple. Si el problema trata pulsos, informacion o medios muy dispersivos, conviene cambiar a un modelo con velocidad de grupo. Usar una unica velocidad puede ser insuficiente aunque la formula sea correcta para una onda monocromatica.

La longitud de onda en el medio tiene consecuencias geometricas. Determina separacion de frentes, interferencia, fase acumulada y condiciones de resonancia. Por eso una pelicula delgada, una fibra optica o una guia de ondas no se analizan igual que una onda libre en el vacio: el material cambia la escala espacial con la que la onda se organiza.

> [!WARNING]
> No uses un indice de tabla sin comprobar el contexto. Un valor medido para luz visible puede no servir en microondas, ultravioleta o materiales absorbentes.

## Interpretación física profunda

La propagacion en medios muestra que una onda no se entiende solo por la fuente que la emite. El material participa en la propagacion al polarizarse, magnetizarse o retrasar la respuesta de sus cargas. Ese retardo efectivo se ve desde fuera como una disminucion de [[v_m]] y una reduccion de [[lambda_m]].

La lectura fisica fina consiste en no atribuir todo al movimiento de los fotones como si fueran particulas lentas atravesando un obstaculo. En el modelo ondulatorio, el campo y el medio forman un sistema acoplado. La fase avanza de otro modo porque el material responde y reemite de manera coherente a escala macroscópica.

El signo practico de un razonamiento correcto es que la frecuencia queda como puente entre ambos lados de la frontera. Si cambia el medio pero la fuente es la misma, se reajustan velocidad y longitud de onda, no el ritmo impuesto por la fuente.

## Orden de magnitud

En aire, [[indice_de_refraccion_efectivo]] esta muy cerca de uno y [[v_m]] casi coincide con [[velocidad_de_la_luz_en_el_vacio]]. En agua visible, un indice alrededor de 1.33 reduce la velocidad a unas tres cuartas partes de la referencia de vacio. En vidrio comun, indices alrededor de 1.5 reducen mas la velocidad y acortan la longitud de onda en la misma proporcion.

Un resultado absurdo aparece si un vidrio ordinario da una velocidad mayor que [[velocidad_de_la_luz_en_el_vacio]], si un indice positivo produce una longitud de onda negativa, o si se usa una longitud de onda de vacio como si fuera la longitud real dentro de una fibra.

## Método de resolución personalizado

Primero identifica que magnitud pertenece al vacio y cual pertenece al medio. Si el dato es [[lambda0]], no lo trates como [[lambda_m]] sin aplicar el indice. Si el dato es [[indice_de_refraccion_efectivo]], calcula primero [[v_m]] o [[lambda_m]] segun la pregunta.

Despues revisa la hipotesis del material. Para una estimacion simple, usa un indice efectivo. Para un pulso, un material dispersivo o una region con absorcion, cambia de modelo antes de interpretar el resultado. El ultimo paso es comprobar si el resultado respeta positividad y escala fisica razonable.

## Casos especiales y ejemplo extendido

Un caso sutil es la fibra optica. La luz no solo se propaga mas despacio en el nucleo; tambien debe cumplir condiciones de guiado entre nucleo y revestimiento. La diferencia de indices controla la reflexion interna y la trayectoria, mientras [[lambda_m]] controla la fase acumulada.

Otro caso es un prisma. Los distintos colores no se separan porque tengan distinta naturaleza, sino porque el indice efectivo depende ligeramente de la frecuencia. Esa dependencia hace que cada componente tenga una direccion refractada distinta y permite descomponer la luz blanca.

En medios absorbentes, el modelo de indice real puede quedarse corto. La onda puede perder amplitud mientras avanza, y entonces la propagacion requiere una descripcion con perdidas. En ese escenario, [[v_m]] y [[lambda_m]] siguen siendo utiles, pero no agotan la fisica.

## Preguntas reales del alumno

**¿La luz cambia de frecuencia al entrar en vidrio?** No en una frontera estacionaria. La fuente fija la frecuencia; el medio cambia velocidad y longitud de onda.

**¿Un indice mayor significa siempre mas lentitud?** En el modelo ordinario de este leaf, si. En materiales avanzados o muy dispersivos hay que precisar si hablamos de velocidad de fase, grupo o señal.

**¿Por que no uso siempre [[velocidad_de_la_luz_en_el_vacio]]?** Porque [[velocidad_de_la_luz_en_el_vacio]] describe la propagacion en vacio. En un medio, el campo interactua con la respuesta electrica y magnetica del material, y la velocidad efectiva cambia.

**¿La longitud de onda de un color es siempre la misma?** No. La frecuencia identifica el color en muchos contextos, pero la longitud de onda depende del medio en el que se propaga.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Espectro electromagnetico](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), donde se ordena la radiacion por frecuencia y longitud de onda. Tambien conecta con [Energia y momento de la onda em](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/energia-y-momento-de-la-onda-em), donde se estudia transporte de energia.

La ruta natural continua hacia optica geometrica, interferencia, fibras opticas y materiales. En todos esos temas, la misma pregunta vuelve a aparecer: que parte depende de la fuente y que parte depende del medio.

## Síntesis final

La propagacion en medios explica como un material modifica la velocidad y la longitud de onda de una radiacion electromagnetica mediante [[indice_de_refraccion_efectivo]], [[epsilon_r]] y [[mu_r]]. La frecuencia queda fijada por la fuente, mientras [[v_m]] y [[lambda_m]] describen la nueva escala fisica dentro del medio.