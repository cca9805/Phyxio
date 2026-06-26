const e=`# Circuitos rlc

## Contexto conceptual
Los circuitos RLC son el lugar donde la corriente alterna deja de parecer una simple extension de la ley de Ohm y obliga a leer la carga como una combinacion de disipacion, almacenamiento y desfase. En una sola rama conviven [[R]], [[Xl]] y [[Xc]], y esa mezcla decide no solo la oposicion total, sino tambien la forma en que la fuente queda exigida.

La pregunta central es como se combinan esas partes para fijar [[Z]], [[I]], [[phi]], [[P]], [[Q]] y [[S]]. La fisica del tema aparece cuando se separan demanda total, transferencia util y efecto del desfase. El objetivo del leaf es pasar de la cuenta aislada a la lectura operativa del sistema.

## 🟢 Nivel esencial
En el nivel esencial conviene pensar el circuito como una negociacion entre disipacion y reactividad. [[R]] fija la parte de transferencia media neta. La inductancia y la capacidad introducen almacenamiento alterno y cambian la relacion temporal entre excitacion y respuesta. Importa menos la oposicion aislada que su reparto interno.

Si domina la parte inductiva, la rama se lee como inductiva. Si domina la parte capacitiva, se lee como capacitiva. Si ambas casi se compensan, la respuesta se aproxima a una carga mas resistiva. La idea esencial es sencilla: ese equilibrio cambia la demanda y obliga a leer la rama como sistema.

Por eso el primer objetivo no es calcular deprisa, sino distinguir que tipo de carga estas describiendo antes de pasar a numeros y balances de potencia.

## 🔵 Nivel formal
El modulo de la impedancia total se obtiene con:

{{f:impedancia_rlc}}

La corriente eficaz de la rama se obtiene con:

{{f:corriente_total}}

El desfase global entre tension y corriente se interpreta con:

{{f:desfase_rlc}}

La potencia activa del circuito se obtiene con:

{{f:potencia_activa}}

La potencia reactiva del circuito se obtiene con:

{{f:potencia_reactiva}}

La potencia aparente del circuito se obtiene con:

{{f:potencia_aparente}}

Formalmente, estas relaciones solo tienen sentido si se preservan tres condiciones: [[V]] e [[I]] deben mantenerse en RMS, [[Xl]] y [[Xc]] deben corresponder a una misma frecuencia y el signo de [[phi]] debe interpretarse de forma consistente.

Ademas, cada expresion cumple una funcion distinta dentro de la cadena de analisis. [[Z]] resume la oposicion total, [[I]] transforma esa oposicion en demanda de corriente, [[phi]] clasifica el regimen, [[P]] cuantifica la transferencia media neta, [[Q]] codifica el peso del intercambio reactivo y [[S]] fija la demanda completa que la fuente debe soportar. El buen uso del nivel formal no consiste en encadenar formulas, sino en enlazar cada resultado con la siguiente decision fisica del problema en contexto.

## 🔴 Nivel estructural
El nivel estructural empieza cuando dejas de preguntar solo cuanto vale [[Z]] y preguntas que clase de sistema esta describiendo ese valor. En el modelo serie, [[Z]] combina una parte en fase, [[R]], y una parte en cuadratura, el desequilibrio entre [[Xl]] y [[Xc]]. Eso significa que dos circuitos pueden tener impedancias similares y, sin embargo, exigir lecturas operativas muy distintas si el reparto entre disipacion y reactividad no coincide.

Por ejemplo, un circuito puede mostrar [[I]] elevada porque [[Z]] se acerca a [[R]] por compensacion reactiva. Otro puede mostrar una corriente comparable, pero con [[phi]] todavia grande y [[Q]] significativa. Los dos casos no plantean el mismo problema. En el primero interesa vigilar sensibilidad y posible sobrecorriente. En el segundo interesa sobre todo correccion del factor de potencia y dimensionado de fuente. Esa diferencia es estructural, no cosmetica.

Tambien aqui aparece el dominio de validez. El modelo del leaf funciona cuando la rama puede tratarse como lineal, lumped y estacionaria, es decir, cuando los parametros equivalentes no cambian de forma dominante con amplitud, temperatura o frecuencia dentro del problema. Como criterio cuantitativo de primer orden, el modelo es util cuando la forma de onda es casi sinusoidal, por ejemplo con THD <= 5 por ciento, y cuando parasitas y derivas no alteran los parametros efectivos mas de un 10 por ciento en el punto de trabajo.

Cuando conviene cambiar de modelo es cuando esas condiciones dejan de ser pequenas frente a la decision tecnica. Si el objetivo es solo clasificar regimen y estimar orden de magnitud de [[I]], el modelo basico basta. Si el objetivo es especificar seguridad, margen termico, comportamiento muy cercano a compensacion o precision alta, el equivalente simple ya no es suficiente y deben incorporarse parasitas, variacion con frecuencia o incluso otro formalismo.

## Interpretación física profunda
La lectura profunda del tema aparece cuando [[Q]] deja de verse como un residuo y se interpreta como huella de intercambio alterno de energia. En el inductor, la energia se organiza en el campo magnetico; en el capacitor, en el campo electrico. El circuito RLC hace visible que ambos almacenamientos pueden competir, reforzarse o compensarse, y que esa competencia reorganiza la demanda total sobre la fuente.

Por eso [[phi]] no es un simple angulo decorativo. [[phi]] mide el desajuste temporal entre aquello que excita la rama y aquello que responde. Si [[phi]] es grande, la carga puede exigir una [[S]] elevada sin transformar la misma proporcion en [[P]]. Si [[phi]] se acerca a cero, la infraestructura ve una demanda mas eficiente, aunque la potencia util objetivo no cambie. Esa es la razon fisica por la que el factor de potencia importa.

Otro punto profundo es que [[S]] impone una realidad material sobre cables, protecciones, transformadores e inversores. La red responde a la corriente realmente transportada, no solo a la potencia activa final. Por eso el circuito RLC es una escuela de lectura operativa: ensena que no toda demanda electrica es equivalente desde la perspectiva de la fuente.

## Orden de magnitud
En bancadas didacticas o instalaciones ligeras, [[V]] puede estar entre algunas decenas y algunos cientos de voltios, mientras [[Z]] suele quedar en el orden de decenas de ohm. En ese rango, [[I]] puede ir desde fracciones de amperio hasta varios amperios. Si [[Z]] se aproxima demasiado a [[R]] por compensacion, la corriente puede crecer con rapidez y convertir un montaje aparentemente inocente en un caso de sobreexigencia real.

Para [[P]], [[Q]] y [[S]] el orden de magnitud orienta la lectura tecnica. Algunos VA pueden pertenecer a instrumentacion ligera. Decenas o cientos de VA ya afectan protecciones, cableado y margen de la fuente. Si [[Q]] se vuelve comparable a [[S]], la red esta soportando una demanda de intercambio importante, y eso suele justificar correccion o al menos un analisis mas cuidadoso del punto de trabajo.

El control de orden de magnitud tambien sirve como detector de errores. Si [[I]] sale extrema con una [[V]] modesta y componentes ordinarios, probablemente se mezclaron RMS y pico o se evaluaron [[Xl]] y [[Xc]] en condiciones distintas. Si [[P]] supera a [[S]], el problema no es de redondeo: es de coherencia fisica del modelo usado.

## Método de resolución personalizado
Primero define la rama como circuito serie y decide que toda la lectura electrica se hara en RMS. Segundo, confirma que [[Xl]] y [[Xc]] pertenecen a la misma frecuencia y al mismo equivalente. Tercero, calcula [[Z]] y usa ese valor para estimar [[I]] antes de entrar en potencias; si la corriente ya parece incompatible con el contexto, detente y revisa datos.

Cuarto, interpreta [[phi]] antes de calcular [[P]], [[Q]] y [[S]]. Ese paso evita una trampa comun: producir tres numeros de potencia sin haber decidido todavia si la rama es inductiva, capacitiva o casi compensada. Quinto, calcula [[P]], [[Q]] y [[S]] y cierra con una comprobacion fisica: [[S]] debe ser mayor o igual que [[P]], y el signo de [[Q]] debe coincidir con el caracter leido a partir de [[phi]].

Sexto, termina con una conclusion operacional. Una buena resolucion no acaba con una lista de resultados; acaba diciendo si la carga exige demasiada corriente para la potencia util que entrega, si conviene compensar o si el circuito esta entrando en una zona muy sensible a tolerancias y frecuencia. Esa conclusion es la parte mas importante del metodo.

## Casos especiales y ejemplo extendido
Considera una rama serie con [[R]] de 40 ohm, [[Xl]] de 90 ohm, [[Xc]] de 50 ohm y [[V]] de 230 voltios RMS. El dato clave es que [[Xl]] supera a [[Xc]], asi que la rama no esta compensada y su caracter inductivo puede anticiparse antes de calcular nada. Esa lectura previa es valiosa porque orienta la interpretacion de [[phi]] y del signo operativo de [[Q]].

En este caso, [[Z]] queda claramente por encima de [[R]], de modo que la corriente [[I]] es menor que la que tendria una resistencia pura de 40 ohm conectada a la misma fuente. El desfase [[phi]] sale positivo en la convencion del leaf, lo que confirma dominio inductivo. A partir de ahi, la estructura de potencia queda clara: [[S]] es mayor que [[P]] y la diferencia entre ambas magnitudes no es un detalle numerico, sino una forma compacta de ver que la fuente transporta mas demanda de la que se convierte en transferencia media neta.

El caso especial importante es la cuasi compensacion. Cuando [[Xl]] y [[Xc]] se acercan mucho, [[Z]] puede aproximarse a [[R]] y [[I]] crecer con rapidez. Esa situacion puede mejorar el factor de potencia y reducir [[Q]], pero tambien vuelve al circuito mas sensible a tolerancias y a variaciones pequenas de frecuencia. La leccion fisica es que optimizar un indicador no equivale a resolver todos los problemas del sistema.

## Preguntas reales del alumno
1. ¿Por que no puedo sumar [[R]], [[Xl]] y [[Xc]] directamente? Porque [[R]] representa la parte en fase, mientras el efecto neto de [[Xl]] y [[Xc]] vive en cuadratura. El modulo [[Z]] aparece solo despues de combinar ambas contribuciones con la geometria correcta del modelo.

2. ¿Si [[Xl]] y [[Xc]] casi se cancelan siempre conviene seguir compensando? No necesariamente. Puede bajar [[Q]] y mejorar el factor de potencia, pero tambien puede subir [[I]] y aumentar la sensibilidad del circuito.

3. ¿Por que una carga con [[P]] modesta puede exigir una [[S]] alta? Porque la fuente debe sostener tanto la parte activa como la asociada al desfase. La infraestructura responde a la demanda total, no solo a la transferencia util.

4. ¿[[Q]] es energia perdida? No en sentido estricto. [[Q]] expresa intercambio alterno con los campos del sistema y tiene consecuencias tecnicas reales, pero no equivale por si sola a disipacion irreversible.

5. ¿Que deberia revisar primero en un examen? Si todas las magnitudes estan en RMS, si [[Xl]] y [[Xc]] pertenecen a la misma frecuencia y si el signo de [[phi]] coincide con el caracter inductivo o capacitivo que describes al final.

## Conexiones transversales y rutas de estudio
Este leaf conecta de forma inmediata con reactancia inductiva y reactancia capacitiva, porque [[Xl]] y [[Xc]] entran aqui ya como magnitudes construidas. Tambien conecta con resonancia electrica, ya que la condicion de compensacion o cuasi compensacion es la puerta de entrada a selectividad, ancho de banda y sensibilidad frecuencial.

Desde una perspectiva mas amplia, el tema conecta con magnitudes alternas, fasores, factor de potencia, conversion de energia y dimensionado de instalaciones. En electronica aparece en filtros y redes de acoplo. En potencia aparece en correccion del factor de potencia y en cargas industriales. En laboratorio aparece en interpretacion de osciloscopio, medidores RMS y comparaciones entre señal aplicada y respuesta de la rama.

La mejor ruta de estudio es esta: primero dominar las reactancias individuales, despues volver a este leaf para ver el acoplamiento RLC, luego estudiar resonancia electrica y finalmente analizar aplicaciones reales de filtrado y compensacion. Ese orden conserva el hilo fisico y evita memorizar relaciones sin saber que decision tecnica justifica su uso.

## Síntesis final
Circuitos RLC organiza uno de los problemas centrales de la corriente alterna: una carga no se entiende solo por cuanta corriente toma, sino por como combina disipacion, almacenamiento y desfase. Si sabes leer [[Z]], [[I]], [[phi]], [[P]], [[Q]] y [[S]] como una estructura unificada, ya no resuelves ejercicios aislados: interpretas el comportamiento operativo de una carga AC.
`;export{e as default};
