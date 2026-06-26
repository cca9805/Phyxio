const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una lamina rigida y plana gira alrededor de un origen fijo, pero los ejes de referencia elegidos no son principales. Se pide calcular [[momento_angular]] a partir de [[tensor_inercia]], interpretar el papel de [[producto_inercia]] y estimar [[E]] para un giro alrededor del eje principal mayor.\r
\r
## Datos\r
\r
- Componente diagonal dominante de [[tensor_inercia]] en el plano: 4.0 kg m^2.\r
- Segunda componente diagonal en el plano: 2.0 kg m^2.\r
- [[producto_inercia]] en el marco elegido: 0.5 kg m^2.\r
- Componentes de [[omega]] en el plano: 3.0 rad/s y 1.0 rad/s.\r
- El sistema es rigido y el origen coincide con el punto fijo del giro.\r
- El objetivo no es solo numerico: hay que leer si [[momento_angular]] queda alineado o no con [[omega]].\r
\r
## Definición del sistema\r
\r
El sistema es la lamina completa, no una particula aislada. El origen y los ejes estan fijados al cuerpo en un marco cartesiano que todavia no coincide con ejes principales. Esta declaracion es decisiva porque el leaf no trata solo de "cuanto vale un momento", sino de como [[tensor_inercia]] transforma [[omega]] en [[momento_angular]].\r
\r
## Modelo físico\r
\r
La relacion entre [[momento_angular]], [[tensor_inercia]] y [[omega]] se modela con:\r
\r
{{f:rel_l_omega}}\r
\r
Para la lectura energetica sobre un eje principal se usa:\r
\r
{{f:energia_cinetica_tensores}}\r
\r
Este modelo es el adecuado porque permite capturar acoplamientos entre ejes cuando [[producto_inercia]] es no nulo.\r
\r
## Justificación del modelo\r
\r
El modelo es valido porque la lamina es rigida, el origen permanece fijo y todas las componentes se expresan en el mismo marco. No conviene arrancar con una aproximacion escalar porque se perderia el efecto de [[producto_inercia]], que es justamente la magnitud distintiva del problema.\r
\r
Solo despues de identificar ejes principales se puede pasar a una lectura desacoplada y aplicar la expresion energetica de forma directa.\r
\r
## Resolución simbólica\r
\r
La relacion matricial que gobierna el problema es:\r
\r
{{f:rel_l_omega}}\r
\r
Si [[producto_inercia]] fuera cero, la mezcla entre componentes se reduciria de forma importante. Como en este caso es no nulo, parte de [[omega]] en un eje contribuye a [[momento_angular]] en el otro eje.\r
\r
Luego se diagonaliza [[tensor_inercia]] para obtener ejes principales. En esos ejes la lectura de [[E]] se simplifica y se vuelve mas transparente.\r
\r
## Sustitución numérica\r
\r
Con los datos propuestos, la evaluacion de la relacion angular muestra que [[momento_angular]] no queda paralelo a [[omega]]. Esto confirma que [[producto_inercia]] no es decorativo, sino operativo.\r
\r
Al pasar a ejes principales, el acoplamiento se reduce y puede estimarse [[E]] sobre el eje principal mayor con la expresion energetica del leaf. Para una rapidez angular de 2.0 rad/s y un momento principal mayor de 4.2 kg m^2, se obtiene [[E]] del orden de 8.4 J.\r
\r
El valor numerico exacto puede variar con redondeos, pero la conclusion fisica se mantiene: el marco principal aclara la lectura energetica y direccional.\r
\r
## Validación dimensional\r
\r
En la relacion angular, [[tensor_inercia]] esta en kg m^2 y [[omega]] en rad/s, por lo que [[momento_angular]] queda en kg m^2/s. En la relacion energetica, [[E]] queda en joule. Ambas son unidades coherentes con la mecanica rotacional.\r
\r
Ademas, la simetria de [[tensor_inercia]] es una comprobacion estructural clave para la validez del modelo.\r
\r
## Interpretación física\r
\r
La lectura fisica central es que [[producto_inercia]] no cambia solo un numero: cambia una direccion. Si el cuerpo estuviera ya expresado en ejes principales, [[momento_angular]] tenderia a alinearse con [[omega]]. Aqui no ocurre, y esa desalineacion es la firma de acoplamiento entre ejes.\r
\r
Tambien se ve por que diagonalizar no es un truco algebraico. Pasar a ejes principales revela direcciones naturales de respuesta de la misma distribucion de masa. En ese marco, la lectura de [[E]] se vuelve directa y comparable entre ejes.\r
\r
En terminos de aprendizaje, este ejemplo enseña que el tensor no se usa para complicar una cuenta, sino para no perder fenomenos fisicos relevantes en cuerpos asimetricos.\r
\r
La interpretacion cualitativa clave es esta: cuando hay acoplamiento, una orden de giro pensada para "un solo eje" puede activar respuesta en otro. Ese efecto cambia como se percibe el control del sistema y por que la estabilidad observada puede diferir de la esperada si solo se mira un escalar.\r
\r
Tambien hay una lectura de diseño. Reducir [[producto_inercia]] no significa solo "mejorar un numero"; significa acercar el comportamiento real a un modelo desacoplado que es mas facil de controlar, diagnosticar y mantener. Por eso la geometria interna del cuerpo es parte de la estrategia dinamica, no un detalle secundario.\r
\r
Finalmente, el ejemplo muestra un criterio metodologico: primero interpretar direcciones, luego modulos. En problemas de tensor, invertir ese orden suele ocultar la fisica principal.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Un pequeno satelite con instrumentos descentrados debe orientarse con ruedas de reaccion. El equipo de control no solo necesita el modulo de inercia: necesita saber si la geometria interna introduce [[producto_inercia]] que haga que [[momento_angular]] no apunte exactamente como la orden de [[omega]].\r
\r
## Estimación física\r
\r
Antes de usar un modelo completo, el ingeniero estima si el acoplamiento es importante. Si el satelite tiene un momento principal del orden de 5 kg m^2 y [[producto_inercia]] del orden de 0.8 kg m^2, la mezcla entre ejes no es despreciable. Un valor de ese orden basta para producir desalineaciones visibles en maniobras finas.\r
\r
En esa situacion, la variable dominante deja de ser solo un escalar de inercia y pasa a ser la estructura completa de [[tensor_inercia]].\r
\r
## Interpretación\r
\r
La decision de control cambia: si [[producto_inercia]] es pequeno, basta un modelo casi diagonal. Si no lo es, hay que incorporar acoplamientos y, en algunos casos, redisenar la ubicacion de equipos para acercarse a ejes principales.\r
\r
Esta es la lectura aplicada del leaf: [[tensor_inercia]] convierte una geometria interna en una consecuencia dinamica observable sobre [[momento_angular]], [[omega]] y [[E]].`;export{e as default};
