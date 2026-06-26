# Modelos de energía cinética rotacional

## Modelo ideal

El modelo ideal supone un cuerpo rígido que rota alrededor de un eje fijo con momento de inercia constante. Bajo esas condiciones, todos los puntos del cuerpo comparten la misma [[omega]] y la energía rotacional se calcula con

{{f:energia_rotacional_final}}

. El eje no se desplaza, el cuerpo no se deforma y no hay deslizamiento interno entre sus partes.

Este modelo es potente porque separa la geometría, contenida en [[I]], de la cinemática, contenida en [[omega]]. Una vez elegido el eje, el problema se reduce a una magnitud escalar. Es el modelo natural para discos en banco, poleas con eje fijo, ruedas idealizadas, cilindros que rotan alrededor de su centro y volantes de inercia cuando la orientación del eje no cambia.

## Hipótesis

La primera hipótesis es rigidez: las distancias entre partículas del sólido permanecen constantes. La segunda es eje bien definido: el [[I]] usado corresponde al eje real de giro. La tercera es velocidad angular común: no hay partes girando con velocidades distintas dentro del mismo cuerpo ideal. La cuarta es ausencia de pérdidas internas dentro del término de energía, aunque puedan añadirse después como energía disipada.

También se asume que [[omega]] se mide en radianes por segundo y que el momento de inercia no cambia durante el proceso. Si una masa móvil se acerca al eje, si un patinador recoge los brazos o si un mecanismo desplaza piezas internas, [[I]] cambia y el cálculo debe tratar estados separados o usar un modelo más amplio.

## Dominio de validez cuantitativo

El modelo es cuantitativamente fiable cuando las deformaciones elásticas almacenan menos del `5%` de la energía total, cuando la variación relativa del momento de inercia cumple `Delta I / I < 0.01` y cuando la velocidad angular queda por debajo de aproximadamente el `70%` de la velocidad crítica del rotor. En máquinas comunes, estas condiciones suelen cumplirse si el rotor está equilibrado y opera dentro de su rango de diseño.

En rodadura sin deslizamiento, el modelo sigue siendo válido para la parte rotacional, pero no representa toda la energía cinética. Debe añadirse la traslación del centro de masa. En frenado con rozamiento, la fórmula da [[Eroti]] y [[Erotf]], pero el balance debe incluir calor o trabajo extraído. El dominio no falla por usar energía rotacional; falla si se pretende que sea el único término cuando no lo es.

## Señales de fallo del modelo

Una señal clara de fallo es que distintas partes del cuerpo tengan velocidades angulares distintas, como en una correa flexible o un fluido en agitación. Otra señal es que el eje cambie de orientación y aparezcan acoplamientos tensoriales. También falla si el contacto tiene deslizamiento importante y parte de la energía se transforma en calor sin quedar descrita por [[Erot]].

Los resultados numéricos absurdos también alertan. Energías enormes en objetos pequeños y lentos suelen indicar unidades mal convertidas. Energías negativas indican una lectura incorrecta del signo de [[omega]]. Energías finales mayores que las posibles sin trabajo externo revelan que falta una fuente en el balance.

## Modelo extendido o alternativo

Cuando conviene cambiar a modelo alternativo: cuando aparece una energía comparable que el modelo ideal no representa. El modelo extendido para rodadura escribe la energía total como suma de traslación y rotación. El modelo con pérdidas añade energía térmica. El modelo tridimensional reemplaza el escalar [[I]] por un tensor de inercia. El modelo de inercia variable calcula [[Erot]] en cada estado con su propio momento de inercia y usa conservación del momento angular o trabajo externo según corresponda.

En ingeniería, un rotor flexible puede requerir modos de vibración y energía elástica. En un vehículo, la energía de las ruedas se suma a la energía del chasis. En un generador, parte de [[Wrot]] se convierte en energía eléctrica. Estos modelos no niegan la fórmula básica; la insertan dentro de un balance más completo.

## Comparación operativa

Usa el modelo ideal cuando el eje es fijo, el cuerpo es rígido y solo se pregunta por energía asociada al giro. Usa el modelo de rodadura cuando el centro de masa se mueve y existe una restricción geométrica entre avance y giro. Usa el modelo disipativo cuando hay frenado, rozamiento o impactos. Usa el modelo tensorial cuando el eje no es principal o la orientación cambia.

La decisión práctica es preguntar qué energía puede faltar. Si no falta ninguna, [[Erot]] basta. Si el cuerpo se traslada, añade traslación. Si se calienta, añade disipación. Si el eje cambia, revisa el tensor. Esta comparación evita aplicar una fórmula correcta dentro de un modelo incompleto.