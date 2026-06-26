const e=`# Aplicaciones del impulso externo y la ruptura de la conservación\r
\r
## 1. Diseño de airbags en automóviles\r
\r
**Contexto:** En una colisión frontal, el cuerpo del ocupante pasa de la velocidad de crucero a cero. La variación del [[P]] es fija e independiente del sistema de seguridad. Sin embargo, el [[J]] puede distribuirse en el tiempo.\r
\r
**Variable dominante:** [[J]]\r
\r
**Descripción:** El airbag extiende el [[t]] de contacto desde unos pocos milisegundos (choque directo contra el volante) hasta varias decenas de milisegundos. Dado que [[J]] = [[F_ext]] · [[t]], al aumentar [[t]] se reduce la [[F_ext]] promedio necesaria para producir el mismo cambio de [[P]]. Esta reducción de la fuerza promedio es la diferencia entre lesiones fatales y lesiones leves. Los ingenieros optimizan la densidad del gas y la rigidez del tejido del airbag para mantener [[F_ext]] por debajo del umbral de fractura ósea.\r
\r
**Límite de validez:** Este análisis es válido cuando la fuerza de inflado del airbag es despreciable frente a la fuerza de impacto, es decir, para velocidades de colisión superiores a 20 km/h donde el airbag se activa. Para colisiones a baja velocidad o con objetos blandos, el modelo de impulso constante no representa bien la interacción.\r
\r
---\r
\r
## 2. Propulsión a chorro y cohetes\r
\r
**Contexto:** Un motor de cohete expulsa gases hacia atrás con alta velocidad. El [[J]] generado por la reacción de esos gases sobre la cámara de combustión proporciona el [[DeltaP]] que acelera la nave.\r
\r
**Variable dominante:** [[F_ext]]\r
\r
**Descripción:** La [[F_ext]] de empuje es la fuerza de reacción de los gases expulsados. Desde el reposo, la nave adquiere una [[P]] creciente a medida que el motor opera. La condición de sistema aislado no se cumple: el propulsor introduce continuamente momento al sistema. El balance correcto es [[DeltaP]] = [[J]] = [[F_ext]] · [[t]]. El diseño del cohete maximiza la velocidad de eyección del gas (impulso específico) para obtener el mayor cambio de [[P]] posible por unidad de masa de combustible.\r
\r
**Límite de validez:** El análisis con [[F_ext]] constante es válido mientras la masa del cohete y el caudal de combustible permanezcan aproximadamente constantes. Para cohetes con quema prolongada, debe usarse la ecuación de Tsiolkovsky que incorpora la variación de masa.\r
\r
---\r
\r
## 3. Colisiones deportivas: golpe de tenis o billar\r
\r
**Contexto:** La raqueta aplica una [[F_ext]] enorme sobre la pelota durante un intervalo muy breve. Este impulso modifica completamente el estado dinámico de la pelota.\r
\r
**Variable dominante:** [[J]]\r
\r
**Descripción:** La pelota de tenis llega con un [[P]] inicial en una dirección y sale con un [[P]] final en dirección opuesta. La [[F_ext]] de la raqueta durante el tiempo de contacto (3-5 ms) produce el [[J]] = [[DeltaP]] que cuantifica la ruptura total de la conservación. Sin embargo, dado que la gravedad actúa durante tan poco [[t]], su contribución al impulso es despreciable frente al impulso de la raqueta. Esta es la esencia de la aproximación impulsiva: se conservan exactamente [[P]] antes y después si solo consideramos las fuerzas de contacto, pero el [[P]] del sistema pelota sí cambia radicalmente por el [[J]] externo.\r
\r
**Límite de validez:** La aproximación es válida mientras el [[t]] de contacto sea suficientemente corto para que el impulso de fuerzas externas lentas (gravedad, resistencia del aire) sea despreciable frente al [[J]] del golpe.\r
\r
---\r
\r
## 4. Control de actitud de satélites\r
\r
**Contexto:** Un satélite en órbita no tiene superficies de roce ni propulsión continua. Para girar o reorientar, debe usar propulsores que apliquen un impulso externo controlado.\r
\r
**Variable dominante:** [[J]]\r
\r
**Descripción:** El [[J]] aplicado por los micropropulsores durante un brevísimo intervalo cambia el [[P]] angular y lineal del satélite exactamente en la cantidad calculada: [[DeltaP]] = [[J]]. La condición de sistema aislado solo se cumple en ausencia de estos disparos. Cuando los propulsores se encienden, la conservación se rompe de forma deliberada y controlada. Este principio permite maniobras de ajuste de órbita, correcciones de apuntamiento y desaceleración para reentrada atmosférica.\r
\r
**Límite de validez:** El modelo de impulso constante es válido para disparos de corta duración donde la variación de masa del satélite por consumo de propergol es inferior al 1%. Para maniobras de mayor duración se requiere el análisis de Tsiolkovsky.\r
\r
---\r
\r
## 5. Balística terminal: diseño de blindajes\r
\r
**Contexto:** Un proyectil impacta una placa de blindaje. La placa debe absorber el [[J]] del proyectil sin perforación. El diseño busca maximizar la [[F_ext]] de reacción sobre el proyectil durante el menor [[t]] posible para detenerlo.\r
\r
**Variable dominante:** [[DeltaP]]\r
\r
**Descripción:** El blindaje debe producir un [[J]] = −[[Pinitial]] para llevar el [[P]] del proyectil a cero. La ecuación [[DeltaP]] = [[J]] = [[F_ext]] · [[t]] permite dos estrategias: aumentar [[F_ext]] (materiales más duros) o aumentar [[t]] (materiales más dúctiles que deforman el proyectil). Los blindajes modernos combinan capas de cerámica (alta [[F_ext]], baja [[t]]) con capas de polímero (alta [[t]], baja [[F_ext]]) para maximizar la energía absorbida. La ruptura de la conservación del [[P]] del proyectil es total y controlada.\r
\r
**Límite de validez:** El modelo de impulso-momento es válido en el límite en que la deformación del blindaje es pequeña respecto a su espesor. Para impactos hipersónicos o materiales con comportamiento hiperelástico, se requieren modelos de mecánica de sólidos deformables.\r
\r
---\r
\r
## 6. Impacto de meteoritos e ingeniería de defensa planetaria\r
\r
**Contexto:** Un asteroide de gran masa se dirige hacia la Tierra. Las misiones de defensa planetaria (como DART, 2022) aplican un impulso externo sobre el asteroide para desviar su trayectoria.\r
\r
**Variable dominante:** [[J]]\r
\r
**Descripción:** Al impactar una nave espacial contra el asteroide a alta velocidad, se produce un [[J]] sobre el asteroide que modifica su [[P]] y, con él, su trayectoria orbital. La variación necesaria en [[P]] es enorme pero también lo son las masas involucradas: para un asteroide de 10^10 kg, cambiar su velocidad en 1 cm/s implica un [[DeltaP]] de 10^8 kg·m/s. La misión DART generó un impulso de este orden al impactar sobre Dimorphos a 6 km/s. La condición de sistema aislado es violada por el impacto, y el [[J]] se calcula con precisión midiendo el [[DeltaP]] orbital resultante.\r
\r
**Límite de validez:** El modelo de impulso puntual es válido cuando el [[t]] de colisión es mucho menor que el período orbital. Para misiones de empuje continuo (propulsores solares), el análisis debe integrar [[F_ext]] sobre semanas o meses.\r
`;export{e as default};
