const e=`# Campo de distribuciones continuas de carga

## Contexto conceptual

Las cargas eléctricas reales no son siempre puntuales. Un cable metálico cargado, una placa conductora o un cristal iónico distribuyen su carga a lo largo de un hilo, una superficie o un volumen. Calcular el campo eléctrico [[E]] en esos casos requiere extender el método de la carga puntual a infinitos elementos infinitesimales, sumando sus contribuciones vectoriales mediante una integral.

Este método es la aplicación directa del **principio de superposición** en su forma más general. Su dominio abarca toda la electrostática de geometrías reales: cables de alta tensión, placas de condensadores, esferas cargadas y distribuciones moleculares. Comprender cómo integrar [[dE]] sobre una distribución es comprender la arquitectura matemática de toda la electroestática clásica.

El concepto clave que lo diferencia de la carga puntual es la **simetría**: identificar qué componentes del campo se cancelan por argumentos de simetría reduce drásticamente la complejidad de la integración antes de escribir una sola ecuación.

## 🟢 Nivel esencial

Imagina una barra larga y cargada. Cada trocito de la barra crea un pequeño campo [[dE]] en el punto donde quieres conocer el campo total. Para obtener el campo real [[E]] hay que **sumar todos esos vectores**, no sus módulos: dos trocitos simétricos a ambos lados de la barra contribuyen con vectores que apuntan en sentidos parcialmente opuestos, y parte de sus efectos se cancela.

La clave intuitiva es que **la geometría de la distribución controla cuánto cancela la simetría**. Un plano infinito cancela tanto que el campo [[E]] resulta constante a cualquier distancia. Un hilo infinito cancela las contribuciones axiales y el campo decae con la distancia, pero más lentamente que el de una carga puntual. Cuanto más extensa es la fuente en dimensiones, más lento es su decaimiento.

> [!NOTE]
> El campo no se obtiene sumando módulos. La dirección de cada [[dE]] importa tanto como su magnitud. Olvidar esto es el error conceptual más costoso en distribuciones de carga.

## 🔵 Nivel formal

La contribución diferencial de una pequeña porción de carga diferencial al punto campo situado a distancia [[r_dist]] se calcula como si esa carga fuera una carga puntual:

{{f:campo_elemento_diferencial}}

Antes de integrar, [[dE]] se descompone en componentes cartesianas. Los componentes que son cero por simetría se cancelan analíticamente; solo los supervivientes se integran. Esto es el núcleo del método.

**Hilo infinito uniformemente cargado.** La simetría cilíndrica cancela exactamente las contribuciones axiales de [[dE]]. La integral de la componente radial sobre el hilo infinito da:

{{f:campo_hilo_infinito}}

El campo [[E]] es **radial y perpendicular al hilo**, y decae como [[r_dist]] inverso. Este decaimiento más lento que el de la carga puntual refleja que la fuente tiene una dimensión extendida.

**Plano infinito uniformemente cargado.** La simetría plana cancela todas las contribuciones paralelas al plano. Solo la componente perpendicular sobrevive y la integral sobre el plano infinito da:

{{f:campo_plano_infinito}}

El resultado es **independiente de [[r_dist]]**: el campo no disminuye al alejarse del plano. Esta uniformidad es la firma inequívoca de la simetría plana perfecta y es la base del condensador de placas paralelas.

**Distribución volumétrica.** Cuando la carga se distribuye en un volumen con densidad [[rho_vol]], la contribución diferencial de cada elemento de volumen es:

{{f:campo_distribucion_volumetrica}}

La integral sobre el volumen completo da el campo resultante [[E]]. Esta es la forma más general del principio de superposición aplicada a distribuciones tridimensionales.

> [!TIP]
> Antes de integrar: (1) dibuja la distribución, (2) identifica el eje de simetría, (3) argumenta qué componentes de [[dE]] se anulan en pares. Solo entonces plantea la integral.

## 🔴 Nivel estructural

La comparación entre las tres leyes de decaimiento revela la **arquitectura dimensional** del campo eléctrico:

| Geometría fuente | Dimensión de la fuente | Ley de [[E]] vs [[r_dist]] |
|---|---|---|
| Carga puntual | 0D | Campo proporcional a [[r_dist]] inverso al cuadrado |
| Hilo infinito | 1D | Campo proporcional a [[r_dist]] inverso |
| Plano infinito | 2D | Campo constante, independiente de [[r_dist]] |

Cada dimensión adicional de la fuente reduce en uno el exponente del decaimiento. Esta relación no es una coincidencia matemática: refleja cuántas dimensiones del espacio están "saturadas" por la fuente y cuántas quedan libres para que el campo se disperse.

**Límites de validez de los modelos de extensión infinita.** El hilo infinito y el plano infinito son idealizaciones. Su campo coincide con el del objeto real solo cuando [[r_dist]] es mucho menor que las dimensiones del objeto. Cuando [[r_dist]] se acerca al tamaño de la fuente, el campo deja de seguir la ley idealizada y la integración directa para geometría finita es necesaria.

**Simetría esférica y ley de Gauss.** Para distribuciones con simetría esférica perfecta, la integración directa de [[dE]] es posible pero costosa. La ley de Gauss — que relaciona el flujo de [[E]] a través de una superficie cerrada con la carga encerrada — es matemáticamente equivalente y produce el mismo resultado en una sola línea. El uso de Gauss no es un atajo informal: es la forma más natural de explotar la simetría en tres dimensiones.

**Singularidades y densidad continua.** El modelo de distribución continua falla cuando [[r_dist]] tiende a cero, produciendo una divergencia en [[dE]]. Físicamente, esto significa que toda carga real tiene extensión finita; no existe una densidad de carga verdaderamente puntual. A escala nanométrica, los efectos cuánticos dominan y el modelo clásico de distribución continua deja de ser aplicable.

> [!WARNING]
> Un resultado de [[E]] que **crece** al alejarse de la fuente es siempre incorrecto. Verificar el signo del exponente de decaimiento antes de aceptar ningún resultado numérico.

## Interpretación física profunda

El campo [[E]] de una distribución continua no es simplemente la suma de muchos campos puntuales: es el límite de esa suma cuando el número de elementos tiende a infinito y cada elemento tiende a cero. Esta construcción matemática — la integral de Riemann sobre el dominio de la distribución — es lo que da coherencia física al modelo continuo.

La dirección y magnitud de [[E]] en cualquier punto encapsulan **toda la información geométrica** de la distribución: cómo está extendida, con qué densidad, y en qué orientación. Al medir [[E]] en varios puntos del espacio y ajustar la curva [[E]] vs [[r_dist]], es posible inferir la forma y densidad de la distribución fuente, incluso sin verla directamente. Esta es la base de técnicas de medida indirecta en física experimental.

## Orden de magnitud

En cables de transmisión eléctrica doméstica (distancias de centímetros, [[lambda]] del orden de nanocoulombios/metro), el campo [[E]] en el entorno inmediato es del orden de kilovoltios/metro. En cables de alta tensión (kV sobre líneas de transmisión), [[E]] puede superar los megavoltios/metro cerca del conductor, lo que explica el efecto corona y la ionización del aire.

Para un plano cargado con [[sigma]] del orden de nanocoulombios/metro cuadrado (situación típica de laboratorio), el campo vale pocos cientos de voltios/metro, comparable al campo atmosférico terrestre en días de tormenta. Un resultado de [[E]] superior a los megavoltios/metro en geometrías de laboratorio es una señal clara de error de potencia de diez en los datos.

## Método de resolución personalizado

El procedimiento estándar para calcular [[E]] de una distribución continua sigue estos pasos:

1. **Identificar la geometría y la densidad**: determinar si la distribución es lineal ([[lambda]]), superficial ([[sigma]]) o volumétrica ([[rho_vol]]), y si es uniforme.
2. **Identificar la simetría**: buscar ejes o planos de simetría que permitan cancelar componentes de [[dE]] antes de integrar.
3. **Decidir el método**: si hay simetría cilíndrica, esférica o plana perfecta, evaluar si la ley de Gauss es más eficiente. Si no hay simetría, integrar [[dE]] directamente.
4. **Expresar [[r_dist]] en función de la variable de integración**: parametrizar la distribución (longitud de arco, ángulo, coordenada axial) de modo que [[r_dist]] quede como función integrable.
5. **Integrar los componentes supervivientes**: solo los que no se cancelaron por simetría.
6. **Verificar el resultado**: comprobar la ley de decaimiento (1/r², 1/r o constante) y el orden de magnitud.

## Casos especiales y ejemplo extendido

**Anillo cargado en el eje.** Un anillo de radio \`a\` con carga total \`Q\` produce en su eje, a distancia \`z\` del centro, un campo estrictamente axial. Las componentes radiales se cancelan por simetría del anillo. El campo resultante tiene módulo que crece desde cero (en el centro del anillo) hasta un máximo a distancia \`z\` del orden de \`a\`, y luego decrece. Lejos del anillo, el campo se aproxima al de una carga puntual.

**Disco cargado.** Un disco de radio finito con [[sigma]] uniforme produce en su eje un campo que puede calcularse integrando el resultado del anillo para radios de cero hasta el radio del disco. Lejos del disco, el campo tiende al de una carga puntual. Muy cerca del disco y para \`R\` mucho mayor que la distancia axial, el campo se aproxima al del plano infinito: [[sigma]] dividido entre dos veces la permitividad del vacío.

> [!NOTE]
> El paso del anillo al disco es un ejemplo pedagógico clave: una integral sobre otra integral. Es el mismo principio de descomponer una distribución 2D en "rodajas" 1D y sumar. Esta estrategia es general y aplicable a cualquier distribución con simetría axial.

## Preguntas reales del alumno

**¿Por qué no puedo sumar los módulos de los campos parciales?** Porque [[dE]] es un vector. Si dos elementos de carga están a la misma distancia del punto campo pero en lados opuestos de la distribución, sus contribuciones apuntan en sentidos parcialmente opuestos. Sumar módulos sobreestima siempre el campo real.

**¿Cuándo el hilo infinito es una buena aproximación?** Cuando la distancia [[r_dist]] al cable es mucho menor que la longitud del cable. En la práctica, si [[r_dist]] es inferior al diez por ciento de la longitud total, el error del modelo de hilo infinito es inferior al uno por ciento.

**¿Cómo es posible que el campo del plano no decaiga?** Porque por cada elemento dq que genera un campo que "se escapa" hacia afuera, hay infinitos elementos del plano infinito que compensan con sus contribuciones paralelas al plano, dejando siempre la misma componente perpendicular neta. Es una consecuencia de la extensión infinita: la fuente "rodea" al observador en todas las direcciones del plano.

**¿Qué ocurre si la distribución no es uniforme?** Si [[lambda]], [[sigma]] o [[rho_vol]] varían en el espacio, el integrando lleva esa variación como factor adicional. La integral ya no tiene necesariamente forma cerrada y suele resolverse numéricamente. Los métodos de elementos finitos y de contorno son las herramientas estándar para este caso.

## Conexiones transversales y rutas de estudio

Este leaf es el puente entre el campo de la carga puntual y las configuraciones reales de la electrostática. El estudio de condensadores ([leaf:fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores]) requiere dominar el campo del plano infinito. El potencial eléctrico se obtiene integrando [[E]] a lo largo de una trayectoria, y su cálculo para distribuciones continuas sigue la misma lógica integral que aquí se desarrolla.

La ley de Gauss, que da acceso directo a [[E]] sin integrar [[dE]], es el paso siguiente natural para geometrías con simetría esférica o cilíndrica. En electrodinámica, el mismo principio de superposición integral se extiende a distribuciones de corriente para calcular el campo magnético mediante la ley de Biot-Savart, que es la contraparte magnética de la integral de [[dE]].

## Síntesis final

El campo [[E]] de una distribución continua de carga es la integral vectorial de contribuciones diferenciales [[dE]], cada una calculada como si \`dq\` fuera una carga puntual a distancia [[r_dist]]. La simetría de la distribución determina qué componentes se cancelan antes de integrar. El resultado revela la ley de decaimiento del campo: inversamente proporcional a [[r_dist]] al cuadrado para carga puntual, a [[r_dist]] para hilo infinito, y constante para plano infinito. Dominar este método es dominar la construcción del campo eléctrico desde la geometría de la fuente.
`;export{e as default};
