# Aplicaciones de la energía cinética rotacional

## 1. Volantes de inercia para almacenamiento

Un volante de inercia almacena energía haciendo girar una masa con [[I]] grande a una [[omega]] elevada. Su objetivo no es producir torque de forma permanente, sino conservar energía mecánica para entregarla cuando el sistema la necesite. La relación

{{f:energia_rotacional_final}}

muestra dos estrategias: aumentar el momento de inercia o aumentar la velocidad angular. En la práctica, aumentar [[omega]] es muy eficaz por la dependencia cuadrática, pero exige materiales resistentes, equilibrado fino y carcasas de seguridad.

Variable dominante: [[omega]], porque pequeños cambios de velocidad angular alteran mucho la energía almacenada. Límite de validez: el modelo rígido deja de ser suficiente si aparecen deformaciones, vibraciones, pérdidas de rodamientos o restricciones de resistencia del material. En diseño real también se limita la energía máxima por seguridad: una rotura de rotor libera rápidamente la energía acumulada.

La lectura práctica es que no basta con calcular joules. Hay que preguntar cómo se cargan, cómo se descargan y qué ocurre si el control falla. Por eso [[Erot]] se combina con potencia, resistencia de materiales y disipación térmica.

## 2. Ruedas y rodadura en vehículos

Las ruedas de un vehículo tienen energía traslacional por el movimiento del vehículo y energía rotacional por su giro. La parte rotacional depende de [[I]] y de [[omega]], y se suma al balance total. Esto explica por qué ruedas más pesadas o con más masa en el borde pueden hacer que un vehículo requiera más energía para acelerar, aunque la masa total añadida parezca moderada. En frenadas, parte de esa energía debe disiparse o recuperarse.

Variable dominante: [[I]] de la rueda alrededor de su eje, junto con la restricción entre velocidad lineal y angular. Límite de validez: si hay deslizamiento, derrape o deformación intensa del neumático, la relación ideal de rodadura no describe todo el proceso. Entonces [[Erot]] sigue existiendo, pero debe acompañarse de pérdidas por calor y trabajo de contacto.

En diseño de movilidad, la distribución de masa en la rueda afecta la sensación de aceleración. Reducir masa cerca del borde puede mejorar respuesta sin cambiar demasiado la masa total del vehículo.

## 3. Poleas con masa en sistemas de bloques

En muchos ejercicios una polea se considera sin masa, pero una polea real almacena energía rotacional. Si una cuerda acelera masas conectadas, parte del trabajo gravitatorio termina como [[Erot]] de la polea. Ignorar esa contribución predice aceleraciones demasiado grandes. Incluirla obliga a usar el momento de inercia de la polea y la relación entre velocidad de la cuerda y velocidad angular.

Variable dominante: [[I]] de la polea, porque determina cuánta energía se desvía hacia rotación. Límite de validez: la cuerda debe no deslizar y el eje debe mantener una rotación rígida. Si la cuerda patina, se estira o hay rozamiento fuerte en el eje, el balance ideal necesita términos de disipación y quizá energía elástica.

Esta aplicación enseña por qué una simplificación aparentemente pequeña cambia la dinámica. Una polea masiva no solo transmite tensión: también compite por parte de la energía disponible.

## 4. Frenos, embragues y disipación

Cuando un freno actúa sobre una rueda o un disco, reduce [[Erot]] transformándola principalmente en calor. El trabajo rotacional resistente es negativo para el rotor:

{{f:energia_rotacional_final}}

. Si el rotor se detiene, la energía inicial se convierte en energía térmica y otras formas menores. Esta lectura es central para dimensionar frenos, estimar calentamiento y evitar fatiga térmica.

Variable dominante: diferencia entre [[Eroti]] y [[Erotf]], porque mide cuánta energía debe salir del giro. Límite de validez: el cálculo energético no predice por sí solo temperatura, desgaste ni distribución de calor. Para eso se necesitan modelos térmicos, materiales, área de contacto y tiempo de frenado. La energía rotacional da la carga energética básica.

En un freno real, el mismo cambio de energía puede ser tolerable si ocurre lentamente o destructivo si ocurre en pocos segundos. La energía fija la carga total; la potencia y la transferencia de calor fijan la severidad.

## 5. Turbinas, generadores y extracción de potencia

En una turbina o generador, el giro de un rotor contiene energía que puede intercambiarse con un fluido o con un circuito eléctrico. Si el generador extrae energía, [[Erot]] disminuye salvo que una fuente externa mantenga [[omega]]. La potencia se relaciona con la rapidez a la que cambia esa energía, de modo que la fórmula ayuda a estimar tiempos de arranque, parada y respuesta ante cambios de carga.

Variable dominante: combinación de [[I]] y [[omega]], porque define la reserva energética disponible frente a perturbaciones. Límite de validez: en máquinas reales hay flujo de fluido, pérdidas eléctricas, vibraciones y control activo. La energía cinética rotacional representa el núcleo mecánico, pero no sustituye al modelo completo de la turbomáquina o del generador.

La reserva rotacional suaviza cambios bruscos de carga. Un rotor con más energía almacenada pierde menos velocidad ante una extracción breve, pero también requiere más energía y más tiempo para arrancar desde reposo.