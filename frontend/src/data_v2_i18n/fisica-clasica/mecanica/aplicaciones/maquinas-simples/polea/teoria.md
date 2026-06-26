# Poleas y Aparejos

La polea es una máquina simple fundamental diseñada para redirigir fuerzas y multiplicar el esfuerzo mediante el uso de cuerdas y ruedas acanaladas. En su forma más básica, una polea nos permite cambiar la dirección de una fuerza, facilitando el levantamiento de cargas al permitirnos tirar hacia abajo aprovechando nuestro propio peso. Sin embargo, su verdadero potencial surge cuando se combinan varias poleas en sistemas denominados aparejos o polispastos, capaces de reducir drásticamente la fuerza necesaria para elevar masas colosales.

## Contexto conceptual
Desde la perspectiva de la física clásica, la polea actúa como un dispositivo de gestión de la tensión. En una cuerda ideal, la tensión es constante en toda su longitud. Al pasar la cuerda por una polea móvil, esta tensión se "reparte" entre los distintos tramos que sostienen la carga, permitiendo que cada tramo contribuya con una fracción del peso total. Al igual que el plano inclinado, la polea respeta la ley de conservación de la energía: lo que ganamos en reducción de fuerza, debemos pagarlo con una mayor longitud de cuerda que debemos recoger. Es un intercambiador de fuerza por distancia.

## 🟢 Nivel esencial
El funcionamiento de las poleas se divide en dos tipos básicos:
1. **Polea Fija**: Está sujeta a un soporte y no se desplaza. Su única función es cambiar la dirección de la fuerza aplicada. No ofrece ventaja mecánica (la fuerza que aplicamos es igual al peso), pero mejora la ergonomía y seguridad del trabajo.
2. **Polea Móvil**: Se desplaza solidaria con la carga. Al estar sostenida por dos tramos de cuerda (uno fijo al soporte y otro donde tiramos), la carga se reparte entre ambos. Esto reduce el esfuerzo necesario a la mitad.

La clave para entender sistemas complejos es el concepto de **ventaja mecánica**. Si usamos un sistema que nos permite levantar 100 kg aplicando solo 25 kg de fuerza, decimos que la ventaja mecánica es 4. Sin embargo, para elevar la carga 1 metro, tendremos que tirar de 4 metros de cuerda. Esta relación inversa es la "Regla de Oro" que garantiza que no estamos creando energía de la nada.

## 🔵 Nivel formal
Para cuantificar el comportamiento de una polea, definimos la carga [[W]] y el esfuerzo [[P]]. En un sistema ideal sin rozamiento, la relación depende exclusivamente del número de tramos de cuerda efectivos [[n]] que sostienen la carga móvil.

{{f:ley_polea_ideal}}

La ventaja mecánica ideal [[VM]] es simplemente igual al número de tramos:

{{f:ventaja_mecanica_ideal}}

Dependiendo de cómo se organicen las poleas fijas y las poleas móviles [[Np]], distinguimos dos tipos principales de aparejos:

### 1. Aparejo Factorial
Consiste en un grupo de poleas fijas y móviles montadas en bloques paralelos. El número de tramos efectivos [[n]] es el doble del número de poleas móviles:

{{f:aparejo_factorial}}

### 2. Aparejo Potencial
Cada polea móvil cuelga de la anterior, duplicando la ventaja con cada nueva unidad añadida. Es un sistema extremadamente potente donde la ventaja crece de forma exponencial:

{{f:aparejo_potencial}}

En todos estos casos, se cumple la restricción cinemática donde el desplazamiento del esfuerzo [[sP]] es proporcional al desplazamiento de la carga [[sW]]:

{{f:relacion_desplazamientos}}

Para pasar del modelo ideal al modelo real de diseño, se emplean además:

{{f:ley_polea_real}}

{{f:balance_energia_polea}}

La **regla de oro** de las máquinas establece que ningún aparejo ahorra trabajo total: lo que se gana en fuerza se paga con mayor recorrido. Así, el producto fuerza por desplazamiento permanece constante en el sistema ideal, tanto para el esfuerzo como para la carga.

## 🔴 Nivel estructural
En el mundo real, debemos considerar el rendimiento mecánico [[eta]]. El rozamiento en los ejes de las poleas y la rigidez de las cuerdas provocan que parte de la energía se pierda en forma de calor. Por tanto, el esfuerzo real siempre es mayor que el ideal.

Un rendimiento [[eta]] del 0.8 (80%) significa que el 20% de nuestra fuerza se desperdicia venciendo la fricción. El balance energético completo relaciona el trabajo de entrada con el trabajo útil de elevación:

A nivel estructural, la aceleración del sistema solo es nula en equilibrio estático. Si el esfuerzo [[P]] supera el valor de equilibrio, la carga comenzará a subir con un movimiento acelerado, transformando el exceso de trabajo en energía cinética.

### Límites de masa e inercia rotacional
En el estudio avanzado de polispastos, no podemos ignorar la masa de las propias poleas móviles. Cada polea añadida incrementa la inercia del sistema, lo que significa que se requiere un esfuerzo inicial mayor para romper el estado de reposo. Además, en sistemas de alta velocidad, la inercia rotacional de las poleas (su resistencia a empezar a girar) debe incluirse en las ecuaciones de Newton, convirtiendo un problema de estática simple en un sistema de ecuaciones diferenciales acopladas.

### Deformación y elasticidad
Otro factor estructural crítico es la elasticidad de la cuerda. En elevaciones de gran altura (como en minería), la cuerda se estira bajo carga, lo que provoca que el desplazamiento [[sP]] no sea exactamente [[n]] veces [[sW]] durante los primeros instantes del levantamiento. Este fenómeno de histéresis elástica es fundamental para el diseño de sistemas de seguridad y frenado.

## Interpretación física profunda
La esencia de la polea reside en la **división de la tensión**. Cada tramo de cuerda que sale de una polea móvil hacia un punto de anclaje fijo está "robando" una parte del peso al operador. El anclaje (techo o soporte) realiza una parte del trabajo de sostén de forma pasiva. Por tanto, la polea no es solo una rueda que gira; es un acoplador que permite que una estructura estática nos ayude a realizar una tarea dinámica.

## Orden de magnitud
- **Polea simple de pozo**: Ventaja = 1. Solo sirve para tirar hacia abajo en lugar de hacia arriba.
- **Gato de cadena industrial**: Puede combinar decenas de poleas para obtener ventajas superiores a 20, permitiendo que una sola persona levante un motor de coche.
- **Grúas de construcción**: Utilizan aparejos factoriales masivos para distribuir toneladas de carga entre múltiples hilos de cable de acero.

## Método de resolución personalizado
Sigue el protocolo I-D-E-V (Identificación, Diagrama, Equilibrio, Validación):
0. **Identificación**: Determina el tipo de aparejo (factorial o potencial) y cuenta las poleas móviles [[Np]] para hallar los tramos efectivos [[n]].
1. **Diagrama**: Dibuja el sistema y marca los tramos de cuerda que tiran de la carga hacia arriba.
2. **Equilibrio**: Aplica la ley correspondiente según sea un sistema ideal o real (con [[eta]]).
3. **Validación**: Verifica que el desplazamiento [[sP]] sea coherente con la ventaja obtenida. Si la fuerza bajó a la cuarta parte, el recorrido debe haber subido al cuádruple.

## Casos especiales y ejemplo extendido
Si en un aparejo potencial de 3 poleas móviles intentamos levantar una carga [[W]] de 800 N, la ventaja mecánica ideal sería 8 (dos elevado al cubo). Por tanto, el esfuerzo ideal [[P]] sería de solo 100 N. Sin embargo, si el rendimiento [[eta]] es del 90%, necesitaremos aproximadamente 111 N. Esos 11 N extra representan el "peaje" energético que pagamos por la imperfección de los mecanismos.

## Preguntas reales del alumno
- **¿Por qué no puedo poner infinitas poleas para levantar cualquier cosa?** Porque cada polea añade peso y fricción al sistema. Eventualmente, el peso de las propias poleas y su rozamiento harían que el rendimiento cayera a cero.
- **¿La cuerda importa?** Sí, una cuerda elástica absorbería parte del trabajo en forma de energía elástica, reduciendo la eficiencia del levantamiento.
- **¿Se puede tener ventaja mecánica decimal?** Solo si consideramos el rendimiento. La ventaja geométrica (n) siempre es un número entero en sistemas estándar.

## Conexiones transversales y rutas de estudio
- **Estática**: Análisis de nudos y tensiones en cables.
- **Energía**: Estudio de máquinas reales y disipación térmica.
- **Ingeniería Naval**: Uso histórico de poleas (motones) para gestionar velas masivas.

## Síntesis final
La polea es el arte de fragmentar la carga. Nos enseña que para mover lo inamovible, basta con repartir su peso entre suficientes puntos de apoyo. Es la herramienta que convirtió la fuerza individual en capacidad industrial.
