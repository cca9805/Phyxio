# Ejemplo tipo examen

## Enunciado

Un cilindro macizo de masa [[m]] y radio [[R]] desciende por un plano inclinado de ángulo [[phi]] sin deslizar. Se pide elegir el método de resolución y obtener [[a_cm]], indicando cuándo sería útil usar energía.

## Datos

Se conocen [[m]], [[R]], [[I]], [[g]] y [[phi]]. Para un cilindro macizo se puede usar la mitad de m por R al cuadrado si el enunciado no entrega otro valor. La condición de rodadura permite relacionar [[a_cm]] con [[alpha]].

## Definición del sistema

El sistema es el cilindro. Las fuerzas externas son el peso, la normal y el rozamiento estático. El peso tiene componente paralela al plano; el rozamiento estático produce el torque [[tau]] que genera giro.

## Modelo físico

La pregunta pide [[a_cm]], contacto y coherencia entre [[alpha]], [[tau]], [[I]] y [[R]], por tanto la estrategia empieza con dinámica y DCL. La energía puede dar rapidez después de recorrer una distancia mediante [[K_total]] y [[E_total]], pero no da por sí sola el valor del rozamiento ni su sentido.

## Justificación del modelo

Usamos rodadura ideal porque el enunciado dice sin deslizar. La relación de aceleración en plano ya contiene la combinación de traslación, rotación y restricción. Si el rozamiento disponible no alcanzara, habría que abandonar este modelo.

## Resolución simbólica

La aceleración del centro de masas queda:

La expresión operativa es:

{{f:aceleracion_rodadura_plano}}

Para el cilindro macizo, además puede verificarse el reparto energético con:

{{f:energia_cinetica_total_rodadura}}

La aceleración angular se obtiene después dividiendo la aceleración del centro por el radio. La energía cinética total se interpreta con la relación energética correspondiente, donde [[K_total]] reparte traslación y rotación. Si el enunciado pidiera una rapidez tras bajar una altura, se conectaría con la relación de energía mecánica total y [[E_total]].

## Sustitución numérica

Si [[phi]] es 30 grados y [[g]] vale 9,8 metros por segundo cuadrado, entonces sin([[phi]]) vale 0,5 y [[a_cm]] queda cerca de 3,27 metros por segundo cuadrado. El resultado no depende de [[m]] ni de [[R]] para este caso particular porque el cociente inercial vale un medio.

## Validación dimensional

El numerador tiene unidades de aceleración y el denominador es adimensional. [[K_total]] y [[E_total]] se miden en julios, no en newtons ni en metros por segundo.

## Interpretación física

La aceleración es menor que [[g]] sin([[phi]]) porque parte de la caída alimenta el giro. Esto implica que el resultado depende del reparto entre traslación y rotación. Si el cuerpo fuera un aro, [[I]] sería mayor en relación con masa por radio al cuadrado y la aceleración disminuiría. El método elegido fue dinámica porque la causa del giro era relevante.

Esta lectura no es solo numérica: explica la causa, el reparto energético y el papel del contacto. Si cambia [[I]], cambia el denominador físico; si cambia [[phi]], cambia la causa gravitatoria; si falla el contacto, cambia el modelo.

# Ejemplo de aplicación real

## Contexto

Una rueda de laboratorio baja por una rampa suave. El profesor quiere saber si conviene resolver con energía o con dinámica.

## Estimación física

Si solo se pide la rapidez al final y no hay patinaje, [[E_total]] puede tratarse como conservada y [[K_total]] debe incluir rotación. Si se pide el rozamiento estático, el DCL es obligatorio. Si se pide comparar dos ruedas de distinto [[I]], la fórmula de aceleración muestra la tendencia de forma directa.

Esta estimación física usa orden de magnitud: altura perdida, energía por kilogramo y velocidad esperada deben quedar en una escala razonable para una rampa de aula.

Una lectura cuantitativa mínima compara la altura perdida, la energía por kilogramo y el reparto entre traslación y rotación. En una rampa de medio metro de caída, la energía disponible por kilogramo ronda unos pocos julios, no cientos.

## Interpretación

La estrategia correcta depende de la incógnita. Energía responde balances; dinámica responde fuerzas; la condición de rodadura conecta [[v_cm]], [[omega]], [[a_cm]] y [[alpha]]. Un buen resultado debe ser coherente en los tres gráficos del leaf.

En una estimación real, una rampa de 1 m con 30 grados de inclinación baja unos 0,5 m de altura. La energía disponible por kilogramo es cercana a 4,9 J. Para un cilindro macizo, una parte queda en traslación y otra en rotación, de modo que la rapidez final es menor que la de un bloque sin giro. Esta comparación cuantitativa muestra por qué [[K_total]] y [[E_total]] no son adornos: deciden si energía es suficiente o si hace falta volver al DCL.

El ejemplo queda anclado al leaf porque no busca solo una aceleración: muestra cómo se escoge el camino usando la relación de aceleración, la lectura de energía cinética total y la lectura de energía mecánica total. Si el enunciado hubiera pedido rapidez final, empezar por energía habría sido razonable. Si hubiera pedido fuerza de rozamiento, el DCL sería imprescindible. Si hubiera pedido comprobar la rodadura, habría que comparar el rozamiento requerido con el máximo estático. La misma situación física admite varias preguntas, y cada pregunta selecciona un método.

La interpretación física tampoco se cierra con el número 3,27. Ese valor debe leerse como una consecuencia del reparto entre avance y giro. Un cilindro hueco bajaría más despacio porque su [[I]] relativo es mayor; un bloque sin giro bajaría más rápido si no hubiera pérdidas; una rueda que patina no seguiría la misma relación entre [[v_cm]] y [[omega]]. El gráfico Coord permite variar [[phi]] y ver que la tendencia es suave, mientras el DCL recuerda que la causa real es la combinación de peso, normal y rozamiento estático.

Una estimación de orden de magnitud refuerza el resultado. En una rampa escolar, aceleraciones de unos pocos metros por segundo cuadrado son plausibles. Si saliera una aceleración mayor que [[g]] sobre un plano moderado, la señal sería revisar signos, ángulos o el denominador inercial. Si saliera energía negativa, habría un error de referencia o de unidades. Así el ejemplo enseña a elegir método, calcular y validar.