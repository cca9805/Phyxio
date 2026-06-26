const e=`## Errores conceptuales

### Error 1: Asignar calor positivo a todos los cuerpos, incluidos los que se enfrían

**Por qué parece correcto**

El calor es energía y la energía parece siempre positiva. Además, la fórmula [[Q_i]] = [[m_i]] · [[c_i]] · [[DeltaT_i]] parece producir un valor con el signo de [[DeltaT_i]], pero si el alumno calcula [[DeltaT_i]] siempre como un valor absoluto, todos los calores resultan positivos.

**Por qué es incorrecto**

El principio de calorimetría exige que la suma algebraica de todos los calores sea cero. Si todos los calores son positivos, la suma es estrictamente positiva y el principio de conservación de energía no se satisface. El calor cedido por los cuerpos que se enfrían es negativo porque esos cuerpos pierden energía térmica. Ignorar los signos equivale a afirmar que todos los cuerpos absorben energía del sistema, lo que viola la conservación de energía.

**Señal de detección**

El alumno escribe la ecuación de calorimetría igualando la suma de calores de los cuerpos fríos a la suma de calores de los cuerpos calientes (con todos positivos) en lugar de igualar la suma algebraica a cero. La ecuación tiene la forma correcta solo si se interpretan los calores cedidos como negativos en la suma global.

**Corrección conceptual**

La condición correcta es la suma algebraica de todos los [[Q_i]] igual a cero. Un cuerpo que pasa de temperatura más alta a [[T_eq]] tiene [[DeltaT_i]] negativo y por tanto [[Q_i]] negativo: cede energía. Un cuerpo que pasa de temperatura más baja a [[T_eq]] tiene [[DeltaT_i]] positivo y [[Q_i]] positivo: absorbe energía. La suma de todos los [[Q_i]] debe ser cero.

**Mini-ejemplo de contraste**

Un metal caliente a 90 °C se mezcla con agua a 20 °C. Temperatura de equilibrio resultante: 30 °C. El [[Q_i]] del metal usa su [[m_i]], su [[c_i]] y una variación negativa, por lo que es menor que cero. El [[Q_i]] del agua usa una variación positiva, por lo que es mayor que cero. La suma de ambos [[Q_i]] debe ser cero. Si se toma el enfriamiento del metal como positivo, la suma no es cero y el resultado es incorrecto.

## Errores de modelo

### Error 2: Calcular [[T_eq]] como la media aritmética simple de las temperaturas iniciales

**Por qué parece correcto**

La media aritmética es el promedio habitual de dos valores. Si se mezclan dos sustancias a distintas temperaturas, parece natural que la temperatura final sea el punto medio entre ambas.

**Por qué es incorrecto**

La media aritmética solo es correcta cuando las capacidades caloríficas totales de los dos cuerpos son iguales, es decir, cuando los productos \`m_1 · c_1\` y \`m_2 · c_2\` coinciden. En el caso general, la fórmula correcta es la media ponderada con pesos [[m_i]] · [[c_i]]. Un cuerpo con gran capacidad calorífica total "arrastra" [[T_eq]] hacia su temperatura inicial, de modo que [[T_eq]] puede estar muy alejada de la media aritmética.

**Señal de detección**

El alumno calcula [[T_eq]] sumando las temperaturas iniciales y dividiendo entre el número de cuerpos. Si las masas o los calores específicos son muy distintos, el resultado difiere significativamente del correcto.

**Corrección conceptual**

La temperatura de equilibrio es la media ponderada de las temperaturas iniciales con pesos iguales a las capacidades caloríficas totales. Para dos cuerpos: [[T_eq]] es el cociente de (suma de [[m_i]] · [[c_i]] · T_inicial_i) entre (suma de [[m_i]] · [[c_i]]). Solo cuando ambos pesos son iguales coincide con la media aritmética.

**Mini-ejemplo de contraste**

200 g de agua a 80 °C mezclados con 10 g de hierro a 20 °C. Media aritmética: (80 + 20) / 2 = 50 °C. Cálculo correcto: [[T_eq]] = (0.200 × 4186 × 80 + 0.010 × 450 × 20) / (0.200 × 4186 + 0.010 × 450) ≈ (66 976 + 90) / (837.2 + 4.5) ≈ 67 066 / 841.7 ≈ 79.7 °C. El agua domina completamente y [[T_eq]] es casi igual a la temperatura inicial del agua, no a 50 °C.

## Errores matemáticos

### Error 3: Invertir el orden de la resta en [[DeltaT_i]], produciendo [[T_eq]] fuera del intervalo físico

**Por qué parece correcto**

En muchos problemas el alumno calcula la variación de temperatura como "temperatura mayor menos temperatura menor" para asegurarse de que [[DeltaT_i]] sea positivo. Esta regla funciona cuando solo interesa la magnitud, pero en calorimetría el signo de [[DeltaT_i]] determina el signo de [[Q_i]] y es esencial para que la suma sea cero.

**Por qué es incorrecto**

Si el alumno calcula [[DeltaT_i]] del cuerpo que se enfría como temperatura inicial menos [[T_eq]] en lugar de [[T_eq]] menos temperatura inicial, obtiene un valor positivo para un cuerpo que debería tener calor negativo. Al sustituir en la condición de equilibrio, la ecuación resultante da una [[T_eq]] fuera del intervalo físico, lo que es una señal inequívoca de error.

**Señal de detección**

La temperatura de equilibrio calculada está fuera del intervalo entre las temperaturas iniciales de los cuerpos del sistema. O bien la suma de los calores calculados con esa [[T_eq]] no es cero.

**Corrección conceptual**

[[DeltaT_i]] se calcula siempre como T_final − T_inicial del cuerpo i, donde T_final es [[T_eq]]. Para el cuerpo que se enfría, [[T_eq]] < T_inicial, por lo que [[DeltaT_i]] es negativo. Para el que se calienta, [[T_eq]] > T_inicial y [[DeltaT_i]] es positivo. Respetar este convenio garantiza que la suma algebraica de los [[Q_i]] sea cero.

**Mini-ejemplo de contraste**

Metal a 80 °C y agua a 20 °C. [[T_eq]] calculada: 25 °C. La [[DeltaT_i]] correcta del metal es 25 − 80 = −55 K, porque se enfría. La [[DeltaT_i]] correcta del agua es 25 − 20 = +5 K, porque se calienta. Si el alumno usa una variación positiva para el metal, la suma de los calores no es cero y la [[T_eq]] que resulta del sistema de ecuaciones está fuera del intervalo [20, 80] °C.

## Errores de interpretación

### Error 4: Ignorar el calor absorbido por el propio calorímetro

**Por qué parece correcto**

El enunciado habla de "un calorímetro" sin mencionar su capacidad calorífica total. Si no se da el dato de la equivalente en agua del calorímetro, parece que no interviene en el cálculo. Además, un recipiente parece pasivo; se asume que no absorbe calor.

**Por qué es incorrecto**

Todo material físico tiene capacidad calorífica total distinta de cero. El calorímetro, al estar en contacto térmico con los cuerpos del sistema, también intercambia calor con ellos y por tanto también modifica [[T_eq]]. Si la equivalente en agua del calorímetro es comparable a la del agua del experimento (lo que ocurre en calorímetros metálicos sin aislamiento), ignorarla introduce errores del 5–20 % en [[T_eq]].

**Señal de detección**

El valor de [[c_i]] calculado para el material desconocido difiere en más del 10 % del valor tabulado y el calorímetro es metálico. Al corregir con la equivalente en agua del calorímetro, el resultado se acerca al valor tabulado.

**Corrección conceptual**

El calorímetro se incluye en el balance energético como un cuerpo adicional con temperatura inicial igual a la del agua que contiene y capacidad calorífica total igual a la masa equivalente en agua multiplicada por el [[c_i]] del agua. La condición de suma cero se aplica al conjunto agua + calorímetro + material desconocido.

**Mini-ejemplo de contraste**

Experimento sin corrección: metal a 95 °C, 200 g de agua a 22 °C, [[T_eq]] medida 28 °C. Sin corregir el calorímetro (aluminio, equivalente en agua 30 g), el [[c_i]] calculado para el metal queda alrededor de 480 J/(kg·K). Con corrección del calorímetro, queda alrededor de 540 J/(kg·K), más próximo al valor real de algunos aceros.

## Errores de validez

### Error 5: Aplicar la fórmula de [[T_eq]] cuando uno de los cuerpos cruza una transición de fase

**Por qué parece correcto**

La fórmula de [[T_eq]] como media ponderada es de aplicación directa y produce un resultado numérico incluso cuando las temperaturas iniciales incluyen la temperatura de fusión o ebullición del material. El alumno aplica la fórmula sin verificar si algún cuerpo cruza un cambio de estado.

**Por qué es incorrecto**

Si algún cuerpo cruza una transición de fase en el camino hacia [[T_eq]], parte de la energía intercambiada se destina al calor latente de la transición, no al cambio de temperatura. La fórmula de [[T_eq]] como media ponderada solo considera calor sensible y no incluye el calor latente. El resultado obtenido puede ser físicamente imposible (por ejemplo, una [[T_eq]] que requeriría que el hielo permanezca a 5 °C sin fundirse, lo cual es imposible).

**Señal de detección**

La [[T_eq]] calculada con la fórmula simple cae dentro del rango donde uno de los materiales debería haber cambiado de estado (por ejemplo, entre 0 °C y 100 °C para agua que partía de bajo 0 °C). Verificar siempre si el [[T_eq]] calculado supera algún punto de transición de fase de los materiales del sistema.

**Corrección conceptual**

Cuando hay posible cambio de estado, verificar primero si el calor disponible de los cuerpos calientes es suficiente para completar la transición de fase del cuerpo que la experimenta. Si no es suficiente, el sistema queda en equilibrio a la temperatura de transición con parte del material en cada fase. Si es suficiente, calcular el calor restante después de la transición y aplicar la fórmula de [[T_eq]] solo al tramo final de calor sensible.

**Mini-ejemplo de contraste**

50 g de hielo a 0 °C se mezclan con 100 g de agua a 30 °C. La media ponderada de calor sensible daría una temperatura positiva, pero sería incorrecta porque ignora el calor de fusión del hielo. El agua solo puede ceder unos 12.6 kJ al enfriarse hasta 0 °C, mientras que fundir todo el hielo requiere unos 16.7 kJ. Por tanto, el sistema queda a 0 °C con parte del hielo sin fundir.

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado de calorimetría, verificar tres condiciones:

1. **Intervalo de [[T_eq]]**: la temperatura de equilibrio calculada debe estar estrictamente entre la temperatura más baja y la más alta de los cuerpos del sistema. Si está fuera de ese intervalo, hay un error de signo o un cuerpo omitido.

2. **Suma de calores**: calcular todos los [[Q_i]] individuales con la [[T_eq]] obtenida y verificar que su suma algebraica es cero (o inferior al 1 % de la energía total intercambiada como tolerancia experimental). Una suma diferente de cero señala un error de signo, un cuerpo omitido o el calor del calorímetro no corregido.

3. **Comprobación de cambios de estado**: antes de aplicar la fórmula de [[T_eq]], verificar que ningún cuerpo cruza una temperatura de transición de fase en el camino desde su temperatura inicial hasta [[T_eq]]. Si alguno la cruza, el problema debe resolverse por etapas.
`;export{e as default};
