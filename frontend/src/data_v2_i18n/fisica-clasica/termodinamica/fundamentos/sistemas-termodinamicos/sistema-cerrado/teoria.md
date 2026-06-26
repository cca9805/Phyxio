# Sistema cerrado

## Contexto conceptual

La termodinámica clasifica los sistemas según los intercambios que permiten con el entorno. El **sistema cerrado** ocupa la posición intermedia entre el sistema aislado (sin ningún intercambio) y el sistema abierto (con intercambio de materia): permite el paso de energía en forma de calor y trabajo a través de su frontera, pero prohíbe el flujo de materia. Esta configuración es la más frecuente en los análisis termodinámicos de laboratorio y de ingeniería, porque describe con precisión máquinas de pistón, cámaras de combustión cerradas, baterías eléctricas y recipientes de reacción sellados.

El sistema cerrado es el escenario natural del primer principio de la termodinámica en su formulación más completa, donde la variación de energía interna resulta de la interacción de dos procesos de transferencia de energía cualitativamente distintos: el calor, impulsado por gradientes de temperatura, y el trabajo, impulsado por gradientes de presión, tensión u otras fuerzas generalizadas.

## 🟢 Nivel esencial

Un sistema cerrado es un sistema que no pierde ni gana masa, pero sí puede ganar o perder energía. Piensa en una jeringa sellada: el émbolo puede moverse (intercambio de trabajo) y las paredes pueden transmitir calor, pero el gas dentro de la jeringa no escapa. Eso es un sistema cerrado.

La consecuencia más directa es que la energía interna [[DeltaU]] del sistema puede cambiar, y ese cambio depende exactamente de cuánto calor [[Q]] entra o sale y cuánto trabajo [[W]] entra o sale. Si entra más energía de la que sale, [[DeltaU]] aumenta. Si sale más de la que entra, [[DeltaU]] disminuye. La frontera del sistema cerrado es permeable a la energía pero no a la materia. En otras palabras, el intercambio de energía es posible, pero el intercambio de sustancia no lo es.

## 🔵 Nivel formal

El primer principio de la termodinámica establece la relación exacta entre [[DeltaU]], [[Q]] y [[W]] para cualquier proceso en un sistema cerrado:

{{f:primer_principio_cerrado}}

Esta expresión dice que la variación de [[DeltaU]] es igual a la suma del calor [[Q]] recibido por el sistema y el trabajo [[W]] recibido por el sistema. La convención de signos es fundamental: [[Q]] positivo cuando el sistema absorbe calor del entorno; [[W]] positivo cuando el entorno realiza trabajo sobre el sistema (convención IUPAC).

El segundo principio impone una restricción sobre la variación de entropía [[S]] del sistema cerrado. La desigualdad de Clausius establece que:

{{f:segundo_principio_cerrado}}

La igualdad se cumple solo para procesos reversibles; la desigualdad estricta indica que el proceso es irreversible y que se genera entropía dentro del sistema. A diferencia del sistema aislado, la entropía [[S]] de un sistema cerrado puede disminuir si el sistema cede suficiente calor al entorno a baja temperatura, sin que eso viole el segundo principio, ya que la entropía total del universo sigue sin disminuir. La convención IUPAC para [[W]] es positivo cuando el entorno realiza trabajo sobre el sistema, lo que debe declararse explícitamente antes de aplicar el primer principio para evitar errores de signo sistemáticos.

## 🔴 Nivel estructural

La profundidad del sistema cerrado reside en la distinción entre funciones de estado y funciones de proceso. [[DeltaU]] es una función de estado: su valor depende únicamente de los estados termodinámicos inicial y final, independientemente del camino seguido. En cambio, [[Q]] y [[W]] son funciones de proceso: sus valores individuales dependen del camino termodinámico y pueden ser completamente distintos para dos procesos que lleven al mismo estado final.

Esta asimetría tiene consecuencias experimentales concretas: en un proceso isocórico (volumen constante, sin trabajo de compresión), todo el cambio de [[DeltaU]] procede del calor [[Q]]. En un proceso adiabático (sin calor), todo el cambio procede del trabajo [[W]]. En un proceso isotérmico de gas ideal, [[DeltaU]] es nulo porque la energía interna de un gas ideal depende solo de la temperatura, y entonces [[Q]] es igual a menos [[W]].

> [!NOTE]
> Los ciclos termodinámicos —como el ciclo de Carnot o el ciclo de Otto— son secuencias de procesos en un sistema cerrado donde el sistema regresa al estado inicial. Como [[DeltaU]] es una función de estado, su integral a lo largo de un ciclo completo es necesariamente nula. El trabajo neto producido por el ciclo es igual al calor neto absorbido.

La distinción entre proceso reversible e irreversible adquiere su mayor relevancia en el sistema cerrado. Un proceso es reversible si puede revertirse sin dejar huella en el sistema ni en el entorno. Los procesos reales siempre son irreversibles porque involucran gradientes finitos de temperatura y presión, fricción y otras disipaciones. La desigualdad de Clausius cuantifica esta irreversibilidad mediante la generación de entropía interna [[S]], que es siempre no negativa para el universo.

> [!WARNING]
> La convención de signos del trabajo es fuente frecuente de error. En física y química se usa habitualmente la convención IUPAC (W positivo cuando el sistema recibe trabajo), mientras que en ingeniería mecánica se usa la convención contraria (W positivo cuando el sistema realiza trabajo). Antes de aplicar el primer principio, declarar explícitamente qué convención se usa.

## Interpretación física profunda

La conservación de [[DeltaU]] bajo el primer principio es una manifestación del teorema de Noether aplicado a la homogeneidad temporal: si las leyes físicas no cambian con el tiempo, la energía se conserva. En el sistema cerrado, esta conservación no implica que [[DeltaU]] sea constante, sino que cualquier cambio en [[DeltaU]] tiene una causa identificable: [[Q]] o [[W]]. No puede haber cambio de [[DeltaU]] sin un mecanismo de transferencia correspondiente.

La desigualdad de Clausius conecta el primer y el segundo principio de forma precisa: en un sistema cerrado, la entropía [[S]] puede disminuir (el sistema puede "ordenarse") si se extrae calor a una temperatura suficientemente alta. Las máquinas frigoríficas son exactamente esto: un sistema cerrado (el refrigerante) que cede más entropía al entorno caliente de la que recibe del entorno frío, gracias a un aporte de trabajo que paga el coste termodinámico del ordenamiento.

## Orden de magnitud

Para un gas en un cilindro con émbolo sometido a una compresión adiabática de 10:1, la temperatura puede multiplicarse por un factor del orden de 2 a 3 para gases diatómicos, lo que representa un aumento de [[DeltaU]] del orden del 200 al 300% respecto al valor inicial. El trabajo de compresión necesario para comprimir 1 mol de gas ideal de 1 bar a 10 bar adiabáticamente es del orden de 2000 J.

Para un proceso de calentamiento isobárico de 1 kg de agua de 20 °C a 100 °C, [[Q]] es del orden de 335 000 J (usando el calor específico de 4186 J/kg·K), mientras que el trabajo de expansión a presión atmosférica es del orden de 30 J, despreciable frente al calor. En este caso, [[DeltaU]] es prácticamente igual a [[Q]].

## Método de resolución personalizado

Para analizar un sistema cerrado, sigue este protocolo:

1. **Declarar el sistema y la frontera**: identificar qué es el sistema cerrado y confirmar que la frontera es impermeable a la materia. Si hay flujo de masa, el modelo debe cambiarse a sistema abierto.
2. **Declarar la convención de signos**: IUPAC (Q positivo = sistema recibe calor; W positivo = sistema recibe trabajo) o ingeniería (W positivo = sistema realiza trabajo). Ser consistente hasta el final.
3. **Identificar el tipo de proceso**: isocórico (W nulo), isobárico, isotérmico, adiabático (Q nulo), o proceso general. Esto permite simplificar el primer principio.
4. **Aplicar el primer principio**: calcular [[DeltaU]], [[Q]] o [[W]] según los datos disponibles.
5. **Aplicar el segundo principio**: calcular [[S]] o verificar que la desigualdad de Clausius se cumple. Distinguir entre la entropía del sistema y la entropía del universo.
6. **Interpretar el resultado**: relacionar el valor de [[DeltaU]] con cambios de temperatura, fase o composición química del sistema.

## Casos especiales y ejemplo extendido

**Proceso adiabático:** [[Q]] es nulo por definición. El primer principio se reduce a [[DeltaU]] igual a [[W]]. En una compresión adiabática, el trabajo realizado sobre el gas aumenta su energía interna y, para un gas ideal, su temperatura. Es el proceso que ocurre en los cilindros de un motor de combustión en la carrera de compresión.

**Proceso isocórico:** El trabajo de presión-volumen es nulo. El primer principio se reduce a [[DeltaU]] igual a [[Q]]. Todo el calor intercambiado modifica directamente la energía interna. Es el proceso que ocurre en una bomba calorimétrica.

**Proceso cíclico completo:** El sistema regresa al estado inicial, por lo que [[DeltaU]] es exactamente nulo. El trabajo neto producido es igual al calor neto absorbido. Esta es la base de los motores térmicos: un ciclo cerrado en el que el sistema intercambia calor con dos fuentes a distinta temperatura y produce trabajo neto.

## Preguntas reales del alumno

**¿Por qué Q y W dependen del camino si [[DeltaU]] no depende de él?**

Porque [[DeltaU]] refleja la diferencia entre propiedades del estado (que son únicas para cada estado del sistema), mientras que [[Q]] y [[W]] describen cómo ocurre la transferencia, que puede variar enormemente. El estado final puede alcanzarse por un camino donde casi todo es calor y casi nada es trabajo, o por un camino donde casi todo es trabajo y casi nada es calor. En ambos casos [[DeltaU]] es el mismo, pero [[Q]] y [[W]] son muy distintos.

**¿Puede la entropía de un sistema cerrado disminuir?**

Sí. Un frigorífico es un ejemplo cotidiano: el refrigerante (sistema cerrado que no pierde masa) tiene una entropía que disminuye cuando cede calor al condensador. Esta disminución es posible porque el compresor aporta trabajo, y ese trabajo paga el coste termodinámico de la disminución de entropía del sistema. La entropía del universo (sistema más entorno) nunca disminuye.

**¿Cuál es la diferencia práctica entre sistema cerrado y sistema aislado?**

En el sistema aislado, [[DeltaU]] es siempre cero porque ni [[Q]] ni [[W]] pueden ser distintos de cero. En el sistema cerrado, [[DeltaU]] puede cambiar libremente mediante [[Q]] y [[W]]. La diferencia práctica es que el sistema cerrado puede ser usado como motor, refrigerador o calentador, mientras que el sistema aislado no puede intercambiar energía útil con el entorno.

## Conexiones transversales y rutas de estudio

El sistema cerrado conecta directamente hacia abajo con el [sistema aislado](leaf:física-clasica/termodinámica/fundamentos/sistemas-termodinámicos/sistema-aislado), que es el caso particular donde [[Q]] y [[W]] son ambos nulos. Hacia arriba conecta con el [sistema abierto](leaf:física-clasica/termodinámica/fundamentos/sistemas-termodinámicos/sistema-abierto), que generaliza el balance incluyendo entalpía de flujo por los cruces de masa.

Hacia bloques más avanzados, el sistema cerrado es el escenario de los **procesos termodinámicos** (isocórico, isobárico, isotérmico, adiabático) y de los **ciclos termodinámicos** (Carnot, Otto, Diesel, Rankine). El concepto de **entalpía** surge naturalmente en sistemas cerrados a presión constante, donde [[Q]] es igual a la variación de entalpía.

## Síntesis final

El sistema cerrado es el escenario canónico del primer principio: [[DeltaU]] igual a [[Q]] más [[W]]. Su frontera impermeable a la materia garantiza que toda variación de energía interna tiene una causa energética identificable. El segundo principio añade la restricción de que [[S]] puede disminuir en el sistema si se extrae calor, pero la entropía total del universo nunca decrece.
