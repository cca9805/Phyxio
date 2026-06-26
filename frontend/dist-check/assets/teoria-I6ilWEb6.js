const e=`\uFEFF# Colisiones en dos dimensiones\r
\r
## Contexto conceptual\r
\r
Las colisiones en el plano son encuentros donde el movimiento se despliega con total libertad. Al no ocurrir en una sola línea, la naturaleza nos obliga a mirar el espacio como un escenario de múltiples sentidos que deben sincronizarse. Entender este fenómeno es fundamental para comprender desde la seguridad en los viajes hasta el comportamiento de las piezas en un juego de mesa o los cuerpos en el espacio.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial no es resolver muchas ecuaciones, sino leer el choque como un intercambio de movimiento en el plano. Cuando dos cuerpos chocan, no basta con decir “van hacia delante” o “vuelven hacia atrás”: después del impacto pueden salir desviados, con una parte del movimiento en horizontal y otra en vertical.\r
\r
Eso significa que el choque debe leerse por direcciones. La parte del movimiento asociada al eje horizontal se organiza con una conservación propia, y la parte asociada al eje vertical hace lo mismo. Si una bola golpea a otra de forma oblicua, una parte del movimiento inicial puede aparecer como avance, otra como desviación lateral y otra como cambio de dirección del segundo cuerpo.\r
\r
Lo importante en este nivel es reconocer dos hechos. Primero, las masas [[m1]] y [[m2]] indican cuánto “cuesta” cambiar el movimiento. Segundo, las velocidades antes y después del choque [[v1i]] [[v1f]] deben compararse por direcciones, no solo por rapidez total. Esa separación entre direcciones organiza todo el tema.\r
\r
Si el sistema está aislado durante el impacto, el movimiento total del conjunto no desaparece ni nace de la nada: se redistribuye entre los cuerpos y entre las direcciones del plano. Esa es la intuición que debe quedar clara antes de pasar al cálculo.\r
\r
> [!IMPORTANT]\r
> En una colisión 2D, no se conserva “una velocidad”, sino el momento del sistema separado por direcciones.\r
\r
## 🔵 Nivel formal\r
\r
### Conservación del momento en dos dimensiones\r
\r
Antes de escribir ecuaciones, es importante recordar que el análisis de la colisión se basa en magnitudes físicas como las masas [[m1]] [[m2]] y las velocidades iniciales [[v1i]] [[v2i]]. Estas magnitudes determinan cómo se reparte el momento lineal entre los cuerpos durante el choque.\r
\r
En dos dimensiones, estas magnitudes deben analizarse teniendo en cuenta que el movimiento puede descomponerse en direcciones independientes.\r
\r
Para poder aplicar estas leyes en el plano, es necesario descomponer las velocidades en componentes en cada eje independiente.\r
\r
La ley fundamental es el balance vectorial [[vec]] de momento lineal:\r
\r
{{f:vec}}\r
\r
En dos dimensiones, esta ecuación se descompone en dos ecuaciones independientes:\r
\r
1. **Eje x**: El balance horizontal [[x]] se plantea como:\r
\r
\r
2. **Eje y**: El balance vertical [[y]] se plantea como:\r
\r
\r
Estas ecuaciones muestran que cada componente del momento se conserva de forma independiente.\r
\r
### Componentes de velocidad y proyecciones\r
\r
Para resolver el sistema, es fundamental proyectar las velocidades iniciales y finales [[v1i]] [[v2i]] [[v1f]] [[v2f]] en los ejes elegidos:\r
\r
{{f:v2ix}}\r
{{f:v2iy}}\r
\r
Tras el impacto, las componentes finales [[v1fx]] [[v1fy]] [[v2fx]] [[v2fy]] se obtienen resolviendo el balance:\r
\r
{{f:v1fx}}\r
{{f:v1fy}}\r
{{f:v2fx}}\r
{{f:v2fy}}\r
\r
### Papel de la energía\r
\r
Si la colisión es elástica, se conserva además la energía cinética total del sistema:\r
\r
\r
Para casos inelásticos, calculamos el balance de energía [[energy_loss]] inicial [[Ki]] y final [[Kf]] del sistema completo:\r
\r
{{f:ki_system}}\r
\r
{{f:kf_system}}\r
\r
La variación neta de energía [[DeltaK]] nos indica la pérdida por disipación:\r
\r
{{f:energy_loss}}\r
\r
### Caso particular: La firma del ángulo recto\r
\r
Existe un caso de elegancia suprema: cuando dos masas idénticas chocan elásticamente y una de ellas estaba inicialmente quieta. Debido a la combinación de las leyes de conservación (que forman un sistema equivalente al teorema de Pitágoras), las velocidades finales siempre resultan ser perpendiculares entre sí. Si ves dos discos separarse formando una escuadra perfecta, estás presenciando la pureza de la conservación elástica en acción.\r
\r
{{f:v1ix}}\r
\r
{{f:v1iy}}\r
\r
{{f:x}}\r
\r
{{f:y}}\r
\r
{{f:x_solve_v1fx}}\r
\r
{{f:y_solve_v1fy}}\r
\r
{{f:magnitude_v1f}}\r
\r
{{f:angle_theta1f}}\r
\r
{{f:K}}\r
\r
## 🔴 Nivel estructural\r
\r
### Geometría del impacto: El parámetro de impacto\r
\r
A un nivel más profundo, lo que determina "hacia dónde" salen disparados los objetos es el **parámetro de impacto**. Se trata de la distancia perpendicular entre la trayectoria del proyectil y el centro del blanco.\r
\r
- Si el parámetro es cero, el choque es frontal (unidimensional).\r
- Si el parámetro es igual a la suma de los radios, los objetos apenas se rozan.\r
\r
La relación entre este parámetro y el ángulo de desviación permite reconstruir la geometría del choque y es la base de técnicas experimentales que investigan estructuras internas no observables directamente.\r
\r
---\r
\r
### Dominio de validez del modelo\r
\r
El modelo de colisiones en dos dimensiones basado en la conservación del momento lineal es válido bajo las siguientes condiciones:\r
\r
- Los cuerpos pueden aproximarse como partículas puntuales o esferas rígidas.\r
- La duración del choque es muy corta, por lo que las fuerzas externas pueden despreciarse.\r
- No hay transferencia significativa a grados internos (deformaciones, calor).\r
- El sistema puede describirse mediante momento lineal sin necesidad de incluir efectos rotacionales.\r
\r
Bajo estas hipótesis, el análisis mediante descomposición en ejes y conservación del momento es suficiente para describir el resultado del choque.\r
\r
---\r
\r
### Señales de fallo del modelo\r
\r
El modelo ideal deja de ser válido cuando aparecen efectos que no están incluidos en las hipótesis anteriores:\r
\r
1. **Efectos de Rotación (Spin)**  \r
   Los cuerpos pueden intercambiar momento angular durante el choque. Parte de la energía se transfiere a rotación, lo que modifica las velocidades finales respecto al modelo puramente traslacional.\r
\r
2. **Fricción Tangencial**  \r
   Si existe rozamiento en la superficie de contacto, aparece un intercambio de impulso perpendicular a la línea de impacto. Esto rompe la independencia ideal entre componentes y altera las trayectorias.\r
\r
3. **Deformaciones no despreciables**  \r
   Si los cuerpos se deforman significativamente, el modelo de esferas rígidas deja de ser válido y la interacción ya no puede describirse únicamente con conservación de momento.\r
\r
4. **Límites Relativistas y Cuánticos**  \r
   A altas velocidades, la masa efectiva deja de ser constante y se requiere el uso del cuadrimomento. A escalas microscópicas, el concepto clásico de colisión es sustituido por interacciones de campos y probabilidades.\r
\r
---\r
\r
### Teoría de Dispersión (Scattering)\r
\r
Este tipo de análisis es la base de la física experimental moderna. En experimentos de dispersión, no se observa directamente la interacción, sino sus efectos en los ángulos de salida.\r
\r
La distribución estadística de estos ángulos (sección eficaz) permite inferir propiedades internas de los sistemas, como la estructura del núcleo atómico o la existencia de nuevas partículas.\r
\r
## Interpretación física profunda\r
\r
La colisión en dos dimensiones es el puente entre la mecánica escalar y la vectorial. Nos obliga a aceptar que el universo no solo conserva la "cantidad" de movimiento, sino también su "identidad direccional". Cada dimensión del espacio euclídeo es un canal de información independiente. Una colisión no es solo un intercambio de energía; es un proceso de vector información redistribución donde la simetría del espacio dicta el resultado final.\r
\r
## Orden de magnitud\r
\r
*   **Choque en cadena**: En un accidente de tráfico donde un coche golpea a otro de lado, el ángulo de salida de los restos permite a los peritos calcular la velocidad exacta a la que viajaba cada vehículo antes del impacto.\r
*   **Astrofísica**: Las colisiones entre partículas de polvo en discos protoplanetarios determinan si estas se agregan para formar planetas o se rompen en trozos más pequeños, un proceso que depende totalmente de los ángulos de impacto.\r
*   **Deportes**: En el curling, los jugadores lanzan piedras que deben colisionar con precisión milimétrica. Un error de un milímetro en el parámetro de impacto puede desviar la piedra objetivo varios metros fuera de su sitio.\r
\r
## Método de resolución personalizado\r
\r
1.  **Dibujar el diagrama vectorial**: Antes de escribir números, visualiza las direcciones iniciales [[theta1i]] [[theta2i]] y finales [[theta1f]] [[theta2f]].\r
2.  **Definir tus ejes**: Normalmente, alinear el eje $x$ con una de las velocidades iniciales simplifica enormemente las ecuaciones al hacer que una componente sea cero.\r
3.  **Descomponer todo**: Usa las proyecciones polares para hallar las componentes iniciales:\r
4.  **Escribir los dos balances**: Plantea la conservación en cada uno de los ejes cartesianos:\r
\r
\r
5.  **Resolver el sistema**: Suele requerir álgebra para despejar variables como [[v1fx]] o [[v1fy]]:\r
6.  **Reconstruir el vector**: Combina las componentes para obtener la magnitud y ángulo finales:\r
7.  **Comprobación de sentido común**: ¿Es la energía final [[Kf]] menor o igual a la inicial [[Ki]]?\r
\r
## Casos especiales y ejemplo extendido\r
\r
**El Placaje Perfecto en Rugby.** Imagina un jugador de 100 kg que corre hacia el Norte a 8 m/s y es interceptado por un defensa de 90 kg que viene desde el Este a 9 m/s. Si el choque es totalmente inelástico (se quedan pegados), el sistema resultante tendrá una masa de 190 kg. El momento hacia el Norte era de 800 unidades y hacia el Oeste de 810 unidades. El bloque resultante se moverá casi exactamente hacia el Noroeste (45.3°) a una velocidad de unos 6 m/s. Este ejemplo muestra cómo dos direcciones de movimiento se "fusionan" en una única trayectoria diagonal que respeta escrupulosamente los dos contadores de momento originales.\r
\r
## Preguntas reales del alumno\r
\r
*   **¿Por qué no puedo usar una sola ecuación de momento total?** Porque el momento es un vector. Una sola ecuación solo te daría la magnitud, pero perderías la información direccional, que es vital para saber hacia dónde se mueven los objetos.\r
*   **¿Qué pasa si los objetos no son redondos?** El problema se complica mucho porque entraría en juego el momento angular (rotación). Si una barra larga golpea de lado, empezará a girar, y parte de la energía del choque se "gastará" en ese giro.\r
*   **¿La gravedad afecta al choque?** Durante el brevísimo instante del impacto, las fuerzas de contacto son tan inmensas que la gravedad es despreciable. Solo consideramos la gravedad para las trayectorias antes y después del choque.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
*   **Base**: [El concepto de vector](leaf:matematicas/vectores/introduccion).\r
*   **Prerrequisito**: [Conservación del momento en una dimensión](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
*   **Avanzado**: [El sistema del centro de masas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones).\r
\r
## Síntesis final\r
\r
Las colisiones en dos dimensiones representan el triunfo de la mecánica vectorial sobre la intuición lineal. Al descomponer el movimiento en componentes independientes, podemos predecir trayectorias complejas usando principios simples. La clave del éxito reside en la precisión de la descomposición trigonométrica y en la comprensión de que, aunque se pierda energía en forma de calor o deformación, la identidad vectorial del momento sigue siendo una ley inamovible que dicta el destino de cada partícula en el plano.\r
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
\r
\r
\r
\r
\r
\r
`;export{e as default};
