# Aplicaciones de traslación y rotación

## 1. Bicicleta en aceleración inicial

En la salida de un semáforo, la rueda trasera recibe torque del ciclista y lo convierte en aceleración lineal de la bicicleta. Aunque a simple vista parezca un caso puramente traslacional, la respuesta real depende del acoplamiento entre giro y avance. Una parte del esfuerzo incrementa la velocidad lineal [[v]] del conjunto ciclista-bicicleta, y otra parte incrementa la velocidad angular [[omega]] de las ruedas.

Cuando la rueda tiene mayor momento de inercia [[I]] (por llanta pesada o masa concentrada lejos del eje), la respuesta inicial se vuelve más lenta para un mismo torque efectivo [[tau_net]]. Esa diferencia es especialmente visible en arranques repetidos urbanos.

Variable dominante: [[I]]
Límite de validez: el modelo rígido sin pérdidas grandes es confiable en terreno seco y sin deslizamiento relevante entre neumático y suelo.

## 2. Ascensor con polea motriz

En un sistema de elevación, el motor aplica [[tau_net]] sobre una polea que arrastra cable y cabina. El vínculo entre aceleración angular [[alpha]] y aceleración lineal [[a]] determina el confort del usuario y las cargas sobre la estructura. Si el radio [[R]] cambia por sustitución de polea, la misma dinámica rotacional se proyecta de forma distinta sobre la traslación.

En diagnóstico de mantenimiento, el reparto energético entre [[Kt]] y [[Kr]] ayuda a distinguir si el cuello de botella está en la masa trasladada [[m]] o en la inercia del tren rotativo. Un aumento inesperado de energía rotacional para el mismo perfil de servicio puede revelar daño en componentes giratorios o errores de diseño de transmisión.

Variable dominante: [[R]]
Límite de validez: la lectura simplificada vale cuando el cable no patina y la elasticidad del sistema no introduce oscilaciones dominantes.

## 3. Rodillos de línea de empaquetado

En líneas de empaque de alta cadencia, los rodillos deben acelerar y frenar en ventanas cortas. El diseñador suele fijarse en potencia de motor, pero el desempeño real depende de cómo [[tau_net]], [[I]] y [[R]] determinan [[a]] en cada ciclo. Si el tiempo de subida no se cumple, aparecen desfases entre estaciones y pérdida de productividad.

Una práctica robusta consiste en auditar tanto dinámica como energía: estimar [[alpha]] y [[a]] con el vínculo de no deslizamiento, y luego verificar si [[K]] se concentra en [[Kr]] más de lo esperado. Cuando eso ocurre, la mejora más eficaz puede ser reducir inercia de rodillos, no aumentar potencia eléctrica indiscriminadamente.

Variable dominante: [[alpha]]
Límite de validez: el modelo es útil mientras la fricción y la deformación de banda no dominen el transitorio.

## 4. Banco de pruebas de volantes de inercia

En laboratorios de almacenamiento de energía mecánica, un volante gira para acumular energía en forma rotacional. Sin embargo, al acoplarse a un sistema de carga lineal, aparece simultáneamente traslación y rotación. El análisis conjunto permite decidir si el volante entrega potencia útil con la rapidez necesaria o si solo almacena energía sin transferirla a tiempo.

Aquí la descomposición [[K]] = [[Kt]] + [[Kr]] no es un detalle académico: es la métrica principal de desempeño funcional. Un diseño puede exhibir alta energía total [[K]], pero si casi toda está en [[Kr]] y no se transforma en movimiento útil de la carga, el sistema no cumple su propósito operativo.

Variable dominante: [[K]]
Límite de validez: aplicable en régimen clásico con cuerpo rígido; si hay pérdidas aerodinámicas intensas o flexión estructural, se requiere modelo extendido.

## 5. Robots móviles con ruedas de alto par

En robots industriales o logísticos, cada arranque y parada exige coordinar dinámica de rueda y desplazamiento del chasis. El control puede ordenar par elevado, pero la respuesta final de trayectoria depende del acoplamiento entre el par efectivo [[tau_net]], la inercia de rueda [[I]], la masa total [[m]] y el radio [[R]].

Una elección inadecuada de rueda puede degradar precisión de control: ruedas muy inerciales suavizan variaciones rápidas de [[omega]], retrasan la respuesta de [[a]] y afectan la exactitud en maniobras de posicionamiento. Por eso, el diseño de locomoción avanzada no separa cinemática de energía; integra ambas desde fase de arquitectura.

Variable dominante: [[tau_net]]
Límite de validez: válido si hay adherencia suficiente y no hay deslizamiento persistente en la interacción rueda-suelo.

## Síntesis de uso profesional

Estas cinco aplicaciones comparten una pauta común: la ingeniería eficiente en sistemas vinculados no se logra optimizando una sola magnitud aislada, sino equilibrando [[tau_net]], [[I]], [[R]], [[m]], [[alpha]], [[a]], [[v]] y la partición energética entre [[Kt]], [[Kr]] y [[K]].

Para decisiones de diseño y operación, esta lectura aporta criterios concretos:

- Si el problema es respuesta lenta en arranque, revisar primero inercia rotacional y vínculo geométrico antes de sobredimensionar actuador.
- Si el problema es consumo o calentamiento, evaluar cuánto de [[K]] se está yendo a componentes que no contribuyen al objetivo funcional.
- Si el problema es control de precisión, analizar retardo dinámico inducido por [[I]] y por la transmisión de [[alpha]] a [[a]].

Como herramienta didáctica, el leaf enseña una competencia transversal: transformar ecuaciones en decisiones físicas justificadas. Esa competencia es la que diferencia resolver ejercicios de operar sistemas reales con criterio técnico.
