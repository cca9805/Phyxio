# Sistemas de referencia [[frame_sigma]] 

## Contexto conceptual

Hablar de movimiento sin decir desde donde se observa es una trampa conceptual. En este leaf el objeto central no es una formula aislada, sino la estructura completa con la que un observador describe un fenomeno. Esa estructura queda resumida por cuatro piezas operativas: el marco [[frame_sigma]] , el origen [[O]] , el vector de posición [[r_vec]] y la velocidad relativa del marco móvil [[v_frame]] . Solo cuando esas piezas están fijadas tiene sentido preguntar por la posición o por la velocidad de un móvil.

El punto fino es que el evento físico no cambia cuando cambia el observador, pero su descripción sí. Un pasajero puede estar en reposo respecto al vagón y en movimiento respecto al andén; una cámara montada en un dron puede ver estable un objetivo que para una cámara fija cruza toda la pantalla; un sensor sobre una cinta puede registrar una posición casi constante mientras un operario fijo al suelo ve avanzar el paquete. El fenómeno es uno, pero cada [[frame_sigma]] reorganiza la lectura de [[r_vec]] , del signo y de la evolución temporal.

Por eso este tema no es un detalle preliminar de la cinemática. Es la condición que hace comparables los datos. Cuando el alumno aprende a elegir el marco antes de escribir cuentas, deja de usar la ecuación como receta y empieza a usarla como traducción controlada de una escena. Esa es la idea dominante del leaf: el cambio de referencia cambia la descripción del movimiento, no el hecho de que el movimiento exista.

---

## 🟢 Nivel esencial

La entrada correcta al tema es puramente conceptual. Antes de mirar símbolos conviene responder tres preguntas cortas: quién observa, desde qué origen mide y con qué reloj compara los eventos. Si dos personas contestan de modo distinto, ya no están describiendo exactamente la misma magnitud, aunque hablen del mismo cuerpo. En otras palabras: una posición no vive sola, siempre está colgada de un marco de referencia [[frame_sigma]] bien declarado.

La intuición más útil es la del tren y el andén. Para el pasajero, la maleta apoyada en el suelo del vagón mantiene casi constante su posición dentro del coche; para el observador del andén, esa misma maleta avanza porque el vagón entero se mueve respecto al suelo. Este nivel debe poder contarse sin ecuaciones: cambiar de observador modifica la descripción, y el primer error serio aparece cuando se comparan resultados de marcos distintos como si fueran datos del mismo tipo.

---

## 🔵 Nivel formal

Una vez fijada la escena, la notación ordena la intuición. En este leaf [[frame_sigma]] nombra el marco desde el que se describe el problema; [[O]] fija el cero espacial de ese marco; [[r_vec]] representa la posición del móvil respecto a ese origen; [[v_frame]] mide la velocidad con la que un marco se desplaza respecto a otro; y [[t_global]] recuerda que, en mecánica clásica, ambos observadores comparten el mismo parámetro temporal. Si alguno de esos elementos falta, la ecuación puede parecer correcta y seguir siendo inútil.

La relación central del tema es la **transformación galileana de posición**. Escrita con la notación del leaf, expresa que la posición medida en un marco se obtiene sumando la posición medida en el otro marco y el desplazamiento acumulado por el propio marco móvil:

{{f:trans_galileo_pos}}

Esta ecuación no se usa para decorar una deducción, sino para responder una pregunta concreta: cómo se traduce una misma trayectoria cuando se cambia el observador. Si el estudiante sabe que [[r_vec]] pertenece al marco elegido y que [[v_frame]] pertenece a la relación entre marcos, deja de sumar velocidades y posiciones sin criterio.

La velocidad se interpreta con la misma lógica. Si un pasajero camina dentro del vagón, el observador del vagón mide [[v_prime]] y el observador del andén mide [[v]] . La transformación de velocidad suma a la lectura interna la velocidad del vagón [[v_frame]] . Lo importante no es memorizar la suma, sino distinguir dos niveles: el movimiento interno del móvil dentro del marco y el movimiento del marco entero respecto a otro:

{{f:trans_galileo_vel}}

Hay además dos invariancias clásicas que ordenan la interpretación. La primera dice que dos marcos galileanos comparan la misma **separación espacial** [[r_vec]] cuando miden simultáneamente el mismo segmento:

{{f:invarianza_distancia}}

La segunda afirma que ambos comparten el mismo [[t_global]] . Estas invariancias no son adornos filosóficos: son el motivo por el que el problema puede cerrarse con una única cronología común:

{{f:invarianza_tiempo}}

El uso correcto de las expresiones formales exige una disciplina de lectura. Primero se elige el marco. Después se declara dónde está [[O]] . Luego se escribe [[r_vec]] con el signo adecuado. Solo al final se decide cómo entra [[v_frame]] . Ese orden evita la confusión típica de poner un número en una ecuación antes de saber a quién pertenece. El álgebra no corrige un marco mal elegido; solo propaga el error con más precisión.

---

## 🔴 Nivel estructural

El modelo galileano funciona porque simplifica el mundo de una manera muy específica. Supone marcos inerciales o casi inerciales, ejes paralelos, velocidades relativas constantes y un tiempo común para todos los observadores del problema. Mientras esas hipótesis se mantengan, cambiar de [[frame_sigma]] reordena la descripción sin romper la coherencia física. El resultado puede cambiar de signo, de valor o incluso pasar de reposo a movimiento, pero no deja de referirse al mismo evento.

La estructura empieza a tensarse cuando alguna de esas hipótesis se rompe. Si el marco móvil acelera de forma apreciable, si un observador gira respecto al otro o si la comparación mezcla instantes distintos, la transformación simple deja de bastar. También falla cuando se usan dos orígenes distintos sin declararlo: el alumno cree que está comparando posiciones, pero en realidad está mezclando [[r_vec]] de escenas geométricas incompatibles. En ese punto la ecuación no está mal por un detalle algebraico; está mal porque ya no corresponde al mecanismo descrito por el leaf.

El indicador más fiable de fallo es cualitativo. Si una maleta en reposo dentro del tren sale con velocidad cero para el andén, o si una cámara móvil y una fija producen descripciones que no pueden reconciliarse con un mismo [[t_global]] , el problema no necesita más cuentas: necesita revisar el marco. La competencia avanzada del tema consiste en detectar ese fallo antes de cerrar el resultado.

---

## Interpretación física profunda

La ganancia intelectual del leaf es aprender a separar realidad física y descripción. El evento no depende del observador, pero el valor de [[r_vec]] sí; el objeto no cambia de naturaleza, pero la lectura de su velocidad depende del [[frame_sigma]] elegido; el choque, el encuentro o el reposo siguen ocurriendo, aunque cada observador los exprese con coordenadas distintas. Esta separación es profunda porque enseña a no confundir la herramienta de medida con el fenómeno medido.

Leída así, la referencia deja de ser un trámite administrativo. Elegir bien el marco es decidir qué información se vuelve simple, qué magnitudes se comparan directamente y dónde está el error conceptual dominante. Un marco que acompaña al móvil puede revelar una geometría sencilla; un marco fijo al suelo puede ser mejor para interpretar tiempos de llegada. Ninguno es "el verdadero" por sí solo: es verdadero para la pregunta concreta que se quiere responder.

---

## Orden de magnitud

Los números razonables de [[v_frame]] suelen estar en escalas muy familiares: una cinta de aeropuerto puede moverse del orden de 10^{-1} a 10^{0} m/s, un tren urbano en el entorno de 10^1 m/s y un vehículo de laboratorio incluso menos. Estas escalas son útiles porque permiten detectar absurdos rápido. Si un ejercicio escolar hace que una persona caminando dentro de un vagón aparezca con velocidad de cientos de metros por segundo, no hace falta una demostración larga para sospechar del marco o del signo.

También conviene revisar el orden de magnitud de [[r_vec]] . En un laboratorio, unos pocos metros suelen ser razonables; en un problema de pista o carretera, decenas o centenares de metros; en una animación de gráfica temporal, desplazamientos enormes en tiempos mínimos suelen delatar que el origen o el reloj se mezclaron. El orden de magnitud no resuelve el problema, pero evita aceptar una traducción entre marcos que ya nace físicamente desajustada.

---

## Método de resolución personalizado

1. Nombrar explícitamente el [[frame_sigma]] de cada observador y decidir cuál de ellos simplifica la pregunta física.
2. Fijar el origen [[O]] y el signo positivo en cada descripción.
3. Escribir [[r_vec]] y, si hace falta, la velocidad propia del móvil dentro del marco acompasado.
4. Introducir [[v_frame]] como velocidad del marco móvil respecto al marco fijo.
5. Comprobar al final si el cambio de observador altera solo la descripción y no el evento.

Este método importa porque ataca el error más frecuente del tema: comparar magnitudes legítimas, pero pertenecientes a observadores distintos. Cuando cada símbolo queda asignado a su marco antes de sustituir datos, la resolución se vuelve mucho más corta y defendible.

---

## Casos especiales y ejemplo extendido

### El reposo aparente
Un objeto puede tener [[r_vec]] constante en un marco y, al mismo tiempo, desplazarse uniformemente en otro. Ese escenario no es una excepción: es el corazón del tema. Si el alumno lo entiende, comprende por qué una maleta apoyada en el tren no contradice que el tren avance respecto al andén.

### Orígenes desplazados
Otro caso útil es el de dos observadores que comparten [[t_global]] pero no origen espacial. No basta con decir "está en una coordenada de 5 m": hace falta decir respecto a qué [[O]] .

---

## Preguntas reales del alumno

- **¿Si el movimiento es el mismo, por qué sale otra velocidad?** No ha cambiado el movimiento físico, sino la partición entre movimiento propio y movimiento del marco.
- **¿Cómo sé cuál es el mejor marco?** Elige el que haga más simple la relación dominante. Si quieres saber cómo se mueve un pasajero dentro del tren, el marco del vagón aclara primero; para un poste, el marco del suelo.

---

## Conexiones transversales y rutas de estudio

Este leaf se conecta de forma directa con velocidad relativa, encuentros y persecuciones, análisis gráfico y, más adelante, con la frontera donde la mecánica clásica deja de bastar. También prepara la lectura de muchos problemas de dinámica: antes de decidir fuerzas o aceleraciones, conviene saber desde qué marco se van a interpretar.

---

## Síntesis final para el examen

Dominar sistemas de referencia significa elegir un [[frame_sigma]] , fijar un origen [[O]] e interpretar [[r_vec]] sin ambigüedad. Cambiar de observador cambia la descripción del movimiento, no el hecho físico descrito.

Recuerda:
1. El marco [[frame_sigma]] es la herramienta, no el fenómeno.
2. La [[v_frame]] es la "velocidad de traducción" entre descripciones.
3. El tiempo [[t_global]] es el único hilo conductor que comparten todos los observadores galileanos.
4. Un resultado sin marco declarado es físicamente incompleto.
