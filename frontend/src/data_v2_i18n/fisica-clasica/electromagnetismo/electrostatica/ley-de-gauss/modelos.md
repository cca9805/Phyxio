## Modelo ideal

El modelo ideal de la ley de Gauss trata la distribución de carga como un conjunto de fuentes puntuales o distribuciones continuas en el **vacío perfecto**, con las cargas en reposo absoluto. En este modelo, el campo eléctrico es perfectamente estático, la permitividad es exactamente [[epsilon_0]] en todo el espacio, y la superficie gaussiana es una abstracción matemática sin espesor ni propiedades físicas.

**La simplificación central** es que las cargas se comportan como fuentes perfectas de líneas de campo que se extienden hasta el infinito sin atenuación adicional a la dada por la ley del cuadrado inverso. El campo no se absorbe ni se distorsiona por el medio porque el medio es el vacío. Bajo esta hipótesis, el flujo a través de cualquier superficie cerrada depende exclusivamente de la carga encerrada.

Las magnitudes que el modelo conserva son [[flujo_electrico]], [[carga_encerrada]] y [[epsilon_0]]. Las magnitudes que el modelo ignora incluyen los efectos de polarización de medios dieléctricos, la radiación por aceleración de cargas y los efectos cuánticos a escala atómica.

## Hipótesis

- **Electrostática pura**: las cargas están en reposo. Si las cargas se mueven, los campos magnéticos aparecen y la ley de Gauss debe combinarse con las demás ecuaciones de Maxwell. Violar esta hipótesis convierte el problema en uno de electrodinámica.
- **Vacío homogéneo**: la permitividad es [[epsilon_0]] en todo el espacio considerado. Si hay materiales dieléctricos, [[epsilon_0]] debe reemplazarse por la permitividad del medio, y la ley de Gauss en su forma simple deja de ser directamente aplicable sin modificación.
- **Cargas puntuales o distribuciones continuas clásicas**: las cargas se describen por densidades de carga bien definidas. A escala subatómica, donde la cuantización de la carga es esencial, el modelo clásico pierde validez.
- **Superficie gaussiana matemática**: la superficie de integración es una abstracción que no interacciona con el campo ni con las cargas. En la práctica, elegir una superficie real que pase por un conductor o por una carga puntual genera singularidades que el modelo ideal no maneja.
- **Campo continuo y diferenciable**: el campo eléctrico es una función continua excepto en las posiciones de las cargas. El modelo no admite cargas en la misma superficie gaussiana.

## Dominio de validez cuantitativo

El modelo ideal de la ley de Gauss es aplicable cuando se cumplen estas condiciones cuantitativas:

- **Régimen quasi-estático**: la frecuencia de variación del campo debe satisfacer f < 1 MHz para dimensiones de laboratorio (L < 1 m), condición que garantiza que los efectos de radiación sean despreciables.
- **Escala de distancias**: la separación entre cargas debe cumplir r > 2.8×10⁻¹⁵ m (radio del electrón clásico), por debajo de la cual el modelo de carga puntual diverge.
- **Escala energética**: las energías electrostáticas del sistema deben ser menores que 0.511 MeV, umbral de creación de pares donde la electrodinámica cuántica es indispensable.
- **Escala atómica**: el modelo clásico funciona para r > 10⁻¹⁰ m (radio de Bohr); a distancias menores de 10⁻¹⁰ m los efectos cuánticos dominan y la electrostática clásica pierde precisión.

## Señales de fallo del modelo

- **Campo dentro de un conductor no nulo**: si al aplicar la ley de Gauss se obtiene [[campo_electrico_gaussiano]] distinto de cero dentro de un conductor en equilibrio, hay un error en la identificación de [[carga_encerrada]] o la geometría de la superficie. El modelo ideal predice campo nulo en el interior.
- **Flujo que depende del tamaño de la superficie**: si al cambiar el tamaño de la superficie gaussiana (sin cruzar cargas) el flujo calculado cambia, hay un error de planteamiento. En el modelo ideal el flujo es invariante bajo ese cambio.
- **Resultados inconsistentes con la ley de Coulomb en geometrías simétricas**: la ley de Gauss y la ley de Coulomb deben dar el mismo campo para una carga puntual. Si los resultados difieren, hay un error en uno de los dos cálculos.
- **Campo en un dieléctrico calculado con [[epsilon_0]]**: si el problema especifica un medio con permitividad relativa mayor que la unidad y se usa [[epsilon_0]] sin corrección, el campo obtenido estará sobreestimado por un factor igual a la permitividad relativa.

## Modelo extendido o alternativo

El modelo extendido más inmediato es la ley de Gauss en **medios dieléctricos**, donde [[epsilon_0]] se reemplaza por la permitividad del medio. En ese caso, el flujo del campo de desplazamiento eléctrico a través de una superficie cerrada es igual a la carga libre encerrada. Las cargas ligadas no contribuyen directamente al flujo del desplazamiento, sino que modifican la permitividad efectiva del medio.

Para distribuciones de carga **sin simetría suficiente**, el modelo se extiende mediante la **forma diferencial de la ley de Gauss**: la divergencia del campo eléctrico en un punto es igual a la densidad de carga local dividida entre [[epsilon_0]]. Esta forma es la primera ecuación de Maxwell y es válida punto a punto en el espacio, sin requerir superficies de integración.

Cuando conviene pasar al modelo extendido con permitividad relativa: cuando el problema especifica un material dieléctrico entre las cargas o alrededor de ellas, o cuando los cálculos con [[epsilon_0]] dan campos inconsistentes con los datos experimentales. Cambiar a la forma diferencial es necesario cuando la distribución de carga no tiene simetría y la integral de superficie no puede evaluarse analíticamente.

## Comparación operativa

| Criterio | Modelo ideal (vacío, simetría) | Modelo extendido (dieléctrico, forma diferencial) |
|---|---|---|
| Permitividad | [[epsilon_0]] constante | Permitividad del medio, puede variar en el espacio |
| Cálculo del campo | Algebraico, directo si hay simetría | Requiere integración o métodos numéricos |
| Cargas aplicables | Cargas libres en el vacío | Cargas libres y ligadas en medios materiales |
| Complejidad | Baja para geometrías simétricas | Alta para geometrías arbitrarias |
| Validez | Vacío, régimen electrostático | Medios lineales, régimen quasi-estático o dinámico |

Para problemas estándar de bachillerato y primer curso universitario, el modelo ideal es suficiente. El modelo extendido es necesario en ingeniería de dispositivos electrónicos, análisis de condensadores con dieléctrico y electrodinámica.