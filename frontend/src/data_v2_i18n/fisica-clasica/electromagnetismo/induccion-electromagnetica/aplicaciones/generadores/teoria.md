## Contexto conceptual

Un **generador eléctrico** pertenece a las aplicaciones directas de la inducción electromagnética. Su función física no es “crear electricidad” desde la nada, sino transformar **trabajo mecánico** en energía eléctrica mediante una variación controlada de [[flujo_magnetico_maximo_enlazado]]. Por eso este leaf conecta la ley de Faraday con máquinas reales: turbinas, alternadores, dinamos, generadores de emergencia y montajes de laboratorio.

Pensar en generadores sirve para unir tres lecturas que suelen estudiarse separadas: la geometría de la bobina, la rapidez del movimiento y la potencia útil entregada. La pregunta central es qué debe cambiar para que aparezca [[epsilon_0]], y qué parte de esa conversión llega finalmente como [[potencia_electrica_util]] cuando el sistema real tiene pérdidas.

> [!NOTE]
> En un generador, la causa física inmediata de la fem no es el movimiento por sí solo, sino el cambio de flujo magnético enlazado por el circuito.

## 🟢 Nivel esencial

Un generador funciona porque una bobina ve cambiar el **flujo magnético** que la atraviesa. Ese cambio puede producirse girando la bobina dentro de un campo, girando los imanes alrededor de la bobina o modificando la intensidad del campo. El resultado eléctrico observable es una [[epsilon]] inducida que puede alimentar un circuito externo.

La idea intuitiva es simple: cuanto más campo atraviesa la bobina, cuanta más área queda enlazada y cuanto más rápido se produce el cambio, mayor será la tensión inducida. [[numero_de_espiras]] actúa como multiplicador porque cada espira añade una contribución al enlace de flujo.

> [!WARNING]
> No confundas [[epsilon_0]] con [[potencia_electrica_util]]. La primera describe tensión inducida; la segunda describe ritmo de entrega de energía al circuito.

En un generador ideal no se pierde energía en rozamientos, calentamiento ni resistencia interna. En un generador real, parte de la energía mecánica entra como [[potencia_mecanica_de_entrada]] y solo una fracción aparece como potencia eléctrica útil. Esa fracción se resume con [[eta]].

## 🔵 Nivel formal

La descripción formal separa primero la **cantidad de flujo disponible** y después la rapidez con que cambia. En una bobina ideal de [[numero_de_espiras]] espiras, con campo medio [[campo_magnetico]] y área efectiva [[area_de_la_espira]], el flujo máximo enlazado queda determinado por la geometría y el campo:

{{f:flujo_maximo_generador}}

Si la bobina gira de forma regular, la amplitud de la fem ideal aumenta proporcionalmente a la velocidad angular [[omega]]. Esta expresión no describe todavía el detalle instantáneo de la señal, sino su escala máxima:

{{f:amplitud_fem_generador}}

La ley de Faraday también puede leerse en forma media cuando se conoce un cambio de flujo [[cambio_de_flujo_magnetico]] durante un intervalo [[intervalo_temporal]]. Esta lectura es útil para conmutaciones, vueltas parciales o estimaciones sin señal sinusoidal completa:

{{f:fem_media_generador}}

Para conectar inducción con energía, se introduce el rendimiento. Un generador real recibe [[potencia_mecanica_de_entrada]] y entrega una potencia útil menor o igual, porque existen pérdidas mecánicas, térmicas, magnéticas y eléctricas:

{{f:eficiencia_generador}}

La potencia disponible para la carga se estima con el rendimiento y la potencia mecánica de entrada:

{{f:potencia_util_generador}}

> [!TIP]
> La cadena formal correcta es: enlace de flujo, variación de flujo, fem inducida y potencia útil. Saltar directamente de giro a potencia oculta el mecanismo físico.

## 🔴 Nivel estructural

La estructura profunda del generador es una **cadena causal**. La geometría fija cuánto flujo puede enlazarse; el movimiento determina la rapidez de cambio; la ley de Lenz fija la oposición física; el circuito externo decide cuánta corriente circula; las pérdidas reducen la potencia útil. Por eso dos generadores con igual [[epsilon_0]] pueden entregar potencias muy distintas si sus resistencias internas, refrigeración o cargas son diferentes.

El gráfico Coord del leaf representa una lectura cuantitativa de esa cadena: la señal alterna de [[epsilon]] cambia de signo mientras [[flujo_magnetico_maximo_enlazado]] cambia de fase. Cuando el flujo está en su valor extremo, su cambio instantáneo es pequeño; cuando cruza por la zona central, el cambio es más rápido y la fem alcanza valores grandes. Esta relación entre forma de onda y cambio temporal es más importante que memorizar un dibujo sinusoidal.

La validez del modelo ideal exige campo aproximadamente uniforme, bobina rígida, giro estable, área bien definida y ausencia de saturación magnética. Si el núcleo ferromagnético se satura, [[campo_magnetico]] deja de crecer de forma proporcional al diseño. Si la velocidad varía durante una vuelta, [[omega]] deja de representar todo el proceso. Si la carga exige demasiada corriente, la tensión en bornes puede caer aunque la fem interna siga siendo alta.

También hay una distinción estructural entre generador de corriente alterna y generador con conmutador. En el alternador, la fem cambia de polaridad periódicamente. En la dinamo, la conmutación mecánica intenta entregar una polaridad externa más estable, pero introduce contactos, desgaste y rizado. Ambos obedecen a la misma física de inducción, aunque su salida eléctrica sea distinta.

> [!WARNING]
> Un valor alto de [[epsilon_0]] no garantiza un generador “potente”. Sin capacidad de entregar corriente sostenida, la potencia útil puede ser pequeña.

## Interpretación física profunda

La ley de Lenz aporta la lectura energética: la corriente inducida se orienta de modo que se opone al cambio que la produce. Eso no es un detalle de signo, sino la forma local de respetar la conservación de la energía. Si el circuito entrega más potencia, el eje requiere más par mecánico para mantener la misma [[omega]].

La fem de un generador no debe imaginarse como una pila ideal desconectada de la mecánica. La tensión aparece porque cargas del conductor experimentan efectos electromagnéticos asociados al movimiento relativo y al campo. La carga conectada decide cuánta corriente circula; esa corriente produce campos que reaccionan sobre el movimiento y cierran el balance energético.

## Orden de magnitud

En una bobina educativa con [[numero_de_espiras]] de unas cien espiras, [[campo_magnetico]] cercano a unas décimas de tesla, [[area_de_la_espira]] del orden de centésimas de metro cuadrado y [[omega]] de cien radianes por segundo, [[epsilon_0]] puede estar en el orden de decenas de voltios. Un micrófono dinámico trabaja con señales mucho menores, de milivoltios, mientras un alternador de red puede manejar cientos de voltios. Un resultado de millones de voltios para una bobina manual pequeña es físicamente absurdo salvo que los datos sean extremos.

## Método de resolución personalizado

Primero identifica qué pide el problema: [[flujo_magnetico_maximo_enlazado]], [[epsilon]], [[epsilon_0]], [[eta]] o [[potencia_electrica_util]]. Después separa los datos geométricos de los datos temporales. Convierte [[omega]] si aparece en revoluciones por minuto, revisa que [[area_de_la_espira]] esté en metros cuadrados y confirma si [[numero_de_espiras]] multiplica el flujo de una sola espira.

Luego decide si el problema usa giro sinusoidal o cambio medio de flujo. Para un generador rotatorio ideal, usa la amplitud; para una variación dada durante un intervalo, usa la fem media. Finalmente, si se pregunta por energía útil, no mezcles tensión con potencia: incorpora [[potencia_mecanica_de_entrada]] y [[eta]].

## Casos especiales y ejemplo extendido

Si la bobina se mueve paralela al campo sin cambiar el flujo enlazado, puede haber movimiento visible pero no fem útil por inducción de flujo. Este caso corrige una intuición frecuente: no basta “mover un conductor”; debe cambiar el enlace magnético del circuito o existir una geometría motriz equivalente.

Otro caso límite aparece con circuito abierto. Puede existir [[epsilon_0]] medible en bornes, pero [[potencia_electrica_util]] entregada a una carga externa será nula porque no circula corriente útil. En cambio, con una carga muy baja, la corriente puede ser grande, las pérdidas internas aumentan y la tensión terminal cae.

Como ejemplo extendido, imagina una bobina de muchas espiras que gira más rápido al accionar una manivela. La gráfica de [[epsilon]] crece en altura y alterna polaridad más deprisa. Si el alumno solo mira el valor máximo, pierde la información temporal; si solo mira la potencia, pierde la causa inductiva.

## Preguntas reales del alumno

**¿Por qué aparece tensión si no hay una pila química?** Porque el trabajo mecánico cambia el enlace de [[flujo_magnetico_maximo_enlazado]] y separa cargas mediante inducción. La fuente energética es el movimiento suministrado al eje.

**¿Más espiras siempre significa mejor generador?** Aumentar [[numero_de_espiras]] eleva el enlace de flujo, pero también puede aumentar resistencia, tamaño, masa e inductancia. El diseño real equilibra fem, pérdidas y calentamiento.

**¿Por qué la señal cambia de signo?** Porque la orientación efectiva de la bobina respecto al campo se invierte durante el giro. El signo conserva la información de polaridad y de oposición de Lenz.

**¿Por qué un generador se frena al conectar una carga?** Porque al entregar [[potencia_electrica_util]] aparece una reacción electromagnética que exige más [[potencia_mecanica_de_entrada]] para mantener la misma velocidad. No es rozamiento “misterioso”; es conversión de energía.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Flujo magnético](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), [Ley de Faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday) y [Ley de Lenz](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz). También conecta con [Motores](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/aplicaciones/motores), que invierten el sentido energético del proceso.

La ruta natural es estudiar primero el flujo, después la fem inducida, luego el signo de Lenz y por último las máquinas eléctricas. Desde ahí se conecta con corriente alterna, transformadores, potencia eléctrica y redes domésticas.

## Síntesis final

Un generador es una máquina de conversión: geometría magnética y movimiento producen fem inducida, la ley de Lenz fija la oposición energética y el rendimiento decide cuánta potencia mecánica termina como potencia eléctrica útil.