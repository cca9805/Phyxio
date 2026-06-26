const e=`# Ejemplo tipo examen

## Enunciado

Un satelite describe una orbita eliptica alrededor de la Tierra. Su semieje mayor es [[a]] = 7,20e6 m y su excentricidad es [[e]] = 0,10. Se pide interpretar la geometria de la orbita, calcular el orden del semieje menor [[b]], estimar el periodo [[T]] usando la masa terrestre y comparar el resultado con otra orbita alrededor de la misma masa central cuyo semieje mayor [[a2]] es el doble de [[a1]]. Finalmente, se debe explicar por que el satelite no se mueve con rapidez constante aunque la orbita sea periodica.

## Datos

Tomamos [[G]] = 6,674e-11 N*m^2/kg^2, [[M]] = 5,97e24 kg, [[a]] = 7,20e6 m y [[e]] = 0,10. Para la comparacion se usa [[a1]] = [[a]], [[a2]] = 2[[a1]] y [[T1]] igual al periodo de la primera orbita. La variable angular [[theta]] no se necesita para el periodo global, pero si se quisiera una distancia focal instantanea [[r]] habria que especificarla.

## Definición del sistema

El sistema es Tierra-satelite. La Tierra se modela como masa central [[M]] y el satelite como masa orbital [[m]] pequena frente a ella. La orbita se considera kepleriana, plana y ligada. La masa central esta en un foco de la elipse, no en su centro geometrico. Por eso la descripcion usa [[a]], [[b]], [[e]], [[r]] y [[theta]] como variables geometricas separadas.

## Modelo físico

Usamos el modelo de dos cuerpos con fuerza central y perturbaciones despreciables. En este modelo, [[mu]] resume la escala gravitatoria, [[a]] controla el periodo, [[e]] controla la forma y [[dA_dt]] permanece constante. La primera ley fija la geometria, la segunda fija el ritmo areal y la tercera fija el periodo orbital.

## Justificación del modelo

El enunciado no menciona empuje, rozamiento atmosferico, achatamiento terrestre ni perturbaciones lunares o solares. Como solo se pide una estimacion de periodo y una lectura conceptual de la rapidez variable, el modelo kepleriano es suficiente. Si se pidiera prediccion precisa durante muchos dias, habria que introducir perturbaciones; aqui basta con reconocer la escala fisica y el papel de cada ley.

## Resolución simbólica

Primero se define la escala gravitatoria:

{{f:parametro_gravitatorio}}

La forma de la elipse puede leerse con la primera ley si se conoce [[theta]]:

{{f:primera_ley_polar}}

Para obtener el semieje menor se usa la relacion geometrica:

{{f:relacion_semiejes}}

La segunda ley se expresa como barrido areal constante:

{{f:velocidad_areal_constante}}

Su lectura dinamica se conecta con el momento angular:

{{f:relacion_momento_angular_conceptual}}

En esta lectura, [[L]] no se calcula numericamente porque el ejercicio esta centrado en Kepler, pero su presencia recuerda que la ley de areas tiene una causa dinamica: la conservacion del momento angular en una fuerza central.

Para el periodo absoluto se usa:

{{f:tercera_ley_absoluta}}

La misma idea puede escribirse con [[mu]]:

{{f:tercera_ley_mu}}

Para comparar con la segunda orbita alrededor de la misma Tierra se usa:

{{f:tercera_ley_comparativa}}

## Sustitución numérica

Con los datos dados, [[mu]] es aproximadamente 3,99e14 m^3/s^2. El semieje menor resulta cercano a 7,16e6 m, algo menor que [[a]] porque [[e]] = 0,10 representa una elipse poco alargada. El periodo estimado es de unas 6,1e3 s, alrededor de 102 minutos, coherente con una orbita terrestre baja-alta.

Para la orbita comparada, [[a2]] = 2[[a1]]. La forma comparativa no da [[T2]] = 2[[T1]], sino un factor 2 elevado a tres medios, cercano a 2,83. Por tanto, la segunda orbita tendria un periodo aproximado de 2,83 veces el primero, no solo el doble.

## Validación dimensional

En la tercera ley absoluta, el cociente entre [[a]] elevado al cubo y [[G]][[M]] tiene dimension de tiempo al cuadrado, y la raiz cuadrada devuelve segundos. En la comparativa, [[a2]]/[[a1]] es adimensional, de modo que [[T2]] conserva la misma unidad que [[T1]]. En la relacion de semiejes, [[b]] mantiene unidad de longitud porque el factor con [[e]] es adimensional.

## Interpretación física

La orbita es casi circular, pero no exactamente circular. La masa central esta en un foco y [[r]] cambia durante el recorrido. El periodo depende principalmente de [[a]] y de [[M]], mientras que [[e]] decide cuanto varian las distancias dentro de la elipse. La segunda ley explica que el satelite avance mas rapido cerca del pericentro y mas despacio cerca del apocentro, sin romper la periodicidad global.

El resultado comparativo es el aprendizaje clave: aumentar el tamano orbital modifica el periodo de forma no lineal. Esto impide resolver problemas de Kepler por proporcionalidad directa simple. La pregunta correcta no es solo cuanto mas grande es la orbita, sino como entra ese tamano en la ley temporal.

# Ejemplo de aplicación real

## Contexto

Una agencia quiere elegir entre dos orbitas terrestres para un satelite de observacion. La primera orbita tiene menor [[a]] y revisita la zona con mas frecuencia; la segunda tiene mayor [[a]] y ofrece una cobertura distinta, pero aumenta el periodo. Se necesita una estimacion rapida para decidir si el cambio de altura altera mucho la frecuencia de paso.

## Estimación física

Si ambas orbitas rodean la Tierra, comparten la misma [[M]] y por tanto la misma [[mu]]. La comparacion puede hacerse con [[a1]], [[a2]], [[T1]] y [[T2]] sin usar de nuevo [[G]]. Si el semieje mayor aumenta un 20%, el periodo no aumenta un 20%, sino por el factor 1,20 elevado a tres medios, aproximadamente 1,31. Esa diferencia puede ser decisiva para planificar ventanas de observacion.

La lectura areal tambien importa. Si la orbita elegida tiene [[e]] apreciable, el satelite no pasa con la misma rapidez por todas las zonas. Cerca del perigeo se mueve mas rapido y cerca del apogeo mas despacio. Por tanto, para cobertura no basta con saber [[T]]; tambien hay que entender como se reparte el tiempo dentro de la elipse.

## Interpretación

Kepler permite una primera decision tecnica sin simulacion completa: [[a]] controla el periodo, [[e]] controla la distribucion espacial y [[dA_dt]] explica el ritmo de paso. Si el objetivo es una estimacion rapida, las leyes son suficientes. Si el objetivo es planificar apuntado, comunicaciones o reentrada, el modelo ideal debe ampliarse con perturbaciones, rotacion terrestre, arrastre y restricciones operativas.
`;export{e as default};
