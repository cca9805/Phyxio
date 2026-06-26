# Isobarico

## Contexto conceptual

El **proceso isobárico** es uno de los cuatro procesos termodinámicos canónicos del gas ideal, junto con el isotérmico, el isocórico y el adiabático. Su característica definitoria es simple pero poderosa: la **presión permanece constante** durante toda la transformación. Esto ocurre, por ejemplo, cuando un gas está contenido en un cilindro con un émbolo libre que se mueve sin fricción bajo la misma presión atmosférica: cualquier calor que se añade o se extrae hace que el gas cambie de volumen sin alterar la presión.

La importancia del proceso isobárico trasciende el laboratorio. Los motores de combustión interna trabajan, en parte, bajo condiciones aproximadamente isobáricas durante la fase de expansión de los gases quemados. Los ciclos de refrigeración, los procesos de calefacción doméstica y los sistemas de vapor industriales operan frecuentemente a presión constante. Comprender cómo se distribuye la energía en este proceso es esencial para diseñar máquinas térmicas eficientes y para interpretar diagramas presión-volumen reales.

Dentro del árbol de [procesos termodinámicos](leaf:física-clasica/termodinámica/gases-y-modelos/procesos-termodinámicos/isotérmico), el proceso isobárico ocupa un lugar central porque es el único en que tanto la temperatura como el volumen cambian simultáneamente mientras la presión se mantiene fija. Esto lo diferencia del isotérmico (T constante), del isocórico (V constante) y del adiabático (Q = 0).

## 🟢 Nivel esencial

Imagina un globo inflado que se calienta bajo el sol. A medida que absorbe calor, el gas interior se dilata, pero la presión dentro del globo no cambia porque el material elástico se adapta. Ese es un proceso aproximadamente isobárico: **el gas recibe calor, se expande y su temperatura sube**, todo ello a presión constante.

La intuición clave es que **calentar un gas a presión constante produce dos efectos simultáneos**: el gas se expande y realiza trabajo sobre el entorno, y además su temperatura aumenta porque su energía interna crece. A diferencia del proceso adiabático, aquí **sí hay intercambio de calor**; a diferencia del isotérmico, **la temperatura sí cambia**. El proceso isobárico es, en ese sentido, el más rico en intercambios energéticos.

> [!NOTE]
> La magnitud que permanece fija es [[p]]. En el diagrama pV, el proceso se representa como una **recta horizontal**, la más sencilla posible, a la altura de la presión constante.

## 🔵 Nivel formal

La ecuación que gobierna el trabajo en un proceso isobárico es la más directa de todos los procesos termodinámicos. Dado que [[p]] no varía, la integral del trabajo se reduce a:

{{f:trabajo_isobarico}}

El producto de la presión constante por la variación de volumen [[DeltaV]] = [[V2]] - [[V1]] da directamente el trabajo intercambiado. Si [[DeltaV]] > 0 (expansión), [[W]] > 0 y el gas entrega energía mecánica al entorno. Si [[DeltaV]] < 0 (compresión), [[W]] < 0 y el entorno realiza trabajo sobre el gas.

La relación entre temperatura y volumen a presión constante la establece la **ley de Gay-Lussac**, consecuencia directa de la ecuación de estado del gas ideal (producto p·V proporcional a T) con \(p\) constante:

{{f:ley_gay_lussac}}

Esta proporción directa entre el volumen y la temperatura absoluta tiene una consecuencia profunda: **duplicar [[T1]] en la escala kelvin duplica [[V1]]**. Cualquier cambio de temperatura produce un cambio proporcional de volumen, y viceversa. Esta es la razón por la que el proceso isobárico aparece como una recta en el diagrama \(V\)-\(T\).

El balance energético completo lo establece el primer principio aplicado al proceso isobárico:

{{f:primer_principio_isobarico}}

A diferencia del proceso adiabático (donde [[Q]] = 0 y [[DeltaU]] = -[[W]]), aquí [[Q]] no es nulo. El calor absorbido se distribuye entre el aumento de energía interna y el trabajo realizado. Para gas ideal, [[DeltaU]] depende solo de [[DeltaT]], independientemente de la presión.

## 🔴 Nivel estructural

La estructura profunda del proceso isobárico reside en la **partición del calor** entre trabajo mecánico y energía interna. Esta partición está codificada en la capacidad calorífica molar a presión constante \(C_p\), que es siempre mayor que \(C_V\) (capacidad a volumen constante). La diferencia \(C_p - C_V\) es igual a \(R\) (relación de Mayer) y expresa exactamente que **a presión constante, parte del calor se invierte en el trabajo de expansión**, algo que no ocurre en un proceso isocórico.

Para un gas ideal monoatómico, \(C_V\) vale \(\frac{3}{2}R\) y \(C_p\) vale \(\frac{5}{2}R\), de modo que solo el 60% del calor absorbido va a energía interna y el 40% restante se convierte en trabajo mecánico. Para un gas diatómico, la proporción cambia: \(C_V\) vale \(\frac{5}{2}R\) y \(C_p\) vale \(\frac{7}{2}R\), con un reparto más favorable al trabajo.

> [!WARNING]
> **Confusión clásica**: presión constante no significa temperatura constante. La temperatura sube porque la energía interna del gas ideal depende exclusivamente de \(T\), y si se absorbe calor en exceso del trabajo realizado, la temperatura necesariamente aumenta. La confusión con el proceso isotérmico es el error más frecuente.

El diagrama pV del proceso isobárico es una **línea horizontal**: el área del rectángulo formado entre [[V1]], [[V2]] y [[p]] es exactamente [[W]]. Esta geometría simple tiene una consecuencia importante: de todos los procesos que conectan el mismo estado inicial con un estado final de igual volumen, el proceso isobárico es el que **más trabajo produce** (en expansión), porque la presión se mantiene alta durante todo el recorrido, mientras que en el proceso adiabático la presión cae progresivamente.

Los **límites de validez** del modelo isobárico son específicos. El proceso deja de ser isobárico si la presión varía (proceso de presión variable, como el politrópico). El modelo de gas ideal falla a altas presiones (en torno a 10 MPa o superiores) o cerca del punto de licuefacción. La hipótesis de proceso cuasiestático falla en procesos muy rápidos, donde la presión no es uniforme en el interior del recipiente.

> [!TIP]
> Una señal de fallo del modelo es observar que la recta en el diagrama pV no es perfectamente horizontal, o que los datos de temperatura y volumen no siguen la proporción [[V1]]/[[T1]] = [[V2]]/[[T2]]. Cualquier desviación apreciable indica que la presión no fue realmente constante.

La conexión con el **ciclo de Brayton** (ciclo de las turbinas de gas) ilustra la relevancia estructural: dos de sus cuatro etapas son isobáricas, la de combustión (expansión isobárica a alta presión) y la de enfriamiento (compresión isobárica a baja presión). Calcular el trabajo y el calor de cada etapa isobárica es el primer paso para obtener el rendimiento del ciclo completo.

## Interpretación física profunda

El proceso isobárico revela algo fundamental sobre la naturaleza del calor: **no todo el calor que absorbe un gas se convierte en energía interna**. En un recipiente rígido (proceso isocórico), sí es así: no hay trabajo y [[Q]] = [[DeltaU]]. Pero cuando el gas puede expandirse a presión constante, parte del calor "escapa" como trabajo mecánico. Esta es precisamente la razón por la que \(C_p\) es mayor que \(C_V\): a presión constante se necesita más calor para subir la temperatura un grado, porque parte de ese calor se gasta en empujar el émbolo.

La **causalidad física** es instructiva: la presión constante impuesta por el entorno obliga al volumen a cambiar en proporción exacta a la temperatura. La condición cuasiestática garantiza el equilibrio mecánico en todo momento.


## Orden de magnitud

Con presión atmosférica (\(10^5\) Pa) y [[DeltaV]] de \(10^{-3}\) m³, el trabajo isobárico es [[W]] ≈ 100 J, frente a una energía interna de un mol diatómico a 300 K de ∼6250 J (el trabajo es solo el 1,6%).


> [!NOTE]
> Regla práctica: un mol de gas ideal a 300 K expandiéndose de 1 L a 2 L a presión constante realiza [[W]] ≈ 100 J y absorbe [[Q]] ≈ 250 J (para gas diatómico), de los cuales [[DeltaU]] ≈ 150 J va a energía interna.

## Método de resolución personalizado

Para resolver problemas de proceso isobárico con éxito, conviene seguir esta secuencia:

1. **Identificar la presión constante** [[p]] y los estados inicial y final en términos de dos de las tres variables: [[V1]], [[V2]], [[T1]], [[T2]]. Si faltan datos, usar la ley de Gay-Lussac para deducir la variable desconocida.
2. **Calcular [[DeltaV]]** = [[V2]] - [[V1]] y determinar si el proceso es expansión ([[DeltaV]] > 0) o compresión ([[DeltaV]] < 0).
3. **Calcular [[W]]** = [[p]] · [[DeltaV]]. Este es el paso central; no usar fórmulas de otros procesos.
4. **Calcular [[DeltaU]]** si se conoce el calor [[Q]] mediante el primer principio, o usando [[DeltaU]] = \(n C_V \Delta T\) para gas ideal.
5. **Verificar el balance** [[Q]] = [[DeltaU]] + [[W]] para detectar errores de cálculo.
6. **Dibujar el diagrama pV**: trazar la línea horizontal entre ([[V1]], [[p]]) y ([[V2]], [[p]]) y verificar que el área del rectángulo coincida con [[W]].

La distinción crítica entre **resolución simbólica** y **sustitución numérica** es especialmente útil aquí: trabajar primero con [[W]] = [[p]] · [[DeltaV]] en símbolos permite detectar inconsistencias de signo antes de introducir números.

## Casos especiales y ejemplo extendido

**Caso 1 — Proceso isobárico en un ciclo**: el ciclo de Brayton incluye dos etapas isobáricas. El trabajo neto depende de la diferencia entre los trabajos de esas etapas.

**Caso 2 — Gas real con \(C_p\) variable**: si [[DeltaT]] es grande, el coeficiente \(\gamma\) puede cambiar en gases poliatómicos. El modelo con \(C_p\) constante sobreestima [[Q]] y [[DeltaU]].

**Caso 3 — Cambio de fase a presión constante**: durante la ebullición a 1 atm, el volumen cambia pero la temperatura no. [[DeltaU]] = [[Q]] - [[W]] sigue siendo válida, pero [[DeltaU]] = \(n C_V \Delta T\) no aplica porque la temperatura no cambia.

## Preguntas reales del alumno

**¿Por qué [[Q]] > [[W]] en expansión isobárica?** Porque parte del calor aumenta la energía interna: la fracción [[W]]/[[Q]] (cociente \(R/C_p\)) es siempre menor que 1.

**¿Diferencia con el proceso isotérmico en el diagrama pV?** En el isotérmico la trayectoria es una hipérbola (\(p \cdot V\) constante); en el isobárico es una recta horizontal. El trabajo isobárico (área del rectángulo) es mayor que el isotérmico entre los mismos volúmenes.

**¿Puede haber proceso isobárico sin cambio de temperatura?** Solo con cambio de fase. En gas ideal sin cambio de fase, Gay-Lussac garantiza que volumen y temperatura cambian en la misma proporción.

## Conexiones transversales y rutas de estudio

El proceso isobárico se complementa con el [proceso isocórico](leaf:física-clasica/termodinámica/gases-y-modelos/procesos-termodinámicos/isocorico) (sin trabajo) y el [proceso isotérmico](leaf:física-clasica/termodinámica/gases-y-modelos/procesos-termodinámicos/isotérmico) (temperatura constante). Comparar los tres en el mismo diagrama pV es una de las representaciones más instructivas de la termodinámica del gas ideal.

El paso natural después es el [ciclo de Brayton](leaf:física-clasica/termodinámica/ciclos/ciclo-brayton), donde las etapas isobáricas son fundamentales para calcular el rendimiento.

La relación de Mayer (\(C_p - C_V\) igual a \(R\)) conecta el proceso isobárico con la teoría cinética de los gases: la razón por la que \(C_p\) supera a \(C_V\) es exactamente el trabajo extra que hay que realizar a presión constante para expandir el gas. Esto no es un accidente matemático, sino una consecuencia directa de la ecuación de estado ideal.

## Síntesis final

El proceso isobárico es la transformación en que **la presión se mantiene constante** mientras el gas intercambia calor con el entorno, cambia su volumen y modifica su temperatura. El trabajo mecánico es el producto directo de esa presión constante por la variación de volumen, y el balance energético del primer principio distribuye el calor absorbido entre trabajo y energía interna. La ley de Gay-Lussac garantiza la proporcionalidad directa entre volumen y temperatura absoluta, haciendo del proceso isobárico el más transparente para visualizar la conexión entre calor, trabajo y temperatura en el gas ideal.
