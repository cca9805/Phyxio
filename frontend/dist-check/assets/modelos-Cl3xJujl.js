const e=`## Modelo ideal\r
\r
El modelo ideal del sistema cerrado supone que la frontera es perfectamente impermeable a la materia, que el calor [[Q]] y el trabajo [[W]] son los únicos mecanismos de transferencia de energía, y que los estados del sistema están completamente definidos por variables termodinámicas de equilibrio. Bajo estas condiciones, el primer principio en su forma más simple, [[DeltaU]] igual a [[Q]] más [[W]], se aplica sin correcciones adicionales.\r
\r
En este modelo se conserva la masa total del sistema (ninguna molécula cruza la frontera). Se ignoran efectos de superficie (tensión superficial, energía de interfaz), efectos de campo (energía magnética o eléctrica almacenada), y cualquier forma de trabajo distinta del trabajo mecánico de presión-volumen y del trabajo eléctrico declarado explícitamente. El sistema se trata como una masa homogénea cuya energía interna es función de sus variables de estado.\r
\r
## Hipótesis\r
\r
- La frontera del sistema es impermeable a toda forma de materia, incluyendo gases disueltos, iones y partículas submicroscópicas. Violar esta hipótesis requiere incluir flujo de masa en el balance, convirtiendo el sistema en abierto.\r
- El proceso ocurre lo suficientemente lento como para que el sistema esté siempre en equilibrio termodinámico interno (hipótesis cuasiestática). Violar esta hipótesis hace que las variables de estado no estén bien definidas durante el proceso y el balance se convierte en una aproximación.\r
- El trabajo mecánico es exclusivamente de presión-volumen para gases (W igual a menos integral de P dV con convención que W es trabajo realizado por el sistema) a menos que se incluya trabajo eléctrico, magnético o superficial explícitamente.\r
- Las pérdidas de energía por radiación electromagnética a través de la frontera son despreciables en la escala de tiempo del proceso, de modo que todo intercambio de energía puede atribuirse a [[Q]] y [[W]].\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo de sistema cerrado es válido cuando el flujo de masa a través de la frontera es inferior al 0.1 % de la masa total del sistema durante el proceso. En términos prácticos, esto equivale a que las fugas o absorciones de gas por permeabilidad de las paredes sean despreciables para la escala energética del proceso.\r
\r
Para el modelo cuasiestático, la condición cuantitativa orientativa es que la velocidad de cambio de estado del sistema sea inferior a la velocidad del sonido dividida por la dimensión característica del sistema, lo que típicamente corresponde a escalas de tiempo mayores de 1 más para sistemas de laboratorio de tamaño centimétrico. Para procesos más rápidos, como explosiones o choques, el modelo cuasiestático no aplica y se requiere termodinámica de no equilibrio.\r
\r
Para el trabajo de presión-volumen, la condición de exclusividad es que la contribución de otras formas de trabajo sea inferior al 1 % del trabajo total. Cuando el trabajo eléctrico o magnético supera ese umbral, debe incluirse explícitamente en el balance.\r
\r
## Señales de fallo del modelo\r
\r
La primera señal de fallo es una discrepancia observable entre [[DeltaU]] calculado y el calor medido más el trabajo medido, cuando ambos son conocidos. Si [[DeltaU]] medido difiere de Q más W en más de un 2 %, hay al menos un mecanismo de transferencia de energía no contabilizado.\r
\r
La segunda señal es una variación de masa del sistema detectable por pesada directa. Si el sistema pierde o gana masa durante el proceso, el modelo de sistema cerrado no es válido y debe usarse el modelo de sistema abierto.\r
\r
La tercera señal aparece en sistemas con campos electromagnéticos intensos: si la energía del campo magnético o eléctrico almacenada en el sistema cambia significativamente, el trabajo de campo debe incluirse en el balance aunque el trabajo de presión-volumen sea nulo o pequeño.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando hay flujo de masa a través de la frontera (tuberías, válvulas, difusión de gas), el modelo se extiende al sistema abierto. El balance energético incluye la entalpía de flujo de las corrientes de masa, que incorpora tanto la energía interna como la energía de flujo de presión-volumen del fluido entrante o saliente.\r
\r
Cuando el proceso es tan rápido que el sistema no está en equilibrio interno en ningún instante (explosiones, ondas de choque), el modelo se extiende a la termodinámica de no equilibrio, donde las variables de estado se definen localmente (no globalmente para todo el sistema) y se resuelven las ecuaciones de conservación de fluidos.\r
\r
Cuando conviene pasar al modelo de sistema abierto: cuando hay flujo neto de masa a través de la frontera superior al 0.5 % de la masa inicial por unidad de tiempo, o cuando la variación de entalpía de flujo representa más del 5 % del balance energético total. Cambiar al modelo de no equilibrio cuando los tiempos de proceso son del mismo orden que los tiempos de relajación interna del sistema.\r
\r
## Comparación operativa\r
\r
| Criterio | Sistema cerrado ideal | Sistema abierto | Sistema de no equilibrio |\r
|---|---|---|---|\r
| Flujo de masa | Nulo por hipótesis | Posible, con entalpía de flujo | No aplica (campo continuo) |\r
| Complejidad del balance | Moderada: Q + W | Alta: Q + W + flujos de entalpía | Muy alta: ecuaciones de campo |\r
| Estados bien definidos | Sí, en todo momento | Sí, en entradas/salidas | Solo localmente |\r
| Aplicación preferida | Pistones, baterías, calorímetros | Turbinas, compresores, calderas | Explosiones, ondas de choque |\r
| Precisión típica | Alta para procesos lentos | Alta para flujos estacionarios | Alta para procesos ultrarrápidos |\r
\r
El modelo cerrado ideal es el de mayor utilidad didáctica y la base conceptual de los ciclos termodinámicos. Su principal limitación es que no aplica cuando hay intercambio de masa, que es el caso más frecuente en dispositivos industriales continuos.\r
`;export{e as default};
