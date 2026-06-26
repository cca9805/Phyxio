const e=`# Fuerza de Lorentz

## Contexto conceptual

La fuerza de Lorentz es la fuerza fundamental que experimenta cualquier partícula cargada en presencia de campos electromagnéticos. Es el puente entre la electrostática (fuerzas sobre cargas en reposo) y la electrodinámica (fuerzas sobre cargas en movimiento): unifica en una sola expresión la fuerza eléctrica y la magnética.

En el árbol de Phyxio, la fuerza de Lorentz se sitúa después de la carga eléctrica, el campo eléctrico y el campo magnético, porque es la síntesis de todos ellos. Comprender la fuerza de Lorentz equivale a comprender cómo responden las partículas a los campos que las rodean: es la ecuación que cierra el ciclo entre "crear campos" e "interactuar con ellos".

La fuerza de Lorentz es también la base de incontables dispositivos: el tubo de rayos catódicos, el espectrómetro de masas, el ciclotón, el motor eléctrico, el altavoz, las auroras boreales y los aceleradores de partículas funcionan todos gracias a esta única ley.

## 🟢 Nivel esencial

Una partícula con carga [[q]] colocada en un campo experimenta una fuerza sobre ella. Si el campo es de origen eléctrico, la fuerza apunta en la dirección del campo para [[q]] positiva y en sentido contrario para [[q]] negativa; esta acción ocurre aunque la partícula esté en reposo.

Si la partícula se mueve, el campo [[B]] ejerce sobre ella una acción adicional perpendicular a la velocidad [[v]] y al propio campo. Esta acción nunca puede acelerar ni frenar a la partícula: solo curva su trayectoria.

La fuerza de Lorentz [[F_L]] es la suma de ambas acciones. Para [[q]] positiva que se mueve perpendicular a [[B]], la acción debida al campo apunta en la tercera dirección ortogonal (regla de la mano derecha). Para [[q]] negativa, el sentido se invierte.

Lo más importante: la acción de [[B]] sobre la partícula **nunca realiza trabajo** porque es siempre perpendicular al movimiento. El campo [[B]] solo puede cambiar la dirección de [[v]], nunca su módulo.

## 🔵 Nivel formal

La expresión completa de la fuerza de Lorentz combina las dos componentes. Para el módulo de la fuerza total en los casos habituales donde las componentes son perpendiculares entre sí o donde interesa calcular el módulo de la parte magnética:

{{f:fuerza_magnetica_modulo}}

Aquí [[F_m]] es el módulo de la fuerza magnética, [[q]] es la carga de la partícula, [[v]] es su rapidez, [[B]] es el módulo del campo magnético y [[sin_theta]] es el seno del ángulo entre el vector velocidad y el vector campo magnético.

Para la fuerza total que incluye la componente eléctrica [[F_E]] y la magnética [[F_m]]:

{{f:fuerza_lorentz_total}}

La componente eléctrica [[F_E]] depende solo de [[q]] y del campo eléctrico [[E]]; no depende de [[v]]. La componente magnética sí depende de [[v]] y es nula para partículas en reposo. Esta diferencia es la clave conceptual de toda la electrodinámica.

El despiece de la fórmula:
- Si [[v]] tiende a cero, [[F_L]] se reduce a la fuerza eléctrica pura: proporcional a [[q]] y a [[E]].
- Si [[E]] es nulo, [[F_L]] es solo magnética: proporcional a [[q]], [[v]], [[B]] y [[sin_theta]].
- Si [[sin_theta]] es cero (velocidad paralela al campo), [[F_m]] es nula aunque la partícula se mueva.
- Si [[sin_theta]] es 1 (velocidad perpendicular al campo), [[F_m]] es máxima para ese [[v]] y [[B]].

## 🔴 Nivel estructural

La fuerza de Lorentz tiene una asimetría profunda entre su componente eléctrica y magnética que no es evidente en la fórmula escalar: la componente eléctrica es **conservativa** (puede hacer trabajo; el trabajo depende solo del punto inicial y final) mientras que la componente magnética es **no conservativa pero no disipativa** (no realiza trabajo en ningún desplazamiento).

Esta asimetría tiene consecuencias concretas. En un campo puramente magnético uniforme, una partícula con [[v]] perpendicular a [[B]] describe una circunferencia de radio proporcional al momento lineal de la partícula e inversamente proporcional a [[q]] y [[B]]. Este es el principio del espectrómetro de masas: partículas con diferente relación masa-carga describen radios diferentes bajo el mismo [[B]], permitiendo identificarlas. En el ciclotón, la componente eléctrica acelera la partícula y la magnética la mantiene en trayectoria circular.

> [!WARNING]
> La fuerza magnética es perpendicular a [[v]] en **todo instante**, no solo inicialmente. Esto significa que aunque la trayectoria sea curva, en cada punto el vector fuerza apunta hacia el centro de curvatura local, cambiando continuamente de dirección. Calcular [[F_m]] solo en el instante inicial y asumir que su dirección no cambia es uno de los errores más graves.

Si el vector [[v]] no es perpendicular a [[B]], la partícula describe una **hélice**: la componente de [[v]] paralela a [[B]] no experimenta fuerza magnética y se mantiene constante, mientras la componente perpendicular describe un círculo. El resultado es una trayectoria helicoidal con eje paralelo a [[B]].

> [!TIP]
> Para resolver problemas de trayectoria en campo magnético: descomponer [[v]] en componente paralela y perpendicular a [[B]]. La componente paralela determina el paso de la hélice; la perpendicular determina el radio del círculo. La suma geométrica da la trayectoria completa.

La fuerza de Lorentz es también la base del **selector de velocidades de Wien**: cuando un haz de partículas con cargas diferentes atraviesa una región con [[E]] y [[B]] perpendiculares entre sí y a la velocidad, solo las partículas con una velocidad específica tal que la fuerza eléctrica y la magnética se cancelen exactamente atraviesan en línea recta. Las demás son desviadas. Este dispositivo permite separar partículas por velocidad independientemente de su carga.

## Interpretación física profunda

La fuerza de Lorentz tiene una coherencia interna que no es obvia: en la teoría de la relatividad especial, el campo eléctrico y el magnético no son entidades separadas sino dos aspectos del mismo tensor electromagnético de campo. Un observador en reposo ve un campo puramente eléctrico; el mismo campo observado desde un sistema en movimiento incluye una componente magnética. La fuerza de Lorentz es la expresión covariante de esta realidad: al transformar entre sistemas de referencia inerciales, [[F_E]] y [[F_m]] se mezclan de forma controlada.

En términos operativos, esto significa que no existe una distinción absoluta entre "fuerza eléctrica" y "fuerza magnética": la distinción depende del sistema de referencia del observador. Lo que es fuerza magnética para un observador puede ser parcialmente fuerza eléctrica para otro. La fuerza de Lorentz total [[F_L]] es la cantidad que todos los observadores acuerdan en su efecto dinámico sobre la partícula.

> [!NOTE]
> La potencia instantánea que la fuerza magnética entrega a la partícula es siempre cero porque [[F_m]] es perpendicular a [[v]]. Esto implica que solo el campo eléctrico puede cambiar la energía cinética de la partícula. Un acelerador que solo use campos magnéticos para guiar la partícula necesita obligatoriamente campos eléctricos para acelerarla.

## Orden de magnitud

La fuerza sobre un electrón (carga aproximadamente 1.6×10⁻¹⁹ C) moviéndose a 10⁶ m/s en un campo magnético de 0.1 T con [[sin_theta]] igual a 1 es del orden de 1.6×10⁻¹⁴ N. Esta fuerza, aunque diminuta en escala macroscópica, es enorme comparada con el peso del electrón (aproximadamente 9×10⁻³⁰ N): la razón es de unos 10¹⁵, lo que explica por qué los campos magnéticos dominan completamente el movimiento de los electrones libres.

Para una gota de agua macroscópica cargada con 1 µC moviéndose a 1 m/s en el campo terrestre (5×10⁻⁵ T), la fuerza magnética es del orden de 5×10⁻¹¹ N: despreciable comparada con su peso (unas 10⁻⁶ N). El efecto magnético en objetos cotidianos cargados a baja velocidad es irrelevante.

## Método de resolución personalizado

Secuencia para resolver problemas de fuerza de Lorentz:

1. **Identificar qué campos están presentes**: determinar si hay [[E]], [[B]] o ambos.
2. **Determinar [[sin_theta]]**: leer la geometría del problema; si [[v]] es perpendicular a [[B]], [[sin_theta]] es 1; si son paralelos, es 0.
3. **Calcular [[F_m]]**: usar la fórmula del módulo magnético con los valores identificados.
4. **Calcular [[F_E]]**: si hay campo eléctrico, añadir la componente eléctrica.
5. **Combinar vectorialmente**: la dirección de [[F_m]] es perpendicular al plano de [[v]] y [[B]]; la de [[F_E]] es paralela a [[E]].
6. **Verificar coherencia**: si [[v]] es paralela a [[B]], la fuerza total debe ser solo eléctrica.

## Casos especiales y ejemplo extendido

**Caso 1 — Movimiento circular**: Partícula con [[v]] perpendicular a un campo [[B]] uniforme y sin campo eléctrico. La fuerza magnética es siempre perpendicular a [[v]] y actúa como fuerza centrípeta. La partícula describe un círculo con radio que depende del momento lineal dividido por el producto de [[q]] y [[B]]. Al duplicar [[B]], el radio se reduce a la mitad.

**Caso 2 — Trayectoria helicoidal**: Partícula con [[v]] no perpendicular a [[B]]. La componente de [[v]] paralela a [[B]] no experimenta fuerza; la perpendicular describe un círculo. La combinación produce una hélice cuyo eje es paralelo a [[B]].

**Caso 3 — Selector de velocidades de Wien**: Se disponen [[E]] y [[B]] perpendiculares entre sí y a la dirección del haz. Solo las partículas con [[v]] tal que la fuerza eléctrica y la magnética se cancelan atraviesan en línea recta, independientemente de [[q]]. Este dispositivo selecciona velocidades, no masas.

## Preguntas reales del alumno

**¿Por qué la fuerza magnética no realiza trabajo?**

El trabajo es la integral de la fuerza en la dirección del desplazamiento. La fuerza magnética [[F_m]] es siempre perpendicular a [[v]], que es la dirección del desplazamiento instantáneo. El producto escalar de [[F_m]] por el desplazamiento es siempre cero: la fuerza magnética no puede transferir energía a la partícula.

**¿Cómo sé la dirección de la fuerza si el producto vectorial es difícil de visualizar?**

La regla de la mano derecha: apunta los dedos en la dirección de [[v]], dobla hacia [[B]]; el pulgar señala la dirección de [[F_m]] para carga positiva. Para carga negativa, la fuerza es opuesta. Con práctica, esta regla es rápida y fiable.

**¿Qué pasa si la partícula está inicialmente en reposo?**

La componente magnética es nula (depende de [[v]]). La única fuerza es la eléctrica [[F_E]] si hay campo eléctrico. El campo magnético no ejerce ninguna influencia sobre una carga en reposo.

## Conexiones transversales y rutas de estudio

La fuerza de Lorentz conecta hacia atrás con la [carga eléctrica](leaf:fisica-clasica/electromagnetismo/fundamentos/carga-electrica) y el [campo magnético](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-magnetico), que son sus ingredientes. Hacia adelante, conduce al movimiento de partículas cargadas, los espectrómetros de masas y el electromagnetismo relativista.

El selector de velocidades de Wien es la aplicación directa más limpia de [[F_L]] igual a cero: las dos fuerzas se compensan exactamente a una velocidad determinada.

## Síntesis final

La fuerza de Lorentz unifica la fuerza eléctrica y la magnética en una sola expresión. La componente eléctrica actúa sobre cargas en reposo o en movimiento; la magnética solo sobre cargas en movimiento y nunca realiza trabajo. Su dominio completo requiere controlar el factor geométrico [[sin_theta]] y la geometría vectorial del producto cruzado.
`;export{e as default};
