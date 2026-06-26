const e=`# Introducción a las ondas en sólidos

## Contexto conceptual

Las ondas mecánicas en sólidos son perturbaciones que se propagan transportando energía sin transportar materia. A diferencia de los fluidos, los sólidos poseen rigidez tanto a la compresión como al corte, lo que permite la existencia simultánea de dos tipos fundamentales de onda: longitudinales y transversales. Esta dualidad es exclusiva de los sólidos y constituye la base de la sismología, los ensayos no destructivos y la ingeniería de vibraciones.

Dentro del bloque de ondas en sólidos, este leaf introduce los conceptos básicos que se desarrollan en profundidad en los leafs posteriores: velocidad de fase, relación con las constantes elásticas, tipos de onda y la relación de dispersión fundamental.

## 🟢 Nivel esencial

Una onda en un sólido es una vibración que se desplaza de un punto a otro del material. Cuando golpeas una barra de acero por un extremo, las partículas cercanas al golpe vibran y empujan a sus vecinas, que a su vez empujan a las siguientes. La perturbación viaja por la barra sin que el material se desplace de un sitio a otro: solo se transfiere el movimiento vibratorio.

Existen dos formas en las que un sólido puede vibrar al paso de una onda:
- **Ondas longitudinales**: las partículas vibran en la misma dirección en que avanza la onda. Son análogas al sonido en el aire y producen compresiones y expansiones alternadas del material.
- **Ondas transversales**: las partículas vibran perpendicularmente a la dirección de avance. Son exclusivas de los sólidos porque requieren que el material resista esfuerzos de corte, algo que los fluidos no pueden hacer.

La velocidad con la que viaja la onda, [[v_fase]], depende de dos propiedades del material: su rigidez (lo difícil que es deformarlo) y su densidad [[rho]] (su inercia). Un material muy rígido y poco denso transmite ondas muy rápidamente; un material blando y denso las transmite lentamente. El acero, que es rígido y denso, tiene una velocidad longitudinal de unos 5900 m/s. El caucho, blando y relativamente denso, tiene velocidades de apenas 50 m/s.

La frecuencia [[f]] de la onda la determina la fuente que genera la vibración y no cambia al pasar de un medio a otro. Lo que sí cambia es la longitud de onda [[lambda]], que se adapta para mantener la relación fundamental entre velocidad, frecuencia y longitud de onda.

## 🔵 Nivel formal

La propagación de ondas en sólidos se rige por las ecuaciones de movimiento de la mecánica de medios continuos. Para un sólido linealmente elástico, homogéneo e isótropo, la ecuación de onda se descompone en dos modos independientes.

Para ondas **longitudinales** en una barra delgada (dimensión transversal mucho menor que la longitud de onda):

{{f:velocidad_longitudinal_barra}}

Donde [[E_young]] es el módulo de Young del material y [[rho]] es su densidad. Esta expresión muestra que la velocidad depende exclusivamente de propiedades intrínsecas del material y no de la geometría ni de la frecuencia (en el régimen no dispersivo).

Para ondas **transversales**:

{{f:velocidad_transversal}}

Donde [[G_mod]] es el módulo de cizalladura. Como en todos los sólidos el módulo de cizalladura es menor que el módulo de Young (típicamente [[G_mod]] está entre un tercio y la mitad de [[E_young]]), la velocidad transversal es siempre menor que la longitudinal en el mismo material. Esta diferencia es la que permite a los sismólogos distinguir entre ondas P (longitudinales, más rápidas) y ondas S (transversales, más lentas).

La relación de dispersión fundamental conecta velocidad, frecuencia y longitud de onda:

{{f:relacion_dispersion}}

En medios no dispersivos, [[v_fase]] es constante y la relación entre [[f]] y [[lambda]] es una hipérbola. Si el medio es dispersivo (la velocidad depende de la frecuencia), la forma del pulso cambia durante la propagación.

## 🔴 Nivel estructural

Las decisiones de modelado que afectan a la propagación de ondas en sólidos dependen de varios factores:

- **Geometría**: en barras delgadas se usa [[E_young]]; en medios extensos (placas gruesas, bloques) se usa el módulo de onda plana, que incorpora el coeficiente de Poisson y da velocidades mayores.
- **Modo de onda**: longitudinal o transversal. Cada uno tiene su propia velocidad y su propia ecuación constitutiva.
- **Material**: la isotropía permite usar dos constantes elásticas independientes. En materiales anisótropos (compuestos, cristales) se necesitan hasta 21 constantes elásticas y la velocidad depende de la dirección de propagación.
- **Frecuencia**: a bajas frecuencias (longitud de onda mucho mayor que las dimensiones transversales) el modelo de onda plana es válido. A altas frecuencias aparecen modos guiados, dispersión y efectos de contorno.

> [!NOTE]
> Los fluidos no transmiten ondas transversales porque carecen de rigidez a cortante ([[G_mod]] nulo). Esta es la razón fundamental por la que las ondas S sísmicas no atraviesan el núcleo externo líquido de la Tierra, lo que permite inferir su estado de agregación.

La energía transportada por una onda mecánica en un sólido es proporcional al cuadrado de la amplitud y a la impedancia del medio. La impedancia específica (producto de [[rho]] por [[v_fase]]) determina cuánta energía se transmite o refleja en cada interfaz entre materiales diferentes, concepto que se desarrolla en el leaf de impedancia mecánica.

> [!WARNING]
> Las fórmulas de velocidad aquí presentadas asumen material linealmente elástico. Si la amplitud es grande (deformaciones superiores al 1%), aparecen efectos no lineales: generación de armónicos, dependencia de la velocidad con la amplitud y posible daño del material.

## Interpretación física profunda

La velocidad de fase en sólidos codifica la competición entre dos propiedades fundamentales de la materia: la rigidez elástica (que tiende a restaurar la forma original del material) y la inercia (que se opone al cambio de velocidad de las partículas). Un material infinitamente rígido transmitiría señales instantáneamente; un material infinitamente denso no se movería nunca. La velocidad real es el compromiso entre ambas tendencias, expresado matemáticamente como la raíz cuadrada del cociente entre el módulo elástico relevante y la densidad.

La existencia de dos modos de onda en sólidos tiene una consecuencia práctica inmediata: cualquier fuente puntual en un sólido genera simultáneamente ondas longitudinales y transversales que viajan a velocidades diferentes. En un receptor alejado se reciben dos llegadas separadas en el tiempo. La diferencia temporal entre ambas permite calcular la distancia a la fuente, principio fundamental de la localización sísmica y de los ensayos de emisión acústica.

## Orden de magnitud

Para orientarse rápidamente:
- Metales (acero, aluminio, cobre): [[v_fase]] longitudinal entre 4000 y 6500 m/s.
- Cerámicas (alúmina, vidrio): entre 5000 y 10000 m/s.
- Polímeros rígidos (PMMA, nylon): entre 1500 y 2700 m/s.
- Elastómeros (caucho, silicona): entre 20 y 500 m/s.

La velocidad transversal [[v_transversal]] es siempre menor que la longitudinal. La relación típica es de 0.5 a 0.6 en metales isótropos.

Si un resultado de velocidad en un metal da menos de 1000 m/s o más de 12000 m/s, es muy probable que haya un error en los datos o en las unidades.

## Método de resolución personalizado

1. Identificar el tipo de onda: ¿longitudinal o transversal?
2. Seleccionar el módulo elástico correcto: [[E_young]] para ondas longitudinales en barras, [[G_mod]] para transversales.
3. Obtener [[rho]] del material de tablas de referencia.
4. Calcular [[v_fase]] con la fórmula correspondiente.
5. Si se pide [[lambda]], dividir [[v_fase]] entre la frecuencia [[f]] dada.
6. Verificar coherencia: la velocidad longitudinal debe ser mayor que la transversal para el mismo material.

## Casos especiales y ejemplo extendido

Cuando el material es un fluido ([[G_mod]] nulo), solo existen ondas longitudinales. La velocidad en fluidos depende del módulo de compresibilidad en lugar del módulo de Young.

Cuando la frecuencia es muy alta (longitud de onda comparable a las dimensiones transversales de la pieza), aparecen modos guiados de Lamb (en placas) o de Pochhammer-Chree (en barras cilíndricas). En este régimen la velocidad depende de la frecuencia y el concepto de velocidad de fase se complica con la velocidad de grupo.

Para una barra de acero con [[E_young]] de 200 GPa y [[rho]] de 7800 kg/m³: la velocidad longitudinal resulta ser aproximadamente 5064 m/s. Si la frecuencia de excitación es 100 kHz, la longitud de onda [[lambda]] es de unos 51 mm.

## Preguntas reales del alumno

- ¿Por qué la velocidad del sonido en sólidos es mayor que en gases? Porque la rigidez de un sólido supera enormemente la de un gas. Aunque los sólidos también son más densos, el efecto de la rigidez domina ampliamente.

- ¿Puede una onda cambiar de tipo (longitudinal a transversal) en un sólido? Sí, en cada interfaz oblicua se produce conversión de modos. Una onda longitudinal incidente genera ondas longitudinales y transversales reflejadas y transmitidas.

- ¿Por qué no hay ondas transversales en fluidos? Porque los fluidos no resisten esfuerzos de corte: al intentar deformarlos tangencialmente, simplemente fluyen en lugar de restaurar la forma original.

## Conexiones transversales y rutas de estudio

Este leaf conecta con la reflexión y transmisión en sólidos, donde se estudia qué ocurre cuando la onda encuentra una interfaz. También se relaciona con la impedancia mecánica, que cuantifica la resistencia del medio a la vibración. La dispersión y atenuación, tratadas en leafs posteriores, generalizan el concepto de velocidad constante a situaciones más reales donde la velocidad depende de la frecuencia y la amplitud decrece con la distancia.

La analogía con ondas en fluidos es útil pero limitada: en fluidos solo hay ondas longitudinales y la rigidez relevante es la compresibilidad volumétrica. En sólidos, la existencia de rigidez a cortante abre un abanico más amplio de fenómenos ondulatorios.

## Síntesis final

La propagación de ondas en sólidos se gobierna por la competición entre rigidez elástica e inercia del material. El módulo elástico relevante ([[E_young]] para longitudinales, [[G_mod]] para transversales) y la densidad [[rho]] determinan completamente la velocidad de fase [[v_fase]]. La relación de dispersión fundamental conecta velocidad, frecuencia [[f]] y longitud de onda [[lambda]]. Estos conceptos constituyen la base sobre la que se construyen todos los fenómenos ondulatorios en sólidos: reflexión, transmisión, impedancia, dispersión y atenuación.
`;export{e as default};
