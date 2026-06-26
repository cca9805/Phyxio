const e=`# Sustentación\r
\r
## Contexto conceptual\r
\r
La **sustentación** es la fuerza aerodinámica que aparece cuando un flujo interactúa con una superficie y la resultante tiene una componente aproximadamente perpendicular a la corriente incidente. En el nodo de dinámica de fluidos, este leaf actúa como puente entre la ecuación de Bernoulli, la desviación de cantidad de movimiento y la lectura de fuerzas sobre un cuerpo inmerso en un flujo.\r
\r
El objetivo no es repetir que “un ala vuela porque el aire va más rápido arriba”. Esa frase puede ser útil como imagen inicial, pero queda incompleta. La sustentación real exige leer simultáneamente una diferencia de presiones, una desviación del flujo y un dominio de validez. Un perfil alar no crea fuerza de la nada: reorganiza el campo de velocidades y presiones del fluido.\r
\r
Este tema es central porque permite pasar de una gráfica o de una escena visual a una decisión física: si la fuerza vertical disponible basta para sostener un peso, si el margen aumenta con la velocidad, o si el modelo simple deja de valer por pérdida, compresibilidad o separación de la capa límite.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial de la sustentación es que un flujo puede ejercer una fuerza neta sobre un cuerpo cuando cambia su dirección o su distribución de presión alrededor de él. En un ala, el aire no solo “pasa”: se curva, se acelera localmente y queda organizado de forma distinta sobre el extradós y el intradós.\r
\r
Imagina una mano fuera de la ventanilla de un coche. Al inclinarla suavemente, notas una fuerza que la empuja hacia arriba o hacia abajo. No has cambiado la masa [[m]] de la mano; has cambiado cómo el aire se encuentra con ella. Esa lectura es la puerta de entrada al concepto de sustentación [[L]]. Si el coche va más rápido, la fuerza aumenta notablemente, lo que sugiere que la velocidad es un factor crítico en la generación de esta fuerza dinámica.\r
\r
> [!IMPORTANT]\r
> La sustentación no depende de una única causa aislada: combina distribución de presión, desviación del flujo y orientación del cuerpo.\r
\r
En esta capa no hace falta resolver ecuaciones. Basta reconocer que una misma superficie puede generar más o menos fuerza si cambia la rapidez del flujo, la densidad del aire, el área efectiva o la forma en que el perfil está orientado. Al final, lo que buscamos es que esta fuerza sea capaz de vencer al peso para permitir el vuelo sostenido, transformando el movimiento relativo en una ventaja mecánica.\r
\r
## 🔵 Nivel formal\r
\r
La estimación global más usada en aerodinámica elemental es la fórmula de sustentación:\r
\r
{{f:sustentacion_general}}\r
\r
La magnitud [[L]] representa la fuerza de sustentación. La densidad [[rho]] mide cuánta masa de fluido participa por volumen, la velocidad [[v]] controla la intensidad cinemática del flujo, la superficie [[S]] fija la escala geométrica y el coeficiente [[C_L]] condensa forma, ángulo de ataque y régimen.\r
\r
También puede estudiarse una lectura local basada en la diferencia de presión entre las dos caras del perfil:\r
\r
{{f:bernoulli_diferencia_presion}}\r
\r
En esta relación, [[v_sup]] es la velocidad del flujo sobre el extradós (parte superior) y [[v_inf]] es la velocidad bajo el intradós (parte inferior). Si el contraste medio de presión se conoce, la fuerza resultante puede aproximarse mediante:\r
\r
{{f:fuerza_por_presion}}\r
\r
En vuelo horizontal estabilizado se introduce además la comparación con el peso, donde la masa [[m]] y la aceleración de la gravedad [[g]] determinan la carga a vencer para mantener la altitud:\r
\r
{{f:equilibrio_vuelo}}\r
\r
Estas relaciones no son intercambiables. La primera estima una fuerza global; la segunda interpreta el origen de presión; la tercera convierte presión media en fuerza; la cuarta es una condición de equilibrio vertical. Resolver bien consiste en elegir qué pregunta física se está respondiendo y aplicar las magnitudes adecuadas.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura profunda de la sustentación tiene tres capas. La primera es cinemática: el flujo alrededor del perfil cambia de velocidad y dirección. La segunda es dinámica: ese cambio exige un campo de presiones capaz de producir una fuerza sobre el ala. La tercera es de validez: el modelo solo funciona si el flujo permanece en un régimen compatible con las hipótesis.\r
\r
Cuando el ángulo de ataque [[alpha]] aumenta dentro de un rango moderado, [[C_L]] suele crecer de forma aproximadamente lineal. Pero esa tendencia no puede extrapolarse sin límite. Si la capa límite se separa, el perfil entra en pérdida y la sustentación cae aunque el ángulo siga aumentando. En ese punto la fórmula global sigue pudiendo escribirse, pero el valor de [[C_L]] ya no puede tratarse como suave ni predecible sin datos específicos.\r
\r
La compresibilidad también introduce límites. Para números de Mach bajos el aire puede aproximarse como incompresible, pero cerca del régimen transónico aparecen ondas de choque locales, desplazamiento del centro de presiones y cambios fuertes en resistencia. La lectura Bernoulli elemental deja entonces de ser suficiente.\r
\r
Estructuralmente, la sustentación no es una propiedad fija del ala. Es una propiedad del conjunto ala-flujo-régimen. Cambiar densidad, velocidad, geometría, ángulo de ataque [[alpha]] o estado de la capa límite cambia el resultado físico.\r
\r
## Interpretación física profunda\r
\r
La sustentación puede leerse como una redistribución de cantidad de movimiento del fluido. El ala desvía aire hacia abajo y, por reacción, recibe una fuerza hacia arriba. Al mismo tiempo, la curvatura del flujo alrededor del perfil exige un campo de presiones no uniforme. Estas dos lecturas no se contradicen: describen el mismo fenómeno desde balances diferentes.\r
\r
La presión no “tira” mágicamente del ala por tener una ruta superior más larga. Lo importante es que el flujo real satisface condiciones de contorno, viscosidad, adherencia parcial y circulación. La diferencia de presión aparece como resultado de ese campo completo, no como una regla geométrica aislada.\r
\r
Una lectura madura también distingue fuerza de sustentación y eficiencia. Un ala puede generar mucha [[L]] y aun así ser mala si produce demasiada resistencia inducida o si trabaja cerca de pérdida. Por eso en aerodinámica se estudian polar de perfil, margen de pérdida y relación sustentación-resistencia.\r
\r
## Orden de magnitud\r
\r
En aire al nivel del mar, [[rho]] vale aproximadamente 1.2 kg/m³. Para una avioneta ligera con [[S]] del orden de 15 m² y velocidad de 50 a 70 m/s, la sustentación necesaria está en el rango de decenas de kilonewtons. Un avión comercial grande puede requerir millones de newtons durante despegue y crucero.\r
\r
La dependencia cuadrática con [[v]] es decisiva: duplicar la velocidad no duplica la fuerza, sino que multiplica por cuatro la contribución dinámica si el resto permanece constante. Por eso pequeños errores de velocidad pueden producir grandes errores de sustentación estimada.\r
\r
Un resultado absurdo se detecta comparando con el peso. Si un ala de avioneta produce solo 100 N, no puede sostener el avión. Si una superficie pequeña genera millones de newtons a baja velocidad, probablemente hay unidades mal convertidas o un [[C_L]] físicamente inverosímil.\r
\r
## Método de resolución personalizado\r
\r
Primero identifica si la pregunta pide fuerza total, presión media, velocidad mínima o coeficiente requerido. Después decide qué relación responde a esa pregunta. Si el dato dominante es la velocidad global y el área, usa la fórmula de sustentación. Si el enunciado da velocidades locales en extradós e intradós, trabaja con diferencia de presión.\r
\r
A continuación comprueba las unidades: densidad en kg/m³, velocidad en m/s, superficie en m² y fuerza en newtons. Si aparece vuelo nivelado, compara [[L]] con el peso [[W]]. Si aparece pérdida, Mach alto o separación de flujo, no fuerces el modelo elemental: declara la limitación antes de calcular.\r
\r
Finalmente interpreta el resultado. No basta con obtener un número; hay que decidir si representa vuelo posible, margen insuficiente, carga vertical negativa o necesidad de cambiar de régimen.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Un caso típico es el despegue. Si una aeronave necesita una sustentación igual a su peso, puede aumentar velocidad, área efectiva mediante flaps o coeficiente [[C_L]] mediante ángulo de ataque. Cada estrategia tiene límite. Aumentar demasiado el ángulo puede llevar a pérdida; aumentar velocidad exige pista y potencia; aumentar área cambia resistencia.\r
\r
Otro caso es un alerón de automóvil. La misma física se usa con signo opuesto: se genera una fuerza hacia abajo para aumentar adherencia. El objetivo no es volar, sino cargar las ruedas. El modelo sigue leyendo velocidad, densidad, área y coeficiente, pero la interpretación del signo cambia.\r
\r
Ejemplo extendido: una avioneta de masa 1200 kg requiere una fuerza vertical comparable a su peso. Si vuela en aire estándar a 60 m/s con superficie de 16 m², el coeficiente requerido queda dentro de un rango razonable para un ala con configuración de despegue. Si el mismo cálculo exigiera un [[C_L]] extremadamente alto, la conclusión no sería “calcular más”, sino revisar si el perfil está cerca de pérdida o si faltan hipersustentadores.\r
\r
## Preguntas reales del alumno\r
\r
**¿La sustentación se debe solo a Bernoulli?**  \r
No. Bernoulli ayuda a leer diferencias de presión, pero la explicación completa incluye desviación de flujo, circulación, viscosidad y condiciones de contorno.\r
\r
**¿Puede un ala plana generar sustentación?**  \r
Sí, si tiene ángulo de ataque. La curvatura ayuda, pero no es la única causa.\r
\r
**¿Por qué al aumentar demasiado el ángulo el avión entra en pérdida?**  \r
Porque el flujo deja de permanecer adherido al perfil. La distribución de presiones se rompe y [[C_L]] deja de crecer de forma útil.\r
\r
**¿Por qué la velocidad importa tanto?**  \r
Porque la presión dinámica crece con el cuadrado de la velocidad. Pequeños cambios de [[v]] pueden modificar mucho [[L]].\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta directamente con [Ecuación de Bernoulli](leaf:fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-bernoulli), porque allí aparece la relación entre velocidad y presión. También conecta con [Efecto Venturi](leaf:fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/efecto-venturi), donde se interpreta un contraste de presión asociado a cambios de velocidad.\r
\r
Hacia adelante conecta con viscosidad, número de Reynolds, capa límite y aerodinámica real. En esos temas se explica por qué el flujo se separa, por qué aparecen vórtices de punta y por qué la sustentación útil siempre debe estudiarse junto con resistencia.\r
\r
## Síntesis final\r
\r
La sustentación es una fuerza aerodinámica que aparece cuando un perfil reorganiza el flujo y produce una resultante perpendicular a la corriente incidente. Su cálculo elemental usa densidad, velocidad, área y coeficiente, pero su interpretación exige reconocer límites de validez, pérdida, presión y desviación de cantidad de movimiento.`;export{e as default};
