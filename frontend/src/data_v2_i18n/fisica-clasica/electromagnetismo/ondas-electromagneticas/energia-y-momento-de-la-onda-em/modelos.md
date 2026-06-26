## Modelo ideal

El modelo ideal es una **onda electromagnetica plana, armonica y transversal** que se propaga en el vacio. Sus campos se describen mediante valores eficaces [[campo_electrico_eficaz]] y [[campo_magnetico_eficaz]], y el transporte se resume en la intensidad media [[intensidad_media_de_poynting]]. El modelo no intenta describir la estructura completa de la fuente; solo estudia un frente suficientemente lejos y suficientemente uniforme.

La interpretacion energetica se organiza con [[densidad_media_de_energia_electromagnetica]], que mide energia media por volumen, y con [[intensidad_media_de_poynting]], que mide potencia por area. La interpretacion mecanica aparece mediante [[densidad_de_momento_electromagnetico]] y [[p_rad]], siempre como modulos asociados al sentido de propagacion.

## Hipótesis

La primera hipotesis es que la onda puede tratarse como plana sobre la region observada. Eso exige que el area efectiva [[area_iluminada]] sea pequeña frente a la escala de variacion del haz. La segunda hipotesis es que el medio no introduce absorcion, dispersion ni reflexion interna relevante antes de que la onda alcance la superficie.

Tambien se supone incidencia normal cuando se usa [[p_rad]] de forma directa. Si la superficie esta inclinada, el area proyectada reemplaza a [[area_iluminada]]. Si hay reflexion especular importante, el empuje mecanico cambia porque el momento electromagnetico sale con direccion distinta.

## Dominio de validez cuantitativo

Como criterio practico, el modelo local es razonable si la intensidad no cambia mas de 10 % a lo largo del area iluminada. Para aplicaciones ordinarias, una condicion segura es [[intensidad_media_de_poynting]] < 1e6 W/m2 y una superficie absorbente sin calentamiento destructivo. En optica de precision o laser intenso, el limite puede ser mucho menor si el material se deforma o cambia su absorcion.

Para una lectura de presion clasica, [[p_rad]] debe ser pequeña frente a la presion mecanica dominante del montaje. Si [[p_rad]] > 1 Pa, conviene revisar si el regimen sigue siendo una onda clasica plana, si hay concentracion extrema o si el material ya no se comporta linealmente.

## Señales de fallo del modelo

El modelo empieza a fallar si el haz esta muy enfocado, si la intensidad varia mucho sobre [[area_iluminada]], si aparecen efectos no lineales del material o si la superficie refleja mas energia de la que absorbe. Tambien falla si se usa [[potencia_electromagnetica_incidente]] como si fuese una propiedad local de la onda, porque la potencia total depende del area interceptada.

Otra señal de fallo es obtener una presion comparable a cargas mecanicas ordinarias a partir de una iluminacion comun. En ese caso suele haberse omitido la escala [[velocidad_de_la_luz_en_el_vacio]] o se ha usado una intensidad que en realidad era potencia total.

## Modelo extendido o alternativo

El primer modelo extendido introduce reflectividad. Una superficie reflectante no solo absorbe momento; cambia la direccion del momento saliente, por lo que el empuje puede ser mayor que en absorcion ideal. Ese modelo necesita un coeficiente optico adicional y ya no queda descrito solo por [[intensidad_media_de_poynting]] y [[velocidad_de_la_luz_en_el_vacio]].

Conviene cambiar de modelo cuando la pregunta ya no se responde con absorcion normal, area efectiva uniforme y onda plana. La transicion explicita ocurre si la reflexion es dominante, si la incidencia es oblicua, si la intensidad varia mas de 10 % sobre [[area_iluminada]], o si el medio material reparte energia y momento con la materia.

Otro modelo extendido permite medios materiales. En un medio dispersivo, la velocidad relevante no siempre coincide con [[velocidad_de_la_luz_en_el_vacio]], y la energia puede repartirse entre campo y materia. Entonces [[densidad_media_de_energia_electromagnetica]], [[intensidad_media_de_poynting]] y [[densidad_de_momento_electromagnetico]] requieren definiciones mas cuidadosas.

## Comparación operativa

El modelo ideal es rapido, calculable y adecuado para entender la relacion entre energia, intensidad y presion. Es la eleccion correcta cuando el frente es uniforme y la superficie absorbe de forma simple. Su ventaja pedagogica es que separa tres preguntas: cuanta energia hay en el campo, cuanta cruza una superficie y cuanto empuje produce.

El modelo extendido es necesario cuando importa el material, la direccion de incidencia o la reflexion. Es mas realista, pero tambien introduce parametros que pueden ocultar el nucleo fisico. Por eso conviene empezar con el modelo ideal y ampliar solo cuando una señal de fallo lo exija.