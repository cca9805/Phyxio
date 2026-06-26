const e=`# Inductancia mutua

## Contexto conceptual

La inductancia mutua aparece cuando el campo magnetico creado por una bobina enlaza a otra bobina. No basta con que esten cerca: debe existir **flujo comun** que atraviese eficazmente el circuito receptor. Por eso dos bobinas pueden estar fisicamente proximas y, aun asi, acoplarse poco si sus ejes, nucleos o trayectorias de campo no favorecen el enlace.

Este leaf explica como una variacion de [[I1]] produce una fem [[epsilon_2]] en otra bobina, que papel desempeña [[M]] y por que el coeficiente [[k]] separa tamaño de bobina y calidad de acoplamiento. Sirve para entender transformadores, sensores inductivos, bobinas de encendido y transferencias de energia sin contacto.

> [!NOTE]
> La inductancia mutua no describe una bobina aislada. Describe una relacion magnetica entre dos bobinas.

## 🟢 Nivel esencial

Una bobina primaria con corriente crea un campo magnetico. Si parte de ese campo atraviesa una bobina secundaria, aparece un flujo enlazado [[lambda_21]]. Mientras la corriente primaria permanece constante, ese flujo puede existir sin producir fem sostenida. El fenomeno nuevo llega cuando [[I1]] cambia.

La bobina secundaria responde al cambio de flujo con una fem [[epsilon_2]]. Esa fem no exige que la secundaria tenga una corriente cerrada; puede medirse incluso con el circuito abierto. Lo importante es el **cambio del enlace magnetico**, no la presencia de contacto electrico entre bobinas.

Una forma sencilla de verlo es pensar en una bobina emisora y una receptora. La emisora decide como cambia el campo; la receptora solo responde a la parte de ese campo que realmente la atraviesa. Si esa parte compartida es pequeña, la induccion tambien sera pequeña.

> [!WARNING]
> El error basico es mirar solo la cercania. La pregunta correcta es cuanto flujo de una bobina queda enlazado con la otra.

## 🔵 Nivel formal

En el regimen lineal, la corriente primaria y el flujo enlazado en la secundaria mantienen una relacion proporcional. La definicion operativa de inductancia mutua es:

{{f:definicion_inductancia_mutua}}

La misma relacion puede leerse como flujo mutuo producido por una corriente primaria:

{{f:flujo_mutuo_lineal}}

Cuando la corriente primaria cambia durante un intervalo, la ley de Faraday-Lenz aplicada al flujo mutuo da la fem media en la bobina secundaria:

{{f:fem_mutua_media}}

El signo negativo expresa oposicion al cambio de flujo enlazado. Si [[DeltaI1]] aumenta el flujo secundario segun la referencia elegida, [[epsilon_2]] aparece con polaridad que intenta oponerse a ese aumento. La polaridad real se concreta con la convencion de puntos o con el sentido de bobinado.

Para distinguir tamaño propio de bobinas y calidad del acoplamiento, se introduce:

{{f:coeficiente_acoplamiento}}

Esta relacion muestra que [[M]] no depende solo de que las bobinas sean grandes. Dos bobinas con [[L1]] y [[L2]] elevadas pueden tener [[M]] pequeña si [[k]] es bajo. A la inversa, un nucleo comun puede elevar mucho [[k]] sin cambiar arbitrariamente las inductancias propias.

Formalmente, estas expresiones separan tres tareas. La primera mide acoplamiento a partir de flujo, la segunda predice flujo secundario para un estado dado y la tercera estima tension inducida durante un transitorio. Mezclarlas suele producir errores de signo o de variable fuente.

La eleccion de la relacion depende de la pregunta. Si se conoce [[lambda_21]] y [[I1]], se mide [[M]]. Si se conoce [[M]] y cambia [[I1]], se predice [[epsilon_2]]. Si se conocen [[L1]] y [[L2]], [[k]] permite juzgar si el acoplamiento es fuerte o debil.

## 🔴 Nivel estructural

La estructura profunda de la inductancia mutua es una cadena de causa magnetica compartida. La corriente [[I1]] crea un campo; una parte de ese campo queda enlazada con la segunda bobina como [[lambda_21]]; el cambio de ese enlace produce [[epsilon_2]]. La secundaria no responde directamente a la corriente primaria, sino al flujo que esa corriente consigue hacer pasar por ella.

La magnitud [[M]] condensa geometria, numero de espiras, permeabilidad del nucleo, distancia, orientacion y fugas de flujo. Por eso no es una propiedad de la bobina primaria sola ni de la secundaria sola. Es una **propiedad del par**. Cambiar la separacion, girar una bobina o introducir un nucleo modifica el acoplamiento aunque las bobinas individuales sigan siendo las mismas.

El coeficiente [[k]] organiza la interpretacion estructural. Si [[k]] es cercano a uno, casi todo el flujo relevante se comparte. Si [[k]] es pequeño, gran parte del campo creado por la primaria no enlaza a la secundaria. Esta distincion evita confundir una inductancia propia grande con un acoplamiento eficaz.

Tambien hay limites claros. Si el nucleo satura, [[M]] deja de ser constante. Si las bobinas se mueven, el acoplamiento cambia con el tiempo. Si el cambio ocurre muy rapido, capacitancias parasitas y ondas electromagneticas pueden intervenir. En esos casos, el modelo de dos inductores lineales acoplados ya no basta como descripcion completa.

La estructura tambien explica la reciprocidad practica del acoplamiento: en medios lineales y geometria fija, intercambiar fuente y receptor conserva la misma escala de acoplamiento. Lo que cambia es la referencia de corriente, la bobina observada y la polaridad con que se lee la fem inducida.

En un montaje real, esta reciprocidad ayuda a probar el sistema invirtiendo emisor y receptor sin cambiar la geometria.

> [!TIP]
> Para diagnosticar induccion mutua, separa tres preguntas: que corriente cambia, que fraccion de flujo se comparte y que polaridad induce la ley de Lenz.

## Interpretación física profunda

La fem [[epsilon_2]] no significa que la primaria envie carga a traves del espacio. La transferencia empieza como una reorganizacion del campo magnetico. La secundaria detecta que su flujo enlazado cambia y responde con una fem compatible con la ley de Lenz.

El signo es especialmente delicado. La misma [[M]] positiva puede producir lecturas de polaridad distintas segun como se definan terminales y sentidos de bobinado. Por eso los transformadores usan marcas de punto: no cambian el valor de [[M]], pero si fijan que terminales suben o bajan de potencial simultaneamente.

## Orden de magnitud

En bobinas separadas de laboratorio, [[M]] puede estar en microhenrios o menos. En transformadores con nucleo comun, puede alcanzar milihenrios o henrios. Una variacion de 1 A en 1 ms con [[M]] de 0.05 H produce una fem secundaria del orden de decenas de voltios.

Un resultado absurdo aparece si [[k]] sale mayor que uno en bobinas pasivas, si [[M]] supera claramente la escala compatible con [[L1]] y [[L2]], o si se predice una fem enorme por olvidar convertir milisegundos a segundos. La escala de [[epsilon_2]] crece cuando [[Deltat]] disminuye.

## Método de resolución personalizado

Primero identifica la bobina fuente y la bobina receptora. Si el dato habla de corriente primaria, usa [[I1]] o [[DeltaI1]]. Si habla de enlace magnetico en la secundaria, usa [[lambda_21]]. Si pide tension inducida, localiza [[M]] y [[Deltat]].

Despues conserva la referencia de signos. La polaridad de [[epsilon_2]] depende de como se orienten bobinados, normales y terminales. Por ultimo, revisa si el problema pide calidad de acoplamiento: entonces entran [[k]], [[L1]] y [[L2]], no solo la fem inducida.

## Casos especiales y ejemplo extendido

Si el circuito secundario esta abierto, puede existir [[epsilon_2]] aunque no circule corriente secundaria apreciable. Esta situacion es normal en una medida de tension inducida. La ausencia de corriente no elimina la fem; solo impide transferencia sostenida de potencia a una carga.

Si la corriente primaria es constante, puede haber [[lambda_21]] constante sin fem secundaria media. El flujo comun existe, pero no cambia. Esta diferencia es la misma que separa campo magnetico presente de induccion electromagnetica activa.

Como ejemplo extendido, compara dos pares de bobinas con igual [[L1]] y [[L2]]. El par con nucleo comun y bobinados cercanos tendra [[k]] mayor, por lo que tendra mayor [[M]] y mayor [[epsilon_2]] ante el mismo [[DeltaI1]]. El par con bobinas separadas puede tener las mismas inductancias propias y, sin embargo, inducir mucho menos.

## Preguntas reales del alumno

**¿La secundaria necesita estar conectada para que haya fem?** No. La fem [[epsilon_2]] puede existir con circuito abierto. Lo que falta en ese caso es una corriente secundaria sostenida.

**¿Por que [[M]] no es simplemente [[L1]] o [[L2]]?** Porque [[L1]] y [[L2]] describen cada bobina consigo misma. [[M]] describe el flujo compartido entre dos bobinas.

**¿Puede haber flujo mutuo sin tension inducida?** Si. Si [[I1]] es constante, [[lambda_21]] puede mantenerse constante y no producir fem media.

**¿Que significa que [[k]] sea pequeño?** Significa que gran parte del flujo creado por la primaria no enlaza eficazmente con la secundaria.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Flujo magnetico](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), porque el concepto central es enlace de campo con una bobina. Tambien depende de [Ley de Faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), que fija la relacion entre cambio de flujo y fem.

Antes conviene dominar [Autoinduccion](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion). Despues, el camino natural lleva a transformadores, circuitos acoplados y transferencia inductiva de energia.

## Síntesis final

La inductancia mutua mide cuanto cambia electricamente una bobina por el flujo creado por otra. [[M]] resume el acoplamiento, [[epsilon_2]] expresa la respuesta inducida y [[k]] permite distinguir tamaño propio de calidad de enlace magnetico.
`;export{e as default};
