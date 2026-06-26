const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un oscilador armónico simple ideal se mueve con amplitud [[A]] de 0.03 m, pulsación [[omega]] de 15 rad/s y fase inicial [[phi]] de 0.4 rad. Se pide estudiar el estado del sistema en el instante [[t]] de 0.12 s. La tarea no consiste solo en producir un valor angular, sino en reconstruir el estado instantáneo a partir de la fase y decidir qué dice ese estado sobre [[x]] y [[v]].\r
\r
## Datos\r
\r
Los datos relevantes son [[A]], [[omega]], [[phi]] y [[t]]. Se asume que el movimiento es sinusoidal, que la amplitud se mantiene estable y que la referencia temporal ya está fijada en el enunciado. También se da por hecho que la interpretación se hará dentro del modelo de MHS ideal, de modo que la fase puede leerse como organizadora del ciclo y no solo como un número aislado.\r
\r
## Definición del sistema\r
\r
El sistema es un oscilador armónico simple ideal de una sola coordenada. Eso significa que su estado instantáneo puede resumirse mediante una variable angular [[phi_t]] y proyectarse luego sobre una coordenada espacial [[x]] y una velocidad [[v]]. El problema no pide estudiar energía ni fuerzas externas; pide leer correctamente el estado del ciclo en un instante concreto.\r
\r
## Modelo físico\r
\r
El modelo físico del leaf trata la fase como una variable que ubica el sistema dentro del ciclo. A partir de ella se puede obtener la posición y la velocidad compatibles con ese estado. En este ejemplo, [[omega]] fija el ritmo del ciclo, [[phi]] fija el arranque y [[A]] fija la escala espacial. Esta estructura es exactamente la del leaf porque el foco no es solo calcular movimiento, sino interpretar cómo una variable angular ordena el estado oscilatorio.\r
\r
## Justificación del modelo\r
\r
El modelo es adecuado porque el enunciado describe un MHS ideal, con amplitud constante y pulsación estable. Bajo esas condiciones, la fase instantánea es una herramienta física válida para identificar en qué parte del ciclo se encuentra el sistema. Si [[omega]] variara apreciablemente o si la señal estuviera amortiguada de manera dominante, la lectura simple de fase perdería robustez y habría que cambiar de modelo. Aquí no ocurre eso, por tanto el enfoque por fase es coherente y suficiente.\r
\r
## Resolución simbólica\r
\r
Primero se obtiene el estado angular instantáneo:\r
\r
{{f:fase_instante}}\r
\r
Después se proyecta ese estado sobre la coordenada espacial:\r
\r
{{f:posicion_con_fase}}\r
\r
Por último se proyecta el mismo estado sobre la velocidad instantánea:\r
\r
{{f:velocidad_con_fase}}\r
\r
Para comparar dos osciladores del mismo régimen con una referencia común también se usa:\r
\r
{{f:desfase_entre_osciladores}}\r
\r
## Sustitución numérica\r
\r
Al sustituir los datos, la fase instantánea queda en el entorno de 2.2 rad. Ese resultado ya aporta una primera lectura: el sistema ha recorrido una parte significativa del ciclo y no está cerca del arranque temporal original. Cuando ese estado se proyecta sobre [[x]], aparece un desplazamiento negativo de pequeña magnitud respecto a la amplitud máxima, lo cual es compatible con un punto del ciclo situado en el semiplano espacial opuesto al estado inicial. Al proyectarlo sobre [[v]], la velocidad también resulta negativa, indicando que el oscilador no solo está en una posición concreta, sino que además se mueve en un sentido bien definido dentro del ciclo.\r
\r
La parte importante de esta sustitución no es solo el valor numérico. Es la consistencia entre las tres lecturas. [[phi_t]] ubica el estado, [[x]] lo proyecta sobre el eje espacial y [[v]] aclara el sentido del movimiento. Si alguna de esas tres piezas contradijera a las otras, el problema estaría en datos, unidades o modelo, no en la idea de fase.\r
\r
## Validación dimensional\r
\r
La validación dimensional debe comprobar que [[phi_t]] y [[phi]] se leen en radianes, que [[omega]] está en radianes por segundo y que [[t]] está en segundos. También debe comprobar que [[x]] sale en metros y [[v]] en metros por segundo. Esta revisión no es secundaria, porque mezclar frecuencia en hertz con [[omega]] o desplazar la referencia temporal sin decirlo cambia por completo la interpretación.\r
\r
Además, conviene aplicar un control de rango. El valor de [[x]] no puede superar en magnitud a [[A]], y la escala de [[v]] debe ser compatible con el producto entre amplitud y pulsación. En este caso, las cifras obtenidas mantienen coherencia con ambas restricciones, por lo que el resultado no solo es algebraicamente correcto, sino físicamente plausible.\r
\r
## Interpretación física\r
\r
La interpretación física correcta no se limita a decir que la fase instantánea vale aproximadamente 2.2 rad. Lo importante es que ese valor sitúa al oscilador en una región del ciclo donde la posición ya es negativa y la velocidad también apunta hacia el lado negativo. Esto implica que el sistema no está simplemente en un punto; está recorriendo activamente una parte concreta del patrón temporal. Por tanto, la fase cumple su papel más importante: convertir un instante en una lectura estructurada del ciclo.\r
\r
También se ve por qué la posición sola habría sido insuficiente. Saber solo el signo de [[x]] no aclara si el oscilador acaba de dejar un extremo o si se aproxima a él. La combinación entre [[phi_t]], [[x]] y [[v]] sí lo permite. Esa es precisamente la ventaja conceptual del leaf.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un banco de vibraciones didáctico se registran dos osciladores con la misma pulsación nominal. El objetivo del laboratorio es decidir si están aproximadamente sincronizados o si uno lleva un adelanto angular significativo respecto del otro. Para ello se conocen [[phi1]] de 0.2 rad y [[phi2]] de 1.1 rad, además de una [[omega]] común en el régimen de trabajo. Lo que interesa no es solo restar ángulos, sino interpretar si el corrimiento relativo tiene consecuencias observables en la comparación de señales.\r
\r
## Estimación física\r
\r
La estimación principal usa el desfase relativo entre ambos estados. La diferencia angular queda del orden de 0.9 rad, lo cual no es una perturbación despreciable si se compara con una vuelta completa del ciclo. En términos físicos, eso significa que el segundo oscilador ocupa una región del patrón claramente adelantada respecto del primero. Si la pulsación es de 15 rad/s, esa diferencia angular corresponde a una separación temporal del orden de unas centésimas de segundo. No hace falta convertirla en una nueva fórmula para extraer la conclusión relevante: las señales no están sincronizadas y el corrimiento es suficientemente grande como para ser visible en un registro temporal bien resuelto.\r
\r
Esta estimación también enseña algo importante sobre convención. El signo del resultado depende del orden en que se comparen [[phi2]] y [[phi1]], así que la interpretación física solo es válida si la referencia temporal y la convención de resta permanecen estables durante toda la práctica.\r
\r
## Interpretación\r
\r
La aplicación real muestra que la fase no es un lujo formal, sino una herramienta de diagnóstico. Un desfase del orden encontrado indica que dos sistemas que quizá se parezcan mucho en amplitud o frecuencia pueden, sin embargo, estar en estados distintos del ciclo en un mismo instante. Eso afecta cómo se comparan medidas, cómo se alinean señales y cómo se interpreta la sincronización de un montaje experimental.\r
\r
Por tanto, la conclusión correcta no es solo que el segundo oscilador tiene una fase mayor. La conclusión útil es que adelanta de manera físicamente significativa bajo la convención adoptada, y que ese adelanto puede traducirse en un corrimiento temporal medible. Esto implica que la lectura de fase ofrece información que ni [[x]] ni [[A]] por sí solas habrían dado con la misma claridad.`;export{e as default};
