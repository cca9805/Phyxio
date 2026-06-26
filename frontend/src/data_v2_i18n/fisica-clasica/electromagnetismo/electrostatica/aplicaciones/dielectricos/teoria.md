## Contexto conceptual

Un condensador en vacío almacena carga entre sus placas. Cuando se rellena el espacio con ciertos materiales —vidrio, plástico, cerámica, agua— algo notable ocurre: la capacitancia aumenta sin cambiar la geometría. Estos materiales se llaman **dieléctricos** y su efecto es una de las consecuencias más directas de la estructura interna de la materia.

El estudio de los dieléctricos conecta la electrostática macroscópica con la física molecular. La pregunta que guía este leaf no es "cuánta carga hay" sino "cómo responde el material al campo". La respuesta a esa pregunta explica condensadores de alta capacitancia, aislantes de alta tensión y el funcionamiento de membranas biológicas.

> [!NOTE]
> Los dieléctricos no son conductores. No permiten el paso de carga libre. Su efecto sobre el campo eléctrico se produce a través de la **polarización**: una redistribución microscópica de las cargas ligadas que ya existían dentro del material.

## 🟢 Nivel esencial

Cuando se introduce un material dieléctrico entre las placas de un condensador, los átomos y moléculas del material responden al campo eléctrico externo. Las cargas negativas y positivas de cada molécula se desplazan ligeramente en direcciones opuestas, creando pequeños **dipolos eléctricos** microscópicos.

Estos dipolos se orientan colectivamente en la dirección del campo y generan su propio campo opuesto al externo. El resultado es un **campo neto reducido** dentro del material. Como el campo es menor a igual diferencia de potencial, el condensador puede acumular más carga: la capacitancia [[capacitancia_con_dielectrico]] es mayor que en vacío por un factor igual a [[epsilon_r]], la constante dieléctrica del material.

> [!TIP]
> La constante dieléctrica [[epsilon_r]] es siempre mayor o igual a uno. Para el vacío vale exactamente uno; para el agua líquida ronda ochenta; para el titanato de bario puede superar los diez mil.

## 🔵 Nivel formal

La relación fundamental del leaf expresa que la capacitancia con dieléctrico es la capacitancia en vacío multiplicada por la constante dieléctrica relativa [[epsilon_r]]:

{{f:capacitancia_dielectrico}}

Aquí [[capacitancia_en_vacio]] es la capacitancia geométrica del condensador en ausencia de material, determinada únicamente por el área de las placas y su separación. El factor [[epsilon_r]] es adimensional y caracteriza el material. Para un condensador de placas paralelas, [[capacitancia_en_vacio]] se calcula como el producto de la permitividad del vacío por el área dividido entre la separación.

El campo eléctrico dentro del dieléctrico se reduce según la segunda relación del leaf:

{{f:campo_en_dielectrico}}

donde \(E_{\text{ext}}\) es el campo que existiría en vacío a las mismas condiciones de carga. La reducción es consecuencia directa de la **polarización eléctrica** [[polarizacion_electrica]]: la alineación de los dipolos genera cargas superficiales de signo contrario a las cargas libres de las placas, que se oponen al campo externo. La polarización volúmica se relaciona con [[campo_electrico_en_el_dielectrico]] y [[epsilon_r]] según:

{{f:polarizacion_dielectrico}}

donde el factor [[epsilon_r]] menos uno es la susceptibilidad eléctrica del material.

> [!WARNING]
> [[epsilon_r]] es adimensional. La permitividad absoluta del material es el producto de [[epsilon_r]] por la permitividad del vacío y tiene unidades de F/m. Mezclar ambas es el error más frecuente en este leaf.

## 🔴 Nivel estructural

**Mecanismo microscópico de la polarización.** La polarización [[polarizacion_electrica]] puede originarse por tres mecanismos distintos, que coexisten con diferente peso según el material y la frecuencia de la señal:

- **Polarización electrónica**: la nube de electrones se desplaza respecto al núcleo bajo el campo externo. Presente en todos los materiales y activa hasta frecuencias ópticas.
- **Polarización iónica**: en cristales iónicos como el NaCl, los iones positivos y negativos se desplazan en sentidos opuestos. Activa hasta el infrarrojo.
- **Polarización orientacional**: en moléculas polares (como el agua), el campo alinea dipolos permanentes. Solo eficaz a bajas frecuencias; desaparece a radio o microondas.

La contribución total a [[epsilon_r]] es la suma de las susceptibilidades de cada mecanismo. Por eso [[epsilon_r]] del agua líquida (≈ 80) es mucho mayor que la del hielo (≈ 3): en el hielo las moléculas están fijas y no pueden orientarse.

**Tensión de ruptura dieléctrica.** El campo [[campo_electrico_en_el_dielectrico]] dentro del material no puede crecer indefinidamente. Cuando supera la **tensión de ruptura** del material, el campo arranca electrones de los átomos y el dieléctrico se ioniza súbitamente: conduce corriente y se destruye. Este límite se mide en V/m y varía desde unos 3 MV/m para el aire hasta más de 200 MV/m para algunos polímeros. El diseño real de condensadores siempre opera muy por debajo de este límite, con un margen de seguridad típico de tres a cinco veces.

**Pérdidas dieléctricas y frecuencia.** En régimen de corriente alterna [[epsilon_r]] no es real sino complejo: su parte imaginaria cuantifica las pérdidas energéticas asociadas al desfase entre el campo y la polarización. Un material con pérdidas elevadas disipa energía como calor. Los condensadores de alta frecuencia usan materiales con parte imaginaria mínima (factores de disipación menores de 0.001). La dependencia de [[epsilon_r]] con la frecuencia —la **dispersión dieléctrica**— limita el uso de cada material a ciertos rangos espectrales.

**Condición de validez del modelo lineal.** El modelo [[capacitancia_con_dielectrico]] = [[epsilon_r]] · [[capacitancia_en_vacio]] asume que [[epsilon_r]] es constante: el material responde proporcionalmente al campo aplicado. Esta linealidad es válida para la mayoría de los materiales a campos moderados, pero los **ferroeléctricos** muestran histéresis (la polarización depende del historial del campo) y los **paraelástricos** presentan saturación a campos altos. Fuera del régimen lineal, la relación entre capacitancia y [[epsilon_r]] deja de ser proporcional.

## Interpretación física profunda

La constante dieléctrica [[epsilon_r]] no es una propiedad misteriosa del material: es la consecuencia medible de que los dipolos internos producen un campo que se opone al externo. Cuanto más fácilmente se polarizan los dipolos (mayor susceptibilidad), mayor es el campo opuesto y mayor es [[epsilon_r]]. El campo [[campo_electrico_en_el_dielectrico]] que experimenta el material es el resultado de la competición entre el campo externo (que intenta desplazar cargas) y el campo de polarización (que resiste ese desplazamiento).

La reducción de [[campo_electrico_en_el_dielectrico]] no significa que el dieléctrico absorba energía: la energía almacenada en el campo es mayor con dieléctrico que sin él, precisamente porque [[capacitancia_con_dielectrico]] es mayor. La energía adicional proviene de la fuente que mantuvo la tensión constante al insertar el dieléctrico. Si en cambio el condensador se cargó y se desconectó antes de insertar el dieléctrico, la energía disminuye al introducirlo (la carga no cambia, pero [[capacitancia_con_dielectrico]] aumenta y la tensión baja).

> [!NOTE]
> Esta asimetría —energía que aumenta o disminuye según las condiciones del proceso— es una trampa habitual de examen. La variable clave que determina el resultado es si la tensión o la carga permanece constante al insertar el dieléctrico.

## Orden de magnitud

Para un condensador de placas paralelas de área un centímetro cuadrado y separación un milímetro con aire entre las placas, [[capacitancia_en_vacio]] es del orden de décimas de picofaradio. Si se rellena con vidrio ordinario ([[epsilon_r]] ≈ 7), [[capacitancia_con_dielectrico]] sube a unas pocas picofaradios. Con titanato de bario ([[epsilon_r]] ≈ 10 000), el mismo condensador alcanzaría capacitancias del orden del nanofaradio.

Estas escalas permiten detectar resultados absurdos: una capacitancia de microfaradios para un condensador de centímetros cuadrados en vacío es imposible; milímetros de titanato de bario pueden explicar nanofaradios con geometría razonable. Cualquier resultado en el rango de faradios para geometrías de laboratorio indica error de unidades o datos de entrada incorrectos.

## Método de resolución personalizado

Frente a un problema de dieléctricos, el procedimiento recomendado es:

1. **Identificar [[capacitancia_en_vacio]]**: si no se da directamente, calcularlo a partir de la geometría del condensador (área y separación para el caso plano).
2. **Leer [[epsilon_r]]** del material dado. Verificar que es adimensional y mayor o igual a uno.
3. **Calcular [[capacitancia_con_dielectrico]]** multiplicando [[capacitancia_en_vacio]] por [[epsilon_r]]. Si el problema pregunta por [[epsilon_r]] a partir de medidas de capacitancia, dividir [[capacitancia_con_dielectrico]] entre [[capacitancia_en_vacio]].
4. **Calcular [[campo_electrico_en_el_dielectrico]]** si se necesita saber el campo interior: dividir el campo externo entre [[epsilon_r]].
5. **Comparar [[campo_electrico_en_el_dielectrico]] con la tensión de ruptura** del material para verificar que la solución es físicamente viable.

El error más frecuente es olvidar el paso 5: un resultado de [[epsilon_r]] correcto pero que implica un campo interior mayor que la rigidez dieléctrica del material no tiene sentido físico.

## Casos especiales y ejemplo extendido

**Dieléctrico parcial.** Si el dieléctrico no rellena completamente el espacio entre placas —por ejemplo, una lámina que ocupa la mitad del espacio—, el sistema se comporta como dos condensadores en serie (uno con dieléctrico y otro en vacío). La capacitancia equivalente es menor que [[capacitancia_con_dielectrico]] pero mayor que [[capacitancia_en_vacio]]. El cálculo requiere tratar cada región por separado y combinar resultados.

**Mezcla de dieléctricos en paralelo.** Si el condensador está dividido en dos regiones laterales con materiales distintos ([[epsilon_r]] diferente en cada mitad), el sistema equivale a dos condensadores en paralelo. La capacitancia total es la suma de las capacitancias de cada región, y [[epsilon_r]] efectivo es el promedio ponderado por áreas.

**Agua como dieléctrico de alto [[epsilon_r]].** El agua líquida tiene [[epsilon_r]] ≈ 80 a temperatura ambiente. Esta propiedad la hace extraordinariamente eficaz para apantallar campos eléctricos, lo que explica por qué las reacciones iónicas en solución acuosa ocurren con facilidad: la energía de interacción entre iones queda reducida a un ochenta por ciento respecto al vacío. Sin embargo, las pérdidas dieléctricas del agua a microondas son elevadas, lo que explica el funcionamiento de los hornos domésticos.

## Preguntas reales del alumno

**¿Por qué el dieléctrico no conduce si los electrones se mueven?** En los dieléctricos, las cargas se desplazan solo unos pocos picómetros alrededor de sus posiciones de equilibrio. No hay transporte neto de carga libre de una placa a la otra: los electrones siguen ligados a sus átomos. La diferencia con un conductor es que en el conductor los electrones se mueven macroscópicamente sin obstáculos, mientras que en el dieléctrico el desplazamiento microscópico es reversible y local.

**¿Insertar el dieléctrico siempre aumenta la energía almacenada?** No. Depende de cómo se hace. Si la tensión entre placas se mantiene constante (condensador conectado a una batería), la carga aumenta y la energía almacenada [[capacitancia_con_dielectrico]] * V² / 2 sube. Si el condensador estaba cargado y aislado (carga constante), la tensión disminuye al entrar el dieléctrico y la energía disminuye también. La diferencia entre los dos casos es la energía intercambiada con la fuente externa.

**¿Qué ocurre si se supera la tensión de ruptura?** El campo ioniza los átomos del dieléctrico, creando un canal conductor que cortocircuita el condensador. El material queda destruido permanentemente en ese punto. Este fenómeno se llama **ruptura dieléctrica** y es la causa principal de fallo en condensadores de alta tensión.

**¿Puede [[epsilon_r]] ser menor que uno?** En medios activos con ganancia óptica puede ser posible en ciertos rangos de frecuencia, pero para cualquier material pasivo en régimen estático [[epsilon_r]] es siempre mayor o igual a uno. Un valor menor que uno en un cálculo estático indica un error en los datos o en las unidades.

## Conexiones transversales y rutas de estudio

Los dieléctricos son la extensión natural del leaf [Condensadores](leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores): la capacitancia [[capacitancia_en_vacio]] que se calculó allí es el punto de partida del factor [[epsilon_r]]. El concepto de campo eléctrico reducido en el interior conecta con el bloque de [campo electrostático](leaf:fisica-clasica/electromagnetismo/electrostatica/campo-electrostatico) y con la ley de Gauss en medios materiales.

A nivel más avanzado, la polarización [[polarizacion_electrica]] abre la ruta hacia la electrodinámica de medios continuos, donde se introduce el vector de desplazamiento eléctrico y las condiciones de contorno en interfaces dieléctricas. En óptica, [[epsilon_r]] es el cuadrado del índice de refracción para materiales no magnéticos, estableciendo el puente entre electromagnetismo y óptica de la que habla el leaf de ondas electromagnéticas.

## Síntesis final

Los dieléctricos amplifican la capacitancia de un condensador porque sus cargas ligadas se polarizan bajo el campo externo y generan un campo opuesto que reduce el campo neto interior. La magnitud central [[epsilon_r]] encapsula toda esa respuesta polarizante del material y es siempre mayor o igual a uno. La capacitancia [[capacitancia_con_dielectrico]] es el producto de [[capacitancia_en_vacio]] por [[epsilon_r]], y el campo [[campo_electrico_en_el_dielectrico]] en el interior es el campo externo dividido entre [[epsilon_r]]. Ambas relaciones son válidas mientras el campo permanezca por debajo de la tensión de ruptura del material y la respuesta siga siendo lineal.