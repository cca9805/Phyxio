const e=`# Aplicaciones prácticas: momento de una fuerza

## 1. Abrir una puerta

Al abrir una puerta, el eje está en las bisagras. La fuerza [[F]] de la mano produce más momento si se aplica lejos del eje y casi perpendicularmente. Por eso empujar cerca del pomo es más eficaz que empujar cerca de las bisagras.

Variable dominante: [[tau]]

Límite de validez: la puerta debe modelarse como cuerpo rígido y el eje de giro debe mantenerse fijo.

La aplicación muestra que el momento no depende solo de la fuerza. Si se empuja con la misma intensidad pero en peor dirección, [[theta]] disminuye la eficacia y [[d_perp]] se reduce. La experiencia cotidiana coincide con el modelo: más brazo efectivo implica más tendencia de giro.

Esta lectura permite diagnosticar por qué una puerta pesada puede abrirse sin aumentar mucho la fuerza. Cambiar el punto de empuje hacia el borde aumenta [[r]], y orientar el empuje de forma más perpendicular aumenta el brazo efectivo. Ambas decisiones incrementan [[tau]] sin cambiar la masa de la puerta.

## 2. Uso de una llave inglesa

Una llave transmite una fuerza a una tuerca. La distancia [[r]] entre el eje de la tuerca y la mano aumenta el momento producido. Si la mano empuja perpendicularmente, el brazo perpendicular coincide con la longitud efectiva del mango. Si empuja oblicuamente, solo una parte de esa longitud cuenta.

Variable dominante: [[d_perp]]

Límite de validez: la llave no debe deformarse apreciablemente y la fuerza debe aplicarse en un plano conocido.

Esta aplicación permite estimar por qué un mango más largo ayuda. No aumenta la fuerza muscular, pero aumenta el brazo. También explica por qué una mala dirección puede desperdiciar esfuerzo: una fuerza grande con [[theta]] pequeño produce poco momento.

En herramientas reales, el diseño busca que el usuario pueda aplicar una fuerza moderada con un brazo grande. Si el mango es corto, la fuerza necesaria sube. Si el usuario empuja en una dirección casi alineada con el mango, el brazo efectivo baja aunque la herramienta sea larga.

## 3. Pedal de bicicleta

En una bicicleta, el pie aplica una fuerza sobre el pedal y el eje de giro está en el eje del pedalier. El momento depende de la posición de la biela y de la dirección de la fuerza. Cuando la biela está orientada de forma que la fuerza es casi perpendicular, el momento es mayor.

Variable dominante: [[theta]]

Límite de validez: se analiza un instante y se aproxima la fuerza del pie como una fuerza aplicada en un punto.

Esta lectura evita pensar que toda la fuerza del ciclista siempre produce el mismo efecto. A lo largo de una vuelta, [[theta]] cambia, por lo que cambia [[d_perp]] y también [[tau]]. La geometría del movimiento modula la eficacia muscular.

La aplicación muestra que el momento es instantáneo. En una posición de la biela, el mismo empuje puede ser muy eficaz; en otra, puede aportar poco giro. Por eso los sistemas de transmisión buscan aprovechar mejor los intervalos donde el brazo efectivo es grande.

## 4. Diseño de una manivela

Una manivela convierte fuerza aplicada por una mano en tendencia de giro. El diseñador puede aumentar [[r]] o mejorar el ángulo de aplicación para obtener más momento con la misma [[F]]. El análisis del momento de una fuerza permite comparar configuraciones antes de construir.

Variable dominante: [[r]]

Límite de validez: el punto de aplicación debe estar bien definido y la fuerza debe poder modelarse como concentrada.

Si la manivela es demasiado corta, hace falta más fuerza. Si es demasiado larga, puede ser incómoda o lenta. El cálculo de [[tau]] ayuda a buscar una longitud útil y una dirección de empuje eficaz.

La decisión de diseño no consiste solo en maximizar [[r]]. Un brazo muy largo puede chocar con el entorno o exigir un recorrido excesivo. El momento de una fuerza permite cuantificar el compromiso entre comodidad, espacio y eficacia rotacional.

## 5. Empuje sobre una barra articulada

En un laboratorio, una barra articulada recibe una fuerza en un punto conocido. El objetivo es comprobar si el momento aumenta al desplazar el punto de aplicación o al cambiar el ángulo. Medir [[d_perp]] directamente ayuda a verificar la relación geométrica con [[r]] y [[theta]].

Variable dominante: [[F]]

Límite de validez: el pivote debe estar fijo y el rozamiento debe ser pequeño frente al efecto de la fuerza.

Esta aplicación funciona como prueba experimental del leaf. Si la línea de acción pasa por el pivote, el momento debe anularse. Si la fuerza se hace perpendicular y se mantiene la distancia, el momento debe alcanzar su máximo para ese valor de fuerza.

El montaje también ayuda a detectar errores de medición. Si [[d_perp]] resulta mayor que [[r]], la geometría está mal trazada. Si el momento no cambia al modificar [[theta]], se está usando una fórmula que ignora el brazo perpendicular.

En conjunto, estas aplicaciones muestran que el momento de una fuerza es una magnitud de eficacia rotacional. No basta una fuerza grande: hace falta una geometría que convierta esa fuerza en giro alrededor del eje elegido.
`;export{e as default};
