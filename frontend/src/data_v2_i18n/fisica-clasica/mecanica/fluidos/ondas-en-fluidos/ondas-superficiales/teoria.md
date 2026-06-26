# Teoría de Ondas Superficiales

## Contexto conceptual
Las ondas superficiales son perturbaciones que se propagan en la interfaz entre dos medios, normalmente agua y aire. En una ola de gravedad no viaja una masa compacta de agua hacia delante: se propaga un patrón de deformación que transporta energía, mientras las partículas del fluido describen trayectorias cerradas o casi cerradas alrededor de su posición media.

La fuerza restauradora principal es la gravedad. Si la superficie se eleva, el peso del agua tiende a devolverla al nivel de equilibrio; si se hunde, la presión hidrostática y la continuidad del fluido reorganizan el movimiento. Por eso la profundidad [[h]] y la longitud de onda [[lambda]] no son detalles geométricos secundarios: determinan si el fondo marino influye o no en la velocidad [[c]] de propagación.

---

## 🟢 Nivel esencial
### Qué es una ola superficial
Una ola superficial combina desplazamiento vertical y horizontal. En una boya se observa una subida y bajada cíclica, pero la boya no avanza con la misma rapidez que la cresta; esto muestra que la ola es una transferencia de energía y de cantidad de movimiento oscilatorio, no un chorro de agua desplazándose como un bloque.

La longitud de onda [[lambda]] mide la distancia entre dos crestas consecutivas. La profundidad [[h]] mide cuánto espacio tiene la columna de agua para completar su movimiento orbital. Si el fondo está muy lejos respecto a la escala de la ola, la onda se comporta como si el océano fuese ilimitado; si el fondo está cerca, la base de la ola se frena, las órbitas se aplastan y la velocidad queda controlada por [[h]].

La primera lectura didáctica debe ser visual: una misma perturbación puede cambiar de aspecto sin cambiar de naturaleza. En mar abierto se reconoce por crestas separadas y movimiento suave; cerca de la costa se acorta, se eleva y se vuelve inestable. Esa transformación no se explica añadiendo fuerzas nuevas, sino cambiando la relación entre la escala de la ola y el espacio disponible bajo ella.

---

## 🔵 Nivel formal
### Relación de dispersión y límites físicos
El modelo formal de referencia es la teoría lineal de Airy para ondas de gravedad. Supone un fluido incompresible, no viscoso, irrotacional y con amplitud pequeña frente a [[lambda]] y [[h]]. Bajo esas hipótesis, la rapidez de fase [[c]] se obtiene con la relación general de dispersión:

{{f:airy_general}}

Esta expresión contiene el efecto de la profundidad mediante la tangente hiperbólica. Cuando el fondo está muy lejos de la zona donde las partículas se mueven apreciablemente, la tangente hiperbólica se aproxima a la unidad y la rapidez queda gobernada por la longitud de onda:

{{f:profundas}}

Cuando la longitud de onda es enorme comparada con la profundidad, toda la columna de agua participa en el movimiento y la rapidez queda gobernada por la profundidad:

{{f:someras}}

Estas tres relaciones no describen fenómenos distintos, sino el mismo modelo visto en tres niveles de influencia del fondo: caso completo, límite de fondo irrelevante y límite de columna de agua acoplada.

El criterio formal correcto consiste en empezar por la relación general y solo después decidir si un límite es legítimo. Si se elige una expresión simplificada sin mirar la profundidad relativa, el cálculo puede dar un número razonable pero físicamente mal justificado. Por eso la fórmula no sustituye al análisis de régimen: lo resume.

---

## 🔴 Nivel estructural
### Movimiento orbital, energía y velocidad de grupo
En mar abierto, las partículas cercanas a la superficie describen órbitas aproximadamente circulares. La amplitud orbital disminuye rápidamente con la profundidad, de modo que por debajo de una fracción significativa de [[lambda]] el movimiento se vuelve casi imperceptible. Esa atenuación explica por qué una ola corta puede pasar por encima de un fondo muy profundo sin modificar su velocidad.

Cerca de la costa, el fondo impide que las partículas completen la parte vertical de la órbita. Las trayectorias se vuelven elípticas, la base de la ola se ralentiza y la cresta puede inclinarse hasta romper. Esta transición conecta la cinemática microscópica del fluido con fenómenos macroscópicos como refracción, shoaling, rompiente y erosión costera.

También hay que distinguir entre velocidad de fase y velocidad de grupo. La velocidad de fase [[c]] indica la rapidez con la que avanza una cresta individual; la velocidad de grupo indica cómo avanza el paquete que transporta la energía. En mar abierto, los trenes de ondas son dispersivos y la energía viaja más despacio que las crestas. En el régimen de poca profundidad, fase y grupo avanzan prácticamente juntos, lo que concentra la energía de fenómenos como los tsunamis.

## Interpretación física profunda
### El modelo de Airy como criterio de lectura
La teoría de Airy sirve para decidir qué controla la velocidad de una ola. Si el cociente entre profundidad y longitud de onda es grande, el fondo no participa de forma relevante y las olas largas viajan más deprisa que las cortas. Esta dispersión permite que el oleaje generado por una tormenta se ordene durante su viaje: primero llegan los periodos largos y después las componentes más cortas.

Si el cociente entre profundidad y longitud de onda es pequeño, el fondo controla la dinámica. La rapidez ya no depende de la longitud de onda de forma dominante, sino de la profundidad local. Por eso un tsunami, aunque se propague en océano abierto, se trata físicamente como una onda de poca profundidad: su longitud de onda puede ser de cientos de kilómetros y toda la columna de agua se mueve de forma acoplada.

En la zona intermedia no se debe forzar ninguno de los límites. La relación completa es necesaria porque el fondo influye, pero no domina por completo. Este matiz es didácticamente importante: clasificar el régimen no es memorizar nombres, sino comparar escalas físicas antes de elegir el modelo.

## Orden de magnitud
Una ola de viento con [[lambda]] de unas decenas de metros en mar abierto suele desplazarse a varios metros por segundo. Un tsunami en una cuenca oceánica profunda puede alcanzar cientos de metros por segundo porque la profundidad efectiva del océano controla su rapidez. En cambio, una ola al llegar a la orilla reduce mucho su velocidad, acorta su longitud de onda y aumenta su altura hasta romper.

Estos órdenes de magnitud permiten detectar errores de cálculo. Una ola ordinaria de playa no debe salir con velocidad de avión; un tsunami oceánico no debe salir con velocidad de paseo; y una ola de mar abierto no debe depender del fondo si este está miles de metros por debajo de la zona de movimiento orbital apreciable.

## Método de resolución personalizado
Para resolver problemas de ondas superficiales conviene seguir una secuencia fija:
1. Identifica [[lambda]], [[h]] y [[g]] en unidades del Sistema Internacional.
2. Calcula mental o numéricamente el cociente entre profundidad y longitud de onda.
3. Decide si el fondo es irrelevante, dominante o parcialmente influyente.
4. Elige la relación formal adecuada para obtener [[c]].
5. Interpreta el resultado según el movimiento orbital: libertad de mar abierto, acoplamiento de toda la columna de agua o transición costera.
6. Si la profundidad cambia, conserva el periodo de la fuente y analiza cómo se reajustan [[c]], [[lambda]] y la altura de la ola.

## Casos especiales y ejemplo extendido
### Shoaling y rompiente
Cuando una ola se acerca a la costa, la profundidad disminuye. Al reducirse [[c]], el periodo impuesto por la fuente se mantiene y la longitud de onda debe acortarse. Como la energía se comprime en una región más corta, la altura aumenta. Si la pendiente crece demasiado, la cresta se adelanta a la base y la ola rompe.

### Ondas capilares
En escalas milimétricas la tensión superficial puede superar a la gravedad como fuerza restauradora. En ese caso el modelo de gravedad pura deja de ser suficiente y se requiere incorporar el término capilar. Por eso una arruga pequeña en la superficie de un vaso y una ola oceánica no se explican con el mismo balance físico dominante.

## Preguntas reales del alumno
- **¿Por qué las olas llegan casi paralelas a la playa?** Porque la parte del frente que está en mayor profundidad avanza más rápido que la parte situada en menor profundidad. Esa diferencia de rapidez gira el frente de onda hasta alinearlo con las líneas de costa.
- **¿Un tsunami es solo una ola de superficie?** No en el sentido cotidiano. En un tsunami se desplaza prácticamente toda la columna de agua, desde la superficie hasta el fondo, por eso su energía es enorme aunque en mar abierto su altura pueda ser pequeña.
- **¿Por qué una ola rompe al acercarse a la costa?** Porque el fondo frena la base, la cresta conserva más velocidad y la forma de la onda se vuelve inestable.

## Conexiones transversales y rutas de estudio
Este leaf conecta la cinemática del movimiento oscilatorio con la dinámica de fluidos. También prepara el estudio de acústica y ondas mecánicas porque obliga a distinguir fase, grupo, medio de propagación y transporte de energía. En ingeniería costera, oceanografía y gestión de riesgos, estos criterios permiten estimar tiempos de llegada, zonas de amplificación y límites de validez del modelo lineal.

## Síntesis final
Las ondas superficiales enseñan a leer una ola comparando escalas. La profundidad decide si el fondo es invisible, dominante o parcialmente relevante; la longitud de onda fija la escala espacial de la perturbación; y la gravedad proporciona la fuerza restauradora. Dominar este nodo significa elegir el modelo adecuado antes de calcular y explicar después qué representa físicamente la velocidad obtenida.
