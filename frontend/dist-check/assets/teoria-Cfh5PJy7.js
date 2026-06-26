const e=`\uFEFF# Marco del centro de masas\r
\r
## Contexto conceptual\r
\r
El **marco del centro de masas** (o marco CM) representa la perspectiva más simplificada y potente para el estudio de sistemas dinámicos. En la mecánica clásica, cuando analizamos un conjunto de partículas desde un laboratorio fijo, el movimiento suele verse oscurecido por la traslación global del conjunto. El marco CM es un sistema de referencia inercial que "viaja" con el sistema, situando al observador en el propio baricentro.\r
\r
Desde esta perspectiva, el sistema de partículas se ve como una entidad en reposo traslacional, lo que permite aislar las interacciones internas (como colisiones o explosiones) de la trayectoria externa. Es el sistema de referencia donde el momento lineal total es idénticamente nulo, por lo que a menudo se denomina **marco de momento cero**. Comprender esta herramienta es fundamental para abordar problemas de física de partículas, astrofísica y dinámica de sistemas complejos con elegancia y eficiencia matemática.\r
\r
## 🟢 Nivel esencial\r
\r
Imaginar el marco del centro de masas es como observar una danza desde el punto de vista del director de orquesta que se desplaza junto a los bailarines: aunque el escenario se mueva, para el director los bailarines solo realizan movimientos relativos entre sí.\r
\r
1.  **El punto de vista del equilibrio:** En el marco CM, el "centro de gravedad" del movimiento está siempre quieto en el origen. No importa cuán rápido se muevan las partículas individuales, el promedio ponderado de sus movimientos se cancela.\r
2.  **Simetría en el choque:** Si dos esferas chocan, desde el marco CM siempre se ven venir una hacia la otra con momentos iguales y opuestos. Tras el choque, se alejarán siguiendo la misma regla. Esta simetría hace que los cálculos sean mucho más sencillos que en el laboratorio.\r
3.  **La energía mínima:** Toda la energía que ves en el marco CM es energía "útil" o energía interna [[K_cm]]. Un sistema puede tener mucha energía en el laboratorio porque vuela muy rápido, pero esa energía de vuelo no sirve para chocar o deformar cosas; solo la energía que sobrevive en el marco CM es la que realmente participa en los procesos internos.\r
\r
> [!TIP]\r
> Si alguna vez te sientes confundido por las trayectorias cruzadas de dos cuerpos, "salta" mentalmente al marco CM. Allí, el problema se reduce a un movimiento de ida y vuelta a lo largo de una única línea de interacción.\r
\r
## 🔵 Nivel formal\r
\r
### La velocidad del marco\r
Para un sistema compuesto por las masas [[m1]] y [[m2]] con velocidades [[v1]] y [[v2]], cada velocidad individual puede verse como un caso concreto de [[v_i]]. El momento lineal total [[ptot]] se obtiene primero como suma de partículas:\r
\r
{{f:total_momentum_sum}}\r
\r
La velocidad del observador en el CM [[vcm]] se obtiene promediando las velocidades individuales según su inercia:\r
\r
{{f:vcm_formula}}\r
\r
Donde la masa total del sistema [[M]] se define como:\r
\r
{{f:M_sum}}\r
\r
### Transformación de Galileo\r
Para traducir cualquier observación del laboratorio al marco CM, restamos la velocidad de arrastre del marco. La velocidad interna de cualquier partícula [[u_i]] respecto al centro de masas es:\r
\r
{{f:velocity_transformation}}\r
\r
### El balance de momento nulo\r
La propiedad definitoria de este marco es que, al sumar todas las contribuciones de momento lineal calculadas con las velocidades internas, el resultado [[p_cm_total]] es siempre cero:\r
\r
\r
En un sistema de dos cuerpos, esto implica que los momentos internos son vectores opuestos, cumpliendo con el balance:\r
\r
\r
### Energía interna y Teorema de König\r
La energía cinética total [[K_lab]] se calcula primero desde el laboratorio sumando las energías de las partículas:\r
\r
{{f:lab_kinetic_energy}}\r
\r
Después se descompone de forma exacta en dos términos físicamente distintos mediante el primer teorema de König:\r
\r
{{f:konig_energy}}\r
\r
Aquí, el término:\r
\r
\r
representa la energía cinética de traslación del sistema como un todo, mientras que [[K_cm]] es la energía cinética interna.\r
\r
{{f:reduced_mass_formula}}\r
\r
{{f:relative_velocity}}\r
\r
{{f:internal_energy_reduced}}\r
\r
{{f:total_momentum_vcm}}\r
\r
{{f:u_balance}}\r
\r
{{f:K_trans}}\r
\r
## 🔴 Nivel estructural\r
\r
### Masa Reducida e Invarianza\r
El marco CM permite reducir el problema de dos cuerpos a un problema de un solo cuerpo equivalente mediante el concepto de **masa reducida** [[mu]]. Esta magnitud combina ambas masas en una sola inercia efectiva que rige el movimiento relativo:\r
\r
\r
La velocidad relativa [[v_rel]] se define como la diferencia galileana entre las velocidades de laboratorio:\r
\r
\r
Gracias a esto, la energía interna [[K_cm]] puede expresarse únicamente en función de la velocidad relativa [[v_rel]]:\r
\r
\r
Esta formulación es estructuralmente superior porque [[K_cm]] y [[v_rel]] son **invariantes de Galileo**: tienen el mismo valor para cualquier observador inercial, lo que las convierte en propiedades intrínsecas del sistema, independientes del laboratorio.\r
\r
### Relación con el Momento Total\r
El momento lineal total [[ptot]] medido en el laboratorio puede interpretarse como el momento de una partícula ficticia de masa [[M]] concentrada en el centro de masas:\r
\r
\r
En un sistema aislado, donde no hay fuerzas externas, [[vcm]] es constante. Esto significa que, aunque las partículas choquen o exploten internamente, el marco CM es un sistema inercial perfecto que sigue moviéndose en línea recta a velocidad constante.\r
\r
## Interpretación física profunda\r
\r
El marco del centro de masas no es solo un truco matemático, es el "centro de inercia" del universo local del sistema. Es el único marco donde la energía cinética del sistema es **mínima**. Cualquier otro observador verá una energía mayor porque percibirá una traslación adicional.\r
\r
En procesos inelásticos, como un choque donde dos cuerpos quedan pegados, el destino final de las partículas es el reposo absoluto... pero solo en el marco CM. En el laboratorio, el conjunto final seguirá moviéndose con la velocidad [[vcm]] porque el momento lineal total no puede desaparecer. Por tanto, [[K_cm]] representa el límite superior de energía que un sistema puede "perder" o transformar en calor durante una colisión.\r
\r
## Orden de magnitud\r
\r
*   **Escala atómica:** En la colisión de dos protones en el LHC (CERN), se utilizan colisionadores frontales para que el laboratorio coincida con el marco CM (donde la velocidad del centro de masas es nula). Esto permite que toda la energía cinética de los haces (del orden de TeV) sea energía interna [[K_cm]] disponible para crear nuevas partículas.\r
*   **Escala macroscópica:** Si un coche de 1000 kg a 20 m/s choca contra un camión de 9000 kg parado, la [[vcm]] es de solo 2 m/s. La mayor parte de la energía (90%) es energía interna [[K_cm]] que se disipará en la deformación de los vehículos.\r
*   **Detección de absurdos:** Si al calcular las velocidades en el marco CM ([[u_i]]) obtienes que ambas partículas se mueven en el mismo sentido, el cálculo es **erróneo**. En el marco CM, las partículas deben moverse siempre en sentidos opuestos (o estar ambas en reposo) para que el momento total sea cero.\r
\r
## Método de resolución personalizado\r
\r
1.  **Anclaje en el Laboratorio:** Identifica las masas [[m1]], [[m2]] y sus velocidades vectoriales [[v1]], [[v2]].\r
2.  **Cálculo del Marco:** Obtén la velocidad del centro de masas [[vcm]]. Este será tu nuevo "cero" de velocidades.\r
3.  **Salto al Marco CM:** Resta [[vcm]] a cada partícula para obtener las velocidades internas [[u_i]].\r
4.  **Análisis Simétrico:** Resuelve la interacción (choque, rebote, explosión) usando la conservación del momento lineal en el marco CM, que se describe mediante:\r
\r
\r
5.  **Retorno al Laboratorio:** Una vez obtenidas las velocidades finales en el marco CM, suma de nuevo [[vcm]] para entregar los resultados respecto al suelo.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso de masas iguales:** En este escenario, la [[vcm]] es simplemente la media aritmética de las velocidades. En el marco CM, ambas partículas se ven moviéndose a la misma rapidez pero en sentidos contrarios. Es el caso de máxima simetría.\r
\r
**Caso de masa infinita:** Si una partícula choca contra una pared o un planeta (masa [[m2]] mucho mayor que [[m1]]), el centro de masas está prácticamente anclado en el objeto pesado. El marco CM coincide con el marco del objeto pesado, simplificando el análisis a un rebote simple.\r
\r
**Ejemplo extendido:** Considera dos patinadores que se empujan. En el laboratorio, ambos se mueven. En el marco del centro de masas, si inicialmente estaban juntos, el CM se queda quieto en el punto de empuje, y ambos se alejan con momentos iguales. El trabajo realizado por sus músculos se convierte íntegramente en energía cinética interna [[K_cm]].\r
\r
## Preguntas reales del alumno\r
\r
*   **¿Puede la velocidad del CM ser mayor que la de las partículas?** No. Al ser un promedio ponderado, [[vcm]] siempre estará comprendida entre el valor mínimo y máximo de las velocidades individuales (considerando su dirección).\r
*   **¿Por qué se conserva la velocidad del CM en un choque?** Porque un choque es una interacción interna. Según la tercera ley de Newton, las fuerzas internas se cancelan y no pueden alterar el estado de movimiento del centro de inercia del sistema.\r
*   **¿Es el marco CM siempre inercial?** Solo si la fuerza externa neta sobre el sistema es cero. Si hay fuerzas externas, el CM acelera y el marco CM deja de ser inercial.\r
*   **¿Qué pasa con la energía de traslación del CM tras un choque?** Nada. Esa parte de la energía (descrita por la siguiente expresión) es "intocable" mientras no haya fuerzas externas:\r
\r
\r
Es la energía interna [[K_cm]] la que cambia durante el proceso.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
El estudio del marco CM es el puente directo hacia la **Física de Colisiones** y la **Mecánica Orbital**. En el problema de dos cuerpos de Kepler (planetas), el análisis se realiza siempre en el marco del baricentro.\r
\r
*   Para profundizar en la masa reducida: [Dinámica de rotación](leaf:fisica-clasica/mecanica/solido-rigido/rotacion).\r
*   Para aplicar estos conceptos a choques: [Conservación del momento lineal](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-del-momento).\r
\r
## Síntesis final\r
\r
El marco del centro de masas es el observador de momento nulo que revela la verdadera dinámica interna de un sistema. Al separar el movimiento de transporte global de la interacción relativa mediante la transformación de Galileo y el teorema de König, este marco permite resolver problemas complejos con una simetría y claridad inalcanzables desde cualquier otra perspectiva.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
