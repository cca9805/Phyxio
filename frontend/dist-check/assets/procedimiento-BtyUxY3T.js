const e=`# Procedimiento

## Antes de calcular

Lee la pregunta antes de mirar la formula. Si pide "rapidez de cambio", "velocidad", "pendiente", "ritmo" o "por unidad de", probablemente necesitas una pendiente. Si pide "total", "acumulado", "desplazamiento", "impulso", "trabajo" o "carga", probablemente necesitas un area.

Comprueba tambien el intervalo. Una pendiente puede calcularse en un tramo concreto, entre dos puntos o en un punto si hay tangente. Un area siempre necesita un intervalo horizontal y una referencia para decidir el signo.

## Paso 1: identifica el objeto matematico

Escribe que representa cada eje con unidad: por ejemplo \`t (s)\` en horizontal y \`v (m/s)\` en vertical. Despues decide si estas ante una recta, una curva, un tramo por partes o una nube de datos. Esa forma condiciona el metodo.

Si hay una recta, la pendiente es constante y basta cualquier par de puntos bien leidos. Si hay una curva, la pendiente media usa dos puntos del intervalo y la pendiente instantanea requiere una tangente o una derivada. Para area, separa rectangulos, triangulos, trapecios o zonas curvas.

## Paso 2: elige la operacion

Usa pendiente si la respuesta debe ser una tasa con unidad cociente. En una grafica \`x-t\`, \`Delta x / Delta t\` da velocidad media. En una grafica \`v-t\`, \`Delta v / Delta t\` da aceleracion media.

Usa area si la respuesta debe ser una acumulacion con unidad producto. En \`v-t\`, el area da desplazamiento. En \`F-t\`, el area da impulso. En \`P-t\`, el area da energia transferida.

## Paso 3: conserva unidades y signos

La unidad de una pendiente sale dividiendo la unidad vertical entre la horizontal. No escribas solo el numero: \`4\` no significa lo mismo que \`4 m/s\` o \`4 N/m\`.

La unidad de un area sale multiplicando unidades de ejes. El signo depende de si la curva esta por encima o por debajo del eje horizontal, o de si la magnitud vertical es positiva o negativa. Si hay tramos de distinto signo, calcula cada zona por separado.

## Paso 4: calcula

Para pendiente media, elige dos puntos legibles y calcula \`Delta y / Delta x\`. Usa diferencias con signo: punto final menos punto inicial. Si el tramo es horizontal, la pendiente es cero aunque el valor vertical no lo sea.

Para area simple, descompone la region en figuras conocidas. Un rectangulo vale base por altura, un triangulo vale base por altura dividido entre dos y un trapecio vale base por suma de alturas dividido entre dos. Si la curva es irregular, aproxima con rectangulos o trapecios y declara que es una estimacion.

## Paso 5: interpreta el resultado

Transforma el numero en una frase fisica. Una pendiente de \`-2 m/s\` en posicion-tiempo significa que la posicion disminuye dos metros por segundo. Un area de \`15 m\` en velocidad-tiempo significa desplazamiento neto de quince metros.

Si el resultado es negativo, explica el sentido. Si el resultado es cero, distingue entre "no hay cambio", "se cancelan areas positivas y negativas" o "la magnitud vertical es nula". Esas tres situaciones no significan lo mismo.

## Checklist de autocontrol

Antes de entregar, verifica: ejes leidos, unidades escritas, intervalo marcado, operacion elegida por la pregunta y no por costumbre, signo revisado, escala usada correctamente y frase fisica final.

Para nivel basico, basta reconocer pendiente frente a area. Para nivel intermedio, calcula con figuras y cocientes. Para nivel avanzado, decide entre media e instantanea, area geometrica y area con signo, y justifica aproximaciones.
`;export{e as default};
