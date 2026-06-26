const e=`# Modos en placas y membranas

## Contexto conceptual

Cuando una placa metálica o una membrana de tambor vibra libremente, no lo hace de forma caótica. Su movimiento se descompone en patrones espaciales bien definidos llamados **modos normales**, cada uno con una frecuencia propia y una distribución característica de nodos y antinodos. Entender estos modos es la clave para predecir cuándo una estructura resonará, cómo se comportará bajo excitación acústica y cómo puede diseñarse para absorber o rechazar determinadas frecuencias.

Este leaf extiende al dominio bidimensional los conceptos vistos en la cuerda vibrante y en los modos de barras. Ahora la estructura tiene dos dimensiones espaciales independientes, aparece un doble índice modal (m, n) y los nodos forman líneas cruzadas. La geometría y el material determinan conjuntamente el espectro, y la distinción entre placa elástica y membrana tensada conduce a comportamientos físicamente distintos.

## 🟢 Nivel esencial

Una **placa** es una estructura sólida bidimensional que se resiste a doblarse gracias a su rigidez elástica. Una **membrana** es una lámina tan delgada y flexible que su capacidad de vibrar proviene exclusivamente de la tensión con que está estirada, sin rigidez propia.

Cuando se perturba cualquiera de estas estructuras, aparecen **líneas nodales**: lugares geométricos donde la superficie no se mueve. Entre dos líneas nodales consecutivas, la superficie oscila hacia arriba y hacia abajo de forma coordinada. El conjunto de líneas nodales y la frecuencia asociada definen un **modo normal de vibración**.

Los modos se etiquetan con dos enteros positivos, m y n, que cuentan cuántos semiperíodos completos caben en cada dirección. El modo más simple tiene una sola burbuja de vibración en cada dirección (un semiperíodo en x, un semiperíodo en y) y es el **modo fundamental**. Modos de índice mayor tienen líneas nodales más finas y frecuencias más altas.

La frecuencia de cada modo depende, fundamentalmente, de cuán rígida o cuán tensada está la estructura, de cuánto pesa por unidad de área, y de sus dimensiones. Una placa más grande, más blanda o más pesada resuena a frecuencias más bajas; una más pequeña, más dura o más ligera lo hace a frecuencias más altas.

> [!NOTE]
> Los modos de una placa cuadrada son especiales: los pares (m,n) y (n,m) tienen exactamente la misma frecuencia. Esto se llama **degeneración modal** y produce patrones nodales combinados muy ricos visualmente.

## 🔵 Nivel formal

El **parámetro central de la placa** es su rigidez a la flexión [[D_placa]], que combina el módulo de Young [[E_young]], el espesor [[h_placa]] y el coeficiente de Poisson [[nu_p]]:

{{f:rigidez_flexion_placa}}

El cubo del espesor convierte este parámetro en altamente sensible al grosor: doblar [[h_placa]] multiplica [[D_placa]] por ocho. La densidad superficial [[rho_s]] se obtiene multiplicando la densidad volumétrica [[rho_vol]] por el espesor:

{{f:densidad_superficial_placa}}

Con [[D_placa]] y [[rho_s]] disponibles, la frecuencia del modo (m,n) para una **placa rectangular simplemente apoyada** es:

{{f:frecuencia_modal_placa}}

Los enteros m y n deben ser al menos 1. El modo fundamental (1,1) tiene la menor frecuencia del espectro. La fórmula muestra que [[f_mn]] crece con el cuadrado de los índices modales, lo que produce una densidad de modos que aumenta rápidamente con la frecuencia.

Para una **membrana rectangular tensada** el mecanismo restaurador no es la rigidez a la flexión sino la tensión superficial [[T_mem]], y la inercia la aporta su densidad superficial [[rho_mem]]. La frecuencia modal adopta la forma:

{{f:frecuencia_modal_membrana}}

La estructura matemática es análoga a la placa pero con [[T_mem]]/[[rho_mem]] en lugar de [[D_placa]]/[[rho_s]]. La diferencia física es que en la membrana [[T_mem]] puede modificarse externamente (afinado), mientras que en la placa los parámetros son fijos una vez fabricada.

> [!TIP]
> Para distinguir si un sistema se comporta más como placa o como membrana, calcular el cociente entre la rigidez a la flexión y el producto de la tensión por el cuadrado de la longitud. Si ese cociente es mucho menor que 1, el sistema es membrana; si es mayor que 1, es placa.

## 🔴 Nivel estructural

La ecuación diferencial gobernante de la placa de Kirchhoff involucra el **bilaplaciano** del desplazamiento transversal, mientras que la de la membrana solo involucra el laplaciano ordinario. Esta diferencia matemática tiene consecuencias físicas profundas.

En la **placa**, las frecuencias modales escalan como el cuadrado de los números de onda modales, lo que produce una dispersión de velocidad de grupo: las ondas de flexión de alta frecuencia se propagan más rápido que las de baja frecuencia. En la **membrana ideal**, no hay dispersión: la velocidad de propagación es constante e igual a la raíz del cociente [[T_mem]]/[[rho_mem]], independientemente de la frecuencia.

Esta distinción tiene importancia práctica en el **diseño acústico**. Una placa emite sonido de forma eficiente a sus frecuencias modales y atenúa las intermedias; una membrana tiene un espectro modal más uniforme porque sus modos están más equiespaciados en frecuencia para las relaciones de aspecto rectangulares más comunes.

El fenómeno de **degeneración modal** en geometrías cuadradas o con razones de aspecto racionales merece atención especial. Cuando dos modos tienen idéntica frecuencia, cualquier superposición lineal de ambos también es solución. Los **patrones de Chladni**, observados con arena sobre una placa vibrante, son estas superposiciones de modos degenerados.

Las condiciones de contorno modifican los coeficientes numéricos de la fórmula modal pero no la estructura funcional. Un borde empotrado restringe también la pendiente de la superficie, lo que aumenta las frecuencias modales respecto al borde simplemente apoyado. Para bordes libres, la frecuencia del modo fundamental puede bajar considerablemente.

> [!WARNING]
> El modelo de Kirchhoff falla cuando el espesor [[h_placa]] es comparable a las dimensiones en plano. En ese caso, la deformación por cortante reduce las frecuencias modales de forma significativa y debe usarse la teoría de Mindlin.

## Interpretación física profunda

El espectro modal de una placa o membrana es su **huella dactilar vibratoria**. Cuando una fuente externa coincide con uno de los modos, la estructura absorbe energía de forma eficiente y puede amplificarla si el amortiguamiento es bajo.

El papel de [[D_placa]] y [[rho_s]] no es simétrico: [[D_placa]] determina la escala absoluta de frecuencias, mientras que los índices modales y las dimensiones determinan la distribución relativa. Aumentar [[D_placa]] al doble eleva todas las frecuencias por el factor raíz de dos, sin cambiar su proporción relativa. Esto contrasta con el efecto de las dimensiones: cambiar la razón de aspecto [[a_dim]]/[[b_dim]] redistribuye los modos y puede hacer que modos antes bien separados colisionen o se alejen.

La física de la membrana hace de la tensión [[T_mem]] el parámetro de afinado por excelencia: es el único que puede modificarse sin cambiar el instrumento. En percusión, el afinado preciso se logra ajustando la tensión en diferentes puntos del parche para compensar la desigualdad de los modos y obtener la sonoridad deseada.

## Orden de magnitud

Para una placa de acero de 0.3 m × 0.2 m × 2 mm, con [[E_young]] de 210 GPa, [[rho_vol]] de 7850 kg/m³ y [[nu_p]] de 0.3, la rigidez [[D_placa]] es aproximadamente 153 N·m y la densidad superficial [[rho_s]] es aproximadamente 15.7 kg/m². El modo fundamental (1,1) cae en torno a los 160 Hz, en el rango audible. El modo (2,2) está ya por encima de 600 Hz.

Para una membrana de mylar de 0.35 m de diámetro (aprox.) con [[T_mem]] de 1500 N/m y [[rho_mem]] de 0.2 kg/m², el modo fundamental rectangular equivalente estaría en torno a los 90–110 Hz, lo que corresponde a la frecuencia fundamental de un parche de batería mediano.

Una frecuencia modal por encima de 20 kHz para una placa de tamaño decimétrico es una señal de alarma: probablemente el módulo [[E_young]] se ha introducido en GPa en lugar de Pa, cometiendo un error de factor 10⁹.

## Método de resolución personalizado

Para calcular [[f_mn]] de una placa, el procedimiento es:

1. Identificar el material y obtener [[E_young]], [[rho_vol]] y [[nu_p]].
2. Calcular [[rho_s]] multiplicando [[rho_vol]] por [[h_placa]].
3. Calcular [[D_placa]] con la fórmula de rigidez a la flexión.
4. Sustituir [[D_placa]], [[rho_s]], [[a_dim]], [[b_dim]] y los índices m, n elegidos en la fórmula de [[f_mn]].
5. Verificar que el modo (1,1) resulta la frecuencia más baja.

Para una membrana:

1. Medir o estimar [[T_mem]] y [[rho_mem]].
2. Calcular la velocidad de onda de la membrana como la raíz del cociente [[T_mem]]/[[rho_mem]].
3. Sustituir en la fórmula de [[f_mn]] con los índices y dimensiones deseados.

Una señal de error en los cálculos de placa: si [[f_mn]] resulta en kHz para dimensiones decimetricas, revisar las unidades de [[E_young]] y [[D_placa]].

## Casos especiales y ejemplo extendido

**Placa cuadrada:** cuando [[a_dim]] y [[b_dim]] son iguales, los modos (m,n) y (n,m) tienen idéntica frecuencia. Una fuente puntual puede excitar ambos a la vez y producir patrones nodales diagonales que son combinaciones lineales.

**Membrana circular:** para tambores, membranas de micrófono y tímpanos, la geometría relevante es circular. Los modos no se describen con índices (m,n) rectangulares sino con funciones de Bessel, y las líneas nodales son círculos y diámetros. Las frecuencias modales ya no son múltiplos racionales entre sí, lo que produce el timbre específico de los instrumentos de percusión. Este caso se sale del modelo rectangular aquí presentado, pero es la extensión natural del mismo principio.

## Preguntas reales del alumno

**¿Por qué los modos de una placa cuadrada tienen frecuencias iguales para (m,n) y (n,m)?**
Porque la fórmula de [[f_mn]] contiene los términos (m/a)² y (n/b)² de forma simétrica. Si [[a_dim]] y [[b_dim]] son iguales, intercambiar m y n no cambia el resultado. La simetría geométrica implica degeneración del espectro.

**¿Por qué una membrana de batería suena diferente a una de micrófono si ambas están fabricadas de mylar?**
Porque las dimensiones, la tensión [[T_mem]] y la densidad superficial [[rho_mem]] son muy diferentes. La membrana de micrófono es diminuta y muy tensada, con modos en el rango de varios kHz. La membrana de batería es grande y menos tensada, con modos en el rango de decenas a centenares de Hz.

**¿Tiene sentido hablar del modo (0,1) o del (0,0)?**
No en el modelo de placa o membrana con bordes fijos. Los índices deben ser al menos 1 porque el modo de índice cero implica amplitud constante en esa dirección (sin nodos), incompatible con condiciones de borde de desplazamiento nulo. El modo (0,0) correspondería a traslación rígida.

**¿Cómo afecta el amortiguamiento a los modos?**
El modelo presentado es conservativo (sin amortiguamiento). En presencia de amortiguamiento, las frecuencias de resonancia se desplazan ligeramente hacia abajo y los picos del espectro se ensanchan. La frecuencia modal calculada sin amortiguamiento es una buena aproximación mientras el factor de amortiguamiento sea inferior al 20 %.

## Conexiones transversales y rutas de estudio

Los modos en placas y membranas conectan directamente con el leaf de [resonancia y modos en barras](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/resonancia-y-modos-en-barras), que trata el caso unidimensional del que este leaf es la extensión natural. La diferencia es la aparición de un segundo índice modal y la distinción entre placa (rigidez) y membrana (tensión).

La comprensión de la dispersión de ondas de flexión en placa conecta con el leaf de [dispersión y atenuación en sólidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos). Para la aplicación práctica al control de vibraciones, el leaf de [aplicaciones ultrasonidos y ensayos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos) es la continuación natural.

## Síntesis final

Los modos normales en placas y membranas son patrones vibratorios bidimensionales con frecuencias propias determinadas por la geometría y el material. La distinción entre placa (gobernada por [[D_placa]]) y membrana (gobernada por [[T_mem]]) refleja dos mecanismos físicos diferentes: rigidez elástica frente a tensión de pretensado. En ambos casos, el espectro modal es denso y crece con los índices (m,n), y la comprensión de la degeneración modal explica la complejidad de los patrones nodales observados experimentalmente.
`;export{e as default};
