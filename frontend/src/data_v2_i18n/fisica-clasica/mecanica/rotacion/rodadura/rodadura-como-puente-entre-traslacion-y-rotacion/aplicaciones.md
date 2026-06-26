# Aplicaciones

## 1. Rueda de bicicleta

Variable dominante: [[v_cm]]

La bicicleta muestra directamente el puente entre traslación y rotación. La rueda gira con [[omega]], el centro avanza con [[v_cm]] y el radio [[R]] conecta ambas magnitudes. Si no hay derrape, la condición de rodadura permite estimar velocidad a partir de giro.

Límite de validez: no debe haber bloqueo, patinaje ni deformación dominante del neumático.

## 2. Rueda de automóvil con ABS

Variable dominante: [[omega]]

Un sensor de rueda mide giro, pero el sistema necesita inferir avance. Si el giro cae demasiado respecto a la velocidad del vehículo, la rueda puede estar bloqueándose. El puente físico sirve para detectar pérdida de rodadura.

Límite de validez: el radio efectivo y el estado del contacto deben estar controlados.

## 3. Rodillo de cinta transportadora

Variable dominante: [[R]]

Un rodillo convierte giro del eje en avance de la cinta. Si el contacto no desliza, la velocidad de la cinta se estima con radio y velocidad angular. Si la cinta resbala, la relación deja de cerrar.

Límite de validez: la fricción entre rodillo y cinta debe ser suficiente.

## 4. Bola deportiva

Variable dominante: [[theta]]

Una bola lanzada puede deslizar al principio y rodar después. La transición se reconoce cuando el avance del centro y el giro se vuelven compatibles. La lectura evita confundir giro visible con rodadura ideal.

Límite de validez: el modelo ideal empieza solo cuando el deslizamiento inicial ha desaparecido.

## 5. Medición con vídeo

Variable dominante: [[a_cm]]

En un vídeo de laboratorio se puede seguir el centro de la rueda y una marca en el borde. Si ambas mediciones son coherentes, se valida la rodadura. Si no, el vídeo revela deslizamiento o error de escala.

Límite de validez: la cámara debe calibrar longitud, tiempo y plano de movimiento.

Estas aplicaciones comparten la misma regla: el puente entre traslación y rotación existe solo si el contacto lo impone. El usuario debe identificar qué magnitud mide, qué magnitud infiere y qué observación rompería el modelo. Así el leaf se usa como herramienta, no como lista de fórmulas.

En todas ellas, el cierre operativo debe incluir una escala numérica. Una bicicleta urbana se mueve en metros por segundo, no en cientos de metros por segundo. Un rodillo industrial puede tener radio pequeño y gran [[omega]], pero la velocidad lineal de la cinta debe compararse con la producción esperada. Una bola deportiva puede girar rápido sin avanzar mucho durante el deslizamiento inicial. Un vídeo de laboratorio permite detectar diferencias del orden de centímetros si la calibración es buena. Estas escalas convierten el puente conceptual en criterio de diagnóstico.

También importa separar la variable medida de la inferida. El sensor puede medir [[omega]] y el modelo deduce [[v_cm]]. El vídeo puede medir avance y deducir [[theta]]. El tacómetro puede medir giro y la ingeniería necesita velocidad lineal. Si el contacto falla, esa inferencia deja de ser válida. Por eso cada aplicación debe declarar su límite de validez y no solo calcular.

En un taller, esta distinción permite diagnosticar fallos. Si un tacómetro marca giro alto pero la cinta no avanza, hay deslizamiento. Si una bicicleta avanza menos de lo previsto por el giro de la rueda, puede haber derrape o lectura incorrecta del radio. Si una pelota gira mucho al salir de la mano pero apenas avanza, todavía no está en rodadura ideal. En todos los casos, el puente funciona como una prueba de coherencia entre observaciones.

La aplicación didáctica más importante es que obliga a mirar el sistema completo. La fórmula no vive en la rueda aislada ni en el suelo aislado, sino en la interacción. Por eso la misma rueda puede obedecer la relación en asfalto seco y violarla en hielo. La física no cambió de símbolo; cambió de modelo de contacto.

En robótica móvil, esta lectura se usa para odometría. El robot cuenta vueltas de sus ruedas y estima cuánto avanzó. Si el suelo es regular y no hay patinaje, el puente funciona bien; si una rueda pierde tracción, la posición estimada se separa de la posición real. En diseño de sensores, esta diferencia se corrige comparando giro de rueda con acelerómetros, cámaras o referencias externas.

En enseñanza, las aplicaciones permiten construir preguntas de diagnóstico. ¿Qué mide el instrumento? ¿Qué infiere el modelo? ¿Qué condición física permite hacer esa inferencia? ¿Qué observación la destruiría? Responder esas cuatro preguntas es más útil que memorizar una versión de la fórmula. El estudiante aprende que el radio no es un adorno, sino la escala geométrica que convierte el giro en avance.

El mismo patrón se aplica a patinetes, trenes, impresoras, ruedas de medida y bancos de ensayo. En todos, el giro puede ser fácil de medir pero el avance es la magnitud que se necesita controlar. La rodadura permite pasar de una lectura a otra solo mientras el contacto sea fiable. Por eso una aplicación completa siempre debe cerrar con una comprobación de adherencia, escala y sentido de giro.