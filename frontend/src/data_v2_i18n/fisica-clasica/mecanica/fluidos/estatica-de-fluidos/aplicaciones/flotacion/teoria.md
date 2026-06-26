# Flotación

## Contexto conceptual
La **flotación** es el equilibrio estático de un cuerpo sumergido en un fluido, siendo la aplicación práctica del Principio de Arquímedes. Un cuerpo flota cuando el empuje ascendente compensa exactamente su peso gravitatorio. Este principio permite determinar el calado y la estabilidad de cualquier objeto, desde icebergs hasta buques de carga, basándose en la interacción geométrica y mecánica entre el sólido y el medio líquido.

## 🟢 Nivel esencial
La flotación es esencialmente una competencia entre dos fuerzas opuestas y constantes: el **peso** (fuerza de atracción gravitatoria que tira del objeto hacia el centro de la Tierra) y el **empuje** (fuerza de empuje hidrostático que el fluido ejerce hacia arriba). Para que un objeto flote en la superficie, el empuje máximo que el fluido es capaz de generar debe ser al menos igual al peso del objeto. Si el peso es mayor que este empuje máximo (lo cual ocurre cuando el objeto está totalmente sumergido y aún así la gravedad gana la competencia), el objeto se hundirá irremediablemente hasta encontrar un soporte sólido en el fondo del recipiente.

La clave fundamental de la flotación no es simplemente la masa total del objeto, sino su **densidad promedio**. Este concepto explica por qué un clavo de hierro macizo se hunde rápidamente, mientras que un barco de acero de miles de toneladas flota con elegancia: el barco no es un bloque sólido de acero, sino una cáscara que encierra un gran volumen de aire. Al promediar la densidad del acero con la del aire contenido en su interior, la densidad total del barco resulta ser menor que la del agua. El diseño del casco permite que el barco "engañe" al fluido, desplazando una enorme cantidad de agua cuyo peso supera con creces el peso propio de la estructura metálica.

Además, la flotación es un proceso de auto-ajuste automático de la naturaleza. Cuando colocas un objeto en el agua, este comienza a descender por efecto de la gravedad, desplazando fluido a su paso. A medida que más volumen entra en el agua, el empuje hacia arriba aumenta proporcionalmente. El objeto deja de descender en el instante preciso en que el empuje iguala al peso. Si el objeto es muy ligero, apenas necesitará sumergir una pequeña fracción de su cuerpo para alcanzar este equilibrio; si es muy pesado pero menos denso que el fluido, se sumergirá casi por completo antes de detenerse.

## 🔵 Nivel formal
El análisis físico-matemático de la flotación se sustenta en la aplicación de la primera ley de Newton a sistemas hidrostáticos. Para un cuerpo en equilibrio de flotación, la suma de las fuerzas verticales debe ser nula. Si definimos el eje vertical como positivo hacia arriba, el balance de fuerzas se expresa como igualdad entre empuje y peso.

Al sustituir las expresiones fundamentales del empuje hidrostático y el peso gravitatorio, obtenemos una relación que vincula las densidades y los volúmenes involucrados en el fenómeno:
La igualdad física entre ambos efectos puede leerse como: densidad del fluido por aceleración gravitatoria por volumen sumergido, igual a densidad del objeto por aceleración gravitatoria por volumen total.

Donde [[rho_f]] representa la densidad del fluido, la aceleración de la gravedad es un factor común, [[Vsum]] es el volumen de la parte sumergida (volumen de carena), [[rho_obj]] la densidad promedio del cuerpo y [[Vtot]] su volumen total. Al simplificar la gravedad en ambos miembros, llegamos a la relación operativa de la **fracción sumergida** [[frac_sum]]:

{{f:fraccion_sumergida}}

En palabras: la fracción sumergida coincide con la razón entre volumen sumergido y volumen total, y también con la razón entre densidad del objeto y densidad del fluido.

Esta ecuación es de una elegancia notable porque nos dice que el porcentaje de un objeto que queda bajo el agua depende exclusivamente de la relación entre su densidad y la del fluido, independientemente de la masa total o de la forma del cuerpo (siempre que sea compacto). Por ejemplo, si un trozo de madera tiene exactamente el \( 70\% \) de la densidad del agua, podemos predecir con total certeza que el \( 70\% \) de su volumen permanecerá sumergido, mientras que el \( 30\% \) restante sobresaldrá de la superficie. Esta proporcionalidad directa es la base del funcionamiento de los densímetros, instrumentos que permiten medir la pureza de líquidos observando qué tan profundo se hunden en ellos.

Para cuantificar el volumen exacto de fluido desplazado por un cuerpo que flota libremente, podemos utilizar el volumen total y la fracción calculada anteriormente:

{{f:volumen_sumergido}}

En palabras: el volumen sumergido se obtiene multiplicando la fracción sumergida por el volumen total.

Este volumen sumergido es fundamental en arquitectura naval, ya que determina el "calado" del buque, es decir, la distancia vertical desde la quilla hasta la línea de flotación. Un aumento en la carga del buque incrementa su peso total, lo que obliga al sistema a buscar un nuevo punto de equilibrio sumergiendo un mayor volumen de carena hasta que el nuevo empuje compense la carga adicional.

## 🔴 Nivel estructural
El análisis estructural de la flotación va más allá del simple equilibrio de fuerzas y entra en el campo de la estabilidad rotacional y los límites de validez del modelo hidrostático. Para que un cuerpo flote de manera segura, no solo debe existir un equilibrio vertical, sino que dicho equilibrio debe ser estable; es decir, el cuerpo debe ser capaz de recuperar su posición original si una fuerza externa lo inclina levemente. En este análisis intervienen tres puntos críticos de la estructura física:
1.  **Centro de Gravedad ($G$)**: El punto donde se considera aplicada la fuerza del peso. Su posición depende de la distribución de masas del objeto.
2.  **Centro de Carena ($C$ o $B$)**: El centro de gravedad del volumen de fluido desplazado, donde actúa la fuerza de empuje. Su posición cambia dinámicamente según la inclinación del cuerpo.
3.  **Metacentro ($M$)**: Un punto geométrico de referencia. Para que la flotación sea estable (que el barco no vuelque), el metacentro debe situarse por encima del centro de gravedad.

Existen condiciones y límites estructurales que pueden alterar el comportamiento predicho por las ecuaciones ideales. En la micro-escala, la **tensión superficial** puede actuar como una membrana elástica que soporta el peso de objetos pequeños (como los insectos zapateros) incluso si su densidad es mayor que la del fluido. Por otro lado, en sistemas dinámicos donde el fluido está en movimiento, aparecen fuerzas de sustentación hidrodinámica que pueden elevar el cuerpo, reduciendo su calado efectivo por debajo de lo que predice la estática pura.

Finalmente, la integridad estructural del cuerpo es un factor determinante. Si un objeto hueco sufre una fractura y el fluido externo comienza a inundar sus cavidades (como ocurrió en el Titanic), su densidad promedio [[rho_obj]] aumenta progresivamente al sustituir aire por agua. En el momento en que esta densidad promedio iguala o supera la densidad del fluido exterior [[rho_f]], la fracción sumergida teórica [[frac_sum]] alcanza el valor de \( 1 \), el equilibrio de flotación en superficie se rompe y el cuerpo inicia un descenso acelerado hacia el fondo, transformando un sistema de flotación en un sistema de hundimiento por gravedad.

## Interpretación física profunda
La flotación es, en última instancia, una manifestación del principio de mínima energía. El sistema cuerpo-fluido busca la configuración que minimice la energía potencial gravitatoria total. Cuando un cuerpo se sumerge, debe "levantar" una cantidad equivalente de fluido hacia la superficie; el equilibrio se alcanza cuando el esfuerzo energético de levantar el fluido iguala al beneficio energético del descenso del cuerpo. Es un diálogo mecánico entre la inercia de la masa sólida y la presión hidrostática del medio continuo, donde la superficie libre del líquido actúa como la frontera de decisión para el sistema.

## Orden de magnitud
-   **Icebergs**: La densidad del hielo es de aproximadamente \( 917\text{ kg/m}^3 \), mientras que la del agua de mar es de \( 1025\text{ kg/m}^3 \). La fracción sumergida resultante es de \( 0.895 \), lo que confirma la advertencia náutica de que casi el \( 90\% \) de la masa de un iceberg permanece invisible bajo la superficie, representando un peligro oculto.
-   **Cuerpo humano**: En agua dulce, una persona con los pulmones llenos de aire tiene una densidad promedio de unos \( 980\text{ kg/m}^3 \). Esto permite que el \( 2\% \) del volumen corporal (suficiente para la nariz y boca) quede fuera del agua sin esfuerzo. Sin embargo, al exhalar el aire, la densidad puede subir a \( 1020\text{ kg/m}^3 \), provocando el hundimiento si no se realiza un trabajo mecánico adicional.
-   **Mar Muerto**: Debido a su extrema concentración de sales, su densidad alcanza los \( 1240\text{ kg/m}^3 \). Un bañista humano flota con una fracción sumergida de apenas \( 0.80 \), lo que resulta en una flotabilidad tan alta que es prácticamente imposible hundirse por completo de forma pasiva.

## Método de resolución personalizado
1.  **Identificar las Densidades**: Obtén el valor de la densidad del objeto [[rho_obj]] y del fluido [[rho_f]] en unidades coherentes (usualmente \( \text{kg/m}^3 \)).
2.  **Calcular la Fracción Teórica**: Aplica la relación de densidades para determinar el porcentaje de volumen que quedará bajo la superficie.
3.  **Verificar la Condición de Flotación**: Si la fracción calculada es menor o igual a \( 1 \), el objeto flotará. Si es mayor a \( 1 \), el objeto se hundirá y la estática de flotación ya no es aplicable.
4.  **Determinar Volúmenes Reales**: Utiliza el volumen total [[Vtot]] para hallar el volumen de carena [[Vsum]] multiplicando por la fracción sumergida.
5.  **Análisis de Estabilidad**: Evalúa si el centro de gravedad está lo suficientemente bajo (añadiendo lastre si es necesario) para garantizar que el equilibrio sea estable frente a inclinaciones.

## Casos especiales y ejemplo extendido
**El densímetro industrial**: Este instrumento es una aplicación magistral de la flotación. Consiste en un cilindro de vidrio hueco con un peso calibrado en su base. Al introducirlo en un líquido de densidad desconocida, el instrumento se hunde hasta que el empuje iguala su peso. Dado que el peso y el volumen total del densímetro son constantes, la profundidad a la que se detiene depende exclusivamente de la densidad del líquido. Una escala graduada en el cuello del instrumento permite leer directamente la densidad o el grado alcohólico, convirtiendo un fenómeno de flotación en una medición analítica de alta precisión.

## Preguntas reales del alumno
-   **¿Por qué floto mejor en el mar que en una piscina?** Porque el agua salada es más densa que el agua dulce. Al ser [[rho_f]] mayor, la fracción sumergida [[frac_sum]] necesaria para equilibrar tu peso es menor, por lo que sobresales más de la superficie.
-   **¿Qué pasa si el objeto es hueco pero tiene una fuga?** Su densidad promedio aumenta a medida que el agua reemplaza al aire. Cuando la densidad media supera la del fluido exterior, el empuje máximo ya no puede compensar el peso y el objeto se hunde.
-   **¿Puede algo flotar en el aire?** Sí, los globos de helio o de aire caliente flotan siguiendo exactamente las mismas leyes. Mientras la densidad del conjunto (globo + gas + carga) sea menor que la densidad del aire circundante, existirá una fracción de flotación positiva.

## Conexiones transversales y rutas de estudio
-   **Oceanografía**: Estudio de las corrientes marinas impulsadas por variaciones de densidad (circulación termohalina).
-   **Zoología**: Mecanismos de flotabilidad neutra en cefalópodos mediante cámaras de gas controladas.
-   **Ingeniería Aeroespacial**: Comportamiento de combustibles en depósitos de satélites bajo condiciones de microgravedad.

## Síntesis final
La flotación es el equilibrio entre el peso y el empuje hidrostático. Gobernada por la relación de densidades, define el comportamiento de cualquier cuerpo que interactúe con un fluido. Dominar sus leyes permite predecir el calado y la estabilidad en el diseño naval y la comprensión de fenómenos naturales.