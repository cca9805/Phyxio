# Ciclos Brayton y Rankine

## Contexto conceptual

Los ciclos Brayton y Rankine son los dos grandes ciclos de potencia que sustentan la generación de electricidad moderna. El ciclo Brayton es el fundamento termodinámico de las turbinas de gas, los motores a reacción y las centrales de ciclo combinado. El ciclo Rankine es el ciclo del vapor de agua que mueve las turbinas de las centrales de carbón, nucleares y solares de concentración. Comprender ambos ciclos significa comprender cómo se transforma en electricidad la mayor parte de la energía que consume la humanidad.

Ambos ciclos responden a la misma pregunta fundamental: dada una diferencia de temperatura entre una fuente caliente y un sumidero frío, ¿cuánto trabajo útil puede extraerse por cada joule de calor suministrado? La respuesta está limitada por la segunda ley de la termodinámica, y los dos ciclos representan soluciones de ingeniería optimizadas para distintos rangos de temperatura y distintos fluidos de trabajo.

La comparación entre Brayton y Rankine no es académica: cada año se toman decisiones de inversión de miles de millones de euros basadas precisamente en qué ciclo ofrece mayor rendimiento para una aplicación concreta.

## 🟢 Nivel esencial

Imagina una olla de presión conectada a una turbina. El calor hace que el fluido se expanda con fuerza, empujando los álabes de la turbina y produciendo trabajo mecánico. Al terminar, el fluido debe devolverse al inicio del ciclo con el menor gasto posible. Esa es la idea central de cualquier ciclo de potencia.

El ciclo **Brayton** usa gas (generalmente aire) como fluido de trabajo. El gas entra al compresor, se comprime hasta alta presión, absorbe calor en una cámara de combustión y se expande en la turbina produciendo trabajo. Los gases calientes de escape se liberan a la atmósfera. Lo que hace especial al Brayton es que el compresor y la turbina trabajan con gas en todo momento.

El ciclo **Rankine** usa vapor de agua. El agua líquida se bombea hasta alta presión, se calienta hasta convertirse en vapor en la caldera, el vapor se expande en la turbina produciendo trabajo, y finalmente se condensa de vuelta a líquido en el condensador. La clave del Rankine es que bombear líquido requiere mucho menos trabajo que comprimir gas: la densidad del líquido es mucho mayor.

El [[eta_th]] mide en ambos ciclos cuánta de la energía suministrada se convierte en trabajo útil. Ese porcentaje siempre está por debajo del límite teórico del ciclo de Carnot operando entre las mismas temperaturas.

## 🔵 Nivel formal

En el ciclo Brayton ideal con gas de propiedades constantes, el rendimiento depende únicamente de la relación de presiones [[r_p]] y del índice adiabático [[gamma]] del gas:

{{f:rendimiento_brayton}}

Esta expresión muestra que [[eta_th]] aumenta con [[r_p]] de forma sublineal. Para aire con [[gamma]] aproximadamente igual a 1.40, una relación de presiones de diez produce un rendimiento teórico de alrededor del 48 %, mientras que [[r_p]] de veinte sube el rendimiento al 57 %. Sin embargo, aumentar [[r_p]] indefinidamente no es la estrategia óptima: aunque [[eta_th]] crece, [[W_neto]] por unidad de masa puede disminuir si la temperatura de salida del compresor se acerca a la temperatura máxima del ciclo.

El balance energético del ciclo es la expresión directa del primer principio:

{{f:balance_energetico}}

Todo el calor absorbido [[Q_H]] se distribuye entre trabajo neto [[W_neto]] y calor rechazado [[Q_C]]. La segunda ley garantiza que [[Q_C]] nunca puede ser nulo.

Para el ciclo Rankine, el rendimiento se calcula mediante el cociente entre trabajo neto y calor suministrado en la caldera:

{{f:rendimiento_rankine}}

El calor suministrado [[Q_H]] incluye la energía necesaria para calentar el agua, evaporarla y sobrecalentarla. El trabajo de la bomba hidráulica es despreciable frente al trabajo de la turbina de vapor, lo que distingue cualitativamente al Rankine del Brayton.

## 🔴 Nivel estructural

**Diferencias estructurales entre Brayton y Rankine.** La diferencia fundamental entre ambos ciclos no es solo de fluido de trabajo, sino de topología termodinámica. En el Brayton, el compresor trabaja sobre gas: la compresión adiabática eleva simultáneamente presión y temperatura, y el trabajo de compresión puede llegar a consumir entre el 40 % y el 60 % del trabajo bruto de la turbina. En el Rankine, la bomba trabaja sobre líquido incompresible: el trabajo de bombeo es típicamente menos del 2 % del trabajo de la turbina, lo que hace que prácticamente todo el trabajo bruto se convierta en trabajo neto. Esta asimetría explica por qué el Rankine domina en centrales de gran potencia donde se justifica la infraestructura de condensación.

**El papel de [[r_p]] en el Brayton y la temperatura máxima.** Existe una tensión de diseño fundamental: maximizar [[eta_th]] requiere un [[r_p]] tan alto como sea posible, pero maximizar [[W_neto]] por unidad de masa requiere un [[r_p]] óptimo que está muy por debajo del que maximiza el rendimiento. Esta dualidad tiene consecuencias prácticas: una turbina de gas diseñada para máxima eficiencia puede producir menos potencia por kilogramo de combustible que una diseñada para máxima potencia específica. Los diseñadores de aeronaves priorizan la potencia específica (relación empuje/peso); los de centrales eléctricas priorizan [[eta_th]].

**Límites físicos y mejoras reales.** Ambos ciclos operan muy por debajo del límite de Carnot. En el Brayton, las irreversibilidades del compresor y la turbina (caracterizadas por eficiencias isentrópicas del 85–90 %) reducen [[eta_th]] real frente al ideal. En el Rankine, las mejoras más efectivas son el recalentamiento (el vapor se expande en dos etapas con recalentamiento intermedio) y la regeneración (el agua de alimentación se precalienta con vapor extraído de la turbina). Con recalentamiento y regeneración múltiple, las centrales modernas de vapor alcanzan [[eta_th]] del 40–47 %, frente al 30–35 % del ciclo Rankine básico.

**El ciclo combinado Brayton-Rankine.** La solución más elegante a las limitaciones individuales es el ciclo combinado: los gases de escape del ciclo Brayton, todavía a 500–600 °C, alimentan la caldera de un ciclo Rankine de recuperación. El resultado es un [[eta_th]] global del 55–62 %, la cifra más alta alcanzable con combustión de gas natural, solo superable por cogeneración o ciclos de múltiple presión.

## Interpretación física profunda

El rendimiento de un ciclo de potencia no es simplemente un número de calidad: es la expresión cuantitativa de cuánto de la exergía disponible entre dos temperaturas se ha convertido en trabajo real. La exergía es la fracción útil de la energía; la diferencia entre [[eta_th]] y el rendimiento de Carnot es la exergía destruida por las irreversibilidades del ciclo.

[[Q_C]] no es un fracaso de diseño: es la consecuencia inevitable de la segunda ley. Todo ciclo que opera entre dos focos finitos de temperatura debe rechazar calor al foco frío. Intentar diseñar con [[Q_C]] nulo viola el enunciado de Kelvin-Planck.

## Orden de magnitud

Una turbina de gas industrial moderna con [[r_p]] de 18 y temperatura máxima de 1500 K alcanza un [[eta_th]] teórico de alrededor del 55 % con gas ideal. El valor real, tras las irreversibilidades, se sitúa entre el 38 % y el 42 %. Una central de vapor de carbón convencional opera con [[eta_th]] de 33–38 %; una central nuclear de presurized water reactor alcanza 33–36 % por limitaciones de materiales en [[T_H]].

Un resultado absurdo a detectar: si calculas [[eta_th]] superior al 70 % con parámetros convencionales de turbina de gas o vapor, hay con certeza un error en las unidades de temperatura o en la fórmula aplicada.

## Método de resolución personalizado

Ante un problema de ciclos Brayton o Rankine, el protocolo más fiable es:

1. **Identificar el ciclo**: Brayton (gas, compresor) o Rankine (vapor, bomba). Las fórmulas y los órdenes de magnitud son distintos.
2. **Convertir temperaturas a kelvin** si se dan en Celsius. Para rendimientos, siempre kelvin.
3. **Identificar los datos disponibles**: ¿Se conocen [[r_p]] y [[gamma]] (Brayton), o [[W_neto]] y [[Q_H]] (Rankine)?
4. **Aplicar la fórmula correspondiente** del leaf y verificar que [[eta_th]] quede entre 0 y 1.
5. **Comparar con el rendimiento de Carnot** entre [[T_H]] y [[T_C]] como verificación de coherencia: todo ciclo real tiene [[eta_th]] menor que el Carnot.

## Casos especiales y ejemplo extendido

**Ciclo Brayton con regenerador.** Si los gases de escape de la turbina se usan para precalentar el aire que sale del compresor, el calor absorbido en la cámara de combustión disminuye. Esto mejora [[eta_th]] para valores bajos de [[r_p]], donde la temperatura de escape es alta. Pero para [[r_p]] alto, la temperatura de escape baja tanto que el regenerador deja de ser efectivo.

**Rankine con recalentamiento.** Al expandir el vapor en dos etapas con recalentamiento intermedio, se evita que el vapor entre en la zona de humedad alta al final de la expansión, lo que protege los álabes y aumenta [[W_neto]]. El recalentamiento también eleva la temperatura media de absorción de calor, acercando el ciclo al límite de Carnot.

## Preguntas reales del alumno

**¿Por qué el ciclo Rankine usa condensador si eso implica rechazar calor?**
Porque condensar el vapor a líquido requiere mucho menos volumen que mantenerlo como gas. La bomba que devuelve el líquido al estado inicial consume una fracción minúscula del trabajo de la turbina. Sin condensador, el ciclo cerrado no sería viable energéticamente.

**¿Por qué no se usa simplemente el ciclo de Carnot en la práctica?**
El ciclo de Carnot requiere procesos isotérmicos de absorción y rechazo de calor, que en la práctica implican intercambiadores de calor de área infinita o velocidades de proceso tendentes a cero. No es realizable técnica ni económicamente.

**¿Qué diferencia hay entre [[eta_th]] del ciclo ideal y el real?**
Las irreversibilidades del compresor, la turbina y los intercambiadores reducen [[eta_th]] real entre un 20 % y un 40 % respecto al ideal. El dato clave es la eficiencia isentrópica de cada componente.

**¿Cómo afecta [[gamma]] al rendimiento del ciclo Brayton?**
Mayor [[gamma]] implica que la temperatura sube más en la compresión adiabática. Esto aumenta el trabajo de compresión pero también el potencial de expansión en la turbina. Para [[r_p]] fijo, mayor [[gamma]] produce mayor [[eta_th]].

## Conexiones transversales y rutas de estudio

El ciclo Brayton conecta directamente con el leaf de [ciclo de Carnot](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/carnot), cuyo rendimiento es el límite superior teórico para cualquier ciclo que opere entre [[T_H]] y [[T_C]]. La comparación entre [[eta_th]] del Brayton y el Carnot revela exactamente qué fracción del potencial termodinámico se aprovecha.

El ciclo de [ciclo Diesel](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/diesel) comparte con el Brayton la compresión adiabática y la expansión adiabática, pero difiere en el proceso de adición de calor. La comparación de los tres ciclos de gas (Otto, Diesel, Brayton) para la misma relación de compresión muestra que el Brayton es el más eficiente de los tres.

## Síntesis final

Los ciclos Brayton y Rankine transforman el calor de alta temperatura en trabajo mecánico a través de secuencias de procesos termodinámicos optimizados. [[eta_th]] del Brayton depende de [[r_p]] y [[gamma]]; el del Rankine depende de [[T_H]], [[T_C]] y de las mejoras como recalentamiento y regeneración. En ambos casos, [[W_neto]] es la diferencia entre el trabajo de la turbina y el trabajo del compresor o bomba, y [[Q_C]] es el calor inevitablemente rechazado al entorno por mandato de la segunda ley.
