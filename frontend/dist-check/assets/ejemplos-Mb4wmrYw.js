const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una esfera pequena cae verticalmente en aceite y el problema pide estimar su velocidad terminal [[v_t]] suponiendo que el arrastre efectivo en la banda observada puede modelarse como lineal. En una segunda parte, se compara ese caso con la caida de un paracaidista para justificar por que ya no conviene usar el mismo bloque de arrastre.\r
\r
El objetivo no es obtener dos numeros sin contexto, sino decidir que ley de arrastre es fisicamente razonable en cada escena y explicar por que el equilibrio dinamico aparece a una rapidez limite distinta en ambos casos.\r
\r
## Datos\r
\r
Caso 1, esfera en aceite:\r
\r
- [[m]] = 0.020 kg\r
- [[g]] = 9.8 m/s²\r
- [[b]] = 0.49 N·s/m\r
\r
Caso 2, paracaidista en aire:\r
\r
- [[m]] = 80 kg\r
- [[g]] = 9.8 m/s²\r
- [[rho]] = 1.2 kg/m³\r
- [[C_d]] = 1.1\r
- [[A]] = 0.70 m²\r
\r
## Definición del sistema\r
\r
En ambos casos se modela el movimiento como vertical y unidimensional. El diagrama de cuerpo libre incluye peso hacia abajo y arrastre hacia arriba. La rapidez terminal [[v_t]] se define como la rapidez a la que la fuerza neta se anula, de modo que la aceleracion deja de ser distinta de cero.\r
\r
En la esfera en aceite, el medio es viscoso y la banda de velocidades es baja; por eso se acepta primero una descripcion con [[b]]. En el paracaidista, la geometria abierta y la interaccion con aire hacen mas razonable usar [[rho]], [[C_d]] y [[A]].\r
\r
## Modelo físico\r
\r
El primer caso usa el bloque lineal de velocidad terminal. El segundo usa el bloque cuadratico. Esta comparacion es parte del aprendizaje del leaf: la rapidez limite no es independiente de la ley resistiva adoptada.\r
\r
Para el caso lineal se emplea:\r
\r
{{f:velocidad_terminal_lineal}}\r
\r
Para el caso cuadratico se emplea:\r
\r
{{f:velocidad_terminal_cuadratica}}\r
\r
## Justificación del modelo\r
\r
El modelo lineal es fisicamente defendible para la esfera en aceite porque la resistencia del medio puede resumirse con un coeficiente [[b]] en la banda de rapidez de interes. En este contexto, el medio frena desde velocidades relativamente bajas y la aproximacion lineal puede capturar bien la llegada al equilibrio.\r
\r
En cambio, para el paracaidista importa la densidad del aire [[rho]], la forma efectiva resumida en [[C_d]] y el area frontal [[A]]. Tratar ese caso con [[b]] sin justificacion ocultaria la geometria y el medio. Por eso el modelo cuadratico es el punto de partida mas coherente.\r
\r
## Resolución simbólica\r
\r
Caso lineal:\r
\r
{{f:velocidad_terminal_lineal}}\r
\r
La lectura simbolica es inmediata: [[v_t]] aumenta con [[m]] y con [[g]], y disminuye al crecer [[b]].\r
\r
Caso cuadratico:\r
\r
{{f:velocidad_terminal_cuadratica}}\r
\r
Aqui [[v_t]] aumenta con [[m]] y [[g]], pero disminuye cuando aumentan [[rho]], [[C_d]] o [[A]]. Esa estructura resume por que un paracaidas abierto reduce con fuerza la rapidez limite.\r
\r
## Sustitución numérica\r
\r
En la esfera con aceite, el reemplazo numérico da una [[v_t]] cercana a 0.40 m/s.\r
\r
En el caso del paracaidista, el reemplazo numérico en el modelo cuadrático da una [[v_t]] cercana a 41 m/s.\r
\r
Los dos valores no deben compararse como si pertenecieran al mismo mecanismo. Su diferencia expresa que el medio y la ley resistiva cambian radicalmente el modo en que el equilibrio dinamico se alcanza.\r
\r
## Validación dimensional\r
\r
En el modelo lineal, [[m]][[g]] produce una fuerza y [[b]] divide por una magnitud con unidades de fuerza por velocidad; el resultado queda en m/s, como debe ocurrir para [[v_t]].\r
\r
En el modelo cuadratico, la combinacion de [[rho]], [[C_d]] y [[A]] en el denominador, junto con [[m]] y [[g]] en el numerador, deja una cantidad con unidades de velocidad al tomar la raiz cuadrada. Este control dimensional es obligatorio, porque diferencia una expresion fisicamente usable de una algebraicamente plausible pero incorrecta.\r
\r
## Interpretación física\r
\r
La interpretacion correcta es que la velocidad terminal depende de como el medio devuelve una fuerza resistiva creciente hasta equilibrar el peso. En la esfera, el equilibrio aparece pronto porque el fluido viscoso frena con eficiencia desde bajas velocidades. En el paracaidista, la rapidez limite es bastante mayor porque se necesita una rapidez mas alta para que el arrastre del aire alcance al peso del sistema.\r
\r
Tambien se ve por que [[A]] y [[C_d]] son herramientas de diseño. Aumentar [[A]] o [[C_d]] reduce [[v_t]] en el modelo cuadratico, lo que explica la funcion fisica de un paracaidas: aumentar la interaccion con el aire para alcanzar antes una rapidez segura.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de rescate analiza dos configuraciones de descenso para material sensible: una capsula compacta y una capsula con aletas desplegables. El problema no es solo estimar una rapidez final, sino determinar que configuracion limita mejor el impacto sin exceder peso total permitido.\r
\r
La capsula compacta tiene menor [[A]] y probablemente menor [[C_d]], por lo que su [[v_t]] sera mayor si el resto de condiciones no cambia. La capsula con aletas aumenta area efectiva y modifica el patron de arrastre.\r
\r
## Estimación física\r
\r
Si el sistema opera en aire y la geometria desplegada aumenta visiblemente [[A]], el modelo cuadratico anticipa una reduccion clara de [[v_t]]. Esa lectura es suficiente para orientar la decision de diseño aun antes de una simulacion de detalle. Si, por el contrario, el dispositivo cayera en un fluido muy viscoso o a escala mucho mas pequeña, podria evaluarse una ley lineal efectiva.\r
\r
La estimacion no es puramente numerica. Es una comparacion de mecanismos: que configuracion alcanza equilibrio dinamico a menor rapidez y con que robustez frente a cambios de postura.\r
\r
## Interpretación\r
\r
Este ejemplo muestra por que velocidad terminal es una herramienta de diseño y no solo una respuesta de examen. Permite decidir si conviene cambiar masa, ampliar [[A]] o modificar la forma resumida por [[C_d]]. La conclusion fisica madura no es solo "una capsula cae mas lento"; es "una geometria que incrementa arrastre puede reducir [[v_t]] y hacer el descenso mas seguro dentro del modelo adoptado".\r
`;export{e as default};
