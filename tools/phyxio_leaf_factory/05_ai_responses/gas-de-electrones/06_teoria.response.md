# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: teoria.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Gas de electrones
## Contexto conceptual
Un gas de electrones es una imagen idealizada: muchos electrones libres se distribuyen por estados cuánticos disponibles en un metal, semiconductor o plasma denso. No se comportan como canicas clásicas que pueden amontonarse sin límite. Al ser fermiones, la exclusión de Pauli obliga a que los estados bajos se llenen primero y empuja a parte de los electrones hacia energías mayores. Por eso la [[densidad_electronica]] no solo cuenta cuántos electrones hay: determina hasta qué altura energética queda lleno el “edificio” cuántico, fijando la [[energia_fermi]] y condicionando la [[ocupacion_estado]] cerca del [[potencial_quimico]].

## 🟢 Nivel esencial
La idea central es que aumentar la [[densidad_electronica]] comprime más electrones libres dentro del mismo [[volumen]]. Como los electrones son fermiones, no pueden ocupar todos el mismo estado cuántico. Los estados de menor [[energia_estado]] se van llenando y, cuando ya están ocupados, los electrones adicionales deben situarse en estados de momento y energía mayores. Esa frontera de llenado se llama [[energia_fermi]]. A [[temperatura_absoluta]] muy baja, los estados por debajo de esa frontera están prácticamente ocupados y los de encima casi vacíos. Al subir la [[temperatura_absoluta]], la frontera se suaviza: algunos estados algo por encima ganan [[ocupacion_estado]] y algunos por debajo pierden ocupación. Por tanto, la [[densidad_electronica]] controla la escala energética, mientras la temperatura decide lo brusca que es la transición.

## 🔵 Nivel formal
En el modelo tridimensional no relativista, la [[energia_fermi]] se obtiene a partir de la [[densidad_electronica]], la [[masa_electron]] y la [[constante_planck_reducida]]. La relación expresa que el llenado de estados de momento crece con la densidad disponible:

{{f:energia_fermi_gas_electrones_3d}}

Para comparar esa escala con la agitación térmica se define la [[temperatura_fermi]], usando [[constante_boltzmann]]:

{{f:temperatura_fermi_gas_electrones}}

La [[ocupacion_estado]] de un estado de [[energia_estado]] se describe mediante Fermi-Dirac, centrada alrededor del [[potencial_quimico]] y suavizada por [[temperatura_absoluta]]:

{{f:ocupacion_fermi_dirac_electrones}}

Conviene introducir la [[energia_reducida]], que mide la separación energética en unidades térmicas:

{{f:energia_reducida_electrones}}

También puede asociarse una [[velocidad_fermi]] a los electrones situados cerca de la frontera de llenado:

{{f:velocidad_fermi}}

Estas relaciones conectan conteo, energía, temperatura y ocupación: [[numero_electrones]] y [[volumen]] fijan [[densidad_electronica]], la densidad fija [[energia_fermi]], y la posición de [[energia_estado]] respecto a [[potencial_quimico]] fija [[ocupacion_estado]]. Si [[temperatura_absoluta]] es mucho menor que [[temperatura_fermi]], el cálculo de [[energia_fermi]] domina la lectura. Si no, la fórmula de ocupación debe acompañar siempre a la escala de densidad. La lectura dimensional también separa las tareas: [[energia_fermi]] y [[energia_estado]] son energías, [[temperatura_fermi]] y [[temperatura_absoluta]] son temperaturas, [[densidad_electronica]] es inversa de volumen y [[velocidad_fermi]] es una rapidez. Esa separación evita confundir una escala de ocupación con una cantidad total.

## 🔴 Nivel estructural
El modelo supone electrones libres, indistinguibles, no relativistas y en equilibrio térmico. “Libres” significa que el potencial periódico del sólido, las impurezas, las colisiones electrón-electrón y las interacciones con fonones se reducen a un fondo efectivo o se ignoran en primera aproximación. “No relativistas” exige que la [[velocidad_fermi]] sea pequeña frente a la velocidad de la luz; si no, la relación entre energía y momento cambia y la [[energia_fermi]] calculada deja de ser válida. “Equilibrio” implica que existe una [[temperatura_absoluta]] común y un [[potencial_quimico]] bien definido; sin equilibrio, la [[ocupacion_estado]] ya no se lee como distribución Fermi-Dirac estática.

Hay invariantes importantes. La [[densidad_electronica]] procede del cociente entre [[numero_electrones]] y [[volumen]], de modo que cambiar ambos manteniendo ese cociente conserva la escala principal de [[energia_fermi]]. La exclusión de Pauli conserva el límite de ocupación por estado y obliga a llenar regiones crecientes del espacio de momentos. Por eso la gráfica de [[energia_fermi]] frente a [[densidad_electronica]] debe ser creciente y cóncava: cada incremento de densidad eleva la frontera, pero no de forma lineal.

Los casos frontera aclaran el modelo. Si [[densidad_electronica]] tiende a valores muy pequeños, la [[energia_fermi]] cae y el gas se aproxima a un régimen menos degenerado, donde la temperatura domina más la ocupación. Si [[temperatura_absoluta]] es mucho menor que [[temperatura_fermi]], la distribución tiene borde casi abrupto y el carácter fermiónico manda. Si [[temperatura_absoluta]] se vuelve comparable con [[temperatura_fermi]], la transición de [[ocupacion_estado]] se ensancha y los argumentos puramente de llenado a cero temperatura pierden fuerza. El modelo falla si aparecen bandas electrónicas detalladas, confinamiento de baja dimensión, interacciones fuertes, desorden intenso, superconductividad o relatividad. También falla si se usa una [[masa_electron]] efectiva sin declararla, porque cambia la escala energética. En lectura gráfica, una curva que no aumenta con [[densidad_electronica]] o que sugiere [[energia_fermi]] negativa para electrones libres indica error de modelo, unidades o interpretación. Otro límite práctico es la dimensionalidad: en láminas, hilos o pozos cuánticos, el conteo de estados cambia y la dependencia de [[energia_fermi]] con [[densidad_electronica]] ya no coincide con la del gas 3D. Por eso la lectura del gráfico debe confirmar que se está usando una muestra volumétrica, no una geometría confinada.

## Interpretación física profunda
La [[energia_fermi]] no es “la energía media” de todos los electrones. Es una frontera de ocupación: marca hasta dónde se llenan los estados disponibles cuando la [[temperatura_absoluta]] es nula o muy pequeña frente a [[temperatura_fermi]]. La [[densidad_electronica]] actúa como presión de conteo cuántico. Cuantos más electrones por [[volumen]], más estados de momento deben ocuparse y mayor es la [[energia_fermi]]. La [[ocupacion_estado]] no mide cuántos electrones hay en toda la muestra, sino la probabilidad media de ocupar un estado concreto de [[energia_estado]]. El [[potencial_quimico]] es el punto de referencia que decide dónde se sitúa el cambio entre estados casi llenos y casi vacíos.

## Orden de magnitud
En metales típicos, la [[densidad_electronica]] suele estar alrededor de 10²⁸ m⁻³. Esa escala produce [[energia_fermi]] de unos pocos eV y [[temperatura_fermi]] de decenas de miles de kelvin, muy por encima de una [[temperatura_absoluta]] ambiente cercana a 300 K. Por eso un metal ordinario tiene electrones fuertemente degenerados: aunque el sólido esté “templado”, la frontera de ocupación sigue muy marcada.

## Método de resolución personalizado
Primero identifica si el problema pide una escala global o una ocupación puntual. Para una escala global, calcula [[densidad_electronica]] a partir de [[numero_electrones]] y [[volumen]], y usa esa densidad para obtener [[energia_fermi]]. Después transforma a [[temperatura_fermi]] si necesitas comparar con [[temperatura_absoluta]]. Para una ocupación puntual, localiza [[energia_estado]], [[potencial_quimico]] y [[temperatura_absoluta]], calcula la [[energia_reducida]] y evalúa [[ocupacion_estado]]. Al final, revisa tres cosas: unidades SI, régimen no relativista mediante [[velocidad_fermi]] y coherencia cualitativa de la gráfica.

## Casos especiales y ejemplo extendido
Si duplicas [[densidad_electronica]], la [[energia_fermi]] aumenta, pero menos que el doble, porque el llenado tridimensional reparte los estados en una esfera de momentos. Si mantienes [[densidad_electronica]] fija y subes [[temperatura_absoluta]], la [[energia_fermi]] característica apenas cambia como escala de densidad, pero la [[ocupacion_estado]] alrededor del [[potencial_quimico]] se suaviza. Ejemplo: un metal con [[densidad_electronica]] alta tendrá [[temperatura_fermi]] enorme; a temperatura ambiente, solo electrones cercanos a [[energia_fermi]] pueden cambiar fácilmente de ocupación, mientras los estados profundos siguen bloqueados por Pauli.

## Preguntas reales del alumno
¿La [[energia_fermi]] es la energía de todos los electrones? No. Es la energía del borde superior ocupado en el caso ideal de muy baja [[temperatura_absoluta]].

¿Por qué aparece [[densidad_electronica]] y no solo [[numero_electrones]]? Porque lo que importa es cuántos electrones compiten por estados dentro de un [[volumen]] dado.

¿La [[ocupacion_estado]] puede valer más que uno? Para un estado fermiónico simple, no: representa una probabilidad media. Si se agrupan estados degenerados, hay que distinguir estado individual y grupo.

¿Subir [[temperatura_absoluta]] destruye la exclusión de Pauli? No. Solo suaviza qué estados alrededor de [[potencial_quimico]] están ocupados.

## Conexiones transversales y rutas de estudio
Este leaf conecta con Fermi-Dirac, estructura electrónica de metales, capacidad calorífica, conducción eléctrica, semiconductores y física de materia condensada. También prepara la idea de gas degenerado en astrofísica, donde una alta [[densidad_electronica]] puede sostener materia compacta mediante presión de degeneración.

## Síntesis final
El gas de electrones muestra que la densidad es una llave cuántica: al aumentar [[densidad_electronica]], la exclusión de Pauli eleva [[energia_fermi]] y reorganiza la [[ocupacion_estado]]. La gráfica correcta debe traducir ese llenado forzado en una frontera energética creciente.

