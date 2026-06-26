const a=`# Errores frecuentes en el estudio de condensadores

## Errores conceptuales

### Error 1: Creer que la capacidad [[C]] cambia cuando cambia la tensión [[V]]

**Por qué parece correcto**

El alumno observa que al aumentar la tensión, también aumenta la carga [[Q]] almacenada. Por analogía con la ley de Ohm (donde la corriente cambia con la tensión y con la resistencia), concluye que la capacidad también debe cambiar, porque "algo tiene que cambiar en el condensador" para almacenar más carga.

**Por qué es incorrecto**

La capacidad [[C]] es una propiedad geométrica y material del condensador: depende del área de las armaduras, de la separación y de la permitividad del dieléctrico. Ninguno de esos factores cambia al variar la tensión aplicada (en el modelo ideal). Lo único que cambia es [[Q]], que aumenta proporcionalmente con [[V]] para [[C]] constante.

**Señal de detección**

El alumno calcula el cociente [[Q]]/[[V]] para dos tensiones diferentes y obtiene valores distintos, luego afirma que [[C]] del condensador cambió. Si los valores obtenidos son idénticos (como deben ser), el error ya no está presente.

**Corrección conceptual**

La capacidad [[C]] es constante para un condensador dado en régimen lineal. La relación entre [[Q]], [[C]] y [[V]] es lineal: [[Q]] varía con [[V]], pero el coeficiente de proporcionalidad [[C]] es fijo. Solo cambia [[C]] si se modifica físicamente el condensador (área, separación, dieléctrico).

**Mini-ejemplo de contraste**

Un condensador de 10 µF se carga primero a 5 V (carga resultante: 50 µC) y luego a 10 V (carga resultante: 100 µC). Si el alumno aplica la idea errónea, calcularía el cociente carga/tensión en ambos casos y obtendría 10 µF en los dos —la misma capacidad, lo que desmiente la creencia de que cambió.

---

### Error 2: Suponer que ambas armaduras acumulan carga positiva

**Por qué parece correcto**

La definición de [[C]] usa [[Q]] como un valor positivo. El alumno interpreta que "el condensador tiene carga Q" en toda su estructura, sin distinguir entre las dos armaduras. Además, la batería "mete" carga en el circuito, lo que sugiere que toda la carga va al condensador de forma uniforme.

**Por qué es incorrecto**

En un condensador, una armadura acumula +Q y la opuesta acumula −Q. La carga neta del condensador completo es siempre cero. La batería no "crea" carga: simplemente la transfiere de una armadura a la otra a través del circuito externo. El campo eléctrico entre las armaduras existe precisamente porque las cargas son opuestas.

**Señal de detección**

El alumno calcula la carga total del condensador como 2Q en vez de reconocer que la carga neta es cero. O bien aplica la fuerza entre cargas suponiendo que ambas son positivas y obtiene repulsión entre armaduras en lugar de atracción.

**Corrección conceptual**

Una armadura tiene carga +Q y la otra tiene −Q. La magnitud Q (positiva) describe cuánta carga se ha separado, no la carga total. La atracción entre cargas opuestas es precisamente lo que mantiene el campo eléctrico y almacena la energía.

**Mini-ejemplo de contraste**

Si ambas armaduras tuvieran +Q, se repelerían mutuamente y no existiría campo eléctrico concentrado entre ellas. El condensador no podría almacenar energía —lo que contradice su funcionamiento observable en cualquier circuito.

## Errores de modelo

### Error 3: Aplicar la fórmula de condensador plano fuera del régimen de campo uniforme

**Por qué parece correcto**

La fórmula de [[C_plana]] en función de [[epsilon]], el área y la separación parece una expresión universal para cualquier condensador de placas planas. El alumno la aplica para geometrías donde la separación d es comparable a las dimensiones laterales de las placas, porque la fórmula no incluye ninguna condición explícita sobre esa proporción.

**Por qué es incorrecto**

La fórmula solo es válida cuando \\(d \\ll \\sqrt{A}\\), condición que garantiza que el campo eléctrico sea uniforme entre las armaduras. Cuando d no es despreciable respecto a las dimensiones de las placas, aparecen **efectos de borde**: las líneas de campo se curvan en los extremos y la capacidad real es mayor que la calculada con la fórmula. Para geometrías no planas (cilíndricas, esféricas), se aplican fórmulas distintas.

**Señal de detección**

El alumno trabaja con un condensador donde d es solo 5 o 10 veces menor que la longitud de la placa (no 100 veces), y obtiene un resultado que difiere del valor medido experimentalmente en más de un 5–10%.

**Corrección conceptual**

Antes de aplicar la fórmula de [[C_plana]] con [[epsilon]], el área y la separación, verificar que d es al menos 10–20 veces menor que la dimensión lateral menor de la placa. Si no se cumple, la fórmula subestima la capacidad real y debe emplearse un modelo con corrección de borde o una simulación numérica.

**Mini-ejemplo de contraste**

Placas cuadradas de 1 cm de lado separadas 5 mm: la relación separación/lado es 0.5, lejos del régimen de campo uniforme. Aplicando la fórmula de condensador plano con ε₀, área y separación se obtienen aproximadamente 17.7 pF. Las mediciones experimentales en estas proporciones dan valores hasta un 30% mayores por los efectos de borde.

## Errores matemáticos

### Error 4: Calcular la energía sin el factor 1/2

**Por qué parece correcto**

Al trabajar con otras magnitudes cuadráticas —la energía cinética, que también lleva un factor 1/2 y un cuadrado de velocidad, o la energía potencial gravitatoria— el alumno recuerda vagamente que "la energía tiene un cuadrado" pero olvida o ignora el factor 1/2, que puede parecer arbitrario o decorativo.

**Por qué es incorrecto**

El factor 1/2 en [[E_cap]] no es opcional: surge de integrar el trabajo de carga desde tensión cero hasta el valor final. Durante la carga, la tensión va creciendo progresivamente y el trabajo en cada instante depende de la carga acumulada dividida por [[C]]; la integral total da [[Q]]²/(2·[[C]]). Omitir el 1/2 dobla la energía calculada respecto a la real.

**Señal de detección**

Al calcular la energía para un condensador de 100 µF cargado a 10 V: aplicando la fórmula con el factor 1/2, el resultado correcto es 5 mJ. Si el alumno obtiene 10 mJ, ha omitido el factor 1/2.

**Corrección conceptual**

La fórmula correcta de [[E_cap]] incluye el factor 1/2 multiplicando el producto de [[C]] por [[V]]². Existen tres expresiones equivalentes: con [[C]] y [[V]], con [[Q]] y [[V]], o con [[Q]] y [[C]]. El factor 1/2 refleja que la tensión promedio durante la carga es la mitad del valor final.

**Mini-ejemplo de contraste**

Un condensador de 1000 µF a 230 V: aplicando la fórmula correcta con el factor 1/2 se obtienen aproximadamente 26.45 J. Sin el factor 1/2 el resultado sería 52.9 J. La diferencia es un factor 2: en una aplicación de almacenamiento de energía representa el doble o la mitad de la energía disponible.

## Errores de interpretación

### Error 5: Interpretar que la energía del condensador "está en las cargas" en lugar de "estar en el campo"

**Por qué parece correcto**

La energía se almacenó porque la batería movió cargas desde una armadura a la otra. El alumno asocia la energía almacenada con el movimiento de esas cargas y concluye que "la energía está en las cargas acumuladas en las armaduras". Esta interpretación parece consistente porque al descargar, las cargas se mueven y liberan energía.

**Por qué es incorrecto**

La energía no reside en las cargas sino en el **campo eléctrico** entre las armaduras. La densidad de energía volumétrica es proporcional al cuadrado del campo eléctrico y a la permitividad [[epsilon]], distribuida en el espacio entre las placas. Si se separan las armaduras con el condensador cargado y desconectado, la energía [[E_cap]] aumenta aunque no se haya añadido ni retirado carga —porque el campo eléctrico ocupa ahora un volumen mayor.

**Señal de detección**

El alumno no puede explicar por qué insertar un dieléctrico en un condensador desconectado reduce la tensión [[V]] (y la energía) sin que ninguna carga haya escapado. La perspectiva de "energía en el campo" explica directamente: el dieléctrico reduce el campo eléctrico, lo que reduce la densidad de energía proporcional a [[epsilon]] y al cuadrado del campo.

**Corrección conceptual**

La energía se almacena en el campo eléctrico entre las armaduras, con una densidad volumétrica proporcional a [[epsilon]] y al cuadrado del campo eléctrico (en J/m³). Las cargas en las armaduras son la fuente del campo, pero la energía está distribuida en el espacio, no localizada en las superficies conductoras. Esta perspectiva es fundamental para entender los condensadores con dieléctrico y las ondas electromagnéticas.

**Mini-ejemplo de contraste**

Si la energía estuviera en las cargas, al insertar un dieléctrico sin mover ninguna carga la energía no debería cambiar. Sin embargo, al insertar un dieléctrico de εᵣ = 4 en un condensador desconectado, la tensión cae de V a V/4 y la energía cae de E a E/4. El campo eléctrico se redujo por efecto de la polarización, lo que demuestra que la energía residía en el campo, no en las cargas.

## Regla de autocontrol rápido

Antes de entregar cualquier ejercicio de condensadores, verificar sistemáticamente:

1. **Factor 1/2 en energía**: ¿La fórmula de [[E_cap]] incluye el factor 1/2 multiplicando [[C]] por [[V]]² o [[Q]] por [[V]]? Si falta el factor 1/2, hay un error seguro.
2. **Unidades de capacidad**: ¿Se ha convertido µF → F (÷10⁶), nF → F (÷10⁹) o pF → F (÷10¹²) antes de operar? Un resultado en faradios para un componente electrónico ordinario indica error de prefijo.
3. **Consistencia entre [[Q]], [[C]] y [[V]]**: ¿el producto de [[C]] por [[V]] coincide con [[Q]]? Si no, alguno de los tres está mal calculado o mal introducido.
4. **Signo de C**: ¿Es positiva la capacidad calculada? Si es negativa, se han invertido Q o V.
5. **Permitividad absoluta vs relativa**: si se usa la fórmula de condensador plano, ¿se ha multiplicado εᵣ por ε₀ = 8.854×10⁻¹² F/m? Un resultado de C en faradios igual a εᵣ·A/d sin el factor ε₀ es incorrecto por un factor de 10¹².
`;export{a as default};
