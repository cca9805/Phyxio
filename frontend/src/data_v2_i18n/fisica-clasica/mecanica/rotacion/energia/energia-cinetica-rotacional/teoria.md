# Energía cinética rotacional

## Contexto conceptual

La energía cinética rotacional es la parte de la energía mecánica que aparece cuando un cuerpo no solo se desplaza, sino que gira. En una partícula puntual la energía cinética depende de la masa y de la rapidez. En un cuerpo rígido que rota, la masa no basta: importa dónde está cada porción de masa respecto al eje. Por eso la magnitud central es [[I]], no solo la masa total. Dos ruedas con la misma masa y la misma [[omega]] pueden almacenar energías distintas si una concentra más material cerca del borde.

La idea básica es que cada punto del sólido tiene una rapidez lineal distinta, aunque todos compartan la misma velocidad angular. Un punto más alejado del eje recorre más distancia en el mismo tiempo y, por tanto, aporta más energía. Al sumar la energía de todas las partes del cuerpo aparece una relación compacta que resume cómo se reparte la masa en torno al eje.

En problemas reales esta magnitud permite decidir si un motor puede arrancar un volante, cuánta energía debe absorber un freno, por qué una esfera maciza rueda de forma distinta a un aro, o por qué una pieza que gira a muchas revoluciones por minuto puede ser peligrosa aunque parezca pequeña. La energía rotacional conecta cinemática angular, dinámica, trabajo, potencia y seguridad mecánica.

## 🟢 Nivel esencial

En el nivel esencial conviene leer [[Erot]] como una reserva de movimiento de giro. No es una flecha, no indica hacia dónde gira el cuerpo y no sustituye al torque. Dice cuánta energía mecánica hay disponible por el hecho de que el cuerpo está rotando. [[Erot]] se mide en joules, [[I]] describe cómo está repartida la masa y [[omega]] mide la rapidez angular. Una rueda que gira horario y otra antihorario con el mismo módulo de velocidad angular almacenan la misma energía.

La dependencia con [[omega]] es cuadrática. Si [[I]] permanece constante y la velocidad angular se duplica, la energía se multiplica por cuatro. Si se triplica, se multiplica por nueve. Esta propiedad explica por qué los rotores rápidos requieren protecciones estrictas: pequeños aumentos de velocidad angular producen aumentos grandes de energía almacenada.

La dependencia con [[I]] es lineal. Para la misma [[omega]], duplicar el momento de inercia duplica la energía. Pero duplicar la masa no siempre duplica [[I]] si también cambia la geometría. Un aro fino y un disco macizo de igual masa y radio no tienen la misma energía rotacional porque su masa no está distribuida igual respecto al eje.

## 🔵 Nivel formal

La expresión puede obtenerse sumando la energía cinética de pequeñas masas del sólido. Cada elemento tiene una rapidez proporcional a su distancia al eje si el cuerpo rota rígidamente. Su contribución elemental aumenta con la masa del elemento, con la distancia al eje al cuadrado y con la velocidad angular al cuadrado. Como [[omega]] es común a todo el sólido, sale de la suma y queda el factor integral que llamamos [[I]]. Esa construcción explica por qué el momento de inercia contiene distancias al cuadrado.

Cuando el eje es principal y el tensor de inercia no acopla componentes, la forma escalar basta. Si el eje cambia de orientación o la rotación ocurre en tres dimensiones con componentes simultáneas, la energía se escribe con tensor de inercia. En esta hoja usamos el caso escalar porque es el modelo que domina en ejes fijos, poleas, ruedas, discos, cilindros y problemas introductorios de rodadura.

La relación base de energía rotacional es:

{{f:energia_rotacional_basica}}

El teorema trabajo-energía rotacional se expresa como

{{f:trabajo_rotacional_variacion}}

Para estados específicos del proceso, también se usan:

{{f:energia_rotacional_inicial}}

{{f:energia_rotacional_final}}

. [[Wrot]] es una transferencia producida por torques externos durante un desplazamiento angular. Si el trabajo neto es positivo y no hay pérdidas, la energía final aumenta. Si el trabajo neto es negativo, el sistema entrega energía o se frena. La clave es no confundir trabajo con energía almacenada: el trabajo pertenece al proceso; [[Erot]] pertenece al estado.

## 🔴 Nivel estructural

Estructuralmente, la energía rotacional separa tres decisiones. La primera es la elección del sistema: una rueda sola, una rueda más eje, o un conjunto motor-transmisión. La segunda es la elección del eje: el [[I]] correcto depende del eje real de rotación. La tercera es el modelo energético: puede haber solo energía rotacional, o puede coexistir con energía traslacional, potencial, elástica y térmica.

En rodadura sin deslizamiento, por ejemplo, no basta con [[Erot]]. También existe energía cinética del centro de masa. La restricción geométrica entre velocidad lineal y velocidad angular conecta ambas partes, pero no las fusiona. En un cilindro que baja por una rampa, la energía potencial se reparte entre traslación y rotación. Un cuerpo con mayor [[I]] para el mismo radio deja menos energía para trasladarse y acelera menos.

En frenado, la energía rotacional inicial [[Eroti]] no desaparece. Se transforma en calor, sonido, deformación o trabajo útil extraído por un generador. Si se escribe un balance incompleto, el resultado puede parecer una violación de la conservación de la energía. La forma correcta es declarar todas las salidas energéticas relevantes y reservar [[Wrot]] para el trabajo neto externo sobre el sistema elegido.

## Interpretación física profunda

[[Erot]] mide capacidad de realizar trabajo debido al giro. No mide la dificultad instantánea de acelerar, que se relaciona con torque y momento de inercia; mide la energía ya almacenada en el estado de movimiento. Por eso una rueda pesada girando lentamente puede tener menos energía que una rueda ligera girando muy rápido, si la diferencia de [[omega]] domina.

El cuadrado de [[omega]] oculta una intuición importante: la energía no distingue orientación, pero sí intensidad. La orientación angular es relevante para el momento angular y para la ecuación de torque, pero la energía cuenta cuánto movimiento de rotación puede transformarse. Esta lectura evita el error de escribir energías negativas por elegir un sentido horario como negativo.

[[I]] funciona como una memoria geométrica de la masa. Alejar masa del eje aumenta mucho la energía necesaria para alcanzar la misma velocidad angular. Por eso los volantes de inercia buscan radios efectivos grandes cuando quieren almacenar energía, mientras que piezas que deben acelerar y frenar rápido reducen masa periférica.

## Orden de magnitud

Un disco de laboratorio con [[I]] cercano a 0.02 kg m^2 y [[omega]] de 10 rad/s almacena alrededor de un joule. Es una cantidad pequeña: se puede frenar con la mano si no hay riesgos de atrapamiento. En cambio, un volante industrial con [[I]] de 50 kg m^2 girando a 200 rad/s almacena del orden de un millón de joules. La misma fórmula cubre ambos casos, pero la interpretación de seguridad cambia por completo.

El orden de magnitud también sirve para detectar errores. Si una rueda de bicicleta resulta con miles de joules a velocidad moderada, probablemente se usó rpm como si fueran rad/s o se eligió un [[I]] imposible. Si una turbina rápida da una energía diminuta, quizá se olvidó elevar [[omega]] al cuadrado. Antes de aceptar una respuesta, conviene estimar si la energía cabe en el contexto físico.

## Método de resolución personalizado

Primero identifica si el cuerpo rota alrededor de un eje definido. Si el centro de masa también se mueve, reserva una parte separada para traslación. Segundo, elige el momento de inercia correspondiente al eje real, no el más familiar de la tabla. Tercero, convierte la velocidad angular a radianes por segundo si viene en revoluciones por minuto. Cuarto, sustituye en la relación de energía rotacional introducida en el nivel formal y revisa unidades.

Para procesos, no empieces por la velocidad final si el enunciado habla de trabajo, frenado o energía transferida. Escribe primero el balance de trabajo y variación de energía rotacional, decide el signo del trabajo y despeja el estado desconocido. Si hay rozamiento disipativo, añade una energía térmica o una pérdida explícita. Si hay motor, identifica si su trabajo entra al sistema o si parte se pierde antes de llegar al rotor.

## Casos especiales y ejemplo extendido

Si una polea gira sin traslación, la energía rotacional de la polea se suma al balance de las masas conectadas. Si una rueda rueda sin deslizar, [[Erot]] se suma a la energía traslacional. Si un disco gira alrededor de un eje paralelo desplazado, debe usarse el momento de inercia trasladado antes de calcular la energía. En todos los casos la fórmula parece la misma, pero el [[I]] correcto cambia.

Considera un disco con momento de inercia de 0.40 kg m^2 que pasa de una velocidad angular inicial de 5 rad/s a una final de 15 rad/s. La energía inicial [[Eroti]] es 5 J. La energía final [[Erotf]] es 45 J. El trabajo rotacional neto [[Wrot]] es 40 J. La parte importante no es solo el número: triplicar la velocidad angular multiplicó la energía por nueve.

## Preguntas reales del alumno

¿Por qué no aparece el radio en la fórmula? Sí aparece, pero dentro de [[I]]. Cuando se usa una tabla de momentos de inercia, la dependencia con el radio ya fue integrada. ¿Por qué el radián no cambia las unidades? Porque el radián es adimensional en el Sistema Internacional; [[omega]] aporta dimensión de tiempo inverso.

¿La energía rotacional es lo mismo que el momento angular? No. El momento angular depende linealmente de [[omega]] y conserva orientación vectorial; la energía depende de [[omega]] al cuadrado y es escalar. Dos sistemas pueden tener el mismo momento angular y energías distintas si sus momentos de inercia son distintos.

## Conexiones transversales y rutas de estudio

Esta hoja conecta con momento de inercia, torque, trabajo rotacional, potencia, rodadura y conservación de la energía. También prepara la idea de tensor de inercia, porque muestra por qué la geometría no puede ignorarse. En física moderna, la separación entre energía y momento angular reaparece en rotores moleculares, espín efectivo y cuantización de niveles rotacionales, aunque los modelos cambien.

Para estudiar con criterio, conviene leer primero velocidad angular y momento de inercia, después energía cinética rotacional, luego rodadura y finalmente trabajo-potencia en rotación. Ese orden evita usar fórmulas antes de entender qué magnitud representa cada símbolo.

## Síntesis final

La energía cinética rotacional es la energía del giro rígido. Su formulación central dice que la geometría entra por [[I]] y la rapidez angular entra al cuadrado. El balance entre trabajo y variación de energía convierte esa lectura en una herramienta de procesos. Si se elige bien el sistema, el eje y las unidades, la magnitud permite resolver desde ruedas simples hasta rotores industriales.