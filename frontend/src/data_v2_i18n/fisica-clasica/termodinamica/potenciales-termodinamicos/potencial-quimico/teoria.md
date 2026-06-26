# Potencial químico

## Contexto conceptual

El potencial químico [[mu]] es la magnitud termodinámica que rige el intercambio de materia entre fases o componentes de un sistema multicomponente, del mismo modo que la temperatura rige el intercambio de calor y la presión rige el intercambio de trabajo mecánico. Su concepto fue introducido por Josiah Willard Gibbs en la década de 1870 como la pieza que faltaba para extender la termodinámica clásica a sistemas de composición variable.

En la práctica, [[mu]] responde a preguntas como: ¿en qué dirección fluye espontáneamente un soluto entre dos soluciones? ¿A qué temperatura coexisten líquido y vapor? ¿Bajo qué condiciones un cristal crece en lugar de disolverse? Todas estas preguntas tienen como criterio unificador la igualdad o desigualdad de [[mu]] entre las fases o componentes involucrados.

Dentro del árbol de potenciales termodinámicos, [[mu]] es la **derivada parcial de la energía libre de Gibbs [[G]] respecto al número de moles**, evaluada a T y p constantes. Esto lo sitúa como el potencial intensivo que complementa [[G]] en sistemas de composición variable.

## 🟢 Nivel esencial

La idea central del potencial químico es sorprendentemente simple: **la materia fluye espontáneamente desde donde [[mu]] es mayor hacia donde [[mu]] es menor**, exactamente igual que el calor fluye de mayor a menor temperatura. Cuando [[mu]] es el mismo en todas las fases de un sistema, el intercambio neto de materia se detiene y el sistema ha alcanzado el **equilibrio de fases**.

Esta analogía con la temperatura es la clave intuitiva más poderosa. Igual que no hace falta saber qué es exactamente la entropía para usar la temperatura como criterio de equilibrio térmico, tampoco hace falta calcular [[G]] explícitamente para usar [[mu]] como criterio de equilibrio de materia. Lo que cuenta es la diferencia de [[mu]] entre regiones del sistema.

Una lectura útil para el alumno es pensar en [[mu]] como una altura energética molar: si una molécula puede pasar de una fase con [[mu]] alto a otra con [[mu]] bajo, el sistema reduce su energía libre total. Por eso [[mu]] no se interpreta por su signo absoluto, sino por comparación entre fases, disoluciones o compartimentos.

## 🔵 Nivel formal

La definición precisa de [[mu]] parte de la energía libre de Gibbs [[G]] del sistema:

{{f:mu_definicion}}

Esta derivada parcial evalúa cuánta energía libre gana o pierde el sistema al añadir un mol infinitesimal del componente i, manteniendo fijos T, p y la cantidad de todos los demás componentes. Su unidad es J/mol.

En el validador del leaf, esa derivada se identifica como [[dG_dni]] para distinguirla de [[G]] total. No representa una división ordinaria, sino una pendiente local de [[G]] respecto a la cantidad del componente.

En sistemas reales, [[mu]] se calcula en función de su valor estándar y de la actividad [[a]] del componente:

{{f:mu_actividad}}

El término logarítmico recoge la contribución de la composición real: a mayor actividad [[a]], mayor [[mu]] y mayor tendencia del componente a escapar de la fase. La condición de equilibrio entre dos fases α y β para el mismo componente es:

La definición con [[G]] explica el origen formal de [[mu]], mientras que la expresión con [[a]] es la herramienta práctica de cálculo. La constante [[R]] y la temperatura [[T]] fijan la escala energética del término de composición: a temperatura ambiente, esa escala es de unos pocos kJ/mol, suficiente para desplazar equilibrios de fase o solubilidad.

{{f:equilibrio_fases}}

En esa condición, [[mu_alfa]] representa el potencial químico del componente en una fase y [[mu_beta]] el potencial del mismo componente en la otra fase. El equilibrio no exige concentraciones iguales, sino igualdad de estos dos potenciales.

> [!NOTE]
> Para el componente puro en su estado estándar, [[a]] es 1 y [[mu]] es igual a [[mu_std]]. La expresión con logaritmo es la corrección que introduce la composición real.

> [!WARNING]
> [[T]] debe estar en kelvin en la expresión de [[mu]]. Usar grados Celsius produce un error de escala en el término R·[[T]] que distorsiona todos los cálculos de equilibrio.

## 🔴 Nivel estructural

La regla de fases de Gibbs conecta el número de componentes, el número de fases y los grados de libertad del sistema. Esta regla se deduce directamente del criterio de igualdad de [[mu]] entre todas las fases: cada condición de igualdad introduce una ecuación de restricción que reduce los grados de libertad.

En un sistema de un solo componente (agua, por ejemplo), en el punto triple coexisten tres fases. Las tres condiciones de igualdad de [[mu]] (sólido = líquido = vapor) fijan T y p completamente, dejando cero grados de libertad. En la curva de coexistencia líquido-vapor solo existe una condición de igualdad, dejando un grado de libertad: para cada T existe una sola presión de vapor definida.

La **dependencia de [[mu]] con la temperatura** a presión constante tiene una implicación profunda: su pendiente es menos la entropía molar del componente. Esto explica por qué las curvas de [[mu]] vs T de distintas fases tienen pendientes diferentes y se cruzan en las temperaturas de transición. La fase con mayor entropía molar (generalmente el vapor o el líquido) tiene una pendiente más negativa: su [[mu]] decrece más rápido con T, lo que explica por qué domina a alta temperatura.

> [!TIP]
> El diagrama [[mu]] vs T es la herramienta gráfica central para leer los diagramas de fase de un componente. La fase estable a cada temperatura es siempre la de menor [[mu]]; los cruces de las curvas marcan las temperaturas de transición.

> [!WARNING]
> La igualdad [[mu]]_α = [[mu]]_β presupone que T y p son iguales en ambas fases. En sistemas con gradientes de presión (membrana semipermeable, columna de fluido) la condición de equilibrio se modifica con términos adicionales de trabajo osmótico o gravitatorio.

La diferencia de [[mu]] entre dos estados es la fuerza impulsora de todos los procesos de transferencia de materia: disolución, precipitación, destilación, extracción, transporte a través de membranas. Cuanto mayor es la diferencia de [[mu]], más lejos del equilibrio está el sistema y más intensa es la tendencia a la transferencia.

## Interpretación física profunda

El término logarítmico R[[T]]·ln([[a]]) en la expresión de [[mu]] tiene un origen puramente entrópico. Diluir un componente incrementa el número de configuraciones accesibles al sistema (aumenta la entropía de mezcla), lo que baja [[mu]] respecto al estado puro. Esta disminución de [[mu]] es la razón termodinámica por la que los solutos se disuelven, los gases se mezclan y los solidos se disuelven en solventes.

La energía libre parcial molar que es [[mu]] no es observable directamente en el laboratorio: solo se miden diferencias de [[mu]] entre fases, que se traducen en presiones de vapor, solubilidades, tensiones de membrana o potenciales de célula electroquímica.

## Orden de magnitud

A temperatura ambiente (298 K), el término R·[[T]] es aproximadamente 2480 J/mol. Para una actividad de 0.01 (solución muy diluida), el término logarítmico es R·[[T]]·ln(0.01) que es aproximadamente menos 11.4 kJ/mol. Para [[a]] de 0.5, el término es aproximadamente menos 1.7 kJ/mol.

Valores de [[mu_std]] típicos van desde menos 500 kJ/mol para compuestos orgánicos muy estables hasta valores positivos de decenas de kJ/mol para compuestos inestables. Un resultado de [[mu]] en el orden de MJ/mol indica un error de unidades en [[mu_std]].

> [!TIP]
> La escala de R·[[T]] a temperatura ambiente (2.5 kJ/mol) es la energía de referencia para juzgar si el término de composición es importante. Si [[mu_std]] es del orden de cientos de kJ/mol y la diferencia de actividad es pequeña, el término logarítmico es despreciable y [[mu]] ≈ [[mu_std]].

## Método de resolución personalizado

Para calcular [[mu]] y aplicar el criterio de equilibrio:

1. **Identificar los componentes y las fases** del sistema y escribir la condición de equilibrio ([[mu]]_fase1 = [[mu]]_fase2 para cada componente).
2. **Obtener [[mu_std]]** de tablas termodinámicas para cada componente en su estado estándar de referencia.
3. **Determinar [[a]]** para cada componente en cada fase (fracción molar para soluciones ideales, presión parcial en bares para gases ideales).
4. **Calcular [[mu]]** usando la expresión con logaritmo, con [[T]] en kelvin y [[R]] en J/(mol·K).
5. **Comparar [[mu]]** entre fases: la dirección del flujo espontáneo es hacia la fase de menor [[mu]]. Si son iguales, el sistema está en equilibrio.

## Casos especiales y ejemplo extendido

**Componente puro**: cuando [[a]] es 1, [[mu]] = [[mu_std]]. Esto ocurre para el solvente puro antes de añadir soluto o para un gas puro a 1 bar. La adición de cualquier soluto reduce [[a]] del solvente por debajo de 1 y, por tanto, baja [[mu]] del solvente, lo que explica el descenso crioscópico, el aumento ebulloscópico y la presión osmótica.

**Equilibrio sólido-líquido**: en el punto de fusión, [[mu]] del sólido y del líquido son iguales. Si se disuelve un soluto en el líquido, [[mu]] del líquido baja (actividad del solvente menor que 1), lo que desplaza el equilibrio hacia menores temperaturas: el punto de fusión disminuye. Este es el origen del descenso crioscópico, cuantificado por la constante crioscópica del solvente.

## Preguntas reales del alumno

**¿Por qué [[mu]] disminuye al diluir un componente?**
Porque diluir aumenta la entropía de mezcla: hay más configuraciones posibles para el sistema diluido que para el concentrado. La contribución entrópica al potencial químico es negativa (R·[[T]] multiplicado por un logaritmo negativo de [[a]] < 1), lo que reduce [[mu]] respecto al estado puro estándar.

**¿El equilibrio de fases requiere igual concentración en las dos fases?**
No. Requiere igual [[mu]], que depende tanto de [[mu_std]] (que puede ser diferente en cada fase) como de la actividad. En el equilibrio líquido-vapor la concentración del componente en el vapor es muy diferente a la del líquido, pero los [[mu]] son iguales.

**¿Qué ocurre si [[mu]] de un componente es muy diferente entre dos fases en contacto?**
El sistema está lejos del equilibrio. El componente fluye masiva y espontáneamente hacia la fase de menor [[mu]] hasta reducir la diferencia. La velocidad del proceso depende de la cinética, pero la termodinámica garantiza que el equilibrio final corresponde a la igualdad de [[mu]].

**¿Cómo se relaciona [[mu]] con la presión de vapor de un líquido?**
En el equilibrio líquido-vapor, [[mu]] del componente en el vapor es igual a [[mu]] en el líquido. Para el vapor ideal, [[mu]] es [[mu_std]] más R·[[T]]·ln([[a]]) donde [[a]] es la presión parcial en bares. Igualando con [[mu]] del líquido se obtiene la ley de Raoult para la presión de vapor.

## Conexiones transversales y rutas de estudio

[[mu]] conecta directamente con la **energía libre de Gibbs** (leaf: [Energía libre de Gibbs](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs)) como su derivada parcial respecto a los moles. El criterio de espontaneidad ΔG < 0 a T y p constantes se traduce, en sistemas multicomponente, en que el potencial químico total disminuye con el proceso.

La relación entre [[mu]] y la **constante de equilibrio** conecta este leaf con la cinética química y la electroquímica, donde el potencial de célula es directamente proporcional a la diferencia de [[mu]] entre reactivos y productos. La comprensión de [[mu]] es también prerrequisito para abordar la **termodinámica de soluciones** y los coeficientes de actividad.

## Síntesis final

[[mu]] es el criterio universal de equilibrio de materia: igualdad de [[mu]] entre fases implica que no hay transferencia neta de componentes. Su expresión logarítmica en función de [[a]] conecta la definición termodinámica formal con los datos experimentales de concentración, presión parcial y actividad, convirtiendo [[mu]] en la herramienta central para analizar diagramas de fase, solubilidades y reacciones de equilibrio.
