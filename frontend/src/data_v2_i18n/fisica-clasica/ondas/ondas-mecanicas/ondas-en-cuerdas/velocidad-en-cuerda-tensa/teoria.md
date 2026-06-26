## Contexto conceptual

Una cuerda tensa transmite perturbaciones transversales porque cada pequeno tramo tira de sus vecinos. La onda no avanza porque la cuerda "se desplace entera", sino porque la **informacion mecanica** pasa de tramo en tramo. Este leaf estudia que fija esa rapidez en una cuerda ideal y por que no basta mirar la [[frecuencia]] de la fuente.

El punto central es separar tres ideas que suelen mezclarse: la fuente decide el ritmo temporal [[frecuencia]], la cuerda decide la rapidez [[velocidad_de_propagacion]], y la combinacion de ambas fija la escala espacial [[lambda]]. En una cuerda uniforme, el control mecanico principal esta en [[tension_de_la_cuerda]] y [[mu]].

Pensar bien esta velocidad sirve para afinar instrumentos, interpretar pulsos en cables, estimar retardos en montajes de laboratorio y preparar el estudio de ondas estacionarias. Si cambia la tension o cambia el material, cambia la rapidez con la que una perturbacion recorre la cuerda.

## 🟢 Nivel esencial

La idea esencial es muy concreta: una cuerda mas tensa transmite antes la perturbacion, mientras que una cuerda con mas masa por metro responde con mas lentitud. La tension actua como **agente restaurador**; la densidad lineal actua como **inercia distribuida**.

> [!NOTE]
> [[velocidad_de_propagacion]] no es la velocidad con la que un punto sube y baja. Un punto de la cuerda oscila transversalmente; [[velocidad_de_propagacion]] mide cuanto tarda la forma de la perturbacion en avanzar a lo largo de la cuerda.

Si se aumenta [[tension_de_la_cuerda]], cada tramo tira con mas eficacia de los tramos vecinos. Si se aumenta [[mu]], hay mas masa que acelerar en cada metro. Por eso la cuerda fina y muy tensa transmite pulsos rapidamente, mientras que una cuerda gruesa y floja transmite pulsos mas lentamente.

La [[frecuencia]] no decide por si sola la rapidez. Una mano puede agitar la cuerda mas rapido o mas lento, pero si la cuerda, su tension y su masa lineal no cambian, el medio conserva practicamente la misma [[velocidad_de_propagacion]]. Lo que se ajusta entonces es [[lambda]].

## 🔵 Nivel formal

El modelo ideal resume el balance entre restauracion elastica e inercia lineal mediante la relacion de velocidad de una cuerda tensa:

{{f:velocidad_cuerda_tensa}}

Esta formula expresa que [[tension_de_la_cuerda]] aparece como causa restauradora y [[mu]] como resistencia inercial. La raiz cuadrada es importante: aumentar mucho la tension produce un aumento real de [[velocidad_de_propagacion]], pero no proporcional de forma directa.

Una vez conocida [[velocidad_de_propagacion]], se puede conectarla con el ritmo temporal de la onda y con su separacion espacial:

{{f:frecuencia_desde_velocidad}}

La misma relacion, leida desde la escala espacial cuando la fuente impone una [[frecuencia]], queda como:

{{f:longitud_onda_desde_velocidad}}

Estas tres relaciones no dicen lo mismo. La primera decide la rapidez desde propiedades mecanicas de la cuerda. Las otras dos traducen esa rapidez a una lectura ondulatoria: si [[frecuencia]] se mantiene fija, una [[velocidad_de_propagacion]] mayor hace que [[lambda]] sea mayor.

Cuando el mismo tramo se fija en ambos extremos, [[longitud_efectiva]] no decide la rapidez local, pero convierte esa rapidez en una [[frecuencia]] fundamental del patron estacionario:

{{f:frecuencia_fundamental_cuerda}}

Esta ultima relacion es un puente de frontera. Sirve para leer que hace una cuerda ya caracterizada por [[tension_de_la_cuerda]] y [[mu]] cuando ademas se conoce su longitud activa. Si [[longitud_efectiva]] aumenta y la cuerda mantiene la misma [[velocidad_de_propagacion]], la fundamental baja porque el patron necesita mas tiempo para completar el recorrido compatible. Asi se separan tres papeles: [[tension_de_la_cuerda]] restaura, [[mu]] aporta inercia y [[longitud_efectiva]] selecciona modos.

> [!WARNING]
> No confundas causa y consecuencia. En una cuerda ideal, [[tension_de_la_cuerda]] y [[mu]] fijan la rapidez. [[frecuencia]] y [[lambda]] se organizan alrededor de esa rapidez.

## 🔴 Nivel estructural

El modelo se apoya en una idealizacion: la cuerda es flexible, uniforme, mantiene tension casi constante y vibra con amplitud pequena. Bajo esas condiciones, cada tramo de cuerda se comporta como una parte de un medio continuo donde la fuerza transversal aparece por la curvatura local de la cuerda.

La dependencia con [[tension_de_la_cuerda]] y [[mu]] tiene una lectura causal. La tension comunica el desvio transversal a regiones vecinas; la densidad lineal marca cuanta inercia se opone a esa aceleracion. Por eso dos cuerdas con la misma longitud pueden tener velocidades muy distintas si difieren en material, calibre o tension.

La longitud efectiva [[longitud_efectiva]] no entra como causa directa de la rapidez en una cuerda uniforme. En cambio, [[longitud_efectiva]] se vuelve crucial cuando se estudian modos estacionarios, porque determina que patrones caben entre extremos. Este leaf se concentra en la propagacion local; los modos aparecen despues como una consecuencia geometrica.

El modelo deja de ser suficiente cuando la cuerda es muy rigida, cuando la amplitud modifica apreciablemente la tension, cuando hay rozamiento fuerte, cuando la densidad cambia a lo largo de la cuerda o cuando el soporte de los extremos absorbe energia. En esos casos, la rapidez puede depender de la [[frecuencia]], del punto de la cuerda o del estado dinamico.

Tambien hay que distinguir rapidez de energia y rapidez de fase. En el modelo simple coinciden de forma practica para pulsos y ondas sinusoidales no dispersivas. En cuerdas reales gruesas, especialmente en instrumentos exigentes, aparecen correcciones que desplazan armonicos y modifican la lectura ideal.

El diagnostico estructural consiste en preguntar que se mantiene fijo cuando cambia una lectura. Si cambia [[tension_de_la_cuerda]] y no cambia [[mu]], se prueba la restauracion; si cambia [[mu]] y no cambia [[tension_de_la_cuerda]], se prueba la inercia distribuida; si cambia [[longitud_efectiva]] sin tocar la cuerda, se prueba una condicion de frontera, no una nueva rapidez local. Esta distincion evita usar una formula correcta en el nivel equivocado y permite reconocer cuando un dato pertenece al medio, a la fuente o a los extremos.

## Interpretación física profunda

La velocidad de propagacion es una **lectura del medio**, no de la fuente. Si un generador cambia su [[frecuencia]], obliga a la cuerda a oscilar con otro ritmo, pero no cambia automaticamente el modo en que cada tramo tira de sus vecinos. Para cambiar [[velocidad_de_propagacion]] hay que cambiar la cuerda como sistema mecanico: su [[tension_de_la_cuerda]], su [[mu]] o sus condiciones fisicas.

Esto explica una observacion comun: al tensar una cuerda de guitarra, el tono sube porque aumenta [[velocidad_de_propagacion]]. La cuerda no "sabe musica"; solo transmite perturbaciones mas rapido. Cuando la longitud activa queda fija, una rapidez mayor aumenta las frecuencias compatibles con los patrones estacionarios.

> [!TIP]
> Si el resultado de [[velocidad_de_propagacion]] parece raro, pregunta primero si [[tension_de_la_cuerda]] y [[mu]] tienen unidades coherentes. Muchos errores nacen de usar gramos por metro como si fueran kilogramos por metro.

## Orden de magnitud

En cuerdas didacticas ligeras, [[velocidad_de_propagacion]] puede estar en decenas de metros por segundo. En cuerdas musicales tensas, valores de varios cientos de metros por segundo son razonables. En cables muy tensos y ligeros, la rapidez puede ser aun mayor, aunque el modelo ideal empieza a pedir cuidado por rigidez y perdidas.

Una estimacion rapida: una tension de decenas de newtons y una densidad lineal de pocos gramos por metro suelen producir velocidades comparables a las de una cuerda musical. Si el calculo da centimetros por segundo o decenas de kilometros por segundo, conviene revisar unidades.

## Método de resolución personalizado

1. Identifica si el problema pregunta por rapidez del medio, [[frecuencia]] o longitud de onda.
2. Si pregunta por [[velocidad_de_propagacion]], busca [[tension_de_la_cuerda]] y [[mu]] antes de usar datos de la fuente.
3. Convierte [[mu]] a kg/m y [[tension_de_la_cuerda]] a newtons.
4. Calcula la rapidez con la relacion mecanica de cuerda tensa.
5. Solo despues conecta [[velocidad_de_propagacion]] con [[frecuencia]] o [[lambda]] si el enunciado lo pide.
6. Interpreta el resultado: mas tension acelera; mas densidad lineal ralentiza.

## Casos especiales y ejemplo extendido

Una cuerda de laboratorio puede tener [[tension_de_la_cuerda]] ajustada con una masa colgante y [[mu]] medida pesando un tramo conocido. Si se duplica la masa colgante, la tension aumenta, pero la rapidez no se duplica. El cambio se nota, aunque menos de lo que sugeriria una proporcion directa.

En una guitarra, una cuerda grave suele tener mayor [[mu]] que una cuerda aguda. Para que no sea demasiado lenta, se ajustan tension, longitud y material. El fabricante no elige [[velocidad_de_propagacion]] de forma aislada: busca una combinacion que produzca frecuencias utiles, tacto razonable y resistencia mecanica aceptable.

En una cuerda no uniforme, un pulso puede cambiar de forma al propagarse. La parte mas densa responde con otra rapidez y aparecen reflexiones parciales. Ese caso ya no se describe bien con una sola [[mu]] global y exige un modelo por tramos.

## Preguntas reales del alumno

**¿Por que una cuerda mas tensa suena mas aguda?** Porque al aumentar [[tension_de_la_cuerda]] sube [[velocidad_de_propagacion]]. Si la longitud activa no cambia, los patrones estacionarios compatibles vibran con mayor [[frecuencia]].

**¿La [[frecuencia]] de mi mano cambia la rapidez del pulso?** No directamente. La fuente cambia el ritmo [[frecuencia]]; la cuerda decide la rapidez por sus propiedades mecanicas. A [[frecuencia]] fija, el ajuste visible aparece en [[lambda]].

**¿Por que una cuerda gruesa puede sonar grave aunque este tensa?** Porque una cuerda gruesa suele tener mayor [[mu]]. Esa inercia lineal reduce la rapidez y facilita frecuencias mas bajas para la misma longitud.

**¿La longitud de la cuerda cambia la rapidez?** En el modelo uniforme, no como causa local. [[longitud_efectiva]] importa para modos estacionarios y notas permitidas, pero la rapidez local depende de tension y densidad lineal.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [[[frecuencia]] y periodo](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/[[frecuencia]]-y-periodo), [longitud de onda](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda) y [ondas estacionarias](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias). Primero conviene dominar que fija [[velocidad_de_propagacion]]; despues se entiende por que una cuerda solo refuerza ciertas frecuencias.

## Síntesis final

La velocidad de propagacion en una cuerda tensa resume un balance: [[tension_de_la_cuerda]] comunica la perturbacion y [[mu]] aporta inercia. La fuente puede cambiar [[frecuencia]], pero la cuerda decide [[velocidad_de_propagacion]]; a partir de ahi se ajustan [[lambda]] y las frecuencias compatibles con el sistema.