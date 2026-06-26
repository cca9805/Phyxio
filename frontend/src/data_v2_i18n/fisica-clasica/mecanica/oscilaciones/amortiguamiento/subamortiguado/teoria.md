# Teoría del régimen subamortiguado

## Contexto conceptual

El régimen subamortiguado describe un oscilador que sigue cruzando el equilibrio, pero con una amplitud cada vez menor. Es el caso típico de una vibración que se ve durante varios ciclos y luego se apaga. La disipación no es suficientemente grande para eliminar la oscilación, pero sí extrae energía en cada vuelta.

En este leaf, [[gamma]] mide la tasa de pérdida de amplitud, [[omega0]] fija la escala natural del sistema y [[omega_d]] da el ritmo angular que realmente se observa. La curva [[x]] no mantiene máximos constantes: queda encerrada por una envolvente [[x_env]] que decrece con el tiempo [[t]]. La fase [[phi]] solo decide en qué punto del ciclo empieza el movimiento.

## 🟢 Nivel esencial

La idea esencial es que un sistema subamortiguado combina dos comportamientos simultáneos: oscila y se apaga. Si se observa solo un ciclo, puede parecer un movimiento armónico simple. Si se observa durante más tiempo, se ve que cada máximo es menor que el anterior. Esa diferencia es la señal física de la disipación.

El régimen se reconoce porque la tendencia restauradora todavía domina sobre la pérdida de energía. Por eso hay cruces del equilibrio y cambios de signo en [[x]]. Sin embargo, esos cruces no significan conservación perfecta de energía: la amplitud límite baja y marca cuánta amplitud queda disponible.

Didácticamente conviene separar el ritmo de los ciclos y la pérdida de amplitud. El ritmo se observa en la separación entre cruces; el decaimiento se observa en la reducción de máximos. Mezclarlos produce errores frecuentes, como llamar frecuencia a la tasa de disipación o interpretar la cota de amplitud como si fuera la posición instantánea.

## 🔵 Nivel formal

El primer paso formal es comprobar la condición de régimen:

{{f:condicion_subamortiguado}}

Cuando se cumple, el movimiento conserva parte oscilatoria. La frecuencia angular visible no coincide exactamente con la natural sin amortiguamiento, sino que queda reducida por la disipación:

{{f:pulsacion_amortiguada}}

Esta relación exige un radicando positivo. Si [[gamma]] se acerca a [[omega0]], [[omega_d]] disminuye y la oscilación se vuelve más lenta antes de desaparecer en la frontera crítica. Si [[gamma]] es pequeño frente a [[omega0]], la diferencia entre [[omega_d]] y [[omega0]] puede ser pequeña.

Esta fórmula también ordena la interpretación experimental. Medir el intervalo entre máximos o entre cruces permite estimar [[omega_d]], pero no determina por sí solo [[gamma]]. Para conocer la disipación hay que mirar cómo cambian las alturas de los máximos. Por eso un registro temporal completo contiene dos informaciones distintas: ritmo horizontal y reducción vertical.

La amplitud máxima disponible en cada instante se modela con:

{{f:envolvente}}

La posición instantánea se obtiene combinando la envolvente con el coseno:

{{f:solucion_subamortiguada}}

El orden formal recomendado es: clasificar el régimen, calcular [[omega_d]], evaluar [[x_env]] si se pide amplitud restante y calcular [[x]] solo si se conocen [[A]], [[t]] y [[phi]]. Ese orden evita usar una solución oscilatoria cuando el sistema ya no puede oscilar.

La solución completa debe pasar dos controles. Primero, el valor calculado de [[x]] debe quedar entre las cotas positiva y negativa fijadas por [[x_env]]. Segundo, el argumento del coseno debe ser adimensional; si [[omega_d]][[t]] conserva unidades, el cálculo no tiene sentido físico.

## 🔴 Nivel estructural

Estructuralmente, el régimen subamortiguado pertenece a modelos lineales de segundo orden con amortiguamiento viscoso equivalente. La fuerza disipativa se supone proporcional a la velocidad y los parámetros no cambian durante el transitorio. Bajo esas hipótesis, la respuesta contiene una parte oscilatoria y una envolvente exponencial.

El modelo deja de ser fiable cuando la amplitud activa topes, rozamiento seco, cambios de rigidez o disipación dependiente de temperatura. También deja de representar la respuesta libre si existe una fuerza externa periódica dominante. En esos casos, una curva con oscilaciones decrecientes puede seguir apareciendo, pero sus parámetros no se interpretan directamente con las fórmulas de este leaf.

La estructura física más importante es la separación de escalas. [[omega_d]] gobierna cuántos ciclos caben en un intervalo de tiempo; [[gamma]] gobierna cuánto se reduce su altura. Un sistema puede oscilar rápido y apagarse lento, o oscilar lento y apagarse rápido, según la relación entre ambas magnitudes.

## Interpretación física profunda

El subamortiguamiento es el régimen que conserva memoria oscilatoria. El sistema no vuelve al equilibrio de una sola vez: lo cruza, se aleja, pierde energía y vuelve a cruzarlo con menor amplitud. Esa historia revela que la energía mecánica no desaparece instantáneamente, sino que se disipa de forma progresiva.

La envolvente es una herramienta conceptual poderosa porque permite leer la pérdida de energía sin seguir cada punto de la curva. Si los máximos experimentales no siguen aproximadamente la envolvente esperada, el problema no es solo numérico: puede haber rozamiento no lineal, forzamiento externo o medición mal calibrada.

## Orden de magnitud

Si [[omega0]] es de 20 rad/s y [[gamma]] es de 2 s^-1, la pulsación amortiguada sigue siendo cercana a 20 rad/s y se observan varios ciclos antes de que la amplitud caiga mucho. Si [[gamma]] sube a 15 s^-1 con la misma [[omega0]], [[omega_d]] baja de forma notable y la envolvente cae rápido.

Una comprobación rápida consiste en verificar que [[omega_d]] está entre cero y [[omega0]], que [[gamma]][[t]] es adimensional y que [[x_env]] tiene la misma unidad que [[A]] y [[x]]. Si la envolvente crece con el tiempo en un sistema disipativo libre, hay un signo mal usado o un modelo incorrecto.

## Método de resolución personalizado

Primero identifica si el problema pide clasificar, calcular frecuencia visible, estimar amplitud restante o hallar una posición concreta. Para clasificar, compara [[gamma]] y [[omega0]]. Para frecuencia visible, calcula [[omega_d]]. Para amplitud restante, usa [[x_env]]. Para posición instantánea, usa la solución completa con [[phi]].

Después interpreta. Una respuesta correcta debe decir si la oscilación es físicamente visible, cuántos ciclos podrían observarse y si el decaimiento es compatible con el sistema real. No basta con calcular un número: hay que conectarlo con la forma de la curva.

## Casos especiales y ejemplo extendido

Un caso especial aparece cuando [[gamma]] es muy pequeño. La envolvente cae despacio y durante pocos ciclos el sistema parece casi no amortiguado. Otro caso aparece cerca del crítico: [[omega_d]] se vuelve pequeña, los ciclos se espacian y la respuesta se aproxima al límite donde ya no hay oscilación.

En un sensor con [[A]] de 4 mm, [[gamma]] de 1 s^-1 y [[omega_d]] de 9 rad/s, la envolvente después de 2 s queda reducida por un factor exponencial. La curva todavía puede cruzar el equilibrio varias veces, pero sus máximos ya no alcanzan la amplitud inicial.

## Preguntas reales del alumno

Una pregunta habitual es si amortiguado significa que no oscila. En este régimen no: oscila, pero cada ciclo pierde amplitud. Otra duda es por qué hay dos frecuencias. [[omega0]] es la referencia sin amortiguamiento; [[omega_d]] es el ritmo observable cuando la disipación existe.

También se pregunta si [[x_env]] es una posición. No lo es. Es una cota de amplitud. La posición real [[x]] puede ser positiva, negativa o cero dentro de esa cota.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con crítico y sobreamortiguado, porque los tres completan la clasificación de regímenes libres amortiguados. También prepara el estudio de resonancia y fuerzas externas: allí una oscilación puede mantenerse por aporte de energía, aunque exista disipación.

## Síntesis final

El régimen subamortiguado enseña a leer una oscilación realista: ciclos visibles, amplitud decreciente y frecuencia reducida. La competencia final es distinguir el ritmo del movimiento, la pérdida de energía y el dominio de validez del modelo.
