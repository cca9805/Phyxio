const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de 12 kg cuelga del techo mediante un cable ideal. Inicialmente está en reposo. Se aplica una fuerza de tracción que genera una tensión de 156 N en el cable. Determinar: (a) la aceleración del bloque y su sentido; (b) la velocidad que alcanza tras 3 s de aplicada la tensión, partiendo del reposo; (c) la tensión mínima necesaria para mantener el bloque en equilibrio estático. Calcular también la energía potencial gravitatoria adquirida cuando el bloque asciende 2 metros desde su posición inicial.\r
\r
## Datos\r
\r
- Masa del bloque: 12 kg\r
- Tensión aplicada: 156 N\r
- Gravedad: 9.8 m/s²\r
- Velocidad inicial: 0 m/s\r
- Altura de ascenso para cálculo de energía: 2 m\r
\r
## Definición del sistema\r
\r
El sistema mecánico consiste en un único cuerpo rígido (el bloque) vinculado a un soporte fijo (el techo) mediante un cable flexible que solo transmite tracción. El bloque tiene masa [[m]] concentrada en su centro de gravedad, y su movimiento está restringido a la dirección vertical por la naturaleza del vínculo. No hay rozamiento ni resistencia del aire significativa. Las magnitudes relevantes son: masa [[m]], tensión [[T]], peso [[W]], aceleración [[a]], velocidad, tiempo, altura [[h]], energía potencial [[E_p]], y gravedad [[g]].
\r
## Modelo físico\r
\r
El sistema se modela como un bloque puntual suspendido de un cable vertical ideal (sin masa propia, inextensible e inelástico). Las únicas fuerzas verticales son la tensión del cable hacia arriba y el peso gravitatorio hacia abajo. El modelo aplica la segunda ley de Newton en la dirección vertical.\r
\r
Las fórmulas fundamentales que gobiernan el comportamiento del sistema son:\r
\r
{{f:peso_gravitatorio}}\r
\r
{{f:dinamica_vertical}}\r
\r
{{f:equilibrio_vertical}}\r
\r
{{f:tension_aceleracion}}\r
\r
{{f:energia_potencial}}\r
\r
## Justificación del modelo\r
\r
El modelo del bloque colgante con cable ideal es válido porque la masa del cable es despreciable frente a la masa del bloque (hilo de nylon de 2 m vs bloque de metal de 12 kg). La velocidad alcanzada (menos de 10 m/s) es suficientemente baja para que la resistencia del aire sea insignificante frente a las fuerzas de gravedad y tensión (menos del 1 % de efecto).\r
\r
El modelo dejaría de ser válido si: (a) el cable fuera muy elástico y se estirara apreciablemente durante la aceleración; (b) la velocidad fuera tan alta que la resistencia del aire comparara con el peso; (c) el cable tuviera masa comparable a la del bloque; o (d) el bloque rotara significativamente durante el movimiento, introduciendo energía cinética rotacional no considerada.\r
\r
## Resolución simbólica\r
\r
Paso 1: calcular el peso del bloque mediante la fórmula del peso gravitatorio.\r
\r
{{f:peso_gravitatorio}}\r
\r
Paso 2: aplicar la segunda ley de Newton en la dirección vertical para obtener la aceleración resultante de la diferencia entre tensión y peso.\r
\r
{{f:dinamica_vertical}}\r
\r
Despejando algebraicamente la aceleración: [[a]] resulta igual a ([[T]] menos [[W]]) dividido entre [[m]].\r
\r
Paso 3: para la velocidad tras un tiempo dado, aplicar cinemática de aceleración uniforme partiendo de reposo: la velocidad equivale a [[a]] multiplicada por ese tiempo.
\r
Paso 4: para el equilibrio estático, la condición es que [[a]] sea cero, lo cual implica que [[T]] iguala a [[W]] según la fórmula de equilibrio.\r
\r
{{f:equilibrio_vertical}}\r
\r
Paso 5: para calcular la tensión necesaria dada una aceleración, se usa la fórmula alternativa despejada de la segunda ley.\r
\r
{{f:tension_aceleracion}}\r
\r
Paso 6: la energía potencial gravitatoria adquirida al ascender una altura [[h]] se calcula mediante la fórmula de energía potencial.\r
\r
{{f:energia_potencial}}\r
\r
## Sustitución numérica\r
\r
Paso 1: calculando el peso, multiplicamos 12 kg por 9.8 m/s², obteniendo 117.6 N. Diremos que [[W]] es aproximadamente 118 N.\r
\r
{{f:peso_gravitatorio}}\r
\r
Paso 2: para la aceleración, la diferencia entre tensión y peso es 156 N menos 117.6 N, que da 38.4 N hacia arriba. Dividiendo esta fuerza neta entre 12 kg obtenemos una aceleración de 3.2 m/s². El signo positivo indica que el bloque acelera hacia arriba.\r
\r
{{f:dinamica_vertical}}\r
\r
Paso 3: tras 3 s con aceleración de 3.2 m/s² partiendo de reposo, la velocidad alcanzada es 9.6 m/s hacia arriba, equivalente a aproximadamente 35 km/h.\r
\r
Paso 4: la tensión de equilibrio estático es igual al peso, es decir 117.6 N (diremos aproximadamente 118 N).\r
\r
{{f:equilibrio_vertical}}\r
\r
Paso 5: la energía potencial al ascender 2 m desde el reposo se calcula multiplicando 12 kg por 9.8 m/s² por 2 m, dando 235.2 J, aproximadamente 235 J.\r
\r
{{f:energia_potencial}}\r
\r
## Validación dimensional\r
\r
- El peso [[W]] tiene unidades de masa \`[M]\` por aceleración \`[L T⁻²]\`, resultando \`[M L T⁻²]\` que son newtons ✓\r
- La diferencia de fuerzas \`[M L T⁻²]\` dividida entre masa \`[M]\` da aceleración \`[L T⁻²]\` en m/s² ✓\r
- El tiempo \`[T]\` multiplicado por aceleración \`[L T⁻²]\` da velocidad \`[L T⁻¹]\` en m/s ✓\r
- La energía potencial [[E_p]] tiene unidades de masa \`[M]\` por aceleración \`[L T⁻²]\` por longitud \`[L]\`, resultando \`[M L² T⁻²]\` que son julios ✓\r
\r
## Interpretación física\r
\r
El resultado significa que la tensión de 156 N supera el peso de 118 N con un margen neto de 38 N, lo que produce una aceleración moderada hacia arriba de 3.2 m/s², aproximadamente un tercio de la gravedad terrestre. Esto indica que el sistema está en régimen de elevación acelerada, no en equilibrio dinámico. Después de 3 segundos de aceleración constante, el bloque asciende a casi 10 m/s (36 km/h), una velocidad considerable que en aplicaciones reales de elevación de cargas requeriría precaución y sistemas de frenado adecuados.\r
\r
La tensión mínima de equilibrio de 118 N representa el umbral crítico entre ascenso y descenso. Si la tensión disminuye exactamente hasta este valor, la aceleración se anula y el bloque mantiene velocidad constante (o permanece en reposo). Si baja por debajo de 118 N, el bloque comienza a descender. Este comportamiento ilustra cómo la tensión del cable es una fuerza de vínculo que se adapta a las condiciones dinámicas, a diferencia del peso que permanece fijo para una masa dada.\r
\r
La energía potencial de 235 J almacenada tras ascender 2 m representa el trabajo realizado contra la gravedad. Si el bloque se soltara desde esa altura, esta energía se convertiría en energía cinética durante la caída, alcanzando aproximadamente 6.3 m/s justo antes del reposo inicial (descontando rozamiento), lo que verifica la consistencia energética del análisis.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una grúa torre en obra de construcción debe elevar vigas de hormigón prefabricado de 2500 kg (2.5 toneladas) desde el nivel del suelo hasta el décimo piso de un edificio en construcción. El operario necesita determinar qué tensión mínima debe soportar el cable de acero durante la elevación, y qué aceleración máxima puede imprimir a la carga sin superar la carga de trabajo segura del cable, que según las especificaciones del fabricante es de 35 000 N. El ingeniero de obra también necesita estimar la potencia mínima del motor de elevación.\r
\r
## Estimación física\r
\r
El peso de la viga se obtiene multiplicando su masa por la gravedad terrestre: 2500 kg por 9.8 m/s² da aproximadamente 24 500 N (24.5 kN). Esta es la tensión de equilibrio que el cable experimenta cuando la viga cuelga en reposo esperando ser elevada. Es la carga base que el sistema debe soportar continuamente.\r
\r
Para elevar la viga con aceleración, la tensión debe superar el peso según la segunda ley de Newton. La diferencia entre la carga segura máxima (35 000 N) y el peso de equilibrio (24 500 N) es de aproximadamente 10 500 N. Dividiendo este margen de fuerza disponible entre la masa de 2500 kg obtenemos una aceleración máxima permisible de aproximadamente 4.2 m/s² hacia arriba.\r
\r
En la práctica industrial, las grúas aceleran mucho más suavemente que este límite teórico (típicamente entre 0.5 y 1 m/s²) para evitar oscilaciones peligrosas de la carga suspendida y reducir el desgaste del cable. Una aceleración práctica de 1 m/s² requeriría una tensión de 24 500 N más 2500 N (producto de la masa por la aceleración deseada), totalizando 27 000 N, valor bien dentro del límite seguro de 35 000 N y dejando un margen de seguridad del 23 % sobre la carga máxima.\r
\r
La potencia del motor se estima considerando que a velocidad constante de elevación de 0.5 m/s la potencia mecánica necesaria es el producto de la tensión por la velocidad, es decir 27 000 N por 0.5 m/s, dando 13.5 kW, aproximadamente 18 CV, sin considerar pérdidas por fricción en poleas.\r
\r
## Interpretación\r
\r
La magnitud [[T]] en este contexto de ingeniería representa la carga real de tracción que el cable debe soportar en cada instante. El diseñador de la grúa utiliza la fórmula de tensión para aceleración dada para calcular la tensión máxima esperada durante el arranque (peso más sobrecarga dinámica).\r
\r
{{f:tension_aceleracion}}\r
\r
Este cálculo permite seleccionar un cable con resistencia a la tracción nominal varias veces superior al valor calculado. El factor de seguridad típico es de 5 a 10 para elevación de personas, y de 3 a 5 para cargas materiales como estas vigas.\r
\r
La masa [[m]] determina la escala inercial del sistema: una viga más pesada requiere el mismo incremento de tensión para producir la misma aceleración que una más ligera, pero el peso base es proporcionalmente mayor. Esto implica que para masas grandes, la tensión total se acerca más al límite del material, haciendo crucial el control preciso de la aceleración para evitar sobrecargas dinámicas que podrían comprometer la integridad del cable.\r
`;export{e as default};
