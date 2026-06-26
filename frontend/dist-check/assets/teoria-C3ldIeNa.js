const e=`# Proceso isocórico\r
\r
## Contexto conceptual\r
\r
El **proceso isocórico** es uno de los cuatro procesos termodinámicos ideales fundamentales, junto con el isobárico, el isotérmico y el adiabático. Su nombre proviene del griego *isos* (igual) y *khoros* (espacio o volumen), y describe cualquier transformación de un gas que ocurre manteniendo el **volumen estrictamente constante**.\r
\r
La situación física prototípica es un gas encerrado en un recipiente perfectamente rígido, como una olla a presión sellada o un cilindro de acero. Cuando se calienta o enfría ese recipiente, el gas cambia de temperatura y de presión, pero no puede expandirse ni comprimirse. Esta restricción geométrica tiene una consecuencia termodinámica inmediata: **no se realiza ningún trabajo mecánico**.\r
\r
Entender el proceso isocórico no es solo resolver ejercicios de bachillerato. Es comprender por qué las calderas de vapor tienen válvulas de seguridad, por qué los motores de explosión pueden reventar si no circula el refrigerante, y por qué en la cocina a presión los alimentos se cocinan más rápido. El volumen constante convierte este proceso en el caso más puro del primer principio de la termodinámica: todo el calor intercambiado va directamente a modificar la energía interna del gas.\r
\r
## 🟢 Nivel esencial\r
\r
Imagina un recipiente metálico perfectamente cerrado y rígido, lleno de gas. Si lo colocas al fuego, el gas no puede expandirse porque las paredes no ceden. El gas se calienta y su estado interno cambia, pero las dimensiones del recipiente permanecen fijas. Eso es el proceso isocórico: **calor que entra o sale, con la geometría del sistema fija**.\r
\r
La consecuencia más importante es que no hay **trabajo mecánico** [[W]]. Sin expansión ni compresión, el gas no empuja ni desplaza ninguna frontera. Todo el calor que absorbe el gas va a parar íntegramente a su **energía interna** [[DeltaU]]. El primer principio de la termodinámica se simplifica al máximo: el calor absorbido y la variación de energía interna son exactamente iguales.\r
\r
La magnitud central del proceso es la **variación de temperatura** [[DeltaT]]. Un [[DeltaT]] positivo significa que el gas se ha calentado y ha absorbido calor; uno negativo significa que el gas se ha enfriado y ha cedido calor al entorno. Para cuantificar cuánto calor se intercambia, se necesita conocer además cuántos moles hay, [[n]], y el **calor específico a volumen constante** [[Cv]], que caracteriza la capacidad calorífica del gas según su estructura molecular.\r
\r
## 🔵 Nivel formal\r
\r
La descripción matemática del proceso isocórico parte del primer principio de la termodinámica. El trabajo termodinámico en un proceso con volumen constante es nulo por definición, ya que el trabajo de expansión-compresión depende del cambio de volumen. Esto se expresa con la fórmula del trabajo isocórico:\r
\r
{{f:trabajo_isocorico}}\r
\r
Con [[W]] nulo, el primer principio se reduce a la identidad entre el calor absorbido y la variación de energía interna. La **variación de energía interna** del gas queda determinada por:\r
\r
{{f:energia_interna_isocorica}}\r
\r
Esta fórmula muestra que [[DeltaU]] depende linealmente de tres factores: el número de moles [[n]], el calor específico molar a volumen constante [[Cv]], y la variación de temperatura [[DeltaT]]. El calor intercambiado sigue la misma expresión:\r
\r
{{f:calor_isocorico}}\r
\r
La igualdad entre [[Q]] y [[DeltaU]] es la identidad definitoria del proceso isocórico. Nótese que [[Cv]] es el parámetro que depende del tipo de gas: para un gas monoatómico ideal vale aproximadamente 12.5 joules por mol y kelvin, para uno diatómico alrededor de 20.8, y para triatómico sobre 24.9. Esta diferencia refleja los grados de libertad moleculares que participan en el almacenamiento de energía.\r
\r
La variación de temperatura se obtiene como:\r
\r
{{f:variacion_temperatura_isocorica}}\r
\r
Es fundamental usar siempre temperaturas en kelvins. Un error habitual es aplicar la ley de Gay-Lussac (la razón entre [[T1]] y [[T2]] iguala la razón entre las presiones iniciales y finales) con temperaturas en grados Celsius, lo que produce resultados incorrectos porque se rompe la proporcionalidad directa que solo es válida en la escala absoluta.\r
\r
## 🔴 Nivel estructural\r
\r
El proceso isocórico ocupa un lugar de especial claridad dentro del espacio termodinámico. En el diagrama presión-volumen (pV), el proceso isocórico se representa como una **línea vertical**: el volumen permanece fijo mientras la presión puede variar libremente. La consecuencia geométrica es inmediata: el área bajo la curva en el diagrama pV es nula, y eso es exactamente [[W]]. Esta conexión entre geometría y física no es trivial: en procesos isobáricos el área es un rectángulo proporcional al trabajo; en procesos isotérmicos la curva es una hipérbola con área positiva. En el isocórico, la «curva» degenera en una línea sin área.\r
\r
En el diagrama presión-temperatura (pT), el proceso isocórico aparece como un **segmento de recta que pasa por el origen de coordenadas**. Esto expresa la ley de Gay-Lussac a volumen constante: la presión y la temperatura absoluta son proporcionales. La pendiente de esa recta depende del número de moles y del volumen encerrado. Distintos recipientes con el mismo gas pero distinto volumen dan rectas de diferente pendiente, todas pasando por el origen.\r
\r
La energía interna de un gas ideal depende exclusivamente de la temperatura, no del volumen ni de la presión. Esta propiedad, demostrada por Joule en su experimento de expansión libre, es la razón de que [[DeltaU]] se pueda calcular con la expresión anterior para cualquier proceso del gas ideal, no solo para el isocórico. La ventaja del isocórico es que, como [[W]] es nulo, el calor absorbido es directamente computable sin necesidad de conocer la trayectoria del proceso.\r
\r
**El calor específico [[Cv]] conecta el proceso isocórico con la estructura molecular del gas.** Según la teoría cinética, para un gas monoatómico ideal con tres grados de libertad traslacionales, [[Cv]] vale exactamente tres medios de R (la constante de los gases), es decir, aproximadamente 12.5 J por mol y kelvin. Para gases diatómicos con cinco grados de libertad activos a temperaturas normales, [[Cv]] vale cinco medios de R, unos 20.8 J por mol y kelvin. A temperaturas muy altas se activan los modos vibracionales y [[Cv]] aumenta, pero para el rango de temperatura de bachillerato o primer curso universitario, [[Cv]] puede tratarse como constante con buena precisión.\r
\r
Un aspecto estructuralmente importante es la **diferencia entre [[Cv]] y Cp**, el calor específico a presión constante. Para cualquier gas ideal se cumple que Cp es mayor que [[Cv]] por el valor de la constante de los gases R (aproximadamente 8.314 J por mol y kelvin). Esta diferencia tiene una interpretación física directa: en el proceso isobárico el gas necesita absorber calor adicional para realizar el trabajo de expansión contra la presión externa, mientras que en el proceso isocórico no hay expansión y ese calor extra no es necesario. El proceso isocórico es, por tanto, más «eficiente» en el sentido de que todo el calor va a energía interna.\r
\r
El régimen de validez del modelo isocórico simple requiere que el recipiente sea perfectamente rígido, que no haya pérdidas de masa (el gas no puede escapar), que el proceso sea quasi-estático para que los estados intermedios estén en equilibrio, y que el gas se comporte como gas ideal. En condiciones industriales reales, los recipientes tienen una rigidez finita y pueden deformarse ligeramente bajo alta presión, introduciendo un pequeño término de trabajo que el modelo ideal no contempla. La señal de fallo más clara del modelo es que el producto presión por volumen cambie durante el proceso, lo que indicaría que el recipiente no es tan rígido como se suponía.\r
\r
## Interpretación física profunda\r
\r
El proceso isocórico revela que **la energía interna no es una propiedad del movimiento visible sino del movimiento molecular invisible**. Cuando un gas en un recipiente rígido absorbe calor, ningún émbolo se mueve, ningún globo se infla, nada cambia a escala macroscópica excepto la temperatura y la presión. Sin embargo, la energía interna del gas ha aumentado porque cada molécula se mueve más rápido. La presión aumenta porque esas moléculas más rápidas golpean con mayor fuerza las paredes.\r
\r
El signo de [[DeltaU]] y de [[Q]] es la variable de lectura más importante. Un calor positivo significa que el entorno está más caliente que el gas y le transfiere energía; un calor negativo significa que el gas está más caliente que el entorno y es él quien cede energía. Esta asimetría es clave para entender fenómenos de seguridad: un recipiente cerrado de gas muy caliente que se enfría experimenta un proceso isocórico con [[DeltaU]] negativo y [[DeltaT]] negativo, por lo que su presión disminuye. Por el contrario, un recipiente que se calienta experimenta un aumento de presión que puede superar el límite de rotura si no hay válvula de alivio.\r
\r
## Orden de magnitud\r
\r
Para un mol de gas diatómico (por ejemplo, nitrógeno con [[Cv]] de 20.8 J por mol y kelvin) con un calentamiento de 100 K, la variación de energía interna es aproximadamente 2080 J, equivalente a unos 2 kJ. Para 10 moles el resultado es 20 kJ. En aplicaciones industriales con 100 moles y [[DeltaT]] de 500 K, [[DeltaU]] alcanza aproximadamente 1 MJ.\r
\r
Si el resultado de [[DeltaU]] es del orden de joules para varios moles y cientos de kelvin, hay un error; probablemente se confundió la unidad de [[Cv]] o se usó el calor específico másico en lugar del molar. Un resultado de [[DeltaU]] negativo cuando se aporta calor es una señal inmediata de error en el signo de [[DeltaT]].\r
\r
## Método de resolución personalizado\r
\r
Para resolver cualquier problema isocórico de forma sistemática, seguir esta secuencia:\r
\r
1. **Confirmar la condición isocórica**: verificar que el volumen es constante. Si es así, [[W]] es nulo inmediatamente y el primer principio se reduce a [[Q]] igual a [[DeltaU]].\r
2. **Convertir temperaturas a kelvins**: sumar 273.15 a cada temperatura en Celsius. Este paso es obligatorio para cualquier ratio o fórmula absoluta.\r
3. **Identificar el tipo de gas y [[Cv]]**: monoatómico (12.5 J por mol y kelvin), diatómico (20.8) o triatómico (24.9).\r
4. **Calcular [[DeltaT]]**: restar la temperatura inicial a la final. El signo determina si el proceso es de calentamiento o enfriamiento.\r
5. **Calcular [[DeltaU]] y [[Q]]**: multiplicar [[n]] por [[Cv]] por [[DeltaT]].\r
6. **Verificar coherencia**: el cociente entre la presión final y la inicial debe ser igual al cociente entre [[T2]] y [[T1]].\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Enfriamiento isocórico**: Si el recipiente rígido se coloca en un baño frío, [[DeltaT]] es negativo, [[DeltaU]] es negativo y [[p]] desciende. En una autoclave que se enfría rápido sin abrirse, [[p]] puede caer por debajo de la atmosférica.\r
\r
**Motor Otto**: La combustión del ciclo Otto idealizado se modela como proceso isocórico: el calor eleva bruscamente [[T]] y [[p]] sin que el pistón se mueva.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué se usa [[Cv]] y no Cp?** Porque [[Cv]] es el calor específico a [[V]] constante. Cp incluye trabajo de expansión que en el proceso isocórico no existe.\r
\r
**¿Por qué kelvins y no Celsius en Gay-Lussac?** La proporcionalidad entre [[p]] y [[T]] solo se cumple en la escala absoluta. Para [[DeltaT]] en la fórmula de [[DeltaU]] la diferencia es igual en ambas escalas, pero en cocientes solo es válido usar kelvins.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
El proceso isocórico se conecta con el **proceso isobárico** ([[p]] constante), donde [[Cv]] se sustituye por Cp y hay trabajo de expansión. La ruta recomendada: primer principio → isocórico → isobárico → isotérmico → ciclo de Carnot.\r
\r
El proceso isocórico enlaza con la ley de Gay-Lussac y con la teoría cinética a través del significado microscópico de [[Cv]] y los grados de libertad.\r
\r
## Síntesis final\r
\r
El proceso isocórico concentra toda la esencia del primer principio de la termodinámica en su forma más limpia: con el volumen constante el trabajo mecánico es nulo y el calor absorbido se convierte íntegramente en variación de energía interna del gas. El dominio de este proceso implica comprender qué es [[DeltaU]], cómo se relaciona con la temperatura y con el tipo de gas a través de [[Cv]], y por qué la escala Kelvin es imprescindible para los cálculos de proporcionalidad entre presión y temperatura.\r
`;export{e as default};
