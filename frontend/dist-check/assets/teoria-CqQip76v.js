const e=`# Ley de Biot Savart

## Contexto conceptual

La **ley de Biot Savart** describe como una corriente estacionaria produce campo magnetico punto a punto. A diferencia de una ley global de circulacion, esta ley mira cada elemento del conductor y suma su contribucion vectorial en el punto de observacion.

Dentro de las fuentes del campo magnetico, sirve cuando la geometria de corriente debe analizarse por partes. Hilos, espiras y bobinas se entienden como distribuciones formadas por muchos elementos orientados, no como fuentes puntuales.

## 🟢 Nivel esencial

Imagina dividir un conductor con corriente en pequenos fragmentos. Cada fragmento empuja una pequena contribucion de campo magnetico en el espacio. La ley de Biot Savart dice que el campo final aparece al sumar todas esas contribuciones con su direccion correcta.

La idea esencial es **local y vectorial**. Importa la corriente, importa el elemento orientado [[dl]], importa la distancia [[r]] al punto y tambien importa la orientacion del fragmento. Un elemento casi alineado con el punto aporta poco; uno casi perpendicular aporta mucho mas.

> [!NOTE]
> Biot Savart no es una receta de sustitucion rapida. Primero se entiende la geometria, despues se decide que contribuciones se cancelan y cuales se refuerzan.

El resultado buscado es el campo total, pero el camino natural empieza por [[dB]]. Esa diferencia evita un error comun: creer que una sola parte del conductor ya representa todo el campo.

## 🔵 Nivel formal

La forma diferencial de la ley expresa el modulo de la contribucion elemental producida por un tramo de corriente:

{{f:biot_savart_diferencial}}

Aqui [[dB]] crece con [[I]], con [[dl]] y con [[s_theta]], pero disminuye con [[r]]. La constante [[mu0]] fija el acoplamiento magnetico del modelo de vacio. La direccion no se lee solo en el modulo; se obtiene con la regla de la mano derecha aplicada al elemento de corriente y a la direccion hacia el punto.

Cuando la geometria es un hilo recto muy largo, la integracion de todas las contribuciones da una relacion simple para el campo a distancia perpendicular [[r]]:

{{f:campo_hilo_largo}}

En una espira circular, si el punto esta exactamente en el centro, todas las contribuciones tienen la misma direccion axial. Entonces aparece el resultado integrado:

{{f:campo_espira_centro}}

Estas formulas no son tres reglas aisladas. La primera es la ley local; las otras dos son consecuencias cuando la simetria permite integrar sin perder la direccion comun de las contribuciones.

La lectura formal exige no confundir variable de integracion con resultado final. [[dl]] pertenece al conductor, [[r]] une ese elemento con el punto de observacion, y [[B]] solo aparece despues de sumar las contribuciones coherentes. Si esa separacion se pierde, una formula integrada se usa fuera de su geometria.

## 🔴 Nivel estructural

La estructura profunda de Biot Savart tiene tres capas. La primera es **local**: cada elemento de corriente genera solo una contribucion. La segunda es **geometrica**: distancia y orientacion deciden el peso de esa contribucion. La tercera es **vectorial**: las contribuciones deben sumarse con direccion, no como simples numeros positivos.

Esta organizacion explica por que la ley es mas general que una formula de hilo largo, pero tambien mas exigente. Si la geometria no tiene simetria, no se puede saltar directamente a un resultado compacto. Hay que integrar, o aproximar numericamente, la suma de contribuciones sobre todo el conductor.

> [!WARNING]
> Dos elementos igualmente cercanos pueden no aportar igual. Si su orientacion cambia, [[s_theta]] cambia y la direccion de [[dB]] tambien puede cambiar.

La distancia [[r]] introduce una sensibilidad fuerte: contribuciones cercanas pesan mucho mas que contribuciones lejanas. Sin embargo, cercania no basta. Un elemento alineado con la direccion al punto puede aportar muy poco aunque este cerca. Por eso el modelo obliga a mirar distancia, orientacion y simetria a la vez.

El limite conceptual aparece cuando la corriente cambia rapidamente, el conductor tiene dimensiones comparables con la longitud de onda electromagnetica o el medio magnetico no responde como vacio. En esos casos, el modelo magnetostatico deja de ser suficiente y deben usarse modelos de Maxwell completos o descripciones materiales mas detalladas.

Tambien hay un limite pedagogico importante: Biot Savart no debe convertirse en una suma mecanica de tramos. El sentido fisico esta en reconocer que cada tramo tiene un peso distinto y una direccion distinta. En geometria simetrica, esa complejidad se comprime; en geometria irregular, vuelve a aparecer y obliga a integrar con cuidado.

Por eso la ley funciona como puente entre intuicion geometrica y calculo avanzado. Un mismo principio explica el campo de un hilo, de una espira y de una bobina, pero solo si la ruta de corriente se respeta como parte esencial del modelo.

## Interpretación física profunda

Biot Savart enseña que el campo magnetico no nace de una corriente como una flecha radial. Nace de una relacion orientada entre corriente, posicion y punto de observacion. La regla de la mano derecha no es un truco memoristico; es la lectura geometrica de esa orientacion.

Tambien muestra por que la simetria es tan valiosa. En el centro de una espira, muchas contribuciones tienen componentes transversales que se cancelan y componentes axiales que se refuerzan. En un hilo largo, los aportes se organizan en circunferencias alrededor del conductor.

## Orden de magnitud

Un hilo con corriente de 10 A produce campos del orden de decenas o centenas de microteslas a distancias de centimetros. Una espira compacta con varios amperios puede alcanzar militeslas cerca del centro. Un resultado de varios teslas para una espira de laboratorio sin nucleo suele indicar un radio mal usado, una corriente irreal o una confusion entre milimetros y metros.

## Método de resolución personalizado

1. Identifica la geometria de corriente: hilo, arco, espira, bobina o tramo finito.
2. Dibuja el elemento [[dl]] y el punto donde quieres calcular [[B]].
3. Decide la distancia [[r]] y el factor angular [[s_theta]] para cada tipo de elemento.
4. Usa simetria para saber que componentes de [[dB]] se cancelan y cuales se suman.
5. Solo despues elige la formula integrada adecuada o plantea una suma numerica.

Este orden impide usar una formula de hilo largo en situaciones que pertenecen a espiras, tramos finitos o puntos fuera de simetria.

## Casos especiales y ejemplo extendido

El primer caso especial es el punto situado sobre la prolongacion de un elemento recto. Aunque este cerca del conductor, el factor angular puede ser muy pequeno y la contribucion diferencial se reduce. El campo no depende solo de estar cerca; depende de la orientacion.

El segundo caso es el centro de una espira. Cada elemento esta a la misma distancia del centro y todas las contribuciones utiles apuntan en la misma direccion axial. Por eso una geometria circular permite un resultado compacto que seria falso fuera del centro.

Ejemplo extendido: una espira de radio 5 cm con corriente de 2 A produce en su centro un campo del orden de decenas de microteslas. Si el radio se reduce a la mitad con la misma corriente, el campo central aumenta. La geometria concentra la contribucion.

## Preguntas reales del alumno

**¿Biot Savart y Ampere dan resultados distintos?** No cuando se aplican dentro del mismo dominio. Biot Savart suma contribuciones locales; Ampere usa simetria global para algunos casos.

**¿Por que aparece un factor angular?** Porque solo la parte del elemento de corriente perpendicular a la direccion hacia el punto produce contribucion maxima.

**¿Puedo sumar solo modulos de [[dB]]?** Solo si ya demostraste que todas las contribuciones apuntan en la misma direccion. Si no, debes sumar vectores.

**¿Por que el hilo largo no sirve para una espira?** Porque la simetria y la distancia relevante cambian. La formula integrada de una geometria no se hereda automaticamente a otra.

## Conexiones transversales y rutas de estudio

Este leaf conecta hacia atras con [Campo magnetico](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico), donde se define que representa [[B]]. Tambien prepara [Ley de Ampere](leaf:fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-ampere), que resuelve casos muy simetricos desde una lectura global.

Hacia adelante conecta con espiras, solenoides, inductancia y ecuaciones de Maxwell. La ruta natural es estudiar primero campo magnetico, luego Biot Savart como fuente local y despues Ampere como atajo estructural cuando la simetria lo permite.

## Síntesis final

La ley de Biot Savart calcula [[B]] sumando contribuciones [[dB]] producidas por elementos de corriente. Su fuerza esta en conectar corriente, distancia, orientacion y geometria; su dificultad esta en respetar la suma vectorial y el dominio magnetostatico.
`;export{e as default};
