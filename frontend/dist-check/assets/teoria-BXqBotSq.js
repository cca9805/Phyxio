const e=`# Coordenadas generalizadas\r
\r
## Contexto conceptual\r
\r
Las coordenadas generalizadas responden a una necesidad concreta de la mecánica analítica: describir el estado de un sistema con el menor número de variables realmente independientes. En muchos problemas, usar solo coordenadas cartesianas produce una descripción más larga de lo necesario, porque mezcla variables libres con variables ligadas por restricciones geométricas o cinemáticas. El concepto no elimina la geometría clásica, sino que la reorganiza según la estructura física del problema.\r
\r
Este cambio de enfoque es importante porque transforma la pregunta de modelización. En lugar de preguntar únicamente dónde está un sistema en el espacio, preguntamos qué variables independientes controlan su configuración. Cuando una ligadura fija una relación entre magnitudes, parte de la información deja de ser libre. Las coordenadas generalizadas aparecen entonces como una forma de representar con precisión esa reducción real de complejidad.\r
\r
En este leaf, la conexión entre representaciones planas [[x]], [[y]] y [[r]], [[theta]] convive con el conteo estructural de grados de libertad mediante [[n]], [[C]] y [[f]]. Esa combinación permite unir intuición geométrica y arquitectura matemática en un único marco coherente.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial es simple: un mismo estado físico puede escribirse de formas distintas, pero no todas ofrecen la misma claridad. Elegir coordenadas no es decorar un problema, es decidir cómo ver su estructura real. La mejor elección es la que deja visibles las dependencias relevantes y oculta la redundancia.\r
\r
Cuando existen ligaduras, algunas variables dejan de ser independientes. El sistema sigue siendo el mismo, pero su descripción mínima cambia. Ese punto es la clave pedagógica del tema: independencia no significa cantidad de símbolos escritos, sino número de decisiones físicas libres que quedan disponibles.\r
\r
Por eso hablar de grados de libertad es hablar de arquitectura del modelo. Esta distinción conceptual evita errores tempranos y prepara una transición ordenada hacia el nivel formal, donde se explicita cómo se conectan representaciones y restricciones.\r
\r
## 🔵 Nivel formal\r
\r
En representación plana, las conversiones entre base polar y cartesiana se expresan con relaciones de proyección y norma. Estas relaciones deben entenderse como transformaciones de representación, no como leyes dinámicas independientes.\r
\r
{{f:posicion_generalizada}}\r
\r
{{f:velocidad_generalizada}}\r
\r
{{f:energia_cinetica_generalizada}}

En el núcleo generalizado, [[q]] y [[qdot]] no son coordenadas cartesianas directas: producen la posición física [[r_vec]] y la velocidad física [[v]] mediante el mapa de configuración. Con [[m]] positiva, [[T]] mide el coste cinético real del movimiento; [[t]] permite representar cartas móviles o parametrizaciones explícitamente temporales.

{{f:x_desde_polar}}
\r
{{f:y_desde_polar}}\r
\r
{{f:radio_cartesiano}}\r
\r
La primera y segunda relación traducen orientación y escala en proyecciones horizontales y verticales. La tercera recupera la distancia al origen desde componentes cartesianas, cerrando consistencia en sentido inverso. Para que este bloque formal sea válido, se exige coherencia de unidades y convención angular explícita en [[theta]].\r
\r
El conteo estructural de independencia se sintetiza con:\r
\r
{{f:grados_libertad}}\r
\r
Aquí [[n]] representa entidades discretas y [[C]] restricciones independientes. El resultado [[f]] define dimensión efectiva del espacio de configuración en el modelo adoptado. Formalmente, [[f]] debe ser no negativa y coherente con la estructura de ligaduras declarada. Si no lo es, el problema no está mal resuelto: está mal formulado.\r
\r
Desde un punto de vista formal, estas ecuaciones se interpretan como un sistema de traducción entre descripciones y no como bloques aislados. Una conversión correcta debe preservar coherencia de signo, escala y dominio. Si una magnitud convertida contradice la lectura geométrica esperada, la inconsistencia suele estar en la convención o en la hipótesis de partida, no en el último paso numérico.\r
\r
También conviene remarcar que la formalización no termina en escribir ecuaciones. Debe incluir criterios de uso: cuándo aplicar cada relación, qué supuestos se mantienen fijos y qué magnitudes actúan como entrada frente a salida. Esa capa metodológica distingue un uso experto de una sustitución mecánica.\r
\r
## 🔴 Nivel estructural\r
\r
En nivel estructural, el foco no está en convertir coordenadas sino en diseñar arquitectura de modelo. La pregunta clave es: qué variables preservan causalidad física y cuáles solo repiten información ya impuesta por ligaduras. Esta decisión organiza todo lo demás, desde estabilidad numérica hasta interpretabilidad de resultados.\r
\r
Una lectura estructural robusta exige verificar tres capas: representación, independencia y validez. Representación: la transformación entre [[x]], [[y]] y [[r]], [[theta]] debe ser legible y reversible en el dominio operativo. Independencia: el conteo de [[f]] debe usar ligaduras verdaderamente independientes. Validez: las hipótesis deben mantenerse en rango de uso y no extrapolarse fuera de su dominio.\r
\r
Cuando alguna capa falla, aparecen síntomas reconocibles: cambios de signo incoherentes en proyecciones, [[f]] no física, o sensibilidad extrema al cambiar ligeramente [[theta]]. Estos síntomas no se corrigen con más álgebra; se corrigen revisando la estructura del modelo y, si hace falta, cambiando la elección de coordenadas.\r
\r
En ingeniería y en investigación, esta lectura estructural también guía decisiones de implementación. Un modelo puede ser algebraicamente correcto y aun así ser mala elección computacional si introduce redundancia que degrada estabilidad. Por eso la estructura se evalúa en tres dimensiones a la vez: fidelidad física, interpretabilidad y desempeño operativo.\r
\r
La ventaja de este nivel es que conecta teoría con práctica sin perder rigor. Al explicitar límites y condiciones de validez, el modelo deja de ser una receta universal y se convierte en una herramienta contextual: funciona muy bien en su dominio y exige transición cuando ese dominio cambia.\r
\r
## Interpretación física profunda\r
\r
Una lectura física profunda distingue entre magnitud de estado, parámetro estructural y resultado de conteo. [[r]], [[theta]], [[x]] y [[y]] describen estado geométrico. [[n]] y [[C]] son parámetros de estructura del sistema. [[f]] es resultado estructural que resume independencia efectiva. Mezclar esos niveles produce conclusiones confusas incluso si las cuentas numéricas parecen consistentes.\r
\r
También conviene leer causalidad en ambas direcciones. Desde polar a cartesiano, [[theta]] redistribuye valor entre [[x]] y [[y]] para un [[r]] dado. Desde cartesiano a polar, la relación entre [[x]] y [[y]] determina magnitud radial y orientación. Esa bidireccionalidad ayuda a detectar resultados absurdos y a elegir qué representación conviene según la pregunta física dominante.\r
\r
Una tercera capa de profundidad es semántica: el mismo número puede significar cosas distintas según contexto. Un valor de [[r]] no describe camino recorrido, sino distancia instantánea al origen. Un valor de [[f]] no describe orientación espacial, sino número de coordenadas independientes. Interpretar bien es separar significado de notación.\r
\r
## Orden de magnitud\r
\r
En problemas didácticos de laboratorio, una escala típica para [[r]] puede ir de 0.05 m a 2 m. En robótica industrial, la misma magnitud puede estar entre 0.2 m y 5 m según geometría del manipulador. Comparar esos órdenes de magnitud ayuda a detectar inconsistencias de unidad: si un cálculo entrega [[r]]=500 m para un mecanismo de mesa, el resultado es físicamente absurdo aunque la aritmética interna sea correcta.\r
\r
Otra comparación útil es angular. Cambios de [[theta]] de 0.01 rad suelen producir variaciones pequeñas en proyección para radios moderados; cambios de 1 rad alteran de manera drástica reparto entre [[x]] y [[y]]. Si la salida no refleja esa diferencia de escala, hay un problema de convención o de implementación.\r
\r
## Método de resolución personalizado\r
\r
Un método operativo fiable para este leaf sigue una secuencia fija. Primero, declarar magnitudes y su rol: estado, parámetro o resultado. Segundo, fijar convención de [[theta]] y unidad angular. Tercero, identificar ligaduras y comprobar independencia. Cuarto, seleccionar representación inicial por claridad física del problema. Quinto, ejecutar conversión o conteo estructural según objetivo. Sexto, validar coherencia de signos, unidades y rango.\r
\r
En problemas mixtos, conviene usar doble cierre: validar en la representación nativa del enunciado y en la representación convertida. Si ambos cierres no coinciden, no se corrige solo el último paso; se revisa desde hipótesis y definición de variables. Este enfoque reduce errores recurrentes y mejora trazabilidad en informes.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: [[r]]=0. En esta condición, la orientación [[theta]] deja de tener relevancia física para la posición puntual. Forzar interpretación angular en el origen suele generar discusiones artificiales y errores de cuadrante. La decisión correcta es tratar el estado como singular en orientación, sin perder consistencia en distancia.\r
\r
Caso especial 2: ligaduras redundantes. Puede ocurrir que dos ecuaciones distintas describan la misma restricción. Si ambas se cuentan en [[C]], el modelo sobrerreduce [[f]] y aparece una falsa falta de movilidad. El remedio no es ajustar resultados finales, sino verificar independencia algebraica y física de cada ligadura.\r
\r
Ejemplo extendido: en un mecanismo circular guiado, usar [[x]] y [[y]] como estados primarios más corrección radial puede funcionar en baja exigencia, pero al aumentar frecuencia de control aparecen oscilaciones numéricas. Al cambiar a [[theta]] como coordenada dominante y reconstruir [[x]], [[y]] como salidas, mejora la estabilidad y cae el error de cierre geométrico. Este ejemplo muestra por qué la elección de coordenadas es una decisión de diseño, no un detalle de notación.\r
\r
## Preguntas reales del alumno\r
\r
- ¿Si conozco [[x]] y [[y]], para qué me sirve [[r]] y [[theta]]?\r
Sirve cuando la geometría o la física del problema es radial o angular. En ese contexto, la representación polar hace visibles simetrías y reduce complejidad de interpretación.\r
\r
- ¿Puedo tener más coordenadas escritas que grados de libertad reales?\r
Sí. Eso ocurre cuando hay variables redundantes vinculadas por ligaduras. Lo correcto es distinguir coordenadas escritas de coordenadas independientes.\r
\r
- ¿Por qué [[f]] no coincide siempre con la dimensión del espacio?\r
Porque [[f]] mide independencia del estado bajo restricciones, no número de ejes geométricos del espacio donde se observa el movimiento.\r
\r
- ¿Qué error es más peligroso en este tema?\r
Contar ligaduras sin verificar independencia. Ese error distorsiona toda la arquitectura del modelo, incluso si las conversiones de coordenadas están bien hechas.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta directamente con ligaduras y grados de libertad, formulación lagrangiana y análisis de simetrías. Entender coordenadas generalizadas facilita el paso desde geometría elemental hacia modelos de energía y ecuaciones de movimiento más compactas. También prepara terreno para discutir estabilidad, control y modelización en sistemas acoplados.\r
\r
En ruta de aprendizaje, conviene estudiar primero cambios de representación geométrica simples, luego conteo de independencia con ejemplos discretos, y finalmente casos de modelización real con restricciones múltiples. Una ruta sugerida es pasar de [ligaduras y grados de libertad](leaf:fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad) a [ecuaciones de Lagrange](leaf:fisica-clasica/mecanica/mecanica-analitica/lagrangiano/ecuaciones-de-lagrange) para ver cómo la selección de coordenadas afecta directamente la dinámica.\r
\r
## Síntesis final\r
\r
Las coordenadas generalizadas son el lenguaje de independencia física en mecánica analítica. Permiten representar el mismo estado con diferentes variables, elegir la forma más útil para cada problema y distinguir con rigor entre geometría visible y estructura dinámica efectiva. Cuando se aplican con coherencia de hipótesis, unidades y ligaduras, convierten la modelización en una herramienta de decisión robusta y no en una mera traducción algebraica.
`;export{e as default};
