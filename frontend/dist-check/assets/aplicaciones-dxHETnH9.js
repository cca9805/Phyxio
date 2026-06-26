const e=`## 1. Velocímetro de bicicleta por sensor de período\r
\r
Un sensor magnético fijado al cuadro de una bicicleta detecta cada paso de un imán montado en el radio. El controlador mide el tiempo entre dos pulsos consecutivos, que es exactamente el periodo [[T_periodo]] de una revolución, y a partir de ese dato calcula velocidad lineal, frecuencia [[f]] y velocidad angular [[omega]].\r
\r
Variable dominante: [[T_periodo]]. Es el único dato que mide directamente el hardware; todas las demás magnitudes se obtienen de él y del radio efectivo [[R]].\r
\r
Límite de validez: el modelo es válido mientras [[R]] sea constante y la rueda ruede sin deslizamiento. Un pinchazo parcial reduce [[R]] y sesga la lectura; el deslizamiento desacopla la rotación de la traslación del vehículo.\r
\r
Esta aplicación es didácticamente valiosa porque muestra que una magnitud angular puede ser útil incluso cuando el usuario final nunca ve un ángulo. El ciclista lee velocidad lineal, pero el dispositivo primero reconstruye una descripción rotacional completa. La física intermedia importa: si [[T_periodo]] baja, entonces suben [[f]] y [[omega]]; si [[R]] cambia, la conversión a velocidad lineal deja de ser fiable. El ejemplo obliga así a distinguir entre dato medido, magnitud intermedia y resultado mostrado.\r
\r
## 2. Diseño de relación de transmisión en motorreductor\r
\r
Un motorreductor conecta un motor eléctrico con una cinta transportadora. La decisión práctica no depende solo del número de dientes, sino de la velocidad angular objetivo [[omega]] en el eje de salida. El arco [[s]] de paso de cada diente debe ser compatible con el radio [[R]] de cada engranaje para evitar interferencias geométricas.\r
\r
Variable dominante: [[omega]]. La relación entre velocidades angulares define el tipo de transmisión, su módulo y el par útil.\r
\r
Límite de validez: válido para régimen permanente con deslizamiento nulo. En correas o cadenas con elasticidad apreciable aparece una pérdida efectiva de [[omega]] que invalida el cálculo geométrico puro.\r
\r
Aquí la relación entre geometría y cinemática es inmediata. El diseñador no puede decidir dientes o radios de forma aislada porque la función del sistema está escrita en términos de giro por unidad de tiempo. Eso explica por qué [[omega]] es dominante: resume el desempeño que se espera del conjunto. Sin embargo, el paso físico de cada diente se entiende mejor mediante [[s]] y [[R]], de modo que el problema combina una exigencia dinámica con una restricción geométrica.\r
\r
## 3. Control de posición angular con encoder óptico\r
\r
Un encoder óptico genera pulsos por vuelta completa. Cada pulso representa un incremento de posición angular y, al acumularlos, el controlador reconstruye [[theta]]. Un brazo robótico puede detenerse cuando [[theta]] alcanza el valor objetivo, mientras [[omega]] se estima de forma auxiliar a partir de la secuencia temporal de pulsos.\r
\r
Variable dominante: [[theta]]. Es el parámetro que cierra el lazo de posición; [[omega]] y [[T_periodo]] son magnitudes auxiliares para velocidad instantánea o diagnóstico.\r
\r
Límite de validez: válido mientras el encoder no pierda pulsos y la velocidad angular no supere la frecuencia de muestreo del controlador.\r
\r
Esta situación también enseña una diferencia esencial entre controlar posición y controlar velocidad. Si el objetivo es que el brazo llegue a un ángulo final, la variable central es [[theta]]. [[omega]] puede ser importante para suavidad, vibración o tiempos de ciclo, pero la decisión de detener el actuador se toma con la posición acumulada. El leaf ayuda a ver que distintas magnitudes pueden coexistir en el mismo sistema sin cumplir el mismo papel lógico dentro del control.\r
\r
## 4. Estimación de arco de seguridad en brazo articulado\r
\r
En un brazo industrial, el ángulo [[theta]] por sí solo no basta para evaluar seguridad. Lo que aparece en el criterio de separación es el arco [[s]] recorrido por el extremo del brazo, que depende también del radio [[R]]. La misma rotación puede ser segura o insegura según cambie la longitud efectiva del brazo.\r
\r
Variable dominante: [[s]]. Las normas de seguridad expresan distancias en metros, no en radianes, de modo que el resultado operativo es lineal aunque el dato de control sea angular.\r
\r
Límite de validez: válido para brazo rígido con [[R]] constante. En brazos extensibles o articulaciones múltiples, cada segmento requiere su propio tratamiento geométrico.\r
\r
Desde el punto de vista pedagógico, este caso corrige un error frecuente: creer que una rotación segura depende solo del valor de [[theta]]. No es así. Una pequeña rotación puede barrer una distancia grande si [[R]] es grande, y una rotación mayor puede seguir siendo segura si [[R]] es corto. El criterio operativo de seguridad está en metros y por eso [[s]] resulta más útil que el ángulo por sí solo cuando se analiza espacio libre o riesgo de contacto.\r
\r
## 5. Sincronización de alternador con la red eléctrica\r
\r
Antes de conectar un generador a la red, el operador compara la frecuencia [[f]] del alternador con la frecuencia de referencia. Una diferencia pequeña puede ser tolerable; una diferencia mayor provoca crecimiento del desfase y vuelve inseguro el cierre del interruptor. La velocidad angular [[omega]] queda así subordinada a una exigencia práctica expresada en hercios.\r
\r
Variable dominante: [[f]]. Es el parámetro de control directo y el criterio operativo de sincronización.\r
\r
Límite de validez: válido en régimen estacionario con [[omega]] aproximadamente constante. Durante la fase de arranque ya no basta la descripción periódica simple y se necesita cinemática angular variable.\r
\r
Este ejemplo cierra bien el leaf porque muestra una decisión real tomada a partir de una magnitud periódica. No se sincroniza un alternador porque el ángulo sea elegante, sino porque la diferencia de frecuencia produce consecuencias físicas severas. [[f]] se vuelve entonces una variable de seguridad y de operación. La utilidad del leaf aparece con claridad: pasar de una descripción abstracta de giro a un criterio concreto para aceptar o rechazar una maniobra técnica.`;export{e as default};
