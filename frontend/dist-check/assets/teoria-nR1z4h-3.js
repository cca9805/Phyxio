const e=`# Rodadura como puente entre traslación y rotación\r
\r
## Contexto conceptual\r
\r
La rodadura es el caso en el que un sólido rígido avanza y gira a la vez. El centro de masas se traslada con [[v_cm]] y [[a_cm]], mientras el cuerpo cambia su orientación con [[omega]], [[alpha]] y [[theta]]. El puente físico entre ambas descripciones no es una analogía verbal: lo impone el contacto con el suelo a través del radio [[R]].\r
\r
La pregunta central es: **¿Por qué rodar significa combinar traslación del centro de masas y rotación del sólido?** El gráfico debe mostrar una rueda que avanza, gira y mantiene un punto de contacto instantáneamente en reposo cuando no hay deslizamiento.\r
\r
> [!NOTE]\r
> Gráfico recomendado: SVG de rueda con centro de masas, velocidad del centro, giro y punto instantáneo de contacto; Coord para comparar [[v_cm]] con [[omega]] por [[R]].\r
\r
## 🟢 Nivel esencial\r
\r
Rodar no significa simplemente moverse. Una rueda puede trasladarse sin girar, como cuando patina bloqueada; puede girar sin avanzar, como cuando patina en el sitio; y puede rodar, que es el caso compuesto. En rodadura ideal, el avance del centro y el giro están sincronizados.\r
\r
La idea esencial es reconocer dos lecturas simultáneas. Desde fuera vemos el centro avanzar. Desde el propio sólido vemos sus puntos girar alrededor del centro. La rodadura une esas lecturas porque el punto de contacto no resbala. Por eso no se debe decir que [[v_cm]] y [[omega]] son lo mismo: una es velocidad lineal y la otra angular. El radio [[R]] es el traductor físico. Sin esa traducción, el movimiento queda descrito a medias físicamente.\r
\r
Una comprobación esencial adicional consiste en comparar observación y modelo. Si el borde de la rueda gira mucho pero el centro avanza poco, no basta con repetir la relación ideal: hay que preguntar si hay deslizamiento o radio efectivo distinto. Este hábito evita convertir la condición de rodadura en una consigna sin diagnóstico físico.\r
\r
## 🔵 Nivel formal\r
\r
La relación núcleo del leaf es la condición de rodadura ideal:\r
\r
El nivel formal exige distinguir variable, parámetro y condición. [[omega]] es una variable de giro; [[v_cm]] es una variable de avance; [[R]] es el parámetro geométrico que traduce una lectura en la otra. La igualdad no dice que toda rotación produzca avance, sino que el contacto sin deslizamiento obliga a que la rotación útil corresponda al avance del centro. Esta precisión evita aplicar la fórmula a ruedas que patinan o cambian de radio efectivo.\r
\r
{{f:condicion_rodadura_puente}}\r
\r
Para aceleraciones, el mismo puente cinemático se expresa con:\r
\r
{{f:aceleracion_rodadura_puente}}\r
\r
Para desplazamientos acumulados, la relación equivalente es:\r
\r
{{f:desplazamiento_rodadura_puente}}\r
\r
Esta igualdad solo es válida si hay rodadura sin deslizamiento. Formalmente, [[v_cm]] mide avance del centro de masas, [[omega]] mide ritmo de giro y [[R]] convierte giro en longitud recorrida. Si el contacto falla, la igualdad deja de describir el sistema aunque las unidades sigan siendo correctas.\r
\r
El mismo puente aparece en aceleraciones: [[a_cm]] se conecta con [[alpha]] mediante el radio cuando la restricción se mantiene. También aparece en desplazamientos: el ángulo [[theta]] girado se relaciona con la distancia recorrida por el centro. Estas relaciones no sustituyen la dinámica; solo expresan la geometría del contacto.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, este leaf separa tres modelos. Traslación pura describe el centro de masas pero ignora el giro. Rotación pura describe orientación pero ignora el avance. Rodadura describe el acoplamiento entre ambos. El modelo correcto depende de si el contacto impone una restricción o permite deslizamiento.\r
\r
La estructura del razonamiento tiene una secuencia fija: primero se mira el contacto, después se decide si hay acoplamiento y solo entonces se usa la relación. Si se invierte el orden, una rueda bloqueada o una rueda patinando pueden parecer casos de rodadura cuando no lo son.\r
\r
La condición se rompe cuando hay patinaje, deformación dominante, radio efectivo variable o contacto intermitente. En esos casos conviene cambiar de modelo y tratar traslación y rotación como variables más independientes. El gráfico debe ayudar a detectar la diferencia: si el punto de contacto no puede leerse como instantáneamente quieto, la rodadura ideal no está justificada.\r
\r
## Interpretación física profunda\r
\r
La lectura profunda es causal y geométrica. El contacto transforma giro en avance: una vuelta completa desplaza el centro una longitud proporcional al radio. Si [[omega]] aumenta con [[R]] fijo, aumenta [[v_cm]]. Si [[R]] aumenta con [[omega]] fijo, el centro avanza más por cada giro. Si [[v_cm]] no coincide con el producto geométrico, hay deslizamiento o un radio efectivo distinto.\r
\r
El resultado no debe interpretarse como una fórmula aislada. La igualdad dice que dos formas de medir el mismo avance son compatibles: una desde la traslación del centro y otra desde el giro del sólido. Por eso la rodadura sirve de puente conceptual entre cinemática lineal y cinemática angular.\r
\r
## Orden de magnitud\r
\r
Para una rueda de radio 0,30 m que gira a 10 rad/s, una velocidad de centro cercana a 3 m/s es razonable. Si el cálculo diera 300 m/s para una rueda de aula, habría que revisar unidades o radio. Si una rueda grande y una pequeña tienen la misma [[omega]], la grande avanza más deprisa; si tienen la misma [[v_cm]], la pequeña debe girar más rápido.\r
\r
## Método de resolución personalizado\r
\r
1. Decide si el enunciado habla de avance, giro o contacto.\r
2. Comprueba si se declara o se puede asumir rodadura sin deslizamiento.\r
3. Usa la condición de rodadura solo después de fijar [[R]] y convención de signos.\r
4. Contrasta el resultado con el gráfico: centro, giro y punto de contacto deben ser coherentes.\r
5. Si hay patinaje, usa un modelo extendido con deslizamiento.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Una rueda bloqueada que se desliza por hielo tiene traslación sin rodadura. Una rueda que gira sobre una superficie muy resbaladiza puede tener rotación sin avance proporcional. Una rueda de bicicleta sobre asfalto seco se aproxima a rodadura ideal durante muchos intervalos de movimiento.\r
\r
En una bicicleta, aumentar el desarrollo cambia la relación entre pedaleo y giro de la rueda, pero el contacto rueda-suelo sigue exigiendo que [[v_cm]] corresponda al giro de la rueda si no hay derrape. Esta distinción separa mecanismo interno y condición externa.\r
\r
## Preguntas reales del alumno\r
\r
**¿Rodar es lo mismo que girar?** No. Girar describe orientación; rodar exige además avance acoplado del centro.\r
\r
**¿Por qué aparece el radio?** Porque convierte una magnitud angular en una longitud o velocidad lineal.\r
\r
**¿Qué pasa si patina?** La relación de rodadura deja de cerrar el problema y hay que modelar deslizamiento.\r
\r
**¿El punto de contacto está quieto siempre?** En rodadura ideal, está instantáneamente quieto respecto al suelo; no es el mismo punto material todo el tiempo.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con cinemática rotacional, relación lineal-angular, condición de rodadura sin deslizamiento y dinámica de la rodadura. También prepara energía en rodadura, porque la energía cinética total combina el movimiento del centro y el giro alrededor del centro.\r
\r
La ruta natural es estudiar primero las magnitudes angulares, luego la relación lineal-angular, después este puente conceptual y finalmente la condición de rodadura sin deslizamiento como restricción más precisa.\r
\r
## Síntesis final\r
\r
La rodadura como puente enseña que traslación y rotación no son capítulos separados cuando hay contacto sin deslizamiento. El centro avanza, el sólido gira y el radio une ambas lecturas. Una solución correcta conserva esa doble lectura en la fórmula, en el gráfico y en la interpretación.\r
\r
Este puente también prepara magnitudes que aparecerán después. La masa [[m]], el momento de inercia [[I]], la gravedad [[g]], el ángulo de plano [[phi]], el torque [[tau]], la energía cinética total [[K_total]] y la energía mecánica [[E_total]] no son el foco principal aquí, pero dependen de haber entendido antes cómo se acoplan avance y giro. En dinámica, [[tau]] explica por qué cambia [[omega]]. En energía, [[K_total]] suma una parte traslacional y otra rotacional. En un plano inclinado, [[g]] y [[phi]] pueden causar avance, pero la lectura de rodadura sigue exigiendo que el centro y el giro sean compatibles.\r
\r
Por eso este leaf no intenta resolver todavía todos los problemas de rodadura. Su tarea es más básica: construir el vocabulario común que permitirá leerlos. Si el alumno entiende que [[v_cm]], [[omega]] y [[R]] forman una misma condición de contacto, después podrá interpretar con menos errores la energía, el torque y la aceleración. Si no lo entiende, las fórmulas posteriores parecerán listas arbitrarias.`;export{e as default};
