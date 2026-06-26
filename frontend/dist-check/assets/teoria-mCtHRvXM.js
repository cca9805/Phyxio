const a=`# Condensadores

## Contexto conceptual

Un **condensador** es un dispositivo que almacena energía en forma de campo eléctrico separando cargas opuestas en dos superficies conductoras próximas —las armaduras—. Aparece en circuitos de filtrado, flashes de cámara, desfibriladores cardíacos, memorias y sensores táctiles; comprenderlo es comprender cómo el campo eléctrico almacena y libera energía de forma controlada.

El condensador hace de puente entre electrostática y circuitos: su comportamiento depende del campo estático entre sus armaduras y, en corriente alterna, se convierte en elemento reactivo que bloquea la CC y deja pasar altas frecuencias. Este leaf cubre la vertiente electrostática: cómo se define la capacidad, cómo se almacena la energía y qué factores físicos determinan la capacidad de un condensador de placas planas.

## 🟢 Nivel esencial

Cuando se conecta un condensador a una batería, las cargas eléctricas se redistribuyen: una armadura acumula carga positiva y la otra acumula carga negativa en la misma cantidad. Entre las dos armaduras queda atrapado un **campo eléctrico** que es la manifestación física de la energía almacenada.

Lo que define a un condensador como mejor o peor almacenador de carga es su **capacidad** [[C]]. Un condensador de alta capacidad acumula mucha carga para una tensión pequeña; uno de baja capacidad necesita tensiones altas para acumular la misma carga. La capacidad no depende de la tensión aplicada ni de la carga almacenada: es una propiedad fija del dispositivo, determinada por su geometría y su material dieléctrico.

La **tensión** [[V]] entre las armaduras es la causa directa de todo lo que ocurre en el condensador. A mayor tensión, mayor carga acumulada [[Q]] y mayor energía almacenada [[E_cap]]. La relación es simple y elegante: la carga y la energía crecen de forma proporcional y cuadrática con la tensión, respectivamente.

## 🔵 Nivel formal

La **definición cuantitativa de capacidad** se obtiene midiendo cuánta carga [[Q]] acumula el condensador por cada voltio [[V]] de tensión aplicado:

{{f:capacidad_definicion}}

Esta ecuación tiene tres lecturas útiles: con ella se calcula [[C]] midiendo [[Q]] y [[V]], se predice [[Q]] conociendo [[C]] y [[V]], o se halla [[V]] conociendo [[C]] y [[Q]]. Las tres formas son equivalentes y reflejan la misma relación lineal: el condensador no distingue cuál es la causa y cuál el efecto.

La **energía almacenada** [[E_cap]] en el campo eléctrico es la mitad de Q·V: durante la carga la tensión crece desde cero hasta el valor final, por lo que el trabajo promedio es la mitad de ese valor:

{{f:energia_condensador}}

Para condensadores de placas planas paralelas, la capacidad depende directamente de la geometría y del material dieléctrico:

{{f:capacidad_plana}}

donde [[epsilon]] es la **permitividad** del material dieléctrico (en F/m), \\(A\\) el área de cada armadura (en m²) y \\(d\\) la separación (en m). Aumentar [[epsilon]] o \\(A\\), o reducir \\(d\\), incrementa [[C_plana]]. Esta fórmula permite dimensionar el condensador eligiendo material, área y separación.

## 🔴 Nivel estructural

La relación entre [[Q]] y [[V]] es lineal (con [[C]] como pendiente), pero las consecuencias de esa linealidad son profundas. En el gráfico [[Q]] vs [[V]], un condensador de mayor [[C]] produce una recta más empinada. La **energía almacenada** [[E_cap]] corresponde al área del triángulo bajo la recta, entre tensión cero y el valor considerado. Esta interpretación geométrica explica visualmente por qué aparece el factor 1/2 y por qué la energía no crece linealmente con la tensión sino de forma cuadrática.

**Efectos del dieléctrico.** La permitividad [[epsilon]] = ε₀·εᵣ es el producto de la permitividad del vacío (ε₀ = 8.854×10⁻¹² F/m) por la constante dieléctrica relativa εᵣ del material. Un dieléctrico con εᵣ = 10 multiplica la capacidad por 10 para la misma geometría. El mecanismo físico es la **polarización dieléctrica**: el campo orienta los dipolos del material, generando un campo de polarización que se opone parcialmente al externo y permite almacenar más carga a la misma tensión.

**Tensión de ruptura.** Todo dieléctrico tiene un **campo eléctrico máximo admisible** por encima del cual conduce abruptamente. Esto limita la tensión máxima: tensión de ruptura = campo de ruptura × separación d. Excederla incluso brevemente destruye el condensador de forma irreversible.

**Asociación de condensadores.** En paralelo comparten [[V]] y suman capacidades. En serie comparten [[Q]] y la capacidad equivalente es menor que cualquiera de ellos — al contrario que las resistencias, porque [[C]] mide facilidad de almacenar carga, no oposición.

**Dependencia con la frecuencia.** Las fórmulas de [[C]], [[Q]] y [[V]] son válidas en régimen estático o cuasiestático. En CA, el condensador tiene una **impedancia reactiva** inversamente proporcional a la frecuencia y a [[C]]. A frecuencias muy altas, la inductancia parásita domina y el dispositivo deja de comportarse como capacidad pura.

## Interpretación física profunda

La energía almacenada en un condensador **reside en el campo eléctrico**, no en los conductores. Esto es un resultado profundo de la teoría del campo electromagnético: la energía se distribuye en el espacio entre las armaduras con una densidad volumétrica proporcional a [[epsilon]] y al cuadrado del campo eléctrico. Integrar esa densidad sobre el volumen entre las armaduras reproduce exactamente la fórmula de [[E_cap]] con el factor 1/2.

Esta perspectiva es conceptualmente superior a pensar en "energía de las cargas": las cargas son solo la fuente del campo, pero la energía está en el campo mismo. La misma idea se generaliza a inductores (energía en el campo magnético) y a las ondas electromagnéticas (energía transportada por los campos E y B en el vacío).

El hecho de que [[E_cap]] crezca como V² tiene una consecuencia práctica inmediata: maximizar la tensión es la forma más eficiente de maximizar la energía almacenada con una capacidad fija. Doblar la energía solo requiere multiplicar la tensión por √2 ≈ 1.41. Esto explica por qué desfibriladores y cámaras cargan sus condensadores a las tensiones más altas que permite el componente.

## Orden de magnitud

La unidad de capacidad, el **faradio (F)**, es extremadamente grande en términos de los condensadores que se encuentran en los circuitos electrónicos habituales. La escala de referencia práctica es el microfaradio (µF = 10⁻⁶ F), el nanofaradio (nF = 10⁻⁹ F) y el picofaradio (pF = 10⁻¹² F):

- **1 pF**: condensador de ajuste de alta frecuencia, antenas de radio.
- **100 nF**: condensador de desacoplo en circuitos integrados digitales.
- **100 µF**: condensador electrolítico de filtrado en fuentes de alimentación de 5 V.
- **1 F**: supercondensador de almacenamiento de energía para sistemas embebidos.

Para comparar: un condensador de 1000 µF a 230 V almacena ≈ 26.5 J (equivalente a elevar una manzana 27 m), mientras que una batería AA almacena 13 500 J —500 veces más—, lo que ilustra la diferencia en densidad energética.

Un resultado físicamente absurdo sería obtener una capacidad de 10 F para un condensador de placas de 1 cm² separadas 1 mm con aire. Aplicando la fórmula de [[C_plana]] con ε₀, 1 cm² y 1 mm da aproximadamente 0.9 pF. Cualquier cálculo que dé faradios para esa geometría con aire implica un error de unidades de 10¹³ o más.

## Método de resolución personalizado

Para resolver cualquier problema de condensadores:

1. **Identificar las magnitudes conocidas**: determinar cuáles de [[C]], [[Q]], [[V]] y [[E_cap]] están dadas y cuál se busca.
2. **Seleccionar la relación adecuada**: si se busca [[C]] desde geometría, usar la fórmula de condensador plano con [[epsilon]], área y separación. Si se busca energía o carga, usar las fórmulas de [[E_cap]] y la relación entre [[Q]], [[C]] y [[V]].
3. **Verificar unidades**: convertir siempre a faradios (F), culombios (C), voltios (V) y julios (J) antes de operar. Los errores de prefijo (µF vs F) son la causa más frecuente de resultados absurdos.
4. **Calcular y confrontar con el orden de magnitud esperado**: si el resultado está en faradios para un componente ordinario, revisar conversión de unidades.
5. **Verificar consistencia**: comprobar que el producto [[C]]·[[V]] coincide con [[Q]], y que la fórmula de [[E_cap]] es coherente tanto usando [[C]] y [[V]] como usando [[Q]] y [[V]].

En el **gráfico Q vs V**, el método gráfico consiste en identificar la pendiente como C, leer la carga en el eje Y para la tensión de interés, y calcular la energía como el área del triángulo bajo la recta.

## Casos especiales y ejemplo extendido

**Condensador con dieléctrico insertado.** Si se inserta un dieléctrico de εᵣ = 5 entre las armaduras de un condensador previamente cargado a 100 V y luego se desconecta la fuente, la carga [[Q]] permanece constante (no puede escapar). Entonces la capacidad [[C_plana]] aumenta 5 veces y [[V]] cae 5 veces (de 100 V a 20 V), ya que [[Q]] es fijo y [[C]] se quintuplicó. [[E_cap]] también cae 5 veces: la diferencia de energía fue absorbida por el trabajo mecánico de introducir el dieléctrico (el condensador atrajo el dieléctrico hacia el interior). Si en cambio la fuente permanecía conectada, [[V]] queda fijo, [[Q]] aumenta 5 veces y la energía aumenta 5 veces —la fuente suministró energía adicional.

**Ruptura dieléctrica.** Reducir la separación d entre armaduras aumenta [[C_plana]] (la fórmula muestra que [[C_plana]] crece al disminuir d). Pero d también determina la tensión máxima admisible: reducir d de 10 µm a 1 µm aumenta [[C_plana]] diez veces pero reduce la tensión máxima de 100 V a 10 V. La energía máxima almacenable crece con d, de modo que hay un compromiso fundamental entre alta capacidad (d pequeña) y alta tensión de trabajo (d grande).

## Preguntas reales del alumno

**¿Por qué la fórmula de energía del condensador lleva el factor 1/2?**
Porque la tensión no es constante al cargar: empieza en cero y crece hasta el valor final. El trabajo en cada instante elemental es la tensión instantánea (proporcional a [[Q]]/[[C]]) multiplicada por la carga elemental; la integral desde cero introduce el factor 1/2.

**¿La capacidad cambia si cambio la tensión?**
No. [[C]] es una propiedad geométrica y material, independiente de la tensión. Lo que cambia es [[Q]] y [[E_cap]]; [[C]] no varía salvo en materiales no lineales.

**¿Por qué los condensadores en serie tienen menor capacidad que cualquiera de ellos?**
En serie comparten la misma [[Q]] pero se reparte la tensión. La capacidad equivalente mide carga por voltio total; al repartir tensión, la carga acumulada para una tensión total dada es menor que con cualquiera de ellos solo.

**¿Por qué el condensador no deja pasar CC pero sí CA?**
En CC, una vez cargado a la tensión de la fuente la corriente cesa: ninguna carga cruza el dieléctrico. En CA la tensión cambia de signo constantemente; el condensador carga y descarga de forma alternada, y la corriente externa parece "pasar" aunque ninguna carga cruce físicamente el dieléctrico.

## Conexiones transversales y rutas de estudio

El condensador es la culminación del estudio de la electroestática en este bloque. Depende directamente del concepto de campo eléctrico y diferencia de potencial estudiados en los leafs anteriores; sin comprenderlos, la relación entre [[C]], [[Q]] y [[V]] es solo aritmética sin sustancia física.

Hacia adelante, el condensador es imprescindible para entender los circuitos RC (carga y descarga), los filtros de señal en electrónica analógica, los convertidores DC-DC y los osciladores. El leaf [Dieléctricos](leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/dielectricos) profundiza en el efecto de la permitividad desde el punto de vista de la polarización de la materia, que es la continuación natural de la sección sobre [[epsilon]] de este leaf.

En la física de materiales, la permitividad [[epsilon]] y su dependencia frecuencial conectan con la óptica (índice de refracción) y con la electrónica de estado sólido (dieléctricos de alta K en transistores de efectos de campo modernos). El condensador es literalmente el dispositivo que conecta la electrostática clásica del siglo XIX con la física de materiales del siglo XXI.

## Síntesis final

El condensador almacena energía en el campo eléctrico entre sus armaduras. Su **capacidad** [[C]] es la propiedad central: fija para una geometría y material dados, determina cuánta carga [[Q]] y cuánta energía [[E_cap]] almacena el dispositivo para cada tensión [[V]] aplicada. La energía crece con el cuadrado de la tensión, lo que hace a [[V]] el parámetro de diseño más crítico. La **geometría** del condensador plano vincula [[C_plana]] con [[epsilon]], el área y la separación.
`;export{a as default};
