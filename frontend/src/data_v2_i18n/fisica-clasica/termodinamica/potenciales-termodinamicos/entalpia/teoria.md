# Entalpía

## Contexto conceptual

La entalpía [[H]] es el potencial termodinámico diseñado para procesos que ocurren a **presión constante**, que es la condición más frecuente en laboratorio, industria química y biología. Cuando un recipiente abierto permite que el sistema intercambie trabajo de expansión con la atmósfera, la energía interna sola no describe el intercambio de calor: es necesario sumarle el término de empuje [[p]]·[[V]].

El concepto surgió de la necesidad práctica de tabular el calor de reacción sin medir el trabajo mecánico de expansión de forma separada. Hoy las tablas de **entalpías estándar de formación** permiten predecir el calor intercambiado en miles de reacciones sin realizar ningún experimento adicional.

La entalpía se ubica en el árbol de potenciales termodinámicos junto a la energía libre de Gibbs y la energía libre de Helmholtz. Cada potencial domina en un conjunto específico de condiciones: [[H]] domina cuando [[p]] es constante, la energía libre de Helmholtz cuando el volumen es constante, y la energía libre de Gibbs cuando tanto [[p]] como [[T]] son constantes.

## 🟢 Nivel esencial

La entalpía [[H]] responde a una pregunta simple: cuando un proceso ocurre a presión constante, ¿cuánto calor intercambia el sistema con el entorno? La respuesta es [[DeltaH]]. Si [[DeltaH]] es negativa, el sistema cede calor y el proceso es **exotérmico**; si es positiva, el sistema absorbe calor y el proceso es **endotérmico**.

La intuición es la siguiente: la energía interna [[U]] mide toda la energía almacenada molecularmente, pero a presión constante el sistema también realiza un trabajo mecánico de expansión para abrirse paso contra la atmósfera. La entalpía incorpora ese trabajo dentro de una sola magnitud, de modo que [[DeltaH]] recoge tanto el cambio de energía interna como el trabajo de expansión que el sistema intercambia con el entorno.

Por eso conviene leer [[DeltaH]] como el balance térmico útil de un proceso abierto a la atmósfera. No dice solo si la energía microscópica sube o baja: dice cuánto calor ve el laboratorio cuando la presión externa se mantiene fija. Esta distinción evita confundir una reacción que libera calor con una simple disminución de [[U]] sin considerar el cambio de volumen.

## 🔵 Nivel formal

La definición de entalpía parte de combinar la energía interna con el producto presión-volumen:

{{f:definicion_entalpia}}

En un proceso a presión constante, la variación de entalpía se identifica con el calor intercambiado:

{{f:calor_isobarico}}

Esta identidad es el resultado central. Su consecuencia más potente es la **ley de Hess**, que afirma que la variación de entalpía de un proceso es independiente de la trayectoria:

{{f:ley_hess}}

La ley de Hess es consecuencia directa de que [[H]] es función de estado. Esto permite calcular [[DeltaH]] de una reacción sumando y restando las entalpías de reacciones conocidas, aunque la reacción directa no sea fácilmente medible. La condición indispensable es que todas las etapas intermedias ocurran a la misma presión constante.

Formalmente, la igualdad entre [[DeltaH]] y [[Qp]] no es una definición universal de calor, sino una consecuencia de imponer presión constante y trabajo de expansión ordinario. Si esas condiciones cambian, la definición de [[H]] sigue siendo válida, pero la lectura calorimétrica debe revisarse. Esta separación entre definición y condición de uso es clave para decidir qué fórmula aplicar.

> [!NOTE]
> Al invertir una reacción en un ciclo de Hess, el signo de [[DeltaH]] se invierte también. Al multiplicar los coeficientes estequiométricos, [[DeltaH]] se multiplica en la misma proporción.

> [!WARNING]
> Las unidades deben ser coherentes: si [[DeltaH]] está en kJ/mol, los demás términos también. Mezclar J y kJ produce errores de factor 1000 que no alteran el signo y pasan desapercibidos.

## 🔴 Nivel estructural

La identidad [[DeltaH]] igual a [[Qp]] es válida exclusivamente cuando [[p]] es constante. En una **bomba calorimétrica** el volumen es constante: el calor medido es [[U]] menos la variación de energía interna, no [[DeltaH]]. Aplicar la ecuación de proceso isobárico a un proceso isocórico es el error conceptual más frecuente en calorimetría.

Para pasar de una condición a la otra se usa la relación entre [[DeltaH]] y la variación de energía interna [[U]]. La diferencia es el término de trabajo de expansión: si el proceso libera o absorbe gases, ese término puede ser significativo; si solo involucra sólidos o líquidos, el término [[p]]·[[V]] varía poco y ambas magnitudes son aproximadamente iguales.

La **dependencia de [[DeltaH]] con la temperatura** se describe mediante la ley de Kirchhoff: la variación de [[DeltaH]] con [[T]] es proporcional a la diferencia de capacidades caloríficas entre productos y reactivos. Si los productos tienen mayor capacidad calorífica que los reactivos, [[DeltaH]] se vuelve menos negativa al aumentar [[T]]. Esta corrección es relevante cuando el rango de temperatura supera los 100–200 K respecto al estado estándar de referencia.

La **ley de Hess** estructura el cálculo de [[DeltaH]] de reacciones complejas. El procedimiento consiste en descomponer la reacción objetivo en etapas cuyas entalpías estándar de formación están tabuladas, ajustar los coeficientes estequiométricos y sumar algebraicamente. La condición de que [[H]] sea función de estado garantiza que el resultado es único, independientemente de las etapas elegidas.

> [!TIP]
> Al construir un ciclo de Hess, verificar que todas las especies se cancelan correctamente sumando reactivos y productos. Si aparece una especie extra que no debería estar, hay un error de signo o de coeficiente en alguna etapa.

> [!WARNING]
> Las entalpías de formación estándar se tabulan a 298 K y 1 bar. Si el proceso ocurre a otra temperatura o presión, se necesita corregir con la ley de Kirchhoff antes de aplicar Hess.

## Interpretación física profunda

El término [[p]]·[[V]] en la definición de [[H]] tiene un significado físico concreto: representa el trabajo que el sistema necesita realizar para empujar el entorno y ocupar su volumen a la presión dada. Cuando un gas se expande a [[p]] constante, empuja la atmósfera y parte de su energía interna se convierte en trabajo mecánico. Al sumar ese trabajo a [[U]], la entalpía captura la energía total que el sistema pone a disposición del entorno en forma de calor.

Esta interpretación explica por qué [[DeltaH]] es la magnitud relevante en reacciones químicas en laboratorio abierto: el químico no mide el trabajo de expansión por separado, sino que lo incorpora automáticamente al medir el calor del calorímetro a presión constante.

## Orden de magnitud

En reacciones de combustión típicas, [[DeltaH]] alcanza varios cientos de kJ/mol: la combustión del metano libera aproximadamente 890 kJ/mol y la del hidrógeno unos 286 kJ/mol. En reacciones ácido-base fuertes, [[DeltaH]] de neutralización es de alrededor de 57 kJ/mol. En procesos físicos como la fusión del hielo, [[DeltaH]] es de solo 6 kJ/mol, mientras que la vaporización del agua requiere 44 kJ/mol.

Un resultado de [[DeltaH]] en el orden de MJ/mol sin que intervengan explosivos o reacciones nucleares es señal de un error de unidades: verificar si los datos se introdujeron en J en lugar de kJ. Un resultado inferior a 1 kJ/mol en una reacción química ordinaria también es sospechoso.

> [!TIP]
> Comparar el orden de [[DeltaH]] con la energía térmica molecular a temperatura ambiente, que es del orden de 2.5 kJ/mol. Una reacción con [[DeltaH]] de 500 kJ/mol libera energía equivalente a 200 veces la agitación térmica de una molécula.

## Método de resolución personalizado

Para calcular [[DeltaH]] de forma segura, seguir esta secuencia:

1. **Verificar las condiciones del proceso**: comprobar que la presión es constante. Si el recipiente es rígido, el proceso es isocórico y el calor equivale a ΔU, no a [[DeltaH]].
2. **Obtener los datos**: buscar las entalpías de formación estándar de reactivos y productos en tablas termodinámicas verificando que estén a la misma temperatura de referencia.
3. **Aplicar la ley de Hess**: sumar las entalpías de formación de los productos menos las de los reactivos, multiplicadas por sus coeficientes estequiométricos.
4. **Verificar el signo**: un proceso que emite calor perceptible (quema, explosión, neutralización fuerte) debe dar [[DeltaH]] negativa. Si resulta positiva, revisar la asignación de reactivos y productos.
5. **Comprobar las unidades**: confirmar que todos los valores están en la misma unidad (J/mol o kJ/mol) antes de sumar.

## Casos especiales y ejemplo extendido

**Proceso isocórico vs. isobárico**: en una bomba calorimétrica, el calor medido es ΔU. Para obtener [[DeltaH]], se debe añadir el término de trabajo de expansión. Para reacciones en fase condensada (sólidos y líquidos), este término es despreciable porque el cambio de volumen es muy pequeño. Para reacciones con gases, el término puede ser de varios kJ/mol y no debe ignorarse.

**Entalpía de solución**: cuando una sal se disuelve en agua, el calor intercambiado depende de si la presión es constante (caso habitual en laboratorio). La entalpía de solución incluye el calor de ruptura de la red cristalina (positiva, endotérmica) y el calor de hidratación de los iones (negativa, exotérmica). El signo neto determina si la disolución enfría o calienta la solución. La sal de cocina (NaCl) tiene [[DeltaH]] de solución ligeramente positiva (endotérmica), por eso la disolución enfría levemente el agua.

## Preguntas reales del alumno

**¿Por qué [[DeltaH]] y no [[U]] para reacciones en laboratorio?**
En laboratorio los recipientes son abiertos y la presión atmosférica permanece constante. El sistema intercambia trabajo de expansión con la atmósfera sin que el experimentador lo controle. Al usar [[DeltaH]], ese trabajo queda automáticamente incorporado y el calorímetro mide directamente [[DeltaH]] sin necesidad de medir volúmenes ni presiones de forma separada.

**¿Qué ocurre cuando [[DeltaH]] es exactamente cero?**
El proceso no intercambia calor a presión constante. Puede ocurrir trabajo mecánico, pero la temperatura del sistema no cambia si la capacidad calorífica es no nula. Un proceso con [[DeltaH]] nula no implica que no ocurra nada; el sistema puede cambiar su entropía y su volumen.

**¿La ley de Hess funciona siempre?**
Funciona siempre que [[H]] sea función de estado, lo que se cumple en cualquier sistema termodinámico en equilibrio. La única condición práctica es que todas las etapas del ciclo sean procesos a la misma presión constante. Si alguna etapa ocurre a volumen constante, habría que corregir con el término de trabajo de expansión.

**¿Por qué invertir una reacción cambia el signo de [[DeltaH]]?**
Porque [[H]] es función de estado: el camino de A a B tiene la misma [[DeltaH]] en valor absoluto que el camino de B a A, pero con signo opuesto. Si la combustión del carbono libera 394 kJ/mol, la síntesis de carbono desde dióxido de carbono absorbe exactamente 394 kJ/mol.

## Conexiones transversales y rutas de estudio

La entalpía [[H]] es un componente directo de la **energía libre de Gibbs** (leaf: [Energía libre de Gibbs](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs)), donde aparece combinada con [[T]] y la entropía para determinar la espontaneidad de un proceso. Dominar [[DeltaH]] es prerrequisito para interpretar el criterio de Gibbs.

La ley de Kirchhoff conecta la entalpía con las **capacidades caloríficas** a presión constante, que se estudian en el leaf de [Calor específico](leaf:fisica-clasica/termodinamica/calor/calor-especifico). La distinción entre proceso isobárico e isocórico conecta con los [Procesos termodinámicos](leaf:fisica-clasica/termodinamica/procesos-termodinamicos) y con el primer principio de la termodinámica.

## Síntesis final

[[DeltaH]] es el calor de un proceso a presión constante, la condición más frecuente en química y tecnología. Su aditividad garantizada por la ley de Hess permite calcular entalpías de reacciones no medibles directamente a partir de tablas estándar. Dominar su signo, sus unidades y la condición de proceso isobárico es dominar la calorimetría práctica.
