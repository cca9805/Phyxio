# Tiro parabólico

## Contexto conceptual

El tiro parabólico describe el movimiento de un proyectil lanzado con rapidez inicial [[v0]] y ángulo [[theta]] respecto a la horizontal, cuando la única aceleración relevante es la gravedad [[g]]. La idea física dominante es separar el movimiento en dos ejes: el eje horizontal conserva su velocidad, mientras el eje vertical cambia por la acción de la gravedad. Ambos ejes no son dos problemas independientes del todo: comparten el mismo tiempo [[t]].

La trayectoria parece una parábola porque se combinan un MRU horizontal y un MRUA vertical. Por eso el primer paso no es buscar un resultado de alcance, sino declarar el sistema de referencia, el origen [[x0]], la altura inicial [[y0]], el signo positivo y la condición de impacto. Sin esa preparación, relaciones correctas pueden aplicarse fuera de dominio.

## 🟢 Nivel esencial

Imagina una pelota lanzada hacia delante y hacia arriba. Al principio sube porque parte con impulso vertical, pero esa parte del movimiento se va reduciendo hasta anularse en el punto más alto. Mientras tanto, la parte horizontal se mantiene constante si despreciamos el aire. La pelota no “gasta” su velocidad horizontal al subir: lo que cambia es la parte vertical.

El error más común es mezclar el módulo [[v0]] con sus componentes. La rapidez inicial describe el tamaño del vector de lanzamiento, pero no dice por sí sola cuánto movimiento pertenece a cada eje. Otro error típico es asumir que todos los aterrizajes son simétricos. Esa simetría solo aparece cuando el proyectil sale y llega al mismo nivel.

La lectura esencial debe ser visual: hacia delante, el proyectil conserva su avance; hacia arriba y abajo, la gravedad cambia el estado vertical. Si el alumno puede narrar esa escena sin números, después la capa formal solo pone precisión a una idea que ya está clara.

## 🔵 Nivel formal

El cálculo empieza descomponiendo la rapidez inicial en sus dos componentes. La componente horizontal inicial [[vx0]] se obtiene proyectando [[v0]] sobre el eje horizontal:

{{f:tp_componentes_vx0}}

La componente vertical inicial [[vy0]] mide la parte del lanzamiento que permite subir contra la gravedad:

{{f:tp_componentes_vy0}}

Una vez separadas las componentes, el eje horizontal se describe con movimiento rectilíneo uniforme. La posición horizontal [[x]] crece linealmente con el tiempo:

{{f:tp_posicion_x}}

En el eje vertical, la posición [[y]] combina la altura inicial, el avance vertical inicial y la caída producida por [[g]]:

{{f:tp_posicion_y}}

La componente horizontal de la velocidad [[vx]] permanece constante durante todo el vuelo ideal:

{{f:tp_velocidad_horizontal}}

La componente vertical [[vy]] sí cambia con el tiempo. Esta relación permite localizar el ápice imponiendo [[vy]] igual a cero:

{{f:tp_velocidad_y}}

De esa condición sale el tiempo hasta el ápice [[t_ap]]:

{{f:tp_tiempo_apice}}

La altura ganada sobre el punto de lanzamiento se expresa mediante [[h_max]]:

{{f:tp_altura_maxima}}

Si el lanzamiento no parte del nivel cero, la altura máxima absoluta [[y_max]] suma la altura inicial [[y0]]:

{{f:tp_altura_maxima_absoluta}}

La rapidez instantánea [[v]] se obtiene combinando las componentes de velocidad, no sumándolas directamente:

{{f:tp_velocidad_total}}

Cuando el proyectil cae al mismo nivel desde el que salió, el tiempo total de vuelo [[T]] es el doble del tiempo de subida:

{{f:tp_tiempo_vuelo_mismo_nivel}}

En ese caso particular, el alcance horizontal [[R]] puede calcularse con la fórmula clásica de suelo:

{{f:tp_alcance_suelo}}

Si la altura de impacto [[y_impacto]] no coincide con [[y0]], debe usarse el tiempo de impacto general [[t_impacto]]:

{{f:tp_tiempo_impacto_general}}

También puede eliminarse el tiempo para obtener la forma espacial de la trayectoria:

{{f:tiro_parabolico_trayectoria}}

## 🔴 Nivel estructural

El modelo exige gravedad uniforme, rozamiento despreciable, ejes fijos y escala suficientemente pequeña para tratar la Tierra como plana. Si el aire modifica de forma apreciable la velocidad, [[vx]] deja de ser constante y el leaf ya no describe la situación real. Si el impacto ocurre a una altura distinta, la simetría de subida y bajada desaparece y no se debe usar el alcance de suelo.

La lectura estructural es sencilla: las fórmulas horizontales responden a “cuánto avanza”; las verticales responden a “cuándo sube, cuándo baja y dónde impacta”. El tiempo [[t]] es la variable que conecta ambas lecturas. Una solución robusta siempre comprueba si el tiempo obtenido es positivo, si el alcance tiene el orden de magnitud esperado y si el signo de [[vy]] coincide con la fase de subida o bajada.

El papel de [[theta]] también es estructural. Un ángulo pequeño conserva casi toda la rapidez en [[vx0]], pero da poco tiempo de vuelo; un ángulo grande aumenta [[vy0]], pero reduce el avance por segundo. El máximo alcance ideal para salida y llegada al mismo nivel aparece cuando esas dos tendencias se equilibran. En condiciones reales, como saltos deportivos o chorros de agua con rozamiento, el ángulo óptimo puede alejarse de ese caso ideal.

## Interpretación física profunda

La parábola no es una forma decorativa: es la huella geométrica de dos movimientos coordinados. El eje horizontal conserva información inercial; el vertical muestra la competencia entre [[vy0]] y [[g]]. En el punto más alto no desaparece la velocidad del proyectil: solo se anula la componente vertical, mientras [[vx]] sigue existiendo.

Esta separación explica por qué dos proyectiles lanzados con la misma [[vy0]] permanecen el mismo tiempo en el aire aunque tengan alcances distintos. También explica por qué dos proyectiles con la misma [[vx0]] pueden caer en lugares muy diferentes si sus condiciones verticales cambian. La física profunda del tema consiste en reconocer qué parte del resultado procede de cada eje.

## Orden de magnitud

En lanzamientos deportivos o de laboratorio, los tiempos suelen estar entre décimas y pocos segundos, las alturas entre centímetros y decenas de metros, y los alcances entre metros y decenas de metros. Si una pelota escolar da un tiempo de vuelo de cientos de segundos o un alcance de kilómetros, el fallo casi siempre está en unidades, ángulos o uso de una fórmula fuera de su dominio.

Como referencia, una pelota lanzada a unos 20 m/s puede recorrer decenas de metros en el modelo ideal. Un chorro de agua de fuente suele tener alcances de metros. Una trayectoria balística real de largo alcance exige correcciones que este leaf no cubre.

## Método de resolución personalizado

1. Fija ejes, origen, [[x0]], [[y0]] y signo positivo.
2. Descompón [[v0]] en [[vx0]] y [[vy0]].
3. Escribe [[x]] y [[y]] en función de [[t]] sin sustituir demasiado pronto.
4. Usa la condición de cierre: ápice, mismo nivel, altura de impacto o posición pedida.
5. Calcula [[vx]], [[vy]] y [[v]] si se pide velocidad.
6. Verifica dominio, unidades, signo y orden de magnitud.

## Casos especiales y ejemplo extendido

El caso simétrico aparece cuando [[y0]] y [[y_impacto]] coinciden. Entonces el tiempo de vuelo es [[T]], el ápice ocurre a mitad de vuelo y el alcance puede calcularse con la expresión de suelo. En cambio, si el proyectil sale desde un balcón o aterriza en una plataforma elevada, el tiempo correcto es [[t_impacto]] y el alcance debe obtenerse multiplicando [[vx0]] por ese tiempo.

Un ejemplo extendido útil es comparar dos tiros con la misma [[v0]] y ángulos complementarios, por ejemplo 30° y 60°. En el modelo ideal y al mismo nivel, ambos pueden tener el mismo [[R]], pero el tiro más alto tarda más y alcanza mayor [[h_max]]. Esa comparación enseña que “mismo alcance” no significa “misma trayectoria”.

## Preguntas reales del alumno

**¿Por qué no uso directamente [[v0]] en la posición horizontal?** Porque el eje horizontal solo recibe la componente [[vx0]].

**¿La velocidad es cero en el punto más alto?** No. En el ápice se anula [[vy]], pero [[vx]] sigue siendo constante.

**¿La fórmula de alcance vale siempre?** No. Solo vale para lanzamiento e impacto al mismo nivel y sin resistencia del aire.

## Conexiones transversales y rutas de estudio

Este leaf conecta con tiro horizontal, caída libre, análisis gráfico y velocidad relativa. También prepara problemas de alcance, interceptación y diseño de trayectorias donde la condición final no es “volver al suelo”, sino alcanzar una altura concreta en un instante o posición determinados.

## Síntesis final

Dominar tiro parabólico significa separar componentes, usar un único tiempo compartido y elegir la condición de cierre correcta. La física del leaf no está en memorizar el alcance, sino en saber cuándo esa fórmula vale y cuándo debe sustituirse por el análisis vertical general.
