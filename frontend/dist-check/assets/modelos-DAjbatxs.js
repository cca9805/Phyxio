const e=`# Modelo físico

## Modelo ideal

El modelo ideal trata el espectro como una familia continua de ondas electromagneticas planas en el vacio. Cada radiacion queda identificada por [[f]] y [[lambda]], conectadas por [[c]]. La energia individual de cada cuanto se lee con [[E_foton]] y [[h]].

Este modelo separa region espectral de intensidad total. Clasifica la radiacion por frecuencia, longitud de onda y energia por foton, no por brillo, potencia de la fuente o numero de fotones emitidos.

## Hipótesis

Se supone propagacion en el vacio o aire como aproximacion, sin dispersion material relevante. Tambien se supone que la radiacion puede representarse con una frecuencia dominante, aunque en fuentes reales pueda haber bandas anchas.

La lectura cuantica elemental usa [[E_foton]] para un foton individual. No calcula potencia total, dosis ni flujo de fotones. Para eso harian falta magnitudes adicionales que pertenecen a otros leafs.

## Dominio de validez cuantitativo

El modelo es adecuado si la banda espectral es estrecha: por ejemplo, cuando la anchura relativa de frecuencia es menor que 10 %. Si la fuente tiene un espectro ancho, conviene usar una distribucion y no una sola [[f]].

Tambien es razonable si el medio no cambia apreciablemente la propagacion. En aire ordinario, muchas estimaciones usan [[c]] con error pequeño; en vidrio, agua o plasma, el error puede superar 1 % y debe considerarse un modelo de propagacion en medios.

## Señales de fallo del modelo

Una señal de fallo aparece cuando el problema habla de absorcion selectiva, indice de refraccion, dispersión cromatica o filtrado ancho. Entonces una sola longitud de onda ya no resume toda la situacion.

Otra señal aparece si se usa [[E_foton]] para decidir energia total entregada. La energia por foton no dice cuantos fotones llegan por segundo. Una fuente puede tener fotones poco energeticos y mucha potencia total.

## Modelo extendido o alternativo

Conviene cambiar de modelo cuando la pregunta ya no se responde con una frecuencia dominante en vacio. La transicion explicita ocurre si el medio es dispersivo, si la fuente tiene banda ancha, si se pide absorcion material detallada, o si importa intensidad, dosis o flujo de fotones.

El modelo extendido puede usar espectros de potencia, curvas de absorcion, indice dependiente de frecuencia o distribuciones de fotones. Ese enfoque es mas realista, pero oculta la idea basica si se introduce antes de dominar [[lambda]], [[f]] y [[E_foton]].

## Comparación operativa

El modelo ideal es el adecuado para clasificar regiones, convertir entre longitud de onda y frecuencia, y estimar energia por foton. Es rapido, claro y muestra por que el espectro forma una continuidad fisica.

El modelo extendido es necesario para instrumentos reales, materiales, filtros, fuentes termicas y riesgos biologicos. La regla practica es empezar por el modelo ideal y cambiar solo cuando el enunciado pida anchura espectral, medio material o potencia total.
`;export{e as default};
