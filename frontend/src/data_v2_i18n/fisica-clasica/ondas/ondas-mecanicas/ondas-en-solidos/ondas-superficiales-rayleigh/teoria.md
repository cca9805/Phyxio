## Contexto conceptual

Cuando una onda elastica encuentra una superficie libre (la interfaz entre un solido y el vacio o el aire), aparecen modos de propagacion que no existen en el interior del medio. Las **ondas de Rayleigh** son el modo superficial mas importante: combinan desplazamiento longitudinal y transversal en una trayectoria eliptica retrograda confinada a la vecindad de la superficie. Son las responsables de la mayor parte del daño sismico en terremotos superficiales y la base de tecnicas modernas de caracterizacion de materiales.

A diferencia de las ondas de cuerpo (P y S), las ondas de Rayleigh no se dispersan geometricamente en dos dimensiones sino en una, lo que les permite transportar energia a grandes distancias con menor atenuacion relativa. Su velocidad [[velocidad_de_onda_de_rayleigh]] es ligeramente inferior a la de la onda S del mismo medio, y su amplitud decae exponencialmente con la profundidad.

## 🟢 Nivel esencial

Las ondas de Rayleigh viajan por la superficie libre de un solido. Las particulas describen **elipses retrogradas**: en la cresta de la onda se mueven hacia atras respecto a la direccion de avance, combinando movimiento vertical (arriba-abajo) y horizontal (adelante-atras). Es como ver rodar una ola del mar, pero al reves.

> [!NOTE]
> La velocidad [[velocidad_de_onda_de_rayleigh]] de estas ondas es siempre menor que la velocidad de onda S ([[v_s]]) del mismo material. Para la mayoria de rocas y metales, [[velocidad_de_onda_de_rayleigh]] esta entre el 87 y el 96 por ciento de [[v_s]].

Las ondas de Rayleigh solo existen cerca de la superficie: su amplitud [[amplitud_a_profundidad_z]] disminuye rapidamente con la profundidad [[z_prof]]. A una profundidad igual a una longitud de onda [[longitud_de_onda_de_rayleigh]], la amplitud ya es menor del 30 por ciento del valor superficial [[amplitud_en_la_superficie]]. Esto las convierte en ondas ideales para inspeccionar capas superficiales sin necesidad de acceder al interior del material.

En un terremoto, las ondas de Rayleigh llegan despues de las P y las S (porque son mas lentas), pero producen el movimiento mas intenso y prolongado en superficie: son las que causan la mayor destruccion en edificios.

## 🔵 Nivel formal

La velocidad de la onda de Rayleigh se obtiene resolviendo la ecuacion secular:

{{f:ecuacion_secular_rayleigh}}

Donde [[cociente_adimensional_v_r_v_s]] es el cociente adimensional entre [[velocidad_de_onda_de_rayleigh]] y [[v_s]], y [[xi_vs_vp]] es el cociente entre [[v_s]] y la velocidad P. La ecuacion secular es un polinomio de sexto grado que admite una unica raiz real entre 0 y 1 para cualquier medio estable.

En la practica se utiliza la aproximacion de Viktorov, que reproduce la raiz exacta con error inferior al 0.5 por ciento:

{{f:velocidad_rayleigh_aproximada}}

Esta formula muestra que [[velocidad_de_onda_de_rayleigh]] depende unicamente de [[v_s]] y [[nu_poisson]]. Para [[nu_poisson]] igual a 0.25, [[velocidad_de_onda_de_rayleigh]] resulta 0.92 veces [[v_s]]; para [[nu_poisson]] cercano a 0.5, llega a 0.955 veces [[v_s]].

La amplitud decrece exponencialmente con la profundidad segun:

{{f:decaimiento_profundidad}}

Donde [[coeficiente_de_decaimiento_con_la_profundidad]] es el coeficiente de decaimiento, del orden de dos pi dividido por [[longitud_de_onda_de_rayleigh]]. La profundidad de penetracion efectiva es:

{{f:profundidad_penetracion}}

Esta relacion implica que la frecuencia de la onda selecciona la profundidad sondeada: frecuencias bajas (longitudes de onda grandes) penetran mas profundamente, mientras que frecuencias altas quedan confinadas a la capa mas superficial.

## 🔴 Nivel estructural

La existencia de la onda de Rayleigh es una consecuencia de las **condiciones de contorno de superficie libre** (tension normal y tangencial nulas en la interfaz). Imponiendo estas condiciones sobre la combinacion de una onda P y una S que decaen con la profundidad, se obtiene la ecuacion secular cuya solucion determina [[cociente_adimensional_v_r_v_s]].

> [!WARNING]
> Las ondas de Rayleigh solo existen en solidos con [[v_s]] finita. En un fluido ([[v_s]] nula), no hay condicion de contorno de cizalla y el modo de Rayleigh desaparece. La superficie libre de un fluido solo soporta ondas de gravedad, no ondas elasticas superficiales.

**Estructura del movimiento en profundidad:**

El movimiento de particula tiene dos componentes: vertical (asociada a la componente P) y horizontal (asociada a la componente S). Ambas decaen exponencialmente con [[z_prof]], pero con tasas distintas. A profundidad cercana a 0.2 veces [[longitud_de_onda_de_rayleigh]], la componente horizontal cambia de signo: el movimiento pasa de retrogrado a progrado. Este cambio es una firma diagnostica de la onda de Rayleigh.

**Dispersion en medios estratificados:**

En un semiespacio homogeneo, la onda de Rayleigh es **no dispersiva**: [[velocidad_de_onda_de_rayleigh]] no depende de la frecuencia. Pero en cuanto el medio tiene capas con distintas propiedades, la velocidad de fase cambia con la frecuencia. Las ondas de frecuencia baja (longitud de onda grande) sondean las capas profundas (generalmente mas rigidas), y por tanto viajan mas rapido. Las de frecuencia alta sondean solo la capa superficial (menos rigida) y viajan mas lento. Esta dispersion es la base del metodo MASW para construir perfiles de [[v_s]] con la profundidad.

**Comparacion con ondas Love:**

Las ondas de Love son otro modo superficial, pero requieren una capa superficial de menor velocidad sobre un sustrato mas rigido. Las de Rayleigh existen siempre que haya superficie libre, sin requisito de estratificacion. Las Love son puramente transversales (horizontales), mientras las Rayleigh combinan movimiento vertical y horizontal.

## Interpretación física profunda

La onda de Rayleigh es un modo acoplado: no es ni puramente P ni puramente S, sino una superposicion coherente de ambas que satisface la condicion de superficie libre. Este acoplamiento explica por que su velocidad es menor que la de la S pura (la condicion de contorno "frena" la propagacion) y por que solo existe en presencia de una interfaz.

El confinamiento superficial tiene consecuencias energeticas: la energia de la onda esta concentrada en una capa de espesor del orden de [[longitud_de_onda_de_rayleigh]]. Al propagarse en dos dimensiones (a lo largo de la superficie), la amplitud decrece como la inversa de la raiz de la distancia, en lugar de la inversa de la distancia al cuadrado (ondas de cuerpo en 3D). Esto explica la predominancia de las ondas de Rayleigh en registros sismicos lejanos.

## Orden de magnitud

- Roca granitica: [[v_s]] cercana a 3000 m/s, [[velocidad_de_onda_de_rayleigh]] cercana a 2800 m/s
- Suelo arcilloso: [[v_s]] cercana a 200 m/s, [[velocidad_de_onda_de_rayleigh]] cercana a 180 m/s
- Acero: [[v_s]] cercana a 3200 m/s, [[velocidad_de_onda_de_rayleigh]] cercana a 2950 m/s
- Profundidad de penetracion para sismo de 1 Hz en roca: [[longitud_de_onda_de_rayleigh]] del orden de 3 km
- Profundidad de penetracion para ultrasonido SAW de 100 MHz: [[longitud_de_onda_de_rayleigh]] del orden de 30 micrometros

## Método de resolución personalizado

1. **Identificar el medio**: determinar [[v_s]] (a partir de ensayos o modulos elasticos) y [[nu_poisson]]
2. **Calcular [[velocidad_de_onda_de_rayleigh]]**: aplicar la formula de Viktorov con los datos anteriores
3. **Determinar [[longitud_de_onda_de_rayleigh]]**: dividir [[velocidad_de_onda_de_rayleigh]] entre la frecuencia de interes
4. **Estimar penetracion**: la profundidad efectiva [[d_pen]] es aproximadamente [[longitud_de_onda_de_rayleigh]]
5. **Calcular decaimiento**: usar la exponencial para evaluar [[amplitud_a_profundidad_z]] a cualquier profundidad
6. **Verificar coherencia**: confirmar que [[velocidad_de_onda_de_rayleigh]] es menor que [[v_s]] y que [[amplitud_a_profundidad_z]] no supera [[amplitud_en_la_superficie]]

## Casos especiales y ejemplo extendido

**Caso nu igual a 0.25 (solido de Poisson):** [[cociente_adimensional_v_r_v_s]] vale 0.9194, es decir [[velocidad_de_onda_de_rayleigh]] es 91.9 por ciento de [[v_s]]. Este es el valor de referencia mas citado en manuales.

**Caso nu tendiendo a 0.5 (material casi incompresible):** [[cociente_adimensional_v_r_v_s]] se acerca a 0.955. La onda de Rayleigh se aproxima a la velocidad S pero nunca la alcanza.

**Caso nu igual a 0 (material sin contraccion lateral):** [[cociente_adimensional_v_r_v_s]] vale 0.874. Este es el minimo posible para un material isotropo estable.

**Ejemplo extendido:** En un ensayo MASW sobre suelo, se detecta que a 5 Hz la velocidad de fase de Rayleigh es 220 m/s y a 20 Hz es 160 m/s. La diferencia indica dispersion: la capa superficial (sondeada a 20 Hz) tiene [[v_s]] menor que las capas profundas (sondeadas a 5 Hz). Invirtiendo el perfil de dispersion se reconstruye el perfil de [[v_s]] con la profundidad.

## Preguntas reales del alumno

**Por que la onda de Rayleigh es mas lenta que la S si tiene componente P (que es mas rapida)?**

La onda de Rayleigh no hereda la velocidad de sus componentes por separado. La condicion de contorno de superficie libre acopla las ondas P y S de manera que la combinacion coherente viaja mas lento que cualquiera de sus constituyentes individuales. Es un efecto de interferencia constructiva confinada.

**Si la amplitud decae con la profundidad, por que se detectan ondas de Rayleigh a miles de km del epicentro?**

El decaimiento exponencial es con la profundidad, no con la distancia horizontal. A lo largo de la superficie, la onda se atenua mucho mas suavemente (como la inversa de la raiz de la distancia) porque se propaga en 2D, no en 3D. Por eso domina los registros de sismos lejanos.

**Que diferencia hay entre una onda de Rayleigh y una ola del mar?**

Las olas del mar son ondas de gravedad en un fluido; las particulas se mueven en elipses progradas (en la cresta, el movimiento es en la direccion de avance). Las ondas de Rayleigh son elasticas en un solido y las particulas se mueven en elipses retrogradas (en la cresta, hacia atras). Ademas, las olas dependen de la gravedad, mientras las de Rayleigh dependen solo de la elasticidad.

**Se puede usar una onda de Rayleigh para detectar grietas superficiales?**

Si. Como la amplitud esta concentrada cerca de la superficie, cualquier defecto superficial (grieta, corrosion, delaminacion) interrumpe la propagacion y genera reflexiones detectables. Los ensayos no destructivos SAW (Surface Acoustic Waves) explotan este principio en la industria aeronautica y microelectronica.

## Conexiones transversales y rutas de estudio

- **Previo**: ondas P y S, modulos elasticos, coeficiente de Poisson
- **Paralelo**: ondas Love, modos guiados en placas (Lamb)
- **Siguiente**: dispersion de ondas superficiales, metodo MASW, ondas SAW en microelectronica
- **Conexion interdisciplinar**: geotecnia (clasificacion de suelos), ingenieria sismica (daño en superficie), acustica de dispositivos (filtros SAW en telecomunicaciones)

## Síntesis final

Las ondas de Rayleigh son modos superficiales que combinan deformacion P y S bajo la condicion de superficie libre. Su velocidad [[velocidad_de_onda_de_rayleigh]] depende exclusivamente del coeficiente de Poisson y de [[v_s]], su amplitud decae exponencialmente con la profundidad, y su penetracion efectiva [[d_pen]] es del orden de una longitud de onda. Estas tres propiedades las convierten en herramientas de diagnostico superficial en sismologia, geotecnia y ensayos industriales.