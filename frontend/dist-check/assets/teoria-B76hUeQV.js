const e=`# Estrategia para problemas de rodadura\r
\r
## Contexto conceptual\r
\r
Este leaf sitúa **estrategia para problemas de rodadura** dentro del bloque de rotación. Su función es evitar que el alumno use fórmulas aisladas sin reconocer primero qué parte del sistema pertenece a traslación, qué parte pertenece a giro y qué parte pertenece a rodadura.\r
\r
La pregunta central es: **¿Cómo se elige el método adecuado para resolver un problema de rodadura?**. El gráfico propuesto debe responder a esa pregunta, no decorar la página.\r
\r
> [!NOTE]\r
> Gráfico recomendado: SVG de diagrama de decisión; DCL para plano inclinado con rozamiento estático; Coord para comparar resultados por energía y dinámica.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial es distinguir **estructura física** antes de calcular. En rotación, una rueda, disco o sólido rígido no se describe solo por dónde está su centro, sino también por cómo cambia su orientación.\r
\r
Cuando aparece rodadura, energía o torque, la trampa típica es mezclar magnitudes lineales y angulares como si fueran intercambiables. No lo son: necesitan una conexión física, normalmente el radio o una condición de contacto.\r
\r
Por eso el nivel esencial no empieza con una cuenta, sino con una clasificación: avance, giro, contacto o energía. Esa clasificación decide qué información del enunciado importa y qué gráfico conviene mirar primero.\r
\r
El objetivo básico es reconocer la pregunta antes de elegir herramienta. Así se evita resolver por memoria y se gana control sobre el resultado.\r
\r
## 🔵 Nivel formal\r
\r
En este nivel aparecen explícitamente tres relaciones: una para la aceleración en plano inclinado, otra para la energía cinética total de rodadura y otra para la energía mecánica total. La primera relación calcula aceleración, la segunda reparte energía cinética y la tercera comprueba si el balance mecánico se conserva.\r
\r
Formalmente, la estrategia compara familias de ecuaciones antes de sustituir datos. Una relación de aceleración sirve cuando la causa dinámica y la restricción de contacto están cerradas. Una relación de energía sirve cuando el trabajo disipativo puede despreciarse. Una relación cinemática sirve cuando el objetivo es conectar avance y giro. Esta separación impide usar una igualdad correcta dentro de un problema equivocado y obliga a justificar cada símbolo declarado.\r
\r
El nivel formal también obliga a revisar unidades, dependencias y dominio: cada relación debe decir qué magnitud calcula, qué hipótesis usa y qué gráfico puede comprobarla en la práctica.\r
\r
La relación nuclear del leaf es:\r
\r
{{f:aceleracion_rodadura_plano}}\r
\r
Para el reparto energético, el modelo formal usa:\r
\r
{{f:energia_cinetica_total_rodadura}}\r
\r
Y para decidir si el método energético cierra el problema:\r
\r
{{f:energia_mecanica_total_rodadura}}\r
\r
Esta expresión no debe leerse como una sustitución mecánica, sino como una forma compacta de expresar una condición física del modelo. Cada símbolo debe existir en \`magnitudes.yaml\` y su interpretación debe coincidir con la calculadora.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, este leaf actúa como puente entre varios nodos de rotación. Conecta cálculo, interpretación y gráfico para que el alumno sepa si está resolviendo un problema cinemático, dinámico, energético o de conservación.\r
\r
El modelo falla si el cuerpo deja de comportarse como sólido rígido, si el eje cambia sin control o si hay deslizamiento donde se supone rodadura sin deslizamiento.\r
\r
La estructura también exige justificar cuándo se cambia de método. Si el problema pide una fuerza de contacto, el DCL no es opcional. Si pide velocidad final y el contacto no disipa, energía es suficiente. Si pide validar la condición de rodadura, la comparación entre [[v_cm]], [[omega]], [[a_cm]] y [[alpha]] domina sobre cualquier resultado numérico aislado.\r
\r
En esa capa estructural, el resultado se acepta solo cuando el modelo, la fórmula y el gráfico responden la misma pregunta física.\r
\r
## Interpretación física profunda\r
\r
La lectura profunda consiste en preguntar qué magnitud está controlando el fenómeno. En algunos problemas manda el torque; en otros, la energía; en otros, la condición de contacto.\r
\r
El resultado numérico solo tiene sentido si conserva esa lectura: unidades correctas, signo coherente y una representación gráfica que muestre el mismo papel físico.\r
\r
## Orden de magnitud\r
\r
En rotación cotidiana, velocidades angulares de 1 a 100\\ rad/s son razonables para ruedas, poleas o discos de laboratorio. Valores miles de veces mayores pueden existir en máquinas rápidas, pero serían sospechosos en un problema escolar.\r
\r
Un resultado absurdo suele aparecer cuando se olvida el radio, se usa grados en vez de radianes o se mezcla [[v_cm]] con [[omega]] sin la relación geométrica adecuada.\r
\r
## Método de resolución personalizado\r
\r
1. Identifica si el problema pide descripción, causa, energía o conservación.\r
2. Separa centro de masas, giro alrededor del centro y contacto.\r
3. Elige el gráfico dominante: diagrama conceptual, curva, DCL o energía.\r
4. Sustituye solo después de fijar signos, unidades y dominio de validez.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Si una rueda gira sin avanzar, hay rotación pero no rodadura. Si avanza sin girar, hay traslación pero no rodadura. Si cumple la condición de contacto, ambos movimientos quedan acoplados.\r
\r
En un cilindro que baja por un plano, la energía potencial no se convierte solo en traslación: una parte alimenta el giro. El reparto depende del momento de inercia.\r
\r
## Preguntas reales del alumno\r
\r
**¿Puedo usar siempre la relación de aceleración en plano inclinado?** Solo si el punto está a distancia [[R]] del eje y la condición geométrica corresponde al caso.\r
\r
**¿La rotación es lo mismo que movimiento circular?** No. Un punto puede moverse en círculo; un sólido rígido rota como conjunto.\r
\r
**¿El rozamiento siempre quita energía?** En rodadura ideal el rozamiento estático puede imponer la condición sin disipar trabajo neto.\r
\r
**¿Qué gráfico necesito?** El que responda a la pregunta física: mapa, curva, DCL o reparto energético.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con [Cinemática rotacional](leaf:fisica-clasica/mecanica/rotacion/fundamentos/cinematica-rotacional), [Torque](leaf:fisica-clasica/mecanica/rotacion/dinamica/torque-momento/definicion-torque) y [Energía en rodadura](leaf:fisica-clasica/mecanica/rotacion/energia/energia-en-rodadura).\r
\r
También prepara el salto hacia momento angular, precesión y problemas de rodadura en planos inclinados.\r
\r
## Síntesis final\r
\r
Estrategia para problemas de rodadura fija una pieza de navegación física: permite elegir el modelo correcto, usar la fórmula con sentido y leer el gráfico como parte del razonamiento, no como adorno.\r
\r
La versión operativa de esta idea empieza con una lista de magnitudes marcadas: [[m]], [[R]], [[I]], [[g]], [[phi]], [[theta]], [[omega]], [[alpha]], [[v_cm]], [[a_cm]], [[tau]], [[K_total]] y [[E_total]]. No aparecen para llenar una tabla, sino para decidir qué lenguaje físico está activo. Si el enunciado entrega altura y velocidad final, el lenguaje natural es energético. Si pregunta por fuerzas de contacto o por el sentido del rozamiento, el lenguaje natural es dinámico. Si solo relaciona avance y giro, la condición geométrica suele bastar.\r
\r
Un problema típico de plano inclinado ilustra la decisión. La relación de aceleración en plano inclinado no es el punto de partida universal; es el resultado de combinar traslación, rotación y contacto. El numerador procede de la componente de la gravedad que empuja el centro de masas. El denominador expresa que parte de la respuesta se invierte en giro mediante el momento de inercia. Por eso un aro y un disco no aceleran igual aunque tengan la misma masa y el mismo radio.\r
\r
Cuando el objetivo es rapidez o energía, conviene mirar la ecuación de energía cinética total de rodadura. La energía cinética total no es solo avance: una parte mide el movimiento del centro de masas y otra parte mide la rotación alrededor del centro. Esta lectura evita el error de calcular una velocidad demasiado grande por olvidar el término rotacional. Si además hay una altura de referencia o una caída por un plano, la ecuación de energía mecánica total permite decidir si [[E_total]] se conserva o si falta trabajo externo, pérdida por deslizamiento o deformación.\r
\r
La estrategia se puede formular como un árbol breve. Primero se pregunta si hay rodadura sin deslizamiento. Si no la hay, no se impone la relación entre avance y giro. Después se pregunta si las fuerzas no conservativas realizan trabajo. Si no realizan trabajo neto, energía suele ser el camino más corto. Si lo realizan, hay que escribir dinámica o balances con pérdidas. Por último se pregunta si el enunciado pide una fuerza interna de contacto; en ese caso, aunque la energía dé la aceleración, el DCL sigue siendo necesario para obtener el rozamiento.\r
\r
En el nivel formal, el vínculo entre [[a_cm]] y [[alpha]] necesita el radio. No basta con recordar que ambas son aceleraciones: una pertenece al centro de masas y la otra al giro. El torque [[tau]] del rozamiento estático puede ser imprescindible aunque ese rozamiento no disipe energía. Esta distinción es la razón por la que el DCL y la energía no compiten: responden preguntas distintas.\r
\r
En el nivel estructural, la elección de método también controla la validez del resultado. Si [[phi]] es muy grande, si el contacto requiere un rozamiento estático imposible o si la rueda se deforma, conviene cambiar de modelo. Ese cambio no es un fracaso del cálculo; es una lectura física del dominio de validez. Un resultado correcto en unidades puede ser falso si pertenece a un modelo que el sistema real no cumple.\r
\r
La lectura final debe cerrar tres pruebas. La prueba dimensional confirma que cada término tiene unidades coherentes. La prueba causal explica por qué aumenta o disminuye [[a_cm]] al cambiar [[I]], [[R]] o [[phi]]. La prueba gráfica confirma que el SVG, el DCL y el Coord cuentan la misma historia: condición de contacto, fuerzas responsables y reparto de energía. Cuando las tres coinciden, el método elegido no es una receta sino una decisión física controlada.`;export{e as default};
