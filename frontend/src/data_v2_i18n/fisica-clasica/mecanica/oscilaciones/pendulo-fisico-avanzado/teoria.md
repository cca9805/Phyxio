# Teoría del pendulo fisico avanzado

## Contexto conceptual

El pendulo fisico avanzado estudia un cuerpo rigido que oscila alrededor de un pivote real. A diferencia del pendulo simple, la masa no esta concentrada en un punto: esta distribuida por todo el cuerpo, y esa distribucion entra en el movimiento mediante [[I_O]]. Por eso no basta con conocer una longitud visible; hay que saber donde esta el centro de masas, cuanto vale [[d]] y como se calcula la inercia respecto al eje de giro.

La version avanzada tambien separa el modelo lineal del modelo no lineal. Para angulos pequenos se obtiene un periodo simple y medible, [[T0]]. Para amplitudes finitas, el seno ya no puede reemplazarse sin coste por el angulo, y la energia [[E]] permite entender por que el periodo real cambia. El objetivo no es memorizar mas formulas, sino decidir que modelo representa el experimento.

## 🟢 Nivel esencial

La idea esencial es que un pendulo fisico no oscila solo por su peso, sino por la relacion entre torque restaurador e inercia rotacional. El peso intenta devolver el centro de masas hacia abajo; la inercia respecto al pivote se opone al cambio angular. Si el cuerpo tiene mucha masa lejos del eje, cuesta mas acelerarlo y el periodo aumenta.

El parametro geometrico central es la distancia entre pivote y centro de masas. Si esa distancia es pequena, el torque restaurador es debil y el sistema oscila lentamente. Si es grande, el torque aumenta, pero tambien puede aumentar la inercia respecto al pivote. El comportamiento real surge de esa competencia.

En pequenas oscilaciones, el pendulo fisico se puede comparar con un pendulo simple equivalente. Esa equivalencia no dice que el cuerpo tenga una varilla de esa longitud; dice que el periodo seria el mismo si toda la masa estuviera concentrada en un punto adecuado. Esta traduccion ayuda a interpretar montajes irregulares sin perder la informacion de la distribucion de masa.

El avance conceptual aparece al preguntar que ocurre con amplitudes grandes. En ese caso el movimiento ya no es exactamente armonico: el torque gravitatorio depende del seno del angulo y la energia se reparte entre velocidad angular y altura del centro de masas. La aproximacion lineal sigue siendo util, pero debe declararse como aproximacion.

## 🔵 Nivel formal

El punto de partida avanzado es la ecuacion dinamica exacta para un cuerpo rigido con pivote fijo:

{{f:ecuacion_no_lineal_pf}}

Esta relacion expresa que el termino inercial angular y el torque gravitatorio se compensan durante el movimiento. Si el angulo es pequeno, se linealiza el seno y aparece una pulsacion natural:

{{f:omega0_pf_av}}

La pulsacion lineal permite escribir el periodo de pequenas oscilaciones:

{{f:periodo_lineal_pf_av}}

El periodo depende de [[I_O]], no solo de [[m]] y [[d]]. Para obtener [[I_O]] desde una inercia conocida respecto al centro de masas se usa el teorema de ejes paralelos:

{{f:steiner_pf_av}}

La longitud equivalente traduce el pendulo fisico a un pendulo simple con el mismo periodo lineal:

{{f:longitud_equivalente_pf_av}}

La descripcion energetica conserva informacion que el modelo lineal puede ocultar. En ausencia de rozamiento, la energia mecanica ideal se escribe como:

{{f:energia_pf_av}}

Formalmente, estas relaciones no tienen todas el mismo papel. La ecuacion no lineal y la energia describen el modelo completo ideal. La pulsacion, el periodo y la longitud equivalente pertenecen al regimen lineal. Steiner conecta la geometria del cuerpo con la inercia que realmente aparece en el pivote. Confundir esos niveles es el error central de este leaf.

## 🔴 Nivel estructural

Estructuralmente, el pendulo fisico avanzado obliga a leer tres capas: geometria, dinamica y aproximacion. La geometria decide [[I_cm]], [[d]] e [[I_O]]. La dinamica decide como el torque gravitatorio cambia el angulo. La aproximacion decide si se puede usar [[T0]] o si hace falta conservar la dependencia no lineal con [[theta]].

La sensibilidad al pivote es especialmente importante. Mover el eje cambia el brazo gravitatorio, pero tambien cambia la inercia por Steiner. Por eso el periodo puede tener un minimo para cierta posicion del pivote: no siempre conviene aumentar [[d]] ni acercar el eje al centro de masas. La lectura correcta compara ambos efectos.

El modelo lineal funciona cuando el angulo maximo es suficientemente pequeno. En laboratorio, amplitudes de unos pocos grados suelen producir errores pequenos; amplitudes de decenas de grados ya requieren cautela. La energia permite ver la razon fisica: al subir mas el centro de masas, la relacion entre posicion y torque deja de ser proporcional.

Tambien hay una diferencia entre medir periodo e identificar parametros. Si se mide [[T0]] y se conocen [[m]], [[g]] y [[d]], puede estimarse [[I_O]]. Si ademas se conoce [[I_cm]], se puede comprobar si la posicion del pivote es coherente con Steiner. Esa doble lectura convierte el pendulo en una herramienta experimental para estudiar inercia.

## Interpretación física profunda

El pendulo fisico avanzado muestra que el periodo no es una propiedad de una longitud aislada. Es una propiedad conjunta del cuerpo, del eje y de la amplitud. Dos cuerpos con la misma masa y el mismo centro de masas pueden oscilar distinto si distribuyen masa de forma diferente; dos pivotes en el mismo cuerpo pueden producir periodos distintos aunque la gravedad sea la misma.

La energia [[E]] aporta una lectura complementaria. En el extremo de la oscilacion, la energia es principalmente potencial; al pasar por el equilibrio, se transforma en energia cinetica rotacional mediante [[theta_dot]]. Esta conversion explica por que [[I_O]] controla la rapidez angular y por que amplitudes finitas alteran el tiempo de ida y vuelta.

## Orden de magnitud

En un pendulo fisico de laboratorio, [[m]] puede estar entre decenas de gramos y varios kilogramos, [[d]] entre centimetros y decenas de centimetros, y [[I_O]] entre valores del orden de milésimas y unidades de kg*m^2. Los periodos [[T0]] suelen quedar entre fracciones de segundo y varios segundos.

Como criterio practico, si la amplitud angular es menor que unos 0,1 rad, el modelo lineal suele ser una buena primera aproximacion. Por encima de 0,3 rad, la correccion por amplitud empieza a ser visible en medidas precisas. Si el rozamiento hace que la amplitud cambie mucho en pocos ciclos, el periodo medido ya no corresponde al modelo conservativo ideal.

## Método de resolución personalizado

Primero dibuja el cuerpo, el pivote y el centro de masas. Despues fija [[d]] y decide si conoces [[I_cm]] o directamente [[I_O]]. Si conoces [[I_cm]], aplica Steiner antes de usar el periodo. A continuacion calcula [[omega0]] o [[T0]] segun lo que pida el problema.

Despues comprueba la amplitud. Si el enunciado habla de pequenas oscilaciones, el periodo lineal es suficiente. Si menciona angulos grandes, energia, amplitud finita o comparacion con medidas precisas, debes explicar que la ecuacion no lineal o el enfoque energetico son necesarios. Finalmente valida unidades: inercia en kg*m^2, distancia en metros, gravedad en m/s^2 y periodo en segundos.

## Casos especiales y ejemplo extendido

Si el pivote pasa por el centro de masas, [[d]] vale cero y no hay torque gravitatorio restaurador lineal: el cuerpo no funciona como pendulo fisico ordinario. Si el pivote esta muy lejos del centro de masas, el sistema se parece mas a un pendulo simple largo, pero la inercia propia del cuerpo puede seguir siendo relevante.

Un ejemplo interesante es una regla perforada en distintos puntos. Cerca del centro de masas oscila lentamente por falta de brazo restaurador; lejos del centro, aumenta el brazo pero tambien la inercia respecto al pivote. Entre ambos extremos puede aparecer una posicion con periodo minimo. Ese resultado no se entiende con una sola longitud, sino con la competencia entre [[I_O]] y [[d]].

## Preguntas reales del alumno

"¿Por que no uso siempre la longitud al centro de masas?" Porque el cuerpo no es una masa puntual. La distribucion de masa afecta a [[I_O]], y ese efecto no aparece en una longitud simple.

"¿La longitud equivalente es una longitud real?" No necesariamente. [[leq]] es una herramienta de comparacion: el pendulo simple con esa longitud tendria el mismo periodo lineal.

"¿Cuando falla el periodo lineal?" Falla cuando la amplitud angular es grande, cuando hay rozamiento significativo, cuando el pivote no es fijo o cuando el cuerpo no se comporta como rigido.

## Conexiones transversales y rutas de estudio

Este leaf conecta con momento de inercia, dinamica rotacional, energia mecanica y mecanica analitica. Tambien prepara el estudio de osciladores no lineales, metodos perturbativos y mediciones experimentales de inercia. En todos esos temas aparece la misma pregunta: que informacion se pierde al linealizar.

Despues de dominar este contenido, conviene estudiar pequenas oscilaciones con varios grados de libertad y sistemas acoplados. El pendulo fisico avanzado es una puerta natural hacia modelos donde la geometria del cuerpo ya no puede ocultarse bajo una masa puntual.

## Síntesis final

Comprender el pendulo fisico avanzado significa relacionar cuerpo, pivote, centro de masas, inercia y amplitud. El objetivo final es saber cuándo basta con el periodo lineal, cuándo hay que usar energia o ecuacion no lineal y cómo extraer informacion fisica fiable a partir de medidas de periodo.
