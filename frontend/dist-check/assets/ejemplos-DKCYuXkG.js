const a=`# Ejemplo guiado

## Situacion fisica

La altura de un proyectil en un modelo simple viene dada por \`h(t) = 20t - 5t^2\`, con \`t\` en segundos y \`h\` en metros. La pregunta es en que instante alcanza altura maxima y cual es esa altura.

## Traduccion matematica

La grafica es una parabola abierta hacia abajo, por lo que tiene un maximo. Buscamos el punto donde deja de subir y empieza a bajar. En nivel avanzado, eso equivale a pendiente cero.

## Calculo paso a paso

La derivada es \`h'(t) = 20 - 10t\`. Igualamos a cero: \`20 - 10t = 0\`, luego \`t = 2 s\`. Evaluamos: \`h(2) = 20(2) - 5(2)^2 = 40 - 20 = 20 m\`.

## Lectura del resultado

El proyectil alcanza altura maxima de \`20 m\` a los \`2 s\`. El resultado no dice donde cae ni cuanto recorre horizontalmente; solo optimiza la altura dentro de este modelo vertical.

## Error comun evitado

El error evitado es responder solo \`t = 2\` sin unidad ni valor maximo. Otro error seria llamar estable a ese maximo: en esta grafica es punto mas alto de trayectoria, no equilibrio estable.

# Ejemplo inverso

## Resultado dado

Una grafica de energia potencial tiene un minimo local en \`x = 0.15 m\`, con energia mayor a ambos lados del punto dentro del intervalo observado.

## Que pregunta fisica permite responder

Permite preguntar por una posicion de equilibrio estable. Si al mover el sistema ligeramente a izquierda o derecha aumenta la energia, el sistema tendera a volver hacia el minimo.
`;export{a as default};
