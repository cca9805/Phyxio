# Ejemplo tipo examen


## Enunciado

Un sistema fermiónico en equilibrio tiene un estado cuántico cuya [[energia]] está 0,060 eV por encima del [[potencial_quimico]]. La [[temperatura_absoluta]] es 300 K. Se quiere estimar la [[ocupacion_estado]] del estado y, si el nivel agrupado tiene [[degeneracion_estado]] igual a 2, el [[numero_ocupacion]] medio asociado. Usa [[constante_boltzmann]] = 8,617·10^-5 eV/K. La pregunta física es clara: ¿cómo limita el carácter fermiónico la ocupación cuando el estado se aleja energéticamente de la referencia?

## Datos

Los parámetros del enunciado, con sus unidades del sistema internacional, son:

- Separación entre [[energia]] y [[potencial_quimico]]: 0,060 eV
- [[temperatura_absoluta]]: 300 K
- [[constante_boltzmann]]: 8,617·10^-5 eV/K
- [[degeneracion_estado]]: 2
- Magnitudes buscadas: [[energia_reducida]], [[ocupacion_estado]] y [[numero_ocupacion]]

## Definición del sistema

El sistema se modela como un conjunto de fermiones indistinguibles en equilibrio térmico. El estado analizado no es una partícula aislada moviéndose por una trayectoria, sino un estado cuántico disponible dentro de una distribución estadística. La [[energia]] del estado se compara con el [[potencial_quimico]], que fija la referencia de ocupación. La [[temperatura_absoluta]] define la anchura térmica de la transición: si la separación energética es grande frente a [[constante_boltzmann]][[temperatura_absoluta]], la ocupación cambia de forma muy acusada. La [[degeneracion_estado]] permite pasar de una probabilidad por subestado a un [[numero_ocupacion]] medio del grupo.

## Modelo físico

Se usa la estadística de Fermi-Dirac para un estado en equilibrio. La restricción de Pauli se incorpora al exigir que la [[ocupacion_estado]] por subestado no supere 1. Para el nivel agrupado, el [[numero_ocupacion]] no debe superar la [[degeneracion_estado]]. No necesitamos calcular [[energia_fermi]] ni [[temperatura_fermi]] porque no se pide la escala global de un gas; solo se evalúa un estado concreto respecto al [[potencial_quimico]].

## Justificación del modelo

El dato relevante no es la [[energia]] absoluta, sino la diferencia entre [[energia]] y [[potencial_quimico]] medida en unidades térmicas. Si esa diferencia es positiva, el estado está por encima de la referencia y su [[ocupacion_estado]] debe ser menor que la de un estado situado por debajo. La [[temperatura_absoluta]] permite que la transición no sea un escalón perfecto: a 300 K todavía puede quedar una ocupación pequeña en estados ligeramente superiores. El modelo es apropiado porque el enunciado declara equilibrio y proporciona [[constante_boltzmann]], [[temperatura_absoluta]] y [[degeneracion_estado]].

## Resolución simbólica

Primero se calcula la [[energia_reducida]], que mide la separación térmica entre [[energia]] y [[potencial_quimico]].

{{f:parametro_reducido_fermi}}

Después se obtiene la [[ocupacion_estado]] mediante la ocupación fermiónica de un estado.

{{f:fermi_dirac_ocupacion}}

Finalmente, para el grupo degenerado, se relaciona la probabilidad media por subestado con el [[numero_ocupacion]] máximo permitido.

{{f:exclusion_pauli_ocupacion_maxima}}

La estructura simbólica muestra el límite esencial: aunque haya dos subestados disponibles, cada uno mantiene una ocupación media acotada. Para el segundo ejemplo se necesita la escala colectiva del gas de Fermi ideal, dada por la [[energia_fermi]]:

{{f:energia_fermi_gas_3d}}

Esa escala se convierte en [[temperatura_fermi]] mediante:

{{f:temperatura_fermi}}

## Sustitución numérica

La escala térmica [[constante_boltzmann]][[temperatura_absoluta]] a 300 K equivale a poco más de 0,026 eV. Por tanto, [[energia_reducida]] ≈ 0,060 / 0,026 ≈ 2,32. La ocupación de Fermi-Dirac da [[ocupacion_estado]] ≈ 1/(exp(2,32)+1) ≈ 0,089. Para [[degeneracion_estado]] = 2, el [[numero_ocupacion]] medio del nivel agrupado es aproximadamente 2 · 0,089 ≈ 0,18. El valor es pequeño, pero no nulo, porque la [[temperatura_absoluta]] finita suaviza la frontera.

## Validación dimensional

La [[energia_reducida]] debe ser adimensional: en el cociente se divide una diferencia de [[energia]] por [[constante_boltzmann]][[temperatura_absoluta]], que también tiene unidades de energía. La [[ocupacion_estado]] también es adimensional porque representa una probabilidad media. El [[numero_ocupacion]] es un conteo esperado y tampoco tiene unidad SI. La validación física adicional exige 0 <= [[ocupacion_estado]] <= 1 y [[numero_ocupacion]] <= [[degeneracion_estado]]. Aquí se cumple 0,089 entre 0 y 1, y 0,18 menor que 2.

## Interpretación física

El resultado indica que el estado está por encima del [[potencial_quimico]] en varias escalas térmicas, por eso su [[ocupacion_estado]] es baja. No está completamente vacío porque la [[temperatura_absoluta]] permite fluctuaciones: algunos fermiones pueden ocupar estados con [[energia]] superior a la referencia. Sin embargo, el carácter fermiónico impide que el estado se llene sin límite. La [[degeneracion_estado]] de 2 solo duplica el número de plazas estadísticas del grupo, no autoriza una ocupación arbitraria. Si la [[temperatura_absoluta]] bajara mucho manteniendo la misma separación, la [[ocupacion_estado]] disminuiría todavía más; si la [[energia]] se acercara al [[potencial_quimico]], aumentaría.

# Ejemplo de aplicación real


## Contexto

En un metal simple, los electrones de conducción se comportan aproximadamente como un gas de fermiones. La [[densidad_numerica]] es muy alta, del orden de 10^28 m^-3, y la [[masa_particula]] relevante suele aproximarse inicialmente por la masa electrónica. La [[constante_planck_reducida]] fija la separación cuántica efectiva entre estados disponibles. Aunque el metal esté a [[temperatura_absoluta]] ambiente, muchos estados por debajo de la [[energia_fermi]] permanecen casi llenos. Lo que cambia de forma apreciable al calentar no es todo el mar de electrones, sino una franja estrecha alrededor del [[potencial_quimico]].

## Estimación física

Con [[densidad_numerica]] del orden de 10^28 m^-3, la fórmula

{{f:energia_fermi_gas_3d}}

da una [[energia_fermi]] típica de unos pocos eV. Al convertir esa escala con [[temperatura_fermi]], se obtiene una [[temperatura_fermi]] del orden de 10^4 K. Comparada con una [[temperatura_absoluta]] de 300 K, la escala térmica ordinaria es mucho menor. Por tanto, la mayoría de estados profundamente por debajo del [[potencial_quimico]] siguen ocupados, y los estados muy por encima siguen casi vacíos. Solo una región energética de anchura aproximada [[constante_boltzmann]][[temperatura_absoluta]] participa de forma sensible.

## Interpretación

Esta estimación explica por qué los metales no se comportan como un gas clásico de electrones. La [[energia_fermi]] alta no significa que todos los electrones estén calientes en sentido cotidiano; significa que la exclusión de Pauli obliga a llenar estados de [[energia]] progresivamente mayor incluso a baja [[temperatura_absoluta]]. La [[ocupacion_estado]] queda determinada por la posición de cada estado respecto al [[potencial_quimico]]. Esa lectura permite entender propiedades eléctricas y térmicas: no todos los electrones responden igual, sino principalmente los cercanos a la frontera de ocupación.