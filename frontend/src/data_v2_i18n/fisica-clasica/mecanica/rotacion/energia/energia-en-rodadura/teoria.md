# Energía en rodadura

## Contexto conceptual

La energía en rodadura aparece cuando un cuerpo avanza y gira al mismo tiempo. No es solo energía traslacional, porque el centro de masas se mueve con [[v_cm]], ni solo energía rotacional, porque el cuerpo también cambia de posición. La lectura correcta suma ambas partes y pregunta si el contacto permite imponer la condición de rodadura sin deslizamiento. Por eso esta hoja conecta [[K_total]], [[m]], [[I]], [[R]], [[omega]] y la geometría del contacto.

En una rueda ideal, cada punto del sólido comparte la misma [[omega]], mientras el centro de masas avanza. Si el punto de contacto no patina, la rapidez del centro queda ligada al giro por una condición cinemática de contacto. Esa igualdad no es una definición automática: es una hipótesis física sobre el contacto. Cuando se cumple, el movimiento de avance y el de giro quedan vinculados y la energía cinética total se reparte entre traslación y rotación.

La diferencia con una partícula que desliza es decisiva. Un bloque que baja por una rampa puede convertir energía potencial casi toda en traslación. Un cilindro que rueda debe reservar parte de esa energía para el giro. Por eso su [[a_cm]] suele ser menor que la aceleración de un bloque ideal sin rozamiento, aunque el rozamiento estático no disipe energía en rodadura pura.

## 🟢 Nivel esencial

La idea esencial es que un cuerpo que rueda tiene dos almacenes cinéticos. El primero depende de la masa [[m]] y de la velocidad del centro de masas [[v_cm]]. El segundo depende del momento de inercia [[I]] y de la velocidad angular [[omega]]. La suma se llama [[K_total]]. Si solo calculas una de las dos partes, el balance energético queda incompleto.

La condición de rodadura usa el radio del cuerpo para conectar avance y giro. Si la rueda avanza mucho y gira poco, o gira mucho y avanza poco, hay deslizamiento o el radio efectivo usado no corresponde al contacto. Esta comprobación evita aplicar una regla de rodadura pura a neumáticos que patinan, monedas que resbalan o cilindros que pierden contacto.

Físicamente, [[I]] decide qué fracción de [[K_total]] queda en giro. Un aro concentra masa lejos del eje y dedica más energía a rotar. Un disco macizo reparte menos energía en rotación y más en traslación para la misma energía disponible. Esa diferencia explica por qué objetos de igual masa y radio no bajan igual por la misma rampa.

## 🔵 Nivel formal

La fórmula núcleo de energía en rodadura escribe

{{f:energia_total_rodadura}}

La condición cinemática de rodadura es

{{f:condicion_rodadura_energia}}

. El primer término es la energía cinética del centro de masas; el segundo es la energía de giro alrededor del centro. Si además hay rodadura sin deslizamiento, esta condición permite sustituir [[v_cm]] por [[R]] y [[omega]], pero solo después de validar el contacto.

La aceleración también tiene una condición asociada:

{{f:aceleracion_cm_rodadura}}

. Esta relación pertenece a la cinemática de rodadura, no directamente a la energía, pero ayuda a conectar el reparto energético con la dinámica. En una rampa con ángulo [[phi]], la componente de la gravedad [[g]] impulsa el movimiento y el torque [[tau]] del rozamiento estático puede cambiar el giro sin hacer trabajo neto disipativo ideal.

Cuando se incluye una referencia potencial, se usa

{{f:energia_mecanica_total_rodadura}}

para el balance completo. [[E_total]] puede sumar [[K_total]] y una parte potencial, mientras [[K_total]] solo mide la energía cinética. Separar esos nombres evita confundir energía disponible en una rampa con energía ya transformada en movimiento. El ángulo girado [[theta]] puede aparecer si el trabajo se calcula por torque y desplazamiento angular.

## 🔴 Nivel estructural

Estructuralmente, resolver rodadura exige decidir tres cosas. Primero, si el sistema es un sólido rígido con [[I]] constante. Segundo, si el contacto permite usar [[v_cm]] igual a [[R]] por [[omega]]. Tercero, si el balance requiere solo [[K_total]] o una energía mecánica [[E_total]] con potencial, pérdidas o trabajo externo.

El rozamiento estático es una fuente habitual de confusión. En rodadura pura puede proporcionar el torque que ajusta [[omega]] y [[a_cm]] sin disipar energía en el punto de contacto. Si hay deslizamiento, la situación cambia: aparece pérdida térmica y la condición de rodadura deja de ser válida. En ese caso, usar la fórmula ideal con la restricción de contacto produce una respuesta demasiado limpia para un proceso que no lo es.

La progresión de dificultad va de identificar términos a diagnosticar validez. En problemas simples basta sumar traslación y rotación. En rampas, se añade [[g]], [[phi]] y conservación de [[E_total]]. En maquinaria real, entran deformaciones, radios efectivos, rodamientos, pérdidas y límites de adherencia. La misma fórmula sigue siendo útil, pero solo como parte de un modelo declarado.

## Interpretación física profunda

[[K_total]] mide cuánto movimiento organizado tiene el cuerpo rodante. La parte traslacional dice cuánto avanza el centro; la parte rotacional dice cuánto gira la masa alrededor de ese centro. La condición de rodadura no crea energía, sino que obliga a que ambas partes evolucionen juntas.

El papel de [[I]] es redistribuir energía. Para una misma [[v_cm]], un cuerpo con mayor [[I]] necesita mayor energía rotacional porque también debe girar con la [[omega]] impuesta por [[R]]. Por eso la forma geométrica afecta la velocidad final en una rampa incluso cuando masa y radio son iguales.

## Orden de magnitud

Una rueda pequeña con [[m]] de 1 kg, [[R]] de 0.1 m y [[v_cm]] de 2 m/s tendrá unos pocos joules de energía. Una rueda de vehículo con masa de decenas de kilogramos y velocidad mucho mayor puede almacenar miles de joules en traslación y rotación. Si el resultado queda millones de veces fuera de escala, suele haber error de unidades, radio, rpm o momento de inercia.

## Método de resolución personalizado

Primero identifica si hay rodadura pura o deslizamiento. Segundo, escribe por separado la energía traslacional y la rotacional. Tercero, usa [[R]] para conectar [[v_cm]] y [[omega]] solo si el contacto lo permite. Cuarto, decide si necesitas [[K_total]] o [[E_total]]. Quinto, revisa si [[a_cm]], [[alpha]], [[tau]] o [[theta]] pertenecen al proceso o solo son datos distractores.

## Casos especiales y ejemplo extendido

Un aro, un disco y una esfera pueden tener la misma [[m]] y el mismo [[R]], pero diferentes [[I]]. En una rampa ideal, el objeto con menor fracción rotacional suele ganar más velocidad traslacional. Si hay patinaje, el reparto cambia porque parte de la energía se disipa. Si el radio efectivo cambia por deformación, la condición cinemática también cambia.

## Preguntas reales del alumno

¿El rozamiento hace trabajo en rodadura pura? En el punto de contacto ideal no hay desplazamiento relativo, así que el rozamiento estático no disipa energía allí. ¿Por qué entonces aparece torque? Porque puede cambiar el giro sin convertir energía mecánica en calor. ¿Puedo usar siempre [[v_cm]] igual a [[R]] por [[omega]]? No; antes debes confirmar contacto sin deslizamiento.

## Conexiones transversales y rutas de estudio

Esta hoja conecta energía cinética rotacional, condición cinemática de rodadura, dinámica de la rodadura y conservación de la energía. También prepara el análisis de cuerpos reales, donde [[E_total]] incluye pérdidas, deformaciones y transferencia térmica. Conviene estudiar antes momento de inercia y después problemas de rampa con rodadura.

## Síntesis final

La energía en rodadura se entiende como reparto. [[K_total]] suma avance del centro de masas y giro alrededor del centro; [[E_total]] amplía el balance si existe potencial o trabajo externo. La condición con [[R]] solo vale sin deslizamiento. Elegir bien el modelo es tan importante como sustituir bien los números.