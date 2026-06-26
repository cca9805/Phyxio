## Problema histórico

Durante décadas, la protección eléctrica doméstica se limitaba a fusibles que solo respondían a corrientes de cortocircuito extremas. Las sobrecargas moderadas y las fugas a tierra podían persistir durante mucho tiempo sin que nada actuara. Los incidentes por contacto eléctrico indirecto y los incendios por conexiones degradadas eran frecuentes y difíciles de prevenir con los instrumentos disponibles en la época. El cuadro eléctrico era tratado como una "caja negra": o saltaba o no saltaba, sin identificar qué magnitud física estaba fuera de rango.

## Dificultad conceptual previa

Antes de la normalización de las protecciones diferenciales, la distinción entre protección de personas y protección de instalación era conceptualmente confusa. Se confundía la protección del cableado (función del magnetotérmico) con la protección personal frente a contacto eléctrico (función del diferencial). Esta confusión generaba decisiones incorrectas: cambiar el magnetotérmico ante una fuga, o aumentar el diferencial ante una sobrecarga. La ausencia de una magnitud física claramente identificada como causa de cada disparo impedía el diagnóstico correcto.

## Qué cambió

La introducción de los magnetotérmicos normalizados en la segunda mitad del siglo XX permitió asociar el disparo a [[corriente_de_carga]] medible: si [[corriente_de_carga]] superaba [[corriente_nominal_del_magnetotermico]] durante suficiente tiempo, el bimetálico actuaba de forma reproducible. Esto transformó el diagnóstico: en lugar de preguntarse "¿por qué saltó la caja?", se podía preguntar "¿qué circuito tenía [[corriente_de_carga]] elevada y por qué?". La generalización del diferencial de alta sensibilidad (30 mA) añadió una capa de protección específica para personas anclada en [[desequilibrio_diferencial]] como magnitud física independiente de [[corriente_de_carga]] total. Este salto conceptual es el que permite diagnosticar correctamente los tres tipos de incidente: sobrecorriente, fuga diferencial y defecto térmico local.

## Impacto en la física

El análisis de la protección eléctrica residencial ilustra un principio físico fundamental: sistemas físicamente distintos requieren magnitudes de control distintas. [[corriente_de_carga]] total y [[desequilibrio_diferencial]] son magnitudes independientes que pueden comportarse de forma completamente diferente en el mismo circuito en el mismo instante. Esta dualidad de magnitudes de control es un ejemplo del principio general de que la seguridad de un sistema complejo no puede garantizarse con una sola variable de supervisión.

## Conexión con física moderna

Los monitores de cuadro inteligentes actuales miden [[corriente_de_fase]], [[corriente_de_neutro]] e [[desequilibrio_diferencial]] en tiempo real y registran eventos con resolución temporal alta. Esto permite detectar patrones de degradación progresiva: una instalación que tiene [[margen_dif]] habitualmente en 0,7 y sube a 0,9 en épocas húmedas indica deterioro del aislamiento antes de que ocurra el primer disparo. La transición de protección reactiva a mantenimiento predictivo basado en [[margen_dif]] y [[margen_termico]] continuos es la dirección actual del desarrollo tecnológico en gestión eléctrica residencial.