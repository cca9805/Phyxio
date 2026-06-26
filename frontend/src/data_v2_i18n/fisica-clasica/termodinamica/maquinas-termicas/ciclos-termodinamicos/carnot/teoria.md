# Ciclo de Carnot

## Contexto conceptual

El ciclo de Carnot es el resultado central de la termodinámica clásica aplicada a máquinas térmicas. Responde a la pregunta fundamental: dado un par de focos térmicos a temperaturas fijas, ¿cuál es el rendimiento máximo que puede alcanzar cualquier dispositivo que convierta calor en trabajo? La respuesta no depende del fluido de trabajo, ni del diseño mecánico, ni de la sustancia empleada; depende exclusivamente de las temperaturas absolutas de los focos.

Este leaf se sitúa dentro del bloque de ciclos termodinámicos porque establece el **límite superior absoluto** contra el que se compara todo ciclo real. Comprender Carnot es requisito para evaluar críticamente el rendimiento de cualquier máquina térmica, desde una turbina de gas hasta un reactor nuclear.

## 🟢 Nivel esencial

Una máquina térmica absorbe calor de un foco caliente, produce trabajo útil y cede calor residual a un foco frío. El **rendimiento** mide qué fracción del calor absorbido se convierte en trabajo mecánico aprovechable. Carnot demostró que existe un techo inalcanzable impuesto por la naturaleza: ningún motor puede superar el rendimiento que da la razón entre las temperaturas absolutas de ambos focos, sin importar su diseño ni los materiales empleados.

La idea clave es que el rendimiento máximo solo depende de las temperaturas [[T_H]] y [[T_C]]. Cuanto mayor sea la diferencia entre ambas, mayor fracción de calor puede transformarse en trabajo. Este resultado no exige conocer ningún detalle del ciclo interno ni la naturaleza del fluido; basta con saber entre qué temperaturas opera la máquina para conocer su límite termodinámico absoluto.

## 🔵 Nivel formal

El ciclo de Carnot consta de cuatro procesos reversibles: una expansión isotérmica a [[T_H]] donde el fluido absorbe [[Q_H]], una expansión adiabática que reduce la temperatura hasta [[T_C]], una compresión isotérmica a [[T_C]] donde se cede [[Q_C]], y una compresión adiabática que devuelve el fluido a [[T_H]]. Al ser todos los procesos reversibles, la producción de entropía es nula y el rendimiento alcanza su máximo teórico.

La fórmula central del rendimiento de Carnot es:

{{f:rendimiento_carnot}}

Esta expresión establece que [[eta_C]] crece cuando [[T_H]] aumenta o cuando [[T_C]] disminuye, y se aproxima a la unidad solo en el límite irrealizable de [[T_C]] tendiendo a cero kelvin. El balance energético del ciclo completo queda descrito por la primera ley:

{{f:balance_energetico_carnot}}

La relación entre los calores intercambiados y las temperaturas absolutas de los focos es exclusiva de ciclos reversibles:

{{f:relacion_calores_carnot}}

Esta proporcionalidad permite definir la escala Kelvin de temperatura de forma puramente termodinámica, sin recurrir a propiedades de sustancias específicas. El hecho de que [[Q_C]] dividido entre [[Q_H]] sea igual a [[T_C]] dividido entre [[T_H]] implica que la entropía total del universo no cambia durante el ciclo: el calor cedido al foco frío dividido entre [[T_C]] compensa exactamente el calor extraído del foco caliente dividido entre [[T_H]].

## 🔴 Nivel estructural

La potencia del teorema de Carnot reside en su universalidad: es independiente de la naturaleza del fluido de trabajo, de la geometría del motor y del número de etapas. Cualquier ciclo irreversible entre los mismos focos tendrá un rendimiento estrictamente menor que [[eta_C]]. La demostración se apoya en la **desigualdad de Clausius**: para un ciclo irreversible, la integral cíclica de la cantidad de calor dividida entre la temperatura es negativa, lo que implica mayor producción de entropía y menor conversión de calor en trabajo.

Las condiciones de validez del resultado son tres. Primera, los focos deben tener capacidad calorífica infinita para mantener su temperatura constante durante el intercambio. Segunda, todos los procesos deben ser cuasiestáticos y sin fricción. Tercera, no puede haber transferencia de calor a través de diferencias finitas de temperatura, pues eso generaría entropía irreversible.

En la práctica, ningún ciclo real cumple estas condiciones. Las irreversibilidades internas (fricción, turbulencia, pérdidas por conducción a través de paredes finitas) y externas (diferencias de temperatura necesarias para que el calor fluya a ritmo finito) reducen siempre el rendimiento por debajo de [[eta_C]]. El ciclo de Carnot funciona como una **cota superior asintótica**: útil para evaluar cuánto margen de mejora queda en un diseño existente, pero nunca alcanzable.

Un aspecto estructural profundo es la conexión con la **entropía**: el ciclo de Carnot es el único ciclo entre dos focos que deja la entropía del universo invariante. Si se produce entropía, se pierde capacidad de hacer trabajo, y el rendimiento cae. La magnitud de esa caída es proporcional a la entropía generada multiplicada por [[T_C]], resultado conocido como el teorema de Gouy-Stodola.

## Interpretación física profunda

El rendimiento de Carnot no es una limitación ingenieril sino una **ley fundamental de la naturaleza**. No puede superarse optimizando materiales, aumentando la presión o mejorando el aislamiento. Su origen es puramente estadístico: la segunda ley refleja la tendencia del universo hacia estados de mayor probabilidad, y convertir calor íntegramente en trabajo exigiría una disminución espontánea de entropía, algo estadísticamente imposible.

La dependencia exclusiva con [[T_H]] y [[T_C]] revela que el potencial para hacer trabajo no reside en la cantidad de calor sino en su **calidad térmica**: calor a alta temperatura tiene mayor capacidad de producir trabajo que la misma cantidad a baja temperatura. Esta idea conduce al concepto de **exergía**, que cuantifica el trabajo máximo extraíble de un flujo de calor respecto al ambiente.

## Orden de magnitud

Una central térmica de carbón opera típicamente con [[T_H]] de unos 800 K y [[T_C]] ambiental de 300 K, lo que da un rendimiento de Carnot de aproximadamente 62 %. Las centrales reales alcanzan entre 33 y 42 %, muy por debajo del límite teórico. Una turbina de gas moderna con [[T_H]] de 1500 K tiene un Carnot de aproximadamente 80 %, pero alcanza entre 38 y 44 % en la práctica. Si un cálculo arroja un rendimiento superior al de Carnot correspondiente, el resultado es físicamente absurdo e indica un error de procedimiento.

## Método de resolución personalizado

> [!TIP]
> **Secuencia operativa para problemas de Carnot:**

- **Paso 1**: Identificar [[T_H]] y [[T_C]] en el enunciado y convertirlas a kelvin si están en Celsius.
- **Paso 2**: Aplicar la fórmula de rendimiento de Carnot para obtener [[eta_C]].
- **Paso 3**: Si se dan calores, usar el balance energético para obtener [[W_neto]].
- **Paso 4**: Verificar que el resultado sea menor que [[Q_H]] y que [[eta_C]] quede entre 0 y 1.
- **Paso 5**: Comparar con rendimientos reales para interpretar la eficiencia relativa del ciclo analizado.

## Casos especiales y ejemplo extendido

> [!NOTE]
> **Caso límite 1: focos a la misma temperatura.** Si [[T_H]] tiende a [[T_C]], el rendimiento tiende a cero. Físicamente no hay gradiente térmico que impulse el ciclo y no puede producirse trabajo.

> [!WARNING]
> **Caso límite 2: foco frío tendiendo a cero kelvin.** El rendimiento tiende formalmente a la unidad, pero el tercer principio de la termodinámica prohíbe alcanzar el cero absoluto en un número finito de pasos, de modo que un rendimiento de 100 % es inalcanzable.

Un ciclo de Carnot entre [[T_H]] de 1000 K y [[T_C]] de 300 K produce un rendimiento de 70 %. Si se opera una máquina frigorífica de Carnot invertida entre los mismos focos, el coeficiente de operación frigorífico es [[T_C]] dividido entre la diferencia de temperaturas, resultando aproximadamente 0.43 para el caso de bomba de calor inversa, lo que muestra cómo los mismos focos definen tanto el rendimiento motor como el coeficiente frigorífico.

## Preguntas reales del alumno

**¿Por qué no se puede alcanzar el rendimiento de Carnot en la práctica?**
Porque requiere procesos infinitamente lentos (cuasiestáticos) y sin fricción. Cualquier máquina real opera a velocidad finita con transferencia de calor a través de diferencias finitas de temperatura, lo que genera entropía irreversible.

**¿Sirve la fórmula de Carnot si el ciclo real no es de Carnot?**
Sí, como cota superior. El rendimiento de cualquier ciclo real entre los mismos focos siempre será menor que [[eta_C]]. Se usa para evaluar cuánto margen de mejora tiene un diseño.

**¿Por qué se usan temperaturas en kelvin y no en Celsius?**
Porque la fórmula involucra cocientes de temperaturas absolutas. Usar Celsius produce resultados erróneos y sin sentido físico, ya que el cero de la escala Celsius es arbitrario.

**¿Qué pasa si mi resultado supera el Carnot?**
El resultado es físicamente imposible. Indica un error numérico (unidades incorrectas, inversión de focos) o conceptual (aplicar una fórmula incorrecta).

## Conexiones transversales y rutas de estudio

El ciclo de Carnot conecta directamente con los ciclos reales estudiados en [Brayton-Rankine](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/brayton-rankine) y [Otto](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/otto), que representan aproximaciones prácticas cuyo rendimiento se evalúa comparándolo con el límite de Carnot. También enlaza con el concepto de **entropía** y con la **segunda ley de la termodinámica** en su formulación de Kelvin-Planck.

La escala Kelvin de temperatura se define termodinámicamente a través de la relación de calores del ciclo de Carnot, conectando este tema con la metrología y la física fundamental.

## Síntesis final

El ciclo de Carnot establece que el rendimiento máximo de cualquier máquina térmica entre dos focos depende únicamente del cociente de sus temperaturas absolutas. Es una consecuencia directa de la segunda ley y funciona como referencia universal para evaluar la calidad termodinámica de cualquier proceso de conversión de calor en trabajo.
