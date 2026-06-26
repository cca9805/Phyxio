const e=`# Definición de momento angular [[L]]\r
\r
## Contexto conceptual\r
\r
El momento angular (o momento cinético) cuantifica la "cantidad de rotación" de un cuerpo respecto a un punto. Es el análogo rotacional del momento lineal [[p]]: mientras que el momento lineal mide la tendencia a continuar en línea recta, el momento angular mide la tendencia a continuar girando. Su conservación gobierna desde la órbita de un satélite hasta el giro de una patinadora que recoge los brazos.\r
\r
## 🟢 Nivel esencial\r
\r
El momento angular no responde solo a cuánto movimiento lleva un cuerpo, sino a cómo pasa ese movimiento respecto a un origen. Dos objetos pueden tener la misma inercia traslacional y, sin embargo, producir efectos rotacionales muy distintos si uno pasa casi por el origen y el otro lo hace lejos de él. La idea esencial del leaf es esa: el giro no depende solo de la rapidez, sino también del brazo perpendicular con el que el movimiento rodea al punto elegido.\r
\r
Lo primero, por tanto, no es lanzar una cuenta, sino elegir bien el origen y mirar la geometría. Si el movimiento apunta casi hacia el origen, la capacidad de generar [[L]] es pequeña. Si cruza de lado con buen brazo, [[L]] crece aunque la masa [[m]] y la velocidad [[v]] no cambien. Esa lectura cualitativa es la que luego justifica por qué en unos problemas conviene usar una descripción orbital y en otros una descripción de cuerpo rígido.\r
\r
> [!IMPORTANT]\r
> El momento angular depende del punto de referencia elegido. Cambiar el origen cambia la lectura física porque cambia el brazo con el que el movimiento actúa alrededor de ese punto.\r
\r
**Lectura guía.** El momento lineal resume la parte traslacional del movimiento; el momento angular resume cómo esa inercia se distribuye alrededor de un origen. Si el movimiento es casi perpendicular al radio, el efecto rotacional es grande. Si el radio y la trayectoria casi se alinean, el efecto rotacional cae aunque el objeto siga siendo rápido.\r
\r
## 🔵 Nivel formal\r
\r
### Producto vectorial y dirección\r
\r
[[L]] es un vector perpendicular al plano formado por r y p. Su dirección se determina con la regla de la mano derecha: si los dedos giran de r hacia p, el pulgar señala L.\r
\r
En componentes cartesianas:\r
\r
{{f:p}}\r
\r
{{f:L}}\r
\r
Para una partícula concreta, el módulo se puede escribir como:\r
\r
{{f:L}}\r
Donde se usa el módulo del producto vectorial. Esa forma deja claro por qué el brazo perpendicular importa tanto como la rapidez.\r
\r
### Torque [[tau]] y variación temporal\r
\r
El torque (momento de una fuerza) es:\r
\r
{{f:tau}}\r
\r
Y la segunda ley de Newton rotacional:\r
\r
{{f:L}}\r
\r
Si el torque neto es nulo, entonces L es constante: **conservación del momento angular**.\r
\r
En términos operativos del leaf conviene enlazar explícitamente la definición orbital, la relación de rotor, el despeje para velocidad angular y la relación temporal de cambio angular. La lectura orbital usa [[r]], [[p]] y [[theta]]; la lectura de rotor conecta [[L]], [[I]] y [[omega]]; y la relación de torque medio muestra cómo un torque sostenido durante [[DeltaT]] produce una variación [[DeltaL]].\r
\r
{{f:Lrot}}\r
\r
{{f:Lrot_solve_omega}}\r
\r
{{f:tau_solve_DeltaL}}\r
\r
### Momento angular de un sistema de partículas\r
\r
El momento angular total es la suma de los momentos individuales:\r
\r
Los torques internos se cancelan por la tercera ley si las fuerzas internas son centrales, dejando:\r
\r
{{f:L}}\r
\r
Esta forma es útil para distinguir qué parte del problema pertenece al sistema y qué parte pertenece al entorno. Si se escoge mal la frontera del sistema, se pierde la lectura física correcta de [[L]].\r
\r
### Relación con el movimiento circular\r
\r
Para una partícula en órbita circular de radio [[r]] con velocidad angular [[omega]]:\r
\r
La expresión de la relación orbital se mantiene en el nivel formal y permite recuperar la lectura de giro alrededor del origen.\r
\r
donde\r
\r
La relación de rotor usa el momento de inercia [[I]] para traducir entre estado angular y velocidad de giro.\r
\r
es el momento de inercia [[I]]. Esta relación es fundamental porque conecta la lectura orbital con la lectura de cuerpo rígido.\r
\r
## 🔴 Nivel estructural\r
\r
### Pseudovector y transformación bajo inversión\r
\r
L es un **pseudovector** (vector axial): bajo una inversión espacial (r to -r, p to -p), L no cambia de signo. Esto lo distingue de los vectores polares como p y tiene implicaciones en simetría y en la interacción electrodébil.\r
\r
### Momento angular orbital vs. de spin\r
\r
En mecánica clásica, una partícula puntual solo tiene momento angular **orbital** respecto a un punto externo. Un cuerpo rígido tiene además momento angular **de spin** respecto a su propio centro de masas. El momento angular total combina ambas contribuciones y debe leerse con el mismo origen para evitar inconsistencias.\r
\r
Esta distinción importa porque en muchos problemas el origen elegido cambia la parte orbital, pero no la parte de spin. Confundir ambas lecturas lleva a errores de interpretación.\r
\r
### Dependencia del punto de referencia\r
\r
Cambiando el origen de O a O':\r
\r
donde la velocidad del centro de masas es nula o se elige el CM como origen. Si el sistema está en el marco CM, L es el mismo respecto a cualquier origen: el momento angular intrínseco es absoluto.\r
\r
Este resultado obliga a ser riguroso con el origen. Dos cálculos distintos de [[L]] pueden ser ambos correctos si usan orígenes distintos; el error aparece cuando se comparan como si fueran la misma magnitud física.\r
\r
### Analogía completa traslación ↔ rotación\r
\r
| Traslación | Rotación |\r
|:-:|:-:|\r
| masa m | momento de inercia I |\r
| velocidad [[v]] | velocidad angular [[omega]] |\r
| momento [[p]] | momento angular [[L]] |\r
| fuerza aplicada | torque [[tau]] |\r
|\r
\r
la relación lineal y la relación de rotor\r
\r
|\r
\r
La tabla no es un mero recurso mnémico. Sirve para trasladar intuiciones de dinámica lineal al contexto rotacional y para detectar cuándo esa analogía deja de ser válida por culpa de la geometría o del origen elegido.\r
\r
## Interpretación física profunda\r
\r
El momento angular captura no solo cuán rápido gira algo, sino **dónde** lo hace: la distancia [[r]] al eje entra al cuadrado vía [[I]]. Por eso una patinadora acelera dramáticamente al recoger los brazos: reduce [[I]] sin que ningún torque externo actúe, así que [[omega]] crece para conservar [[L]]. El momento angular es el guardián de la rotación: sin torque externo, nada puede cambiar cuánto y en qué dirección gira un sistema.\r
\r
La profundidad del concepto está en que obliga a pensar vectorialmente y geométricamente a la vez. No basta con saber que algo se mueve; hay que saber con qué brazo y respecto a qué origen. Esa doble lectura es la que explica por qué el mismo cuerpo puede tener \`L\` nulo respecto a un punto y grande respecto a otro.\r
\r
## Orden de magnitud\r
\r
El momento angular de la Tierra en su órbita es del orden de 10^40 kg·m²/s. Su momento angular de rotación es del orden de 10^33 kg·m²/s, siete órdenes menor. Un trompo de juguete girando a 30 rev/s puede tener L sim 10^{-3} kg·m²/s. Un electrón tiene momento angular intrínseco de orden 10^-34 J·s, cuantizado y sin análogo clásico.\r
\r
Comparar esas escalas ayuda a no trivializar la magnitud: [[L]] puede ir desde valores microscópicos hasta cifras astronómicas, pero en todos los casos conserva la misma arquitectura conceptual.\r
\r
## Método de resolución personalizado\r
\r
1. **Elegir** el punto de referencia O, preferiblemente donde los torques se simplifiquen.\r
2. **Escribir** [[r]] y [[p]] de cada partícula o, si es un rotor, fijar [[I]] y [[omega]].\r
3. **Calcular** [[L]] con la fórmula adecuada: orbital o de cuerpo rígido.\r
4. **Identificar** torques externos y decidir si se trata de una definición instantánea o de un balance con [[DeltaL]].\r
5. **Verificar** unidades: [[L]] tiene unidades de kg·m²/s y [[tau]] de N·m.\r
\r
Este método no es solo algorítmico. Obliga a comprobar si el problema pide una lectura geométrica, una lectura dinámica o ambas.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Ejemplo numérico.** Un disco de masa 2 kg y radio 0.5 m gira a 10 rad/s. Su momento de inercia vale:\r
\r
La inercia del disco se obtiene con la relación de cuerpo rígido en su forma correspondiente.\r
\r
Por tanto,\r
\r
Luego se calcula el estado angular del rotor con la relación entre [[L]], [[I]] y [[omega]].\r
\r
Si se duplica la velocidad angular sin torque externo, eso es imposible. Para duplicar [[omega]] se necesita aportar un cambio en el momento angular. Si el torque medio es conocido, el tiempo necesario se estima con la relación entre [[tau]], [[DeltaL]] y [[DeltaT]].\r
\r
**Caso de partícula en línea recta.** Una partícula moviéndose en línea recta a velocidad constante sí tiene momento angular respecto a un punto que no esté sobre su trayectoria:\r
\r
Esta lectura orbital se mantiene constante cuando el torque neto externo es despreciable.\r
\r
, donde d es la distancia perpendicular, y ese valor se conserva durante todo el movimiento.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Una partícula que va en línea recta tiene momento angular?** Sí, respecto a cualquier punto que no esté en la recta de movimiento. Y ese [[L]] es constante si no hay torque.\r
- **¿Por qué la patinadora gira más rápido al recoger brazos?** Porque reduce [[I]], y por conservación de [[L]] debe aumentar [[omega]].\r
- **¿El momento angular siempre apunta hacia arriba?** No. Apunta según la regla de la mano derecha y puede estar en cualquier dirección.\r
- **¿Por qué depende tanto del origen?** Porque [[L]] mezcla movimiento y geometría. Cambiar el origen cambia [[r]] y cambia la lectura física.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Prerrequisito**: [Momento lineal](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal) y producto vectorial.\r
- **Siguiente**: [Conservación del momento angular](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/conservacion-momento-angular).\r
- **Extensión**: [Precesión](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/precesion).\r
\r
## Síntesis final\r
\r
El momento angular [[L]] es la magnitud rotacional fundamental: mide la tendencia de un cuerpo a seguir girando respecto a un punto. Su variación temporal está ligada al torque [[tau]], y su lectura de rotor conecta la geometría del cuerpo con su estado de giro. Su dependencia del origen obliga a leer siempre el problema con cuidado geométrico. Entenderlo bien significa saber cuándo manda [[p]], cuándo manda el brazo y cuándo conviene pasar de una lectura orbital a una lectura de rotor.`;export{e as default};
