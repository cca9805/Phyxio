const e=`# Procedimiento

## Antes de calcular

Lee que magnitud se quiere optimizar o interpretar. No es lo mismo buscar maxima altura, minima energia, potencia maxima o punto de equilibrio. Cada caso cambia la lectura fisica del extremo.

Marca el dominio permitido. Un maximo dentro de un intervalo puede desaparecer si se amplia el dominio; un minimo fisico puede estar en un borde y no en un punto de pendiente cero.

## Paso 1: identifica el objeto matematico

El objeto puede ser una grafica, una tabla o una funcion. Identifica variable independiente, magnitud dependiente y unidad. Despues localiza tramos crecientes, decrecientes y zonas planas.

Si tienes formula y nivel avanzado, calcula derivada o razona con pendiente. Si solo tienes grafica, usa cambios de tendencia y compara valores cercanos.

## Paso 2: elige la operacion

Para reconocer un extremo visual, busca cambio de crecimiento a decrecimiento o al reves. Para un punto critico analitico, resuelve \`f'(x) = 0\` y revisa puntos donde la derivada no exista.

Para estabilidad, no basta localizar el punto. Debes mirar que ocurre alrededor: si al desplazarte sube la energia a ambos lados, el minimo es estable; si baja al alejarte, el maximo es inestable.

## Paso 3: conserva unidades y signos

La posicion del extremo tiene unidades de la variable horizontal; el valor extremo tiene unidades de la magnitud vertical. No mezcles ambas. Un maximo en \`t = 4 s\` y altura \`20 m\` contiene dos datos distintos.

El signo de la pendiente antes y despues clasifica el punto: \`+\` a \`-\` sugiere maximo; \`-\` a \`+\` sugiere minimo. Si no cambia, puede ser punto estacionario sin extremo.

## Paso 4: calcula

En una grafica, lee coordenadas del extremo y compara con puntos vecinos. En una funcion, calcula candidatos con \`f'(x) = 0\`, evalua la funcion en candidatos y bordes del dominio, y compara valores.

Para clasificar, usa cambio de signo de la pendiente o curvatura. Si la segunda derivada es positiva en un punto critico, suele haber minimo local; si es negativa, suele haber maximo local.

## Paso 5: interpreta el resultado

Escribe una frase fisica: "la energia minima indica equilibrio estable", "la amplitud maxima indica resonancia", "el maximo de alcance aparece para esta condicion" o "el punto critico no es estable".

Incluye dominio y limitaciones. Si el extremo se obtiene dentro de un modelo simplificado, indica que no necesariamente vale fuera del intervalo o con efectos no incluidos.

## Checklist de autocontrol

Magnitud optimizada, dominio, coordenadas con unidades, local o global, clasificacion, estabilidad o significado fisico y limites del modelo. Si falta el dominio, el extremo puede estar mal interpretado.
`;export{e as default};
