const e=`# Modelos — Ondas superficiales

## Modelo ideal

El modelo ideal de ondas superficiales en agua profunda describe perturbaciones lineales de pequeña amplitud sobre una interfaz plana entre un líquido incompresible e irrotacional y un gas de densidad despreciable. En este modelo, el fluido cumple la ecuación de Laplace para el potencial de velocidades y la dinámica de la interfaz se obtiene aplicando las condiciones de contorno linealizadas (cinemática y dinámica) en la posición de equilibrio de la superficie libre.

El resultado central es la relación de dispersión que conecta [[v]], [[g]], [[sigma]], [[rho]] y [[k]]: la rapidez de fase de cada componente armónica depende únicamente de [[k]], y la superposición de componentes de distinto [[k]] produce dispersión. La energía total de la onda se reparte por igual entre energía cinética del fluido y energía potencial (gravitatoria más superficial).

## Hipótesis

Las hipótesis del modelo ideal son las siguientes:

- **Fluido incompresible**: la densidad [[rho]] es constante en todo el fluido. Esta hipótesis es excelente para líquidos y falla para ondas de presión en gases.
- **Fluido irrotacional**: no hay vorticidad en el seno del fluido; el campo de velocidades deriva de un potencial escalar. Esto excluye efectos de capa límite y turbulencia.
- **Amplitud pequeña**: el desplazamiento vertical de la superficie libre es mucho menor que [[lambda]]. Permite linearizar las condiciones de contorno y justifica el principio de superposición.
- **Agua profunda**: la profundidad es mucho mayor que [[lambda]]. El fondo no afecta el movimiento del fluido y la relación de dispersión tiene la forma presentada.
- **Interfaz plana en equilibrio**: la superficie de equilibrio es horizontal y la presión atmosférica actúa uniformemente sobre ella.
- **Densidad del gas despreciable**: la densidad del aire es mucho menor que [[rho]] del líquido. Esta hipótesis falla solo para fluidos muy ligeros como el helio líquido.

## Dominio de validez cuantitativo

El modelo lineal de agua profunda es válido bajo las condiciones siguientes, expresadas en términos de desigualdades entre magnitudes físicas del sistema:

La condición de agua profunda requiere que la profundidad sea > [[lambda]] / 2. Para olas oceánicas de [[lambda]] de 10 m, la profundidad debe superar los 5 m. Para capilares de [[lambda]] de 1 mm, basta con que la profundidad sea > 0.5 mm.

La condición de amplitud pequeña requiere que la amplitud sea < [[lambda]] / 10. Para olas de [[lambda]] de 10 m, la amplitud debe ser < 1 m antes de que los efectos no lineales sean significativos. Para capilares de [[lambda]] de 1 mm, amplitudes > 0.1 mm entran en el régimen no lineal.

La longitud capilar crítica separa los dos regímenes: para [[lambda]] > 1.7 cm en agua pura el régimen es gravitatorio; para [[lambda]] < 1.7 cm el régimen es capilar. El modelo combinado es válido en toda la transición, pero la hipótesis de fluido irrotacional puede deteriorarse a amplitudes grandes.

## Señales de fallo del modelo

Las siguientes observaciones indican que el modelo lineal de agua profunda ha abandonado su dominio de validez:

- Las crestas de las olas son marcadamente asimétricas: más estrechas que los valles. Esto indica no linealidad (ondas de Stokes) que el modelo lineal no captura.
- La ola se curva hacia adelante y rompe. El punto de ruptura requiere que la velocidad de las partículas en la cresta iguale a [[v]], condición que excede con creces la hipótesis de amplitud pequeña.
- Las olas en la costa se ralentizan visiblemente al aproximarse. Indica agua somera: la profundidad es comparable a [[lambda]] y el fondo ejerce fricción efectiva.
- Los patrones de interferencia muestran modulación de amplitud creciente con el tiempo. Puede indicar inestabilidad de Benjamin-Feir, efecto puramente no lineal.
- Los capilares se amortiguan en distancias comparables a su longitud de onda. La viscosidad del líquido produce amortiguamiento que el modelo invíscido no contempla.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, existen extensiones jerárquicas que recuperan mayor precisión:

**Ondas de Stokes (orden 2 y superior)**: incluyen correcciones no lineales a la relación de dispersión y a la forma de la onda. La cresta se vuelve más pronunciada y el valle más aplastado. La celeridad adquiere una corrección proporcional al cuadrado de la amplitud. Aplica cuando la amplitud supera el décimo de [[lambda]] pero la ola no ha roto aún.

**Teoría de agua somera**: cuando la profundidad es menor que un quinto de [[lambda]], la relación de dispersión se modifica por una función tangente hiperbólica del producto de [[k]] y la profundidad. En el límite de agua muy somera, [[v]] depende únicamente de la profundidad y de [[g]], no de [[k]]; la onda no es dispersiva en ese límite extremo. Este modelo explica el ralentizamiento y la deformación de tsunamis al aproximarse a la costa.

**Ondas viscosas**: incluyen la disipación por viscosidad, importante para capilares en líquidos de alta viscosidad (aceites, polímeros). La amplitud decae exponencialmente con el tiempo; la tasa de decaimiento es proporcional a la viscosidad cinemática multiplicada por el cuadrado de [[k]].

**Ondas no lineales solitarias (KdV)**: en aguas someras, la no linealidad puede compensar exactamente a la dispersión, produciendo pulsos de forma estable que se propagan sin ensancharse. Estos solitones son relevantes para la física de tsunamis y para experimentos de laboratorio en canales.

## Comparación operativa

La tabla conceptual siguiente resume cuándo conviene cambiar de modelo:

El modelo lineal de agua profunda aplica cuando la relación entre amplitud y [[lambda]] es menor de 0.1 y la profundidad supera [[lambda]] dividida entre dos. Fuera de este dominio, conviene pasar al modelo de ondas de Stokes si la amplitud es grande pero la profundidad sigue siendo suficiente; o cambiar a la teoría de agua somera si la profundidad disminuye.

La viscosidad es irrelevante para [[lambda]] mayor de 1 cm en agua a temperatura ambiente, pero se convierte en el factor dominante de amortiguamiento para capilares de décimas de milímetro. En ese límite, el cociente entre la longitud de amortiguamiento y [[lambda]] disminuye con [[k]] al cuadrado.

La transición entre régimen gravitatorio y capilar no requiere cambiar el modelo sino simplemente reconocer qué término de la relación de dispersión domina para el [[k]] en cuestión. Usar la fórmula combinada siempre que no haya certeza sobre el régimen elimina esta ambigüedad.
`;export{e as default};
