const e=`\uFEFF# Balance de momento [[P]] con flujo de masa [[m]]\r
\r
## Contexto conceptual\r
\r
La forma escolar de la segunda ley suele escribirse como "fuerza igual a masa por aceleración". Esa lectura funciona bien mientras el sistema tenga una frontera fija y la masa relevante no entre ni salga de ella. El problema aparece cuando el cuerpo que se quiere seguir pierde o gana materia: un cohete expulsa gases, una cinta recibe arena, una manguera lanza agua o un vagón pierde líquido. En todos esos casos, la masa que cruza la frontera transporta momento lineal, y por eso la dinámica del subsistema no puede leerse solo con la versión cerrada de la ley.\r
\r
El leaf introduce precisamente esta corrección. No cambia la conservación del momento; cambia la forma de aplicarla cuando el sistema elegido es abierto. La pregunta central deja de ser "¿qué fuerza actúa?" en abstracto y pasa a ser otra: qué parte del cambio de momento del cuerpo proviene de la fuerza externa [[Fext]] y qué parte proviene del flujo de materia con velocidad relativa [[u]].\r
\r
## 🟢 Nivel esencial\r
\r
En este nivel, la idea clave es que la materia tiene "memoria" de su movimiento. Cuando un objeto entra o sale de un sistema, no lo hace vacío; lleva consigo su propia cantidad de movimiento. Esto significa que un sistema abierto puede acelerar o frenar por dos razones distintas: porque alguien lo empuja (fuerza externa) o porque la masa que entra o sale "empuja" al sistema al integrarse o separarse de él.\r
\r
Imagina un patinador que lleva una mochila pesada y la lanza hacia atrás. Aunque nadie lo empuje desde fuera, el patinador acelerará hacia adelante. ¿Por qué? Porque la mochila se lleva parte del momento hacia atrás, y para compensar, el resto del sistema (el patinador) debe ganar momento hacia adelante. El balance de momento es la herramienta que nos permite cuantificar este intercambio. No es que aparezca una fuerza mágica; es que el momento total debe repartirse entre la masa que se queda y la que se va.\r
\r
> [!TIP]\r
> Piensa en el flujo de masa como una "corriente de momento". Si la masa entra "lenta" a un sistema "rápido", tiende a frenarlo. Si la masa sale "rápida" hacia atrás, tiende a impulsarlo.\r
\r
## 🔵 Nivel formal\r
\r
### Derivación por balance de transporte\r
\r
La descripción formal no nace de una fuerza reactiva misteriosa, sino de un balance contable aplicado a un sistema abierto (volumen de control). En un intervalo de tiempo dt, el cambio en el momento lineal del subsistema dP es igual al impulso de las fuerzas externas más el momento neto que cruza la frontera. Al dividir por el intervalo temporal obtenemos la ecuación operativa del balance:\r
\r
\r
Aquí, el término [[u]]·[[mdot]] representa el **transporte de momento**. Es crucial entender que [[u]] es la velocidad del flujo **relativa** al sistema. La aceleración instantánea [[dvdt]] del sistema resulta de la competencia entre la acción mecánica del entorno [[Fext]] y el transporte de materia [[mdot]]. La tasa de cambio del momento ([[dPdt]]) equivale a la suma vectorial de ambos términos.\r
\r
De forma más compacta, cuando se aisla la contribución del flujo sobre el sistema como empuje [[Ft]], la relación se reduce a:\r
\r
\r
Esta expresión vincula directamente la magnitud del empuje [[Ft]] con el caudal [[mdot]] y la velocidad relativa [[u]] del flujo.\r
\r
### Diferenciación entre estado y cambio\r
\r
Es vital no confundir la definición de momento con la ley dinámica. Mientras que [[P]] expresa cuánto momento acumula el cuerpo (proporcional a [[m]] y a [[v]]) en un instante dado, la ecuación de balance explica por qué ese valor está cambiando. En sistemas de masa variable, la aceleración resultante [[dvdt]] no coincide con lo que predice la segunda ley cerrada, ya que la propia masa [[m]] es función del tiempo. El leaf obliga a separar qué parte de [[dvdt]] es aceleración "newtoniana" y qué parte es "propulsiva" por el flujo [[mdot]].\r
\r
{{f:thrust}}\r
\r
{{f:tsiolkovsky}}\r
\r
{{f:balance}}\r
\r
## 🔴 Nivel estructural\r
\r
### La frontera como decisión metodológica\r
\r
La mayor sutileza del nivel estructural es reconocer que el balance depende totalmente de dónde dibujemos la frontera del sistema. Si incluimos la arena que cae y la cinta en un único sistema cerrado gigante, el término [[u]]·[[mdot]] desaparece del balance (se convierte en una interacción interna) y solo queda la fuerza externa. El leaf elige la frontera del **subsistema abierto** porque es la más útil para ingeniería: nos permite calcular, por ejemplo, el empuje de un motor o la tensión en un soporte sin tener que seguir cada molécula de gas o cada grano de arena que sale.\r
\r
### Límites de validez del modelo\r
\r
El modelo de balance de momento unidimensional presentado aquí tiene límites claros que deben analizarse en problemas complejos:\r
\r
1.  **Régimen no estacionario**: El modelo supone que la masa cruza la frontera de forma suave. Si el flujo es turbulento o pulsante, el término [[u]]·[[mdot]] requiere una integración espacial y temporal más compleja (ecuación de Reynolds).\r
2.  **Disipación de energía**: El balance de momento es robusto, pero no implica conservación de energía mecánica. En procesos de carga (como arena cayendo en una cinta), siempre hay una pérdida de energía en forma de calor debido al choque inelástico de la masa al integrarse, incluso si el momento se describe perfectamente.\r
3.  **Límites Relativistas**: Si la velocidad de escape [[u]] o la velocidad del sistema [[v]] se acercan a una fracción apreciable de la velocidad de la luz, la masa ya no es una constante aditiva y el balance debe reformularse usando el cuadrimomento.\r
4.  **Simetría del flujo**: Se asume que el flujo es colineal con el movimiento o que se conoce su ángulo exacto. Si el flujo sale en múltiples direcciones (como una explosión), el balance debe tratarse de forma estrictamente vectorial.\r
\r
### Relación con la Mecánica de Fluidos\r
\r
Este leaf es la base de las **Ecuaciones de Navier-Stokes** en su forma integral. Lo que aquí llamamos "flujo de masa" es el término convectivo del transporte de momento. Entender este balance es fundamental para saltar de la mecánica de partículas sólidas al estudio de medios continuos, donde casi todos los sistemas son, por definición, abiertos.\r
\r
## Interpretación física profunda\r
\r
La lección física definitiva es que el momento no es una propiedad estática del "objeto", sino una cantidad que fluye. Cuando la masa cruza la frontera, el sistema intercambia "capacidad de movimiento" con el vacío o el entorno. Por eso, el término [[u]]·[[mdot]] no debe memorizarse como un parche matemático, sino leerse como una corriente de realidad física. El balance explica por qué un cohete puede acelerar en el vacío absoluto: no necesita aire para "empujarse"; necesita expulsar momento hacia atrás para que el resto del sistema, por pura contabilidad física, deba ganar momento hacia adelante.\r
\r
## Orden de magnitud\r
\r
*   **Cinta transportadora industrial**: Un flujo de 10 kg/s de mineral que deba ser acelerado a 2 m/s requiere una fuerza adicional de solo 20 N. Es una carga pequeña frente al rozamiento.\r
*   **Manguera de alta presión**: Un chorro de 20 kg/s a 40 m/s genera una fuerza de retroceso de 800 N (equivalente al peso de una persona de 80 kg). Por eso las mangueras de bomberos requieren varios operadores o soportes fijos.\r
*   **Propulsión Aeroespacial**: Un motor de transbordador expulsa gases a unos 4000 m/s con un caudal de 1000 kg/s, generando un empuje [[Ft]] de 4 millones de Newtons. Aquí, el flujo de momento domina totalmente sobre cualquier otra fuerza. La fuerza de empuje se cuantifica con\r
\r
\r
En ausencia de fuerzas externas, integrando la ecuación de balance sobre la variación de masa se obtiene la ganancia total de velocidad [[Delta_v]] en función de la velocidad de exhaust [[ve]], la masa inicial [[m0]] y la masa final [[mf]]:\r
\r
\r
## Método de resolución personalizado\r
\r
1.  **Dibujar la frontera**: Identifica qué es "sistema" y qué es "flujo".\r
2.  **Elegir ejes y signos**: Define qué dirección es positiva (crucial para el signo de [[u]]).\r
3.  **Identificar el tipo de flujo**: ¿Entra masa, sale masa o ambas? (determina el signo de [[mdot]]).\r
4.  **Aplicar el balance**: Usa la ecuación para encontrar la incógnita (usualmente [[Fext]] o la aceleración resultante).\r
5.  **Verificar energía**: Recuerda que aunque el momento cuadre, el sistema puede estar perdiendo energía mecánica por el propio proceso de flujo.\r
6.  **Sentido común**: Comprueba si la "fuerza de empuje" resultante apunta en la dirección intuitiva (opuesta a la eyección, a favor de la succión).\r
\r
## Casos especiales y ejemplo extendido\r
\r
**El Vagón con Fuga Vertical.** Imagina un vagón lleno de agua que se mueve a velocidad constante y tiene un agujero en el fondo. El agua cae verticalmente **respecto al vagón**. Esto significa que [[u]] = 0 en la dirección horizontal del movimiento. Según la ecuación de balance, cuando [[Fext]] y [[u]] son nulos, [[dPdt]] también es nulo. El vagón mantiene su velocidad constante a pesar de perder masa. El momento total disminuye (porque hay menos masa moviéndose), pero la velocidad no cambia porque la masa que se va no "roba" momento horizontal al sistema.\r
\r
## Preguntas reales del alumno\r
\r
*   **¿Por qué no puedo usar simplemente la segunda ley cerrada?** Porque esa fórmula asume que "la masa que aceleras" es siempre la misma. En un cohete, la masa que aceleras ahora es menor que la de hace un segundo, y la aceleración [[dvdt]] crece a medida que se consume combustible.\r
*   **¿Es [[u]]·[[mdot]] una fuerza real?** Es una fuerza en el sentido de que produce [[dvdt]] y se mide en Newtons, pero es una "fuerza de transporte". No hay un objeto sólido empujando; es el flujo de materia el que ejerce la acción, recogido como empuje [[Ft]] en la ecuación de empuje.\r
*   **¿Qué pasa si la masa entra y sale a la vez?** Simplemente sumas los términos de transporte: [[Fext]] + (u_in · mdot_in) - (u_out · mdot_out) = [[dPdt]].\r
\r
## Conexiones transversales y rutas de estudio\r
\r
*   **Base**: [Momento lineal](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal).\r
*   **Aplicación directa**: [Ecuación del cohete](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/ecuacion-del-cohete).\r
*   **Extensión**: Introducción a la Mecánica de Fluidos y Volúmenes de Control.\r
\r
## Síntesis final\r
\r
El balance de momento con flujo de masa es la extensión natural de la dinámica de Newton a sistemas que intercambian materia con su entorno. Nos enseña que el cambio de movimiento de un cuerpo depende tanto de los empujones externos [[Fext]] como de la "corriente de momento" [[u]]·[[mdot]] que entra o sale por su frontera. Dominar este concepto permite entender desde el funcionamiento de una turbina hasta la física de la propulsión espacial, obligándonos a ser rigurosos en la definición de nuestras fronteras y en el seguimiento contable de la materia.\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
