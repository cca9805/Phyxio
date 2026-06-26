const e=`# Ejemplo tipo examen

## Enunciado

Una palanca ideal tiene brazo de potencia [[d_P]] = 1.20 m y brazo de resistencia [[d_R]] = 0.30 m. Debe sostener una carga [[R]] = 400 N. Calcula la ventaja mecánica ideal [[VM]] y la fuerza ideal de entrada [[P]]. En una prueba real, se mide que hacen falta 125 N para sostener la carga. Calcula la ventaja real [[VM_r]] y la eficiencia [[eta]]. Interpreta qué parte de la ayuda ideal se conserva.

## Datos

| Magnitud | Valor |
|---|---|
| [[d_P]] | 1.20 m |
| [[d_R]] | 0.30 m |
| [[R]] | 400 N |
| [[P]] real | 125 N |

Los brazos se miden desde el mismo apoyo. La fuerza real de entrada se toma como medida experimental del dispositivo, no como valor ideal.

## Definición del sistema

El sistema es una palanca en una configuración fija. No se busca clasificar el tipo de palanca, sino cuantificar su rendimiento. Primero se analiza la geometría ideal mediante [[VM]]. Después se comparan las fuerzas medidas para obtener [[VM_r]] y [[eta]].

## Modelo físico

La ventaja ideal se calcula con:

{{f:ideal_mechanical_advantage}}

La fuerza ideal requerida para una carga dada se estima con:

{{f:ideal_effort_requirement}}

La ventaja real medida se calcula con:

{{f:real_mechanical_advantage}}

La eficiencia se obtiene comparando ventaja real e ideal:

{{f:efficiency_from_advantages}}

## Justificación del modelo

El modelo ideal es válido como referencia porque los brazos están definidos y se miden desde el mismo apoyo. La diferencia entre ideal y real se introduce después mediante la fuerza medida. Esta separación es importante: la geometría fija [[VM]], pero rozamientos y deformaciones reducen [[VM_r]].

## Resolución simbólica

Primero se divide el brazo de potencia entre el brazo de resistencia para obtener [[VM]]. Con esa ventaja ideal, la fuerza necesaria se puede leer como carga dividida por ventaja. Después se calcula [[VM_r]] dividiendo la carga real entre la potencia real medida. Finalmente, [[eta]] compara [[VM_r]] con [[VM]].

Si la máquina fuera ideal, [[VM_r]] coincidiría con [[VM]]. Si la real exige más fuerza, [[VM_r]] queda menor y la eficiencia cae por debajo de 1.

## Sustitución numérica

La ventaja ideal es [[VM]] = 1.20 / 0.30 = 4. La carga de 400 N requeriría idealmente [[P]] = 100 N. En la prueba real hacen falta 125 N, así que la ventaja real es [[VM_r]] = 400 / 125 = 3.2.

La eficiencia resulta [[eta]] = 3.2 / 4 = 0.8. Esto significa que el dispositivo conserva el 80 % de la ventaja ideal.

## Validación dimensional

[[VM]], [[VM_r]] y [[eta]] no tienen unidades porque son razones. [[P]] y [[R]] se expresan en newtons. [[d_P]] y [[d_R]] se expresan en metros. La eficiencia es admisible porque está entre 0 y 1.

La comparación física también es coherente: la fuerza real medida es mayor que la ideal, por eso la ventaja real es menor que la ventaja geométrica.

## Interpretación física

El resultado no dice que la máquina “pierda” el 20 % de la carga. Dice que conserva el 80 % de la ventaja geométrica que tendría sin pérdidas. La geometría promete una reducción de fuerza por factor 4, pero el dispositivo real entrega un factor 3.2.

La lectura práctica es clara: si se quiere mejorar el dispositivo, hay dos caminos distintos. Se puede cambiar la geometría para aumentar [[VM]], o se pueden reducir pérdidas para acercar [[VM_r]] a [[VM]]. El cálculo separa diseño ideal y rendimiento real.

# Ejemplo de aplicación real

## Contexto

Un taller usa una palanca para levantar parcialmente una pieza pesada. El operario quiere saber si conviene alargar el brazo de entrada o revisar el apoyo porque nota más esfuerzo del esperado. Se mide la carga, la fuerza aplicada y las distancias desde el apoyo.

## Estimación física

Si [[d_P]] es cuatro veces [[d_R]], la estimación ideal predice que la fuerza de entrada será aproximadamente una cuarta parte de la carga. Para una carga de 800 N, se esperaría una fuerza ideal cercana a 200 N. Si el operario mide 260 N, la ventaja real es menor que la ideal.

Esa diferencia cuantitativa apunta a pérdidas. Una eficiencia en torno a 0.75 no significa que el diseño sea inútil, pero sí que rozamiento, flexión o mala alineación consumen parte de la ayuda geométrica.

## Interpretación

La ventaja mecánica permite distinguir dos preguntas: qué promete la geometría y qué entrega la máquina real. Si [[VM]] ya es baja, conviene rediseñar brazos. Si [[VM]] es alta pero [[eta]] baja, conviene reducir pérdidas. Esta distinción es el centro del leaf.

## Lista de verificación

1. ¿[[d_P]] y [[d_R]] se miden desde el mismo apoyo?
2. ¿[[R]] y [[P]] están en newtons?
3. ¿[[VM]] se calcula con brazos?
4. ¿[[VM_r]] se calcula con fuerzas reales?
5. ¿[[eta]] compara la misma configuración ideal y real?

Una comprobación adicional es preguntar qué decisión permite tomar el número obtenido. Si el objetivo es elegir una geometría, el dato principal es [[VM]]. Si el objetivo es saber cómo se comporta una herramienta ya construida, el dato principal es [[VM_r]]. Si el objetivo es diagnosticar pérdidas, el dato principal es [[eta]]. Esta distinción evita que el ejemplo termine en una lista de operaciones sin interpretación.

También conviene revisar que el resultado no mezcle una lectura de diseño con otra de mantenimiento. Aumentar [[d_P]] puede mejorar la ventaja ideal, pero no corrige un apoyo con mucho rozamiento. Lubricar el apoyo puede mejorar [[VM_r]], pero no cambia la razón geométrica [[VM]]. Por eso el informe final debe decir si el problema está en la geometría de la palanca, en las fuerzas medidas o en la diferencia entre ambas.
`;export{e as default};
