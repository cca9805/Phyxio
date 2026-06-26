# Colisiones en dos dimensiones

## Contexto conceptual

Las colisiones en el plano son encuentros donde el movimiento se despliega con total libertad. Al no ocurrir en una sola línea, la naturaleza nos obliga a mirar el espacio como un escenario de múltiples sentidos que deben sincronizarse. Entender este fenómeno es fundamental para comprender desde la seguridad en los viajes hasta el comportamiento de las piezas en un juego de mesa o los cuerpos en el espacio.

## 🟢 Nivel esencial

La idea esencial no es resolver muchas ecuaciones, sino leer el choque como un intercambio de movimiento en el plano. Cuando dos cuerpos chocan, no basta con decir “van hacia delante” o “vuelven hacia atrás”: después del impacto pueden salir desviados, con una parte del movimiento en horizontal y otra en vertical.

Eso significa que el choque debe leerse por direcciones. La parte del movimiento asociada al eje horizontal se organiza con una conservación propia, y la parte asociada al eje vertical hace lo mismo. Si una bola golpea a otra de forma oblicua, una parte del movimiento inicial puede aparecer como avance, otra como desviación lateral y otra como cambio de dirección del segundo cuerpo.

Lo importante en este nivel es reconocer dos hechos. Primero, las masas [[m1]] y [[m2]] indican cuánto “cuesta” cambiar el movimiento. Segundo, las velocidades antes y después del choque [[v1i]] [[v1f]] deben compararse por direcciones, no solo por rapidez total. Esa separación entre direcciones organiza todo el tema.

Si el sistema está aislado durante el impacto, el movimiento total del conjunto no desaparece ni nace de la nada: se redistribuye entre los cuerpos y entre las direcciones del plano. Esa es la intuición que debe quedar clara antes de pasar al cálculo.

> [!IMPORTANT]
> En una colisión 2D, no se conserva “una velocidad”, sino el momento del sistema separado por direcciones.

## 🔵 Nivel formal

### Conservación del momento en dos dimensiones

Antes de escribir ecuaciones, es importante recordar que el análisis de la colisión se basa en magnitudes físicas como las masas [[m1]] [[m2]] y las velocidades iniciales [[v1i]] [[v2i]]. Estas magnitudes determinan cómo se reparte el momento lineal entre los cuerpos durante el choque.

En dos dimensiones, estas magnitudes deben analizarse teniendo en cuenta que el movimiento puede descomponerse en direcciones independientes.

Para poder aplicar estas leyes en el plano, es necesario descomponer las velocidades en componentes en cada eje independiente.

La ley fundamental es el balance vectorial [[vec]] de momento lineal:

{{f:vec}}

En dos dimensiones, esta ecuación se descompone en dos ecuaciones independientes:

1. **Eje x**: El balance horizontal [[x]] se plantea como:


2. **Eje y**: El balance vertical [[y]] se plantea como:


Estas ecuaciones muestran que cada componente del momento se conserva de forma independiente.

### Componentes de velocidad y proyecciones

Para resolver el sistema, es fundamental proyectar las velocidades iniciales y finales [[v1i]] [[v2i]] [[v1f]] [[v2f]] en los ejes elegidos:

{{f:v2ix}}
{{f:v2iy}}

Tras el impacto, las componentes finales [[v1fx]] [[v1fy]] [[v2fx]] [[v2fy]] se obtienen resolviendo el balance:

{{f:v1fx}}
{{f:v1fy}}
{{f:v2fx}}
{{f:v2fy}}

### Papel de la energía

Si la colisión es elástica, se conserva además la energía cinética total del sistema:


Para casos inelásticos, calculamos el balance de energía [[energy_loss]] inicial [[Ki]] y final [[Kf]] del sistema completo:

{{f:ki_system}}

{{f:kf_system}}

La variación neta de energía [[DeltaK]] nos indica la pérdida por disipación:

{{f:energy_loss}}

### Caso particular: La firma del ángulo recto

Existe un caso de elegancia suprema: cuando dos masas idénticas chocan elásticamente y una de ellas estaba inicialmente quieta. Debido a la combinación de las leyes de conservación (que forman un sistema equivalente al teorema de Pitágoras), las velocidades finales siempre resultan ser perpendiculares entre sí. Si ves dos discos separarse formando una escuadra perfecta, estás presenciando la pureza de la conservación elástica en acción.

{{f:v1ix}}

{{f:v1iy}}

{{f:x}}

{{f:y}}

{{f:x_solve_v1fx}}

{{f:y_solve_v1fy}}

{{f:magnitude_v1f}}

{{f:angle_theta1f}}

{{f:K}}

## 🔴 Nivel estructural

### Geometría del impacto: El parámetro de impacto

A un nivel más profundo, lo que determina "hacia dónde" salen disparados los objetos es el **parámetro de impacto**. Se trata de la distancia perpendicular entre la trayectoria del proyectil y el centro del blanco.

- Si el parámetro es cero, el choque es frontal (unidimensional).
- Si el parámetro es igual a la suma de los radios, los objetos apenas se rozan.

La relación entre este parámetro y el ángulo de desviación permite reconstruir la geometría del choque y es la base de técnicas experimentales que investigan estructuras internas no observables directamente.

---

### Dominio de validez del modelo

El modelo de colisiones en dos dimensiones basado en la conservación del momento lineal es válido bajo las siguientes condiciones:

- Los cuerpos pueden aproximarse como partículas puntuales o esferas rígidas.
- La duración del choque es muy corta, por lo que las fuerzas externas pueden despreciarse.
- No hay transferencia significativa a grados internos (deformaciones, calor).
- El sistema puede describirse mediante momento lineal sin necesidad de incluir efectos rotacionales.

Bajo estas hipótesis, el análisis mediante descomposición en ejes y conservación del momento es suficiente para describir el resultado del choque.

---

### Señales de fallo del modelo

El modelo ideal deja de ser válido cuando aparecen efectos que no están incluidos en las hipótesis anteriores:

1. **Efectos de Rotación (Spin)**  
   Los cuerpos pueden intercambiar momento angular durante el choque. Parte de la energía se transfiere a rotación, lo que modifica las velocidades finales respecto al modelo puramente traslacional.

2. **Fricción Tangencial**  
   Si existe rozamiento en la superficie de contacto, aparece un intercambio de impulso perpendicular a la línea de impacto. Esto rompe la independencia ideal entre componentes y altera las trayectorias.

3. **Deformaciones no despreciables**  
   Si los cuerpos se deforman significativamente, el modelo de esferas rígidas deja de ser válido y la interacción ya no puede describirse únicamente con conservación de momento.

4. **Límites Relativistas y Cuánticos**  
   A altas velocidades, la masa efectiva deja de ser constante y se requiere el uso del cuadrimomento. A escalas microscópicas, el concepto clásico de colisión es sustituido por interacciones de campos y probabilidades.

---

### Teoría de Dispersión (Scattering)

Este tipo de análisis es la base de la física experimental moderna. En experimentos de dispersión, no se observa directamente la interacción, sino sus efectos en los ángulos de salida.

La distribución estadística de estos ángulos (sección eficaz) permite inferir propiedades internas de los sistemas, como la estructura del núcleo atómico o la existencia de nuevas partículas.

## Interpretación física profunda

La colisión en dos dimensiones es el puente entre la mecánica escalar y la vectorial. Nos obliga a aceptar que el universo no solo conserva la "cantidad" de movimiento, sino también su "identidad direccional". Cada dimensión del espacio euclídeo es un canal de información independiente. Una colisión no es solo un intercambio de energía; es un proceso de vector información redistribución donde la simetría del espacio dicta el resultado final.

## Orden de magnitud

*   **Choque en cadena**: En un accidente de tráfico donde un coche golpea a otro de lado, el ángulo de salida de los restos permite a los peritos calcular la velocidad exacta a la que viajaba cada vehículo antes del impacto.
*   **Astrofísica**: Las colisiones entre partículas de polvo en discos protoplanetarios determinan si estas se agregan para formar planetas o se rompen en trozos más pequeños, un proceso que depende totalmente de los ángulos de impacto.
*   **Deportes**: En el curling, los jugadores lanzan piedras que deben colisionar con precisión milimétrica. Un error de un milímetro en el parámetro de impacto puede desviar la piedra objetivo varios metros fuera de su sitio.

## Método de resolución personalizado

1.  **Dibujar el diagrama vectorial**: Antes de escribir números, visualiza las direcciones iniciales [[theta1i]] [[theta2i]] y finales [[theta1f]] [[theta2f]].
2.  **Definir tus ejes**: Normalmente, alinear el eje $x$ con una de las velocidades iniciales simplifica enormemente las ecuaciones al hacer que una componente sea cero.
3.  **Descomponer todo**: Usa las proyecciones polares para hallar las componentes iniciales:
4.  **Escribir los dos balances**: Plantea la conservación en cada uno de los ejes cartesianos:


5.  **Resolver el sistema**: Suele requerir álgebra para despejar variables como [[v1fx]] o [[v1fy]]:
6.  **Reconstruir el vector**: Combina las componentes para obtener la magnitud y ángulo finales:
7.  **Comprobación de sentido común**: ¿Es la energía final [[Kf]] menor o igual a la inicial [[Ki]]?

## Casos especiales y ejemplo extendido

**El Placaje Perfecto en Rugby.** Imagina un jugador de 100 kg que corre hacia el Norte a 8 m/s y es interceptado por un defensa de 90 kg que viene desde el Este a 9 m/s. Si el choque es totalmente inelástico (se quedan pegados), el sistema resultante tendrá una masa de 190 kg. El momento hacia el Norte era de 800 unidades y hacia el Oeste de 810 unidades. El bloque resultante se moverá casi exactamente hacia el Noroeste (45.3°) a una velocidad de unos 6 m/s. Este ejemplo muestra cómo dos direcciones de movimiento se "fusionan" en una única trayectoria diagonal que respeta escrupulosamente los dos contadores de momento originales.

## Preguntas reales del alumno

*   **¿Por qué no puedo usar una sola ecuación de momento total?** Porque el momento es un vector. Una sola ecuación solo te daría la magnitud, pero perderías la información direccional, que es vital para saber hacia dónde se mueven los objetos.
*   **¿Qué pasa si los objetos no son redondos?** El problema se complica mucho porque entraría en juego el momento angular (rotación). Si una barra larga golpea de lado, empezará a girar, y parte de la energía del choque se "gastará" en ese giro.
*   **¿La gravedad afecta al choque?** Durante el brevísimo instante del impacto, las fuerzas de contacto son tan inmensas que la gravedad es despreciable. Solo consideramos la gravedad para las trayectorias antes y después del choque.

## Conexiones transversales y rutas de estudio

*   **Base**: [El concepto de vector](leaf:matematicas/vectores/introduccion).
*   **Prerrequisito**: [Conservación del momento en una dimensión](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
*   **Avanzado**: [El sistema del centro de masas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones).

## Síntesis final

Las colisiones en dos dimensiones representan el triunfo de la mecánica vectorial sobre la intuición lineal. Al descomponer el movimiento en componentes independientes, podemos predecir trayectorias complejas usando principios simples. La clave del éxito reside en la precisión de la descomposición trigonométrica y en la comprensión de que, aunque se pierda energía en forma de calor o deformación, la identidad vectorial del momento sigue siendo una ley inamovible que dicta el destino de cada partícula en el plano.



















