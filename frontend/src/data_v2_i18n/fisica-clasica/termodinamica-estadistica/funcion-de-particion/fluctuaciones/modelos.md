## Modelo ideal

El modelo ideal es el conjunto canónico en equilibrio térmico. El sistema tiene microestados con [[energia_microestado]] definida, intercambia energía con un baño a [[temperatura]] fija y sus ocupaciones se resumen mediante la [[funcion_particion]]. En esta lectura, la [[energia_media]] procede de la pendiente de ln(Z), mientras que la [[varianza_energia]] procede de su curvatura frente a [[beta]]. La [[fluctuacion_energia]] convierte esa dispersión en una escala energética comparable con el promedio.

## Hipótesis

- Equilibrio térmico: si el sistema evoluciona mientras se mide, la [[varianza_energia]] mezcla relajación con fluctuación.
- Baño térmico grande: si el entorno no fija bien la [[temperatura]], [[beta]] deja de ser un parámetro estable.
- Microestados definidos: si las [[energia_microestado]] cambian de modelo a mitad del cálculo, la [[funcion_particion]] pierde coherencia.
- Volumen y composición constantes: si cambian, la [[capacidad_calorifica]] calculada ya no representa solo respuesta a [[temperatura]].
- Unidades compatibles: [[temperatura]] en K y energía en J; si no, la escala de [[constante_boltzmann]] se rompe.

## Dominio de validez cuantitativo

El modelo es razonable cuando [[temperatura]] > 0 K, [[beta]] > 0 J^-1 y [[varianza_energia]] ≥ 0. Para una lectura canónica suave, conviene que el cambio relativo de [[temperatura]] usado para derivadas sea pequeño, por ejemplo |Delta T|/T < 0,05. En sistemas macroscópicos, una fluctuación relativa [[fluctuacion_energia]]/[[energia_media]] mucho menor que 1 es esperable; si supera 1 sin tratarse de un sistema pequeño, hay que revisar el espectro o las unidades.

## Señales de fallo del modelo

Una [[varianza_energia]] negativa es una alarma inmediata. También falla la lectura si la [[capacidad_calorifica]] sale negativa en un sistema canónico ordinario sin justificar inestabilidad o cambio de conjunto. Otra señal aparece cuando ln(Z) no es derivable en el rango usado, por ejemplo cerca de una transición idealizada. Si la gráfica de [[derivada_segunda_log_particion_beta]] muestra saltos numéricos enormes sin causa física, el problema puede ser discretización o datos ruidosos.

## Modelo extendido o alternativo

Si el sistema no está en equilibrio, conviene usar modelos cinéticos o simulación temporal. Si el sistema es aislado, el conjunto microcanónico describe mejor la energía fija que el canónico. En sistemas pequeños, conviene conservar la distribución completa de energías en lugar de resumirla solo con [[energia_media]] y [[varianza_energia]]. Cerca de transiciones, puede ser necesario un modelo de tamaño finito.

## Comparación operativa

| Situación | Modelo adecuado | Lectura principal |
| Baño térmico estable | Canónico | [[varianza_energia]] desde curvatura de ln(Z) |
| Sistema aislado | Microcanónico | Energía fija, fluctuación de intercambio nula |
| Relajación temporal | Cinético | Evolución de la distribución |
| Sistema pequeño | Distribución completa | [[fluctuacion_energia]] comparable con [[energia_media]] |