# Poleas simples

## Contexto conceptual

Las poleas simples responden a una pregunta práctica fundamental: ¿cómo puede una persona manipular cargas que exceden su fuerza directa mediante un sistema mecánico elemental? Este dispositivo encapsula el principio de cambio de dirección de fuerzas y, en su forma móvil, el de ventaja mecánica.

En el estudio de máquinas simples, comprender cómo las magnitudes [[W]], [[nSel]] y [[F]] se relacionan permite diseñar sistemas de elevación eficientes. La polea fija cambia la dirección de la fuerza sin alterar su magnitud, mientras que la polea móvil distribuye la carga entre dos tramos de cuerda, reduciendo la fuerza requerida a la mitad.

El aprendizaje de este concepto proporciona herramientas transferibles a grúas básicas, sistemas de elevación manual, aparejos náuticos simples y cualquier mecanismo donde se requiera redirigir o multiplicar fuerza mediante configuraciones de poleas individuales.

## 🟢 Nivel esencial

Imagina una carga pesada que necesitas levantar. Una polea fija te permite tirar hacia abajo para elevar la carga hacia arriba. Esto es útil porque tu peso corporal ayuda al esfuerzo, pero la fuerza que debes ejercer sigue siendo igual al peso de la carga.

La idea central es distinguir dos configuraciones:

- **Polea fija**: La polea está anclada a un punto fijo. Solo cambia la dirección de la fuerza. Si la carga pesa 100 N, debes tirar con 100 N.

- **Polea móvil**: La polea se mueve con la carga. La carga se reparte entre dos tramos de cuerda. Si la carga pesa 100 N, cada tramo soporta 50 N y tú solo ejerces 50 N.

El principio conserva energía: lo que ahorras en fuerza lo compensas en distancia. Con la polea móvil, debes tirar el doble de cuerda para elevar la misma altura.

Tres casos desarrollan intuición:

- **Sin polea**: Tirar directamente requiere fuerza igual al peso. No hay ventaja mecánica.

- **Polea fija**: Cambia la dirección pero no la magnitud. La fuerza sigue siendo igual al peso.

- **Polea móvil**: Reduce la fuerza a la mitad. La carga se distribuye entre dos tramos de cuerda.

## 🔵 Nivel formal

Ahora expresemos cuantitativamente mediante ecuaciones de equilibrio estático. El análisis riguroso permite predecir numéricamente el comportamiento del sistema.

En el modelo ideal sin pérdidas, cada tramo de cuerda soportante sostiene una fracción del peso total. Para una polea móvil, hay dos tramos activos compartiendo la carga.

La condición de equilibrio estático requiere que la tensión en el extremo libre iguale la carga por tramo:

{{f:fuerza_ideal_poleas}}

Esta relación matemática revela que [[F]] es inversamente proporcional al número de tramos activos. Con una polea fija, [[nSel]] tiene valor 1 y [[F]] coincide con [[W]]. Con polea móvil, [[nSel]] tiene valor 2 y [[F]] queda reducida a la mitad de [[W]].

La lectura formal exige separar el dato geométrico del dato dinámico. [[nSel]] no mide fuerza ni masa: mide cuántos tramos transmiten tensión útil a la carga. [[W]] fija la demanda vertical que debe equilibrarse. [[F]] es la tensión que el operador introduce en el extremo libre. Si se confunden esos papeles, el cálculo puede dar un número plausible pero físicamente mal interpretado.

La conservación de energía impone una relación inversa entre fuerza y desplazamiento:

{{f:traccion_cable_poleas}}

El trabajo realizado sobre la carga (fuerza de gravedad × desplazamiento vertical) debe igualar el trabajo realizado por el operador (fuerza de tracción × desplazamiento de cuerda). Por tanto, reducir la fuerza a la mitad exige duplicar el recorrido de cuerda.

## 🔴 Nivel estructural

El modelo de poleas simples tiene límites estructurales definidos:

**Límites de validez del modelo ideal:**

1. **Rozamiento en el eje**: La polea real tiene rozamiento en su eje de rotación. Parte de la fuerza aplicada se disipa como calor. En poleas bien lubricadas, este efecto es pequeño (~5-10%); en poleas oxidadas o sin mantenimiento, puede ser significativo (>20%).

2. **Peso de la polea móvil**: El modelo asume que la polea móvil no tiene masa. En realidad, su peso se suma a la carga. Si la carga es ligera y la polea pesada, el error puede ser sustancial.

3. **Elasticidad de la cuerda**: La cuerda real se estira bajo tensión, almacenando energía elástica. Esto introduce un elemento dinámico que el modelo estático no captura.

4. **Inercia rotacional**: Si la aceleración es significativa, la masa de la polea debe acelerar rotacionalmente, requiriendo fuerza adicional.

El modelo ideal falla sistemáticamente cuando:
- La eficiencia mecánica es baja (< 0.8)
- Se requiere precisión mejor que 10%
- Hay aceleraciones significativas (a > 0.1 g)
- El peso de la polea móvil supera el 5% de la carga

En la práctica, estos límites no son detalles secundarios: cambian qué problema se está resolviendo. Una polea oxidada deja de ser un sistema de equilibrio ideal y pasa a ser un sistema disipativo. Una cuerda elástica convierte parte del trabajo en energía almacenada temporalmente. Una carga acelerada exige aplicar la segunda ley de Newton, no solo equilibrio. Por eso el modelo ideal debe verse como primera aproximación controlada, válida mientras las pérdidas, deformaciones e inercias sean pequeñas frente a la fuerza principal.

## Interpretación física profunda

El significado físico profundo trasciende el cálculo numérico. Se trata de comprender la conservación de la energía mecánica: no podemos obtener trabajo útil de la nada. La ventaja mecánica que proporciona la polea móvil no crea energía; simplemente redistribuye el esfuerzo en el espacio.

Preguntas para desarrollar intuición:

- **¿Qué pasa si [[nSel]] tiende a infinito?** Teóricamente, la fuerza requerida tendería a cero. Prácticamente, la cuerda necesaria sería infinitamente larga y las pérdidas por rozamiento acumulativas invalidarían el modelo.

- **¿Qué pasa si [[W]] es nulo?** Sin carga, la fuerza necesaria es cero en el modelo ideal. La polea móvil ascendería sin resistencia, ilustrando que el sistema responde solo a fuerzas netas.

- **¿Por qué la polea fija no ahorra fuerza?** Porque solo tiene un tramo activo. La carga pende de un único segmento de cuerda, por lo que la tensión debe igualar el peso completo. La única ventaja es biomecánica: usar el peso corporal al tirar hacia abajo.

## Orden de magnitud

Para desarrollar sentido físico, es crucial tener referencias numéricas. Los siguientes órdenes de magnitud son típicos en este contexto:

- **[[W]]**: En problemas introductorios suele ir desde decenas hasta algunos miles de newton. Por ejemplo, una masa de 50 kg genera un peso de aproximadamente 500 N.

- **[[nSel]]**: En montajes didácticos con poleas simples, [[nSel]] toma valores 1 (polea fija) o 2 (polea móvil).

- **[[dx_load]]**: En ejercicios habituales va desde unos centímetros hasta algunos metros. Una elevación típica de 1-2 m es manejable manualmente.

- **[[F]]**: Con polea fija, [[F]] es aproximadamente igual a [[W]]. Con polea móvil, [[F]] es aproximadamente la mitad de [[W]]. Un adulto promedio puede ejercer fuerzas sostenidas de 200-400 N.

- **[[dx_pull]]**: Con polea móvil, [[dx_pull]] duplica [[dx_load]]. Si se eleva 1 m, hay que tirar 2 m de cuerda.

Estos valores permiten un "test de cordura": si calculas que necesitas 10 000 N para levantar 100 kg, hay un error; si calculas 5 N, también.

## Método de resolución personalizado

El procedimiento para resolver problemas de poleas simples sigue estos pasos:

1. **Identificar la configuración**: ¿Es polea fija o móvil? Contar los tramos de cuerda que sostienen directamente la carga ([[nSel]]).

2. **Dibujar el diagrama de cuerpo libre**: Representar la carga, los tramos de cuerda, las tensiones y el sentido de movimiento.

3. **Aplicar equilibrio estático**: La suma de fuerzas verticales sobre la carga debe ser cero. La tensión es igual en todo el cable ideal.

4. **Despejar la incógnita**: Usar la relación ideal de equilibrio para relacionar [[F]] con [[W]] y [[nSel]].

5. **Validar dimensionalmente**: [[F]] debe estar en newtons. Verificar que [[F]] sea menor o igual que [[W]], con igualdad solo cuando [[nSel]] tiene valor 1.

6. **Verificar coherencia física**: ¿Es razonable que una persona ejerza esa fuerza? ¿El desplazamiento de cuerda es manejable?

## Casos especiales y ejemplo extendido

**Caso especial 1 — Polea fija ideal vs real**: En el modelo ideal, [[F]] coincide con [[W]]. En una polea real con rozamiento, [[F]] supera [[W]]. La diferencia cuantifica las pérdidas. Si se conoce la eficiencia mecánica, la fuerza real se corrige aumentando el esfuerzo previsto por el modelo ideal.

**Caso especial 2 — Polea móvil con peso propio**: Si la polea móvil tiene masa significativa, el peso efectivo es la suma de [[W]] y el peso de la polea. La fuerza requerida aumenta proporcionalmente y se reparte entre los dos tramos activos.

**Ejemplo extendido integrado**: Un operario necesita elevar 80 kg de material a 3 m de altura usando una polea móvil. La polea pesa 2 kg. Calcular:
- Peso total: una masa conjunta de 82 kg produce aproximadamente 804 N
- Fuerza ideal: al repartirse entre dos tramos activos, resulta aproximadamente 402 N (unos 41 kgf)
- Verificación: ¿Puede un operario ejercer 402 N sostenidamente? Sí, pero requiere esfuerzo significativo.
- Desplazamiento de cuerda: el doble de la elevación, es decir, 6 m
- Trabajo realizado: del orden de 2.4 kJ, coherente con el trabajo contra la gravedad

## Preguntas reales del alumno

**¿Por qué con polea fija no ahorro fuerza si la física dice que las máquinas simples multiplican fuerza?**
La polea fija es una máquina simple de dirección, no de multiplicación. Solo cambia el sentido de la fuerza aplicada. La ventaja mecánica de multiplicación requiere que la carga se distribuya entre múltiples tramos de cuerda, lo que solo ocurre con poleas móviles o sistemas compuestos.

**¿Por qué debo tirar más cuerda si uso polea móvil?**
Por conservación de energía. El trabajo que realizas (fuerza × distancia que tiras) debe igualar el trabajo sobre la carga (peso × altura que sube). Si reduces la fuerza a la mitad, debes duplicar la distancia para mantener el trabajo constante.

**¿Cómo sé cuántos tramos activos tiene mi sistema?**
Cuenta los segmentos de cuerda que salen directamente de la polea móvil y sostienen la carga. En una polea fija simple, es 1. En una polea móvil simple, es 2. Si la cuerda está atada a un punto fijo, ese tramo no cuenta como activo si no sostiene directamente.

**¿Cuándo conviene usar polea fija vs móvil?**
Polea fija: cuando necesitas comodidad de dirección (tirar hacia abajo para subir) y la carga no es excesiva. Polea móvil: cuando la carga supera la fuerza que puedes ejercir directamente y necesitas reducir el esfuerzo a costa de tirar más cuerda.

## Conexiones transversales y rutas de estudio

Este leaf se conecta con otros en el árbol Phyxio:

- **Prerequisitos**: Leyes de Newton (equilibrio de fuerzas), vectores (descomposición de tensiones), trabajo y energía (conservación y transferencia).

- **Continuaciones naturales**: Poleas compuestas (sistemas con múltiples poleas), máquinas simples (palancas, planos inclinados), estática avanzada (estructuras, armaduras).

- **Aplicaciones**: Grúas y sistemas de elevación, aparejos náuticos, sistemas de rescate, poleas de gimnasio.

- **Perspectiva histórica**: La evolución histórica se detalla en `historia.md` de este leaf, incluyendo contribuciones de Arquímedes y el desarrollo de aparejos marinos.

## Síntesis final

Has visto cómo la polea simple, aparentemente elemental, encierra principios físicos profundos sobre dirección de fuerzas y ventaja mecánica. La distinción entre polea fija, con [[nSel]] de 1, y polea móvil, con [[nSel]] de 2, no es meramente taxonómica; refleja diferencias fundamentales en cómo se distribuyen las tensiones en el sistema.

La verdadera comprensión trasciende las relaciones formales de fuerza ideal y recorrido de cuerda. Consiste en desarrollar intuición sobre cuándo aplica el modelo ideal, qué limitaciones introduce el rozamiento y la inercia, y cómo el principio de conservación de energía gobierna inevitablemente el intercambio entre fuerza y desplazamiento.

Este conocimiento es transferible a cualquier sistema mecánico donde se redirija o multiplique fuerza: desde grúas industriales hasta equipos de rehabilitación médica. Comprender las poleas simples es dar el primer paso hacia el dominio de máquinas más complejas y hacia una visión integrada de la mecánica Newtoniana.
