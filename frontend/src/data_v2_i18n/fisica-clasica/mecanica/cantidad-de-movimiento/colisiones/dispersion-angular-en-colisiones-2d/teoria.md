# Dispersion angular en colisiones 2d

## Contexto conceptual

La dispersión angular en colisiones bidimensionales es el fenómeno mediante el cual un proyectil incidente [[m1]] se desvía de su trayectoria original tras interactuar con un blanco [[m2]]. A diferencia de las colisiones en una sola dimensión, donde solo cambian los módulos de las velocidades, en 2D el momento lineal [[p]] debe conservarse vectorialmente, lo que introduce la **geometría del choque** como un factor determinante.

Este leaf se centra en el caso donde un proyectil llega con rapidez [[v1i]] e impacta sobre un blanco que inicialmente se encuentra en reposo. El resultado del impacto es una redistribución del momento lineal total entre ambos cuerpos, resultando en ángulos de salida [[theta1]] y [[theta2]] que no son aleatorios, sino que están rígidamente ligados por las leyes de conservación de la dinámica clásica. El fenómeno es omnipresente en la naturaleza, desde el choque de galaxias hasta la dispersión de partículas subatómicas en aceleradores de alta energía.

---

## 🟢 Nivel esencial

En el nivel más básico, debemos entender que el movimiento no desaparece, sino que se "abre". Si el proyectil [[m1]] llega moviéndose de izquierda a derecha, todo el impulso del sistema está en esa dirección. Tras el choque, si el proyectil se desvía hacia "arriba" (ángulo [[theta1]]), el blanco [[m2]] debe obligatoriamente salir hacia "abajo" (ángulo [[theta2]]) para compensar ese tirón lateral.

La idea esencial es la **compensación lateral**. Antes del choque, no había movimiento vertical. Por lo tanto, después del choque, la suma de los movimientos verticales hacia arriba y hacia abajo debe seguir siendo cero. Esto significa que los ángulos [[theta1]] y [[theta2]] siempre estarán situados a lados opuestos del eje de incidencia original. Es como si el sistema recordara que "originalmente no íbamos hacia los lados", y por tanto cualquier desviación hacia un lado debe ser estrictamente neutralizada por una desviación opuesta del otro cuerpo.

Además, la dispersión angular nos permite "ver" la inercia. Un objeto muy pesado difícilmente será desviado por uno ligero, mientras que un proyectil ligero puede salir disparado en ángulos muy grandes al chocar con un blanco masivo. En este nivel, la intuición debe enfocarse en que la desviación es una forma de repartir el movimiento entre el avance horizontal y el desplazamiento vertical. Si visualizamos las trayectorias finales, estas forman un abanico cuya apertura depende de la violencia del impacto y del parámetro de impacto (qué tan de centro o de lado se han golpeado).

> [!IMPORTANT]
> Los ángulos de salida [[theta1]] y [[theta2]] son la prueba visual de que el momento lineal se conserva en dos dimensiones independientes de forma simultánea. No hay ángulo sin compensación.

---

## 🔵 Nivel formal

### Balances de momento lineal
El principio de conservación del momento lineal se descompone en dos ecuaciones escalares independientes, una para cada eje coordenado. Hemos definido el eje X como la línea de incidencia original.

**1. Eje de incidencia (Eje X):**
El momento inicial del proyectil debe ser igual a la suma de las proyecciones horizontales de los momentos finales de ambos cuerpos. Usamos la fórmula núcleo:

{{f:p_x_balance}}

Aquí, los términos con coseno representan cuánto de la rapidez final [[v1f]] o [[v2f]] sigue apuntando en la dirección original de avance. Es notable que en este eje, la suma de momentos siempre parece "perder" algo de valor respecto a la rapidez, ya que el coseno de un ángulo distinto de cero es menor que uno. Sin embargo, el momento total se mantiene íntegro.

**2. Eje perpendicular (Eje Y):**
Puesto que no había momento vertical inicial, las proyecciones verticales finales deben anularse. Usamos la expresión:

{{f:p_y_balance}}

Los términos con seno representan las componentes laterales que se compensan. Esta ecuación fija la relación entre las rapideces finales y los ángulos de salida. Es la ecuación que garantiza la simetría del choque respecto al eje X.

### Consideraciones energéticas
Dependiendo de la naturaleza del choque, la energía cinética puede o no conservarse. Definimos los estados energéticos inicial [[Ki]] y final [[Kf]]:

{{f:k_initial}}

{{f:k_final}}

Si el choque es elástico, aplicamos la condición de conservación absoluta de la energía mecánica:

{{f:k_balance_elastic}}

Un caso formal muy potente ocurre cuando [[m1]] = [[m2]] y el choque es elástico; en esta situación, el ángulo de apertura total [[theta_total]] es de 90 grados, calculado mediante la relación estructural:

{{f:theta_sum}}

Este resultado, conocido como la "regla del ángulo recto", es fundamental para entender el billar y la dispersión de partículas idénticas.

---

## 🔴 Nivel estructural

### La arquitectura de las ligaduras vectoriales
La dispersión angular no es un evento de libertad total, sino un sistema de ligaduras. Existe una interdependencia absoluta entre las masas [[m1]] y [[m2]], las rapideces [[v1f]] y [[v2f]], y los ángulos [[theta1]] y [[theta2]]. Si fijamos tres de estas variables, las demás quedan determinadas por la geometría del espacio y la dinámica del impulso. Esta rigidez es lo que permite a los científicos usar la dispersión como un "microscopio": midiendo ángulos, podemos ver masas y energías.

Esta estructura revela que el ángulo de dispersión máximo del proyectil está limitado por la relación de masas. Si el proyectil [[m1]] es más pesado que el blanco [[m2]], existe un "cono de seguridad" fuera del cual el proyectil nunca podrá ser desviado, sin importar cómo sea el impacto. En cambio, si el proyectil es más ligero, puede sufrir retrodispersión, siendo enviado incluso hacia atrás (ángulos superiores a 90 grados).

### El papel del parámetro de impacto
Aunque no aparece explitamente en las fórmulas de conservación, los ángulos finales dependen de qué tan descentrado sea el choque. Un parámetro de impacto pequeño produce ángulos pequeños y gran transferencia de energía. Un parámetro de impacto grande produce ángulos grandes para el blanco pero pequeñas desviaciones para el proyectil, conservando este último casi toda su energía inicial [[Ki]]. La relación entre este parámetro y los ángulos finales constituye la sección eficaz de dispersión, concepto clave en física nuclear y de partículas.

### Irreversibilidad y pérdida de información
Incluso en choques elásticos, la dispersión angular representa una redistribución de la información direccional. El sistema pasa de un estado de movimiento altamente ordenado (un solo vector) a un estado más complejo de dos vectores. Si el choque es inelástico, esta redistribución se acompaña de una degradación de energía cinética, donde parte de [[Ki]] se convierte en calor o deformación, limitando aún más las posibles combinaciones de [[theta1]] y [[theta2]].

---

## Interpretación física profunda

La dispersión angular es la herramienta diagnóstica fundamental de la física. Al observar los ángulos de salida [[theta1]] y [[theta2]], podemos deducir la masa de objetos que no podemos pesar o la rapidez de proyectiles que no podemos medir directamente. Causalmente, el ángulo es el efecto de una fuerza interna impulsiva. La desviación es la evidencia de que el intercambio de momento no fue paralelo a la velocidad inicial [[v1i]].

Desde una perspectiva filosófica, la dispersión angular nos enseña que el equilibrio no es estatismo. El sistema mantiene su momento total neto (el centro de masas sigue moviéndose igual), pero lo hace de una forma más dispersa y menos predecible a simple vista. El ángulo es la firma de la interacción; sin fuerza no hay ángulo, y sin ángulo no hay descubrimiento de la estructura interna de los cuerpos. El choque es un diálogo geométrico entre masas e impulsos.

---

## Orden de magnitud

En billar, masas de 0.17 kg y velocidades de 2 m/s producen desviaciones detectables con una precisión de grados. En física nuclear, partículas alfa dispersadas por núcleos de oro pueden desviarse hasta 180 grados, lo que permitió a Rutherford descubrir que el átomo tiene un núcleo denso y pequeño. En colisiones de galaxias, la dispersión angular ocurre en escalas de cientos de miles de años luz, desviando billones de masas solares bajo el mismo principio de conservación de [[p]].

---

## Método de resolución personalizado

1. **Alineación**: Define el eje X como la dirección de entrada [[v1i]]. Asegúrate de que el blanco [[m2]] esté en el origen de coordenadas.
2. **Descomposición**: Plantea los balances horizontal y vertical con cuidado en los signos de los componentes trigonométricos.
3. **Relación lateral**: Usa el balance en Y para vincular [[v1f]] con [[v2f]] a través de los senos de los ángulos de salida.
4. **Sustitución**: Lleva esa relación al balance en el eje X para eliminar una incógnita y resolver el sistema algebraico.
5. **Chequeo**: Verifica si la suma de cuadrados de las rapideces finales satisface la condición de elasticidad absoluta si procede.

---

## Casos especiales y ejemplo extendido

**Masas iguales elástico:** Es el caso de las bolas de billar. Las trayectorias finales forman un ángulo recto [[theta_total]] = 90°. Es una consecuencia directa de que la suma de momentos al cuadrado coincide con la suma de los cuadrados de los momentos en el modelo elástico.

**Blanco masivo:** Si [[m2]] es mucho mayor que [[m1]], el blanco apenas se mueve pero el proyectil rebota con ángulos grandes, conservando su rapidez final [[v1f]] casi igual a la inicial [[v1i]]. Es el modelo de una pelota rebotando contra una pared cuya inclinación define el ángulo de salida.

---

## Preguntas reales del alumno

- **¿Por qué el momento en Y es cero al principio?** Porque el proyectil se mueve solo en el eje X y el blanco está quieto. No hay componente lateral inicial en el sistema.
- **¿Qué pasa si el blanco ya se movía?** El balance tendría términos iniciales en ambos ejes, sumando vectorialmente los momentos de ambos cuerpos antes del contacto.
- **¿Puede [[theta1]] ser 0?** Solo en choques perfectamente frontales (1D) o si no hay interacción en absoluto (parámetro de impacto infinito).

---

## Conexiones transversales y rutas de estudio

- **General**: [Colisiones 2D](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d).
- **Simplificado**: [Marco CM](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones).
- **Límite**: [Colisiones totalmente inelásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-totalmente-inelasticas).

---

## Síntesis final

La dispersión angular en 2D descompone la conservación del momento en dos ejes (X e Y), ligando rígidamente los ángulos de salida con las masas y velocidades del sistema. Es la herramienta clave para analizar choques descentrados y es fundamental para la experimentación en física de partículas, balística e incluso astrofísica. Comprender cómo se abren los ángulos es comprender cómo se reparte el movimiento en el espacio real.

